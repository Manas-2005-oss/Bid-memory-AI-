import asyncio
from pathlib import Path

from app.services.hindsight_service import HindsightService


HISTORICAL_CASES_DIR = (
    Path(__file__).parent / "data" / "historical_cases"
)


async def ingest_historical_cases():

    pdf_files = sorted(
        HISTORICAL_CASES_DIR.glob("*.pdf")
    )

    if not pdf_files:
        print("No historical case PDFs found.")
        return

    print(f"Found {len(pdf_files)} historical cases.\n")

    service = HindsightService()

    try:
        for pdf_file in pdf_files:

            print("=" * 60)
            print(f"Uploading: {pdf_file.name}")

            result = await service.client.aretain_files(
                bank_id=service.bank_id,
                files=[pdf_file],
                context=(
                    "Historical bid case for BidMemory. "
                    "Use this document as prior bid experience "
                    "for future RFP analysis."
                ),
            )

            print("Uploaded successfully.")
            print("Operation IDs:", result.operation_ids)

    finally:
        await service.close()

    print("\n" + "=" * 60)
    print("Historical case upload completed.")
    print("Hindsight will process the PDF files asynchronously.")


if __name__ == "__main__":
    asyncio.run(ingest_historical_cases())