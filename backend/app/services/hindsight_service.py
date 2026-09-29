import os
from dotenv import load_dotenv
from hindsight_client import Hindsight

load_dotenv()


class HindsightService:

    def __init__(self):
        self.client = Hindsight(
            base_url=os.getenv(
                "HINDSIGHT_API_URL",
                "https://api.hindsight.vectorize.io"
            ),
            api_key=os.getenv("HINDSIGHT_API_KEY"),
        )

        self.bank_id = os.getenv("HINDSIGHT_BANK_ID")

    async def retain(self, content: str, context: str = "BidMemory"):
        return await self.client.aretain(
            bank_id=self.bank_id,
            content=content,
            context=context,
        )

    async def recall(self, query: str):
        result = await self.client.arecall(
            bank_id=self.bank_id,
            query=query,
            budget="mid",
        )

        return [
            {
                "text": memory.text,
                "type": memory.type,
                "score": getattr(memory, "score", None),
            }
            for memory in result.results
        ]

    async def reflect(self, query: str):
        result = await self.client.areflect(
            bank_id=self.bank_id,
            query=query,
            budget="mid",
        )

        return {
            "answer": result.text,
            "based_on": [
                memory.text
                for memory in (
                    result.based_on.memories
                    if result.based_on
                    else []
                )
            ],
        }

    async def close(self):
        await self.client.aclose()


# --------------------------------------------------
# Module-level functions
# --------------------------------------------------

async def retain_memory(
    content: str,
    context: str = "BidMemory"
):
    service = HindsightService()

    try:
        return await service.retain(
            content=content,
            context=context,
        )
    finally:
        await service.close()


async def recall_memory(query: str):
    service = HindsightService()

    try:
        return await service.recall(query)
    finally:
        await service.close()


async def reflect_memory(query: str):
    service = HindsightService()

    try:
        return await service.reflect(query)
    finally:
        await service.close()


def create_memory_bank():
    """
    BidMemory bank is already created in Hindsight.
    This endpoint simply verifies the configured bank.
    """

    bank_id = os.getenv("HINDSIGHT_BANK_ID")

    if not bank_id:
        return {
            "status": "error",
            "message": "HINDSIGHT_BANK_ID is not configured"
        }

    return {
        "status": "success",
        "message": "BidMemory Hindsight bank is configured",
        "bank_id": bank_id
    }