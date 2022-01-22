import { amgApi } from '@/service/axios'

class TaskService {
  async getTask(body) {
    try {
      const data = await amgApi.post('/getleadtask', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async getTasks(body) {
    try {
      const data = await amgApi.post('/notification/get-task-notifications', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async getHistoryTasks(body) {
    try {
      const data = await amgApi.post('/searchhistorytasklead', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async makeFavoriteTask(body) {
    try {
      const data = await amgApi.post('/make-favorite', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async postCreateLeadTask(body) {
    try {
      const data = await amgApi.post('/createleadtask', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async postDeleteLeadTask(body) {
    try {
      const data = await amgApi.post('/deleteleadtask', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async postDoneLeadTask(body) {
    try {
      const data = await amgApi.post('/doneleadtask', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async postCheckTask(body) {
    try {
      const data = await amgApi.post('/checktaskcredit', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async deleteTaskCredit(body) {
    try {
      const data = await amgApi.post('/deletetaskcredit', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async editTaskCredit(body) {
    try {
      const { data } = await amgApi.post("/tasks/get-edit-task", body);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async addTask(body) {
    try {
      const { data } = await amgApi.post("/addtask", body);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getQuickTasksList(body) {
    try {
      const { data } = await amgApi.post("/alltask", body);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteQuickTask(body) {
    try {
      const { data } = await amgApi.post("/deletetask", body);
      return data;
    } catch (error) {
      throw error;
    }
  }
  async saveQuickTask(body) {
    try {
      const { data } = await amgApi.post("/savetask", body);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getQuickTasks(body) {
    try {
      const { data } = await amgApi.post("/alltasksselect", body);
      return data;
    } catch (error) {
      throw error;
    }
  }
  async validateTaskFavorite(body) {
    try {
      const data = await amgApi.post('/validate-task-favorites', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async getTaskCounter(body) {
    try {
      const data = await amgApi.post('/counttasks', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async getAllTask(body) {
    try {
      const data = await amgApi.post(body.api_url, body)
      return data.data
    } catch (error) {
      throw error
    }
  }

  async changeTaskTodayModal(body) {
    try {
      const data = await amgApi.post('/changeTasksToday', body)
      return data.data
    } catch (error) {
      throw error
    }
  }
}

export default new TaskService()
