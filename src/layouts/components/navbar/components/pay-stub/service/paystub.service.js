import { amgApi } from "@/service/axios";

class PayStubService {
    async getUserPayStub(userId) {
        const data = await amgApi.post('/payroll/get-file-pay-stub-by-iduser', {
            id: userId,
        })
        return data.data;
    }
    async readFile(id_file) {
        const data = await amgApi.post('/payroll/read-file-pay-stub', {
            id_file: id_file,
        })
        return data.data
    }
}
export default new PayStubService()
