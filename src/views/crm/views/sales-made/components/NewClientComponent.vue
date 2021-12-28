<template>
  <div>
    <b-tabs
      pills
      lazy
      active-nav-item-class="bg-important border-0 shadow-none"
    >
      <b-tab
        title="Done"
      >
        <sales-made-new-client-component
          :done="1"
        />
      </b-tab>
      <b-tab title="Pending">
        <sales-made-new-client-component
          :done="0"
        />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import SalesMadeNewClientComponent from '@/views/crm/views/sales-made/components/new-client/SalesMadeNewClientComponent.vue'

export default {
  name: 'NewClientComponent',
  components: {
    SalesMadeNewClientComponent,
  },
}
</script>

<style scoped>
.nav-item {
  border: 1px solid black !important;
}
</style>
