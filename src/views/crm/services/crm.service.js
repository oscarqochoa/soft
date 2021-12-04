import { amgApi } from '@/service/axios'

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
  async getAlgo() {
    // eslint-disable-next-line no-undef
    const data = await amgApi.get('/welcome')
    return data
  }

  async getListCards(body){
    try {
      console.log(body)
      const { data } = await amgApi.post('/getlistcards', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getListCards:', error)
      throw error
    }
  }

  async getSaleMade(body, page) {
    // eslint-disable-next-line no-undef
    let data = await amgApi.post(`/salemade?page=${page}`, {
      text: body.text,
      status: body.status,
      program: body.program,
      state_h: body.state_h,
      from: body.from,
      to: body.to,
      orderby: body.orderby,
      order: body.order,
      captured: body.captured,
      seller: body.seller,
      salemade: body.salemade,
      rolsession: body.rolsession,
      statusip: body.statusip,
      sourcesname_id: body.sourcesname_id,
      done: body.done,
      per_page: body.per_page,
    })
    data = data.data
    return data
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
  async postCreateLead (body) {
    try {
      const data = await amgApi.post('/api/leadscreate', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postCreateLead:', error)
    }
  }
  async getSources() {
    let data = await amgApi.get('/sourcesnames')
    data = data.data
    return data
  }
  async postDeleteLead(body) {
    try {
      const data = await amgApi.post('/api/leaddelete', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postDeleteLead:', error)
      throw error
    }
  }
  async postProcessLead (body) {
    try {
      const data = await amgApi.post('/api/process-lead-sn', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postProcessLead:', error)
      throw error
    }
  }
  async getAllQuicksSms (body) {
    try {
      const { data } = await amgApi.post('/api/allquickssms', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getAllQuicksSms:', error)
      throw error
    }
  }
  async postSaveQuickSms (body) {
    try {
      const data = await amgApi.post('/api/savequicksms', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postSaveQuickSms:', error)
      throw error
    }
  }
}

export default new CrmService()
