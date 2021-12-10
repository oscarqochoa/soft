<template>
  <div>
    <ValidationObserver ref="form">
      <b-modal
          modal
          size="xl"
          body-class="scroll-botoom-none"
          header-class="bg-white pt-0 pr-0"
          footer-class="bg-white px-0"
          scrollable
          modal-class="height-modal"
          v-model="modalServices"
          @hidden="hideModal(false,0)"
      >
        <!-- HEADER START -->
        <template #modal-header="{  }">
          <modal-services-title
              :global="global"
              :typeModal="typeModal"
              :usersServices="usersServices"
              :programsAll="programsAll"
              :headerS="headerS"
              :sales="salesClient"
              @changeProgram="changeProgram"
              @close="hideModal(false,0)"
          ></modal-services-title>
        </template>
        <!-- HEADER END -->
        <!-- BODY START -->
        <!-- rates -->

        <b-row>
          <div class="col-lg-6">
            <div class="form-group">
              <table
                  class="table table-bordered table-striped"
                  v-if="rates.length>0 && options_ce.length>0"
              >
                <tbody>
                <tr class="description-price">
                  <th style="font-weight: 100">Description</th>
                  <th style="font-weight: 100; width: 15%">Price</th>
                  <th style="font-weight: 100">Task</th>
                  <th style="font-weight: 100">Quantity</th>
                  <th style="font-weight: 100">SubTotal</th>
                </tr>
                <template v-for="(prices, index) in rates">
                  <tr :key="prices.id" v-if="index < 14">
                    <td>
                      <span>{{prices.description}}</span>
                    </td>
                    <td style="color: #666666">
                      $
                      <span>{{ prices.price}}</span>.00
                    </td>
                    <td>
                      <select
                          :disabled="isModalShow || index == 0 || index == 1"
                          class="select-task"
                          v-model="select_option[index]"
                          @change="changeOption(index)"
                      >
                        <option value="reset"></option>
                        <option
                            :value="dato.id_task"
                            v-for="(dato, i) in options_ce[index]._data"
                            :key="i"
                        >{{ dato.task }}</option>
                      </select>
                    </td>
                    <td>
                      <input
                          :disabled="prices.disabled"
                          class="input-form-cant text-center bg-white rounded"
                          type="number"
                          min="1"
                          max="99"
                          v-model.number="prices.quantity"
                          @change="calculateSubtotal(index)"
                      />
                    </td>
                    <td style="color: #baa345">
                      $
                      <money
                          v-model.lazy="prices.subtotal"
                          v-bind="vMoney"
                          class="campo-input-color-palceholder sub-total"
                          disabled
                      ></money>
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
                  class="table table-bordered table-striped"
                  v-if="rates.length>0 && options_ce.length>0"
              >
                <tbody>
                <tr class="description-price">
                  <th style="font-weight: 100">Description</th>
                  <th style="font-weight: 100; width: 15%">Price</th>
                  <th style="font-weight: 100">Task</th>
                  <th style="font-weight: 100">Quantity</th>
                  <th style="font-weight: 100">SubTotal</th>
                </tr>
                <template v-for="(pdata2, index) in rates">
                  <tr :key="pdata2.id" v-if="index > 13">
                    <td class="description-price">
                      <span>{{pdata2.description}}</span>
                    </td>
                    <td style="color: #666666">
                      $
                      <span>{{ pdata2.price }}</span>.00
                    </td>
                    <td>
                      <select
                          :disabled="isModalShow"
                          class="select-task"
                          v-model="select_option[index]"
                          @change="changeOption(index)"
                      >
                        <option value="reset"></option>
                        <option
                            :value="dato.id_task"
                            v-for="(dato, i) in options_ce[index]._data"
                            :key="i"
                        >{{ dato.task }}</option>
                      </select>
                    </td>
                    <td>
                      <input
                          :disabled="pdata2.disabled || isModalShow"
                          class="input-form-cant text-center bg-white rounded"
                          type="number"
                          min="1"
                          max="99"
                          v-model.number="pdata2.quantity"
                          @change="calculateSubtotal(index)"
                      />
                    </td>
                    <td style="color: #baa345">
                      $
                      <money
                          v-model.lazy="pdata2.subtotal"
                          v-bind="vMoney"
                          class="campo-input-color-palceholder sub-total"
                          disabled
                      ></money>
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
          <b-row
              class="justify-content-around mb-2 ml-1"
              :class="{ 'border-bottom pb-3':!isModalShow}"
          >
            <div class="col-4" v-if="isModalShow">
              <div class="back-gray p-2">
                <div class="text-center">
                  TOTAL $
                  <money
                      v-model.lazy="totalSuggeste"
                      v-bind="vMoney"
                      class="input-total text-center"
                      disabled
                  ></money>
                </div>
              </div>
            </div>
            <div class="col-4" v-else>
              <div class="back-gray p-2">
                <div class="text-center">
                  TOTAL $
                  <money
                      v-model.lazy="totalAmount"
                      v-bind="vMoney"
                      class="input-total text-center"
                      disabled
                  ></money>
                </div>
              </div>
            </div>
            <!-- Fee -->

            <div class="col-4">
              <ValidationProvider rules="required|money-1" v-slot="{errors}">
                <div class="back-gray p-2">
                  <div class="text-center">
                    FEE $
                    <money
                        v-model="fee"
                        v-bind="vMoney"
                        class="input-total text-center font-weight-bolder gold-text"
                        :style="errors[0] && validateMoney? 'color:red !important':''"
                        :class="{'border border-danger':errors[0] && validateMoney}"
                        :disabled="isModalShow"
                    ></money>
                  </div>
                </div>
                <div
                    class="invalid-feedback ml-4"
                    v-if="errors[0] && validateMoney"
                >Fee is {{ errors[0] }}</div>
              </ValidationProvider>
            </div>
          </b-row>
          <template v-if="!isModalShow">
            <template>
              <template v-if="!isModalAdd">
                <button type="button" class="btn rounded bg-danger" @click="hideModal(false,0)">
                  <i class="fas fa-power-off"></i> CANCEL
                </button>
                <button type="button" class="btn rounded bg-success" @click="saveRates()">
                  <i class="far fa-save"></i> SAVE
                </button>
              </template>

              <button
                  v-if="isModalAdd"
                  class="btn class-button-green"
                  style="background: #0066FF;text-transform:uppercase;float: none"
                  @click="saveRates()"
              >
                Continue
                <i style="font-size: 15px;margin-left: 5px;" class="fas fa-caret-right"></i>
              </button>
            </template>
          </template>
        </template>
        <!-- FOOTER END -->
      </b-modal>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  props: {
    modalServices: {
      type: Boolean,
      default: false
    },
    salesClient: {
      type: Object,
      default: () => ({ event_id: "", account_id: "", id: "", lead_id: "" })
    },
    global: {
      type: Object,
      default: () => ({})
    },
    typeModal: {
      type: Number,
      default: 1
      //1: complete rates crm, 2: detail of sale, 3: add Services
      //4: change Services, 5 show add change Services, 6  add  services programs
    },
    usersServices: {
      type: Array,
      default: () => []
    },
    programsAll: {
      type: Array,
      default: () => []
    },
    headerS: {
      type: Object,
      default: () => ({ program: "", seller: "", captured: "" })
    }
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
      observation: "Services",
      program: 3,
      otherspayments: [],
      options_ce: [],
      select_option: [],
      add_json_ce: [],
      json_ce_new: null,
      json_disabled: [],
      states_leads: [],
      rate_selected: [],
      vMoney: {
        decimal: ".",
        thousands: ",",
        prefix: "",
        precision: 2,
        masked: false
      },
      validateMoney: false,
      score_id: null,
      json_ce: null,
      totalSuggeste: 0
    };
  },
  created() {
    this.getSelects();
  },
  mounted() {
    if (this.program) {
      this.searchRate();
    }
    if (this.isModalAdd) {
      this.getScore();
    }
  },
  computed: {
    totalAmount() {
      let total = this.rates.reduce((sum, rate) => sum + rate.subtotal, 0);
      return total;
    },
    isModalShow() {
      return this.typeModal == 2 || this.typeModal == 5;
    },
    isModalAdd() {
      return this.typeModal == 3 || this.typeModal == 4 || this.typeModal == 6;
    }
  },
  methods: {
    /* PRELOADER */
    addPreloader() {
      var x = document.getElementById("app");
      x.classList.add("preloader");
      x.classList.add("opacity-uno");
    },
    removePreloader() {
      var x = document.getElementById("app");
      x.classList.remove("preloader");
      x.classList.remove("opacity-uno");
    },

    saveRates(program) {
      this.validateMoney = true;
      // Validate Money
      this.$refs.form.validate().then(success => {
        if (!success) {
          return;
        } else {
          let message = "";
          let route = "";
          let typeADD = "";
          let prices = [];
          //Depends of the Modal type
          if (this.typeModal == 1) {
            message = "complete Rates";
            route = "/api/attendend";
          } else if (this.typeModal == 3) {
            message = "add new service";
            route = "/attendendprogram";
            typeADD = 1;
          } else if (this.typeModal == 4) {
            message = "change service";
            route = "/attendendprogram";
            typeADD = 2;
          } else if (this.typeModal == 6) {
            message = "add new service";
            route = "/api/leadattendend";
          }
          //Get the prices
          this.rates.map((rate, index) => {
            if (rate.quantity > 0) {
              prices.push({ item: rate.id.toString(), cant: rate.quantity });
              this.add_json_ce.push({
                index: index,
                program: rate.id,
                task: this.select_option[index]
              });
            } else {
              prices.push({ item: "0", cant: 0 });
            }
          });
          const param = {
            prices: prices,
            observation: this.observation,
            contract: 1,
            program: this.program,
            fee: this.fee,
            suggested: this.totalAmount,
            otherpricesp: this.otherspayments,
            event: this.salesClient.event_id,
            json_noce: this.add_json_ce,
            stateid: 0,

            //Diferents to add change Services
            account: this.salesClient.account_id
                ? this.salesClient.account_id
                : "",
            captured: this.headerS.captured,
            seller: this.headerS.seller,
            type: typeADD,
            user_id: this.global.layout.id,
            module: this.global.layout.modul_id,
            id_score: this.score_id,
            json_ce: this.json_ce
          };

          swal
              .fire({
                title: `Are you sure you want to ${message}?`,
                text: "You won't be able to revert this!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#ab9220",
                cancelButtonColor: "#8f9194",
                confirmButtonText: "Yes"
              })
              .then(result => {
                if (result.value) {
                  this.addPreloader();
                  axios.post(`${route}`, param).then(response => {
                    if (response.status == 200) {
                      this.hideModal(true, this.program);
                    }
                  });
                }
              });
        }
      });
    },

    /* Changes */

    changeOption(index) {
      if (this.select_option[index] != "reset") {
        this.rates[index].quantity = 1;
        this.rates[index].subtotal = this.rates[index].price;
        this.rates[index].disabled = false;
      } else {
        this.rates[index].quantity = 0;
        this.rates[index].subtotal = 0;
        this.rates[index].disabled = true;
      }
    },
    calculateSubtotal(index) {
      this.rates[index].subtotal =
          this.rates[index].price * this.rates[index].quantity;
    },

    /* Rates */
    async getSelects() {
      axios.get("/api/selectratesce").then(response => {
        this.forSelectCe(response.data);
        this.select_option[0] = 1;
        this.select_option[1] = 1;
      });
      await this.getSelected();
    },
    forSelectCe(data) {
      for (let index = 1; index < 28; index++) {
        this.options_ce.push({
          id: index,
          _data: data.filter(i => i.id_price == index)
        });
        this.json_disabled[index - 1] = true;
      }
    },
    getSelected() {
      if (this.isModalShow) {
        axios
            .post("/api/getjsonattendce", {
              sale_id: this.salesClient.id
            })
            .then(response => {
              if (response.status == 200) {
                this.json_ce_new = response.data.json_ce;
                this.date_sale = response.data.date_sale;
                if (this.json_ce_new != null) {
                  let json = JSON.parse(this.json_ce_new);
                  if (this.validateIsArray(json)) {
                    json.forEach((value, index) => {
                      this.select_option[value.index] = value.task;
                    });
                  }
                }
              }
            })
            .catch(err => {
              console.error(err);
            });
      }
    },
    validateIsArray(json) {
      try {
        json.forEach((value, index) => {
          this.select_option[value.index] = value.task;
        });
        return true;
      } catch (e) {
        return false;
      }
    },
    searchRate() {
      axios
          .post("/api/searchprogram", {
            id: this.program
          })
          .then(response => {
            if (response.status == 200) {
              this.rates = response.data;

              //Inquieres && Personal information
              this.rates[0].quantity = 1;
              this.rates[0].subtotal = this.rates[0].price;
              this.rates[1].quantity = 1;
              this.rates[1].subtotal = this.rates[1].price;
              if (!this.isModalShow) {
                this.removePreloader();
              }

              if (this.isModalShow) {
                this.showRates();
              }
            }
          })
          .catch(err => {
            console.error(err);
          });
    },

    showRates() {
      axios
          .post("/api/searchprogramsalemade", {
            id: this.salesClient.id
          })
          .then(response => {
            if (response.status == 200) {
              this.fee = response.data[0].fee;
              this.rate_selected = JSON.parse(response.data[0].rate_selected);
              this.totalSuggeste = response.data[0].suggeste;

              for (let i = 0; i < this.rates.length; i++) {
                if (this.validateIsArray(this.rate_selected)) {
                  for (let y = 0; y < this.rate_selected.length; y++) {
                    if (this.rates[i].id == this.rate_selected[y].rate_id) {
                      this.rates[i].quantity = this.rate_selected[y].quantity;
                      this.rates[i].subtotal =
                          this.rates[i].price * this.rates[i].quantity;
                    }
                  }
                }
              }

              this.removePreloader();
            }
          })
          .catch(err => {
            console.error(err);
          });
    },

    hideModal(refresh, programSelect) {
      this.$emit("closeModal", refresh, programSelect);
    },
    changeProgram(headerS) {
      this.$emit("changeProgram", headerS);
    },
    getScore() {
      axios
          .post("/api/getscoreattend", {
            lead_id: this.salesClient.lead_id
          })
          .then(response => {
            if (response.status == 200) {
              this.score_id = response.data.score_id;
            }
          })
          .catch(err => {
            console.error(err);
          });
    }
  }
};
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
