<template>
  <div>
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
  </div>
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