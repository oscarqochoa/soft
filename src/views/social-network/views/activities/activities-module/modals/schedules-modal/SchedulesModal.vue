<template>
  <b-modal
    v-model="ownControl"
    scrollable
    title-class="h3 text-white font-weight-bolder"
    title="CREATE TASK"
    size="lg"
    @hidden="closeModal"
  />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {

      ownControl: false,

    }
  },
  created() {
    this.ownControl = true
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token',

    }),
  },
  methods: {

    closeModal() {
      this.$emit('close')
    },
    // eslint-disable-next-line consistent-return

  },

}
</script>

<style scoped>

</style>
