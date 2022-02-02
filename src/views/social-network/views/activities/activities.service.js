import { amgApi } from '@/service/axios'
// General services on module Social Network after refactoring
class ActivitiesService {
  async getSchedules(body) {
    try {
      const data = await amgApi.post('/sn-activities/get-schedules', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getLeadsMigration:', error)
      throw error
    }
  }

  async insertTask(body) {
    try {
      const data = await amgApi.post('sn-activities/create-tasks', body)
      return data
    } catch (error) {
      console.log('Something went wrong on insertTask:', error)
      throw error
    }
  }

  async getTrackingChanges(body) {
    try {
      const data = await amgApi.post('sn-activities/get-tracking', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getTrackingChanges:', error)
      throw error
    }
  }
}
export default new ActivitiesService()
