import { amgApi } from "@/service/axios";

class CommissionsService {
  async searchCommissions(params) {
    try {
      const { data } = await amgApi.post("/getreportcommissionsad", params);
      return data;
    } catch (error) {
      throw error;
    }
  }
  async searchCommissionsDepartments(params) {
    try {
      const { data } = await amgApi.post(
        "/get-report-commission-department",
        params
      );
      return data;
    } catch (error) {
      throw error;
    }
  }
  async updatePercentage(params) {
    try {
      const { data } = await amgApi.post(
        "/change-percentage-to-pay-crm",
        params
      );
      return data;
    } catch (error) {
      throw error;
    }
  }
  async getDepartmentPercentage(params) {
    try {
      const { data } = await amgApi.post("/percentage-department", params);
      return data;
    } catch (error) {
      throw error;
    }
  }
  async searchCommissionsUserCrm(params) {
    try {
      const { data } = await amgApi.post("/getcommissions", params);
      return data;
    } catch (error) {
      throw error;
    }
  }
  async searchCommissionsUserAdm(params) {
    try {
      const { data } = await amgApi.post("/getcommissionsad", params);
      return data;
    } catch (error) {
      console.log("Something went wrong on Commissions:", error);
      throw error;
    }
  }
  async searchCommissionsUserDepartment(params) {
    try {
      const { data } = await amgApi.post("/getcommissionsprogram", params);
      return data;
    } catch (error) {
      throw error;
    }
  }
  async searchCommissionsApprove(params) {
    try {
      const { data } = await amgApi.post("/searchapprovecommissions", params);
      return data;
    } catch (error) {
      throw error;
    }
  }
  async anullComissions(params) {
    try {
      const { data } = await amgApi.post("/anullcommissions", params);
      return data;
    } catch (error) {
      throw error;
    }
  }
  async approveCommissions(params) {
    try {
      const { data } = await amgApi.post("/approvecommissions", params);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new CommissionsService();
