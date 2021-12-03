<template>
  <b-modal
    v-model="modal.initial_payment"
    lazy
    centered
    header-bg-variant="primary"
    title-class="text-white h3"
    size="lg"
    title="INITIAL PAYMENT"
    hide-footer
    scrollable
  >
    <b-container fluid>
      <b-row>
        <b-col>
          <b-input-group>
            <b-input-group-prepend>
              <b-btn variant="secondary">
                PROGRAM
              </b-btn>
            </b-input-group-prepend>
            <b-form-input
                disabled
                :value="initial_payment.program"
            />
          </b-input-group>
        </b-col>
        <b-col>
          <b-input-group>
            <b-input-group-prepend>
              <b-btn variant="secondary">
                CLIENT
              </b-btn>
            </b-input-group-prepend>
            <b-form-input
                disabled
                :value="initial_payment.client"
            />
          </b-input-group>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
export default {
  name: 'InitialPaymentModal',
  props: {
    modal: {
      type: Object,
      required: true,
    },
    initial_payment: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
