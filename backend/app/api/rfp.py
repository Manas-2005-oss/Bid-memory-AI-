from fastapi import APIRouter, UploadFile, File, HTTPException

from app.services.rfp_service import process_rfp


router = APIRouter(
    prefix="/api/rfp",
    tags=["RFP"]
)


@router.post("/upload")
async def upload_rfp(file: UploadFile = File(...)):

    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are supported"
        )

    file_bytes = await file.read()

    result = await process_rfp(file_bytes)

    return {
        "filename": file.filename,
        "message": "RFP uploaded successfully",
        "data": result
    }