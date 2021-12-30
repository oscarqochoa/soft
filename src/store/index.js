import Vue from "vue";
import Vuex from "vuex";

// Modules
import ecommerceStoreModule from "@/views/apps/e-commerce/eCommerceStoreModule";
import app from "@/store/app";
import appConfig from "@/store/app-config";
import verticalMenu from "@/store/vertical-menu";
import auth from "@/store/auth";
import CrmStore from "@/views/crm/store";
import saleMade from "@/views/crm/store/saleMade.store";
import CommissionsStore from "@/views/commons/components/commissions/store";
import LoansStore from "@/views/commons/components/loans/store";
import GlobalStore from "@/views/store";
import stickyNotesStoreModule from "@/layouts/components/navbar/components/sticky-notes/store/sticky-notes.store";
import TaskStore from '@/store/task'
import NotificationStore from '@/store/notification'
import InventoryStore from '@/views/commons/components/inventory/store'
import NCRStore from '@/views/commons/components/ncr/store'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    
    'app-ecommerce': ecommerceStoreModule,
    auth,
    "crm-store": saleMade,
    ...CrmStore,
    "commissions-store": CommissionsStore,
    "loans-store": LoansStore,
    "global-store": GlobalStore,
    TaskStore,
    "sticky-notes": stickyNotesStoreModule,
    "inventory-store":InventoryStore,
    "ncr-store":NCRStore,
    NotificationStore
  },
  strict: process.env.DEV,
});
