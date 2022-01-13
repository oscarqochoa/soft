import { amgApi } from '@/service/axios'
// General services on module Social Network after refactoring
class SocialNetworkService {
  async getBankOfFlyers(body) {
    try {
      const data= await amgApi.post('/search-bank-flyers', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getBankOfFlyers:', error)
      throw error
    }
  }
  async getStates(body) {
    try {
      const data= await amgApi.post('/get-states', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getStates:', error)
      throw error
    }
  }


async getPrograms(body) {
  try {
    const data= await amgApi.get('/all-fangapes', body)
    return data
  } catch (error) {
    console.log('Something went wrong on getStates:', error)
    throw error
  }
}
}
export default new SocialNetworkService()
