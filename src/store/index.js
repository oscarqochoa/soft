import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import ecommerceStoreModule from '@/views/apps/e-commerce/eCommerceStoreModule'
import app from '@/store/app'
import appConfig from '@/store/app-config'
import verticalMenu from '@/store/vertical-menu'
import auth from '@/store/auth'
import CrmStore from '@/views/crm/store'
import saleMade from '@/views/crm/views/sales-made/sale-made.store'
import CommissionsStore from '@/views/commons/components/commissions/store'
import LoansStore from '@/views/commons/components/loans/store'
import GlobalStore from '@/views/store'
import stickyNotesStoreModule from '@/layouts/components/navbar/components/sticky-notes/store/sticky-notes.store'
import TaskStore from '@/store/task'
import NotificationStore from '@/store/notification'
import InventoryStore from '@/views/commons/components/inventory/store'
import NCRStore from '@/views/commons/components/ncr/store'
import UserStore from '@/store/user'
import MessageStore from '@/store/message'
import SidebarStore from '@/store/sidebar'

import SocialNetworkStore from '@/views/social-network/store'

Vue.use(Vuex)

const initialState = {
  ecommerceStoreModule: { ...ecommerceStoreModule.state },
  CrmStore: { ...CrmStore.state },
  SocialNetworkStore: {...SocialNetworkStore.state },
  saleMade: { ...saleMade.state },
  CommissionsStore: { ...CommissionsStore.state },
  LoansStore: { ...LoansStore.state },
  GlobalStore: { ...GlobalStore.state },
  stickyNotesStoreModule: { ...stickyNotesStoreModule.state },
  TaskStore: { ...TaskStore.state },
  NotificationStore: { ...NotificationStore.state },
  InventoryStore: { ...InventoryStore.state },
  NCRStore: { ...NCRStore.state },
  UserStore: { ...UserStore.state },
  MessageStore: { ...MessageStore.state },
  SidebarStore: { ...SidebarStore.state },
}

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    'app-ecommerce': ecommerceStoreModule,
    auth,
    'crm-store': saleMade,
    ...CrmStore,
    ...SocialNetworkStore,
    'commissions-store': CommissionsStore,
    'loans-store': LoansStore,
    'global-store': GlobalStore,
    TaskStore,
    'sticky-notes': stickyNotesStoreModule,
    'inventory-store': InventoryStore,
    'ncr-store': NCRStore,
    NotificationStore,
    UserStore,
    MessageStore,
    SidebarStore,
  },
  mutations: {
    resetState(state) {
      Object.keys(state).forEach(key => {
        Object.assign(state[key], initialState[key])
      })
    },
  },
  strict: process.env.DEV,
})
