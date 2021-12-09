<template>
  <b-modal
    v-model="modal.buisness"
    lazy
    centered
    title-class="h3"
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
              :value="buisness.program"
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
              :value="buisness.client"
            />
          </b-input-group>
        </b-col>
      </b-row>
      <b-row>
        <b-card
          header="SINGLE PAYMENT"
          align="center"
        />
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
import { amgApi } from '@/service/axios'

export default {
  name: 'BuisnessModal',
  props: {
    modal: {
      type: Object,
      required: true,
    },
    buisness: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      singlePayment: [],
      multiplePayment: [],
    }
  },
  async created() {
    try {
      const { programs } = await amgApi.post('/searchprogram', { id: 1 })
      this.singlePayment = programs.filter(program => program.type === '1')
      this.multiplePayment = programs.filter(program => program.type === '1')
      console.log(this.singlePayment, this.multiplePayment)
    } catch (error) {
      this.showToast('danger', 'top-right', 'Error', 'XIcon', error)
    }
  },
}
</script>

<style scoped>

</style>
