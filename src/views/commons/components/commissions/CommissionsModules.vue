<template>
  <div>
    <!-- Tabs for Supervisor CRM -->
    <b-tabs v-if="isSupervisorCrm">
      <b-tab lazy title="CRM">
        <CommissionsComponent :module="$route.meta.module" tab="crm" />
      </b-tab>
      <b-tab lazy title="DEPARTMENTS">
        <CommissionsComponent :module="$route.meta.module" tab="supervisorCrm" />
      </b-tab>
    </b-tabs>
    <commissions-component v-else :module="$route.meta.module" :tab="$route.meta.tab"></commissions-component>
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