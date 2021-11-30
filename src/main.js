import Vue from 'vue'
<<<<<<< HEAD
import {
  ToastPlugin, ModalPlugin, BootstrapVue, BootstrapVueIcons,
} from 'bootstrap-vue'
=======
import { ToastPlugin, ModalPlugin,BootstrapVue,BootstrapVueIcons } from 'bootstrap-vue'
>>>>>>> francoDev
import VueCompositionAPI from '@vue/composition-api'

import i18n from '@/libs/i18n'
import router from './router'
import store from './store'
import App from './App.vue'
import { amgApi } from './service/axios'
import { initialize } from './service/general'

import generalMixins from './mixins/general'
// Global Components
import './global-components'

// 3rd party plugins
import '@axios'
import '@/libs/acl'
import '@/libs/portal-vue'
import '@/libs/clipboard'
import '@/libs/toastification'
import '@/libs/sweet-alerts'
import '@/libs/vue-select'
import '@/libs/tour'

// Axios Mock Adapter
import '@/@fake-db/db'

// Filters

import './filters/dates'

window.amgApi = amgApi
// require('./service/axios');
// BSV Plugin Registration

Vue.use(ToastPlugin)
Vue.use(ModalPlugin)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
<<<<<<< HEAD
=======



>>>>>>> francoDev
// Composition API
Vue.use(VueCompositionAPI)

// Feather font icon - For form-wizard
// * Shall remove it if not using font-icons of feather-icons - For form-wizard
require('@core/assets/fonts/feather/iconfont.css') // For form-wizard

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

// Global Mixins general.js

Vue.mixin(generalMixins)

Vue.config.productionTip = false
initialize(router)
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
