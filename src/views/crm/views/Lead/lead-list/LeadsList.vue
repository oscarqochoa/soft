<template>
  <div>
    <!-- Table Container Card -->
    <b-card
      no-body
      class="mb-0"
    >

      <div class="m-2">

        <!-- Table Top -->
        <b-row>

          <!-- Per Page -->
          <b-col
            cols="12"
            md="6"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Show</label>
            <v-select
              v-model="perPage"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
            <label>entries</label>
            <b-button
              variant="link"
              class="btn-icon ml-50"
              v-b-tooltip.hover.bottom="'Refresh'"
              @click="refresh = true"
            >
              <feather-icon
                icon="RefreshCcwIcon"
                size="18"
              />
            </b-button>
          </b-col>

          <!-- Search -->
          <b-col
            cols="12"
            md="6"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                placeholder="Search..."
              />
              <b-button
                variant="warning"
                @click="advanceSearch = !advanceSearch"
              >
                <span class="text-nowrap">
                  <feather-icon
                    icon="FilterIcon"
                    size="18"
                    class="mr-50 text-white"
                  />
                  <span v-if="!advanceSearch">Advance Search</span>
                  <span v-else>Basic Search</span>
                </span>
              </b-button>
            </div>
          </b-col>
          <b-col
            v-if="advanceSearch"
            cols="12"
            class="pt-2"
          >
            <!-- Filters -->
            <leads-list-filters
              :filters="[ 'from', 'to', 'status-lead', 'owner', 'assign-to', 'cr', 'program', 'source-name', 'type-doc', 'st-ad' ]"
              :from-filter.sync="fromFilter"
              :to-filter.sync="toFilter"
              :status-lead-filter.sync="statusLeadFilter"
              :owner-filter.sync="ownerFilter"
              :assign-to-filter.sync="assignToFilter"
              :cr-filter.sync="crFilter"
              :program-filter.sync="programFilter"
              :source-name-filter.sync="sourceNameFilter"
              :type-doc-filter.sync="typeDocFilter"
              :st-ad-filter.sync="stAdFilter"
              :status-lead-options="statusLeadOptions"
              :owner-options="ownerOptions"
              :assign-to-options="assignToOptions"
              :cr-options="crOptions"
              :program-options="programOptions"
              :source-name-options="sourceNameOptions"
              :type-doc-options="typeDocOptions"
              :st-ad-options="stAdOptions"
            />
          </b-col>
        </b-row>

      </div>

      <b-table
        ref="refUserListTable"
        class="position-relative"
        :items="fetchLeads"
        responsive
        small
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
        selectable
        select-mode="multi"
        @row-selected="onRowSelected"
      >
        <template #table-busy>
          <div class="text-center text-primary my-2">
            <b-spinner class="align-middle mr-1" />
            <strong>Loading ...</strong>
          </div>
        </template>

        <!-- Column: Date Even -->
        <template #cell(date_even)="data">
          <b-badge
            v-if="data.item.date_even"
            pill
            variant="light-danger"
            class="text-capitalize"
          >
            <feather-icon
              v-if="data.item.date_even"
              icon="CalendarIcon"
              size="18"
              class="mr-50 text-danger"
            />
            <span class="align-text-top text-capitalize">{{ data.item.date_even }}</span>
          </b-badge>
        </template>

        <!-- Column: Name -->
        <template #cell(lead_name)="data">
          <a
            href="#"
            target="_blank"
          >{{ data.item.lead_name }}</a>
        </template>

        <!-- Column: Status -->
        <template #cell(status)="data">
          <b-badge
            pill
            :variant="`light-${resolveUserStatusVariant(data.item.status)}`"
            class="text-capitalize"
          >
            {{ data.item.status }}
          </b-badge>
        </template>

        <!-- Column: Status -->
        <template #cell(credit_report)="data">
          <strong :class="`text-${ (data.item.credit_report == 1) ? 'danger' : 'success' }`">{{ (data.item.credit_report == 1) ? 'NO' : 'YES' }}</strong>
        </template>

        <!-- Column: Programs -->
        <template #cell(programs)="data">
          <template v-for="(program, key) in JSON.parse(data.item.programs)">
            <b-img
              :key="key"
              thumbnail
              fluid
              :src="`${baseUrl + '' + program.logo}`"
              :alt="program.value"
              v-bind="mainProps"
            ></b-img>
          </template>
        </template>

        <!-- Column: Created By -->
        <template #cell(created_by)="data">
          <small>{{ data.item.owner }}</small>
          <br>
          <small>{{ data.item.created_at }}</small>
        </template>

        <!-- Column: Assign To -->
        <template #cell(assign_to)="data">
          <small>{{ data.item.assign_to }}</small>
          <br>
          <small>{{ data.item.assign_date }}</small>
        </template>

        <!-- Column: Actions -->
        <template #cell(actions)="data">
          <table-actions :options="[ 'returnToSocialNetwork', 'sendSMS', 'delete' ]" :row-data="data.item" @onRowDelete="onRowDelete" @onRowProcess="onRowProcess" @modalSmsOpen="modalSmsOpen"></table-actions>
        </template>

      </b-table>
      <div class="mx-2 mb-2">
        <b-row>

          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span class="text-muted">Showing {{ dataMeta.from }} to {{ dataMeta.to }} of {{ dataMeta.of }} entries</span>
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >

            <b-pagination
              v-model="currentPage"
              :total-rows="totalUsers"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>

          </b-col>

        </b-row>
      </div>
    </b-card>
    <!-- modal -->
    <b-modal
      id="modal-send-sms"
      ok-only
      modal-class="modal-primary"
      centered
      size="lg"
      title="SEND SMS"
    >
      <modal-send-sms
        :row-data="rowData"
        :smss="leads_sms"
        :modul="modul"
        :typesms="typesms"
        :sms="leads_sms_o"
        :name-leads="name_leads_arr"
        :quicks="quicks"
        @modalQuickOpen="modalQuickOpen"
      />

      <template #modal-footer>
        <b-form-group
          label="VARS"
          class="w-100"
        >
          <b-row>
            <b-col sm="3">
              <b-input-group size="sm">
                <b-input-group-prepend is-text>
                  @1
                </b-input-group-prepend>
                <b-form-input placeholder="FIRST NAME" readonly />
              </b-input-group>
            </b-col>
            <b-col sm="3">
              <b-input-group size="sm">
                <b-input-group-prepend is-text>
                  @2
                </b-input-group-prepend>
                <b-form-input placeholder="LAST NAME" readonly />
              </b-input-group>
            </b-col>
            <b-col v-if="modul == 15" sm="3">
              <b-input-group size="sm">
                <b-input-group-prepend is-text>
                  @3
                </b-input-group-prepend>
                <b-form-input placeholder="LAST NAME" readonly />
              </b-input-group>
            </b-col>
          </b-row>
        </b-form-group>
      </template>
    </b-modal>
    <b-modal
      id="modal-quick-sms"
      ok-only
      modal-class="modal-primary"
      centered
      size="lg"
      title="QUICK SMS"
      hide-footer
    >
      <modal-quick-sms
        :modul="modul"
        :quicks="quicks"
        @modalQuickCreateOpen="modalQuickCreateOpen"
        @modalQuickEditOpen="modalQuickEditOpen"
      />
    </b-modal>
    <b-modal
      id="modal-quick-sms-save"
      ok-only
      modal-class="modal-primary"
      centered
      size="lg"
      :title="(quickData.id) ? 'EDIT QUICK SMS' : 'NEW QUICK SMS'"
      hide-footer
    >
      <modal-quick-sms-save
        :modul="modul"
        :quick-data="quickData"
        @updateQuicks="updateQuicks"
        @modalQuickCreateClose="$bvModal.hide('modal-quick-sms-save')"
      />
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink,
  BBadge, BDropdown, BDropdownItem, BPagination, BModal
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import store from '@/store'
import { ref, onUnmounted } from '@vue/composition-api'
import { avatarText } from '@core/utils/filter'
import BCardCode from '@core/components/b-card-code'
import LeadsListFilters from './LeadsListFilters.vue'
import useUsersList from './useLeadsList'
import userStoreModule from '../leadStoreModule'
import TableActions from './components/TableActions.vue'
import ModalSendSms from './components/ModalSendSms.vue'
import ModalQuickSms from './components/ModalQuickSms.vue'
import ModalQuickSmsSave from './components/ModalQuickSmsSave.vue'
import crmService from '@/views/crm/services/crm.service'

export default {
  components: {
    BCardCode,
    LeadsListFilters,
    TableActions,
    ModalSendSms,
    ModalQuickSms,
    ModalQuickSmsSave,

    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BModal,

    vSelect,
  },
  props: {
    stateLeadOptions: {
      type: Array,
      required: false,
    },
    statusLeadOptions: {
      type: Array,
      required: false,
    },
    ownerOptions: {
      type: Array,
      required: false,
    },
    assignToOptions: {
      type: Array,
      required: false,
    },
    crOptions: {
      type: Array,
      required: false,
    },
    programOptions: {
      type: Array,
      required: false,
    },
    sourceNameOptions: {
      type: Array,
      required: false,
    },
    typeDocOptions: {
      type: Array,
      required: false,
    },
    stAdOptions: {
      type: Array,
      required: false,
    },
    leadsSelecteds: {
      type: Object,
      required: true,
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token'
    }),
  },
  data() {
    return {
      modul: 2,
      advanceSearch: false,
      baseUrl: process.env.VUE_APP_BASE_URL_ASSETS,
      mainProps: { width: 75, height: 75, class: 'm1' },
      rowData: {},
      name_leads_arr: [],
      leads_sms: [],
      typesms: null,
      leads_sms_o: [],
      name_leads_arr: [],
      quicks: [],
      quickData: {},
      blankQuickData: {
        id: null,
        sms: '',
        title: ''
      }
    }
  },
  setup() {
    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })

    const {
      fetchLeads,
      tableColumns,
      refresh,
      perPage,
      currentPage,
      totalUsers,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refUserListTable,

      // UI
      resolveUserRoleVariant,
      resolveUserRoleIcon,
      resolveUserStatusVariant,

      // Extra Filters
      fromFilter,
      toFilter,
      statusLeadFilter,
      ownerFilter,
      assignToFilter,
      crFilter,
      programFilter,
      sourceNameFilter,
      typeDocFilter,
      stAdFilter,
    } = useUsersList()

    return {
      fetchLeads,
      tableColumns,
      refresh,
      perPage,
      currentPage,
      totalUsers,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refUserListTable,

      // Filter
      avatarText,

      // UI
      resolveUserRoleVariant,
      resolveUserRoleIcon,
      resolveUserStatusVariant,

      // Extra Filters
      fromFilter,
      toFilter,
      statusLeadFilter,
      ownerFilter,
      assignToFilter,
      crFilter,
      programFilter,
      sourceNameFilter,
      typeDocFilter,
      stAdFilter
    }
  },
  methods: {
    onRowSelected (items) {
      this.leadsSelecteds.leads = items
    },
    onRowDelete (id) {
      try {
        this.$swal.fire({
          title: 'Are you sure?',
          icon: 'question',
          text: 'You won\'t be able to revert this!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#ab9220',
          cancelButtonColor: '#8f9194',
          confirmButtonText: 'Yes, delete it!',
        })
        .then(async (result) => {
          if (result.value) {
            const { id: user_id, id: role_id } = this.currentUser
            const response = await crmService.postDeleteLead({
              leadid: id,
              idsession: user_id,
              iduser: user_id,
              idrole: role_id,
            })
            if (response) {
              this.refresh = true
              this.$swal('Successful!', 'Operation successfully', 'success')
            } else {
              this.$swal('Failed!', 'There was something wronge', 'warning')
            }
          }
        })
      } catch (error) {
        console.log('Something went wrong onRowDelete:', error)
        this.$swal('Oops!', 'There was something wronge', 'error')
      }
    },
    onRowProcess (id) {
      try {
        this.$swal.fire({
          title: 'Are you sure?',
          icon: 'question',
          text: 'You won\'t be able to revert this!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#ab9220',
          cancelButtonColor: '#8f9194',
          confirmButtonText: 'Yes',
          input: 'textarea',
          inputValidator: (value) => {
            if (!value) {
              return 'You need to write something!'
            }
          },
        })
        .then(async (result) => {
          if (result.value) {
            const { id: user_id, id: role_id } = this.currentUser
            const response = await crmService.postProcessLead({
              lead_id: id,
              status: 3,
              user_id,
              description: result.value,
            })
            if (response.status == 200) {
              this.refresh = true
              this.$swal('Successful!', 'Operation successfully', 'success')
            } else {
              this.$swal('Failed!', 'There was something wronge', 'warning')
            }
          }
        })
      } catch (error) {
        console.log('Something went wrong onRowProcess:', error)
        this.$swal('Oops!', 'There was something wrong', 'error')
      }
    },
    async getAllQuicksSms () {
      try {
        const response = await crmService.getAllQuicksSms({
          modul: this.modul,
        })
        this.quicks = response.map(el => ({ ...el, value: el.sms, label: el.title }))
      } catch (error) {
        console.log('Something wnet wrong getAllQuicksSms:', error)
      }
    },
    modalSmsOpen (item) {
      this.rowData = item
      this.leads_sms = []
      this.typesms = 1
      this.leads_sms_o = []
      this.leads_sms_o.push(item)
      const namecl = []
      this.leads_sms_o.map((el) => {
        namecl.push({ name: el.lead_name, id: el.id })
      })
      this.name_leads_arr = namecl
      this.$bvModal.show('modal-send-sms')
    },
    modalQuickOpen () {
      this.$bvModal.show('modal-quick-sms')
    },
    modalQuickCreateOpen () {
      this.quickData = JSON.parse(JSON.stringify(this.blankQuickData))
      this.$bvModal.show('modal-quick-sms-save')
    },
    modalQuickEditOpen (item) {
      this.quickData = item
      this.$bvModal.show('modal-quick-sms-save')
    },
    updateQuicks (item) {
      const index = this.quicks.map(el => el.id).indexOf(item.id)
      if (index !== -1) {
        this.quicks[index] = { ...item, value: item.sms, label: item.title }
      } else {
        this.quicks.push({ ...item, value: item.sms, label: item.title })
      }
    }
  },
  created() {
    this.getAllQuicksSms()
  }
}
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
