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

  // eslint-disable-next-line class-methods-use-this
  async deleteClient(id) {
    try {
      const data = await amgApi.post('/amg-test/delete-client', { id })
      return data
    } catch (error) {
      throw error
    }
  }

  async getClient(id) {
    try {
      const data = await amgApi.get(`/amg-test/get-client/${id}`)
      return data
    } catch (error) {
      throw error
    }
  }

  async getPayments(id) {
    try {
      const data = await amgApi.get(`/amg-test/get-payments/${id}`)
      return data
    } catch (error) {
      throw error
    }
  }

  async updateClient(body) {
    try {
      const data = await amgApi.post('/amg-test/update-client', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async updatePayment(body) {
    try {
      const data = await amgApi.post('/amg-test/update-payment', body)
      return data
    } catch (error) {
      throw error
    }
  }
}

export default new AmgTest()
