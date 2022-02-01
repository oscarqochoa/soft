import { amgApi } from '@/service/axios'
// General services on module Social Network after refactoring
class MigrationService {
  async getLeadsMigration(body, page) {
    try {
      const data = await amgApi.post(`/search-leads-migration-sn?page=${page}`, body)
      return data
    } catch (error) {
      console.log('Something went wrong on getLeadsMigration:', error)
      throw error
    }
  }

  async getStatusLead() {
    try {
      const data = await amgApi.get('/leadstatus-sn')
      return data
    } catch (error) {
      console.log('Something went wrong on getStatusLead:', error)
      throw error
    }
  }

  async getUserModule(body) {
    try {
      const data = await amgApi.post('/usermodule/15', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getUserModule:', error)
      throw error
    }
  }
}
export default new MigrationService()
