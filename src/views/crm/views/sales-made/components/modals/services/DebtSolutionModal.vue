<template>
  <b-modal
    v-model="modalServices"
    modal
    size="xl"
    scrollable
    hide-footer
  >
    <template #modal-header="{ }">
      <modal-service-header
        :type-modal="typeModal"
        :users-services="usersServices"
        :programs-all="programsAll"
        :header-s="headerS"
        :sales="salesClient"
        @changeProgram="changeProgram"
        @close="hideModal(false,0)"
      />
    </template>
    <form-wizard
      color="#7367F0"
      :title="null"
      :subtitle="null"
      shape="square"
      finish-button-text="Submit"
      back-button-text="Previous"
      class="mb-3"
    >

      <!-- accoint details tab -->
      <tab-content
        title="CREDITORS'S LIST"
      >
        <modal-services-d-s-first-step
          v-if="isFirstStep"
          ref="firstStep"
          v-model="passwordIsCorrect"
          :idleyend="idleyend"
          :sales-client="salesClient"
          :is-modal-show="isModalShow"
          :is-modal-add="isModalAdd"
          :type-modal="typeModal"
          @nextStep="leyendDebtsolution"
        />
      </tab-content>

      <!-- personal details tab -->
      <tab-content
        title="ANALYSIS"
      >
        <modal-services-d-s-second-step />
      </tab-content>

      <!-- address  -->
      <tab-content
        title="QUESTIONNAIRE"
      >
        <modal-services-d-s-third-step />
      </tab-content>

    </form-wizard>
  </b-modal>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import ModalServicesDSFirstStep from './debt-solution/ModalServicesDSFirstStep.vue'
import ModalServicesDSSecondStep from './debt-solution/ModalServicesDSSecondStep.vue'
import ModalServicesDSThirdStep from './debt-solution/ModalServicesDSThirdStep.vue'
import ModalServiceHeader from '@/views/crm/views/sales-made/components/modals/services/ModalServiceHeader.vue'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  components: {
    ModalServicesDSFirstStep,
    ModalServicesDSSecondStep,
    ModalServicesDSThirdStep,
    ModalServiceHeader,
    FormWizard,
    TabContent,
  },
  props: {
    modalServices: {
      type: Boolean,
      default: false,
    },
    salesClient: {
      type: Object,
      default: () => ({}),
    },
    typeModal: {
      type: Number,
      default: 1,
      // 1: create, 2: show
    },
    usersServices: {
      type: Array,
      default: () => [],
    },
    programsAll: {
      type: Array,
      default: () => [],
    },
    headerS: {
      type: Object,
      default: () => ({ program: '', seller: '', captured: '' }),
    },
  },
  data() {
    return {
      show: false,
      passwordIsCorrect: false,
      state1: 0,
      state2: 0,
      state3: 0,
      idleyend: '',
      leyend: '',
    }
  },
  computed: {
    isFirstStep() {
      return this.state1 === 0 && this.state2 === 0 && this.state3 === 0
    },
    isSecondStep() {
      return this.state1 === 1 && this.state2 === 0 && this.state3 === 0
    },
    isThirdStep() {
      return this.state1 === 1 && this.state2 === 1 && (this.state3 === 0 || this.state3 === 1)
    },
    isModalShow() {
      return this.typeModal === 2 || this.typeModal === 5
    },
    isModalAdd() {
      return this.typeModal === 3 || this.typeModal === 4 || this.typeModal === 6
    },
  },
  created() {
    this.leyendDebtsolution()
  },
  methods: {
    hideModal(refresh, programSelect) {
      this.$emit('closeModal', refresh, programSelect)
    },
    changeProgram(headerS) {
      this.$emit('changeProgram', headerS)
    },
    async leyendDebtsolution() {
      try {
        const response = await amgApi.post('/leyendds', {
          event: this.typeModal === 3 || this.typeModal === 4 || this.typeModal === 5 ? null : this.salesClient.event_id,
          account: this.typeModal === 3 || this.typeModal === 4 || this.typeModal === 5 ? this.salesClient.account_id : null,
        })
        if (response.status === 200) {
          if (response.data.length > 0) {
            this.leyend = response.data
            this.idleyend = response.data[0].id
            this.state1 = response.data[0].state1
            this.state2 = response.data[0].state2
            this.state3 = response.data[0].state3
            this.removePreloader()
          }
        }
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-wizard.scss';
@import '@core/scss/vue/libs/vue-select.scss';
</style>
