import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import ecommerceStoreModule from '@/views/apps/e-commerce/eCommerceStoreModule'
import app from '@/store/app'
import appConfig from '@/store/app-config'
import verticalMenu from '@/store/vertical-menu'
import auth from '@/store/auth'
import CrmStore from '@/views/crm/store'
import stickyNotesStoreModule from '@/layouts/components/navbar/components/sticky-notes/store/sticky-notes.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    'app-ecommerce': ecommerceStoreModule,
    auth,
    'crm-store': CrmStore,
    'sticky-notes': stickyNotesStoreModule
  },
  strict: process.env.DEV,
})
