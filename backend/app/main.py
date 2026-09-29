from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.memory import router as memory_router
from app.api.rfp import router as rfp_router
from app.api.proposal import router as proposal_router


app = FastAPI(
    title="BidMemory API",
    description="AI-powered RFP Response Agent",
    version="1.0.0",
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://bid-memory-ai.vercel.app",
        "http://localhost:5173",
    ],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(rfp_router)
app.include_router(memory_router)
app.include_router(proposal_router)


@app.get("/api/health")
def health_check():
    return {
        "status": "ok",
        "service": "BidMemory Backend",
    }