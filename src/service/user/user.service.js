import { amgApi } from '@/service/axios'

class UserService {
  async getUserSessions (body) {
    try {
      const data = await amgApi.post('/sessionusers', body)
      return data
    } catch (error) {
      throw error
    }
  }
  async validatePasswordUser (body) {
    try {
      const data = await amgApi.post('/validate-if-password-is-correct', body)
      return data
    } catch (error) {
      throw error
    }
  }
  async changePasswordUser (body) {
    try {
      const data = await amgApi.post('/change-password-user', body)
      return data
    } catch (error) {
      throw error
    }
  }
}

export default new UserService()
