import { amgApi } from '@/service/axios'
// General services on module Social Network after refactoring
class MigrationService {
  async getUsers(body) {
    try {
      const data = await amgApi.post('/sellerall/15', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getUsers:', error)
      throw error
    }
  }

  async getFilterCardSocial(body) {
    try {
      const data = await amgApi.post('/filterCardSocial', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getFilterCardSocial:', error)
      throw error
    }
  }

  async getDataLead(body) {
    try {
      const data = await amgApi.post('/getDataLead', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getDataLead:', error)
      throw error
    }
  }
}
export default new MigrationService()
