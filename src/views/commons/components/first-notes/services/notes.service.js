import { amgApi } from "@/service/axios";

class NotesService {
  async getListTypeGoal() {
    try {
      const { data } = await amgApi.get("/listtypegoal");
      return data;
    } catch (error) {
      throw error;
    }
  }
  async insertFirstNote(params) {
    try {
      const { data } = await amgApi.post("/insertfirstnote", params);
      return data;
    } catch (error) {
      throw error;
    }
  }
  async getFirstNote(params) {
    try {
      const { data } = await amgApi.post("/getfirstnote", params);
      return data;
    } catch (error) {
      throw error;
    }
  }
  async updateFirstNote(params) {
    try {
      const { data } = await amgApi.post("/updatefirstnote", params);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new NotesService();
