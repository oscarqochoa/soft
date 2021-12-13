<template>
  <div>
    <b-modal
      v-model="modalUp"
      title-class="h2"
      size="lg"
      title="REQUEST LOAN"
      modal-class="modal-primary"
      @hidden="hideModal(false)"
    >
      <div>
        <div style="margin: 0px 8px;" v-if="isLoadData">
          <div v-if="!isDataComplete" class="text-center">
            <div class="text-center mb-5">
              <p
                class="badge-loan font-weight-bold"
                style="color:#ec660b"
              >The request cannot be continued... Contact with your supervisor.</p>
            </div>
            <b-img-lazy src="/assets/images/icons/not-found.png" style="width:60%;" class="mb-2"></b-img-lazy>
          </div>
          <div v-else>
            <div class="text-center mb-2">
              <p class="badge-loan font-weight-bold">LOAN AUTORIZATION</p>
            </div>
            <ValidationObserver ref="form">
              <b-row>
                <b-col md="6" xs="12">
                  <b-row>
                    <b-col md="12">
                      <b-form-group class>
                        <b-input-group>
                          <b-input-group-prepend class="w-35">
                            <b-input-group-text class="w-100 badge-name-group">
                              <span>FULL NAME</span>
                            </b-input-group-text>
                          </b-input-group-prepend>
                          <b-form-input v-model="userData.userName" type="text" disabled></b-form-input>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col md="6" xs="12">
                  <b-row>
                    <b-col md="12">
                      <b-form-group class>
                        <b-input-group>
                          <b-input-group-prepend class="w-35">
                            <b-input-group-text class="w-100 badge-name-group">
                              <span>ROL</span>
                            </b-input-group-text>
                          </b-input-group-prepend>
                          <b-form-input v-model="userData.roleName" type="text" disabled></b-form-input>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="6" xs="12">
                  <b-row>
                    <b-col md="12">
                      <b-form-group class>
                        <b-input-group>
                          <b-input-group-prepend class="w-35">
                            <b-input-group-text class="w-100 badge-name-group">
                              <span>DEPARTMENT</span>
                            </b-input-group-text>
                          </b-input-group-prepend>
                          <b-form-input v-model="userData.moduleName" type="text" disabled></b-form-input>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col md="6" xs="12">
                  <b-row>
                    <b-col md="12">
                      <b-form-group class>
                        <b-input-group>
                          <b-input-group-prepend class="w-35">
                            <b-input-group-text class="w-100 badge-name-group">
                              <span>SUPERVISOR</span>
                            </b-input-group-text>
                          </b-input-group-prepend>
                          <b-form-input v-model="userData.superName" type="text" disabled></b-form-input>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="6" xs="12">
                  <b-row>
                    <b-col md="12">
                      <ValidationProvider
                        name="amount"
                        rules="required|validate-amount"
                        v-slot="{errors}"
                      >
                        <b-form-group class>
                          <b-input-group>
                            <b-input-group-prepend class="w-35">
                              <b-input-group-text
                                class="w-100 badge-name-group"
                                :class="isLoanActive ? '' : 'input-color'"
                              >
                                <span>AMOUNT</span>
                              </b-input-group-text>
                            </b-input-group-prepend>
                            <money
                              v-model="loan.amount"
                              v-bind="{
                               decimal: '.',
                               thousands: ',',
                               prefix: '$',
                               precision: 2,
                               masked: false
                            }"
                              class="form-control"
                              :disabled="isLoanActive"
                              :class="{'border border-danger':(errors[0] && vmoneyValidate) || isOverProvision}"
                            ></money>
                            <span
                              v-if="isOverProvision"
                              class="red-text-2"
                            >The amount is over the middle provision.</span>
                          </b-input-group>
                        </b-form-group>
                      </ValidationProvider>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col md="6" xs="12">
                  <b-row>
                    <b-col md="12">
                      <b-form-group class>
                        <b-input-group>
                          <b-input-group-prepend class="w-35">
                            <b-input-group-text class="w-100 badge-name-group">
                              <span>PAY DAY</span>
                            </b-input-group-text>
                          </b-input-group-prepend>
                          <b-form-input value="25th" type="text" disabled></b-form-input>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col md="6" xs="12">
                  <b-form-group class>
                    <b-input-group>
                      <b-input-group-prepend class="w-35">
                        <b-input-group-text
                          class="w-100 badge-name-group"
                          :class="isLoanActive ? '' : 'input-color'"
                        >
                          <span>INTEREST</span>
                        </b-input-group-text>
                      </b-input-group-prepend>
                      <b-form-checkbox
                        v-model="selectedInterest"
                        class="form-control text-center"
                        :disabled="isLoanActive"
                        switch
                      >
                        Selected Interest
                        <b>(Interest: {{ selectedInterest ? '0%' : `${userData.interest_real}%` }})</b>
                      </b-form-checkbox>
                    </b-input-group>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="12">
                  <ValidationProvider name="amount" rules="required" v-slot="{errors}">
                    <b-form-group class>
                      <b-input-group>
                        <b-input-group-prepend class="w-35">
                          <b-input-group-text
                            class="w-100 badge-name-group"
                            :class="isLoanActive ? '' : 'input-color'"
                          >
                            <span>MONTHLY PAYMENT</span>
                          </b-input-group-text>
                        </b-input-group-prepend>
                        <b-radio-group
                          v-model="loan.payment"
                          class="form-control text-center"
                          :class="{'border border-danger':errors[0]}"
                        >
                          <b-form-radio
                            value="20"
                            :disabled="loan.amount < 20 || isLoanActive"
                          >$20.00</b-form-radio>
                          <b-form-radio
                            value="40"
                            :disabled="loan.amount < 40 || isLoanActive"
                          >$40.00</b-form-radio>
                          <b-form-radio
                            value="60"
                            :disabled="loan.amount < 60 || isLoanActive"
                          >$60.00</b-form-radio>
                          <b-form-radio
                            value="80"
                            :disabled="loan.amount < 80 || isLoanActive"
                          >$80.00</b-form-radio>
                          <b-form-radio
                            value="100"
                            :disabled="loan.amount < 100 || isLoanActive"
                          >$100.00</b-form-radio>
                        </b-radio-group>
                      </b-input-group>
                    </b-form-group>
                  </ValidationProvider>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="6" xs="12">
                  <b-row>
                    <b-col md="12">
                      <b-form-group class>
                        <b-input-group>
                          <b-input-group-prepend class="w-35">
                            <b-input-group-text class="w-100 badge-name-group">
                              <span>SALARY</span>
                            </b-input-group-text>
                          </b-input-group-prepend>
                          <money
                            v-model="userData.salary"
                            v-bind="{
                               decimal: '.',
                               thousands: ',',
                               prefix: prefixSalary,
                               precision: 2,
                               masked: false
                            }"
                            class="form-control"
                            disabled
                          ></money>
                        </b-input-group>
                      </b-form-group>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col md="6" xs="12">
                  <b-row>
                    <b-col md="12">
                      <b-form-group class>
                        <b-input-group>
                          <b-input-group-prepend class="w-35">
                            <b-input-group-text class="w-100 badge-name-group">
                              <span>PROVISION</span>
                            </b-input-group-text>
                          </b-input-group-prepend>
                          <money
                            v-model="userData.provision"
                            v-bind="{
                               decimal: '.',
                               thousands: ',',
                               prefix: '$',
                               precision: 2,
                               masked: false
                            }"
                            class="form-control"
                            disabled
                          ></money>
                        </b-input-group>
                      </b-form-group>
                      <span
                        v-if="userData.currency_provision == 2"
                        style="color:blue;"
                      >His provision was converted to a dollar</span>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="12">
                  <b-row class="class-inline">
                    <b-col
                      md="5"
                      class="class-campo-icon add-class-campo-icon"
                      :class="isLoanActive ? '' : 'input-color'"
                      style="border-radius: 10px 10px 0px 0px"
                    >
                      <span>MOTIVE</span>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col md="12">
                  <ValidationProvider name="description" rules="required" v-slot="{errors}">
                    <div class="form-group mt-0">
                      <textarea
                        v-model="loan.motive"
                        class="textarea-style wysiwyg-notes"
                        style="border-radius: 0px 10px 10px 10px"
                        :class="{'border border-danger':errors[0]}"
                        :disabled="isLoanActive"
                      ></textarea>
                    </div>
                  </ValidationProvider>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="12">
                  <b-row class="class-inline">
                    <b-col
                      md="5"
                      class="class-campo-icon add-class-campo-icon"
                      style="border-radius: 10px 10px 0px 0px"
                    >
                      <span>OBSERVATION</span>
                    </b-col>
                  </b-row>
                </b-col>
                <b-col md="12">
                  <div class="form-group mt-0">
                    <div
                      class="textarea-style wysiwyg-notes"
                      style="border-radius: 0px 10px 10px 10px"
                      disabled
                    >
                      <ul>
                        <li>The loan have a rate {{userData.interest_real}}%</li>
                        <li>If there is no payment on the 25th, a daily charge of $ 1 is generated</li>
                      </ul>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <b-row v-if="!isLoanActive">
                <b-col md="12" style="text-align: center;" class="mt-3">
                  <b-button variant="success" @click="sendLoan" :disabled="noSend">
                    <i class="fas fa-save"></i> SEND LOAN
                  </b-button>
                </b-col>
              </b-row>
              <b-row v-if="isNotUserLoan && (isShowSupervisor || isShowRrhh || isShowManagement)">
                <b-col md="12" style="text-align: center;" class="mt-3">
                  <b-button
                    variant="success"
                    :disabled="noSend"
                    class="mr-1"
                    @click="changeStatus(1)"
                  >
                    <i class="fas fa-check-circle mr-1"></i>ACCEPT LOAN
                  </b-button>
                  <b-button variant="danger" :disabled="noSend" @click="changeStatus(2)">
                    <i class="fa fa-times-circle mr-1"></i>DECLINE LOAN
                  </b-button>
                </b-col>
              </b-row>
            </ValidationObserver>
          </div>

          <b-modal
            modal
            v-model="showCommentModal"
            header-class="b-vue-modal-header"
            modal-class="top-modal"
          >
            <template #modal-header="{ close }">
              <span>
                <h5>MOTIVE</h5>
              </span>
              <i
                class="fas fa-times-circle text-white"
                style="color: #d0cdc5; font-size: 20px; cursor: pointer"
                @click="close"
              ></i>
            </template>
            <ValidationObserver ref="comment">
              <div class="form-group mt-0">
                <ValidationProvider name="comment" rules="required" v-slot="{errors}">
                  <textarea
                    v-model="acceptOrDeny.comment"
                    class="textarea-style wysiwyg-notes"
                    style="border-radius: 0px 10px 10px 10px"
                    :class="{'border border-danger':errors[0]}"
                  ></textarea>
                </ValidationProvider>
              </div>
            </ValidationObserver>
            <template #modal-footer>
              <b-button variant="success" @click="sendComment">
                <i class="fas fa-save"></i> SEND
              </b-button>
              <b-button variant="danger" @click="showCommentModal = !showCommentModal">
                <i class="fa fa-times-circle"></i> CANCEL
              </b-button>
            </template>
          </b-modal>
        </div>
        <div v-else>
          <div class="text-center">
            <i class="fas fa-spinner fa-pulse fa-4x" style="color: #BAA345;"></i>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import loansService from "@/views/commons/components/loans/services/loans.service";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ModalRequestLoan",
  props: {
    info: {
      type: Object,
      required: true,
      default: () => ({
        show: false,
        idLoan: null,
        tab: null
      })
    }
  },
  created() {
    this.getInitialData();
  },
  mounted() {},
  data() {
    return {
      loan: {
        id_user: null,
        id_module: null,
        amount: 0,
        payment: null,
        motive: "",
        process: null,
        exchange: null,
        day_payment: 25,
        salary: null,
        interest: null
      },
      selectedInterest: false,
      userData: null,
      isLoadData: false,
      vmoneyValidate: false,
      noSend: false,
      acceptOrDeny: {
        comment: "",
        status: null
      },
      showCommentModal: false,
      dolar: {
        compra: 0,
        venta: 0
      },
      modalUp: false,
      module: this.$route.meta.module
    };
  },
  computed: {
    ...mapGetters({
      bigWindow: "app/bigWindow",
      currentUser: "auth/currentUser"
    }),
    isDataComplete() {
      return (
        this.userData &&
        this.userData.provision &&
        this.userData.userName &&
        this.userData.salary
      );
    },
    isOverProvision() {
      return Number(this.loan.amount) > Number(this.userData.provision) / 2;
    },
    isLoanActive() {
      return this.info.idLoan != null;
    },
    isNotUserLoan() {
      return (
        this.info.idLoan != null && this.loan.id_user != this.global.layout.id
      );
    },
    isShowSupervisor() {
      return (
        (this.global.layout.role_id == 2 && this.loan.process == 1) ||
        (this.global.layout.role_id == 1 && this.loan.process == 1)
      );
    },

    isShowManagement() {
      return (
        (this.global.layout.modul_id == 16 && this.loan.process == 2) ||
        (this.global.layout.role_id == 1 &&
          this.loan.process == 2 &&
          this.global.layout.modul_id == 16)
      );
    },
    prefixSalary() {
      return this.userData.currency == 1 ? "$" : "S/.";
    }
  },
  methods: {
    ...mapMutations({
      setLoading: "app/SET_LOADING"
    }),

    hideModal(status) {
      this.modalUp = false;
      this.$emit("hide", status);
    },
    ifLoanActiveSelection() {
      if (this.isLoanActive) {
        this.loadDataLoan();
      } else {
        this.isLoadData = true;
        this.setLoading(false);
        this.modalUp = true;
      }
    },
    async getInitialData() {
      let userData = await this.getUserData();
      this.ifLoanActiveSelection();
    },
    async getUserData() {
      try {
        this.setLoading(true);
        const params = {
          id_user: this.currentUser.user_id,
          id_module: this.module
        };
        let response = await loansService.getUserData(params);
        this.userData = response[0];
        this.userData.userName = response[0].userName;
        this.userData.superName = response[0].superName;
        this.userData.moduleName = response[0].moduleName;
        this.userData.roleName = response[0].roleName;
        this.userData.interest_real = response[0].interest_real;
      } catch (error) {
        this.showErroSwal();
        this.setLoading(false);
      }
    },
    async loadDataLoan() {
      try {
        let response = await loansService.getDataLoan(this.info.idLoan);
        this.loan = response[0];
        this.userData.currency = this.loan.currency;
        this.userData.currency_provision = this.loan.currency_provision;
        this.userData.exchange = this.loan.exchange;
        this.selectedInterest = Number(this.loan.interest) <= 0;
        this.userData.provision = this.loan.provision;
        this.userData.salary = this.loan.salary;
        this.loan.payment = parseInt(this.loan.payment);
        let user = await this.getUserData();
        this.isLoadData = true;

        //Open Modal when request is finished
        this.modalUp = true;
        this.setLoading(false);
      } catch (error) {
        this.showErroSwal();
        this.setLoading(false);
      }
    },
    sendLoan() {
      this.vmoneyValidate = true;
      this.$refs.form.validate().then(success => {
        if (!success || this.isOverProvision) {
          return;
        }
        swal
          .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, send it!"
          })
          .then(result => {
            if (result.value) {
              this.noSend = true;
              this.loan.interest = this.selectedInterest
                ? 0
                : this.userData.interest_real;
              var x = document.getElementById("app");
              x.classList.add("preloader");
              x.classList.add("opacity-uno");
              axios
                .post("/api/loans/insert-loan", {
                  id_user: this.global.layout.id,
                  id_module: this.global.layout.modul_id,
                  motive: this.loan.motive,
                  amount: this.loan.amount,
                  pay_day: 25,
                  payment: this.loan.payment,
                  exchange: this.loan.exchange,
                  interest: this.loan.interest
                })
                .then(response => {
                  if (response.status == 200) {
                    swal.fire("Success!", "Loan sent", "success");
                    this.$emit("click");
                  } else {
                    this.noSend = false;
                    swal.fire("Error!", "Loan not sent", "error");
                  }
                  var x = document.getElementById("app");
                  x.classList.remove("preloader");
                  x.classList.remove("opacity-uno");
                });
            }
          });
      });
    },
    changeStatus(status) {
      this.acceptOrDeny.status = status;
      swal
        .fire({
          title: "ARE YOU SURE?",
          type: "warning",
          showCancelButton: true,
          confirmButtonText: "YES",
          cancelButtonText: "CANCEL"
        })
        .then(result => {
          if (result.value) {
            if (status == 2) {
              this.showCommentModal = true;
            } else {
              this.sendStatus();
            }
          }
        });
    },
    sendComment() {
      this.$refs.comment.validate().then(success => {
        if (!success) {
          return;
        }
        this.sendStatus();
      });
    },
    sendStatus() {
      let role_id = this.isShowSupervisor ? 2 : 3;
      const params = {
        id_loan: this.info.idLoan,
        id_user: this.global.layout.id,
        motive: this.acceptOrDeny.comment,
        id_module: this.global.layout.modul_id,
        status: this.acceptOrDeny.status,
        process: this.acceptOrDeny.status == 1 ? role_id : 4,
        rol: this.isShowSupervisor ? 2 : 4 // se cambio el 4 por el 3 que indicaba rrhh
      };
      if (this.acceptOrDeny.status == 1) {
        axios.post("/api/loans/insert-status", params).then(res => {
          this.showCommentModal = false;
          this.loan.process = params.rol;
          this.$emit("click");
          toast.fire({
            type: "success",
            title: "SAVE"
          });
        });
      } else {
        swal
          .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, send it!"
          })
          .then(result => {
            if (result.value) {
              axios.post("/api/loans/insert-status", params).then(res => {
                this.showCommentModal = false;
                this.loan.process = params.rol;
                this.$emit("click");
                toast.fire({
                  type: "success",
                  title: "SAVE"
                });
              });
            }
          });
      }
    }
  }
};
</script>

<style scoped>
.w-35 {
  width: 35% !important;
}
.badge-loan {
  font-size: 20px;
  margin-bottom: 0px;
  color: #ab9220;
}
.input-color {
  background-color: #bfa245 !important;
}
.custom-radio
  .custom-control-input:disabled:checked
  ~ .custom-control-label::before {
  background-color: rgb(99 99 99);
}
</style>