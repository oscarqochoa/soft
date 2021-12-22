<template>
  <ValidationObserver ref="form">
    <b-container fluid>
      <b-row class="d-flex align-items-center justify-content-end">
        <b-button
          :disabled="exportPdfDisabled"
          variant="success"
          @click="nextfirst(idleyend, 4)"
        >
          <feather-icon icon="DownloadIcon" /> EXPORT TO PDF
        </b-button>
      </b-row>
      <b-row class="mt-1">
        <b-col md="5">
          <div
            style="
                            background: #f1f1f1;
                            padding: 5px;
                            position: absolute;
                            top: 0;
                            width: 100%;
                            left: 0;
                            height: 32px;
                            padding-left: 15px;
                          "
          >
            <label for>Current Situation with current payments</label>
          </div>
          <br>
          <br>
          <div class="row">
            <div class="col-md-6">
              <table class="table table-striped">
                <tr>
                  <td
                    style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                  "
                  >Current balance owing</td>
                  <td
                    style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                    font-weight: bold;
                                  "
                  >
                    <span>{{ "$ " + this.total_balance }}</span>
                  </td>
                </tr>
                <tr style="background: #f1f1f1">
                  <td
                    style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                  "
                  >Annual interest rate</td>
                  <td
                    style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                    font-weight: bold;
                                  "
                  >
                    <span>{{ this.total_interest + " %" }}</span>
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                  "
                  >Annual interest charged</td>
                  <td
                    style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                    font-weight: bold;
                                  "
                  >
                    <span>{{ "$ " + this.mont3 }}</span>
                  </td>
                </tr>
                <tr style="background: #f1f1f1">
                  <td
                    style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                  "
                  >Monthly Interest Charged</td>
                  <td
                    style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                    font-weight: bold;
                                  "
                  >
                    <span>{{ "$ " + this.mont4 }}</span>
                  </td>
                </tr>
              </table>
            </div>
            <div class="col-md-6">
              <table class="table table-striped">
                <tr>
                  <td
                    style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                  "
                  >Mothly credit to principal</td>
                  <td
                    style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                    font-weight: bold;
                                  "
                  >
                    <span>{{ "$ " + this.mont5 }}</span>
                  </td>
                </tr>
                <tr style="background: #f1f1f1">
                  <td
                    style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                  "
                  >Current Payment</td>
                  <td
                    style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                    font-weight: bold;
                                  "
                  >
                    <span>{{ "$ " + this.total_monthly }}</span>
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                  "
                  >Daily interest charge</td>
                  <td
                    style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                    font-weight: bold;
                                  "
                  >
                    <span>{{ "$ " + this.mont7 }}</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-md-3">
              <div
                class="class-inline row"
                style="margin-top: 0px"
              >
                <div
                  class="class-campo-icon-hori col-md-12"
                  style="
                                  font-size: 10px;
                                  display: flex;
                                  justify-content: center;
                                  align-items: center;
                                  height: 30px;
                                  padding: 0;
                                  text-align: center;
                                  background: #f1f1f1;
                                  color: #999;
                                  font-weight: bold;
                                "
                >Monthly payment</div>
                <div
                  class="class-campo-text-hori col-md-12"
                  style="
                                  padding: 4px 2px 5px 2px;
                                  height: 35px;
                                  text-align: center;
                                  border: 1px solid #f1f1f1;
                                  font-weight: bold;
                                  color: #999;
                                "
                >
                  <span>{{ "$ " + this.total_monthly }}</span>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div
                class="class-inline row"
                style="margin-top: 0px"
              >
                <div
                  class="class-campo-icon-hori col-md-12"
                  style="
                                  font-size: 10px;
                                  display: flex;
                                  justify-content: center;
                                  align-items: center;
                                  height: 30px;
                                  padding: 0;
                                  text-align: center;
                                  background: #f1f1f1;
                                  color: #999;
                                  font-weight: bold;
                                "
                >Months</div>
                <div
                  class="class-campo-text-hori col-md-12"
                  style="
                                  padding: 4px 2px 5px 2px;
                                  height: 35px;
                                  text-align: center;
                                  border: 1px solid #f1f1f1;
                                  font-weight: bold;
                                  color: #999;
                                "
                >
                  <span>{{ this.mont9 }}</span>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div
                class="class-inline row"
                style="margin-top: 0px"
              >
                <div
                  class="class-campo-icon-hori col-md-12"
                  style="
                                  font-size: 10px;
                                  display: flex;
                                  justify-content: center;
                                  align-items: center;
                                  height: 30px;
                                  padding: 0;
                                  text-align: center;
                                  background: #f1f1f1;
                                  color: #999;
                                  font-weight: bold;
                                "
                >Years</div>
                <div
                  class="class-campo-text-hori col-md-12"
                  style="
                                  padding: 4px 2px 5px 2px;
                                  height: 35px;
                                  text-align: center;
                                  border: 1px solid #f1f1f1;
                                  font-weight: bold;
                                  color: #999;
                                "
                >
                  <span>{{ this.mont10 }}</span>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div
                class="class-inline row"
                style="margin-top: 0px"
              >
                <div
                  class="class-campo-icon-hori col-md-12"
                  style="
                                  font-size: 10px;
                                  display: flex;
                                  justify-content: center;
                                  align-items: center;
                                  height: 30px;
                                  padding: 0;
                                  text-align: center;
                                  background: #f1f1f1;
                                  color: #999;
                                  font-weight: bold;
                                "
                >Total to paid</div>
                <div
                  class="class-campo-text-hori col-md-12"
                  style="
                                  padding: 4px 2px 5px 2px;
                                  height: 35px;
                                  text-align: center;
                                  border: 1px solid #f1f1f1;
                                  font-weight: bold;
                                  color: #999;
                                "
                >
                  <span>{{ "$ " + this.mont11 }}</span>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col
          md="2"
          class="d-flex align-items-center justify-content-center"
        >
          <h3
            class="d-flex align-items-center justify-content-center border border-3 rounded-circle"
            style="width: 4vw; height: 4vw"
          >
            VS
          </h3>
        </b-col>
        <b-col md="5">
          <div>
            <div
              style="
                            background: #baa345;
                            padding: 5px;
                            position: absolute;
                            top: 0;
                            width: 100%;
                            left: 0;
                            height: 32px;
                            padding-left: 15px;
                          "
            >
              <label
                for
                style="color: white"
              >Situation with A.M.G. Debt Solution</label>
            </div>
            <br>
            <br>
            <div class="row">
              <div class="col-md-6">
                <table class="table table-striped">
                  <tr>
                    <td
                      style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                  "
                    >Total due</td>
                    <td
                      style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #baa345;
                                    font-weight: bold;
                                  "
                    >
                      <span>{{ "$ " + this.mont12 }}</span>
                    </td>
                  </tr>
                  <tr style="background: #f1f1f1">
                    <td
                      style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                  "
                    >Estimated annual interes rate</td>
                    <td
                      style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #baa345;
                                    font-weight: bold;
                                  "
                    >
                      <span>0.00 %</span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                  "
                    >Annual interest charged</td>
                    <td
                      style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #baa345;
                                    font-weight: bold;
                                  "
                    >
                      <span>$ 0.00</span>
                    </td>
                  </tr>
                  <tr style="background: #f1f1f1">
                    <td
                      style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                  "
                    >Settlement cost</td>
                    <td
                      style="
                                    padding: 0.1rem;
                                    border: none;
                                    color: #baa345;
                                    font-weight: bold;
                                  "
                    >
                      <select
                        id="mont13"
                        v-model="mont13"
                        name="mont13"
                        class="input-form"
                        :disabled="isModalShow"
                        style="color: #baa345; padding-left: 0"
                      >
                        <option
                          v-for="(item, index) in arraySettlementCost"
                          :key="index"
                          :value="item"
                        >{{ item + ".00 %" }}</option>
                      </select>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="col-md-6">
                <table class="table table-striped">
                  <tr>
                    <td
                      style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                  "
                    >Monthly payment</td>
                    <td
                      style="
                                    padding: 0.2rem;
                                    border: none;
                                  "
                    >
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="money-required"
                      >
                        <money
                          v-model="mont14"
                          v-bind="vMoney"
                          :disabled="isModalShow"
                          class="form-control"
                        />
                        <div
                          v-if="errors[0] && validateMoney"
                          class="invalid-feedback"
                        >Monthly payment is {{ errors[0] }}</div>
                      </ValidationProvider>
                    </td>
                  </tr>
                  <tr style="background: #f1f1f1">
                    <td
                      style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #999;
                                  "
                    >Retainer Fee</td>
                    <td
                      style="
                                    padding: 0.4rem;
                                    border: none;
                                    color: #baa345;
                                    font-weight: bold;
                                  "
                    >
                      <span>{{ "$ " + this.mont15 }}</span>
                      <select
                        id
                        v-model="porctrf"
                        :disabled="
                          (currentUser.role_id == 1 ||
                            currentUser.role_id == 2) && isModalShow
                        "
                        class="input-form"
                        name
                        style="color: #baa345; padding-left: 0"
                      >
                        <option
                          v-for="percentaje in percentajes"
                          :key="percentaje.id"
                          :value="percentaje.value"
                        >{{ percentaje.label }}</option>
                      </select>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-md-3">
                <div
                  class="class-inline row"
                  style="margin-top: 0px"
                >
                  <div
                    class="class-campo-icon-hori col-md-12"
                    style="
                                  font-size: 10px;
                                  display: flex;
                                  justify-content: center;
                                  align-items: center;
                                  height: 30px;
                                  padding: 0;
                                  text-align: center;
                                  background: #f1f1f1;
                                  color: #999;
                                  font-weight: bold;
                                "
                  >Monthly payment</div>
                  <div
                    class="class-campo-text-hori col-md-12"
                    style="
                                  padding: 4px 2px 5px 2px;
                                  height: 35px;
                                  text-align: center;
                                  border: 1px solid #f1f1f1;
                                  font-weight: bold;
                                  color: #999;
                                "
                  >
                    <span>{{ "$ " + this.mont14 }}</span>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div
                  class="class-inline row"
                  style="margin-top: 0px"
                >
                  <div
                    class="class-campo-icon-hori col-md-12"
                    style="
                                  font-size: 10px;
                                  display: flex;
                                  justify-content: center;
                                  align-items: center;
                                  height: 30px;
                                  padding: 0;
                                  text-align: center;
                                  background: #f1f1f1;
                                  color: #999;
                                  font-weight: bold;
                                "
                  >Months</div>
                  <div
                    class="class-campo-text-hori col-md-12"
                    style="
                                  padding: 4px 2px 5px 2px;
                                  height: 35px;
                                  text-align: center;
                                  border: 1px solid #f1f1f1;
                                  font-weight: bold;
                                  color: #999;
                                "
                  >
                    <span>
                      {{
                        this.mont16 == "Infinity" ? "" : this.mont16
                      }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div
                  class="class-inline row"
                  style="margin-top: 0px"
                >
                  <div
                    class="class-campo-icon-hori col-md-12"
                    style="
                                  font-size: 10px;
                                  display: flex;
                                  justify-content: center;
                                  align-items: center;
                                  height: 30px;
                                  padding: 0;
                                  text-align: center;
                                  background: #f1f1f1;
                                  color: #999;
                                  font-weight: bold;
                                "
                  >Years</div>
                  <div
                    class="class-campo-text-hori col-md-12"
                    style="
                                  padding: 4px 2px 5px 2px;
                                  height: 35px;
                                  text-align: center;
                                  border: 1px solid #f1f1f1;
                                  font-weight: bold;
                                  color: #999;
                                "
                  >
                    <span>
                      {{
                        this.mont17 == "Infinity" ? "" : this.mont17
                      }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div
                  class="class-inline row"
                  style="margin-top: 0px"
                >
                  <div
                    class="class-campo-icon-hori col-md-12"
                    style="
                                  font-size: 10px;
                                  display: flex;
                                  justify-content: center;
                                  align-items: center;
                                  height: 30px;
                                  padding: 0;
                                  text-align: center;
                                  background: #f1f1f1;
                                  color: #999;
                                  font-weight: bold;
                                "
                  >By estimated savings</div>
                  <div
                    class="class-campo-text-hori col-md-12"
                    style="
                                  padding: 4px 2px 5px 2px;
                                  height: 35px;
                                  text-align: center;
                                  border: 1px solid #f1f1f1;
                                  font-weight: bold;
                                  color: #999;
                                "
                  >
                    <span>{{ "$ " + this.mont18 }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-1">
            <table style="width: 100%">
              <tr>
                <td
                  style="
                                color: #b59200;
                                text-align: center;
                                width: 140px;
                                font-weight: bold;
                              "
                >FEE</td>
                <td style="text-align: center; width: 150px">
                  <b-input-group prepend="$">
                    <b-form-input
                      v-model="fee"
                      disabled
                      placeholder="$ 0.00"
                    />
                  </b-input-group>
                </td>
                <td
                  style="
                                color: #b59200;
                                text-align: center;
                                width: 120px;
                                font-weight: bold;
                              "
                />
                <td style="text-align: center; width: 140px" />
              </tr>
            </table>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </ValidationObserver>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    salesClient: Object,
    idleyend: String,
    typeModal: {
      type: Number,
      default: 1,
      // 1: create, 2: show
    },
    isModalShow: Boolean,
    isModalAdd: Boolean,
  },
  data() {
    return {
      blocking: false,
      total_balance: '',
      total_monthly: '',
      total_interest: '',
      mont3: '',
      mont4: '',
      mont5: '',
      mont7: '',
      mont9: '',
      mont10: '',
      mont11: '',
      mont12: 0,
      mont13: '',
      mont14: 0,
      mont15: '',
      mont16: '',
      mont17: '',
      mont18: '',
      inputDisable: false,
      arraySettlementCost: [
        5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
        24, 25,
      ],
      percentajes: [
        { value: '0.0', label: '0%' },
        { value: '0.01', label: '1%' },
        { value: '0.02', label: '2%' },
        { value: '0.03', label: '3%' },
        { value: '0.04', label: '4%' },
        { value: '0.05', label: '5%' },
        { value: '0.06', label: '6%' },
        { value: '0.07', label: '7%' },
        { value: '0.08', label: '8%' },
        { value: '0.09', label: '9%' },
        { value: '0.1', label: '10%' },
      ],
      vMoney: {
        decimal: '.',
        thousands: ',',
        prefix: '$ ',
        precision: 2,
        masked: false,
      },
      porctrf: '0.1',
      fee: '',
      validatenext1: false,
      validateMoney: false,
      exportPdfDisabled: false,
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
    }),
  },
  watch: {
    porctrf() {
      this.mont15 = parseFloat(this.total_balance * this.porctrf).toFixed(2)
      this.fee = this.mont15
    },
    mont14() {
      this.functionGeneral()
    },
  },
  async mounted() {
    await this.allDebtSolution()
  },
  methods: {
    functionGeneral() {
      this.mont3 = parseFloat(
        (this.total_balance * this.total_interest) / 100,
      ).toFixed(2)
      this.mont4 = parseFloat(this.mont3 / 12).toFixed(2)
      this.mont5 = parseFloat(this.total_monthly - this.mont4).toFixed(2)
      this.mont7 = parseFloat(this.mont4 / 30).toFixed(2)
      this.mont9 = Math.ceil(
        parseFloat(this.total_balance / this.mont5).toFixed(1),
      )
      this.mont10 = Math.ceil(parseFloat(this.mont9 / 12).toFixed(1))
      this.mont11 = parseFloat(this.mont9 * this.total_monthly).toFixed(2)

      this.mont12 = parseFloat(this.total_balance * 0.8).toFixed(2)
      this.mont15 = parseFloat(this.total_balance * 0.1).toFixed(2)
      this.mont16 = Math.ceil(parseFloat(this.mont12 / this.mont14).toFixed(1))
      this.mont17 = Math.ceil(parseFloat(this.mont16 / 12).toFixed(1))
      this.mont18 = parseFloat(this.mont11 - this.mont12).toFixed(2)

      this.fee = this.mont15
      this.mont13 = this.mont13 == null || this.mont13 == '' ? 25 : this.mont13
    },
    async nextfirst(id, type) {
      try {
        if (this.isModalShow) return true
        if (type == 1 || type == 2) {
          return await this.axiosNext(id, type)
        } else if (type == 4) {
          await this.saveant(id, type)
        } else if (this.dato12 == null || this.dato12 == '') {
          this.errorGoal = true
          return false
        } else {
          this.errorGoal = false
          if (this.date3 == null || this.date3 == '') {
            this.errorDate = true
            return false
          } else {
            this.errorDate = false
            return await this.axiosNext(id, type)
          }
        }
      } catch (error) {
        console.error(error)
        return false
      }
    },
    async prevfirst(id, type) {
      try {
        this.addPreloader()
        const response = await amgApi.post('/deletesave', {
          type,
          id,
          event: this.typeModal === 3 || this.typeModal === 4 || this.typeModal === 5 ? null : this.salesClient.event_id,
          account: this.typeModal === 3 || this.typeModal === 4 || this.typeModal === 5 ? this.salesClient.account_id : null,
        })
        if (response.status === 200) {
          // this.leyendDebsolution();
          this.functionGeneral()
          this.$emit('previousStep')
          this.password = ''
          this.okPassword = false
          this.errorPassword = false
        }
      } catch (error) {
        console.error(error)
      }
    },
    async saveant(id, type) {
      try {
        this.validateMoney = true
        const success = await this.$refs.form.validate()
        if (success) {
          const response = await amgApi.post('/savefirst', {
            type,
            id,
            event: this.typeModal === 3 || this.typeModal === 4 || this.typeModal === 5 ? null : this.salesClient.event_id,
            account: this.typeModal === 3 || this.typeModal === 4 || this.typeModal === 5 ? this.salesClient.account_id : null,
            total_due: this.mont12,
            cost: this.mont13,
            monthly: this.mont14,
            porctrf: this.porctrf,
            retainer: this.mont15,
            months: this.mont16,
            years: this.mont17,
            estimated: this.mont18,
            id_history: this.id_history,
            id_analisis: this.id_analisis,
          })
          if (response.status === 200) {
            if (type == 4) {
              if (this.salesClient.account_id) {
                this.downloadPdfAnalysis()
              } else {
                this.downloadPdfAnalysisEvent()
              }
            }
          }
        }
      } catch (error) {
        console.error(error)
      }
    },
    async axiosNext(id, type) {
      try {
        this.validateMoney = true
        const success = await this.$refs.form.validate()
        if (success) {
          const result = await this.$swal.fire({
            title: 'ARE YOU SURE OF CONTINUE ?',
            text: 'Before finalizing you must save.',
            icon: 'warning',
            showCancelButton: true,
          })
          if (result.value) {
            this.addPreloader()
            const response = await amgApi.post('/savefirst', {
              type,
              id,
              event: this.typeModal === 3 || this.typeModal === 4 || this.typeModal === 5 ? null : this.salesClient.event_id,
              account: this.typeModal === 3 || this.typeModal === 4 || this.typeModal === 5 ? this.salesClient.account_id : null,
              total_due: this.mont12,
              cost: this.mont13,
              monthly: this.mont14,
              porctrf: this.porctrf,
              retainer: this.mont15,
              months: this.mont16,
              years: this.mont17,
              estimated: this.mont18,
              id_history: this.id_history,
              id_analisis: this.id_analisis,
            })
            if (response.status === 200) {
              this.functionGeneral()
              this.$emit('nextStep')
              return true
            }
            return false
          }
          return false
        }
        return false
      } catch (error) {
        console.error(error)
        return false
      }
    },
    async allDebtSolution() {
      try {
        const response = await amgApi.post('/salesmadeds', {
          event: this.typeModal === 3 || this.typeModal === 4 || this.typeModal === 5 ? null : this.salesClient.event_id,
          account: this.typeModal === 3 || this.typeModal === 4 || this.typeModal === 5 ? this.salesClient.account_id : null,
        })
        if (response.status === 200) {
          const creditors = response.data
          if (creditors.length > 0) {
            const lvar = creditors.filter(element => element.state1 < 1)
            if (lvar.length > 0) {
              this.validatenext1 = false
            } else {
              this.validatenext1 = true
            }
            this.total_balance = creditors[0].total_balance
            this.total_monthly = creditors[0].total_monthly
            this.total_interest = creditors[0].total_interest
            this.id_history = creditors[0].id_history
            this.id_analisis = creditors[0].id_analisis
            this.mont14 = creditors[0].monthly_payment == null ? 0 : creditors[0].monthly_payment
            this.mont13 = creditors[0].cost
            // eslint-disable-next-line no-nested-ternary
            this.porctrf = creditors[0].pcrf == null ? 0.1 : creditors[0].pcrf == '0.10' ? 0.1 : creditors[0].pcrf
          } else {
            this.validatenext1 = false
            this.total_balance = ''
            this.total_monthly = ''
            this.total_interest = ''
            this.id_history = ''
            this.id_analisis = ''
            this.mont14 = ''
            this.mont13 = '25'
            this.porctrf = '0.1'
          }
          this.functionGeneral()
          this.removePreloader()
        }
      } catch (error) {
        console.error(error)
      }
    },
    downloadPdfAnalysis() {
      this.exportPdfDisabled = true
      // eslint-disable-next-line no-restricted-globals
      location.href = `${process.env.VUE_APP_BASE_URL_ASSETS}/imprimirfileappotanalysisc/?id=${this.salesClient.account_id}`
      setTimeout(() => {
        this.exportPdfDisabled = false
      }, 10000)
    },
    downloadPdfAnalysisEvent() {
      this.exportPdfDisabled = true
      // eslint-disable-next-line no-restricted-globals
      location.href = `${process.env.VUE_APP_BASE_URL_ASSETS}/imprimirfileappotanalysis/?id=${this.salesClient.event_id}`
      setTimeout(() => {
        this.exportPdfDisabled = false
      }, 10000)
    },
  },
}
</script>

<style>
</style>
