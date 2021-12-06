<template>
  <div>
    <lead-list-add-new
      :is-add-new-user-sidebar-active.sync="isAddNewUserSidebarActive"
      :state-lead-options="stateLeadOptions"
      :status-lead-options="statusLeadOptions"
      :program-options="programOptions"
      :language-options="languageOptions"
      :state-options="stateOptions"
      :country-options="countryOptions"
      :source-name-options="sourceNameOptions"
      :source-lead-options="sourceLeadOptions"
      :user-creator-owner-options="userCreatorOwnerOptions"
      @refetch-data="refetchData"
    />
    <b-card-code title="LEADS" :actions="true">
      <template #actions>
        <div>
          <b-button variant="success" class="mr-1" @click="isAddNewUserSidebarActive = true">
            <feather-icon icon="PlusIcon" size="15" class="mr-50 text-white" />CREATE
          </b-button>
          <b-dropdown id="dropdown-6" variant="info">
            <template #button-content>
              <feather-icon icon="DownloadIcon" size="16" class="align-middle" />
              <span class="ml-1">EXPORT TO EXCEL</span>
            </template>
            <b-dropdown-item @click="exportExcel(1, 1)">EXPORT CURRENT PAGE</b-dropdown-item>
            <b-dropdown-item @click="exportExcel(1, 2)">EXPORT ALL PAGE</b-dropdown-item>
            <b-dropdown-item @click="exportExcel(1, 3)">EXPORT SELECTION</b-dropdown-item>
          </b-dropdown>
        </div>
      </template>
      <b-tabs content-class="mt-1">
        <b-tab title="LEADS">
          <lead-list
            :status-lead-options="statusLeadOptions"
            :owner-options="ownerOptions"
            :assign-to-options="ownerOptions"
            :cr-options="crOptions"
            :program-options="programOptions"
            :source-name-options="sourceNameOptions"
            :type-doc-options="typeDocOptions"
            :st-ad-options="stAdOptions"
            :leads-selecteds="leadsSelecteds"
          />
        </b-tab>
        <b-tab title="LEADS SN">
          <lead-sn-list :owner-options="ownerOptions" :st-ad-options="stAdOptions" />
        </b-tab>
        <b-tab title="LEADS W POTENTIAL">
          <!-- <lead-w-potential-list /> -->
        </b-tab>
      </b-tabs>
    </b-card-code>
  </div>
</template>

<script>
import { ref, onUnmounted } from "@vue/composition-api";
import BCardCode from "@core/components/b-card-code";
import LeadList from "./lead-list/LeadsList.vue";
import LeadSnList from "./lead-list/LeadsSnList.vue";
import LeadWPotentialList from "./lead-list/LeadsWPotentialList.vue";
import useUsersList from "./lead-list/useLeadsList";
import LeadListAddNew from "./lead-list/LeadListAddNew.vue";
import crmService from "@/views/crm/services/crm.service";

export default {
  components: {
    BCardCode,
    LeadList,
    LeadSnList,
    LeadWPotentialList,
    LeadListAddNew
  },
  data() {
    return {
      stateLeadOptions: [],
      statusLeadOptions: [],
      sourceLeadOptions: [],
      ownerOptions: [],
      sourceNameOptions: [],
      programOptions: [],
      stAdOptions: [],
      stateOptions: [],
      countryOptions: [],
      userCreatorOwnerOptions: [],
      leadsSelecteds: {
        leads: []
      },
      start_page: "",
      dato1: "desc",
      dato2: 10
    };
  },
  setup() {
    const isAddNewUserSidebarActive = ref(false);

    const crOptions = [
      { label: "All", value: null },
      { label: "Yes", value: 2 },
      { label: "No", value: 1 }
    ];
    const typeDocOptions = [
      { label: "All", value: null },
      { label: "SSN", value: "ssn" },
      { label: "ITIN", value: "itin" },
      { label: "CPN", value: "cpn" }
    ];
    const languageOptions = [
      { label: "English", value: "EN" },
      { label: "Spanish", value: "ES" }
    ];

    const {
      refetchData,
      perPage,
      currentPage,
      searchQuery,
      fromFilter,
      toFilter,
      crFilter,
      statusLeadFilter,
      programFilter,
      assignToFilter,
      ownerFilter,
      sourceNameFilter
    } = useUsersList();

    return {
      // Sidebar
      isAddNewUserSidebarActive,

      refetchData,
      perPage,
      currentPage,
      searchQuery,
      fromFilter,
      toFilter,
      crFilter,
      statusLeadFilter,
      programFilter,
      assignToFilter,
      ownerFilter,
      sourceNameFilter,
      crOptions,
      typeDocOptions,
      languageOptions
    };
  },
  created() {
    this.getStateLeads();
    this.getStatusLeads();
    this.getSourceLeads();
    this.getOwners();
    this.getSourceNames();
    this.getPrograms();
    this.getStates();
    this.getStatesEeuu();
    this.getCountries();
    this.getUserCreatorOwner();
  },
  methods: {
    async getStateLeads() {
      const response = await crmService.getStateLeads();
      this.stateLeadOptions = response.map(el => ({
        label: el.name,
        value: el.id
      }));
    },
    async getStatusLeads() {
      const response = await crmService.getStatusLeads();
      this.statusLeadOptions = response.map(el => ({
        label: el.value,
        value: el.id
      }));
    },
    async getSourceLeads() {
      const response = await crmService.getSourceLeads();
      this.sourceLeadOptions = response.map(el => ({
        label: el.value,
        value: el.id
      }));
    },
    async getOwners() {
      const response = await crmService.getOwners({
        roles: "[1,2,5]",
        type: "1"
      });
      this.ownerOptions = response.map(el => ({
        label: el.user_name,
        value: el.id
      }));
    },
    async getSourceNames() {
      const response = await crmService.getSourceNames();
      this.sourceNameOptions = response.map(el => ({
        label: el.name,
        value: el.id
      }));
    },
    async getPrograms() {
      const response = await crmService.getPrograms();
      this.programOptions = response.map(el => ({
        label: el.value,
        value: el.id
      }));
    },
    async getStates() {
      const response = await crmService.getStates({
        type: 1
      });
      this.stAdOptions = response.map(el => ({ label: el.slug, value: el.id }));
    },
    async getStatesEeuu() {
      const response = await crmService.getStatesEeuu();
      this.stateOptions = response.map(el => ({
        label: el.state,
        value: el.slug
      }));
    },
    async getCountries() {
      const response = await crmService.getCountries();
      this.countryOptions = response.map(el => ({
        label: el.name,
        value: el.id
      }));
    },
    async getUserCreatorOwner() {
      const response = await crmService.getUserCreatorOwner({
        modul: 2,
        roles: "[]",
        type: "1"
      });
      this.userCreatorOwnerOptions = response.map(el => ({
        label: el.user_name,
        value: el.id
      }));
    },
    exportExcel(Export, TypeExport) {
      const jsonString = JSON.stringify(
        this.leadsSelecteds.leads.map(el => el.id)
      );
      const name_text = this.searchQuery ? this.searchQuery : null;

      this.dato2 = this.perPage;

      if (this.dato2 == 10) {
        if (this.dato1 == "desc") {
          this.oneDateLead = false;
          this.orderDateDesc = true;
          this.orderDateAsc = false;
        } else {
          this.orderDateAsc = true;
          this.orderDateDesc = false;
          this.oneDateLead = false;
        }
      } else if (this.dato2 == 2) {
        if (this.dato1 == "desc") {
          this.oneEventLead = false;
          this.orderLeadDesc = true;
          this.orderLeadAsc = false;
        } else {
          this.orderLeadAsc = true;
          this.orderLeadDesc = false;
          this.oneEventLead = false;
        }
      }

      const date_from = this.fromFilter == "" ? null : this.fromFilter;
      const date_to = this.toFilter == "" ? null : this.toFilter;
      const orderby = this.dato2 == null ? 10 : this.dato2;
      const order = this.dato1 == null ? "desc" : this.dato1;
      const dataExport = `name_text=${name_text}&lead_status=${this.statusLeadFilter}&cr=${this.crFilter}&program=${this.programFilter}&date_from=${date_from}&date_to=${date_to}&orderby=${orderby}&order=${order}&user_owner=${this.ownerFilter}&assign_to=${this.assignToFilter}&sourcename=${this.sourceNameFilter}&Export=${Export}&TypeExport=${TypeExport}&current_pageE=${this.currentPage}&id_leads=${jsonString}`;
      window.open(
        `${process.env.VUE_APP_BASE_URL}/exportleadsexcel?${dataExport}`
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>

<style lang="scss">
</style>
