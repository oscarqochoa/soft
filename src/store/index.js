import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import ecommerceStoreModule from '@/views/apps/e-commerce/eCommerceStoreModule'
import stickyNotesStoreModule from '@/layouts/components/navbar/components/sticky-notes/store/sticky-notes.store'
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    'app-ecommerce': ecommerceStoreModule,
    auth,
    'sticky-notes': stickyNotesStoreModule
  },
  strict: process.env.DEV,
})
