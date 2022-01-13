import { amgApi } from '@/service/axios'

class ClientService {
  async getCrmUsers(params) {

    const data = await amgApi.post(`${params.api_url}?page=${params.current_page}`, params)
    return data.data
  }

  async getAllPrograms() {
    const data = await amgApi.get('/programs')
    return data.data
  }

  async getAllAdvisors(payload) {
    const data = await amgApi.post('/usersprograms', payload)
    return data.data
  }
}
export default new ClientService()
