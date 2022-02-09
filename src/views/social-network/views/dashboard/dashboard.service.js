import { amgApi } from '@/service/axios'
// General services on module Social Network after refactoring
class DashboardService {
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

  async getLeadsGraphic(body) {
    try {
      const data = await amgApi.post('/sn-dashboard/leads-graphic', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getLeadsGraphic:', error)
      throw error
    }
  }

  async getRepliesGraphic(body) {
    try {
      const data = await amgApi.post('/sn-dashboard/replies-graphic', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getRepliesGraphic:', error)
      throw error
    }
  }

  async getAnswersGraphic(body) {
    try {
      const data = await amgApi.post('/sn-dashboard/answers-graphic', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getRepliesGraphic:', error)
      throw error
    }
  }

  async getMobilesGraphic(body) {
    try {
      const data = await amgApi.post('/sn-dashboard/mobiles-graphic', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getMobilesGraphic:', error)
      throw error
    }
  }

  async getTasksGraphic(body) {
    try {
      const data = await amgApi.post('/sn-dashboard/graphic-tasks', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getTasksGraphic:', error)
      throw error
    }
  }

  async getProductivityGraphic(body) {
    try {
      const data = await amgApi.post('/sn-dashboard/graphic-productivity', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getProductivityGraphic:', error)
      throw error
    }
  }

  async getTaskCatcherGraphic(body) {
    try {
      const data = await amgApi.post('/sn-dashboard/graphic-tasks-catcher', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getTaskCatcherGraphic:', error)
      throw error
    }
  }

  async getMultiChartGraphic(body) {
    try {
      const data = await amgApi.post('/sn-dashboard/multi-chart-sn', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getMultiChartGraphic:', error)
      throw error
    }
  }
}
export default new DashboardService()
