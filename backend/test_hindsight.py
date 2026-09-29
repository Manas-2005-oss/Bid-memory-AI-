import asyncio

from app.services.hindsight_service import (
    recall_memory,
    reflect_memory,
)


async def main():

    print("\n" + "=" * 60)
    print("TEST 1: HEALTHCARE CLOUD RECALL")
    print("=" * 60)

    healthcare = await recall_memory(
        """
        Find historical bid experiences related to healthcare,
        Azure cloud migration, security, compliance,
        disaster recovery, and implementation timelines.
        """
    )

    for memory in healthcare:
        print("\n--- MEMORY ---")
        print("Type:", memory.get("type"))
        print("Score:", memory.get("score"))
        print("Text:", memory.get("text"))


    print("\n" + "=" * 60)
    print("TEST 2: GOVERNMENT SMART CITY RECALL")
    print("=" * 60)

    government = await recall_memory(
        """
        Find historical bid experiences involving government
        smart city platforms, modular services, API integrations,
        phased rollouts, and multi-stakeholder implementation.
        """
    )

    for memory in government:
        print("\n--- MEMORY ---")
        print("Type:", memory.get("type"))
        print("Score:", memory.get("score"))
        print("Text:", memory.get("text"))


    print("\n" + "=" * 60)
    print("TEST 3: BID REFLECTION")
    print("=" * 60)

    reflection = await reflect_memory(
        """
        We are preparing a new healthcare cloud modernization
        proposal.

        Based only on relevant historical bid experiences stored
        in BidMemory:

        1. What approaches worked previously?
        2. What risks should we consider?
        3. What implementation strategies can be reused?
        4. What requirements deserve special attention?

        Do not invent historical facts.
        """
    )

    print("\nANSWER:\n")
    print(reflection["answer"])

    print("\nBASED ON:\n")

    for memory in reflection["based_on"]:
        print("\n-", memory)


if __name__ == "__main__":
    asyncio.run(main())