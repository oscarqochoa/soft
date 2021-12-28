<template>
  <div>
    <b-card no-body class="mb-1">
      <div class="cont-search-paginate mx-2 mb-2 mt-2">
        <ValidationObserver ref="form">
          <div class="row">
            <div class="col-lg-5 col-md-5 col-sm-12 pr-1 box">
              <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-8">
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
                      <div class="text-center ">
                        <b-spinner variant="primary" label="Text Centered" />
                      </div>
                    </b-list-group>
                    <b-list-group
                      class="autocomplete-results"
                      v-if="filterSearch && users == null && !statusSpinner && statusSelectedSearch"
                    >
                      <div class="text-center ">
                        <strong>Sorry, There's not result</strong>
                      </div>
                    </b-list-group>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4">
                  <div class="form-group">
                    <b-button
                      class="d-flex justify-content-between"
                      variant="primary"
                      @click="getcard"
                      :disabled="changeDisable"
                    >
                      CONTINUE
                      <feather-icon
                        icon="ArrowRightIcon"
                        size="15"
                      ></feather-icon>
                    </b-button>
                  </div>
                </div>
              </div>
              <div class="row" v-if="dataLead">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <b-form-group label="Lead" label-for="v-Lead">
                    <b-form-input v-model="lead" placeholder="Lead" />
                  </b-form-group>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <b-form-group label="Mobile" label-for="v-Mobile">
                    <b-form-input v-model="mobile" placeholder="mobile" />
                  </b-form-group>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <ValidationProvider
                    name="comment"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <b-form-group label="Amount" label-for="v-Amount">
                      <b-input-group
                        prepend="$"
                        :class="{ 'border border-danger': errors[0] }"
                      >
                        <b-form-input
                          id="campo2"
                          type="text"
                          v-model="amount"
                          v-on:blur="validMounthly(2)"
                          @keypress="justNumbers"
                          placeholder="amount"
                        />
                      </b-input-group>
                    </b-form-group>
                  </ValidationProvider>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <ValidationProvider
                    name="comment"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <b-form-group
                      label="Type of Payment"
                      label-for="v-TypeOfPayment"
                    >
                      <b-form-radio-group
                        v-model="payment"
                        :options="options"
                        :class="{ 'border border-danger': errors[0] }"
                        name="radios-stacked"
                        stacked
                      />
                      <br />
                      <b-form-input
                        v-if="payment == 3"
                        v-model="observationOther"
                        placeholder="Specific"
                      />
                    </b-form-group>
                  </ValidationProvider>
                </div>

                <div class="col-lg-12" v-if="errosList">
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
                      <li v-for="(items, index) in errosAutorize" :key="index">
                        {{ items.errorText }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-12" v-if="messageList">
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
                </div>
              </div>
            </div>
            <div class="col-lg-7 col-md-7 col-sm-12 box">
              <div class="row ml-2">
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
                        :class="{ 'border border-danger': errors[0] }"
                        name="radio-inline"
                      />
                      <b-form-checkbox
                        class="mt-2"
                        v-if="methodpayment == 1"
                        v-model="charge"
                        value="true"
                        @input="chargeStatus()"
                        name="radio-inline"
                      >
                        Charge
                      </b-form-checkbox>
                    </div>
                  </ValidationProvider>
                </b-form-group>
              </div>
            </div>
            <div class="col-lg-11 col-md-12 col-sm-12 box">
              <div
                class="col-lg-12 w-100"
                style="display: inline-block"
                v-if="methodpayment == 1"
              >
                <modal-credit-card
                  :key="modalCreditController"
                  :cardsLead="cardsLead"
                  @CardId="getCardId"
                ></modal-credit-card>
              </div>
            </div>

            <div class="row w-100">
              <div class="col-lg-12 ml-2">
                <b-form-group class="inline">
                  <b-button
                    type="submit"
                    variant="primary"
                    class="mr-1"
                    @click="submitAutorize"
                    :disabled="changeDisable"
                  >
                    SUBMIT
                  </b-button>
                  <b-form-checkbox
                    v-if="methodpayment == 1"
                    v-model="sendsms"
                    value="true"
                    class="custom-control-primary"
                  >
                    Send SMS
                  </b-form-checkbox>
                </b-form-group>
              </div>
            </div>
          </div>
        </ValidationObserver>
      </div>
    </b-card>
  </div>
</template>

<script>
import { amgApi } from "@/service/axios";
import vSelect from "vue-select";
import { mapGetters } from "vuex";

import ModalCreditCard from "@/views/crm/views/payments/components/ModalCreditCard.vue";

export default {
  name: "process-crm",
  components: {
    vSelect,
    ModalCreditCard,
  },
  data() {
    return {
      modalCreditController: 0,
      cardsLead: {},
      options: [
        { text: "Realtor", value: "1" },
        { text: "Appointment", value: "2" },
        { text: "Others", value: "3" },
      ],
      optionsMethodPay: [
        { text: "Credit Card", value: "1" },
        { text: "Others", value: "2" },
      ],
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
      statusSelected:false,
    };
  },
  computed: {
    statusSpinner() {
      return this.spinner;
    },
    statusSelectedSearch(){
      return this.statusSelected
    },
    changeDisable() {
      return this.userfilter == "" ? true : false;
    },
    filterSearch() {
      return this.userfilter == "" ? false : true;
    },
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  methods: {
    getCardsLead() {
      this.cardsLead = {
        lead_id: this.user_id, //user_id
        user_id: this.currentUser.user_id,
        rol: this.currentUser.arrRoles[0].role_id,
      };
    },
    chargeStatus() {
      if (this.charge == false) {
        this.$swal
          .fire({
            title: "Desactivate Charge",
            text: "Are you sure to desactivate the charge?",
            icon: "warning",
            showCancelButton: true,
            customClass: {
              confirmButton: "btn btn-primary",
              cancelButton: "btn btn-danger",
            },
            confirmButtonText: "Yes",
          })
          .then((result) => {
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
    searchlead() {
      if (this.userfilter != "") {
        this.spinner = true;
        this.statusSelected = true
        amgApi
          .post("/searchlead", {
            q: this.userfilter,
          })
          .then((response) => {
            this.users = response.data;
            if(this.users.length == 0){
              this.users = null
            }
            this.spinner = false;
          })
          .catch((err) => {
            this.spinner = false;
            this.showToast('danger', 'top-right', 'Error', 'XIcon', 'Something went wrong with users, try again!')
            console.error(err);
          });
      } else {
        this.users = null;
      }
    },
    searchuser(id, first, last, mobile) {
      this.user_id = id;
      this.userfilter = first + " " + last + " | " + mobile;
      this.users = null;
      this.statusSelected = false
    },
    getCardId(Card) {
      
      this.card_id = Card;
    },
    getcard() {
      this.$store.commit("app/SET_LOADING", true);
      amgApi
        .post("/searchleadpayment", {
          id: this.user_id,
        })
        .then((response) => {
          if (response.status == 200) {
            this.cards = response.data;
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
            this.$store.commit("app/SET_LOADING", false);
          }
        })
        .catch((error) => {
          this.$store.commit("app/SET_LOADING", false);
          console.log(error);
        });
    },
    submitAutorize() {
      this.subtAutorize();
    },
    subtAutorize() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        } else {
          this.$swal
            .fire({
              title: "Process Payment",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              customClass: {
                confirmButton: "btn btn-primary",
                cancelButton: "btn btn-danger ",
              },
              confirmButtonText: "Yes",
            })
            .then((result) => {
              if (result.value) {
                this.$store.commit("app/SET_LOADING", true);
                amgApi
                  .post("/checkoutpayment", {
                    idcard: this.card_id,
                    amount: this.amount,
                    merchant: this.merchant,
                    idsession: this.currentUser.status_session,
                    payment: this.payment,
                    lead_id: this.user_id,
                    methodpayment: this.methodpayment,
                    observationOther: this.observationOther,
                    charge: this.charge == false ? 1 : 0,
                    sendsms: this.sendsms == true ? 1 : 0,
                  })
                  .then((response) => {
                    if (response.status == 200 && response.data.status == 200) {
                      if (this.methodpayment == 1) {
                        if (response.data.transaction.messages) {
                          this.$store.commit("app/SET_LOADING", false);
                          this.$swal.fire({
                            icon: "success",
                            title:
                              response.data.transaction.responseCode == 1
                                ? "Approved"
                                : response.data.transaction.responseCode == 2
                                ? "Declined"
                                : response.data.transaction.responseCode == 3
                                ? "Error"
                                : response.data.transaction.responseCode == 4
                                ? "Held For Review"
                                : "",
                          });

                          this.$router.push({ name: "payments-crm-list" });
                        } else {
                          this.$store.commit("app/SET_LOADING", false);
                          this.$swal
                            .fire({
                              icon: "error",
                              title:
                                response.data.transaction.responseCode == 1
                                  ? "Approved"
                                  : response.data.transaction.responseCode == 2
                                  ? "Declined"
                                  : response.data.transaction.responseCode == 3
                                  ? "Error"
                                  : response.data.transaction.responseCode == 4
                                  ? "Held For Review"
                                  : "",
                            })
                            .then((res) => {
                              this.$store.commit("app/SET_LOADING", false);
                              if (res) {
                                this.getcard();
                                this.card_id = "";
                              }
                            });
                        }
                      } else {
                        this.$store.commit("app/SET_LOADING", false);
                        this.$swal
                          .fire({
                            icon: "success",
                            title: "Transaction Unverified",
                          })
                          .then((res) => {
                            if (res) {
                              this.$store.commit("app/SET_LOADING", false);
                              this.$emit("clickList", true);
                            }
                          });
                        this.$router.push({ name: "payments-crm-list" });
                      }
                    } else if (
                      response.status == 200 &&
                      response.data.status == 500
                    ) {
                      this.$store.commit("app/SET_LOADING", false);
                      if (response.data.transaction.errors) {
                        this.errosAutorize =
                          response.data.transaction.errors.error;
                        this.responseCode =
                          response.data.transaction.responseCode;
                        this.messageList = false;
                        this.errosList = true;
                        if (this.methodpayment == 1) {
                          
                          this.$swal
                            .fire({
                              icon: "error",
                              title:
                                response.data.transaction.responseCode == 1
                                  ? "Approved"
                                  : response.data.transaction.responseCode == 2
                                  ? "Declined"
                                  : response.data.transaction.responseCode == 3
                                  ? "Error"
                                  : response.data.transaction.responseCode == 4
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
                        this.$store.commit("app/SET_LOADING", false);
                        this.$swal
                          .fire({
                            icon: "error",
                            title:
                              response.data.transaction.responseCode == 1
                                ? "Approved"
                                : response.data.transaction.responseCode == 2
                                ? "Declined"
                                : response.data.transaction.responseCode == 3
                                ? "Error"
                                : response.data.transaction.responseCode == 4
                                ? "Held For Review"
                                : "",
                          })
                          .then((res) => {
                            if (res) {
                              this.getcard();
                              this.card_id = "";
                              this.$store.commit("app/SET_LOADING", false);
                            }
                          });
                      }
                    }
                  })
                  .catch((error) => {
                     this.$store.commit("app/SET_LOADING", false);
                     this.showToast(
                      "danger",
                      "top-right",
                      "Error",
                      "XIcon",
                      "Something went wrong!"
                    );
                    console.log(error);
                  });
              }
            });
        }
      });
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
