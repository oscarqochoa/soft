<template>
  <div>
    <ValidationObserver ref="form">
      <div>
        <div class="col-lg-12 col-md-12">
          <div class="row">
            <div
              class="col-md-2"
              style="padding-right: 0;"
            >
              <label>Creditor Name</label>
            </div>
            <div class="col-md-10">
              <vue-autosuggest
                ref="autocomplete"
                :suggestions="filteredOptions"
                :limit="5"
                :input-props="{id:'autosuggest__input',class:'form-control', placeholder:'Select'}"
                @input="onInputChange"
                @selected="selectHandler"
              >
                <template slot-scope="{suggestion}">
                  <span class="my-suggestion-item">{{ suggestion.item.value }}</span>
                </template>
              </vue-autosuggest>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-md-2">
              <label># Account</label>
            </div>
            <div class="col-md-10">
              <ValidationProvider
                v-slot="{errors}"
                rules="required"
              >
                <input
                  id="account"
                  v-model="account"
                  v-mask="'##############################'"
                  class="form-control"
                  type="text"
                  :style="errors[0] ? 'border-color:red' : ''"
                >
                <div
                  v-if="errors[0]"
                  class="invalid-feedback"
                >
                  The field {{ errors[0] }}
                </div>
              </ValidationProvider>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-md-2">
              <label>Total Balance</label>
            </div>
            <div
              class="col-md-4"
              style="position:relative"
            >
              <span id="class-sign-inpu">$</span>
              <ValidationProvider
                v-slot="{errors}"
                rules="required|money-1"
              >
                <money
                  v-model="balance"
                  v-bind="vMoney"
                  class="input-form"
                  style="padding-left: 30px;"
                  :style="errors[0] && validateMoney ? 'border-color:red' : ''"
                />
                <div
                  v-if="errors[0] && validateMoney"
                  class="invalid-feedback"
                >Balance {{ errors[0] }}</div>
              </ValidationProvider>
            </div>
            <div
              class="col-md-2"
              style="padding-right: 0;"
            >
              <label>Monthly Current Payment</label>
            </div>
            <div
              class="col-md-4"
              style="position:relative"
            >
              <span id="class-sign-inpu">$</span>
              <ValidationProvider
                v-slot="{errors}"
                rules="required|money-1"
              >
                <money
                  v-model="monthly"
                  v-bind="vMoney"
                  class="input-form"
                  style="padding-left: 30px;"
                  :style="errors[0] && validateMoney ? 'border-color:red' : ''"
                />
                <div
                  v-if="errors[0] && validateMoney"
                  class="invalid-feedback"
                >Monthly is {{ errors[0] }}</div>
              </ValidationProvider>
            </div>
          </div>
          <br>
          <div class="row">
            <div
              class="col-md-2"
              style="padding-right: 0;"
            >
              <label>Months Behind</label>
            </div>
            <div class="col-md-2">
              <ValidationProvider
                v-slot="{errors}"
                rules="required"
              >
                <input
                  v-model="month"
                  class="input-form"
                  type="text"
                  :style="errors[0] ? 'border-color:red' : ''"
                >
                <div
                  v-if="errors[0]"
                  class="invalid-feedback"
                >
                  The field {{ errors[0] }}
                </div>
              </ValidationProvider>
            </div>
            <div class="col-md-2" />
            <div class="col-md-2">
              <label>Interes Rate</label>
            </div>
            <div
              class="col-md-4"
              style="position:relative"
            >
              <span style="position:absolute;right: 25px;top: 4px;color: #999;">%</span>
              <!-- <money v-model="monthly" v-bind="vMoney" class="input-form" style="padding-left: 30px;"></money> -->
              <ValidationProvider
                v-slot="{errors}"
                rules="required"
              >
                <input
                  v-model="interes"
                  class="input-form"
                  type="text"
                  :style="errors[0] ? 'border-color:red' : ''"
                >
                <div
                  v-if="errors[0]"
                  class="invalid-feedback"
                >
                  The field {{ errors[0] }}
                </div>
              </ValidationProvider>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-md-2">
              <label>Type</label>
            </div>
            <div class="col-md-4">
              <ValidationProvider
                v-slot="{errors}"
                rules="required"
              >
                <select
                  v-model="type"
                  class="input-form"
                  :style="errors[0] ? 'border-color:red' : ''"
                >
                  <option
                    v-for="(item, index) in types"
                    :key="index"
                    :value="item.id"
                  >{{ item.value }}</option>
                </select>
                <div
                  v-if="errors[0]"
                  class="invalid-feedback"
                >
                  The field {{ errors[0] }}
                </div>
              </ValidationProvider>
            </div>
            <div
              class="col-md-2"
              style="padding-right: 0;"
            >
              <label>Unsecured Type</label>
            </div>
            <div class="col-md-4">
              <input
                v-model="unsecured"
                type="checkbox"
                disabled
              >
            </div>
          </div>
          <br>
          <div
            v-if="trueRetainer == 1"
            class="row"
          >
            <div
              class="col-md-2"
              style="padding-right: 0;"
            >
              <label>Add Retainer Fee:</label>
            </div>
            <div class="col-md-4">
              <div class="form-control">
                <label style="color: #e26969;">NO</label>
                <label class="switch">
                  <input
                    v-model="retainerFee"
                    type="checkbox"
                    :disabled="state == 0"
                  >
                  <span class="slider round" />
                </label>
                <label style="color: #56bec4;">YES</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import { VueAutosuggest } from 'vue-autosuggest'
import { mapGetters } from 'vuex'

export default {
  components: {
    VueAutosuggest,
  },
  props: [
    'idevent',
    'state',
    'idcreditor',
    'accountProg',
    'type_in',
    'client_id',
    'trueRetainer',
  ],
  data() {
    return {
      filteredOptions: [],
      types: [],
      creditor: '',
      account: '',
      balance: '',
      monthly: '',
      month: '',
      interes: '',
      type: '',
      unsecured: 1,
      creditors: [],
      valuecreditor: '',
      errorCredit: false,
      errorAccount: false,
      errorBalance: false,
      errorPayment: false,
      errorMonths: false,
      errorInteres: false,
      errorType: false,
      errorUnsecured: false,
      retainerFee: this.trueRetainer == 1,
      vMoney: {
        decimal: '.',
        thousands: ',',
        prefix: '',
        precision: 2,
        masked: false,
      },
      validateMoney: false,
      creditorName: null,
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
    }),
  },
  async mounted() {
    if (this.state == 0) {
      await this.editcreditor()
    }
  },
  async created() {
    await this.allTypes()
  },
  methods: {
    formattedDisplay(result) {
      return result.value
    },
    closeModal() {
      this.$emit('click', false)
    },
    async allTypes() {
      try {
        const response = await amgApi.get('/gettypesds')
        if (response.status === 200) {
          this.types = response.data
        }
      } catch (error) {
        console.error(error)
      }
    },
    async savecreditor() {
      this.validateMoney = true
      // Validate Money
      const success = await this.$refs.form.validate()
      if (success) {
        const result = await this.$swal.fire({
          title: 'Are you Sure?',
          text: 'Before finalizing you must save.',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#ab9220',
          cancelButtonColor: '#8f9194',
          confirmButtonText: 'Yes',
        })
        if (result.value) {
          const response = await amgApi.post('/savecreditor', {
            event: this.idevent,
            accountProg: this.accountProg,
            creditor: this.creditor,
            account: this.account,
            balance: this.balance,
            monthly: this.monthly,
            month: this.month,
            interes: this.interes,
            type: this.type,
            unsecured: this.unsecured,
            type_in: this.type_in,
            user: this.currentUser.user_id,
            client_id: this.client_id,
            retainerFee: this.retainerFee == true ? 1 : 0,
            id_account: this.currentUser.user_id,
          })
          if (response.status === 200) {
            this.$emit('click', false)
          }
        }
      }
    },
    async editcreditor() {
      try {
        const response = await amgApi.post('/editcreditor', { id: this.idcreditor })
        if (response.status === 200) {
          this.creditor = response.data[0].credit_id
          this.account = response.data[0].account
          this.balance = response.data[0].balance
          this.monthly = response.data[0].monthly
          this.month = response.data[0].months
          this.interes = response.data[0].interest
          this.type = response.data[0].type_id
          this.unsecured = response.data[0].unsecured
          this.valuecreditor = response.data[0].credit_name
          this.$refs.autocomplete.$el.children[0].childNodes[2].children[0].value = this.valuecreditor
        }
      } catch (error) {
        console.error(error)
      }
    },
    async updatecreditor() {
      try {
        const result = await this.$swal.fire({
          title: 'Are you Sure?',
          text: 'Before finalizing you must save.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#ab9220',
          cancelButtonColor: '#8f9194',
          confirmButtonText: 'Yes',
        })
        if (result.value) {
          const response = await amgApi.post('/updatecreditor', {
            id: this.idcreditor,
            event: this.idevent,
            accountProg: this.accountProg,
            creditor: this.creditor,
            account: this.account,
            balance: this.balance,
            monthly: this.monthly,
            month: this.month,
            interes: this.interes,
            type: this.type,
            unsecured: this.unsecured,
            type_in: this.type_in,
            client_id: this.client_id,
          })
          if (response.status === 200) {
            this.$emit('click', false)
          }
        }
      } catch (error) {
        console.error(error)
      }
    },
    onInputChange(text) {
      if (text === '' || text === undefined){
        this.filteredOptions = []
        return
      }
      amgApi.post(`/searchcreditor?q=${text}`).then(response => {
        if (response.status === 200) {
          this.filteredOptions = [{ data: [...response.data] }]
        }
      })
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-autosuggest.scss';
</style>
