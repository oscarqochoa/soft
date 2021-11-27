class CrmService {
  async getLeads (body) {
    try {
      const { data } = await amgApi.post('/api/searchleads', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getLeads:', error)
      throw error
    }
  }
  async getLeadsSn (body) {
    try {
      const { data } = await amgApi.post('/api/search-leads-sn-recovery', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getLeadsSn:', error)
      throw error
    }
  }
  async getStatusLeads (params) {
    try {
      const { data } = await amgApi.get('/api/leadstatus', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getStatusLeads:', error)
      throw error
    }
  }
  async getOwners (body) {
    try {
      const { data } = await amgApi.post('/api/usermodule/2', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getOwners:', error)
      throw error
    }
  }
  async getSourceNames (params) {
    try {
      const { data } = await amgApi.get('/api/sourcesnames', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getSourceNames:', error)
      throw error
    }
  }
  async getPrograms (params) {
    try {
      const { data } = await amgApi.get('/api/programs', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getPrograms:', error)
      throw error
    }
  }
  async getStates (body) {
    try {
      const { data } = await amgApi.post('/api/get-states', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getStates:', error)
      throw error
    }
  }
}

export default new CrmService()
