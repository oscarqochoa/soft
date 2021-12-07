<template>
  <div>
    <b-tabs lazy>
      <b-tab title="Pending">
        <pending active
         
        />
      </b-tab>
      <b-tab title="Done">
        <done
          
        />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Pending from './subcomponents/Pending.vue'
import Done from './subcomponents/Done.vue'
export default {
    components:{
        Pending,
        Done,
    },
}
</script>