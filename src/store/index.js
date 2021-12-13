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
import GlobalStore from "@/views/store";
import stickyNotesStoreModule from "@/layouts/components/navbar/components/sticky-notes/store/sticky-notes.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    "app-ecommerce": ecommerceStoreModule,
    auth,
    "crm-store": saleMade,
    ...CrmStore,
    "commissions-store": CommissionsStore,
    "global-store": GlobalStore,
    "sticky-notes": stickyNotesStoreModule,
  },
  strict: process.env.DEV,
});
