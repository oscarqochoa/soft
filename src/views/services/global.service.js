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

  async getCountrys(params) {
    try {
      const { data } = await amgApi.post("/view-countrys");
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new GlobalService();
