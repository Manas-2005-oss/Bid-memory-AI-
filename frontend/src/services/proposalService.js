import { api } from "./api";

export const proposalService = {
  async generate(data) {
    return api.post(
      "/api/proposal/generate",
      data
    );
  },

  async getById(id) {
    return api.get(`/api/proposal/${id}`);
  },

  async accept(data) {
    return api.post(
      "/api/proposal/accept",
      data
    );
  },

  async regenerate(data) {
    return api.post(
      "/api/proposal/regenerate",
      data
    );
  },
};