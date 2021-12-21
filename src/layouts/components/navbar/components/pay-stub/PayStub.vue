<template>
  <b-nav-item @click="openPayStubModal" :id="`bookmark-pay-stub`">
    <feather-icon  icon="DollarSignIcon" size="19" />
    <b-tooltip
      triggers="hover"
      :target="`bookmark-pay-stub`"
      title="Pay Stub"
      :delay="{ show: 1000, hide: 50 }"
    />
    <b-modal
      v-model="payStubModalController"
      title="Pay Stub"
      size="lg"
      hide-footer
    >
      <pay-stub-grid></pay-stub-grid>
    </b-modal>
  </b-nav-item>
</template>

<script>
import PayStubGrid from './PayStubGrid.vue';
export default {
  data(){
    return{
      payStubModalController: false,
    }
  },
  components: {
    PayStubGrid,
  },
  methods: {
    openPayStubModal(){
      this.payStubModalController = true;
    },
  },
};
</script>

<style>
</style>