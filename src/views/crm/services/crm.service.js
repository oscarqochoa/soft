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
  async getStateLeads (params) {
    try {
      const { data } = await amgApi.get('/api/stateleads', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getStateLeads:', error)
      throw error
    }
  }
  async getSourceLeads (params) {
    try {
      const { data } = await amgApi.get('/api/leadsource', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getSourceLeads:', error)
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
  async getStatesEeuu (params) {
    try {
      const { data } = await amgApi.get('/api/stateseeuu', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getStatesEeuu:', error)
      throw error
    }
  }
  async getCountries (body) {
    try {
      const { data } = await amgApi.post('/api/view-countrys', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getCountries:', error)
      throw error
    }
  }
  async getUserCreatorOwner (body) {
    try {
      const { data } = await amgApi.post(`/api/sellerall/${body.modul}`, body)
      return data
    } catch (error) {
      console.log('Something went wrong on getUserCreatorOwner:', error)
      throw error
    }
  }
  async postUniqueMobile (body) {
    try {
      const { data } = await amgApi.post('/api/uniquemobile', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postUniqueMobile:', error)
      throw error
    }
  }
  async postRequestLead (body) {
    try {
      const { data } = await amgApi.post('/api/socialnetwork/request-lead', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postRequestLead:', error)
      throw error
    }
  }
}

export default new CrmService()
