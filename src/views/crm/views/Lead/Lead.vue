<template>
  <div>
    <lead-list-add-new :is-add-new-user-sidebar-active.sync="isAddNewUserSidebarActive" />
    <b-card>
      <div class="card-header">
        <div>
          <b-card-title>Leads</b-card-title>
        </div>
        <div>
          <b-button
            v-if="!isOnlyLead"
            variant="success"
            class="mr-1"
            @click="isAddNewUserSidebarActive = true"
          >
            <feather-icon icon="PlusIcon" size="15" class="mr-50 text-white" />Create
          </b-button>
          <b-dropdown v-if="[1, 2].includes(currentUser.role_id)" id="dropdown-6" variant="info">
            <template #button-content>
              <feather-icon icon="DownloadIcon" size="16" class="align-middle" />
              <span class="ml-1">Export To Excel</span>
            </template>
            <b-dropdown-item @click="exportExcel(1, 1)">Export Current Page</b-dropdown-item>
            <b-dropdown-item @click="exportExcel(1, 2)">Export All Page</b-dropdown-item>
            <b-dropdown-item @click="exportExcel(1, 3)">Export Selection</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <b-nav pills>
        <b-nav-item
          exact-active-class="active"
          link-classes="border-secondary hover-primary"
          exact
          :to="`/${routeModule}/leads/`"
        >Leads</b-nav-item>
        <b-nav-item
          exact-active-class="active"
          link-classes="border-secondary hover-primary"
          exact
          :to="`/${routeModule}/leads/sn`"
        >Leads Sn</b-nav-item>
        <b-nav-item
          v-if="[1, 2].includes(currentUser.role_id) || isOnlyLead"
          exact-active-class="active"
          link-classes="border-secondary hover-primary"
          exact
          :to="`/${routeModule}/leads/w-potential`"
        >Leads W Potential</b-nav-item>
      </b-nav>
      <router-view v-if="preloading" />
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

import LeadListAddNew from "./lead-module/save/LeadListAddNew.vue";

export default {
  components: {
    LeadListAddNew
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      token: "auth/token",
      G_STATE_LEADS: "CrmLeadStore/G_STATE_LEADS"
    }),
    ...mapState({
      S_SELECTED_LEADS: state => state.CrmLeadStore.S_SELECTED_LEADS,
      S_FILTERS_LEADS: state => state.CrmLeadStore.S_FILTERS_LEADS
    }),
    routeModule() {
      return this.$route.meta.route;
    }
  },
  data() {
    return {
      isOnlyLead: false,
      isAddNewUserSidebarActive: false,
      preloading: true,
      dato1: "desc",
      dato2: 10
    };
  },
  async created() {
    this.preloading = false;
    await this.getStateLeads();
    await this.getStatusLeads();
    await this.getSourceLeads();
    await this.getOwners();
    await this.getPrograms();
    await this.getSourceNames();
    await this.getStates();
    await this.getEeuuStates();
    await this.getCountries();
    await this.getSellers();
    this.preloading = true;
  },
  methods: {
    ...mapActions({
      A_GET_STATE_LEADS: "CrmLeadStore/A_GET_STATE_LEADS",
      A_GET_STATUS_LEADS: "CrmLeadStore/A_GET_STATUS_LEADS",
      A_GET_SOURCE_LEADS: "CrmLeadStore/A_GET_SOURCE_LEADS",
      A_GET_OWNERS: "CrmGlobalStore/A_GET_OWNERS",
      A_GET_PROGRAMS: "CrmGlobalStore/A_GET_PROGRAMS",
      A_GET_SOURCE_NAMES: "CrmGlobalStore/A_GET_SOURCE_NAMES",
      A_GET_STATES: "CrmGlobalStore/A_GET_STATES",
      A_GET_EEUU_STATES: "CrmGlobalStore/A_GET_EEUU_STATES",
      A_GET_COUNTRIES: "CrmGlobalStore/A_GET_COUNTRIES",
      A_GET_SELLERS: "CrmGlobalStore/A_GET_SELLERS"
    }),
    async getStateLeads() {
      try {
        await this.A_GET_STATE_LEADS();
      } catch (error) {
        console.log("Something went wrong getStateLeads:", error);
        this.showToast(
          "danger",
          "top-right",
          "Oop!",
          "AlertOctagonIcon",
          this.getInternalErrors(error)
        );
      }
    },
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
    async getSourceLeads() {
      try {
        await this.A_GET_SOURCE_LEADS();
      } catch (error) {
        console.log("Something went wrong getSourceLeads:", error);
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
          body: { roles: "[1,2,5]", type: "1" }
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
    async getEeuuStates() {
      try {
        await this.A_GET_EEUU_STATES();
      } catch (error) {
        console.log("Something went wrong getEeuuStates:", error);
        this.showToast(
          "danger",
          "top-right",
          "Oop!",
          "AlertOctagonIcon",
          this.getInternalErrors(error)
        );
      }
    },
    async getCountries() {
      try {
        await this.A_GET_COUNTRIES();
      } catch (error) {
        console.log("Something went wrong getCountries:", error);
        this.showToast(
          "danger",
          "top-right",
          "Oop!",
          "AlertOctagonIcon",
          this.getInternalErrors(error)
        );
      }
    },
    async getSellers() {
      try {
        await this.A_GET_SELLERS({
          modul: this.currentUser.modul_id,
          body: { roles: "[]", type: "1" }
        });
      } catch (error) {
        console.log("Something went wrong getSellers:", error);
        this.showToast(
          "danger",
          "top-right",
          "Oop!",
          "AlertOctagonIcon",
          this.getInternalErrors(error)
        );
      }
    },
    exportExcel(Export, TypeExport) {
      const jsonString = JSON.stringify(this.S_SELECTED_LEADS.map(el => el.id));
      const name_text = this.S_FILTERS_LEADS.searchQuery
        ? this.S_FILTERS_LEADS.searchQuery
        : null;

      this.dato2 = this.S_FILTERS_LEADS.perPage;

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

      const date_from =
        this.S_FILTERS_LEADS.from == "" ? null : this.S_FILTERS_LEADS.from;
      const date_to =
        this.S_FILTERS_LEADS.to == "" ? null : this.S_FILTERS_LEADS.to;
      const orderby = this.dato2 == null ? 10 : this.dato2;
      const order = this.dato1 == null ? "desc" : this.dato1;
      const dataExport = `name_text=${name_text}&lead_status=${this.S_FILTERS_LEADS.statusLead}&cr=${this.S_FILTERS_LEADS.cr}&program=${this.S_FILTERS_LEADS.program}&date_from=${date_from}&date_to=${date_to}&orderby=${orderby}&order=${order}&user_owner=${this.S_FILTERS_LEADS.owner}&assign_to=${this.S_FILTERS_LEADS.assignTo}&sourcename=${this.S_FILTERS_LEADS.sourceName}&Export=${Export}&TypeExport=${TypeExport}&current_pageE=${this.S_FILTERS_LEADS.currentPage}&id_leads=${jsonString}`;
      window.open(
        `${process.env.VUE_APP_BASE_URL}/exportleadsexcel?${dataExport}`
      );
    }
  },
  watch: {
    preloading(current, old) {
      this.isPreloading(old);
    }
  }
};
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>
