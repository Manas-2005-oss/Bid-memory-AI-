from app.utils.pdf_parser import extract_text_from_pdf
from app.services.llm_service import analyze_rfp
from app.services.proposal_service import generate_proposal
from app.agent.bidmemory_agent import BidMemoryAgent


async def process_rfp(file_bytes: bytes) -> dict:
    # 1. Extract text from PDF
    text = extract_text_from_pdf(file_bytes)

    # 2. Analyze RFP using LLM
    # analyze_rfp() is SYNCHRONOUS, so do NOT use await
    analysis = analyze_rfp(text)

    # 3. Retrieve relevant historical bid experience
    agent = BidMemoryAgent()
    bid_memory = await agent.analyze(analysis)

    # 4. Generate proposal using RFP analysis + BidMemory
    # generate_proposal() is SYNCHRONOUS, so do NOT use await
    proposal = generate_proposal(
        analysis,
        bid_memory
    )

    # 5. Return complete pipeline result
    return {
        "extracted_text": text,
        "analysis": analysis,
        "bid_memory": bid_memory,
        "proposal": proposal,
    }