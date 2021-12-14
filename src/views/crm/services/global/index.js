import { amgApi } from '@/service/axios'

class CrmGlobal {
  async getCountries (body) {
    try {
      const data = await amgApi.post('/view-countrys', body)
      return data
    } catch (error) {
      console.log('Something went wrong on getCountries:', error)
      throw error
    }
  }
  
  async getOwners ({ modul, body }) {
    try {
      const data = await amgApi.post(`/usermodule/${ modul }`, body)
      return data
    } catch (error) {
      console.log('Something went wrong on getOwners:', error)
      throw error
    }
  }

  async getPrograms (params) {
    try {
      const data = await amgApi.get('/programs', { params })
      return data
    } catch (error) {
      console.log('Something went wrong on getPrograms:', error)
      throw error
    }
  }

  async getSellers ({ modul, body }) {
    try {
      const data = await amgApi.post(`/sellerall/${ modul }`, body)
      return data
    } catch (error) {
      console.log('Something went wrong on getSellers:', error)
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

  async postUniqueMobile (body) {
    try {
      const data = await amgApi.post('/uniquemobile', body)
      return data
    } catch (error) {
      console.log('Something went wrong on postUniqueMobile:', error)
      throw error
    }
  }
}

export default new CrmGlobal()
