<template>
  <div>
    <b-card no-body class="mb-1">
      <div class="cont-search-paginate mx-2 mb-2 mt-2">
        <!-- Total Form -->
        <ValidationObserver ref="form">
          <b-row>
            <b-col lg="4" md="5" sm="12">
              <b-row>
                <b-col cols="12">
                  <b-form-group label="Entries">
                    <vue-autosuggest
                      ref="autocomplete"
                      v-model="userfilter"
                      :suggestions="filteredOptions"
                      :get-suggestion-value="getSuggestionValue"
                      :input-props="{
                        id: 'autosuggest__input',
                        class: 'form-control',
                        placeholder: 'Search Leads | Clients',
                      }"
                      :limit="10"
                      @input="searchLeads"
                      @selected="selectHandler"
                    >
                      <template slot-scope="{ suggestion }">
                        <span class="my-suggestion-item">
                          {{
                            suggestion.item.first_name +
                            " " +
                            suggestion.item.last_name
                          }}
                          |
                          {{ suggestion.item.mobile }}
                        </span>
                      </template>
                    </vue-autosuggest>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-button
                    class="d-flex justify-content-between"
                    variant="primary"
                    @click="getcard"
                    :disabled="changeDisable"
                  >
                    Continue
                    <feather-icon
                      icon="ArrowRightIcon"
                      size="15"
                      class="ml-1"
                    ></feather-icon>
                  </b-button>
                </b-col>
                <template v-if="dataLead">
                  <b-col cols="12">
                    <b-form-group class="mt-1" label="Mobile">
                      <b-form-input v-model="mobile" placeholder="mobile" />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group label="Lead">
                      <b-form-input v-model="lead" placeholder="Lead" />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <ValidationProvider
                      name="price"
                      rules="required|validate-amount"
                      v-slot="{ errors }"
                    >
                      <b-form-group label="Amount">
                        <money
                          v-model="amount"
                          v-bind="moneyConfig"
                          name="price"
                          id="price"
                          class="form-control"
                          :class="{
                            'border-danger': errors[0] && submitedForm,
                          }"
                        ></money>
                      </b-form-group>
                    </ValidationProvider>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group class="mt-1" label="Type of Payment">
                      <ValidationProvider
                        name="payment"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <b-form-radio-group
                          class="text-danger"
                          v-model="payment"
                          :options="options"
                          name="radios-stacked"
                        />
                        <small
                          class="text-danger"
                          v-if="errors[0] && submitedForm"
                        >
                          Type of payment is required
                        </small>
                      </ValidationProvider>
                      <b-form-input
                        v-if="payment == 3"
                        v-model="observationOther"
                        placeholder="Specific"
                        class="mt-1"
                      />
                    </b-form-group>
                  </b-col>
                  <b-col cols="12">
                    <b-form-group label="Method of Payment" v-if="dataLead">
                      <ValidationProvider
                        name="comment"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <div class="d-flex">
                          <b-form-radio-group
                            v-model="methodpayment"
                            :options="optionsMethodPay"
                            name="radio-inline"
                          />

                          <b-form-checkbox
                            v-if="methodpayment == 1"
                            v-model="charge"
                            value="true"
                            @input="chargeStatus()"
                            name="radio-inline"
                          >
                            Charge
                          </b-form-checkbox>
                        </div>
                        <small
                          class="text-danger"
                          v-if="errors[0] && submitedForm"
                        >
                          Method of payment is required
                        </small>
                      </ValidationProvider>
                    </b-form-group>
                  </b-col>
                </template>
              </b-row>
            </b-col>
            <b-col lg="8" md="7" sm="12">
              <b-col cols="12" v-if="methodpayment == 1">
                <modal-credit-card
                  class="mt-lg-0 mt-md-0 mt-sm-2 mt-2"
                  :key="modalCreditController"
                  :cardsLead="cardsLead"
                  @CardId="getCardId"
                >
                  <b-row v-if="dataLead" slot="errors">
                    <b-col cols="12" v-if="errosList">
                      <div
                        class="form-group"
                        :style="
                          responseCode == 1
                            ? 'color:green !important'
                            : 'color:red !important'
                        "
                      >
                        <span v-if="responseCode == 1">Approved</span>
                        <span v-if="responseCode == 2">Declined</span>
                        <span v-if="responseCode == 3">Error</span>
                        <span v-if="responseCode == 4">Held for Review</span>
                        <ul>
                          <li
                            v-for="(items, index) in errosAutorize"
                            :key="index"
                          >
                            {{ items.errorText }}
                          </li>
                        </ul>
                      </div>
                    </b-col>
                    <b-col cols="12" v-if="messageList">
                      <div
                        class="form-group"
                        :style="
                          responseCode != 1
                            ? 'color:red !important'
                            : 'color:green !important'
                        "
                      >
                        <span v-if="responseCode == 1">Approved</span>
                        <span v-if="responseCode == 2">Declined</span>
                        <span v-if="responseCode == 3">Error</span>
                        <span v-if="responseCode == 4">Held for Review</span>
                        <ul>
                          <li
                            v-for="(items, index) in messageAutorize"
                            :key="index"
                          >
                            {{ items.description }}
                          </li>
                        </ul>
                      </div>
                    </b-col>
                  </b-row>
                </modal-credit-card>
              </b-col>
            </b-col>

            <b-col cols="12" v-if="dataLead">
              <div class="mt-2 d-flex">
                <div class="d-inline-block mr-1">
                  <b-button
                    type="submit"
                    variant="primary"
                    @click="submitAutorize"
                    :disabled="changeDisable"
                  >
                    Submit
                  </b-button>
                </div>
                <b-form-checkbox
                  v-if="methodpayment == 1"
                  v-model="sendsms"
                  value="true"
                  class="custom-control-primary"
                >
                  Send SMS
                </b-form-checkbox>
              </div>
            </b-col>
          </b-row>
        </ValidationObserver>
      </div>
    </b-card>
  </div>
</template>

<script>
// Components
import { VueAutosuggest } from "vue-autosuggest";
import vSelect from "vue-select";

import { mapGetters } from "vuex";
import PaymentService from "../service/payments.service";
import ModalCreditCard from "@/views/crm/views/payments/components/ModalCreditCard.vue";
import { options, optionsMethodPay } from "../data/options.process.data";
export default {
  name: "process-crm",
  components: {
    vSelect,
    ModalCreditCard,
    VueAutosuggest,
  },

  data: function () {
    return {
      price: 0,
      modalCreditController: 0,
      cardsLead: {},
      // data of options
      options: options,
      optionsMethodPay: optionsMethodPay,
      userfilter: "",
      users: null,
      user_id: null,
      payment: "",
      cards: [],
      card_id: "",
      amount: "",
      merchant: 0,
      lead: "",
      mobile: "",
      dataLead: false,
      methodpayment: "",
      sendsms: true,
      selected: "",
      observationOther: "",
      errosList: false,
      responseCode: "3",
      errosAutorize: [],
      messageAutorize: [],
      messageList: false,
      charge: true,
      spinner: false,
      statusSelected: false,
      moneyConfig: {
        decimal: ",",
        thousands: ".",
        prefix: "$",
        suffix: "",
        precision: 2,
        masked: false,
      },

      submitedForm: false,
      filteredOptions: [],

      responseTypes: [
        "Undefined",
        "Approve",
        "Declined",
        "Error",
        "Held For Review",
      ],
    };
  },

  computed: {
    statusSpinner: function () {
      return this.spinner;
    },
    statusSelectedSearch: function () {
      return this.statusSelected;
    },
    changeDisable: function () {
      return this.userfilter == "" ? true : false;
    },
    filterSearch: function () {
      return this.userfilter == "" ? false : true;
    },
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  methods: {
    getCardsLead: function () {
      this.cardsLead = {
        lead_id: this.user_id, //user_id
        user_id: this.currentUser.user_id,
        rol: this.currentUser.role_id,
      };
    },
    chargeStatus: function () {
      if (this.charge == false) {
        this.showConfirmSwal("DELETE", "Are you sure?").then((result) => {
          if (result.value) {
            this.charge = false;
          } else {
            this.charge = true;
          }
        });
      }
    },
    validMounthly(id) {
      this.amount = this.globalFunction(id);
    },
    globalFunction(id) {
      var x = document.getElementById("campo" + id).value;
      if (x.indexOf(".") != -1) {
        var numw = x.replace(/,/gi, "");
        var dec = numw.split(".");
        var num = dec[0].split(/(?=(?:\d{3})+$)/).join(",");
        num = num + "." + dec[1];
      } else {
        var numw = x.replace(/,/gi, "");
        var num = numw.split(/(?=(?:\d{3})+$)/).join(",");
        num = num + ".00";
      }
      return num;
    },
    justNumbers: function (event) {
      var charCode = window.event ? event.which : event.keyCode;
      var RE = /^\d*(\.\d{1})?\d{0,1}$/;
      if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        //Usando la definición del DOM level 2, "return" NO funciona.
        event.preventDefault();
      }
    },
    getCardId: function (Card) {
      this.card_id = Card;
    },
    async getcard() {
      this.submitedForm = false;

      this.addPreloader();
      try {
        const data = await PaymentService.getCard({ id: this.user_id });
        this.cards = data;
        this.modalCreditController++;
        this.getCardsLead();
        this.dataLead = true;
        if (this.cards.length > 0) {
          this.lead = this.cards[0].lead_name;
          this.mobile = this.cards[0].mobile;
        } else {
          this.lead = "";
          this.mobile = "";
        }
        this.removePreloader();
      } catch (e) {
        console.error(e);
        this.removePreloader();
        this.showErrorSwal(error);
      }
    },
    submitAutorize() {
      this.errosList = false;
      this.submitedForm = true;

      this.subtAutorize();
    },
    subtAutorize: function () {
      this.$refs.form.validate().then(async (success) => {
        if (!success) {
          this.card_id = "";

          return;
        } else {
          const confirm = await this.showConfirmSwal(
            "Process Payment",
            "You won't be able to revert this!"
          );
          if (confirm.isConfirmed) {
            try {
              this.addPreloader();
              let params = {
                idcard: this.card_id,
                amount: this.amount,
                merchant: this.merchant,
                idsession: this.currentUser.user_id,
                payment: this.payment,
                lead_id: this.user_id,
                methodpayment: this.methodpayment,
                observationOther: this.observationOther,
                charge: this.charge == false ? 1 : 0,
                sendsms: this.sendsms == true ? 1 : 0,
              };
              const data = await PaymentService.subtAutorize(params);
              this.removePreloader();

              if (data.status == 200 && data.data.status == 200) {
                if (this.methodpayment == 1) {
                  if (data.data.transaction.messages) {
                    this.showSuccessSwal(
                      "Success!",
                      this.responseTypes[data.data.transaction.responseCode]
                    );

                    this.$router.push({ name: "payments-crm-list" });
                  } else {
                    this.showErrorSwal(
                      this.responseTypes[data.data.transaction.responseCode]
                    ).then((res) => {
                      if (res) {
                        this.getcard();
                        this.card_id = "";
                      }
                    });
                  }
                } else {
                  this.showSuccessSwal(
                    "Success!",
                    "Transaction Unverified"
                  ).then((res) => {
                    if (res) {
                      this.$emit("clickList", true);
                    }
                  });
                  this.$router.push({ name: "payments-crm-list" });
                }
              } else if (data.status == 200 && data.data.status == 500) {
                if (data.data.transaction.errors) {
                  this.errosAutorize = data.data.transaction.errors.error;
                  this.responseCode = data.data.transaction.responseCode;
                  this.messageList = false;
                  this.errosList = true;
                  if (this.methodpayment == 1) {
                    this.showErrorSwal(
                      this.responseTypes[data.data.transaction.responseCode]
                    ).then((res) => {
                      if (res) {
                        this.getcard();
                        this.card_id = "";
                      }
                    });
                  }
                } else {
                  this.showErrorSwal(
                    this.responseTypes[data.data.transaction.responseCode]
                  ).then((res) => {
                    if (res) {
                      this.getcard();
                      this.card_id = "";
                    }
                  });
                }
              }
            } catch (error) {
              this.showErrorSwal(error);
              this.removePreloader();
            }
          }

          this.card_id = "";
        }
      });
    },
    async searchLeads(text) {
      this.userfilter = "";

      if (text === "" || text === undefined) {
        this.filteredOptions = [];
        return;
      }

      try {
        const data = await PaymentService.searchlead({ q: text });
        this.filteredOptions = [{ data: data }];
      } catch (error) {
        console.error(error);
        this.showToast(
          "danger",
          "top-right",
          "Error",
          "XIcon",
          "Something went wrong!"
        );
      }
    },
    selectHandler(value) {
      this.user_id = value.item.id;
      this.userfilter =
        value.item.first_name +
        " " +
        value.item.last_name +
        " | " +
        value.item.mobile;

      this.users = null;
      this.statusSelected = false;
    },
    getSuggestionValue(suggestion) {
      return suggestion.item.value;
    },
  },
  created() {},
};
</script>

<style scoped>
.autocomplete {
  position: relative;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 520px;
  min-height: 1em;
  max-height: 25em;
  overflow: auto;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result:hover {
  background-color: #5f95e7 !important;
}

.box {
  flex-wrap: wrap;
}
</style>
  