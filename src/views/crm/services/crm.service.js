import { amgApi } from '@/service/axios'

class CrmService {
  async getLeads (body) {
    try {
      const { data } = await amgApi.post('/searchleads', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getLeads:', error)
      throw error
    }
  }
  async getLeadsSn (body) {
    try {
      const { data } = await amgApi.post('/search-leads-sn-recovery', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getLeadsSn:', error)
      throw error
    }
  }
  async getLeadsWPotential (body) {
    try {
      const { data } = await amgApi.post('/search-leads-sn-potential', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getLeadsWPotential:', error)
      throw error
    }
  }
  async getStatusLeads (params) {
    try {
      const data = await amgApi.get('/leadstatus', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getStatusLeads:', error)
      throw error
    }
  }
  async getStateLeads (params) {
    try {
      const data = await amgApi.get('/stateleads', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getStateLeads:', error)
      throw error
    }
  }
  async getSourceLeads (params) {
    try {
      const data = await amgApi.get('/leadsource', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getSourceLeads:', error)
      throw error
    }
  }
  async getOwners (body) {
    try {
      const data = await amgApi.post('/usermodule/2', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getOwners:', error)
      throw error
    }
  }
  async getSourceNames (params) {
    try {
      const data = await amgApi.get('/sourcesnames', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getSourceNames:', error)
      throw error
    }
  }
  async getPrograms (params) {
    try {
      const { data } = await amgApi.get('/programs', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getPrograms:', error)
      throw error
    }
  }
  async getStates (body) {
    try {
      const data = await amgApi.post('/get-states', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getStates:', error)
      throw error
    }
  }
  async getStatesEeuu (params) {
    try {
      const data = await amgApi.get('/stateseeuu', { params })
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

  async getSaleMade(body, page) {
    try {
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
    } catch (error) {
      console.log('Something went wrong on postRequestLead:', error)
      throw error
    }
  }
  async getCountries (body) {
    try {
      const data = await amgApi.post('/view-countrys', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getCountries:', error)
      throw error
    }
  }
  async getSellers (body) {
    try {
      const data = await amgApi.post(`/sellerall/${body.modul}`, body)
      return data
    } catch (error) {
      console.log('Something went wrong on getSellers:', error)
      throw error
    }
  }
  async postUniqueMobile (body) {
    try {
      const data = await amgApi.post('/uniquemobile', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postUniqueMobile:', error)
      throw error
    }
  }
  async postRequestLead (body) {
    try {
      const data = await amgApi.post('/socialnetwork/request-lead', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postRequestLead:', error)
      throw error
    }
  }
  async postCreateLead (body) {
    try {
      const data = await amgApi.post('/leadscreate', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postCreateLead:', error)
      throw error
    }
  }
  async getSources() {
    try {
      let data = await amgApi.get('/sourcesnames')
      data = data.data
      return data
    } catch (error) {
      console.log('Something went wrong on postRequestLead:', error)
      throw error
    }
  }
  async postDeleteLead(body) {
    try {
      const data = await amgApi.post('/leaddelete', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postDeleteLead:', error)
      throw error
    }
  }
  async postProcessLead (body) {
    try {
      const data = await amgApi.post('/process-lead-sn', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postProcessLead:', error)
      throw error
    }
  }
  async getAllQuicksSms (body) {
    try {
      const data = await amgApi.post('/allquickssms', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getAllQuicksSms:', error)
      throw error
    }
  }
  async postSaveQuickSms (body) {
    try {
      const data = await amgApi.post('/savequicksms', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postSaveQuickSms:', error)
      throw error
    }
  }
  async postDeleteQuickSms (body) {
    try {
      const data = await amgApi.post('/deletequick', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postDeleteQuickSms:', error)
      throw error
    }
  }
  async postHistorySmsLead (body) {
    try {
      const data = await amgApi.post('/allsmshistorylead', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postHistorySmsLead:', error)
      throw error
    }
  }
  async postSendMessageLead (body) {
    try {
      const data = await amgApi.post('/sendmessagelead', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postSendMessageLead:', error)
      throw error
    }
  }
}

export default new CrmService()
