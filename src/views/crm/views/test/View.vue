<template>
<div>
  <h1>{{message}}</h1>
  <pre>{{currentUser}}</pre>
</div>

</template>

<script>
import CrmService from '../../services/crm.service'
import { mapGetters } from 'vuex';
export default {
  name: "Test",
  mounted(){
      console.log(this.currentUser);
  },
  data() {
    return {
      message: "Hello World 2!",
    };
  },
  async created()
  {
    await CrmService.getAlgo()
  },
  computed:{
    ...mapGetters({
      currentUser: 'auth/currentUser'
    })
  }
};
</script>

<style>
</style>
