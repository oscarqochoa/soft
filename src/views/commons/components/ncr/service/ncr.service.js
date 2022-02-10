import { amgApi } from '@/service/axios'

class NrcService {
    //NCR Main
    async ncrLeadsCountInProcess(params){
        const data = await amgApi.post("/lead/ncr/ncr-leads-count-in-process", params)
        return data
    }

    //Content pending
    async changeStatus(params){
        const data = await amgApi.post("/lead/ncr/change-status",params)
        return data
    }

}

export default new NrcService()