<template>
  <div>
    <header-slot></header-slot>

    <b-card no-body>
      <b-tabs
        v-if="isSupervisorCrm"
        pills
        card
        :nav-wrapper-class="[bgLightDark, 'pb-0']"
        nav-class="mb-0"
        content-class="border-primary rounded"
      >
        <b-tab lazy title="CRM">
          <CommissionsComponent :module="$route.meta.module" tab="crm" />
        </b-tab>
        <b-tab lazy title="Departments">
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
  mounted() {},
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