<template>
  <div>
    <b-card no-body class="mb-1">
      <div class="mx-2 mb-2 mt-2">
        <b-row>
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span class="text-muted">
              Showing {{ startPage }} to {{ toPage }} of
              {{ totalData }} entries
            </span>
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >
            <b-pagination
              v-model="currentPage"
              :total-rows="totalData"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon icon="ChevronLeftIcon" size="18" />
              </template>
              <template #next-text>
                <feather-icon icon="ChevronRightIcon" size="18" />
              </template>
            </b-pagination>
          </b-col>
        </b-row>
      </div>
      <div class="m-2">
        <!-- Table Top -->
        <b-row>
          <!-- Per Page -->
          <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Show</label>
            <v-select
              v-model="perPage"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
            <label class="mr-2">entries</label>
            <feather-icon
              class="cursor-pointer"
              icon="RefreshCcwIcon"
              size="20"
              @click="resetSearch"
            />
          </b-col>
          <!-- Search -->
          <b-col cols="12" md="6">
            <div class="d-flex align-items-center justify-content-end align-items-center">
              <b-form-input
                v-model="searchInput"
                class="d-inline-block mr-1"
                placeholder="User..."
                debounce="300"
              />
              <b-button
                variant="primary"
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                @click="filterController = !filterController"
              >
                <div class="d-flex justify-content-between">
                  <span class="mr-50">
                    <feather-icon icon="FilterIcon" size="15" />
                  </span>

                  <span class="text-nowrap">
                    {{
                    filterController ? "Basic Search" : "Advanced Search"
                    }}
                  </span>
                </div>
              </b-button>
            </div>
          </b-col>
        </b-row>
      </div>
      <transition name="fade">
        <filters-component
          v-if="filterController"
          class="mr-2 ml-2 mb-2"
          :filters="filters"
          from-to-filter
          :from-to-object="fromToObject"
          @onChangeFilter="$refs.refClientsList.refresh()"
        />
      </transition>
      <div class="table-responsive">
        <b-table
          ref="refClientsList"
          class="position-relative"
          :items="loans"
          :fields="arrayColumns"
          primary-key="id"
          table-class="text-nowrap"
          responsive="sm"
          show-empty
          small
          striped
          no-border-collapse
          sticky-header="65vh"
          :busy="isBusy"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="searchInput"
          thead-class="text-center"
          tbody-class="text-center"
        >
          <template #table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner class="align-middle mr-1" />
              <strong>Loading ...</strong>
            </div>
          </template>

          <template #cell(amount_loan)="data">
            <div>
              <span style="color:#4141af">$ {{data.value}}</span>
            </div>
          </template>

          <template #cell(balance)="data">
            <div>
              <span style="color:#4141af">$ {{data.value}}</span>
            </div>
          </template>

          <template #cell(due_payment)="data">
            <div>
              <b
                :class="data.item.status_loan == 4 ? 'text-dark' :( data.item.due_date > dateNow ) ? 'text-success ' : 'text-danger'"
              >{{ data.item.due_id ? '$'+ data.item.due_payment : '-' }}</b>
            </div>
          </template>

          <template #cell(due_date)="data">
            <div v-if="data.item.due_id">
              <span>{{data.item.due_date | myGlobal}}</span>
              <b-icon
                v-if="isManagement && data.item.due == 1"
                icon="pencil-square"
                variant="success cursor-pointer ml2"
                font-scale="1"
                @click="editDatePay(data.item)"
              ></b-icon>
              <b-icon
                v-if="isManagement && data.item.due == 1 && data.item.is_tracking"
                icon="pencil-square"
                variant="secondary cursor-pointer ml2"
                font-scale="1"
                @click="openTrackingPayDay(data.item.id_loan)"
              ></b-icon>
            </div>
            <div v-else>
              <span>-</span>
            </div>
          </template>

          <template #cell(payment_time)="data">
            <div>{{ data.item.payment_time }} {{ data.item.payment_time > 1 ? 'Dues' : (data.item.payment_time == 0 ? '-' : 'Due') }}</div>
          </template>

          <template #cell(due_id)="data">
            <div>{{ data.item.due_id ? changeOrdinal(data.item.due) + ' Due' : 'Finished' }}</div>
          </template>

          <template #cell(created_at)="data">
            <div>{{ data.value | myGlobal }}</div>
          </template>

          <template #cell(process)="data">
            <div class="font-weight-bolder">{{ data.value}}</div>
          </template>

          <template #cell(status)="data">
            <b-badge
              class="fs100"
              :variant="data.item.status_loan ==4? 'dark' : data.item.status_tracking == 2?'danger': data.item.rol_tracking == 4 &&  data.item.status_tracking ==1? 'success': 'warning'"
            >{{ data.value }}</b-badge>
          </template>

          <template #cell(id_loan)="data">
            <b-button
              size="sm"
              v-b-tooltip.hover
              title="tracking"
              variant="dark button-little-size"
              @click="openTrackingLoan(data.item.id_loan)"
            >
              <b-icon icon="stoplights"></b-icon>
            </b-button>
          </template>

          <template #cell(status_loan)="data">
            <b-button
              size="sm"
              v-b-tooltip.hover
              title="INFO OF LOAN"
              class="button-little-size ml6"
              variant="gradient-info"
              @click="openModalLoanId(data.item.id_loan)"
            >
              <b-icon icon="info-circle-fill"></b-icon>
            </b-button>
            <b-button
              v-if="tab==1 && data.item.status_loan == 3"
              size="sm"
              v-b-tooltip.hover
              title="ADD NEW PAY"
              class="button-little-size ml6"
              variant="gradient-success"
              @click="openModalPay(data.item.id_loan, data.item.due_id)"
            >
              <b-icon icon="wallet-fill"></b-icon>
            </b-button>
            <span
              style="position:relative"
              v-if="(tab==1 || isManagement)&& [3,4].includes(data.item.status_loan)"
            >
              <b-button
                size="sm"
                v-b-tooltip.hover
                title="REVISION PAYMENT"
                class="button-little-size ml6"
                variant="gradient-warning"
                @click="openModalRevision(data.item.id_loan)"
              >
                <feather-icon
                  icon="FileTextIcon"
                  size="16"
                  :badge="data.item.counter > 0? data.item.counter > 9 ? '9+' : data.item.counter : ''"
                  badge-classes="badge-danger badge-glow"
                />
              </b-button>
            </span>
            <b-button
              v-if="(tab==1 || isManagement)&& [3,4].includes(data.item.status_loan)"
              size="sm"
              v-b-tooltip.hover
              title="INVOICE"
              class="button-little-size ml6"
              variant="gradient-secondary"
              @click="openModalInvoice(data.item.id_loan)"
            >
              <b-icon icon="file-earmark-spreadsheet"></b-icon>
            </b-button>
          </template>
        </b-table>
      </div>
      <div class="mx-2 mb-2">
        <b-row>
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span class="text-muted">
              Showing {{ startPage }} to {{ toPage }} of
              {{ totalData }} entries
            </span>
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >
            <b-pagination
              v-model="currentPage"
              :total-rows="totalData"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon icon="ChevronLeftIcon" size="18" />
              </template>
              <template #next-text>
                <feather-icon icon="ChevronRightIcon" size="18" />
              </template>
            </b-pagination>
          </b-col>
        </b-row>
      </div>
    </b-card>

    <ModalTrackingLoan v-if="modalsInfo.tracking" :info="modalsInfo" @hide="closeModals" />
    <ModalNewPay v-if="modalsInfo.newPay" :info="modalsInfo" @hide="closeModals" />
    <ModalRevisionPayment v-if="modalsInfo.revisionPay" :info="modalsInfo" @hide="closeModals" />
    <ModalInvoice v-if="modalsInfo.invoice" :info="modalsInfo" @hide="closeModals" />
  </div>
</template>

<script>
import vSelect from "vue-select";
import Ripple from "vue-ripple-directive";
import AppCollapse from "@core/components/app-collapse/AppCollapse.vue";
import AppCollapseItem from "@core/components/app-collapse/AppCollapseItem.vue";
import ModalTrackingLoan from "./modals/ModalTrackingLoan.vue";
import ModalNewPay from "./modals/ModalNewPay.vue";
import ModalRevisionPayment from "./modals/ModalRevisionPayment.vue";
import ModalInvoice from "./modals/ModalInvoice.vue";
import { mapGetters, mapMutations } from "vuex";
import moment from "moment";
import loansService from "@/views/commons/components/loans/services/loans.service";
export default {
  name: "LoansTable",
  directives: {
    Ripple
  },
  components: {
    vSelect,
    AppCollapse,
    AppCollapseItem,
    ModalTrackingLoan,
    ModalNewPay,
    ModalRevisionPayment,
    ModalInvoice
  },
  props: {
    tab: {
      type: Number,
      default: null
    },
    status: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      modalsInfo: {
        tracking: false,
        newPay: false,
        revisionPay: false,
        invoice: false,
        idLoan: null,
        dueId: null
      },
      module: this.$route.meta.module,
      loans: [],
      advance: false,
      user_session: null,
      startdate: "",
      enddate: "",
      start_page: "",
      perpage: "",
      next_page: "",
      last_page: "",
      total_data: "",
      nameUser: "",
      showModalDate: false,
      modalTracking: false,
      modalTrackingPayDay: false,
      idLoan: null,
      idDue: null,
      status_search: "",
      isNoRefresh: false,
      formatDate: {
        year: "numeric",
        month: "numeric",
        day: "numeric"
      },
      loanSelected: [],
      dateNow: moment().format("YYYY-MM-DD"),

      sortBy: "created_at",
      sortDesc: true,
      arrayColumns: [
        {
          key: "username",
          label: "User",
          tdClass: "font-weight-bolder"
        },
        {
          key: "amount_loan",
          label: "Amount Loan",
          tdClass: "font-weight-bolder"
        },
        {
          key: "balance",
          label: "Balance Loan",
          tdClass: "font-weight-bolder"
        },
        {
          key: "due_payment",
          label: "Monthly Payment",
          tdClass: "font-weight-bolder"
        },
        {
          key: "due_date",
          label: "Pay day"
        },
        {
          key: "payment_time",
          label: "Dues"
        },
        {
          key: "due_id",
          label: "Current Due",
          tdClass: "text-center"
        },
        {
          key: "created_at",
          label: "Creation Date"
        },
        {
          key: "process",
          label: "Status Location"
        },
        {
          key: "status",
          label: "Status"
        },
        {
          key: "id_loan",
          label: "Tracking"
        },
        {
          key: "status_loan",
          label: "Actions"
        }
      ],
      searchInput: "",
      orderby: "",
      order: "",
      startPage: "",
      endPage: "",
      totalData: "",
      perPage: 10,
      nextPage: "",
      currentPage: 1,
      toPage: "",
      isBusy: false,
      perPageOptions: [10, 25, 50, 100],
      isClientsTab: false,
      fromToObject: {
        from: null,
        to: null
      },
      filters: [
        {
          label: "Status",
          options: [
            { value: 0, label: "All" },
            { value: 1, label: "Pending" },
            { value: 4, label: "Disapproved" },
            { value: 6, label: "Approved" },
            { value: 2, label: "Finished" }
          ],
          model: "",
          primaryKey: "value",
          labelSelect: "label",
          cols: 12,
          md: 2,
          visible: true
        }
      ],
      filterController: false,
      programs: []
    };
  },
  created() {
    this.search();
  },
  mounted() {},
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      skin: "appConfig/skin",
      loading: "commissions-store/loading",
      researchLoans: "loans-store/researchLoans",
      modalRequest: "loans-store/modalRequest"
    }),
    isManagement() {
      return this.module === 16;
    }
  },
  methods: {
    ...mapMutations({
      setLoading: "app/SET_LOADING"
    }),

    //Searching Table
    async search() {
      try {
        this.setLoading(true);
        const params = {
          page: 1,
          type: this.tab,
          nameUser: this.nameUser,
          user_id: this.currentUser.user_id,
          role_id: this.currentUser.role_id,
          id_module: this.module,
          startdate: this.startdate,
          enddate: this.enddate,
          status: this.status,
          status_search: this.status_search
        };
        const response = await loansService.getLoans(params);
        this.loans = response.data;
        this.startPage = response.from;
        this.currentPage = response.current_page;
        this.perPage = response.per_page;
        this.nextPage = this.startPage + 1;
        this.endPage = response.last_page;
        this.totalData = response.total;
        this.toPage = response.to;

        this.setLoading(false);
        console.log(this.loans);
      } catch (error) {
        this.showErrorSwal();
        this.setLoading(false);
      }
    },
    resetSearch() {
      this.searchInput = "";
      this.$refs.refClientsList.refresh();
    },

    //Methods to Edit
    openTrackingPayDay(id) {},
    updateDate() {
      swal
        .fire({
          title: "Are you sure?",
          text: "You want to update this date?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, update it!"
        })
        .then(result => {
          if (result.value) {
            this.addPreloader();
            axios
              .post("/api/loans/update-date", {
                id_loan: this.loanSelected.id_loan,
                due_date: this.loanSelected.due_date,
                user_id: this.global.layout.id
              })
              .then(response => {
                this.removePreloader();
                this.showModalDate = false;
                this.reloadSearch();
                swal.fire("Success!", response.data.message, "success");
              })
              .catch(error => {
                this.removePreloader();
                swal.fire("Error!", "Something went wrong!", "error");
              });
          }
        });
    },
    editDatePay(loan) {
      this.loanSelected = JSON.parse(JSON.stringify(loan));
      this.showModalDate = true;
    },
    changeOrdinal(number) {
      var s = ["th", "st", "nd", "rd"];
      var v = number % 100;
      return number + (s[(v - 20) % 10] || s[v] || s[0]);
    },

    openModalPays(id) {
      this.idLoan = id;
      this.showModalLoanPays = true;
    },

    //OPEN MODALS
    openModalLoanId(id) {
      this.modalRequest.idLoan = id;
      this.modalRequest.show = true;
    },
    openModalPay(id, due) {
      this.modalsInfo.idLoan = id;
      this.modalsInfo.idDue = due;
      this.modalsInfo.newPay = true;
      this.addPreloader();
    },
    openModalInvoice(id) {
      this.addPreloader();
      this.modalsInfo.idLoan = id;
      this.modalsInfo.invoice = true;
    },
    openTrackingLoan(id) {
      this.addPreloader();
      this.modalsInfo.idLoan = id;
      this.modalsInfo.tracking = true;
    },
    openModalRevision(id) {
      this.addPreloader();
      this.modalsInfo.idLoan = id;
      this.modalsInfo.revisionPay = true;
    },
    //CLOSE MODALS
    closeModals(status) {
      //Close Modals
      this.modalsInfo.newPay = false;
      this.modalsInfo.tracking = false;
      this.modalsInfo.revisionPay = false;
      this.modalsInfo.invoice = false;

      //Clean Info
      this.modalsInfo.idLoan = null;
      this.modalsInfo.idDue = null;

      //Research
      if (status) {
        this.$store.commit("loans-store/ADD_ONE_RESEARCH");
        this.$store.dispatch("loans-store/loadCounterTab");
      }
    }
  },
  watch: {
    researchLoans(newValue, oldValue) {
      if (newValue) {
        this.search();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
td.div {
  width: 100% !important;
}
@media (max-width: 960px) {
  .column-table {
    display: flex;
    flex-direction: column;
  }
}
.ml2 {
  margin-left: 2px;
}
.ml6 {
  margin-left: 7px;
}
.fs100 {
  font-size: 100%;
}
.span-counter {
  position: absolute;
  left: 15px;
  background: red;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  bottom: 7px;
  color: white;
  font-weight: 900;
}
</style>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
@import "@core/scss/vue/libs/vue-sweetalert.scss";
</style>