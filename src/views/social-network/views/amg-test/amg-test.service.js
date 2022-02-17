import { amgApi } from '@/service/axios'

class AmgTest {
  async getClients(body) {
    try {
      const data = await amgApi.post(body.api_url, body)
      return data.data
    } catch (error) {
      throw error
    }
  }

  async createClient(body) {
    try {
      const data = await amgApi.post('/amg-test/create-client', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async createPayment(body) {
    try {
      const data = await amgApi.post('/amg-test/create-payments', body)
      return data
    } catch (error) {
      throw error
    }
  }
}

export default new AmgTest()
