import { api } from "./api";

export const memoryService = {
  async getAll(params = {}) {
    const query = new URLSearchParams(params).toString();

    return api.get(
      `/api/memory${query ? `?${query}` : ""}`
    );
  },

  async search(query) {
    return api.get(
      `/api/memory/search?q=${encodeURIComponent(query)}`
    );
  },

  async getById(id) {
    return api.get(`/api/memory/${id}`);
  },

  async getEvidence(id) {
    return api.get(`/api/memory/${id}/evidence`);
  },

  async getPatterns() {
    return api.get("/api/memory/patterns");
  },
};