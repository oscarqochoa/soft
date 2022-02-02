<template>
  <b-modal
    v-model="ownControl"
    scrollable
    title-class="h3 text-white font-weight-bolder"

    size="lg"
    @hidden="closeModal"
  >
    <template #modal-title>
      <span
        class="text-white"
        style="font-size: 20px; font-weight: 900;"
      >{{ userText }}</span>

    </template>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  props: ['userText'],
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
