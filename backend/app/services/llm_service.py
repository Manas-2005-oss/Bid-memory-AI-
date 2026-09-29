import json
from groq import Groq

from app.core.config import GROQ_API_KEY


client = Groq(api_key=GROQ_API_KEY)


def analyze_rfp(rfp_text: str) -> dict:

    response = client.chat.completions.create(
        model="openai/gpt-oss-20b",

        messages=[
            {
                "role": "system",
                "content": """
You are an expert RFP analysis assistant.

Analyze the provided RFP and extract only information
that is explicitly present in the document.

Do not invent missing information.
If something is not present, return an empty string or empty list.

Identify:
- RFP title
- RFP ID
- organization
- industry
- deadline
- project duration
- contract type
- project background
- scope of work
- mandatory requirements
- evaluation criteria
- expected proposal sections
- important risks or constraints
"""
            },
            {
                "role": "user",
                "content": rfp_text
            }
        ],

        response_format={
            "type": "json_schema",
            "json_schema": {
                "name": "rfp_analysis",
                "strict": True,
                "schema": {
                    "type": "object",

                    "properties": {
                        "title": {
                            "type": "string"
                        },
                        "rfp_id": {
                            "type": "string"
                        },
                        "organization": {
                            "type": "string"
                        },
                        "industry": {
                            "type": "string"
                        },
                        "deadline": {
                            "type": "string"
                        },
                        "project_duration": {
                            "type": "string"
                        },
                        "contract_type": {
                            "type": "string"
                        },
                        "background": {
                            "type": "string"
                        },
                        "scope_of_work": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        "mandatory_requirements": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        "evaluation_criteria": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        "proposal_sections": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        "risks_constraints": {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        }
                    },

                    "required": [
                        "title",
                        "rfp_id",
                        "organization",
                        "industry",
                        "deadline",
                        "project_duration",
                        "contract_type",
                        "background",
                        "scope_of_work",
                        "mandatory_requirements",
                        "evaluation_criteria",
                        "proposal_sections",
                        "risks_constraints"
                    ],

                    "additionalProperties": False
                }
            }
        },

        temperature=0
    )

    content = response.choices[0].message.content

    return json.loads(content)