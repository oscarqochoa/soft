<template>
  <div>
    <header-slot>


    </header-slot>
    <div class="d-flex align-items-center justify-content-between my-2">
      <div></div>
      <router-link class="btn btn-primary" to="#create">Crear Lead</router-link>
    </div>

    <div v-if="this.$route.hash === '#create'">
      <LeadCreateSocial/>


    </div>

    <template v-else>
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
import LeadCreateSocial from '@/views/social-network/views/commissions/lead-create/LeadCreateSocial'
import Ripple from 'vue-ripple-directive'

export default {
  name: 'Commissions',
  components: {
    LeadCreateSocial,
    CommissionsList,

  },

  created() {
    console.log('meta commissions 123: ', this.$route.hash)
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
