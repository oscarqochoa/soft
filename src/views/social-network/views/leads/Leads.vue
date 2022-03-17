<template>
  <div>


    <header-slot>
      <template #actions>
        <div>
          <b-row style="justify-content: right;">
            <b-col md="9">
              <global-search-component></global-search-component>
            </b-col>
            <b-col md="3">
              <lead-create-social/>
            </b-col>
          </b-row>
        </div>
      </template>
    </header-slot>

    <div v-if="G_IS_CEO || G_IS_SUPERVISOR">
        <b-nav card-header pills class="m-0">
          <b-nav-item
            exact-active-class="active"
            :link-classes="['px-3', bgTabsNavs]"
            exact
            :to="{ name: 'sn-list-new-leads' }"
            >LEADS
          </b-nav-item>

          <b-nav-item
            exact-active-class="active"
            :link-classes="['px-3', bgTabsNavs]"
            exact
            :to="{ name: 'sn-list-without-potential-leads' }"
            >WITHOUT POTENTIAL
          </b-nav-item>

          <b-nav-item
            exact-active-class="active"
            :link-classes="['px-3', bgTabsNavs]"
            exact
            :to="{ name: 'sn-list-closed-leads' }"
            >CLOSED
          </b-nav-item>
        </b-nav>
        <b-card 
          no-body
          class="border-top-primary border-3 border-table-radius px-0"
        > 
          <router-view :key="$route.name"/>
        </b-card>
    </div>

    <div v-else>
      <new-leads></new-leads>
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import LeadListAddNew from "@/views/crm/views/Lead/lead-module/save/LeadListAddNew.vue";
import LeadCreateSocial from "@/views/social-network/views/leads/components/lead-create/LeadCreateSocial";
import NewLeads from './tabs/new-leads/NewLeads.vue'
import GlobalSearchComponent from '../../commons/GlobalSearchComponent.vue'
// components
export default {
  components: {
    LeadListAddNew,
    LeadCreateSocial,
    NewLeads,
    GlobalSearchComponent
  },
  data() {
    return {
      isOnlyLead: false,
      isOpenSidebar: false,
      dato2: 10,
      dato1: "desc",
      isLoading: false,
      keyCreateList: 0,

      searchGlobal: "",
      leadsGlobal: [],
      modalGlobalSearch: false,
      searchGlobal_error: false,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      token: "auth/token",
      G_IS_SUPERVISOR: "auth/isSupervisor",
      G_IS_CEO: "auth/isCeo",
    }),
    ...mapState({
      S_SELECTED_LEADS: state => state.CrmLeadStore.S_SELECTED_LEADS,
      S_FILTERS_LEADS: state => state.CrmLeadStore.S_FILTERS_LEADS
    }),
    isLeadsRoute() {
      return this.$route.path === `/social-network/leads/new`;
    }
  },
  methods: {
    ...mapActions({
      A_GET_STATUS_LEADS: " /A_GET_STATUS_LEADS",
      A_GET_OWNERS: "StandarStore/A_GET_OWNERS",
      A_GET_PROGRAMS: "StandarStore/A_GET_PROGRAMS",
      A_GET_SOURCE_NAMES: "StandarStore/A_GET_SOURCE_NAMES",
      A_GET_STATES: "StandarStore/A_GET_STATES",
    }),
    ...mapActions('SocialNetworkLeadsStore', ['A_SEARCH_GLOBAL_LEADS_SN']),
    async getStatusLeads() {
      try {
        await this.A_GET_STATUS_LEADS();
      } catch (error) {
        console.log("Something went wrong getStatusLeads:", error);
        this.showToast(
          "danger",
          "top-right",
          "Oop!",
          "AlertOctagonIcon",
          this.getInternalErrors(error)
        );
      }
    },
    async getOwners() {
      try {
        await this.A_GET_OWNERS({
          modul: this.currentUser.modul_id,
          body: { roles: "[1,2,5]", type: "1" },
        });
      } catch (error) {
        console.log("Something went wrong getOwners:", error);
        this.showToast(
          "danger",
          "top-right",
          "Oop!",
          "AlertOctagonIcon",
          this.getInternalErrors(error)
        );
      }
    },
    async getPrograms() {
      try {
        await this.A_GET_PROGRAMS();
      } catch (error) {
        console.log("Something went wrong getPrograms:", error);
        this.showToast(
          "danger",
          "top-right",
          "Oop!",
          "AlertOctagonIcon",
          this.getInternalErrors(error)
        );
      }
    },
    async getSourceNames() {
      try {
        await this.A_GET_SOURCE_NAMES();
      } catch (error) {
        console.log("Something went wrong getSourceNames:", error);
        this.showToast(
          "danger",
          "top-right",
          "Oop!",
          "AlertOctagonIcon",
          this.getInternalErrors(error)
        );
      }
    },
    async getStates() {
      try {
        await this.A_GET_STATES({ type: 1 });
      } catch (error) {
        console.log("Something went wrong getStates:", error);
        this.showToast(
          "danger",
          "top-right",
          "Oop!",
          "AlertOctagonIcon",
          this.getInternalErrors(error)
        );
      }
    },
    async exportExcel(Export, TypeExport) {
      const id_leads = this.S_SELECTED_LEADS.map(el => el.id);
      const name_text = this.S_FILTERS_LEADS.searchQuery
        ? this.S_FILTERS_LEADS.searchQuery
        : null;
      this.dato2 = this.S_FILTERS_LEADS.perPage;

      const date_from =
        this.S_FILTERS_LEADS.from == "" ? null : this.S_FILTERS_LEADS.from;
      const date_to =
        this.S_FILTERS_LEADS.to == "" ? null : this.S_FILTERS_LEADS.to;
      const orderby = this.dato2 == null ? 10 : this.dato2;
      const order = this.dato1 == null ? "desc" : this.dato1;
      const params = {
        type_export: TypeExport,
        current_page: this.S_FILTERS_LEADS.currentPage,
        id_leads,
        name_text,
        lead_status: this.S_FILTERS_LEADS.statusLead,
        cr: this.S_FILTERS_LEADS.cr,
        program: this.S_FILTERS_LEADS.program,
        date_from,
        date_to,
        orderby,
        order,
        per_page: this.dato2,
        user_owner: this.S_FILTERS_LEADS.owner,
        assign_to: this.S_FILTERS_LEADS.assignTo,
        sourcename: this.S_FILTERS_LEADS.sourceName
      };
      try {
        this.isLoading = true;
        const response = await this.A_EXPORT_LEADS_TO_EXCEL(params);
        await this.forceFileDownload(response, "leads.xlsx");
        this.isLoading = false;
      } catch (error) {
        this.showErrorSwal(error);
        this.isLoading = false;
      }
    },
    //Global Search
    async search() {
      if (!this.searchGlobal.trim()) {
        this.showToast(
          "danger",
          "top-right",
          "Oop!",
          "AlertOctagonIcon",
          "Please enter a valid text."
        );
      } else {
          await this.A_SEARCH_GLOBAL_LEADS_SN({
            name_text: this.searchGlobal,
          });
          this.modalGlobalSearch = true;
        
      }
    },
    async closeModalGlobalSearch(){
      this.modalGlobalSearch = false;
    }
  },
  watch: {
    //
  },
  async created() {

  },
};
</script>
