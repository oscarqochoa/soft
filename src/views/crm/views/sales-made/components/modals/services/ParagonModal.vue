<template>
  <div>
    <ValidationObserver ref="form">
      <b-modal
        v-model="modalServices"
        size="xl"
        scrollable
        header-class="p-0"
        header-bg-variant="transparent border-bottom border-bottom-2"
        @hidden="hideModal(false,0)"
      >
        <!-- HEADER START -->
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
        <!-- HEADER END -->

        <!-- BODY START -->
        <b-container fluid>
          <b-row>
            <template v-for="(name, index) in packsName">
              <b-col
                :key="index"
                lg="4"
              >
                <b-card
                  :header="name"
                  body-class="p-0"
                  header-tag="h5"
                >
                  <div class="d-flex flex-column">
                    <template v-for="(row, indexRow) in rates.filter(rate => rate.type === (index + 1).toString())">
                      <div
                        class="d-flex w-100 px-1 py-1 border-top cursor-pointer"
                        :class="{'bg-success': option === row.id, 'bg-light': (index % 2 === 0)? indexRow % 2 === 0 : indexRow % 2 !== 0}"
                        @click="!isModalShow && addFee(row)"
                      >
                        <span>{{ row.description }} - ${{ row.price }}</span>
                      </div>
                    </template>
                  </div>
                </b-card>
              </b-col>
            </template>
          </b-row>
        </b-container>
        <!-- BODY END -->

        <!--  FOOTER START -->
        <template #modal-footer>
          <!-- total -->
          <b-row class="w-100 d-flex align-items-center justify-content-between">
            <b-col cols="8">
              <b-row>
                <b-col>
                  <!-- Fee -->
                  <b-row class="d-flex justify-content-start align-items-center">
                    <ValidationProvider
                      v-slot="{errors}"
                      rules="required|money-1"
                    >
                      <b-col class="p-2 rounded">
                        <b-row class="w-100 d-flex align-items-center">
                          <b-col
                            cols="4"
                            class="text-right font-weight-bold font-medium-2"
                          >
                            <div>
                              FEE $
                            </div>
                          </b-col>
                          <b-col cols="8">
                            <money
                              v-model="fee"
                              v-bind="vMoney"
                              class="text-center font-weight-bolder gold-text p-fee rounded-pill"
                              :style="errors[0] && validateMoney? 'color:red !important':''"
                              :class="{'border border-danger':errors[0] && validateMoney}"
                              :disabled="isModalShow || !option"
                            />
                          </b-col>
                        </b-row>
                      </b-col>
                      <b-col
                        v-if="errors[0] && validateMoney"
                        class="invalid-feedback ml-4"
                      >
                        Fee is {{ errors[0] }}
                      </b-col>
                    </ValidationProvider>
                  </b-row>
                </b-col>
              </b-row>
            </b-col>
            <b-col
              v-if="!isModalShow"
              cols="4"
            >
              <b-col>
                <b-row>
                  <b-col
                    v-if="!isModalAdd"
                    class="d-flex justify-content-center align-items-center"
                  >
                    <b-button
                      class="rounded mr-1"
                      variant="danger"
                      size="sm"
                      @click="hideModal(false,0)"
                    >
                      <feather-icon icon="PowerIcon" /> CANCEL
                    </b-button>
                    <b-button
                      class="rounded"
                      variant="success"
                      size="sm"
                      @click="saveRates()"
                    >
                      <feather-icon icon="SaveIcon" /> SAVE
                    </b-button>
                  </b-col>
                  <b-col
                    v-else
                    class="d-flex justify-content-center align-items-center"
                  >
                    <b-button
                      class="rounded text-uppercase"
                      variant="success"
                      @click="saveRates()"
                    >
                      Continue
                      <feather-icon icon="ChevronsRightIcon" />
                    </b-button>
                  </b-col>
                </b-row>
              </b-col>
            </b-col>
          </b-row>
        </template>
        <!-- FOOTER END -->
      </b-modal>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ModalServiceHeader from '@/views/crm/views/sales-made/components/modals/services/ModalServiceHeader.vue'

export default {
  components: { ModalServiceHeader },
  props: {
    modalServices: {
      type: Boolean,
      default: false,
    },
    salesClient: {
      type: Object,
      default: () => ({
        event_id: '', account_id: '', id: '', lead_id: '',
      }),
    },
    typeModal: {
      type: Number,
      default: 1,
      // 1: complete rates, 2: detail of sale
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
      client: null,
      program: 9,
      option: null,
      rates: [],
      observation: 'Services',
      otherspayments: [],
      add_json_ce: [],
      rate_selected: [],
      suggested: 0,
      rates_others: [],
      fee: 0,
      packsName: ['WEBSITE', 'WEBSITE + LOGO', 'SOCIAL NETWORK', 'SOCIAL NETWORK + LOGO', 'PACKS'],
      vMoney: {
        decimal: '.',
        thousands: ',',
        prefix: '',
        precision: 2,
        masked: false,
      },
      validateMoney: false,
      score_id: null,
      json_ce: null,
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
    }),
    isModalShow() {
      return this.typeModal === 2 || this.typeModal === 5
    },
    isModalAdd() {
      return this.typeModal === 3 || this.typeModal === 4 || this.typeModal === 6
    },
  },
  created() {},
  async mounted() {
    this.client = this.salesClient
    if (this.program) {
      await this.searchRate()
    }
    if (this.isModalAdd) {
      await this.getScore()
    }
  },
  methods: {
    /* PRELOADER */
    addPreloader() {
      this.$store.commit('app/SET_LOADING', true)
    },
    removePreloader() {
      this.$store.commit('app/SET_LOADING', false)
    },
    addFee(item) {
      console.log(item)
      this.option = item.id
      this.fee = item.price
    },
    async saveRates() {
      this.validateMoney = true
      // Validate Money
      const success = await this.$refs.form.validate()
      if (success) {
        let message = ''
        let route = ''
        let typeADD = ''
        const prices = []
        prices.push({ item: this.option.toString(), cant: 1 })
        // Depends of the Modal type
        switch (this.typeModal) {
          case 1:
            message = 'complete Rates'
            route = '/attendend'
            break
          case 3:
            message = 'add new service'
            route = '/attendendprogram'
            typeADD = 1
            break
          case 4:
            message = 'change service'
            route = '/attendendprogram'
            typeADD = 2
            break
          case 6:
            message = 'add new service'
            route = '/leadattendend'
            break
          default: break
        }

        const param = {
          prices,
          observation: this.observation,
          contract: 1,
          program: this.program,
          fee: this.fee,
          suggested: this.suggested,
          otherpricesp: this.otherspayments,
          event: this.salesClient.event_id,
          json_noce: this.add_json_ce,
          stateid: 0,

          // Diferents to add change Services
          account: this.salesClient.account_id
            ? this.salesClient.account_id
            : '',
          captured: this.headerS.captured,
          seller: this.headerS.seller,
          type: typeADD,
          user_id: this.currentUser.user_id,
          module: this.currentUser.modul_id,
          id_score: this.score_id,
          json_ce: this.json_ce,
        }

        const result = await this.$swal.fire({
          title: `Are you sure you want to ${message}?`,
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#ab9220',
          cancelButtonColor: '#8f9194',
          confirmButtonText: 'Yes',
        })
        if (result.value) {
          this.addPreloader()
          const response = await amgApi.post(`${route}`, param)
          if (response.status === 200) {
            this.hideModal(true, this.program)
          }
        }
      }
    },

    /* Rates */

    async searchRate() {
      try {
        const response = await amgApi.post('/searchprogram', { id: this.program })
        if (response.status === 200) {
          this.rates = response.data
          if (!this.isModalShow) {
            this.removePreloader()
          }
          if (this.isModalShow) {
            await this.showRates()
          }
        }
      } catch (error) {
        console.error(error)
      }
    },

    async showRates() {
      try {
        const response = await amgApi.post('/searchprogramsalemade', { id: this.salesClient.id })
        if (response.status === 200) {
          this.fee = response.data[0].fee
          this.rate_selected = JSON.parse(response.data[0].rate_selected)
          this.option = this.rate_selected[0].rate_id
          this.removePreloader()
        }
      } catch (error) {
        console.error(error)
      }
    },

    hideModal(refresh, programSelect) {
      this.$emit('closeModal', refresh, programSelect)
    },
    changeProgram(headerS) {
      this.$emit('changeProgram', headerS)
    },
    async getScore() {
      try {
        const response = await amgApi.post('/getscoreattend', { lead_id: this.salesClient.lead_id })
        if (response.status === 200) {
          this.score_id = response.data.score_id
        }
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style scoped>
.gold-text {
  color: #baa345 !important;
}

.input-total {
  width: 100px;
  border-radius: 5px;
  outline: none;
  background: white;
  margin-left: 5px;
  color: #212529;
}
.p-fee {
  padding: 2px 0 2px 0;
}
</style>
