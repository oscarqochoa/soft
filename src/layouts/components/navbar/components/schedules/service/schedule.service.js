import { amgApi } from "@/service/axios";

class ScheduleService {
    async currentTime() {
        const data = await amgApi.get('/schedule/currentTime')
        return data.data;
    }
    async readFile(id_file) {
        const data = await amgApi.post('/payroll/read-file-pay-stub', {
            id_file: id_file,
        })
        return data.data
    }
}
export default new ScheduleService()
