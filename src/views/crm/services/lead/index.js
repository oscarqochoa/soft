import { amgApi, amgApiFake } from '@/service/axios'

class CrmLead {
  
  async getLead (id, params) {
    try {
      const { data } = await amgApi.get(`/lead/${ id }`, params)
      return data
    } catch (error) {
      console.log('Something went wrong on getLead:', error)
      throw error
    }
  }
  
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

  async getStateLeads (params) {
    try {
      const data = await amgApi.get('/stateleads', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getStateLeads:', error)
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

  async getSourceLeads (params) {
    try {
      const data = await amgApi.get('/leadsource', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getSourceLeads:', error)
      throw error
    }
  }

  async postCreateLead (body) {
    try {
      const data = await amgApi.post('/leadscreate', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postCreateLead:', error)
    }
  }

  async postDeleteLead (body) {
    try {
      const data = await amgApi.post('/leaddelete', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postDeleteLead:', error)
      throw error
    }
  }

  async postProcessLead(body) {
    try {
      const data = await amgApi.post('/process-lead-sn', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postProcessLead:', error)
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

  async postUserAppointmentSn (body) {
    try {
      const data = await amgApi.post('/get-users-appointmens-sn', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async postSearchFileLead (body) {
    try {
      const data = await amgApi.post('/search-file-lead-sn', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async postFileNameLead (body) {
    try {
      const data = await amgApi.post('/update-file-name', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async postFileLead (body) {
    try {
      const data = await amgApi.post('/upload-file-lead-sn', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return data
    } catch (error) {
      throw error
    }
  }

  async deleteFileLead (body) {
    try {
      const data = await amgApi.post('/delete-file-sn', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async postLeadPayment (body) {
    try {
      const data = await amgApi.post('/leadpayment', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async postMyListCreate (body) {
    try {
      const data = await amgApi.post('/my-list-create', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async postSetPotential (body) {
    try {
      const data = await amgApi.post('/set-potential', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async postChangeStatusSn (body) {
    try {
      const data = await amgApi.post('/change-status-sn', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async getLeadEdit (id, params) {
    try {
      const { data } = await amgApi.get(`/lead/edit/${ id }`, params)
      return data
    } catch (error) {
      console.log('Something went wrong on getLead:', error)
      throw error
    }
  }

  async postUniquesSsn (body) {
    try {
      const data = await amgApi.post('/uniquessn', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async postUniquesItin (body) {
    try {
      const data = await amgApi.post('/uniqueitin', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async postUniquesCpn (body) {
    try {
      const data = await amgApi.post('/uniquecpn', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async putFieldsLead (body) {
    try {
      const data = await amgApi.post('/savefieldslead', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async postAllTrackingChangeLeads (body) {
    try {
      const data = await amgApi.post('/alltrackingfieldslead', body)
      return data
    } catch (error) {
      throw error
    }
  }

  async putLead (id, body) {
    try {
      const data = await amgApi.post(`/leads/update/${ id }`, body)
      return data
    } catch (error) {
      throw error
    }
  }

}

export default new CrmLead()
