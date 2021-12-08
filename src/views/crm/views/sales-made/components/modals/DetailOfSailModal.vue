<template>
  <b-modal
    v-model="modal.boost_credit"
    lazy
    centered
    header-bg-variant="primary"
    title-class="text-white h3"
    size="lg"
    title="DETAIL OF SALE"
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
              :value="boost_credit.program"
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
              :value="boost_credit.client"
            />
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col class="d-flex justify-content-center align-items-center">
          <div class="text-center border p-0 rounded">
            <p class="m-0 py-1">
              FEE
            </p>
            <p class="bg-secondary px-4 py-2 text-white m-0 rounded-bottom">
              $ {{ boost_credit.fee }}
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
export default {
  name: 'DetailOfSailModal',
  props: {
    modal: {
      type: Object,
      required: true,
    },
    boost_credit: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
