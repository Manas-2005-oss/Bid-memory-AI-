from fastapi import APIRouter, HTTPException

from app.services.proposal_service import generate_proposal


router = APIRouter(
    prefix="/api/proposal",
    tags=["Proposal"]
)


@router.post("/generate")
async def create_proposal(payload: dict):

    rfp_analysis = payload.get("rfp_analysis")
    bid_memory = payload.get("bid_memory")

    if not rfp_analysis:
        raise HTTPException(
            status_code=400,
            detail="rfp_analysis is required"
        )

    if not bid_memory:
        raise HTTPException(
            status_code=400,
            detail="bid_memory is required"
        )

    proposal = generate_proposal(
        rfp_analysis,
        bid_memory
    )

    return {
        "message": "Proposal generated successfully",
        "proposal": proposal
    }