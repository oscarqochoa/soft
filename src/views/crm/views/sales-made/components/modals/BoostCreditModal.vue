<template>
  <div>
    <ValidationObserver ref="form">
      <b-modal
        v-model="modalServices"
        modal
        size="lg"
        header-class="bg-white pt-0 pr-0"
        footer-class="bg-white px-0"
        scrollable
        modal-class="height-modal"
        :hide-footer="hideFooter"
        @hidden="hideModal(false,0)"
      >
        <!-- HEADER START -->
        <template #modal-header>
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
        <div v-if="hideBody">
          <div class="row">
            <div class="col-lg-4" />
            <div class="col-lg-4">
              <ValidationProvider
                v-slot="{errors}"
                rules="required"
              >
                <table class="table table-striped mb-0">
                  <tbody style="border: 1px solid #ccc">
                    <tr class="tr-style">
                      <td
                        colspan="1"
                        class="td-style"
                      >
                        FEE
                      </td>
                    </tr>
                    <tr class="text-center">
                      <td class="text-center bg-gray">
                        <div class="div-style">
                          $
                          <select
                            v-model="fee"
                            class="select-style"
                            :class="{'border border-danger':errors[0]}"
                            :disabled="isModalShow"
                          >
                            <option disabled />
                            <option value="19.99">
                              19.99
                            </option>
                            <option value="24.99">
                              24.99
                            </option>
                            <option value="29.99">
                              29.99
                            </option>
                            <option value="34.99">
                              34.99
                            </option>
                            <option value="39.99">
                              39.99
                            </option>
                            <option value="44.99">
                              44.99
                            </option>
                            <option value="49.99">
                              49.99
                            </option>
                            <option value="54.99">
                              54.99
                            </option>
                            <option value="59.99">
                              59.99
                            </option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div
                  v-if="errors[0]"
                  class="fee-error"
                >
                  Fee {{ errors[0] }}
                </div>
              </ValidationProvider>
            </div>
            <div class="col-lg-4" />
          </div>
        </div>
        <!-- BODY END -->

        <!--  FOOTER START -->
        <template #modal-footer="{ }">
          <template>
            <template v-if="!isModalAdd">
              <button
                type="button"
                class="btn rounded`bg-danger"
                @click="hideModal(false,0)"
              >
                <i class="fas fa-power-off" /> CANCEL
              </button>
              <button
                type="button"
                class="btn rounded`bg-success"
                @click="saveRates()"
              >
                <i class="far fa-save" /> SAVE
              </button>
            </template>

            <button
              v-if="isModalAdd"
              class="btn class-button-green"
              style="background: #0066FF;text-transfor`:uppercase;float: none"
              @click="saveRates()"
            >
              Continue
              <i
                style="font-size: 15px;margin-left: 5px;"
                class="fas fa-caret-right"
              />
            </button>
          </template>
        </template>
        <!-- FOOTER END -->
      </b-modal>
    </ValidationObserver>
  </div>
</template>

<script>
import ModalServiceHeader from '@/views/crm/views/sales-made/components/modals/ModalServiceHeader.vue'
import {mapGetters} from 'vuex'

export default {
  components: {
    ModalServiceHeader,
  },
  props: {
    modalServices: {
      type: Boolean,
      default: false,
    },
    salesClient: {
      type: Object,
      default: () => ({
        event_id: '',
        account_id: '',
        id: '',
        lead_id: '',
      }),
    },
    typeModal: {
      type: Number,
      default: 1,
      // 1: complete rates crm, 2: detail of sale, 3: add Services
      // 4: change Services, 5 show add change Services, 6  add  services programs
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
      default: () => ({
        program: '',
        seller: '',
        captured: '',
      }),
    },
  },
  data() {
    return {
      client: null,
      program: 2,
      rates: [],
      observation: 'Services',
      otherspayments: [],
      add_json_ce: null,
      rate_selected: [],
      suggested: 0,
      rates_others: [],
      fee: null,
      selectService: true,
      score_id: null,
      json_ce: null,
    }
  },
  computed: {
    isModalShow() {
      return this.typeModal === 2 || this.typeModal === 5
    },
    isModalAdd() {
      return this.typeModal === 3 || this.typeModal === 4 || this.typeModal === 6
    },
    hideFooter() {
      return this.isModalShow || (this.isModalAdd && this.selectService)
    },
    hideBody() {
      return !this.isModalAdd || !this.selectService
    },
  },
  created() {},
  mounted() {
    this.client = this.salesClient
    if (this.program) {
      if (this.isModalShow) {
        this.showRates()
      } else if (!this.isModalAdd) {
        this.removePreloader()
      }

      if (this.headerS.program) {
        this.selectService = false
      }
    }
    if (this.isModalAdd) {
      this.getScore()
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
    async saveRates() {
      // Validate Money
      try {
        const success = await this.$refs.form.validate()
        if (success) {
          let message = ''
          let route = ''
          let typeADD = ''
          const prices = []
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

          const result = this.$swal.fire({
            title: `Are you sure you want to ${message}?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
          })
          if (result.value) {
            this.addPreloader()
            const response = await amgApi.post(`${route}`, param)
            if (response.status === 200) {
              this.hideModal(true, this.program)
            }
          }
        }
      } catch (error) {
        console.error(error)
      }
    },

    /* Rates */
    async showRates() {
      try {
        const response = await amgApi.post('/searchprogramsalemade', { id: this.salesClient.id })
        if (response.status === 200) {
          this.fee = response.data[0].fee
          this.removePreloader()
        }
      } catch (error) {
        console.error(error)
      }
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

    hideModal(refresh, programSelect) {
      this.$emit('closeModal', refresh, programSelect)
    },
    changeProgram(headerS) {
      if (headerS.program == 2) this.selectService = false
      this.$emit('changeProgram', headerS)
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
.td-style {
  text-align: center;
  font-weight: bold;
  background: white;
}
.tr-style {
  color: #b59200;
  border-bottom: 1px solid #cccccc;
}
.select-style {
  text-align: center;
  border: 2px solid #ffffff;
  width: 100px;
  border-radius: 5px;
  outline: none;
  background: white;
  font-size: 14px;
  color: black;
}
.div-style {
  font-size: 19px;
  color: white;
}
.bg-gray {
  background: #999999;
}

.fee-error {
  margin-left: 5rem;
  font-size: 100%;
  width: 100%;
  color: #dc3545;
}
</style>
