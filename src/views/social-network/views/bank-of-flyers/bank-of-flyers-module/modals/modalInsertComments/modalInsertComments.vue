<template>
  <b-modal
    v-model="ownControl"
    scrollable
    title-class="h3 text-white font-weight-bolder"

    size="lg"
    @hidden="closeModal"
  >

    <template #modal-header>
      <p class="font-medium-3 font-weight-bolder text-white d-flex align-items-center justify-content-center w-100 "> NEW COMMENT

      </p></template>

    <b-form-textarea
      id="textarea"
      v-model="comments"
      placeholder="Enter something..."
    />

    <template #modal-footer>
      <b-button
        variant="primary"
        @click="insertFlyerComments"
      >
        SAVE
      </b-button>

    </template>
  </b-modal>
</template>

<script>

import { mapGetters } from 'vuex'
import SocialNetworkService from '@/views/social-network/services/social-network.service'

export default {
  props: {

    index: null,

  },
  data() {
    return {
      baseImg: process.env.VUE_APP_BASE_URL_FRONT,
      ownControl: false,
      comments: null,

    }
  },
  created() {
    this.ownControl = true
  },
  computed: {
    ...mapGetters({

      currentUser: 'auth/currentUser',

    }),
  },
  methods: {

    closeModal() {
      this.$emit('close')
    },
    async insertFlyerComments() {
      try {
        const params = {
          comments: this.comments,
          flyer_id: this.index,
          user_id: this.currentUser.user_id,
        }
        console.log(params)
        const data = await SocialNetworkService.insertFlyerComments(params)
        if (data.status === 200) {
          this.showSuccessSwal()
          this.closeModal()
        }
      } catch (e) {
        this.showErrorSwal(e)
        return []
      }
    },
  },
}
</script>

<style scoped>

</style>
