<template>
  <div>
    <tabler-icon icon="CurrencyDollarIcon" size="21" />
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
      title-class="h3 text-white"
      hide-footer
      modal-class="modal-primary"
      id="modalPayStup"
    >
      <pay-stub-grid></pay-stub-grid>
    </b-modal>
  </div>
</template>

<script>
import PayStubGrid from "./PayStubGrid.vue";
export default {
  data() {
    return {
      payStubModalController: false,
    };
  },
  components: {
    PayStubGrid,
  },
  methods: {
    openPayStubModal() {
      this.payStubModalController = true;
    },
  },
};
</script>

<style lang="scss">
#modalPayStup {
  .modal-body {
    padding: 0 !important;
  }
}
</style>