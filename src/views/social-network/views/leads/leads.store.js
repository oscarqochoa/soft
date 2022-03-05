// Import libraries
import Vue from 'vue'

import SNLeadsService from '@/views/social-network/services/leads'
import mixins from '@/mixins/general'
import crmService from "@/views/crm/services/crm.service";
import crmGlobal from "@/views/crm/services/global";

const state = {
    S_LEADS: {
        items: [],
        total: 0,
        fromPage: 0,
        toPage: 0,
    },
    S_LEAD: null,
    S_TRACKING_NEW_LEADS: [],
    S_SMS_SENT_TO_NEW_LEADS: [],
    S_SELECTED_LEADS: [],
    S_STATUS_LEADS: [],
    S_SUB_SOURCES: [],
    S_FAN_PAGE_PROGRAMS: [],
    S_PROGRAMS: [],
    S_FLYERS: [],
    S_REASONS_NOT_POTENTIAL: [],
    S_SELLERS: [],
    S_FILTERS_LEADS: {
        searchQuery: '',
        from: null,
        to: null,
        cr: null,
        statusLead: null,
        program: null,
        sourceName: null,
        owner: null,
        task: null,
        stAd: null,
        typeDoc: null,
    },
    S_STATES_LEADS: [],
    S_OWNERS_LEADS: [],
}
const getters = {
    G_STATUS_LEADS() {
        const data = state.S_STATUS_LEADS.map(el => ({ label: el.value, id: el.id }))
        return data
    },
    G_REASONS_NOT_POTENTIAL() {
        const data = state.S_REASONS_NOT_POTENTIAL.map(el => ({ label: el.reason, id: el.id }))
        return data
    }
}
const mutations = {
    SET_DATA(state, params) {
        Vue.set(state, params.destination, params.data)
    },
    REMOVE_LEAD_DATA(state, params) {
        const index = state[params.destination].items.map(el => el.id).indexOf(params.id)
        if (index !== -1) {
            state[params.destination].items.splice(index, 1)
            state[params.destination].total--
        }
    },
    M_GET_STATE_LEADS(state, params) {
        state.S_STATES_LEADS = params;
    },
    M_GET_SOURCE_CN(state, states) {
        state.S_SUB_SOURCES = states;
    },
    M_FAG_PAGE_PROGRAMS(state, states) {
        state.S_FAN_PAGE_PROGRAMS = states;
    },
    REMOVE_DATA(state, params) {
        const index = state[params.destination]
          .map((el) => el.id)
          .indexOf(params.id);
        if (index !== -1) {
          state[params.destination].splice(index, 1);
        }
      },
    M_GET_FLYERS(state, states) {
        state.S_FLYERS = states;
    }
}
const actions = {
    async A_GET_NEW_LEADS({ commit }, body) {
        try {
            const response = await SNLeadsService.getNewLeads(body)

            const data = {
                items: response.data,
                total: response.total,
                fromPage: response.from,
                toPage: response.to,
            }
            commit('SET_DATA', {
                destination: 'S_LEADS',
                data
            })

            return response;
        } catch (error) {
            console.log("ERROR_GET_NEW_LEADS [ACTION]", error)
            throw error
        }
    },
    async A_GET_LEAD({ commit }, id) {
        try {
            const response = await SNLeadsService.getLead(id)

            if (response.status == 200) {
                commit('SET_DATA', {
                    destination: 'S_LEAD',
                    data: response.data[0]
                })
            }

            return response;
        } catch (error) {
            console.log("ERROR_GET_LEAD [ACTION]", error)
            throw error
        }
    },
    A_SET_SELECTED_LEADS({ commit }, data) {
        commit('SET_DATA', {
            destination: 'S_SELECTED_LEADS',
            data: data
        })
    },
    async A_GET_STATUS_LEADS({ commit }, params) {
        try {
            const response = await SNLeadsService.getStatusLeads(params)

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
    async A_GET_TRACKING_NEW_LEADS({ commit }, body) {
        try {
            const response = await SNLeadsService.getTrackingNewLeads(body)
            if (response.status == 200) {
                const data = response.data
                commit('SET_DATA', {
                    destination: 'S_TRACKING_NEW_LEADS',
                    data
                })
            }
        } catch (error) {
            console.log("ERROR_GET_TRACKING_NEW_LEADS [ACTION]", error);
            throw error
        }
    },
    async A_GET_SMS_SENT_TO_NEW_LEADS({ commit }, body) {
        try {
            const response = await SNLeadsService.getSmsSentToNewLeads(body)
            if (response.status == 200) {
                const data = response.data;

                commit('SET_DATA', {
                    destination: 'S_SMS_SENT_TO_NEW_LEADS',
                    data
                })
            }
        } catch (error) {
            console.log("ERROR_GET_SMS_SENT_TO_NEW_LEADS [ACTION]", error);
            throw error
        }
    },
    async A_POST_UPDATE_LEAD_INFORMATION({ commit }, body) {
        try {
            const response = await SNLeadsService.postUpdateLeadInformation(body)
            return response
        } catch (error) {
            console.log("ERROR_POST_UPDATE_LEAD_INFORMATION [ACTION]", error);
            throw error
        }
    },
    async A_POST_UPDATE_LEAD_INFORMATION_FIELDS({ commit }, body) {
        try {
            const response = await SNLeadsService.postUpdateLeadInformationFields(body)
            return response
        } catch (error) {
            console.log("ERROR_POST_UPDATE_LEAD_INFORMATION_FIELDS [ACTION]", error);
            throw error
        }
    },
    async A_DELETE_LEAD({ commit }, body) {
        try {
            const response = await SNLeadsService.postDeleteLead(body);

            if (response.status == 200) {
                commit('REMOVE_LEAD_DATA', {
                    destination: 'S_LEADS',
                    id: body.lead_id
                })
            }

            return response
        } catch (error) {
            console.log("ERROR_POST_DELETE_LEAD", error);
            throw error
        }
    },
    async A_GET_OLD_LEADS({ commit }, body) {
        try {
            const response = await SNLeadsService.getOldLeads(body)
            if (response.data.length > 0) {
                const data = {
                    items: response.data,
                    total: response.total,
                    fromPage: response.from,
                    toPage: response.to
                }
                commit('SET_DATA', {
                    destination: 'S_LEADS',
                    data
                })
                return response
            }

        } catch (error) {
            console.log("ERROR_GET_OLD_LEADS [ACTION]", error);
            throw error
        }

    },
    A_SET_FILTERS({ commit }, data) {
        commit('SET_DATA', {
            destination: 'S_FILTERS',
            data: data
        })
    },
    async A_GET_SUB_SOURCES({ commit }) {
        try {
            const response = await SNLeadsService.getSubSources()
            console.log('sd', response)
            if (response.status == 200) {
                commit('SET_DATA', {
                    destination: 'S_SUB_SOURCES',
                    data: response.data
                })
            }

        } catch (error) {
            console.log("ERROR_GET_SUB_SOURCES [ACTION]", error.response);
            throw error;
        }
    },
    async A_GET_SUB_SOURCE_SN({ commit }) {
        try {
            const resp = await SNLeadsService.getSubSourceSn();
            commit('M_GET_SOURCE_CN', resp)
        } catch (e) {
            console.log(e)
        }
    },
    async A_GET_FAN_PAGE_PROGRAMS({ commit }) {
        console.log('asdasd')
        try {
            const { data } = await SNLeadsService.getFanPagePrograms()
            commit('M_FAG_PAGE_PROGRAMS', data);

            return response
        } catch (error) {
            console.log("ERROR_GET_FAN_PAGE_PROGRAMS [ACTION]", error);
            throw error
        }
    },
    async A_POST_VALIDATE_NICKNAME({ commit }, body) {
        try {
            const response = await SNLeadsService.postValidateNickname(body)
            return response
        } catch (error) {
            console.log("ERROR_POST_VALIDATE_NICKNAME [ACTION]", error)
            throw error
        }
    },
    async A_GET_FLYERS({ commit }, params) {
        try {
            const { data } = await SNLeadsService.getFlyers(params)
            commit('M_GET_FLYERS', data);
        } catch (error) {
            console.log("ERROR_GET_FLYERS [ACTION]", error)
            throw error
        }
    },
    async A_GET_REASONS_NOT_POTENTIAL({ commit }) {
        try {
            const response = await SNLeadsService.getReasonsNotPotential()

            if (response.status == 200) {
                commit('SET_DATA', {
                    destination: 'S_REASONS_NOT_POTENTIAL',
                    data: response.data
                })
            }
        } catch (error) {
            console.log("ERROR_GET_REASONS_NOT_POTENTIAL [ACTION]", error);
            throw error
        }
    },
    async A_POST_SAVE_REASON_NOT_POTENTIAL({ commit }, body) {
        try {
            const response = await SNLeadsService.postSaveReasonNotPotential(body)
            return response
        } catch (error) {
            console.log("ERROR_POST_SAVE_REASON_NOT_POTENTIAL [ACTION]", error)
            throw error
        }
    },
    async A_GET_VALIDATE_UNIQUE_MOBILE({ commit }, body) {
        try {
            const response = await SNLeadsService.getValidateUniqueMobile(body)
            return response
        } catch (error) {
            console.log("ERROR_GET_VALIDATE_UNIQUE_MOBILE [ACTION]", error)
            throw error
        }
    },
    async A_GET_SELLERS_BY_DATE_AND_TYPE_TASK({ commit }, body) {
        try {
            const response = await SNLeadsService.getSellersByDateAndTypeTask(body)
            if (response.status == 200) {
                commit('SET_DATA', {
                    destination: 'S_SELLERS',
                    data: response.data,
                })
            }

            return response
        } catch (error) {
            console.log("ERROR_GET_SELLERS_BY_DATE_AND_TYPE_TASK [ACTION]", error);
            throw error
        }
    },
    async A_GET_STATE_LEAD({ commit }, body) {
        try {
            const resp = await SNLeadsService.getStateLeads({type: 1});
            //commit('M_GET_STATE_LEADS', resp.data);
            return resp.data
        } catch (e) {
            console.log(e);
        }
    },
    async A_GET_OWNERS({ commit }, { modul, body }) {
        try {
            const response = await crmService.getOwners({ modul, body });
            return response;
        } catch (error) {
            console.log("ERROR_GET_OWNERS [ACTION]", error);
            throw error;
        }
    },
    async A_GET_PROGRAMS({ commit }, params) {
        try {
            const response = await crmGlobal.getPrograms(params)
            return response.data
        } catch (error) {
            console.log('ERROR_GET_PROGRAMS [ACTION]', error)
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