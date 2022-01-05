import Vue from "vue";
import FeatherIcon from "@core/components/feather-icon/FeatherIcon.vue";
import AmgIcon from "./icons/AmgIcon.vue";
import FilterComponent from "./views/commons/FiltersComponent.vue";
import FilterSlot from '@/views/crm/views/sales-made/components/slots/FilterSlot.vue'
Vue.component(FeatherIcon.name, FeatherIcon);
Vue.component(AmgIcon.name, AmgIcon);
Vue.component("filters-component", FilterComponent);
Vue.component("filter-slot", FilterSlot);
