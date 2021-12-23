<template>
  <div>
    <ValidationObserver ref="form">
      <b-modal
        v-model="modalServices"
        modal
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
        <!-- rates -->
        <b-row>
          <div class="col-lg-6">
            <div class="form-group">
              <table
                v-if="rates.length>0"
                class="table table-bordered table-striped"
              >
                <tbody>
                  <tr class="description-price">
                    <th style="font-weight: 100">
                      Description
                    </th>
                    <th style="font-weight: 100; width: 15%">
                      Price
                    </th>
                    <th style="font-weight: 100">
                      Quantity
                    </th>
                    <th style="font-weight: 100">
                      SubTotal
                    </th>
                  </tr>
                  <template v-for="(prices, index) in rates">
                    <tr
                      v-if="index < 9"
                      :key="prices.id"
                    >
                      <td class="description-price">
                        <span>{{ prices.description }}</span>
                      </td>
                      <td style="color: #666666">
                        $
                        <span>{{ prices.price }}</span>.00
                      </td>
                      <td>
                        <input
                          v-model.number="prices.quantity"
                          :disabled="prices.disabled || isModalShow"
                          class="input-form-cant text-center bg-white rounded"
                          type="number"
                          min="1"
                          max="99"
                          @change="calculateSubtotal(index)"
                        >
                      </td>
                      <td style="color: #baa345">
                        $
                        <money
                          v-model.lazy="prices.subtotal"
                          v-bind="vMoney"
                          class="campo-input-color-palceholder sub-total"
                          disabled
                        />
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <table
                v-if="rates.length>0"
                class="table table-bordered table-striped"
              >
                <tbody>
                  <tr class="description-price">
                    <th style="font-weight: 100">
                      Description
                    </th>
                    <th style="font-weight: 100; width: 15%">
                      Price
                    </th>
                    <th style="font-weight: 100">
                      Quantity
                    </th>
                    <th style="font-weight: 100">
                      SubTotal
                    </th>
                  </tr>
                  <template v-for="(pdata2, index) in rates">
                    <tr
                      v-if="index > 8"
                      :key="pdata2.id"
                    >
                      <td class="description-price">
                        <span>{{ pdata2.description }}</span>
                      </td>
                      <td style="color: #666666">
                        $
                        <span>{{ pdata2.price }}</span>.00
                      </td>
                      <td>
                        <input
                          v-model.number="pdata2.quantity"
                          :disabled="pdata2.disabled || isModalShow"
                          class="input-form-cant text-center bg-white rounded"
                          type="number"
                          min="1"
                          max="99"
                          @change="calculateSubtotal(index)"
                        >
                      </td>
                      <td style="color: #baa345">
                        $
                        <money
                          v-model.lazy="pdata2.subtotal"
                          v-bind="vMoney"
                          class="campo-input-color-palceholder sub-total"
                          disabled
                        />
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>
        </b-row>
        <!-- BODY END -->

        <!--  FOOTER START -->
        <template #modal-footer="{ }">
          <!-- total -->
          <b-container fluid>
            <b-row>
              <b-col>
                <ValidationProvider
                  v-slot="{errors}"
                  rules="required|money-1"
                >
                  <div>
                    <div class="text-center">
                      TOTAL $
                      <money
                        v-model.lazy="totalAmount"
                        v-bind="vMoney"
                        class="input-total text-center"
                        :style="errors[0] && validateMoney? 'color:red !important':''"
                        :class="{'border border-danger':errors[0] && validateMoney}"
                        disabled
                      />
                    </div>
                  </div>
                  <div
                    v-if="errors[0] && validateMoney"
                    class="invalid-feedback ml-4"
                  >Total is {{ errors[0] }}</div>
                </ValidationProvider>
              </b-col>
              <!-- Fee -->

              <b-col>
                <ValidationProvider
                  v-slot="{errors}"
                  rules="required|money-1"
                >
                  <div>
                    <div class="text-center">
                      FEE $
                      <money
                        v-model="fee"
                        v-bind="vMoney"
                        class="input-total text-center font-weight-bolder gold-text"
                        :style="errors[0] && validateMoney? 'color:red !important':''"
                        :class="{'border border-danger':errors[0] && validateMoney}"
                        :disabled="isModalShow"
                      />
                    </div>
                  </div>
                  <div
                    v-if="errors[0] && validateMoney"
                    class="invalid-feedback ml-4"
                  >Fee is {{ errors[0] }}</div>
                </ValidationProvider>
              </b-col>
            </b-row>
            <b-row v-if="!isModalShow">
              <b-col
                v-if="!isModalAdd"
                class="d-flex align-items-center justify-content-center"
              >
                <b-button
                  variant="danger"
                  class="rounded mr-1"
                  size="sm"
                  @click="hideModal(false, 0)"
                >
                  <feather-icon icon="PowerIcon" />CANCEL
                </b-button>
                <b-button
                  variant="success"
                  class="rounded"
                  size="sm"
                  @click="saveRates"
                >
                  <feather-icon icon="SaveIcon" />SAVE
                </b-button>
              </b-col>
              <b-col v-else>
                <b-button
                  v-if="isModalAdd"
                  variant="info"
                  size="sm"
                  @click="saveRates"
                >
                  Continue
                  <feather-icon icon="ChevronsRightIcon" />
                </b-button>
              </b-col>
            </b-row>
          </b-container>
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
      // 1: complete rates, 2: datail of sale
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
      program: 5,
      options_ce: [],
      rates: [],
      lead: null,
      fee: 0,
      observation: 'Services',
      otherspayments: [],
      options_ce: [],
      select_option: [],
      add_json_ce: [],
      json_ce_new: null,
      rate_selected: [],
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
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
    }),
    totalAmount() {
      return this.rates.reduce((sum, rate) => sum + rate.subtotal, 0)
    },
    isModalShow() {
      return this.typeModal === 2 || this.typeModal === 5
    },
    isModalAdd() {
      return (
        this.typeModal === 3 || this.typeModal === 4 || this.typeModal === 6
      )
    },
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
      this.validateMoney = true
      // Validate Money
      const success = await this.$refs.form.validate()
      if (success) {
        let message = ''
        let route = ''
        const typeADD = ''
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
            this.typeADD = 1
            break
          case 4:
            message = 'change service'
            route = '/attendendprogram'
            this.typeADD = 2
            break
          case 6:
            message = 'add new service'
            route = '/leadattendend'
            break
          default:
            break
        }
        // Get the prices
        this.rates.map((rate, index) => {
          if (rate.quantity > 0) {
            prices.push({ item: rate.id.toString(), cant: rate.quantity })
            this.add_json_ce.push({
              index,
              program: rate.id,
              task: this.select_option[index],
            })
          } else {
            prices.push({ item: '0', cant: 0 })
          }
        })
        const param = {
          prices,
          observation: this.observation,
          contract: 1,
          program: this.program,
          fee: this.fee,
          suggested: this.totalAmount,
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

    /* Changes */
    calculateSubtotal(index) {
      this.rates[index].subtotal = this.rates[index].price * this.rates[index].quantity
    },

    /* Rates */

    async searchRate() {
      try {
        const response = await amgApi.post('/searchprogram', {
          id: this.program,
        })
        if (response.status === 200) {
          this.rates = response.data
          if (!this.isModalShow) {
            this.removePreloader()
          }
          this.rates.forEach(rate => {
            rate.disabled = false
          })

          if (this.isModalShow) {
            this.showRates()
          }
        }
      } catch (error) {
        console.error(error)
      }
    },

    async showRates() {
      try {
        const response = await amgApi.post('/searchprogramsalemade', {
          id: this.salesClient.id,
        })
        if (response.status === 200) {
          this.fee = response.data[0].fee
          this.rate_selected = JSON.parse(response.data[0].rate_selected)

          for (let i = 0; i < this.rates.length; i++) {
            for (let y = 0; y < this.rate_selected.length; y++) {
              if (this.rates[i].id == this.rate_selected[y].rate_id) {
                this.rates[i].quantity = this.rate_selected[y].quantity
                this.rates[i].subtotal = this.rates[i].price * this.rates[i].quantity
              }
            }
          }

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
        const response = await amgApi.post('/getscoreattend', {
          lead_id: this.salesClient.lead_id,
        })
        if (response.status == 200) {
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
.select-task {
  text-align: center;
  width: 100%;
  border: 2px solid #ffffff;
  border-radius: 5px;
  outline: none;
  background: #e8e8e8;
  font-size: 14px;
  color: black;
}

.sub-total {
  text-align: center;
  width: 80px;
  color: #baa345;
  border-radius: 5px;
}

.description-price {
  font-size: 11px;
  color: #666666;
  text-transform: uppercase;
}
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
</style>
