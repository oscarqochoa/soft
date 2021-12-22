<template>
<div>
  <h1>{{message}}</h1>
  <pre>{{currentUser}}</pre>
  <p>AAAAAAAAAAAAAAAA</p>
  <pre>{{ userRole }}</pre>
</div>

</template>

<script>
import CrmService from '../../services/crm.service'
import { mapGetters } from 'vuex';
export default {
  name: "Test",
  mounted() {
    amgApi
      .get("/welcome")
      .then((response) => {
        console.log(response);
      });
  },
  data() {
    return {
      message: "Hello World 2!",
    };
  },
  async created()
  {
    try {
      await CrmService.getAlgo()
    } catch (error) {
      console.log('Somthing went wrong created:', error)
      this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
    }
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      token: "auth/token",
      userRole: "auth/userRole",
    }),
  },
};
</script>

<style>
</style>
