// IMPORT LIBRARIES
import Vue from 'vue'

import crmLead from '@/views/crm/services/lead'
import mixins from '@/mixins/general'

const state = {
  S_LEADS: [],
  S_SN_LEADS: [],
  S_W_POTENTIAL_LEADS: [],
  S_SELECTED_LEADS: [],
  S_STATE_LEADS: [],
  S_STATUS_LEADS: [],
  S_SOURCE_LEADS: [],
  S_LEAD: {},
  S_FILTERS_LEADS: {
    searchQuery: '',
    assignTo: null,
    from: null,
    to: null,
    statusLead: null,
    owner: null,
    assignTo: null,
    cr: null,
    program: null,
    sourceName: null,
    typeDoc: null,
    stAd: null,
    perPage: 10,
    currentPage: 1
  },
}
const getters = {
  G_STATE_LEADS () {
    const stateLeads = state.S_STATE_LEADS.map(el => ({ label: el.name, value: el.id }))
    return stateLeads
  },
  G_STATUS_LEADS () {
    const statusLeads = state.S_STATUS_LEADS.map(el => ({ label: el.value, value: el.id }))
    return statusLeads
  },
  G_SOURCE_LEADS () {
    const sourceLeads = state.S_SOURCE_LEADS.map(el => ({ label: el.value, value: el.id }))
    return sourceLeads
  },
}
const mutations = {
  SET_DATA (state, params) {
    Vue.set(state, params.destination, params.data)
  },
  PUSH_DATA (state, params) {
    state[params.destination].push(params.data)
  },
  REMOVE_DATA (state, params) {
    const index = state[params.destination].map(el => el.id).indexOf(params.id)
    if (index !== -1) {
      state[params.destination].splice(index, 1)
    }
  }
}
const actions = {
  async A_GET_LEADS ({ commit }, body) {
    try {
      const response = await crmLead.getLeads(body)
      console.log('A_GET_LEADS response', response)
      commit('SET_DATA', {
        destination: 'S_LEADS',
        data: response.data
      })
      return response
    } catch (error) {
      console.log('ERROR_GET_LEADS [ACTION]', error)
      throw error
    }
  },
  async A_GET_LEAD ({ commit }, { id, params}) {
    try {
      const response = await crmLead.getLead(id, params)
      console.log('A_GET_LEAD response', response)
      commit('SET_DATA', {
        destination: 'S_LEAD',
        data: response.data
      })
      return response
    } catch (error) {
      console.log('ERROR_GET_LEAD [ACTION]', error)
      throw error
    }
  },
  async A_GET_SN_LEADS ({ commit }, body) {
    try {
      const response = await crmLead.getLeadsSn(body)
      console.log('A_GET_SN_LEADS response', response)
      commit('SET_DATA', {
        destination: 'S_SN_LEADS',
        data: response.data
      })
      return response
    } catch (error) {
      console.log('ERROR_GET_SN_LEADS [ACTION]', error)
      throw error
    }
  },
  async A_GET_W_POTENTIAL_LEADS ({ commit }, body) {
    try {
      const response = await crmLead.getLeadsWPotential(body)
      console.log('A_GET_W_POTENTIAL_LEADS response', response)
      commit('SET_DATA', {
        destination: 'S_W_POTENTIAL_LEADS',
        data: response.data
      })
      return response
    } catch (error) {
      console.log('ERROR_GET_W_POTENTIAL_LEADS [ACTION]', error)
      throw error
    }
  },
  async A_GET_STATE_LEADS ({ commit }, params) {
    try {
      const response = await crmLead.getStateLeads(params)
      console.log('A_GET_STATE_LEADS response', response)
      commit('SET_DATA', {
        destination: 'S_STATE_LEADS',
        data: response.data
      })
      return response
    } catch (error) {
      console.log('ERROR_GET_STATE_LEADS [ACTION]', error)
      throw error
    }
  },
  async A_GET_STATUS_LEADS ({ commit }, params) {
    try {
      const response = await crmLead.getStatusLeads(params)
      console.log('A_GET_STATUS_LEADS response', response)
      commit('SET_DATA', {
        destination: 'S_STATUS_LEADS',
        data: response.data
      })
      return response
    } catch (error) {
      console.log('ERROR_GET_STATUS_LEADS [ACTION]', error)
      throw error
    }
  },
  async A_GET_SOURCE_LEADS ({ commit }, params) {
    try {
      const response = await crmLead.getSourceLeads(params)
      console.log('A_GET_SOURCE_LEADS response', response)
      commit('SET_DATA', {
        destination: 'S_SOURCE_LEADS',
        data: response.data
      })
      return response
    } catch (error) {
      console.log('ERROR_GET_SOURCE_LEADS [ACTION]', error)
      throw error
    }
  },

  /* SETS */

  A_SET_SELECTED_LEADS ({ commit }, data) {
    commit('SET_DATA', {
      destination: 'S_SELECTED_LEADS',
      data: data
    })
  },
  A_SET_FILTERS_LEADS ({ commit }, data) {
    commit('SET_DATA', {
      destination: 'S_FILTERS_LEADS',
      data: data
    })
  },
  async A_SET_LEADS ({ commit }, body) {
    try {
      const response = await crmLead.postCreateLead(body)
      console.log('A_SET_LEADS response', response)
      if (mixins.methods.isResponseSuccess(response)) {
        body.id = response.data.id
        commit('PUSH_DATA', {
          destination: 'S_LEADS',
          data: body
        })
      }
      return response
    } catch (error) {
      console.log('ERROR_SET_LEADS [ACTION]', error)
      throw error
    }
  },
  async A_SET_REQUEST_LEADS ({ commit }, body) {
    try {
      const response = await crmLead.postRequestLead(body)
      console.log('A_SET_REQUEST_LEADS response', response)
      return response
    } catch (error) {
      console.log('ERROR_SET_REQUEST_LEADS [ACTION]', error)
      throw error
    }
  },

  /* DELETES */
  
  async A_DELETE_LEADS ({ commit }, body) {
    try {
      const response = await crmLead.postDeleteLead(body)
      console.log('A_DELETE_LEADS response', response)
      if (mixins.methods.isResponseSuccess(response))
        commit('REMOVE_DATA', {
          destination: 'S_LEADS',
          id: body.leadid
        })
      return response
    } catch (error) {
      console.log('ERROR_DELETE_LEADS [ACTION]', error)
      throw error
    }
  },

  /* OTHER ACTIONS */

  async A_PROCESS_LEADS ({ commit }, body) {
    try {
      const response = await crmLead.postProcessLead(body)
      console.log('A_PROCESS_LEADS response', response)
      return response
    } catch (error) {
      console.log('ERROR_PROCESS_LEADS [ACTION]', error)
      throw error
    }
  },
  async A_GET_USER_APPOINTMENT_SN ({ commit }, body) {
    try {
      const response = await crmLead.postUserAppointmentSn(body)
      console.log('A_GET_USER_APPOINTMENT_SN response', response)
      return response
    } catch (error) {
      console.log('ERROR_GET_USER_APPOINTMENT_SN [ACTION]', error)
      throw error
    }
  },
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations

}
