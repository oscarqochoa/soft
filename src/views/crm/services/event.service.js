import { amgApi } from '@/service/axios'

class EventService {
  async getEvents (params) {
    try {
      if (params.idLead) {
        const data = await amgApi.get(`/crm/crm-events/${ params.idLead }/event`, { params })
        return data
      }
      throw 'Endpoint not exists'
    } catch (error) {
      throw error
    }
  }
  async getEvent (body) {
    try {
      const data = await amgApi.post('/eventcalendar', body)
      return data
    } catch (error) {
      throw error
    }
  }
  async updateEvent (body) {
    try {
      const data = await amgApi.post('/updateevent', body)
      return data
    } catch (error) {
      throw error
    }
  }
  async postDeleteEvent (body) {
    try {
      const data = await amgApi.post('/deleteevent', body)
      return data
    } catch (error) {
      throw error
    }
  }
  async postDeleteEvents (id) {
    try {
      const data = await amgApi.post(`/crm/crm-events/${ id }`)
      return data
    } catch (error) {
      throw error
    }
  }
  async getDateEventsTasks (params) {
    try {
      const data = await amgApi.get(`/getDateEventsTasks/${ params.idLead }/${ params.id }`, { params })
      return data
    } catch (error) {
      throw error
    }
  }
  async postAttendEvent (body) {
    try {
      const data = await amgApi.post('/attendevent', body)
      return data
    } catch (error) {
      throw error
    }
  }
  async postEvent (body) {
    try {
      const data = await amgApi.post('/crm/crm-events', body)
      return data
    } catch (error) {
      throw error
    }
  }
}

export default new EventService()
