import { api } from "./api";

export const rfpService = {
  async getAll() {
    return api.get("/api/rfp");
  },

  async getById(id) {
    return api.get(`/api/rfp/${id}`);
  },

  async analyze(data) {
    return api.post("/api/rfp/analyze", data);
  },

  async create(data) {
    return api.post("/api/rfp", data);
  },

  async upload(file) {
    const formData = new FormData();
    formData.append("file", file);

    return api.upload("/api/rfp/upload", formData);
  },
};