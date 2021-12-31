import {amgApi} from "@/service/axios";

class QuickNotesService {

  async getQuickNotes(body) {
    const data = await amgApi.post('/allquicks', body)
    return data.data
  }
  async deleteQuickNote(body) {
    const data = await amgApi.post('/deletequick', body)
    return data.data
  }
  async saveQuickNote(body) {
    const data = await amgApi.post('/savequick', body)
    return data.data
  }
}
export default new QuickNotesService()
