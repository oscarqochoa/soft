import { amgApi } from '@/service/axios'

class TaskService {
  async getTask (body) {
    try {
      const data = await amgApi.post('/getleadtask', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async getTasks (body) {
    try {
      const data = await amgApi.post('/getnotificationstask', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async getHistoryTasks (body) {
    try {
      const data = await amgApi.post('/searchhistorytasklead', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async makeFavoriteTask (body) {
    try {
      const data = await amgApi.post('/make-favorite', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async postCreateLeadTask (body) {
    try {
      const data = await amgApi.post('/createleadtask', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async postDeleteLeadTask (body) {
    try {
      const data = await amgApi.post('/deleteleadtask', body)
      return data
    } catch (error) {
      throw error
    }
  }
  
  async postDoneLeadTask (body) {
    try {
      const data = await amgApi.post('/doneleadtask', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async validateTaskFavorite (body) {
    try {
      const data = await amgApi.post('/validate-task-favorites', body)
      return data
    } catch (error) {
      throw error
    }
  }
}

export default new TaskService()
