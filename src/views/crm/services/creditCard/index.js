import { amgApi } from '@/service/axios'

class CreditCard {
  async getCreditCard (body) {
    try {
      const data = await amgApi.post('carddata', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async getOriginalTarget (body) {
    try {
      const data = await amgApi.post('originaltarget', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async deleteCreditCard (body) {
    try {
      const data = await amgApi.post('deletecard', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async createCreditCard (body) {
    try {
      const data = await amgApi.post('createcard', body)
      return data
    } catch (error) {
      throw error
    }
  }
}

export default new CreditCard()
