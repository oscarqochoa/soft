import { amgApi } from '@/service/axios'

class NotificationService {
  async getUserNotifications (body) {
    try {
      const data = await amgApi.post('/getnotifications', body)
      return data
    } catch (error) {
      throw error
    }
  }
  async getAllUserNotifications (body) {
    try {
      const data = await amgApi.post('/allnotifications', body)
      return data.data;
    } catch (error) {
      throw error
    }
  }
  async updateNotification (body) {
    try {
      const data = await amgApi.post('/updatenotif', body)
      return data.data;
    } catch (error) {
      throw error
    }
  }
}

export default new NotificationService()
