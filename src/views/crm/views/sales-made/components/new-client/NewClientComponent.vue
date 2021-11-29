<template>
  <div>
    <b-tabs>
      <b-tab title="Done">
        <sales-made-new-client-component
          :input-fields="['selected', 'client', 'program',
                          'captured', 'seller', 'fee',
                          'initial_amount', 'contract_fee_status',
                          'notes_status', 'trackings', 'files',
                          'status', 'creates', 'approved', 'sms', 'url'
          ]"
          :done="1"
        />
      </b-tab>
      <b-tab title="Pending">
        <sales-made-new-client-component
          :input-fields="['selected', 'client', 'program',
                          'captured', 'seller', 'fee',
                          'initial_amount', 'contract_fee_status',
                          'notes_status', 'trackings', 'files',
                          'status', 'creates', 'approved', 'sms', 'url', 'done'
          ]"
          :done="0"
        />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import SalesMadeNewClientComponent from './components/SalesMadeNewClientComponent.vue'

export default {
  name: 'NewClientComponent',
  components: {
    SalesMadeNewClientComponent,
  },
}
</script>

<style scoped>

</style>
