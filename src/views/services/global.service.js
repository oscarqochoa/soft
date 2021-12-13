import { amgApi } from "@/service/axios";

class GlobalService {
  async getPrograms(params) {
    try {
      const { data } = await amgApi.get("/programs");
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new GlobalService();
