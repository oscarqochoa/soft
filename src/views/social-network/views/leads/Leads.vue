<template>
  <div>


    <header-slot>
      <template #actions>
        <div>
          <lead-create-social/>
            <!-- v-if="[1, 2].includes(currentUser.role_id) && isLeadsRoute" -->
          <b-dropdown
            v-if="false"
            id="dropdown-6"
            variant="info"
            :disabled="isLoading"
          >
            <template #button-content>
              <template v-if="isLoading">
                <b-spinner small />
              </template>
              <template v-else>
                <feather-icon icon="DownloadIcon" size="16" class="align-middle" />
              </template>
              <span class="ml-1">Export To Excel</span>
            </template>

            <b-dropdown-item @click="exportExcel(1, 1)">Export Current Page</b-dropdown-item>
            <b-dropdown-item @click="exportExcel(1, 2)">Export All Page</b-dropdown-item>
            <b-dropdown-item
              :disabled="!S_SELECTED_LEADS.length"
              @click="exportExcel(1, 3)"
            >Export Selection</b-dropdown-item>
          </b-dropdown>
          <b-row style="justify-content: right;">
            <b-col md="9">
              <global-search-component></global-search-component>
            </b-col>
            <b-col md="3">
              <b-button
                v-if="!isOnlyLead"
                variant="success"
                class="mr-1"
                @click="isAddNewUserSidebarActive = true"
              >
                <feather-icon icon="PlusIcon" size="15" class="mr-50 text-white" />Create
              </b-button>
            </b-col>
          </b-row>
        </div>
      </template>
    </header-slot>

    <!-- <b-nav card-header pills class="m-0">
      <b-nav-item
        exact-active-class="active"
        :link-classes="['px-3', bgTabsNavs]"
        exact
        :to="{ name: 'sn-list-new-leads' }"
        >NEW LEADS
      </b-nav-item>
      <b-nav-item
        exact-active-class="active"
        :link-classes="['px-3', bgTabsNavs]"
        exact
        :to="{ name: 'sn-list-old-leads' }"
        >OLD LEADS
      </b-nav-item>
    </b-nav> -->
    <b-card
    >
      <new-leads></new-leads>
    </b-card>

    <!-- <modal-search-global-leads-sn
      v-if="modalGlobalSearch"
      :show="modalGlobalSearch"
      @onClose="closeModalGlobalSearch">
    </modal-search-global-leads-sn> -->
    <!-- b-modal#modalCreateAnswer(v-model='modalGlobalSearch' header-class='b-vue-modal-header' hide-footer   scrollable body-class="search-global-modal" modal-class="search-modal" size="xl")
        template(#modal-header='{ close }')
            span
            h3 GLOBAL SEARCH
            i.fas.fa-times-circle.text-white(style='color: #d0cdc5; font-size: 20px; cursor: pointer' @click='close')
        modal-global-leads(:global="global" :data="leadsGlobal"  ) -->


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
    // "modal-search-global-leads-sn": ModalSearchGlobalLeadsSn,
    LeadCreateSocial,
    LeadListAddNew,
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
