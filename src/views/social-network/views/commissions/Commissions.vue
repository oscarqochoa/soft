<template>
  <div>
    <header-slot>


    </header-slot>

    <template>
      <b-tabs
          v-if="isSupervisorModule"
          lazy
          pills
          nav-class="mb-0"
          active-nav-item-class="bg-primary box-shadow-info"
      >
        <b-tab lazy title="Social Network" :title-link-class="[bgTabsNavs, 'px-3']">

          <CommissionsList
              :module="$route.meta.module"
              tab="sn"
              tabSupervisorCrm
              :module_total="false"
              :module_num="$route.meta.module"
          />

        </b-tab>
        <b-tab lazy title="Departments" :title-link-class="[bgTabsNavs, 'px-3']">

          <CommissionsList
              :module="$route.meta.module"
              tab="supervisorCrm"
              tabSupervisorCrm
              :module_num="0"
              :module_total="true"
          />

        </b-tab>
      </b-tabs>

      <CommissionsList
          v-else
          :module="$route.meta.module"
          :tab="$route.meta.tab"
          tabSupervisorCrm
          :module_num="$route.meta.module"
          :module_total="true"
      />
    </template>

  </div>
</template>

<script>
import CommissionsList from "./CommissionsList";
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Commissions',
  components: {
    CommissionsList,

  },
  computed: {
    ...mapGetters('auth', ['isSupervisor', 'isCeo','currentUser']),
    isSupervisorModule() {
      return (
          (this.isSupervisor || this.isCeo || this.currentUser.role_id === null) && this.$route.meta.module === 15
      );
    },
  },

  watch: {

  },

  methods: {
    ...mapActions('SocialNetworkCommissions', ['A_GET_COMMISSIONS','A_GET_DEPARTMENT_PERCENTAGE']),
  },
}
</script>

<style scoped>
</style>
