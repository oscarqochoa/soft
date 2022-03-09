import { amgApi } from '@/service/axios';

class SNLeads {

    async getNewLeads(body) {
        try {
            const { data } = await amgApi.post('/lead/social-network/search-leads-sn', body)
            return data
        } catch (error) {
            console.log("Something went wrong on get new leads", error);
            throw error
        }
    }

    async getLead(id) {
        try {
            const { data, status } = await amgApi.get('/lead/social-network/show/' + id)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on get lead", error);
            throw error
        }
    }

    async getTrackingNewLeads(body) {
        try {
            const { data, status } = await amgApi.post('/lead/get-tracking-lead-sn', body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on get tracking new leads", error);
            throw error
        }
    }

    async getSmsSentToNewLeads(body) {
        try {
            const { data, status } = await amgApi.post('/messages/get-tracking-sms-lead', body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getSmsSentToNewLeads", error);
            throw error
        }
    }

    async postUpdateLeadInformation(body) {
        try {
            const { data, status } = await amgApi.post('/lead/social-network/edit-show-lead-sn', body);
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on postUpdateLeadInformation", error);
            throw error
        }
    }

    async postUpdateLeadInformationFields(body) {
        try {
            const { data, status } = await amgApi.post('/lead/update-fields-lead', body);
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on postUpdateLeadInformationFields", error);
            throw error
        }
    }

    async postDeleteLead(body) {
        try {
            const data = await amgApi.post('/lead/destroy-lead', body);
            return data
        } catch (error) {
            console.log("Something went wrong on postDeleteLead", error);
            throw error
        }
    }

    async getOldLeads(body) {
        try {
            const { data } = await amgApi.post('/lead/social-network/old-search-leads-sn', body)
            return data
        } catch (error) {
            console.log("Something went wrong on get old leads", error);
            throw error
        }
    }

    async getOldLead(id) {
        try {
            const { data, status } = await amgApi.get('/lead/social-network/show-old-lead/' + id)
            return { data, status }
        } catch (error) {
            throw error
        }
    }

    async postDeleteOldLead(async) {

    }

    async getStatusLeads(params) {
        try {
            const data = await amgApi.get('/lead/get-lead-status', { params })
            return data
        } catch (error) {
            console.log('Something went wrong on getStatusLeads:', error)
            throw error
        }
    }

    async getStateLeads(params) {

        try {
            return await amgApi.post("/lead/get-states", params);
        } catch (error) {
            console.log('Something went wrong on getStatusLeads:', error)
            throw error
        }
    }

    async getSubSources() {
        try {
            const { data, status } = await amgApi.post('/get-sub-sources-sn', {})
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getSubSources", error)
            throw error
        }
    }

    async getFanPagePrograms() {
        try {
            const { data, status } = await amgApi.get('/lead/all-fangapes', {})
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getFanPagePrograms", error);
            throw error
        }
    }

    async postValidateNickname(body) {
        try {
            const { data, status } = await amgApi.post('/validate-exists-nickname', body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on postValidateNickname", error);
            throw error
        }
    }

    async getFlyers(params) {
        try {
            const { data, status } = await amgApi.post('/get-flyers', params)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getFlyers", error)
            throw error
        }
    }

    async getReasonsNotPotential() {
        try {
            const { data, status } = await amgApi.get('/get-reasons-not-potential')
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getReasonsNotPotential", error)
            throw error
        }
    }

    async postSaveReasonNotPotential(body) {
        try {
            const { data, status } = await amgApi.post('/insert-reason-not-potential', body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on postSaveReasonNotPotential", error)
            throw error
        }
    }

    async getValidateUniqueMobile(body) {
        try {
            const { data, status } = await amgApi.post('/unique-mobile-sn', body)
            return { data, status }
        } catch (error) {
            throw error
        }
    }

    async verifyMobile(body) {
        try {
            const { data, status } = await amgApi.post('/lead/verify-mobile', body)
            return { data, status }
        } catch (error) {
            throw error
        }
    }

    async validateNickname(body) {
        try {
            const { data, status } = await amgApi.post('/lead/validate-nickname', body)
            return { data, status }
        } catch (error) {
            throw error
        }
    }

    async getSellersByDateAndTypeTask(body, callback) {
        try {
            const { data, status } = await amgApi.post('/get-sellers-task-favorite-sn', body)
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on getSellersByDateAndTypeTask", error)
            throw error
        }
    }

    async getSubSourceSn() {
        try {
            const resp = await amgApi('/lead/get-sub-sources-sn');
            return resp.data;
        } catch (e) {
            console.log(e)
        }
    }
    async getLeadTasks(params) {
        try {
            const { data, status } = await amgApi.post('/lead/social-network/get-lead-tasks', params)
            return { data, status }
        } catch (error) {
            throw error
        }
    }

    async getCreditReports(params) {
        try {
            const { data, status } = await amgApi.post('/lead/credit-report/get-files-report', params);
            return { data, status }
        } catch (error) {
            throw error
        }
    }

    async getPendingCreditReport(params) {
        try {
            const { data, status } = await amgApi.post('/credit-report/search-credit-reports-pending', params)
            return { data, status }
        } catch (error) {
            throw error
        }
    }

    async getClientCards(params) {
        try {
            const { data, status } = await amgApi.post('/clients/search-cards-clients', params)
            return { data, status }
        } catch (error) {
            throw error
        }
    }

    async getLeadFiles(params) {
        try {
            const { data, status } = await amgApi.post('/lead/social-network/search-file-lead-sn', params)
            return { data, status }
        } catch (error) {
            throw error
        }
    }

    async updateFileName(body) {
        try {
            const { data, status } = await amgApi.post('/lead/social-network/update-file-name', body)
            return { data, status }
        } catch (error) {
            throw error
        }
    }

    async deleteFile(body) {
        try {
            const { data, status } = await amgApi.post('/lead/social-network/delete-file-sn', body)
            return { data, status }
        } catch (error) {
            throw error
        }
    }

    async uploadFiles(body) {
        try {
            const { data, status } = await amgApi.post('/lead/social-network/upload-file-lead-sn', body, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            return { data, status }
        } catch (error) {
            throw error
        }
    }

}

export default new SNLeads()