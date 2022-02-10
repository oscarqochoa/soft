<template>
  <div>
    <header-slot> </header-slot>

    <b-card>
      <b-nav pills>
        <b-nav-item
          exact-active-class="active"
          link-classes="border-secondary hover-primary"
          exact
          class="w-250"
          :to="{ name: 'sn-list-new-leads' }"
          >NEW LEADS
        </b-nav-item>
        <b-nav-item
          exact-active-class="active"
          link-classes="border-secondary hover-primary"
          exact
          class="w-250"
          :to="{ name: 'sn-list-old-leads' }"
          >OLD LEADS
        </b-nav-item>
      </b-nav>
      <hr>
      <router-view v-if="preloading" />
    </b-card>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      preloading: true,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      token: "auth/token",
    }),
    ...mapState({}),
  },
  methods: {
    ...mapActions({
      A_GET_STATUS_LEADS: "SocialNetworkLeadsStore/A_GET_STATUS_LEADS",
      A_GET_OWNERS: "StandarStore/A_GET_OWNERS",
      A_GET_PROGRAMS: "StandarStore/A_GET_PROGRAMS",
      A_GET_SOURCE_NAMES: "StandarStore/A_GET_SOURCE_NAMES",
      A_GET_STATES: "StandarStore/A_GET_STATES",
    }),
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
  },
  async created() {
    await this.getStatusLeads();
    await this.getOwners();
    await this.getPrograms();
    await this.getSourceNames();
    await this.getStates();
  },
};
</script>

<style scoped>
.w-250 {
  width: 250px !important;
}
</style>