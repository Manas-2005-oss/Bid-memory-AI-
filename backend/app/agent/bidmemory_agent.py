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

        # -----------------------------------------
        # STEP 1: Recall relevant historical bids
        # -----------------------------------------

        recall_query = f"""
        Find historical bid experiences relevant to this new RFP.

        RFP:
        {title}

        Industry:
        {industry}

        Mandatory requirements:
        {requirements}

        Focus on:
        - similar projects
        - successful approaches
        - risks
        - lessons learned
        - implementation strategies
        """

        memories = await recall_bid_memory(
            recall_query
        )

        # -----------------------------------------
        # STEP 2: Reflect on historical experience
        # -----------------------------------------

        reflection_query = f"""
        A new RFP titled "{title}" is being prepared
        for the {industry} industry.

        Mandatory requirements:
        {requirements}

        Based on the historical bid experiences stored
        in BidMemory, identify the lessons that are
        relevant to this RFP.

        Explain:

        1. What previous approaches worked
        2. What risks should be considered
        3. What implementation strategies could be reused
        4. What requirements deserve special attention

        Base the answer on the retrieved historical
        experiences rather than inventing historical facts.
        """

        reflection = await reflect_bid_memory(
            reflection_query
        )

        relevant_cases = find_relevant_cases(industry)

        # -----------------------------------------
        # STEP 3: Return agent result
        # -----------------------------------------

        return {
            "rfp_title": title,
            "industry": industry,
            "historical_memories": memories,
            "bid_insights": reflection,
            "relevant_historical_cases": relevant_cases,
        }