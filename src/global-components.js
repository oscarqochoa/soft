import Vue from 'vue'
import FeatherIcon from '@core/components/feather-icon/FeatherIcon.vue'
import FilterComponent from './commons/FiltersComponent.vue'
Vue.component(FeatherIcon.name, FeatherIcon)
Vue.component('filters-component', FilterComponent);