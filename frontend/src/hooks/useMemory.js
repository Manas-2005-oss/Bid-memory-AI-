import { useEffect, useState } from "react";
import { memoryService } from "../services/memoryService";
import { DEMO_MODE } from "../services/api";
import { demoMemory } from "../data/demoData";

export function useMemory() {
  const [memory, setMemory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function loadMemory() {
      try {
        setLoading(true);

        if (DEMO_MODE) {
          if (mounted) {
            setMemory(demoMemory);
          }
          return;
        }

        const data = await memoryService.getAll();

        if (mounted) {
          setMemory(data);
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

    loadMemory();

    return () => {
      mounted = false;
    };
  }, []);

  return {
    memory,
    loading,
    error,
  };
}