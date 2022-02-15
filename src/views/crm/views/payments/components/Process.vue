<template>
  <div>
    <b-card no-body class="mb-1">
      <div class="cont-search-paginate mx-2 mb-2 mt-2">
        <!-- Total Form -->
        <ValidationObserver ref="form">
          <b-row>
            <!-- Column Information -->
            <div class="col-lg-5 col-md-5 col-sm-12 pr-1 box">
              <b-row>
                <div class="col-lg-8 col-md-8 col-sm-8">
                  <!-- Autocompleted -->
                  <div class="form-group autocomplete">
                    <b-form-input
                      id="camposearch"
                      autocomplete="off"
                      class="input-form"
                      type="text"
                      v-model="userfilter"
                      @keyup="searchlead"
                      ref="file"
                      name="file"
                      placeholder="Search Leads | Clients"
                    ></b-form-input>
                    <b-list-group
                      v-if="filterSearch && users != null && !statusSpinner"
                      class="autocomplete-results"
                    >
                      <b-list-group-item
                        class="autocomplete-result"
                        v-for="(user, index) in users"
                        :key="index"
                        @click="
                          searchuser(
                            user.id,
                            user.first_name,
                            user.last_name,
                            user.mobile
                          )
                        "
                      >
                        {{ user.first_name }} {{ user.last_name }} |
                        {{ user.mobile }}
                      </b-list-group-item>
                    </b-list-group>
                    <b-list-group
                      class="autocomplete-results"
                      v-if="statusSpinner"
                    >
                      <div class="text-center">
                        <b-spinner variant="primary" label="Text Centered" />
                      </div>
                    </b-list-group>
                    <b-list-group
                      class="autocomplete-results"
                      v-if="
                        filterSearch &&
                        users == null &&
                        !statusSpinner &&
                        statusSelectedSearch
                      "
                    >
                      <div class="text-center">
                        <strong>Sorry, There's not result</strong>
                      </div>
                    </b-list-group>
                  </div>
                </div>
                <!-- Search Continue Button -->
                <div class="col-lg-4 col-md-4 col-sm-4">
                  <div class="form-group">
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
                      ></feather-icon>
                    </b-button>
                  </div>
                </div>
              </b-row>
              <!-- Inputs Details -->
              <b-row  v-if="dataLead">
                <!-- Input Lead -->
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <b-form-group label="Lead" label-for="v-Lead">
                    <b-form-input v-model="lead" placeholder="Lead" />
                  </b-form-group>
                </div>
                <!-- Input Mobile -->
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <b-form-group label="Mobile" label-for="v-Mobile">
                    <b-form-input v-model="mobile" placeholder="mobile" />
                  </b-form-group>
                </div>
                <!-- Input Amount -->
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <ValidationProvider
                    name="price"
                    rules="required|validate-amount"
                    v-slot="{ errors }"
                  >
                    <b-form-group label="Amount" label-for="v-Amount">
                      <money
                        v-model="amount"
                        v-bind="moneyConfig"
                        name="price"
                        id="price"
                        class="form-control"
                        :class="{ 'border-danger': errors[0] }"
                      ></money>
                    </b-form-group>
                  </ValidationProvider>
                </div>
                <!-- Input Type of Payment -->
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <b-form-group
                    label="Type of Payment"
                    label-for="v-TypeOfPayment"
                  >
                    <ValidationProvider
                      name="payment"
                      rules="required"
                      v-slot="{ errors }"
                    >
                      <b-form-radio-group
                        v-model="payment"
                        :options="options"
                        :class="{ 'border-danger': errors[0] }"
                        name="radios-stacked"
                        stacked
                      />
                    </ValidationProvider>
                    <br />
                    <b-form-input
                      v-if="payment == 3"
                      v-model="observationOther"
                      placeholder="Specific"
                    />
                  </b-form-group>
                </div>
                <!-- List of Autorize Errors  -->
                <div class="col-lg-12" v-if="errosList">
                  <div
                    class="form-group"
                    :style="
                      responseCode == 1
                        ? 'color:green !important'
                        : 'color:red !important'
                    "
                  >
                    <span>{{statusResponseCode}}</span>
                    <ul>
                      <li v-for="(items, index) in errosAutorize" :key="index">
                        {{ items.errorText }} 
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- List of Message Errors -->
                <div class="col-lg-12" v-if="messageList">
                  <div
                    class="form-group"
                     :style="
                      responseCode != 1
                        ? 'color:red !important'
                        : 'color:green !important'
                    "
                  >
                    <span>{{statusResponseCode}}</span>
                    <ul>
                      <li
                        v-for="(items, index) in messageAutorize"
                        :key="index"
                      >
                        {{ items.description }} 
                      </li>
                    </ul>
                  </div>
                </div>
              </b-row>
            </div>
            <!-- Column Method Payment -->
            <div class="col-lg-7 col-md-7 col-sm-12 box">
              <b-row class="ml-2">
                <b-form-group
                  label="Method of Payment"
                  class="col-lg-9 col-md-9 col-sm-9"
                  v-if="dataLead"
                >
                  <ValidationProvider
                    name="comment"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <div class="row w-100">
                      <b-form-radio-group
                        v-model="methodpayment"
                        :options="optionsMethodPay"
                        class="demo-inline-spacing"
                        :class="{ 'border-danger': errors[0] }"
                        name="radio-inline"
                      />
                      <b-form-checkbox
                        class="mt-2"
                        v-if="methodpayment == 1"
                        v-model="charge"
                        value="true"
                        @input="chargeStatus()"
                        name="radio-inline"
                        >Charge</b-form-checkbox
                      >
                    </div>
                  </ValidationProvider>
                </b-form-group>
              </b-row>
            </div>
            <!-- List of Cards -->
            <div class="col-lg-11 col-md-12 col-sm-12 box">
              <div
                class="col-lg-12 w-100"
                style="display: inline-block"
                v-if="methodpayment == 1"
              >
              <!-- Modal Credit Cards -->
                <modal-credit-card
                  :key="modalCreditController"
                  :cardsLead="cardsLead"
                  @CardId="getCardId"
                ></modal-credit-card>
              </div>
            </div>
            <!-- Button Submit And CheckBox SEND -->
            <div class="row w-100">
              <div class="ml-1 pl-1 d-flex">
                <div class="d-inline-block mr-1">
                  <b-button
                    type="submit"
                    variant="primary"
                    class="pr-1"
                    @click="submitAutorize"
                    :disabled="changeDisable"
                    >Submit</b-button
                  >
                </div>
                <b-form-checkbox
                  v-if="methodpayment == 1"
                  v-model="sendsms"
                  value="true"
                  class="custom-control-primary"
                  >Send SMS</b-form-checkbox
                >
              </div>
            </div>
          </b-row>
        </ValidationObserver>
      </div>
    </b-card>
  </div>
</template>

<script>
import vSelect from "vue-select";
import { mapGetters } from "vuex";
// Import Services
import PaymentService from "../service/payments.service";
// Import Modal
import ModalCreditCard from "@/views/crm/views/payments/components/ModalCreditCard.vue";
// Import Data
import {options,optionsMethodPay} from '../data/options.process.data'
export default {
  name: "process-crm",
  components: {
    vSelect,
    ModalCreditCard,
  },

  data:function() {
    return {
      price: 0,
      modalCreditController: 0,
      cardsLead: {},
      // data of options
      options: options,
      optionsMethodPay:optionsMethodPay,
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
    };
  },

  computed: {
    statusSpinner:function() {
      return this.spinner;
    },
    statusSelectedSearch:function() {
      return this.statusSelected;
    },
    changeDisable:function() {
      return this.userfilter == "" ? true : false;
    },
    filterSearch:function() {
      return this.userfilter == "" ? false : true;
    },
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
    statusResponseCode:function() {
      switch (this.responseCode) {
        case "1":
          return "Approved";

        case "2":
          return "Declined";

        case "3":
          return "Error";

        case "4":
          return "Held for Review";

        default:
          return null;
      }
    },
  },
  methods: {
    getCardsLead:function() {
      this.cardsLead = {
        lead_id: this.user_id, //user_id
        user_id: this.currentUser.user_id,
        rol: this.currentUser.role_id,
      };
    },
    chargeStatus:function() {
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
   
    searchlead: async function() {
      if (this.userfilter != "") {
        this.spinner = true;
        this.statusSelected = true;
        try {
          const data = await PaymentService.searchlead({ q: this.userfilter });
          this.users = data;
          if (this.users.length == 0) {
            this.users = null;
          }
          this.spinner = false;
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
      } else {
        this.users = null;
      }
    },
    searchuser:function(id, first, last, mobile) {
      this.user_id = id;
      this.userfilter = first + " " + last + " | " + mobile;
      this.users = null;
      this.statusSelected = false;
    },
    getCardId:function(Card) {
      this.card_id = Card;
    },
    getcard:async function() {
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
    submitAutorize:function() {
      this.subtAutorize();
    },
    subtAutorize:function() {
      this.$refs.form.validate().then(async (success) => {
        if (!success) {
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
              }
              const data = await PaymentService.subtAutorize(params);
              if (data.status == 200 && data.data.status == 200) {
                if (this.methodpayment == 1) {
                  if (data.data.transaction.messages) {
                    this.removePreloader();
                    this.$swal.fire({
                      icon: "success",
                      title:
                        data.data.transaction.responseCode == 1
                          ? "Approved"
                          : data.data.transaction.responseCode == 2
                          ? "Declined"
                          : data.data.transaction.responseCode == 3
                          ? "Error"
                          : data.data.transaction.responseCode == 4
                          ? "Held For Review"
                          : "",
                    });

                    this.$router.push({ name: "payments-crm-list" });
                  } else {
                    this.removePreloader();
                    this.$swal
                      .fire({
                        icon: "error",
                        title:
                          data.data.transaction.responseCode == 1
                            ? "Approved"
                            : data.data.transaction.responseCode == 2
                            ? "Declined"
                            : data.data.transaction.responseCode == 3
                            ? "Error"
                            : data.data.transaction.responseCode == 4
                            ? "Held For Review"
                            : "",
                      })
                      .then((res) => {
                        this.removePreloader();
                        if (res) {
                          this.getcard();
                          this.card_id = "";
                        }
                      });
                  }
                } else {
                  this.removePreloader();
                  this.$swal
                    .fire({
                      icon: "success",
                      title: "Transaction Unverified",
                    })
                    .then((res) => {
                      if (res) {
                        this.removePreloader();
                        this.$emit("clickList", true);
                      }
                    });
                  this.$router.push({ name: "payments-crm-list" });
                }
              } else if (data.status == 200 && data.data.status == 500) {
                this.removePreloader();
                if (data.data.transaction.errors) {
                  this.errosAutorize = data.data.transaction.errors.error;
                  this.responseCode = data.data.transaction.responseCode;
                  this.messageList = false;
                  this.errosList = true;
                  if (this.methodpayment == 1) {
                    this.$swal
                      .fire({
                        icon: "error",
                        title:
                          data.data.transaction.responseCode == 1
                            ? "Approved"
                            : data.data.transaction.responseCode == 2
                            ? "Declined"
                            : data.data.transaction.responseCode == 3
                            ? "Error"
                            : data.data.transaction.responseCode == 4
                            ? "Held For Review"
                            : "",
                      })
                      .then((res) => {
                        if (res) {
                          this.getcard();
                          this.card_id = "";
                        }
                      });
                  }
                } else {
                  this.removePreloader();
                  this.$swal
                    .fire({
                      icon: "error",
                      title:
                        data.data.transaction.responseCode == 1
                          ? "Approved"
                          : data.data.transaction.responseCode == 2
                          ? "Declined"
                          : data.data.transaction.responseCode == 3
                          ? "Error"
                          : data.data.transaction.responseCode == 4
                          ? "Held For Review"
                          : "",
                    })
                    .then((res) => {
                      if (res) {
                        this.getcard();
                        this.card_id = "";
                        this.removePreloader();
                      }
                    });
                }
              }
            } catch (error) {
              this.showErrorSwal(error);
              this.removePreloader();
            }
          }
        }
      });
    },
  },
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
  