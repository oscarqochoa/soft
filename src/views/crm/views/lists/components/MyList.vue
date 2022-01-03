<template>
  <div>
    <b-tabs pills 
      
      active-nav-item-class="bg-important box-shadow-important border-important">
      <b-tab title="Pending" title-link-class="border-secondary ml-1">
        <pending-done active
         :status="1"
        />
      </b-tab>
      <b-tab title="Done" title-link-class="border-secondary ml-1">
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