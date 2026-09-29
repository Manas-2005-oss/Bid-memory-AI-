import { useEffect, useState } from "react";
import { rfpService } from "../services/rfpService";
import { DEMO_MODE } from "../services/api";
import { demoBids } from "../data/demoData";

export function useRFP() {
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function loadBids() {
      try {
        setLoading(true);

        if (DEMO_MODE) {
          if (mounted) {
            setBids(demoBids);
          }
          return;
        }

        const data = await rfpService.getAll();

        if (mounted) {
          setBids(data);
        }
      } catch (err) {
        if (mounted) {
          setError(err.message);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadBids();

    return () => {
      mounted = false;
    };
  }, []);

  return {
    bids,
    loading,
    error,
  };
}