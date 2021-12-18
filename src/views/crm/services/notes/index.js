import { amgApi } from '@/service/axios'

class Notes {
  async getLeadNotes (body) {
    try {
      const data = await amgApi.post('getleadnotes', body)
      return data
    } catch (error) {
      throw error
    }
  }
  async postLeadNotes (body) {
    try {
      const data = await amgApi.post('notescreate', body)
      return data
    } catch (error) {
      throw error
    }
  }
  async putLeadNotes (body) {
    try {
      const data = await amgApi.post('updatenotes', body)
      return data
    } catch (error) {
      throw error
    }
  }
  async postMakeImportantNote (body) {
    try {
      const data = await amgApi.post('importantnote', body)
      return data
    } catch (error) {
      throw error
    }
  }
}

export default new Notes()
