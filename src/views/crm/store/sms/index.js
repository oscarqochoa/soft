// IMPORT LIBRARIES
import Vue from 'vue'

import crmSms from '@/views/crm/services/sms'
import mixins from '@/mixins/general'

const state = {
  S_SMS_QUICKS: [],
  S_SMS_HISTORY_QUICKS: [],
}
const getters = {}
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
  async A_GET_SMS_QUICKS ({ commit }, body) {
    try {
      const response = await crmSms.getAllQuicksSms(body)
      console.log('A_GET_SMS_QUICKS response', response)
      commit('SET_DATA', {
        destination: 'S_SMS_QUICKS',
        data: response.data
      })
      return response
    } catch (error) {
      console.log('ERROR_GET_SMS_QUICKS [ACTION]', error)
      throw error
    }
  },
  async A_GET_HISTORY_SMS_LEADS ({ commit }, body) {
    try {
      const response = await crmSms.postHistorySmsLead(body)
      console.log('A_GET_HISTORY_SMS_LEADS response', response)
      commit('SET_DATA', {
        destination: 'S_SMS_HISTORY_QUICKS',
        data: response.data
      })
      return response
    } catch (error) {
      console.log('ERROR_GET_HISTORY_SMS_LEADS [ACTION]', error)
      throw error
    }
  },

  /* SETS */
  async A_SET_SMS_QUICK ({ commit }, body) {
    try {
      const response = await crmSms.postSaveQuickSms(body)
      console.log('A_SET_SMS_QUICK response', response)
      if (mixins.methods.isResponseSuccess(response)) {
        body.id = response.data.id
        commit('PUSH_DATA', {
          destination: 'S_SMS_QUICKS',
          data: body
        })
      }
      return response
    } catch (error) {
      console.log('ERROR_GET_SMS_QUICKS [ACTION]', error)
      throw error
    }
  },

  /* DELETES */
  
  async A_DELETE_SMS_QUICK ({ commit }, body) {
    try {
      const response = await crmSms.postDeleteQuickSms(body)
      console.log('A_DELETE_SMS_QUICK response', response)
      if (mixins.methods.isResponseSuccess(response))
        commit('REMOVE_DATA', {
          destination: 'S_SMS_QUICKS',
          id: body.id
        })
      return response
    } catch (error) {
      console.log('ERROR_DELETE_SMS_QUICK [ACTION]', error)
      throw error
    }
  },

  /* OTHER ACTIONS */

  async A_SEND_MESSAGE_LEAD ({ commit }, body) {
    try {
      const response = await crmSms.postSendMessageLead(body)
      console.log('A_SEND_MESSAGE_LEAD response', response)
      return response
    } catch (error) {
      console.log('ERROR_UNIQUE_MOBILE [ACTION]', error)
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
