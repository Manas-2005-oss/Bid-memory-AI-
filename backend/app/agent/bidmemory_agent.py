from app.agent.tools import (
    recall_bid_memory,
    reflect_bid_memory,
    find_relevant_cases,
)


class BidMemoryAgent:

    async def analyze(self, rfp_analysis: dict) -> dict:
        """
        Analyze a new RFP using historical bid memory.
        """

        title = rfp_analysis.get(
            "title",
            "Unknown RFP"
        )

        industry = rfp_analysis.get(
            "industry",
            "Unknown industry"
        )

        requirements = rfp_analysis.get(
            "mandatory_requirements",
            []
        )

        # Keep requirements small to reduce token usage
        requirements = requirements[:10]

        # -----------------------------------------
        # STEP 1: Recall relevant historical bids
        # -----------------------------------------

        recall_query = f"""
Find relevant historical bid experiences.

Title: {title}
Industry: {industry}
Requirements: {requirements}

Focus on:
- similar projects
- successful approaches
- risks
- lessons learned
- implementation strategies

Return only the most relevant information.
Keep the response concise.
"""

        memories = await recall_bid_memory(
            recall_query
        )

        # -----------------------------------------
        # STEP 2: Reflect on historical experience
        # -----------------------------------------

        reflection_query = f"""
Analyze historical bid experiences relevant to this RFP.

Title: {title}
Industry: {industry}
Requirements: {requirements}

Identify:

1. Useful previous approaches
2. Important risks
3. Reusable implementation strategies
4. Requirements needing special attention

Use only retrieved historical information.
Do not invent facts.
Keep the response concise.
"""

        reflection = await reflect_bid_memory(
            reflection_query
        )

        # -----------------------------------------
        # STEP 3: Find relevant historical cases
        # -----------------------------------------

        relevant_cases = find_relevant_cases(
            industry
        )

        # -----------------------------------------
        # STEP 4: Return BidMemory result
        # -----------------------------------------

        return {
            "rfp_title": title,
            "industry": industry,
            "historical_memories": memories,
            "bid_insights": reflection,
            "relevant_historical_cases": relevant_cases,
        }