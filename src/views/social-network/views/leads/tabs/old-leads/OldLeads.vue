<template>
  <div>
    <b-card no-body class="mb-0">
      <filter-slot
        v-scrollbar
        :filter="filters"
        :filter-principal="filterPrincipal"
        :paginate="paginate"
        :start-page="S_LEADS.fromPage"
        :to-page="S_LEADS.toPage"
        @reload="myProvider"
        @onChangeCurrentPage="onChangeCurrentPage"
      >
        <template #buttons>
          <b-button variant="success" class="ml-1">
            <feather-icon icon="MessageCircleIcon" class="mr-50" />Send SMS
          </b-button>
        </template>

        <b-table
          slot="table"
          class="position-relative"
          ref="refUserListTable"
          primary-key="id"
          empty-text="No matching records found"
          select-mode="multi"
          responsive="sm"
          table-class="text-nowrap"
          sticky-header="50vh"
          small
          show-empty
          :sort-by.sync="sortBy"
          :fields="fields"
          :items="S_LEADS.items"
          :sort-desc.sync="isSortDirDesc"
          :busy.sync="isBusy"
          @row-selected="onRowSelected"
        >
          <template #head(selected)>
            <b-form-checkbox v-model="selectAll" @input="selectedAll" />
          </template>

          <template #table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner class="align-middle mr-1" />
              <strong>Loading ...</strong>
            </div>
          </template>

          <template #cell(state_hour)="data">
            {{
              data.item.state_hour != "CA" && data.item.state_hour != "TX"
                ? "UNK"
                : data.item.state_hour
            }}
          </template>

          <template #cell(last_action)="data">
            <small
              :class="
                data.item.n_last_action == 1
                  ? 'text-success'
                  : data.item.n_last_action == 3
                  ? 'text-warning'
                  : 'text-danger'
              "
            >
              {{ data.item.last_action }}
            </small>
            <b-button size="sm" variant="flat-dark" class="btn-icon">
              <feather-icon icon="FileTextIcon" />
            </b-button>
          </template>

          <template #cell(lead_name)="data">
            <router-link :to="{ name: 'sn-dashboard-old-lead' }">
              {{ data.item.lead_name }}
            </router-link>
            <br />
            <small>{{ data.item.nickname }}</small>
          </template>

          <template #cell(status)="data">
            <b-badge
              pill
              :variant="data.item.status | variant"
              class="text-capitalize"
            >
              {{ data.item.status }}
            </b-badge>
          </template>

          <template #cell(program)="data">
            <b-img
              :src="data.item.program_name | renderProgramLogo"
              style="height: 40px"
            />
          </template>

          <template #cell(recomendations)="data">
            <small
              v-for="(program, index) in JSON.parse(data.item.programs)"
              :key="index"
            >
              {{ program }} <br />
            </small>
          </template>
        </b-table>
      </filter-slot>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import Filters from "./filters.data";
import Fields from "./fields.data";

export default {
  components: {},
  data() {
    return {
      fields: Fields,
      filters: Filters,
      filterPrincipal: {
        type: "input",
        inputType: "text",
        placeholder: "Search...",
        model: "",
      },
      paginate: {
        currentPage: 1,
        perPage: 10,
      },
      perPageOptions: [10, 25, 50, 100],
      sortBy: "id",
      isSortDirDesc: true,
      selectAll: false,
      isBusy: false,
    };
  },
  computed: {
    ...mapState({
      S_LEADS: (state) => state.SocialNetworkLeadsStore.S_LEADS,
    }),
  },
  methods: {
    ...mapActions({
      A_GET_OLD_LEADS: "SocialNetworkLeadsStore/A_GET_OLD_LEADS",
      A_SET_FILTERS: "SocialNetworkLeadsStore/A_SET_FILTERS",
    }),
    selectedAll() {},
    onRowSelected(data) {},
    async myProvider() {
      try {
        // this.setFilters();
        this.isBusy = true;

        await this.A_GET_OLD_LEADS({
          name_text: null,
          lead_status: null,
          cr: null,
          program: null,
          date_from: this.filters[0].model,
          date_to: this.filters[1].model,
          orderby: 10,
          order: "desc",
          user_owner: null,
          iduser: 1,
          idrole: 1,
          type: 1,
          last_action: null,
          fanpage: null,
          state_h: null,
          sourcename: null,
          subsource: null,
          type_document: null,
        });

        setTimeout(() => {
          this.isBusy = false;
        }, 500);
      } catch (error) {
        console.log("Something went wrong with myProvider", error);
        this.showToast(
          "danger",
          "top-right",
          "Oops!",
          "AlertOctagonIcon",
          this.getInternalErrors(error)
        );
      }
    },
    setOptionsOnFilters() {},
    onChangeCurrentPage(page) {
      this.paginate.currentPage = page;
      this.myProvider();
    },
    setFilters() {
      this.A_SET_FILTERS({
        from: this.filters[0].model,
        to: this.filters[1].model,
      });
    },
  },
  created() {
    this.myProvider();
  },
};
</script>

<style>
</style>