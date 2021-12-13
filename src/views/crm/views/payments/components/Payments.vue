
<template>
  <div>
    <b-card no-body class="mb-1">
      <div class="mx-2 mb-2 mt-2">
        <b-row>
          <b-col
            cols="12"
            sm="6"
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-start
            "
          >
            <span class="text-muted"
              >Showing {{ startPage }} to {{ toPage }} of
              {{ totalData }} entries</span
            >
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-end
            "
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
            <div
              class="
                d-flex
                align-items-center
                justify-content-end
                align-items-center
              "
            >
              <b-form-input
                v-model="searchInput"
                class="d-inline-block mr-1"
                placeholder="Client..."
                debounce="300"
              />
              <b-button
                variant="primary"
                @click="filterController = !filterController"
              >
                <div class="d-flex justify-content-between">
                  <span class="mr-50"
                    ><feather-icon icon="FilterIcon" size="15"
                  /></span>

                  <span class="text-nowrap">{{
                    filterController ? "BASIC SEARCH" : "ADVANCED SEARCH"
                  }}</span>
                </div>
              </b-button>
            </div>
          </b-col>
        </b-row>
      </div>
      <transition name="fade">
        <filters-component
          class="mr-2 ml-2 mb-2"
          :filters="filters"
          v-if="filterController"
          fromToFilter
          :fromToObject="fromToObject"
          @onChangeFilter="$refs.refClientsList.refresh()"
        ></filters-component>
      </transition>
      <b-table
        small
        v-scrollbar
        :api-url="clientRoute"
        ref="refClientsList"
        :items="myProvider"
        :fields="visibleFields"
        primary-key="id"
        table-class="text-nowrap"
        responsive="sm"
        show-empty
        sticky-header="50vh"
        :busy="isBusy"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="searchInput"
      >
        <template #table-busy>
          <div class="text-center text-primary my-2">
            <b-spinner class="align-middle mr-1"></b-spinner>
            <strong>Loading ...</strong>
          </div>
        </template>
        <template #cell(lead_name)="data">
          <div
            class="d-flex flex-column justify-content-start align-items-start"
          >
            <b-button
              variant="flat-primary"
              style="
                padding-left: 2px;
                padding-right: 2px;
                padding-top: 5px;
                padding-bottom: 5px;
              "
              >{{ data.item.lead_name }}</b-button
            >
          </div>
        </template>
        <template #cell(amount)="data">
          <div
            class="d-flex flex-column justify-content-start align-items-start"
          >
            <span> $ {{ data.item.amount }} </span>
          </div>
        </template>
        <template #cell(charge)="data">
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <b-icon
              v-if="data.item.charge"
              icon="check-circle-fill"
              variant="success"
            >
            </b-icon>
            <feather-icon v-else icon="XCircleIcon" class="text-danger" />
          </div>
        </template>
        <template #cell(result)="data">
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <b-icon
              v-if="data.item.result == 'Approved'"
              icon="check-circle-fill"
              variant="success"
            >
            </b-icon>
            <feather-icon
              v-else-if="data.item.result == 'Unverified'"
              icon="ClockIcon"
              class="text-warning"
            />
            <feather-icon v-else icon="XCircleIcon" class="text-danger" />
          </div>
        </template>
        <!-- <template #cell(created_at)="data">
          <div
            class="d-flex flex-column justify-content-start align-items-start"
          >
            <span>
              {{ data.item.created_at | myGlobalDay }}
            </span>
          </div>
        </template> -->
        <template #cell(user_name)="data">
          <div
            class="d-flex flex-column justify-content-start align-items-start"
          >
            <span>
             {{data.item.user_name}} - {{ data.item.created_at | myGlobalDay }}
            </span>
          </div>
        </template>
      </b-table>
      <div class="mx-2 mb-2">
        <b-row>
          <b-col
            cols="12"
            sm="4"
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-start
            "
          >
            <span class="text-muted"
              >Showing {{ startPage }} to {{ toPage }} of
              {{ totalData }} entries</span
            >
          </b-col>
          <b-col
            cols="12"
            sm="4"
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-start
            "
          >
            <div style=" background-color:#FF9F43 !important;padding:5px;
                          border-radius: 30px;
                          padding-left:15px;padding-right:15px">
              <span class="text-nowrap"
              style="color:#fff"> Total Amount {{ totalAmount==0? "$"+totalAmount : totalAmount }} </span>
             
            </div>
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="4"
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-end
            "
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
  </div>
</template>

<script>
import { amgApi } from "@/service/axios";
import vSelect from "vue-select";
export default {
  components: {
    vSelect,
  },
  data() {
    return {
      totalAmount: 0,
      sortBy: "created_at",
      sortDesc: true,
      arrayColumns: [
        {
          key: "lead_name",
          label: "Name",
         
          visible: true,
        },
        {
          key: "type_transaction",
          label: "Type",
          visible: true,
        },
        {
          key: "transaction_id",
          label: "Transaction ID",
          visible: true,
        },
        {
          key: "amount",
          label: "Amount",
          visible: true,
        },
        {
          key: "charge",
          label: "Charge",
          visible: true,
        },
        {
          key: "result",
          label: "Result",
          visible: true,
        },
        {
          key: "card_number",
          label: "Credit Card",
          visible: true,
        },
        {
          key: "account",
          label: "Account",
          visible: true,
        },
        {
          key: "program",
          label: "Program",
          visible: true,
        },
        {
          key: "user_name",
          label: "Created By",
          visible: true,
        },
        // {
        //   key: "created_at",
        //   label: "Creation Date",
        //   sortable: true,
        //   visible: true,
        // },
        // { key: "actions", label: "Acciones", class: "text-center " },
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

      fromToObject: {
        from: null,
        to: null,
      },
      filters: [
        {
          label: "Type",
          options: [
            { value: 0, label: "All" },
            { value: 1, label: "Realtor" },
            { value: 2, label: "Appointment" },
            { value: 3, label: "Inital Payment" },
            { value: 4, label: "Others" },
          ],
          model: "",
          primaryKey: "value",
          labelSelect: "label",
          cols: 12,
          md: 2,
          visible: true,
        },
        {
          label: "Result",
          options: [
            { value: 0, label: "All" },
            { value: 1, label: "Approved" },
            { value: 2, label: "Declined" },
            { value: 3, label: "Underview" },
          ],
          model: "",
          primaryKey: "value",
          labelSelect: "label",
          cols: 12,
          md: 2,
          visible: true,
        },
        {
          label: "User",
          options: [],
          model: null,
          primaryKey: "id",
          labelSelect: "user_name",
          cols: 12,
          md: 2,
          visible: true,
        },
      ],
      filterController: false,
    };
  },
  mounted() {
    this.getAllUsers();
  },
  computed: {
    clientRoute() {
      return "/payment";
    },
    visibleFields() {
      return this.arrayColumns.filter((column) => column.visible);
    },
    type() {
      return this.filters[0].model;
    },
    user() {
      return this.filters[2].model;
    },
    result() {
      return this.filters[1].model;
    },
  },
  methods: {
    myProvider(ctx) {
      const promise = amgApi.post(`${ctx.apiUrl}?page=${ctx.currentPage}`, {
        per_page: ctx.perPage,
        text: ctx.filter,
        from: this.fromToObject.from,
        to: this.fromToObject.to,
        result: this.result,
        type: this.type,
        user: this.user,
      });

      // Must return a promise that resolves to an array of items
      return promise.then((data) => {
        // Pluck the array of items off our axios response
        const items = data.data.data;
        let value = 0
        if (items) {
          items.forEach((element) => {
            value += parseFloat(element.amount);
          });
          const formatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          });

          
          this.totalAmount = formatter.format(value);
        } else {
          this.totalAmount = 0.00;
        }

        this.startPage = data.data.from;
        this.currentPage = data.data.current_page;
        this.perPage = data.data.per_page;
        this.nextPage = this.startPage + 1;
        this.endPage = data.data.last_page;
        this.totalData = data.data.total;
        this.toPage = data.data.to;
        // Must return an array of items or an empty array if an error occurred
        return items || [];
      });
    },
    onChangeFilter() {
      this.$refs.refClientsList.refresh();
    },

    async getAllUsers() {
      const data = await amgApi.post(`/usermodule/2`, {
        roles: "[1,2,5]",
        type: "0",
      });
      let firstOption = {
        value: "All",
        id: 0,
      };
      let newData = data.data;
      newData.unshift(firstOption);
      this.filters[2].options = newData;
    },
    resetSearch() {
      this.searchInput = "";
      this.fromToObject.from = null
      this.fromToObject.to = null
      this.$refs.refClientsList.refresh();
    },
  },
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
// b-table{
//    width: 100%;;  
// }
</style>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
@import "@core/scss/vue/libs/vue-sweetalert.scss";
</style>


