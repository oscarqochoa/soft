<template>
    <div>
      <filter-slot
        v-scrollbar
        :filter="filter"
        :filter-principal="filterPrincipal"
        :total-rows="totalRows"
        :paginate="paginate"
        :start-page="startPage"
        :to-page="toPage"
        :send-multiple-sms="false"
        @reload="$refs['refClientsList'].refresh()"
      >
        <b-table
          small
          slot="table"
          no-provider-filtering
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
          :current-page="paginate.currentPage"
          :per-page="paginate.perPage"
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
              <a
                href="www.google.com"
                target="_blank"
                class="select-lead-name"
              >
                {{ data.item.lead_name }}</a
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
              class="
                d-flex
                flex-column
                justify-content-center
                align-items-center
              "
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
              class="
                d-flex
                flex-column
                justify-content-center
                align-items-center
              "
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
          <template #cell(user_name)="data">
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span>
                {{ data.item.user_name }} -
                {{ data.item.created_at | myGlobalDay }}
              </span>
            </div>
          </template>
        </b-table>
        <template #footer>
          <b-col
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-start
            "
          >
            <div
              style="
                background-color: #3764ff !important;
                padding: 5px;
                border-radius: 30px;
                padding-left: 15px;
                padding-right: 15px;
              "
            >
              <span class="text-nowrap" style="color: #fff">
                Total Amount
                {{ totalAmount == 0 ? "$" + totalAmount : totalAmount }}
              </span>
            </div>
          </b-col>
        </template>
      </filter-slot>
    </div>
</template>

<script>
import { amgApi } from "@/service/axios";
import vSelect from "vue-select";
import FilterSlot from "@/views/crm/views/sales-made/components/slots/FilterSlot.vue";
export default {
  components: {
    vSelect,
    FilterSlot,
  },
  data() {
    return {
      totalRows: 0,
      paginate: {
        currentPage: 1,
        perPage: 10,
      },
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
      startPage: null,
      endPage: "",
      totalData: "",
      // perPage: 10,
      nextPage: "",
      // currentPage: 1,
      toPage: null,
      isBusy: false,
      perPageOptions: [10, 25, 50, 100],
      filterPrincipal: {
        type: "input",
        inputType: "text",
        placeholder: "Client...",
        model: "",
      },
      filter: [
        {
          type: "select",
          margin: true,
          showLabel: true,
          label: "Type",
          model: null,
          options: [
            { value: 0, label: "All" },
            { value: 1, label: "Realtor" },
            { value: 2, label: "Appointment" },
            { value: 3, label: "Inital Payment" },
            { value: 4, label: "Others" },
          ],
          reduce: "value",
          selectText: "label",
          cols: 12,
        },
        {
          type: "select",
          margin: true,
          showLabel: true,
          label: "Result",
          model: null,
          options: [
            { value: 0, label: "All" },
            { value: 1, label: "Approved" },
            { value: 2, label: "Declined" },
            { value: 3, label: "Underview" },
          ],
          reduce: "value",
          selectText: "label",
          cols: 12,
        },
        {
          type: "select",
          margin: true,
          showLabel: true,
          label: "User",
          model: null,
          options: [],
          reduce: "id",
          selectText: "user_name",
          cols: 12,
        },
        {
          type: "datepicker",
          margin: true,
          showLabel: true,
          label: "From",
          placeholder: "Date",
          class: "font-small-3",
          model: null,
          locale: "en",
          dateFormatOptions: {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          },
          cols: 6,
        },
        {
          type: "datepicker",
          margin: true,
          showLabel: true,
          label: "To",
          placeholder: "Date",
          class: "font-small-3",
          model: null,
          locale: "en",
          dateFormatOptions: {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          },
          cols: 6,
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
  },
  methods: {
    myProvider(ctx) {
      const promise = amgApi.post(`${ctx.apiUrl}?page=${ctx.currentPage}`, {
        per_page: ctx.perPage,
        text: this.filterPrincipal.model,
        from: this.filter[3].model,
        to: this.filter[4].model,
        result: this.filter[1].model,
        type: this.filter[0].model,
        user: this.filter[2].model,
      });

      // Must return a promise that resolves to an array of items
      return promise.then((data) => {
        // Pluck the array of items off our axios response
        const items = data.data.data;
        let value = 0;
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
          this.totalAmount = 0.0;
        }

        this.startPage = data.data.from;
        this.paginate.currentPage = data.data.current_page;
        this.paginate.perPage = data.data.per_page;
        this.nextPage = this.startPage + 1;
        this.endPage = data.data.last_page;
        this.totalData = data.data.total;
        this.totalRows = data.data.total;
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
      this.filter[2].options = newData;
    },
    resetSearch() {
      this.searchInput = "";
      this.fromToObject.from = null;
      this.fromToObject.to = null;
      this.$refs.refClientsList.refresh();
    },
  },
};
</script>

<style lang="scss" scoped>

.select-lead-name:hover {
    text-decoration-line: underline
}
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


