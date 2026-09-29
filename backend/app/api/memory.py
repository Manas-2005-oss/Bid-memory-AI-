from fastapi import APIRouter

from app.services.hindsight_service import (
    create_memory_bank,
    retain_memory,
    recall_memory,
    reflect_memory,
)

router = APIRouter(
    prefix="/api/memory",
    tags=["Memory"]
)


@router.post("/setup")
def setup_memory():
    return create_memory_bank()


@router.post("/test")
async def test_memory():

    await retain_memory(
        """
        Previous healthcare Azure proposal:
        The proposal performed well because it included a detailed
        security architecture, migration timeline, disaster recovery
        plan, and clear compliance approach. The client gave positive
        feedback about the implementation timeline and security section.
        The bid outcome was successful.
        """,
        context="Historical healthcare RFP experience"
    )

    recalled = await recall_memory(
        "What worked well in previous healthcare Azure proposals?"
    )

    reflected = await reflect_memory(
        "What lessons should we apply when preparing a new healthcare Azure proposal?"
    )

    return {
        "recalled_memories": recalled,
        "reflection": reflected
    }