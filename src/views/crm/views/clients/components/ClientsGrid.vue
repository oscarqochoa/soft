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
                placeholder="Client..."
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
          :api-url="clientRoute"
          class="position-relative"
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
          v-scrollbar
        >
          <template #table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner class="align-middle mr-1" />
              <strong>Loading ...</strong>
            </div>
          </template>
          <template #cell(accounts2)="data">
            <div class="d-flex flex-column justify-content-start align-items-start">
              <span
                v-for="(account, index) in JSON.parse(data.item.accounts)"
                :key="index"
              >{{ account.account }}</span>
            </div>
          </template>
          <template #cell(programs)="data">
            <div class="d-flex flex-column justify-content-start align-items-start">
              <span
                v-for="(account, index) in JSON.parse(data.item.accounts)"
                :key="index"
              >{{ account.program }}</span>
            </div>
          </template>
          <template #cell(statuses)="data">
            <div class="d-flex flex-column justify-content-start align-items-start">
              <template v-for="(account, index) in JSON.parse(data.item.accounts)">
                <span :key="index" class="d-flex justify-content-between align-items-center">
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
            <div class="d-flex flex-column justify-content-start align-items-start">
              <span
                v-for="(account, index) in JSON.parse(data.item.accounts)"
                :key="index"
              >{{ account.advisor_name }}</span>
            </div>
          </template>
          <template #cell(ext)="data">
            <div class="d-flex flex-column justify-content-start align-items-start">
              <span
                v-for="(account, index) in JSON.parse(data.item.accounts)"
                :key="index"
              >{{ account.advisor_extension }}</span>
            </div>
          </template>
          <template #cell(created_at)="data">{{ data.item.created_at | myGlobal }}</template>
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
    Ripple
  },
  components: {
    vSelect,
    AppCollapse,
    AppCollapseItem
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
          visible: true
        },
        {
          key: "mobile",
          label: "Mobile",
          sortable: true,
          visible: true
        },
        {
          key: "accounts2",
          label: "Account",
          visible: true
        },
        {
          key: "programs",
          label: "Program",
          visible: true
        },
        {
          key: "statuses",
          label: "Status",
          visible: true
        },
        {
          key: "advisors",
          label: "Advisor",
          visible: true
        },
        {
          key: "ext",
          label: "Ext",
          visible: this.$route.meta.isClientsTab
        },
        {
          key: "created_at",
          label: "Creation Date",
          sortable: true,
          visible: true
        }
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
      isClientsTab: false,
      fromToObject: {
        from: null,
        to: null
      },
      filters: [
        {
          label: "Programs",
          options: [],
          model: null,
          primaryKey: "id",
          labelSelect: "value",
          cols: 12,
          md: 2,
          visible: true,
        },
        {
          label: "Advisor",
          options: [],
          model: null,
          primaryKey: "id",
          labelSelect: "user_name",
          cols: 12,
          md: 2,
          visible: this.$route.meta.isClientsTab,
        },
        {
          label: "Status",
          options: [
            { value: 0, label: "All" },
            { value: 1, label: "Active" },
            { value: 4, label: "Canceled" },
            { value: 6, label: "Closed" },
            { value: 2, label: "Hold" },
            { value: 5, label: "Loyal" },
            { value: 3, label: "Transition" }
          ],
          model: "",
          primaryKey: "value",
          labelSelect: "label",
          cols: 12,
          md: 2,
          visible: true,
        },
        {
          label: "Payment Type",
          options: [
            { value: 0, label: "All" },
            { value: 1, label: "Automatic" },
            { value: 2, label: "Manual" },
            { value: 3, label: "Others" }
          ],
          model: "",
          primaryKey: "value",
          labelSelect: "label",
          cols: 12,
          md: 2,
          visible: true,
        },
        {
          label: "Day Payment",
          options: [
            { value: 0, label: "All" },
            { value: 5, label: "5" },
            { value: 10, label: "10" },
            { value: 15, label: "15" },
            { value: 20, label: "20" },
            { value: 25, label: "25" },
            { value: 30, label: "30" }
          ],
          model: "",
          primaryKey: "value",
          labelSelect: "label",
          cols: 12,
          md: 2,
          visible: false
        }
      ],
      filterController: false,
      programs: []
    };
  },
  mounted() {
    this.getAllPrograms();
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser"
    }),
    clientRoute() {
      return this.$route.meta.isClientsTab ? "/clients" : "/clientsshareother";
    },
    visibleFields() {
      return this.arrayColumns.filter(column => column.visible);
    },
    program() {
      return this.filters[0].model;
    },
    advisor() {
      return this.filters[1].model;
    },
    status() {
      return this.filters[2].model;
    },
    paymentType: {
      get() {
        return this.filters[3].model;
      },
      set(value) {
        this.filters[3].model = value;
      },
    },
    paymentDay: {
      get() {
        return this.filters[4].model;
      },
      set(value) {
        this.filters[4].visible = value;
      }
    }
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
        text: ctx.filter,
        from: this.fromToObject.from,
        to: this.fromToObject.to,
        program: this.program,
        order: ctx.sortDesc == 1 ? "desc" : "asc",
        orderby: 5,
        status: this.status,
        advisor: this.advisor,
        type: this.paymentType,
        day: this.paymentDay,
        rol_id: this.currentUser.arrRoles.find(rol => rol.module_id == 2)
          .role_id,
        session: this.currentUser.user_id,
        modul: 2,
      };
      const data = await ClientService.getCrmUsers(params);
      const items = data.data;
      this.startPage = data.from;
      this.currentPage = data.current_page;
      this.perPage = data.per_page;
      this.nextPage = this.startPage + 1;
      this.endPage = data.last_page;
      this.totalData = data.total;
      this.toPage = data.to;
      // Must return an array of items or an empty array if an error occurred
      return items || [];
    },
    async getAllPrograms() {
      const data = await ClientService.getAllPrograms();
      let firstOption = {
        value: "All",
        id: 0
      };
      let newData = data;
      newData.unshift(firstOption);
      this.filters[0].options = newData;
    },
    async getAllAdvisors(program) {
      let params = {
        idmodule: this.convertProgramToModule(program),
        iduser: this.currentUser.user_id,
        idrole: this.currentUser.role_id ? this.currentUser.role_id : 1,
      }
      const data = await ClientService.getAllAdvisors(params);
      let firstOption = {
        user_name: "All",
        id: 0
      };
      let newData = data;
      newData.unshift(firstOption);
      this.filters[1].options = newData;
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
