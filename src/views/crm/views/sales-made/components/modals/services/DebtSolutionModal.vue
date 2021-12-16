<template>
  <b-modal
    v-model="modalServices"
    modal
    size="xl"
    scrollable
    hide-footer
    @hidden="hideModal(false,0)"
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
    <b-container>
      <form-wizard
        color="#7367F0"
        :title="null"
        :subtitle="null"
        shape="square"
        finish-button-text="Submit"
        back-button-text="Previous"
        class="mb-3"
        @on-complete="formSubmitted"
      >

        <!-- accoint details tab -->
        <tab-content
          title="CREDITORS'S LIST"
        >
          <modal-services-ds-first-step
            v-if="isFirstStep"
            ref="firstStep"
            v-model="passwordIsCorrect"
            :idleyend="idleyend"
            :sales-client="salesClient"
            :global="global"
            :is-modal-show="isModalShow"
            :is-modal-add="isModalAdd"
            :type-modal="typeModal"
            @nextStep="leyendDebsolution"
          />
        </tab-content>

        <!-- personal details tab -->
        <tab-content
          title="ANALYSIS"
        >
          <modal-services-ds-second-step
            v-if="isSecondStep"
            ref="secondStep"
            :sales-client="salesClient"
            :global="global"
            :idleyend="idleyend"
            :is-modal-show="isModalShow"
            :is-modal-add="isModalAdd"
            :type-modal="typeModal"
            @previousStep="leyendDebsolution"
            @nextStep="leyendDebsolution"
          />
        </tab-content>

        <!-- address  -->
        <tab-content
          title="QUESTIONNAIRE"
        >
          <modal-services-ds-third-step
            v-if="isThirdStep"
            ref="thirdStep"
            :sales-client="salesClient"
            :global="global"
            :idleyend="idleyend"
            :is-modal-show="isModalShow"
            :is-modal-add="isModalAdd"
            :header-s="headerS"
            :type-modal="typeModal"
            @previousStep="leyendDebsolution"
            @hideModal="hideModal"
          />
        </tab-content>

      </form-wizard>
    </b-container>
  </b-modal>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import ModalServicesDSFirstStep from './debt-solution/ModalServicesDSFirstStep.vue'
import ModalServicesDSSecondStep from './debt-solution/ModalServicesDSSecondStep.vue'
import ModalServicesDSThirdStep from './debt-solution/ModalServicesDSThirdStep.vue'
import ModalServiceHeader from '@/views/crm/views/sales-made/components/modals/services/ModalServiceHeader.vue'
import { codeIcon } from '@/views/forms/form-wizard/code'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  components: {
    'modal-services-ds-first-step': ModalServicesDSFirstStep,
    'modal-services-ds-second-step': ModalServicesDSSecondStep,
    'modal-services-ds-third-step': ModalServicesDSThirdStep,
    'modal-service-header': ModalServiceHeader,
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
    global: {
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
      codeIcon,
    }
  },
  computed: {
    isFirstStep() {
      return this.state1 == 0 && this.state2 == 0 && this.state3 == 0
    },
    isSecondStep() {
      return this.state1 == 1 && this.state2 == 0 && this.state3 == 0
    },
    isThirdStep() {
      return (
        this.state1 == 1
          && this.state2 == 1
          && (this.state3 == 0 || this.state3 == 1)
      )
    },
    isModalShow() {
      return this.typeModal == 2 || this.typeModal == 5
    },
    isModalAdd() {
      return this.typeModal == 3 || this.typeModal == 4 || this.typeModal == 6
    },
  },
  mounted() {
    this.leyendDebsolution()
  },
  methods: {
    addPreloader() {
      const x = document.getElementById('app')
      x.classList.add('preloader')
      x.classList.add('opacity-uno')
    },
    removePreloader() {
      const x = document.getElementById('app')
      x.classList.remove('preloader')
      x.classList.remove('opacity-uno')
    },
    hideModal(refresh, programSelect) {
      this.$emit('closeModal', refresh, programSelect)
    },
    changeProgram(headerS) {
      this.$emit('changeProgram', headerS)
    },
    leyendDebsolution() {
      axios
        .post('/api/leyendds', {
          event:
                this.typeModal == 3 || this.typeModal == 4 || this.typeModal == 5
                  ? null
                  : this.salesClient.event_id,
          account:
                this.typeModal == 3 || this.typeModal == 4 || this.typeModal == 5
                  ? this.salesClient.account_id
                  : null,
        })
        .then(response => {
          if (response.status == 200) {
            if (response.data.length > 0) {
              this.leyend = response.data
              this.idleyend = response.data[0].id
              this.state1 = response.data[0].state1
              this.state2 = response.data[0].state2
              this.state3 = response.data[0].state3
              this.removePreloader()
            }
          }
        })
        .catch(err => {
          console.error(err)
        })
    },
    switchStep(step) {
      if (this.isModalShow) {
        this.addPreloader()
        if (step == 1) {
          this.state1 = 0
          this.state2 = 0
          this.state3 = 0
        } else if (step == 2) {
          this.state1 = 1
          this.state2 = 0
          this.state3 = 0
        } else {
          this.state1 = 1
          this.state2 = 1
          this.state3 = 0
        }
      }
    },
  },
}
</script>

<style scoped>
.overflow {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 400px;
}
.overflow::-webkit-scrollbar {
  width: 7px;
}
.overflow::-webkit-scrollbar-thumb {
  background: #e1e1e1;
  border-radius: 7px;
}
.overflow::-webkit-scrollbar-thumb:hover {
  background: #c5c2c2 !important;
  border-radius: 10px;
}
</style>

<style >
.btn-blue-drop {
  background: #007bff;
  border-color: #007bff;
}
</style>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
<style lang="scss">
@import '@core/scss/vue/libs/vue-wizard.scss';
@import '@core/scss/vue/libs/vue-select.scss';
</style>
