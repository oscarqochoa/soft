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
        <b-button
          variant="success"
          @click="isAddNewUserSidebarActive = true"
        >
          <feather-icon
            icon="PlusIcon"
            size="18"
            class="mr-50 text-white"
          />
          CREATE
        </b-button>
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
          />
        </b-tab>
        <b-tab title="LEADS SN">
          <lead-sn-list
            :owner-options="ownerOptions"
            :st-ad-options="stAdOptions"
          />
        </b-tab>
        <b-tab title="LEADS W POTENTIAL">
          <!-- <lead-w-potential-list /> -->
        </b-tab>
      </b-tabs>
    </b-card-code>
  </div>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import LeadList from './lead-list/LeadsList.vue'
import LeadSnList from './lead-list/LeadsSnList.vue'
import LeadWPotentialList from './lead-list/LeadsWPotentialList.vue'
import useUsersList from './lead-list/useLeadsList'
import LeadListAddNew from './lead-list/LeadListAddNew.vue'
import crmService from '@/views/crm/services/crm.service'
import { ref, onUnmounted } from '@vue/composition-api'

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
    }
  },
  setup() {
    const isAddNewUserSidebarActive = ref(false)

    const crOptions = [
      { label: 'All', value: null },
      { label: 'Yes', value: 2 },
      { label: 'No', value: 1 }
    ]
    const typeDocOptions = [
      { label: 'All', value: null },
      { label: 'SSN', value: 'ssn' },
      { label: 'ITIN', value: 'itin' },
      { label: 'CPN', value: 'cpn' },
    ]
    const languageOptions = [
      { label: 'English', value: 'EN' },
      { label: 'Spanish', value: 'ES' },
    ]

    const {
      refetchData
    } = useUsersList()

    return {
      // Sidebar
      isAddNewUserSidebarActive,

      refetchData,
      crOptions,
      typeDocOptions,
      languageOptions,
    }
  },
  created() {
    this.getStateLeads()
    this.getStatusLeads()
    this.getSourceLeads()
    this.getOwners()
    this.getSourceNames()
    this.getPrograms()
    this.getStates()
    this.getStatesEeuu()
    this.getCountries()
    this.getUserCreatorOwner()
  },
  methods: {
    async getStateLeads () {
      const response = await crmService.getStateLeads()
      this.stateLeadOptions = response.map(el => ({ label: el.name, value: el.id }))
    },
    async getStatusLeads () {
      const response = await crmService.getStatusLeads()
      this.statusLeadOptions = response.map(el => ({ label: el.value, value: el.id }))
    },
    async getSourceLeads () {
      const response = await crmService.getSourceLeads()
      this.sourceLeadOptions = response.map(el => ({ label: el.value, value: el.id }))
    },
    async getOwners () {
      const response = await crmService.getOwners({
        roles: '[1,2,5]',
        type: '1',
      })
      this.ownerOptions = response.map(el => ({ label: el.user_name, value: el.id }))
    },
    async getSourceNames () {
      const response = await crmService.getSourceNames()
      this.sourceNameOptions = response.map(el => ({ label: el.name, value: el.id }))
    },
    async getPrograms () {
      const response = await crmService.getPrograms()
      this.programOptions = response.map(el => ({ label: el.value, value: el.id }))
    },
    async getStates () {
      const response = await crmService.getStates({
        type: 1,
      })
      this.stAdOptions = response.map(el => ({ label: el.slug, value: el.id }))
    },
    async getStatesEeuu () {
      const response = await crmService.getStatesEeuu()
      this.stateOptions = response.map(el => ({ label: el.state, value: el.slug }))
    },
    async getCountries () {
      const response = await crmService.getCountries()
      this.countryOptions = response.map(el => ({ label: el.name, value: el.id }))
    },
    async getUserCreatorOwner () {
      const response = await crmService.getUserCreatorOwner({ modul: 2, roles: "[]", type: "1", })
      this.userCreatorOwnerOptions = response.map(el => ({ label: el.user_name, value: el.id }))
    },
  }
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>

<style lang="scss">
</style>
