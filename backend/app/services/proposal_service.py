from groq import Groq
import json

from app.core.config import GROQ_API_KEY


client = Groq(api_key=GROQ_API_KEY)


def generate_proposal(
    rfp_analysis: dict,
    bid_memory: dict
) -> dict:

    prompt = f"""
Generate a concise enterprise proposal using ONLY the supplied RFP analysis
and historical BidMemory.

Do not invent client facts, deadlines, certifications, pricing, projects,
technologies, or other unsupported information.

If information is unavailable, use:
"Additional information is required."

Return ONLY valid JSON with exactly these fields:

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

Rules:
- executive_summary must be a string.
- All other fields must be arrays of strings.
- Keep each array concise.
- Do not use markdown.
- Do not add fields.

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
                "content": "Return only valid JSON matching the requested structure."
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
        max_tokens=1600
    )

    content = response.choices[0].message.content

    if not content:
        raise RuntimeError(
            "Proposal generation returned empty response."
        )

    proposal = json.loads(content)

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

    summary = proposal.get("executive_summary", "")

    if isinstance(summary, list):
        summary = " ".join(str(x) for x in summary)
    elif not isinstance(summary, str):
        summary = str(summary)

    proposal["executive_summary"] = summary

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

        proposal[field] = [
            str(item) for item in proposal[field]
        ]

    return proposal