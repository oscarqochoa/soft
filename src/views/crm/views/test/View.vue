<template>
  <div>
    <pre>{{ currentUser }}</pre>

  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import CrmService from '../../services/crm.service'

export default {
  name: 'Test',
  data() {
    return {
      message: 'Hello World 2!',
    }
  },
  mounted() {
    amgApi
      .get('/welcome')
      .then(response => {
        console.log(response)
      })
  },
  async created() {
    try {
      await CrmService.getAlgo()
    } catch (error) {
      console.log('Somthing went wrong created:', error)
      this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token',
      userRole: 'auth/userRole',
    }),
  },
}
</script>

<style>
</style>
