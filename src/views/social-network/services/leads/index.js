import { amgApi, amgApiFake } from '@/service/axios';

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
            const { data, status } = await amgApi.get('/get-lead/' + id)
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
            const { data, status } = await amgApi.post('/edit-show-lead-sn', body);
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on postUpdateLeadInformation", error);
            throw error
        }
    }

    async postUpdateLeadInformationFields(body) {
        try {
            const { data, status } = await amgApi.post('/savefieldslead', body);
            return { data, status }
        } catch (error) {
            console.log("Something went wrong on postUpdateLeadInformationFields", error);
            throw error
        }
    }

    async postDeleteLead(body) {
        try {
            const data = await amgApi.post('delete-lead-sn', body);
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
            const { data, status } = await amgApi.post('/all-fangapes', {})
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
            console.log("Something went wrong on getValidateUniqueMobile", error)
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

}

export default new SNLeads()