import { amgApi } from '@/service/axios'
// General services on module Social Network after refactoring
class SocialNetworkService {
  async getBankOfFlyers(body, page) {
    try {
      const data = await amgApi.post(`/search-bank-flyers?page=${page}`, body)
      return data
    } catch (error) {
      console.log('Something went wrong on getBankOfFlyers:', error)
      throw error
    }
  }

  async getStates(body) {
    try {
      const data = await amgApi.post('/get-states', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getStates:', error)
      throw error
    }
  }

  async getPrograms(body) {
    try {
      const data = await amgApi.get('/all-fangapes', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getStates:', error)
      throw error
    }
  }

  async getLeadsFlyer(body) {
    try {
      const data = await amgApi.post('/get-leads-flyers', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getLeadsFlyer:', error)
      throw error
    }
  }

  async insertCampaignFlyers(body) {
    try {
      const data = await amgApi.post('/insert-campaigns-flyers', body)
      return data
    } catch (error) {
      console.log('Something went wrong on insertCampaignFlyers:', error)
      throw error
    }
  }

  async deleteCampaignFlyers(body) {
    try {
      const data = await amgApi.post('/delete-campaigns-flyers', body)
      return data
    } catch (error) {
      console.log('Something went wrong on deleteCampaignFlyers:', error)
      throw error
    }
  }

  async getCampaignFlyers(body) {
    try {
      const data = await amgApi.post('/get-campaigns-flyers', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getCampaignFlyers:', error)
      throw error
    }
  }

  async insertFlyerComments(body) {
    try {
      const data = await amgApi.post('/insert-flyer-comments', body)
      return data
    } catch (error) {
      console.log('Something went wrong on insertFlyerComments:', error)
      throw error
    }
  }

  async getFlyerComments(body) {
    try {
      const data = await amgApi.post('/get-flyer-comments', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getFlyerComments:', error)
      throw error
    }
  }
}
export default new SocialNetworkService()
