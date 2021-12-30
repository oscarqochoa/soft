<template>
  <div>
    <b-tabs pills lazy
    active-nav-item-class="bg-important border-0 shadow-none">
      <b-tab title="Pending">
        <pending-done active
         :status="1"
        />
      </b-tab>
      <b-tab title="Done">
        <pending-done
          :status="2"
        />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import PendingDone from './subcomponents/PendingDone.vue'

export default {
    components:{
        PendingDone,
        
    },
}
</script>