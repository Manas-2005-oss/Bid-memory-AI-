from groq import Groq
import json

from app.core.config import GROQ_API_KEY


client = Groq(api_key=GROQ_API_KEY)


def generate_proposal(
    rfp_analysis: dict,
    bid_memory: dict
) -> dict:

    prompt = f"""
You are an enterprise proposal-writing assistant.

Generate a proposal plan using ONLY the supplied RFP analysis
and historical BidMemory.

DO NOT invent:
- client facts
- project facts
- deadlines
- certifications
- pricing
- previous projects
- technologies not supported by the input

If information is unavailable, say:
"Additional information is required."

Return ONLY valid JSON.

The JSON MUST contain exactly these fields:

{{
  "executive_summary": "string",
  "understanding_of_requirements": ["string"],
  "proposed_solution": ["string"],
  "technical_approach": ["string"],
  "implementation_approach": ["string"],
  "security_compliance": ["string"],
  "risk_considerations": ["string"],
  "support_maintenance": ["string"],
  "historical_lessons": ["string"],
  "recommendations": ["string"]
}}

IMPORTANT:
- executive_summary MUST be a STRING, never an array.
- Every other field MUST be an ARRAY of STRINGS.
- Include every field.
- Do not use markdown.
- Do not add extra fields.

RFP ANALYSIS:
{json.dumps(rfp_analysis, ensure_ascii=False)}

HISTORICAL BID MEMORY:
{json.dumps(bid_memory, ensure_ascii=False)}
"""

    response = client.chat.completions.create(
        model="openai/gpt-oss-20b",

        messages=[
            {
                "role": "system",
                "content": (
                    "Return only valid JSON. "
                    "Follow the requested field types exactly."
                )
            },
            {
                "role": "user",
                "content": prompt
            }
        ],

        response_format={
            "type": "json_object"
        },

        temperature=0,
        max_tokens=3000
    )

    content = response.choices[0].message.content

    if not content:
        raise RuntimeError("Proposal generation returned empty response.")

    proposal = json.loads(content)

    # --------------------------------------------------
    # Normalize output so frontend always receives
    # the same structure
    # --------------------------------------------------

    array_fields = [
        "understanding_of_requirements",
        "proposed_solution",
        "technical_approach",
        "implementation_approach",
        "security_compliance",
        "risk_considerations",
        "support_maintenance",
        "historical_lessons",
        "recommendations",
    ]

    # executive_summary must be a string
    summary = proposal.get("executive_summary", "")

    if isinstance(summary, list):
        summary = " ".join(str(x) for x in summary)

    elif not isinstance(summary, str):
        summary = str(summary)

    proposal["executive_summary"] = summary


    # Every remaining field must be a list
    for field in array_fields:

        value = proposal.get(field)

        if value is None:
            proposal[field] = [
                "Additional information is required."
            ]

        elif isinstance(value, str):
            proposal[field] = [value]

        elif not isinstance(value, list):
            proposal[field] = [str(value)]

        # Make sure list items are strings
        proposal[field] = [
            str(item) for item in proposal[field]
        ]

    return proposal