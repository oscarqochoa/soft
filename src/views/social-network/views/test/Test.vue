<template>
  <div>
    <pre>
    {{ currentUser }}
  </pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Test',
  created() {
    console.log(this.$route)
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
    }),
  },
}
</script>

<style scoped>

</style>
