import Vue from "vue";
import FeatherIcon from "@core/components/feather-icon/FeatherIcon.vue";
import CustomFeatherIcons from "./icons/CustomFeatherIcons.vue";
import FilterComponent from "./views/commons/FiltersComponent.vue";
Vue.component(FeatherIcon.name, FeatherIcon);
Vue.component(CustomFeatherIcons.name, CustomFeatherIcons);
Vue.component("filters-component", FilterComponent);
