import { amgApi } from '@/service/axios'
// General services on module Social Network after refactoring
class ClientService {
  async getClients(body, page) {
    try {
      const data = await amgApi.post(`/clients?page=${page}`, body)
      return data
    } catch (error) {
      console.log('Something went wrong on getBankOfFlyers:', error)
      throw error
    }
  }
}
export default new ClientService()
