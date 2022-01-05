<template>
  <div>
    <filter-slot
      v-scrollbar
      :filter="filters"
      :filter-principal="filterPrincipal"
      :total-rows="totalRows"
      :paginate="paginate"
      :start-page="startPage"
      :to-page="toPage"
      @reset-all-filters="resetAllFilters"
      @reload="$refs['refClientsList'].refresh()"
    >
      <template #table>
        <b-table
          ref="refClientsList"
          :api-url="clientRoute"
          class="position-relative"
          :items="myProvider"
          :fields="visibleFields"
          primary-key="id"
          table-class="text-nowrap"
          responsive="sm"
          show-empty
          no-provider-filtering
          sticky-header="50vh"
          :busy="isBusy"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :current-page="paginate.currentPage"
          :per-page="paginate.perPage"
          :filter="searchInput"
          v-scrollbar
        >
          <template #table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner class="align-middle mr-1" />
              <strong>Loading ...</strong>
            </div>
          </template>
          <template #cell(accounts2)="data">
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span
                v-for="(account, index) in JSON.parse(data.item.accounts)"
                :key="index"
                >{{ account.account }}</span
              >
            </div>
          </template>
          <template #cell(programs)="data">
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span
                v-for="(account, index) in JSON.parse(data.item.accounts)"
                :key="index"
                >{{ account.program }}</span
              >
            </div>
          </template>
          <template #cell(statuses)="data">
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <template
                v-for="(account, index) in JSON.parse(data.item.accounts)"
              >
                <span
                  :key="index"
                  class="d-flex justify-content-between align-items-center"
                >
                  <feather-icon
                    v-if="account.status == 1"
                    icon="CircleIcon"
                    size="13"
                    :style="`color: #00CC00; border-color: #00CC00; background: #00CC00; border-radius: 50%; margin-bottom: 2px; margin-right: 5px;`"
                  />
                  <div
                    v-if="account.status == 2"
                    class="client-status client-status-hold1"
                    :style="`top: 50%;margin-right: 5px; background: ${
                      account.validate_sp == 2 ? 'red' : ''
                    }`"
                  />
                  <feather-icon
                    v-if="account.status == 3"
                    icon="CircleIcon"
                    size="13"
                    :style="`color: #0066FF; border-color: #0066FF; background: #0066FF; border-radius: 50%; margin-bottom: 2px; margin-right: 5px;`"
                  />
                  <feather-icon
                    v-if="
                      account.status == 4 ||
                      account.status == 5 ||
                      account.status == 6
                    "
                    icon="CircleIcon"
                    size="13"
                    :style="`color: red; border-color: red; background: red; border-radius: 50%; margin-bottom: 2px; margin-right: 5px;`"
                  />
                  <span>
                    {{
                      account.status == 1
                        ? "Active"
                        : account.status == 2
                        ? "Hold"
                        : account.status == 3
                        ? "Transition"
                        : account.status == 4
                        ? "Canceled"
                        : account.status == 5
                        ? "Loyal"
                        : "Closed"
                    }}
                  </span>
                </span>
              </template>
            </div>
          </template>
          <template #cell(advisors)="data">
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span
                v-for="(account, index) in JSON.parse(data.item.accounts)"
                :key="index"
                >{{ account.advisor_name }}</span
              >
            </div>
          </template>
          <template #cell(ext)="data">
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span
                v-for="(account, index) in JSON.parse(data.item.accounts)"
                :key="index"
                >{{ account.advisor_extension }}</span
              >
            </div>
          </template>
          <template #cell(created_at)="data">{{
            data.item.created_at | myGlobal
          }}</template>
        </b-table>
      </template>
    </filter-slot>
  </div>
</template>
<script>
import vSelect from "vue-select";
import Ripple from "vue-ripple-directive";
import AppCollapse from "@core/components/app-collapse/AppCollapse.vue";
import AppCollapseItem from "@core/components/app-collapse/AppCollapseItem.vue";
import ClientService from "../service/clients.service";
import { mapGetters } from "vuex";
export default {
  directives: {
    Ripple,
  },
  components: {
    vSelect,
    AppCollapse,
    AppCollapseItem,
  },
  data() {
    return {
      sortBy: "created_at",
      sortDesc: true,
      arrayColumns: [
        {
          key: "lead_name",
          label: "Name",
          sortable: true,
          visible: true,
        },
        {
          key: "mobile",
          label: "Mobile",
          sortable: true,
          visible: true,
        },
        {
          key: "accounts2",
          label: "Account",
          visible: true,
        },
        {
          key: "programs",
          label: "Program",
          visible: true,
        },
        {
          key: "statuses",
          label: "Status",
          visible: true,
        },
        {
          key: "advisors",
          label: "Advisor",
          visible: true,
        },
        {
          key: "ext",
          label: "Ext",
          visible: this.$route.meta.isClientsTab,
        },
        {
          key: "created_at",
          label: "Creation Date",
          sortable: true,
          visible: true,
        },
        // { key: "actions", label: "Acciones", class: "text-center " },
      ],
      searchInput: "",
      orderby: "",
      order: "",
      startPage: 0,
      endPage: "",
      totalRows: 0,
      perPage: 10,
      nextPage: "",
      currentPage: 1,
      paginate: {
        perPage: 10,
        currentPage: 1,
      },
      toPage: 0,
      isBusy: false,
      perPageOptions: [10, 25, 50, 100],
      isClientsTab: false,
      fromToObject: {
        from: null,
        to: null,
      },
      filterPrincipal: {
        type: "input",
        inputType: "text",
        placeholder: "Client...",
        model: "",
      },
      filters: [
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
        {
          type: "select",
          margin: true,
          showLabel: true,
          label: "Programs",
          options: [],
          model: null,
          reduce: "id",
          selectText: "value",
          cols: 12,
          md: 2,
          visible: true,
        },
        {
          type: "select",
          margin: true,
          showLabel: true,
          label: "Advisor",
          options: [],
          model: null,
          reduce: "id",
          selectText: "user_name",
          cols: 12,
          md: 2,
          visible: this.$route.meta.isClientsTab,
        },
        {
          type: "select",
          label: "Status",
          margin: true,
          showLabel: true,
          options: [
            { value: 0, label: "All" },
            { value: 1, label: "Active" },
            { value: 4, label: "Canceled" },
            { value: 6, label: "Closed" },
            { value: 2, label: "Hold" },
            { value: 5, label: "Loyal" },
            { value: 3, label: "Transition" },
          ],
          model: "",
          reduce: "value",
          selectText: "label",
          cols: 12,
          md: 2,
          visible: true,
        },
        {
          type: "select",
          label: "Payment Type",
          margin: true,
          showLabel: true,
          options: [
            { value: 0, label: "All" },
            { value: 1, label: "Automatic" },
            { value: 2, label: "Manual" },
            { value: 3, label: "Others" },
          ],
          model: "",
          reduce: "value",
          selectText: "label",
          cols: 12,
          md: 2,
          visible: true,
        },
        {
          type: "select",
          label: "Day Payment",
          margin: true,
          showLabel: true,
          options: [
            { value: 0, label: "All" },
            { value: 5, label: "5" },
            { value: 10, label: "10" },
            { value: 15, label: "15" },
            { value: 20, label: "20" },
            { value: 25, label: "25" },
            { value: 30, label: "30" },
          ],
          model: "",
          reduce: "value",
          selectText: "label",
          cols: 12,
          md: 2,
          visible: false,
        },
      ],
      filterController: false,
      programs: [],
    };
  },
  mounted() {
    this.getAllPrograms();
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
    clientRoute() {
      return this.$route.meta.isClientsTab ? "/clients" : "/clientsshareother";
    },
    visibleFields() {
      return this.arrayColumns.filter((column) => column.visible);
    },
    program() {
      return this.filters[2].model;
    },
    advisor() {
      return this.filters[3].model;
    },
    status() {
      return this.filters[4].model;
    },
    paymentType: {
      get() {
        return this.filters[5].model;
      },
      set(value) {
        this.filters[5].model = value;
      },
    },
    paymentDay: {
      get() {
        return this.filters[6].model;
      },
      set(value) {
        this.filters[6].visible = value;
      },
    },
  },
  methods: {
    onChangeFilter() {
      this.$refs.refClientsList.refresh();
    },
    async myProvider(ctx) {
      let params = {
        api_url: ctx.apiUrl,
        current_page: ctx.currentPage,
        per_page: ctx.perPage,
        text: this.filterPrincipal.model,
        from: this.filters[0].model,
        to: this.filters[1].model,
        program: this.program,
        order: ctx.sortDesc == 1 ? "desc" : "asc",
        orderby: 5,
        status: this.status,
        advisor: this.advisor,
        type: this.paymentType,
        day: this.paymentDay,
        rol_id: this.currentUser.arrRoles.find((rol) => rol.module_id == 2)
          .role_id,
        session: this.currentUser.user_id,
        modul: 2,
      };
      const data = await ClientService.getCrmUsers(params);
      const items = data.data;
      this.startPage = data.from;
      this.paginate.currentPage = data.current_page;
      this.paginate.perPage = data.per_page;
      this.nextPage = this.startPage + 1;
      this.endPage = data.last_page;
      this.totalRows = data.total;
      this.toPage = data.to;
      // Must return an array of items or an empty array if an error occurred
      return items || [];
    },
    async getAllPrograms() {
      const data = await ClientService.getAllPrograms();
      let firstOption = {
        value: "All",
        id: 0,
      };
      let newData = data;
      newData.unshift(firstOption);
      this.filters[2].options = newData;
    },
    async getAllAdvisors(program) {
      let params = {
        idmodule: this.convertProgramToModule(program),
        iduser: this.currentUser.user_id,
        idrole: this.currentUser.role_id ? this.currentUser.role_id : 1,
      };
      const data = await ClientService.getAllAdvisors(params);
      let firstOption = {
        user_name: "All",
        id: 0,
      };
      let newData = data;
      newData.unshift(firstOption);
      this.filters[3].options = newData;
    },
    resetAllFilters() {
      this.filters.forEach((filter) => {
        filter.model = null;
      });
      this.filterPrincipal.model = null;
      this.$refs.refClientsList.refresh();
    },
    resetSearch() {
      this.searchInput = "";
      this.$refs.refClientsList.refresh();
    },
  },
  watch: {
    program(newVal) {
      this.getAllAdvisors(newVal);
    },
    paymentType(newVal) {
      if (newVal == 1) {
        this.paymentDay = true;
      } else {
        this.paymentDay = false;
      }
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
</style>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
@import "@core/scss/vue/libs/vue-sweetalert.scss";
</style>
