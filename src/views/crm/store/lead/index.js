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
  S_FILES_LEADS: [],
  S_USER_APPOINTEMENTS: [],
  S_LEAD: new Object,
  S_LEAD_EDIT: new Object,
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
    const stateLeads = state.S_STATE_LEADS.map(el => ({ label: el.name, id: el.id }))
    return stateLeads
  },
  G_STATUS_LEADS () {
    const statusLeads = state.S_STATUS_LEADS.map(el => ({ label: el.value, id: el.id }))
    return statusLeads
  },
  G_SOURCE_LEADS () {
    const sourceLeads = state.S_SOURCE_LEADS.map(el => ({ label: el.value, id: el.id }))
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
  },
  UPDATE_DATA (state, params) {
    for (let key in state[params.destination]) {
      if (params.data[key] && key !== 'id') {
        state[params.destination][key] = params.data[key]
      }
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
        data: response[0]
      })
      return response
    } catch (error) {
      console.log('ERROR_GET_LEAD [ACTION]', error)
      throw error
    }
  },
  async A_GET_LEAD_EDIT ({ commit }, { id, params}) {
    try {
      const response = await crmLead.getLeadEdit(id, params)
      console.log('A_GET_LEAD_EDIT response', response)
      commit('SET_DATA', {
        destination: 'S_LEAD_EDIT',
        data: response[0]
      })
      return response
    } catch (error) {
      console.log('ERROR_GET_LEAD_EDIT [ACTION]', error)
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
  async A_GET_FILES_LEADS ({ commit }, body) {
    try {
      const response = await crmLead.postSearchFileLead(body)
      console.log('A_GET_FILES_LEADS response', response)
      if (mixins.methods.isResponseSuccess(response)) {
        response.data.map(el => { el.isDisabled = true })
        commit('SET_DATA', {
          destination: 'S_FILES_LEADS',
          data: response.data
        })
      }
      return response
    } catch (error) {
      console.log('ERROR_GET_FILES_LEADS [ACTION]', error)
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
  async A_SET_FILE_LEAD ({ commit }, body) {
    try {
      const response = await crmLead.postFileLead(body)
      console.log('A_SET_FILE_LEAD response', response)
      return response
    } catch (error) {
      console.log('ERROR_SET_FILE_LEAD [ACTION]', error)
      throw error
    }
  },

  /* UPDATE */

  async A_UPDATE_FILE_NAME_LEAD ({ commit }, body) {
    try {
      const response = await crmLead.postFileNameLead(body)
      console.log('A_UPDATE_FILE_NAME_LEAD response', response)
      return response
    } catch (error) {
      console.log('ERROR_UPDATE_FILE_NAME_LEAD [ACTION]', error)
      throw error
    }
  },
  async A_UPDATE_FIELDS_LEAD ({ commit }, body) {
    try {
      const response = await crmLead.putFieldsLead(body)
      console.log('A_UPDATE_FIELDS_LEAD response', response)
      return response
    } catch (error) {
      console.log('ERROR_UPDATE_FIELDS_LEAD [ACTION]', error)
      throw error
    }
  },
  async A_UPDATE_LEAD ({ commit }, { id, body }) {
    try {
      const response = await crmLead.putLead(id, body)
      console.log('A_UPDATE_LEAD response', response)
      commit('UPDATE_DATA', {
        destination: 'S_LEAD',
        data: body
      })
      return response
    } catch (error) {
      console.log('ERROR_UPDATE_LEAD [ACTION]', error)
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
  
  async A_DELETE_FILES_LEADS ({ commit }, body) {
    try {
      const response = await crmLead.deleteFileLead(body)
      console.log('A_DELETE_FILES_LEADS response', response)
      if (mixins.methods.isResponseSuccess(response))
        commit('REMOVE_DATA', {
          destination: 'S_FILES_LEADS',
          id: body.file_id
        })
      return response
    } catch (error) {
      console.log('ERROR_DELETE_FILES_LEADS [ACTION]', error)
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
      if (mixins.methods.isResponseSuccess(response)) {
        response.data.map(el => {
          el.label = body.taskForSn ? el.user_name : `${ el.user_name } (${ el.count_task }) ${ ( el.disabled > 0 ? '(Not Available)' : '') }`,
          el.value = el.id,
          el.itemDisabled = el.disabled > 0 ? true : false
        })
        commit('SET_DATA', {
          destination: 'S_USER_APPOINTEMENTS',
          data: response.data
        })
      }
      return response
    } catch (error) {
      console.log('ERROR_GET_USER_APPOINTMENT_SN [ACTION]', error)
      throw error
    }
  },
  async A_LEAD_PAYMENT ({ commit }, body) {
    try {
      const response = await crmLead.postLeadPayment(body)
      console.log('A_LEAD_PAYMENT response', response)
      return response
    } catch (error) {
      console.log('ERROR_LEAD_PAYMENT [ACTION]', error)
      throw error
    }
  },
  async A_MY_LIST_CREATE ({ commit }, body) {
    try {
      const response = await crmLead.postMyListCreate(body)
      console.log('A_MY_LIST_CREATE response', response)
      return response
    } catch (error) {
      console.log('ERROR_MY_LIST_CREATE [ACTION]', error)
      throw error
    }
  },
  async A_SET_POTENTIAL ({ commit }, body) {
    try {
      const response = await crmLead.postSetPotential(body)
      console.log('A_SET_POTENTIAL response', response)
      return response
    } catch (error) {
      console.log('ERROR_SET_POTENTIAL [ACTION]', error)
      throw error
    }
  },
  async A_CHANGE_STATUS_SN ({ commit }, body) {
    try {
      const response = await crmLead.postChangeStatusSn(body)
      console.log('A_CHANGE_STATUS_SN response', response)
      return response
    } catch (error) {
      console.log('ERROR_CHANGE_STATUS_SN [ACTION]', error)
      throw error
    }
  },
  async A_VALID_UNIQUE_SSN ({ commit }, body) {
    try {
      const response = await crmLead.postUniquesSsn(body)
      console.log('A_VALID_UNIQUE_SSN response', response)
      return response
    } catch (error) {
      console.log('ERROR_VALID_UNIQUE_SSN [ACTION]', error)
      throw error
    }
  },
  async A_VALID_UNIQUE_ITIN ({ commit }, body) {
    try {
      const response = await crmLead.postUniquesItin(body)
      console.log('A_VALID_UNIQUE_ITIN response', response)
      return response
    } catch (error) {
      console.log('ERROR_VALID_UNIQUE_ITIN [ACTION]', error)
      throw error
    }
  },
  async A_VALID_UNIQUE_CPN ({ commit }, body) {
    try {
      const response = await crmLead.postUniquesCpn(body)
      console.log('A_VALID_UNIQUE_CPN response', response)
      return response
    } catch (error) {
      console.log('ERROR_VALID_UNIQUE_CPN [ACTION]', error)
      throw error
    }
  },
  async A_GET_ALL_TRAKING_FIELDS_LEAD ({ commit }, body) {
    try {
      const response = await crmLead.postAllTrackingChangeLeads(body)
      console.log('A_GET_ALL_TRAKING_FIELDS_LEAD response', response)
      return response
    } catch (error) {
      console.log('ERROR_GET_ALL_TRAKING_FIELDS_LEAD [ACTION]', error)
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
