import { amgApi } from '@/service/axios'

class Calendar {
  async filterMonthNext (body) {
    try {
      const data = await amgApi.post('filtermonthnext', body)
      return data
    } catch (error) {
      throw error
    }
  }
}

export default new Calendar()
