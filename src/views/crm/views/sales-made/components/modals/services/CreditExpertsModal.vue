<template>
  <div>
    <ValidationObserver ref="form">
      <b-modal
        v-model="modalServices"
        modal
        size="xl"
        scrollable
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
        <!-- rates -->
        <b-row>
          <b-col lg="6">
            <b-table
              v-if="rates.length>0 && options_ce.length>0"
              :fields="fields"
              :items="table1"
              small
              class="font-small-3"
            >
              <template v-slot:cell(task)="data">
                <b-row>
                  <b-col>
                    <v-select
                      v-model="select_option[data.item.index]"
                      :filterable="false"
                      :options=" options_ce[data.item.index]._data"
                      label="task"
                      :reduce="task => task.id_task"
                      :disabled="isModalShow || data.item.index == 0 || data.item.index == 1"
                      :clearable="!(isModalShow || data.item.index == 0 || data.item.index == 1)"
                      @input="changeOption(data.item.index)"
                    />
                  </b-col>
                </b-row>
              </template>
              <template v-slot:cell(quantity)="data">
                <b-form-spinbutton
                  v-model.number="data.item.quantity"
                  :disabled="data.item.disabled"
                  min="1"
                  max="99"
                  size="sm"
                  @change="calculateSubtotal(data.item.index)"
                />
              </template>
              <template v-slot:cell(subtotal)="data">
                <div class="d-flex align-items-center justify-content-center gold-text">
                  <span>$</span>
                  <money
                    v-model.lazy="data.item.subtotal"
                    v-bind="vMoney"
                    class="gold-text bg-transparent border-0 p-0 ancho"
                    disabled
                  />
                </div>
              </template>
            </b-table>
          </b-col>
          <b-col lg="6">
            <b-table
              v-if="rates.length>0 && options_ce.length>0"
              :fields="fields"
              :items="table2"
              small
              class="font-small-3"
            >
              <template v-slot:cell(task)="data">
                <b-row>
                  <b-col>
                    <v-select
                      v-model="select_option[data.item.index]"
                      :filterable="false"
                      :options=" options_ce[data.item.index]._data"
                      label="task"
                      :reduce="task => task.id_task"
                      :disabled="isModalShow || data.item.index == 0 || data.item.index == 1"
                      :clearable="!(isModalShow || data.item.index == 0 || data.item.index == 1)"
                      @input="changeOption(data.item.index)"
                    />
                  </b-col>
                </b-row>
              </template>
              <template v-slot:cell(quantity)="data">
                <b-form-spinbutton
                  v-model.number="data.item.quantity"
                  :disabled="data.item.disabled"
                  min="1"
                  max="99"
                  size="sm"
                  @change="calculateSubtotal(data.item.index)"
                />
              </template>
              <template v-slot:cell(subtotal)="data">
                <div class="d-flex align-items-center justify-content-center gold-text">
                  <span>$</span>
                  <money
                    v-model.lazy="data.item.subtotal"
                    v-bind="vMoney"
                    class="gold-text bg-transparent border-0 p-0 ancho"
                    disabled
                  />
                </div>
              </template>
            </b-table>
          </b-col>
        </b-row>
        <!-- BODY END -->
        <!--  FOOTER START -->
        <template #modal-footer>
          <!-- total -->
          <b-container fluid>
            <b-row class="mb-1">
              <b-col
                lg="6"
              >
                <div class="text-center d-flex align-items-center justify-content-center">
                  <span>TOTAL $</span>
                  <money
                    v-if="isModalShow"
                    v-model.lazy="totalSuggeste"
                    v-bind="vMoney"
                    class="input-total text-center"
                    disabled
                  />
                  <money
                    v-else
                    v-model.lazy="totalAmount"
                    v-bind="vMoney"
                    class="input-total text-center"
                    disabled
                  />
                </div>
              </b-col>
              <!-- Fee -->

              <b-col lg="6">
                <ValidationProvider
                  v-slot="{errors}"
                  rules="required|money-1"
                >
                  <div class="text-center d-flex align-items-center justify-content-center">
                    <span>FEE $</span>
                    <money
                      v-model="fee"
                      v-bind="vMoney"
                      class="input-total text-center font-weight-bolder gold-text"
                      :style="errors[0] && validateMoney? 'color:red !important':''"
                      :class="{'border border-danger':errors[0] && validateMoney}"
                      :disabled="isModalShow"
                    />
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
                  <feather-icon icon="PowerIcon" /> CANCEL
                </b-button>
                <b-button
                  variant="success"
                  class="rounded"
                  size="sm"
                  @click="saveRates"
                >
                  <feather-icon icon="SaveIcon" /> SAVE
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
import vSelect from 'vue-select'
import ModalServiceHeader from '@/views/crm/views/sales-made/components/modals/services/ModalServiceHeader.vue'

export default {
  components: {
    vSelect,
    ModalServiceHeader,
  },
  props: {
    modalServices: {
      type: Boolean,
      required: true,
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
      default: () => ({ program: '', seller: '', captured: '' }),
    },
  },
  data() {
    return {
      program: 3,
      options_ce: [],
      rates: [],
      for_continue: false,
      fee: 0,
      total_ce: null,
      lead: null,
      observation: 'Services',
      otherspayments: [],
      select_option: [],
      add_json_ce: [],
      json_ce_new: null,
      json_disabled: [],
      states_leads: [],
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
      totalSuggeste: 0,
      fields: [
        {
          key: 'description',
          label: 'DESCRIPTION',
        },
        {
          key: 'price',
          label: 'PRICE',
          formatter: value => `$ ${value}`,
        },
        {
          key: 'task',
          label: 'TASK',
        },
        {
          key: 'quantity',
          label: 'QUANTITY',
        },
        {
          key: 'subtotal',
          label: 'SUBTOTAL',
        },
      ],
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
      return this.typeModal == 2 || this.typeModal == 5
    },
    isModalAdd() {
      return this.typeModal == 3 || this.typeModal == 4 || this.typeModal == 6
    },
    table1() {
      const middle = this.rates.length / 2
      const table = this.rates.slice(0, middle + 1)
      table.forEach((rate, index) => {
        // eslint-disable-next-line no-param-reassign
        rate.index = index
      })
      return table
    },
    table2() {
      const middle = this.rates.length / 2
      const table = this.rates.slice(middle + 1)
      table.forEach((rate, index) => {
        // eslint-disable-next-line no-param-reassign
        rate.index = index + middle + 1 - 0.5
      })
      return table
    },
  },
  created() {
    this.getSelects()
  },
  mounted() {
    if (this.program) {
      this.searchRate()
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
      this.validateMoney = true
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
          // Get the prices
          this.rates.forEach((rate, index) => {
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
            captured: this.captured,
            seller: this.seller,
            type: typeADD,
            user_id: this.currentUser.id,
            module: this.currentUser.modul_id,
            id_score: this.score_id,
            json_ce: this.json_ce,
          }

          const result = await this.$swal.fire({
            title: `Are you sure you want to ${message}?`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
          })
          if (result.value) {
            this.addPreloader()
            const response = await amgApi.post(`${route}`, param)
            if (response.status === 200) {
              this.$emit('reload')
              this.hideModal(true, this.program)
            }
            this.removePreloader()
          }
        }
      } catch (error) {
        console.error(error)
      }
    },

    /* Changes */

    changeOption(index) {
      if (this.select_option[index]) {
        this.rates[index].quantity = 1
        this.rates[index].subtotal = this.rates[index].price
        this.rates[index].disabled = false
      } else {
        this.rates[index].quantity = 0
        this.rates[index].subtotal = 0
        this.rates[index].disabled = true
      }
    },
    calculateSubtotal(index) {
      this.rates[index].subtotal = this.rates[index].price * this.rates[index].quantity
    },

    /* Rates */
    async getSelects() {
      try {
        const response = await amgApi.get('selectratesce')
        if (response.status === 200) {
          this.forSelectCe(response.data)
          this.select_option[0] = 1
          this.select_option[1] = 1
          await this.getSelected()
        }
      } catch (error) {
        console.error(error)
      }
    },
    forSelectCe(data) {
      for (let index = 1; index < 28; index++) {
        this.options_ce.push({
          id: index,
          _data: data.filter(i => i.id_price == index),
        })
        this.json_disabled[index - 1] = true
      }
    },
    async getSelected() {
      if (this.isModalShow) {
        try {
          const response = await amgApi.post('getjsonattendce', { sale_id: this.salesClient.id })
          if (response.status === 200) {
            this.json_ce_new = response.data.json_ce
            this.date_sale = response.data.date_sale
            if (this.json_ce_new != null) {
              const json = JSON.parse(this.json_ce_new)
              if (this.validateIsArray(json)) {
                json.forEach((value, index) => {
                  this.select_option[value.index] = value.task
                })
              }
            }
          }
        } catch (error) {
          console.error(error)
        }
      }
    },
    validateIsArray(json) {
      return Array.isArray(json)
    },
    async searchRate() {
      try {
        const response = await amgApi.post('searchprogram', { id: this.program })
        if (response.status === 200) {
          this.rates = response.data

          // Inquieres && Personal information
          this.rates[0].quantity = 1
          this.rates[0].subtotal = this.rates[0].price
          this.rates[1].quantity = 1
          this.rates[1].subtotal = this.rates[1].price
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
        const response = await amgApi.post('searchprogramsalemade', { id: this.salesClient.id })
        if (response.status === 200) {
          this.fee = response.data[0].fee
          this.rate_selected = JSON.parse(response.data[0].rate_selected)
          this.totalSuggeste = response.data[0].suggeste
          /* TODO: REFACTORIZAR */
          for (let i = 0; i < this.rates.length; i++) {
            if (this.validateIsArray(this.rate_selected)) {
              for (let y = 0; y < this.rate_selected.length; y++) {
                if (this.rates[i].id == this.rate_selected[y].rate_id) {
                  this.rates[i].quantity = this.rate_selected[y].quantity
                  this.rates[i].subtotal = this.rates[i].price * this.rates[i].quantity
                }
              }
            }
          }

          this.removePreloader()
        }
      } catch (error) {
        console.log(error)
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
