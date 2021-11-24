<template>
  <div>
    <b-tabs>
      <b-tab title="Done">
        <new-client-done-component/>
      </b-tab>
      <b-tab title="Pending">
        <new-client-pending-component/>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import NewClientDoneComponent from '@/views/crm/views/sales-made/components/new-client/components/NewClientDoneComponent.vue'
import NewClientPendingComponent from '@/views/crm/views/sales-made/components/new-client/components/NewClientPendingComponent.vue'

export default {
  name: 'NewClientComponent',
  components: {
    NewClientDoneComponent,
    NewClientPendingComponent,
  },
}
</script>

<style scoped>

</style>
