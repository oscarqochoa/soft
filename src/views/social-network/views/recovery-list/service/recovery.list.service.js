import { amgApi } from '@/service/axios'

class RecoveryListService {
    //TabBYProgram
    async searchRecoveryList(params){
        const data = await amgApi.post("/social-network/recovery-list/search-recovery-by-user",params)
        return data
    }
    async sendForPusher(params){
        const data = await amgApi.post("/social-network/recovery-list/pusher-recovery-list-done",params)
        return data
    }
    async getUserOfRecoveryList(params){
        const data = await amgApi.post("/social-network/recovery-list/get-user-of-recovery-list",params)
        return data
    }
    async getRecoveryListByUser(params) {
        const { data } = await amgApi.post("/social-network/recovery-list/get-recovery-list-by-user", params);
        return data;
    }
}
export default new RecoveryListService()