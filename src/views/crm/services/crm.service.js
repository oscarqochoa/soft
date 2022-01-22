import { amgApi } from "@/service/axios";

const DEFAULT_BODY_GET_SELLERS_CRM = {
  roles: "[1,2,5]",
  type: "1",
};
const DEFAULT_BODY_GET_CAPTURED_CRM = {
  roles: "[]",
  type: "1",
};
class CrmService {
  async getLeads(body) {
    try {
      const { data } = await amgApi.post("/searchleads", body);
      return data;
    } catch (error) {
      console.log("Something went wrong on getLeads:", error);
      throw error;
    }
  }

  async getSellersCrm(module = 2, body = DEFAULT_BODY_GET_SELLERS_CRM) {
    // eslint-disable-next-line no-undef
    let data = await amgApi.post(`/commons/sellerall/${module}`, body);
    data = data.data;
    return data;
  }

  async getCapturedCrm(module = 2, body = DEFAULT_BODY_GET_CAPTURED_CRM) {
    // eslint-disable-next-line no-undef
    let data = await amgApi.post(`/commons/commons/sellerall/${module}`, body);
    data = data.data;
    return data;
  }

  async getLeadsSn(body) {
    try {
      const { data } = await amgApi.post(
        "/lead/social-network/search-leads-recovery",
        body
      );
      return data;
    } catch (error) {
      console.log("Something went wrong on getLeadsSn:", error);
      throw error;
    }
  }

  async getStatusLeads(params) {
    try {
      const { data } = await amgApi.get("/leadstatus", { params });
      return data;
    } catch (error) {
      console.log("Something went wrong on getStatusLeads:", error);
      throw error;
    }
  }

  async getStateLeads(params) {
    try {
      const { data } = await amgApi.get("/leads/get-state-leads", { params });
      return data;
    } catch (error) {
      console.log("Something went wrong on getStateLeads:", error);
      throw error;
    }
  }

  async getSourceLeads(params) {
    try {
      const { data } = await amgApi.get("/get-lead-sources", { params });
      return data;
    } catch (error) {
      console.log("Something went wrong on getSourceLeads:", error);
      throw error;
    }
  }

  async getOwners({ modul, body }) {
    try {
      const { data } = await amgApi.post("/usermodule/2", body);
      return data;
    } catch (error) {
      console.log("Something went wrong on getOwners:", error);
      throw error;
    }
  }

  async getSourceNames(params) {
    try {
      const { data } = await amgApi.get("/commons/get-sources-names", {
        params,
      });
      return data;
    } catch (error) {
      console.log("Something went wrong on getSourceNames:", error);
      throw error;
    }
  }

  async getPrograms(params) {
    try {
      const { data } = await amgApi.get("/programs", { params });
      return data;
    } catch (error) {
      console.log("Something went wrong on getPrograms:", error);
      throw error;
    }
  }

  async getStates(body) {
    try {
      const { data } = await amgApi.post("/lead/get-states", body);
      return data;
    } catch (error) {
      console.log("Something went wrong on getStates:", error);
      throw error;
    }
  }

  async getStatesEeuu(params) {
    try {
      const { data } = await amgApi.get("/commons/get-eeuu-states", { params });
      return data;
    } catch (error) {
      console.log("Something went wrong on getStatesEeuu:", error);
      throw error;
    }
  }

  async getAlgo() {
    // eslint-disable-next-line no-undef
    const data = await amgApi.get("/welcome/welcome");
    return data;
  }

  async getListCards(body) {
    try {
      const { data } = await amgApi.post("/getlistcards", body);
      return data;
    } catch (error) {
      console.log("Something went wrong on getListCards:", error);
      throw error;
    }
  }

  async getSaleAnnul(body, page) {
    try {
      const { data } = await amgApi.post(
        `/sales-made/search-sale-annul?page=${page}`,
        body
      );
      return data;
    } catch (error) {
      console.error("Something went wrong on getListCards:", error);
      throw error;
    }
  }

  async getLeadsFiles(body) {
    try {
      const { data } = await amgApi.post(
        "/sales-made/get-all-files-lead",
        body
      );
      return data;
    } catch (error) {
      console.error("Something went wrong on getLeadsFiles:", error);
      throw error;
    }
  }

  async getLeadsFilesAccount(body) {
    try {
      const { data } = await amgApi.post("/listfilesaccount", body);
      return data;
    } catch (error) {
      console.error("Something went wrong on getLeadsFiles:", error);
      throw error;
    }
  }

  async generatePdf(body) {
    try {
      const { data } = await amgApi.post("/sales-made/generate-pdf", body);
      return data;
    } catch (error) {
      console.error("Something went wrong on generatePdf:", error);
      throw error;
    }
  }

  async deleteFile(body) {
    try {
      const { data } = await amgApi.post("/sales-made/delete-file", body);
      return data;
    } catch (error) {
      console.error("Something went wrong on getLeadsFiles:", error);
      throw error;
    }
  }

  async getSaleMade(body, page) {
    try {
      const { data } = await amgApi.post(`/salemade?page=${page}`, body);
      data.data.map((d) => {
        d.selected = false;
        d.editFee = false;
        d.editCaptured = false;
        d.editSeller = false;
        d.sellerNew = 0;
        d.capturedNew = d.captured_id;
        d.feeNew = d.fee;
      });
      return data;
    } catch (error) {
      console.error("Something went wrong on getSaleMade:", error);
      throw error;
    }
  }

  async getCountries(body) {
    try {
      const { data } = await amgApi.post("/commons/get-world-countrys", body);
      return data;
    } catch (error) {
      console.log("Something went wrong on getCountries:", error);
      throw error;
    }
  }

  async getUserCreatorOwner(body) {
    try {
      const { data } = await amgApi.post(
        `/commons/sellerall/${body.modul}`,
        body
      );
      return data;
    } catch (error) {
      console.log("Something went wrong on getUserCreatorOwner:", error);
      throw error;
    }
  }

  async postUniqueMobile(body) {
    try {
      const { data } = await amgApi.post("/uniquemobile", body);
      return data;
    } catch (error) {
      console.log("Something went wrong on postUniqueMobile:", error);
      throw error;
    }
  }

  async postRequestLead(body) {
    try {
      const { data } = await amgApi.post(
        "/lead/social-network/request-lead",
        body
      );
      return data;
    } catch (error) {
      console.log("Something went wrong on postRequestLead:", error);
      throw error;
    }
  }

  async postCreateLead(body) {
    try {
      const data = await amgApi.post("/leadscreate", body);
      return data;
    } catch (error) {
      console.log("Something went wrong on postCreateLead:", error);
    }
  }

  async getSources() {
    let data = await amgApi.get("/commons/get-sources-names");
    data = data.data;
    return data;
  }

  async postDeleteLead(body) {
    try {
      const data = await amgApi.post("/leaddelete", body);
      return data;
    } catch (error) {
      console.log("Something went wrong on postDeleteLead:", error);
      throw error;
    }
  }

  async postProcessLead(body) {
    try {
      const data = await amgApi.post("/process-lead-sn", body);
      return data;
    } catch (error) {
      console.log("Something went wrong on postProcessLead:", error);
      throw error;
    }
  }

  async getAllQuicksSms(body) {
    try {
      const { data } = await amgApi.post("/allquickssms", body);
      return data;
    } catch (error) {
      console.log("Something went wrong on getAllQuicksSms:", error);
      throw error;
    }
  }

  async postSaveQuickSms(body) {
    try {
      const data = await amgApi.post("/savequicksms", body);
      return data;
    } catch (error) {
      console.log("Something went wrong on postSaveQuickSms:", error);
      throw error;
    }
  }

  async postDeleteQuickSms(body) {
    try {
      const data = await amgApi.post("/api/messages/delete-quick", body);
      return data;
    } catch (error) {
      console.log("Something went wrong on postDeleteQuickSms:", error);
      throw error;
    }
  }

  async postHistorySmsLead(body) {
    try {
      const data = await amgApi.post("/api/allsmshistorylead", body);
      return data;
    } catch (error) {
      console.log("Something went wrong on postHistorySmsLead:", error);
      throw error;
    }
  }

  async getCapturedByTracking(body) {
    try {
      const { data } = await amgApi.post("/alltrackingcapt", body);
      return data;
    } catch (error) {
      console.error("Something went wrong on getCapturedByTracking:", error);
      throw error;
    }
  }

  async getSellerTracking(body) {
    try {
      const { data } = await amgApi.post("/sales-made/get-history-sale", body);
      return data;
    } catch (error) {
      console.error("Something went wrong on getSellerTracking:", error);
      throw error;
    }
  }

  async getFeeTracking(body) {
    try {
      const { data } = await amgApi.post("/alltrackingfee", body);
      return data;
    } catch (error) {
      console.error("Something went wrong on getSellerTracking:", error);
      throw error;
    }
  }

  async saveNewCaptured(body) {
    try {
      return await amgApi.post("/savenewcapt", body);
    } catch (error) {
      console.error("Something went wrong on getSellerTracking:", error);
      throw error;
    }
  }

  async saveNewSeller(body) {
    try {
      return await amgApi.post("/sales-made/edit-seller-user", body);
    } catch (error) {
      console.error("Something went wrong on getSellerTracking:", error);
      throw error;
    }
  }

  async saveNewFee(body) {
    try {
      return await amgApi.post("/savenewfee", body);
    } catch (error) {
      console.error("Something went wrong on saveNewFee:", error);
      throw error;
    }
  }

  async postUserAppointmentSn(body) {
    try {
      const data = await amgApi.post(
        "/lead/social-network/get-users-appointmens-sn",
        body
      );
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new CrmService();
