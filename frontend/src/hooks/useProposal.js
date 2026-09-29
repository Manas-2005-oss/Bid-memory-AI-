import { useState } from "react";
import { proposalService } from "../services/proposalService";
import { DEMO_MODE } from "../services/api";

export function useProposal() {
  const [proposal, setProposal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function generate(data) {
    try {
      setLoading(true);
      setError(null);

      if (DEMO_MODE) {
        const demoProposal = {
          title: "AI-generated proposal response",
          confidence: 91,
          sources: 6,
          content:
            "This is a demo proposal response generated from company memory.",
        };

        setProposal(demoProposal);
        return demoProposal;
      }

      const result = await proposalService.generate(data);

      setProposal(result);

      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return {
    proposal,
    loading,
    error,
    generate,
  };
}