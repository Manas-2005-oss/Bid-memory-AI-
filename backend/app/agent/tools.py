import json
from pathlib import Path

from app.services.hindsight_service import HindsightService


async def recall_bid_memory(query: str):
    hindsight = HindsightService()

    try:
        return await hindsight.recall(query)
    finally:
        await hindsight.close()


async def reflect_bid_memory(query: str):
    hindsight = HindsightService()

    try:
        return await hindsight.reflect(query)
    finally:
        await hindsight.close()


async def retain_bid_memory(
    content: str,
    context: str = "BidMemory"
):
    hindsight = HindsightService()

    try:
        return await hindsight.retain(
            content=content,
            context=context,
        )
    finally:
        await hindsight.close()


def find_relevant_cases(industry: str):
    json_path = (
        Path(__file__).resolve().parents[2]
        / "historical_cases.json"
    )

    if not json_path.exists():
        return []

    with open(json_path, "r", encoding="utf-8") as f:
        cases = json.load(f)

    industry_lower = industry.lower()

    relevant = []

    for case in cases:
        case_industry = case.get("industry", "").lower()

        if (
            industry_lower in case_industry
            or case_industry in industry_lower
        ):
            relevant.append(case)

    return relevant