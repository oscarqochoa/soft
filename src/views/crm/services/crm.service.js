import { amgApi } from '@/service/axios'

class CrmService {
  async getLeads(body) {
    try {
      const { data } = await amgApi.post('/searchleads', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getLeads:', error)
      throw error
    }
  }

  async getSellersCrm() {
    try {
      const { data } = await amgApi.post('/sellerall/2', {
        roles: '[1,2,5]',
        type: '1',
      })
      return data
    } catch (error) {
      console.log('Something went wrong on getCapturedCrm:', error)
      throw error
    }
  }

  async getCapturedCrm() {
    try {
      const { data } = await amgApi.post('/capturedall/2', {
        roles: '[]',
        type: '1',
      })
      return data
    } catch (error) {
      console.log('Something went wrong on getCapturedCrm:', error)
      throw error
    }
  }

  async getLeadsSn(body) {
    try {
      const { data } = await amgApi.post('/search-leads-sn-recovery', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getLeadsSn:', error)
      throw error
    }
  }

  async getStatusLeads(params) {
    try {
      const { data } = await amgApi.get('/leadstatus', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getStatusLeads:', error)
      throw error
    }
  }

  async getStateLeads(params) {
    try {
      const { data } = await amgApi.get('/stateleads', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getStateLeads:', error)
      throw error
    }
  }

  async getSourceLeads(params) {
    try {
      const { data } = await amgApi.get('/leadsource', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getSourceLeads:', error)
      throw error
    }
  }

  async getOwners(body) {
    try {
      const { data } = await amgApi.post('/usermodule/2', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getOwners:', error)
      throw error
    }
  }

  async getSourceNames(params) {
    try {
      const { data } = await amgApi.get('/sourcesnames', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getSourceNames:', error)
      throw error
    }
  }

  async getPrograms(params) {
    try {
      const { data } = await amgApi.get('/programs', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getPrograms:', error)
      throw error
    }
  }

  async getStates(body) {
    try {
      const { data } = await amgApi.post('/get-states', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getStates:', error)
      throw error
    }
  }

  async getStatesEeuu(params) {
    try {
      const { data } = await amgApi.get('/stateseeuu', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getStatesEeuu:', error)
      throw error
    }
  }

  async getAlgo() {
    try {
      return await amgApi.get('/welcome')
    } catch (error) {
      console.log('Something went wrong on getAlgo:', error)
      throw error
    }
  }

  async getListCards(body) {
    try {
      const { data } = await amgApi.post('/getlistcards', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getListCards:', error)
      throw error
    }
  }

  async getSaleAnnul(body, page) {
    try {
      const { data } = await amgApi.post(`/saleannul?page=${page}`, body)
      return data
    } catch (error) {
      console.error('Something went wrong on getListCards:', error)
      throw error
    }
  }

  async getLeadsFiles(body) {
    try {
      const { data } = await amgApi.post('/allfileslead', body)
      return data
    } catch (error) {
      console.error('Something went wrong on getLeadsFiles:', error)
      throw error
    }
  }

  async generatePdf(body) {
    try {
      const { data } = await amgApi.post('/generate-pdf', body)
      return data
    } catch (error) {
      console.error('Something went wrong on generatePdf:', error)
      throw error
    }
  }

  async deleteFile(body) {
    try {
      const { data } = await amgApi.post('/deletefile', body)
      return data
    } catch (error) {
      console.error('Something went wrong on getLeadsFiles:', error)
      throw error
    }
  }

  async getSaleMade(body, page) {
    try {
      const { data } = await amgApi.post(`/salemade?page=${page}`, body)
      // eslint-disable-next-line array-callback-return
      data.data.map(d => {
        // eslint-disable-next-line no-param-reassign
        d.selected = false
        // eslint-disable-next-line no-param-reassign
        d.editCaptured = false
        // eslint-disable-next-line no-param-reassign
        d.capturedNew = d.captured
        // eslint-disable-next-line no-param-reassign
        d.editSeller = false
        // eslint-disable-next-line no-param-reassign
        d.sellerNew = d.seller
        // eslint-disable-next-line no-param-reassign
        d.editFee = false
        // eslint-disable-next-line no-param-reassign
        d.feeNew = d.fee
      })
      return data
    } catch (error) {
      console.error('Something went wrong on getSaleMade:', error)
      throw error
    }
  }

  async getCountries(body) {
    try {
      const { data } = await amgApi.post('/view-countrys', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getCountries:', error)
      throw error
    }
  }

  async getUserCreatorOwner(body) {
    try {
      const { data } = await amgApi.post(`/sellerall/${body.modul}`, body)
      return data
    } catch (error) {
      console.log('Something went wrong on getUserCreatorOwner:', error)
      throw error
    }
  }

  async postUniqueMobile(body) {
    try {
      const { data } = await amgApi.post('/uniquemobile', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postUniqueMobile:', error)
      throw error
    }
  }

  async postRequestLead(body) {
    try {
      const { data } = await amgApi.post('/socialnetwork/request-lead', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postRequestLead:', error)
      throw error
    }
  }

  async postCreateLead(body) {
    try {
      return await amgApi.post('/leadscreate', body)
    } catch (error) {
      console.log('Something went wrong on postCreateLead:', error)
      throw error
    }
  }

  async getSources() {
    try {
      const { data } = await amgApi.get('/sourcesnames')
      return data
    } catch (error) {
      console.log('Something went wrong on getSources:', error)
      throw error
    }
  }

  async postDeleteLead(body) {
    try {
      return await amgApi.post('/leaddelete', body)
    } catch (error) {
      console.log('Something went wrong on postDeleteLead:', error)
      throw error
    }
  }

  async postProcessLead(body) {
    try {
      return await amgApi.post('/process-lead-sn', body)
    } catch (error) {
      console.log('Something went wrong on postProcessLead:', error)
      throw error
    }
  }

  async getAllQuicksSms(body) {
    try {
      const { data } = await amgApi.post('/allquickssms', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getAllQuicksSms:', error)
      throw error
    }
  }

  async postSaveQuickSms(body) {
    try {
      return await amgApi.post('/savequicksms', body)
    } catch (error) {
      console.log('Something went wrong on postSaveQuickSms:', error)
      throw error
    }
  }

  async postDeleteQuickSms(body) {
    try {
      return await amgApi.post('/deletequick', body)
    } catch (error) {
      console.log('Something went wrong on postDeleteQuickSms:', error)
      throw error
    }
  }

  async postHistorySmsLead(body) {
    try {
      return await amgApi.post('/allsmshistorylead', body)
    } catch (error) {
      console.log('Something went wrong on postHistorySmsLead:', error)
      throw error
    }
  }

  async getCapturedByTracking(body) {
    try {
      const { data } = await amgApi.post('/alltrackingcapt', body)
      return data
    } catch (error) {
      console.error('Something went wrong on getCapturedByTracking:', error)
      throw error
    }
  }

  async getSellerTracking(body) {
    try {
      const { data } = await amgApi.post('/alltrackingsel', body)
      return data
    } catch (error) {
      console.error('Something went wrong on getSellerTracking:', error)
      throw error
    }
  }

  async getFeeTracking(body) {
    try {
      const { data } = await amgApi.post('/alltrackingfee', body)
      return data
    } catch (error) {
      console.error('Something went wrong on getSellerTracking:', error)
      throw error
    }
  }

  async saveNewCaptured(body) {
    try {
      return await amgApi.post('/savenewcapt', body)
    } catch (error) {
      console.error('Something went wrong on getSellerTracking:', error)
      throw error
    }
  }

  async saveNewSeller(body) {
    try {
      return await amgApi.post('/savenewsel', body)
    } catch (error) {
      console.error('Something went wrong on getSellerTracking:', error)
      throw error
    }
  }

  async saveNewFee(body) {
    try {
      return await amgApi.post('/savenewfee', body)
    } catch (error) {
      console.error('Something went wrong on saveNewFee:', error)
      throw error
    }
  }
}
export default new CrmService()
