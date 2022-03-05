import { amgApi } from '@/service/axios'

class RecoveryListService {
    //TabBYProgram
    async searchRecoveryList(params){
        const data = await amgApi.post("/social-network/recovery-list/search-recovery-by-user",params)
        return data
    }
}
export default new RecoveryListService()