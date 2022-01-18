<template>
  <div>
    <b-card>
      <h2>Commissions</h2>
    </b-card>
    <b-card>
      <!-- Tabs for Supervisor CRM -->
      <b-tabs v-if="isSupervisorCrm" pills active-nav-item-class="border-primary-i">
        <b-tab lazy title="CRM" title-link-class="border-secondary hover-primary">
          <CommissionsComponent :module="$route.meta.module" tab="crm" />
        </b-tab>
        <b-tab lazy title="Departments" title-link-class="border-secondary  hover-primary">
          <CommissionsComponent :module="$route.meta.module" tab="supervisorCrm" />
        </b-tab>
      </b-tabs>
      <commissions-component v-else :module="$route.meta.module" :tab="$route.meta.tab"></commissions-component>
    </b-card>
  </div>
</template>
<script>
import CommissionsComponent from "@/views/commons/components/commissions/CommissionsComponent";
import { mapGetters } from "vuex";
export default {
  components: {
    CommissionsComponent
  },
  mounted() {
    console.log(this.$route.meta);
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser"
    }),
    isSupervisorCrm() {
      return (
        (this.currentUser.role_id === 2 ||
          this.currentUser.role_id === 1 ||
          this.currentUser.role_id === null) &&
        this.$route.meta.module === 2
      );
    }
  }
};
</script>