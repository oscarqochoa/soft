<template>
  <div>
    <!-- Table Container Card -->
    <b-card no-body class="mb-0">
      {{items}}
      <filter-slot
        v-scrollbar
        :filter="filter"
        :filter-principal="filterPrincipal"
        :total-rows="totalLeads"
        :paginate="paginate"
        :start-page="fromPage"
        :to-page="toPage"
        :send-multiple-sms="false"
        @reload="myProvider"
        @onChangeCurrentPage="onChangeCurrentPage"
      >
        <b-table
          slot="table"
          ref="refUserListTable"
          class="position-relative font-small-3"
          primary-key="id"
          empty-text="No matching records found"
          select-mode="multi"
          responsive="sm"
          table-class="text-nowrap"
          sticky-header="73vh"
          small
          show-empty
          :sort-by.sync="sortBy"
          :fields="fields"
          :items="items"
          :sort-desc.sync="isSortDirDesc"
          :busy.sync="isBusy"
        >
          <template #table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner class="align-middle mr-1" />
              <strong>Loading ...</strong>
            </div>
          </template>


          <!-- Column: Name -->
          <template #cell(lead_name)="data">
            <div style="white-space: pre-wrap;">
              <router-link
                :class="textLink"
                :to="`/social-network/leads/new/dashboard/${data.item.id}`"
                target="_blank"
              >{{ data.item.lead_name }}</router-link>
            </div>
          </template>

          <!-- Column: Status -->
          <template #cell(status)="data">
            <b-badge
              pill
              :variant="`light-${resolveLeadSnStatusVariant(data.item.status)}`"
              class="text-capitalize"
              >{{ data.item.status }}</b-badge
            >
          </template>

          <!-- Column: Fanpage -->
          <template #cell(fanpage)="data">
            <b-img thumbnail fluid :src="baseUrl + data.item.logo" style="width: 50px" />
          </template>

          <!-- Column: Recomendations -->
          <template #cell(programs)="data">
            <template v-for="(program, key) in JSON.parse(data.item.programs)">
              <span :key="key">{{ program }}</span>
              <br :key="JSON.parse(data.item.programs).length + key" />
            </template>
          </template>

          <!-- Column: Created Date -->
          <template #cell(created_date)="data">
            <small>{{ data.item.created_at | myDateGlobalWithHour }}</small>
          </template>

        </b-table>
      </filter-slot>
    </b-card>
  </div>
</template>


<script>
import { mapActions, mapGetters, mapState } from "vuex";

import dataFields from "./fields.data";
import dataFilters from "./filters.data";
import FilterSlot from "@/views/crm/views/sales-made/components/slots/FilterSlot.vue";

export default {
  components: {
    FilterSlot,
  },
  data() {
    return {
      advanceSearch: false,
      baseUrl: process.env.VUE_APP_BASE_URL_ASSETS,

      isBusy: false,
      fields: dataFields,
      filter: dataFilters,
      filterPrincipal: {
        type: "input",
        inputType: "text",
        placeholder: "Search...",
        model: ""
      },
      items: [],
      totalLeads: 0,
      fromPage: 0,
      toPage: 0,
      paginate: {
        currentPage: 1,
        perPage: 10
      },
      perPageOptions: [10, 25, 50, 100],
      sortBy: "id",
      isSortDirDesc: true
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      token: "auth/token",
      G_STATUS_LEADS: "CrmLeadStore/G_STATUS_LEADS",
      G_OWNERS: "CrmGlobalStore/G_OWNERS",
      G_PROGRAMS: "CrmGlobalStore/G_PROGRAMS",
      G_SOURCE_NAMES: "CrmGlobalStore/G_SOURCE_NAMES",
      G_STATES: "CrmGlobalStore/G_STATES",
      G_CRS: "CrmGlobalStore/G_CRS",
      G_TYPE_DOCS: "CrmGlobalStore/G_TYPE_DOCS"
    }),
    ...mapState({
      S_LEADS: state => state.CrmLeadStore.S_LEADS
    }),
    routeModule() {
      return this.$route.meta.route;
    },
    moduleId() {
      return this.$route.meta.module;
    }
  },
  created() {
    this.myProvider();
    this.setOptionsOnFilters();
  },
  methods: {
    ...mapActions({
      A_GET_NEW_LEADS: "SocialNetworkLeadsStore/A_GET_NEW_LEADS",
      A_SET_FILTERS_LEADS: "CrmLeadStore/A_SET_FILTERS_LEADS",
      A_SET_SELECTED_LEADS: "CrmLeadStore/A_SET_SELECTED_LEADS",
      A_DELETE_LEADS: "CrmLeadStore/A_DELETE_LEADS",
      A_PROCESS_LEADS: "CrmLeadStore/A_PROCESS_LEADS",
      A_ADD_SELLER_LIST: "CrmLeadStore/A_ADD_SELLER_LIST"
    }),
    resolveLeadSnStatusVariant(status) {
      if (status === 2) return "success";
      if ([3, 4].includes(status)) return "primary";
      if (status === 5) return "secondary";
      if (status === 6) return "warning";
      if (status === 7) return "danger";
      return "primary";
    },
    async myProvider() {
      try {
        this.isBusy = true;
        const response = await this.A_GET_NEW_LEADS({
          cr: null,
          date_from: this.filter[0].model,
          date_to: this.filter[1].model,
          lead_status: null,
          name_text: this.filterPrincipal.model,
          order: "desc",
          orderby: 10,
          program: null,
          state_h: this.filter[3].model,
          type: 3,
          user_owner: this.filter[2].model,
          perpage: this.paginate.perPage,
          page: this.paginate.currentPage
        });
        this.totalLeads = response.total;
        this.fromPage = response.from;
        this.toPage = response.to;
        this.items = response.data;
        this.isBusy = false;
      } catch (error) {
        console.log("Somtehing went wrong myProvider", error);
        this.showToast(
          "danger",
          "top-right",
          "Oop!",
          "AlertOctagonIcon",
          this.getInternalErrors(error)
        );
      }
    },

    setOptionsOnFilters() {
      this.filter[2].options = this.G_STATUS_LEADS;
      this.filter[3].options = this.G_OWNERS;
      this.filter[4].options = this.G_OWNERS;
      this.filter[5].options = this.G_CRS;
      this.filter[6].options = this.G_PROGRAMS;
      this.filter[7].options = this.G_STATES;
      this.filter[8].options = this.G_SOURCE_NAMES;
      this.filter[9].options = this.G_TYPE_DOCS;
    },
    onChangeCurrentPage(e) {
      this.paginate.currentPage = e;
      this.myProvider();
    },
    setFilters() {
      this.A_SET_FILTERS_LEADS({
        from: this.filter[0].model,
        to: this.filter[1].model,
        statusLead: this.filter[2].model,
        owner: this.filter[3].model,
        assignTo: this.filter[4].model,
        cr: this.filter[5].model,
        program: this.filter[6].model,
        stAd: this.filter[7].model,
        sourceName: this.filter[8].model,
        typeDoc: this.filter[9].model,
        perPage: this.paginate.perPage,
        currentPage: this.paginate.currentPage
      });
    },
  },
  mounted() {
    if ([1, 2].includes(this.currentUser.role_id) && this.type === 0)
      this.actionsOptions.push("delete");
  }
};
</script>
<style lang="scss" scoped>
  .table-responsive > div {
    min-height: 15rem;
  }
</style>