<template>
  <div>
    <b-card>
      <div class="card-header flex">
        <h1>ANSWERS GUIDE</h1>
        <b-button
          class="m-1"
          variant="primary"
          @click="openCreateModal()"
        >
          CREATE +
        </b-button>
      </div>
      <b-nav pills>
        <b-nav-item
          :to="{ name: 'answers-guide-boost-credit' }"
          exact
          exact-active-class="active"
          link-classes="border-secondary hover-primary"
        >BOOST CREDIT</b-nav-item>
        <b-nav-item
          :to="{ name: 'answers-guide-business' }"
          exact
          exact-active-class="active"
          link-classes="border-secondary hover-primary"
        >BUSINESS</b-nav-item>
        <b-nav-item
          :to="{ name: 'answers-guide-credit-experts' }"
          exact
          exact-active-class="active"
          link-classes="border-secondary hover-primary"
        >CREDIT EXPERTS</b-nav-item>
        <b-nav-item
          :to="{ name: 'answers-guide-tax-research' }"
          exact
          exact-active-class="active"
          link-classes="border-secondary hover-primary"
        >TAX RESEARCH</b-nav-item>
        <b-nav-item
          :to="{ name: 'answers-guide-debt-solution' }"
          exact
          exact-active-class="active"
          link-classes="border-secondary hover-primary"
        >DEBT SOLUTION</b-nav-item>
      </b-nav>
      <router-view :key="$route.name" />
    </b-card>
    <create-modal
      v-if="open"
      @close="closeModal"
    />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
// eslint-disable-next-line import/extensions
import createModal from '@/views/social-network/views/answers-guide/answers-guide-module/modals/CreateModal'
import AnswersGuideService from '@/views/social-network/views/answers-guide/answers-guide.service'

export default {
  components: {
    createModal,
  },
  data() {
    return {
      open: false,
      answers: {},
      showTab: true,
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token',
    }),

  },
  methods: {
    openCreateModal() {
      console.log('abrir create modal')
      this.open = true
    },
    closeModal() {
      this.open = false
    },
    async getAnswerGuide(program, father) {
      const data = await AnswersGuideService.getAnswersGuide(
        {
          father,
          program,
        },
      )
      this.answers = data.data
      this.program_active = program
      this.showTab = this.answers[0] !== undefined
    },
  },
}
</script>

<style scoped>
.flex{
  display: flex;
  justify-content: space-between;
}
</style>
