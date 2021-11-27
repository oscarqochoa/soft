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
              variant="secondary"
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
                <span
                  v-if="!advanceSearch"
                  class="text-nowrap"
                >
                  Advance Search
                  <feather-icon
                    icon="ChevronsRightIcon"
                    size="18"
                    class="mr-50 text-white"
                  />
                </span>
                <span
                  v-else
                  class="text-nowrap"
                >
                  <feather-icon
                    icon="ChevronsLeftIcon"
                    size="18"
                    class="mr-50 text-white"
                  />
                  Basic Search
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
              :filters="[ 'from', 'to', 'owner', 'st-ad' ]"
              :from-filter.sync="fromFilter"
              :to-filter.sync="toFilter"
              :owner-filter.sync="ownerFilter"
              :st-ad-filter.sync="stAdFilter"
              :owner-options="ownerOptions"
              :st-ad-options="stAdOptions"
            />
          </b-col>
        </b-row>

      </div>

      <b-table
        ref="refUserListTable"
        class="position-relative"
        :items="fetchLeadsSn"
        responsive
        :fields="tableLeadSn"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
      >
        <template #table-busy>
          <div class="text-center text-primary my-2">
            <b-spinner class="align-middle mr-1" />
            <strong>Loading ...</strong>
          </div>
        </template>

        <!-- Column: Nickname -->
        <template #cell(nickname)="data">
          <a href="#" target="_blank">{{ data.item.nickname }}</a>
          <br>
          <span>{{ data.item.lead_name }}</span>
        </template>

        <!-- Column: Status -->
        <template #cell(status)="data">
          <b-badge
            pill
            :variant="`light-${resolveLeadSnStatusVariant(data.item.status_sn_id)}`"
            class="text-capitalize"
          >
            {{ data.item.status }}
          </b-badge>
        </template>

        <!-- Column: Fanpage -->
        <template #cell(fanpage)="data">
          <b-img
            thumbnail
            fluid
            :src="baseUrl + data.item.logo"
            v-bind="mainProps"
          ></b-img>
        </template>

        <!-- Column: Recomendations -->
        <template #cell(programs)="data">
          <template v-for="(program, key) in JSON.parse(data.item.programs)">
            <span
              :key="key"
            >{{ program }}</span>
            <br :key="JSON.parse(data.item.programs).length + key">
          </template>
        </template>

        <!-- Column: Appointment -->
        <template #cell(appointment)="data">
          <strong
            v-if="data.item.attend == 2"
            class="text-success"
          >
            <feather-icon
              icon="CheckCircleIcon"
              size="18"
              class="mr-50 text-danger"
            />
            YES
          </strong>
          <strong
            v-else-if="data.item.attend == 1"
            class="text-success"
          >YES</strong>
          <strong
            v-else
            class="text-danger"
          >NO</strong>
          <br>
          <span v-if="data.item.seller_name != null">{{ data.item.seller_name }}</span>
          <br>
          <span v-if="data.item.attend_date != null">{{ data.item.attend_date }}</span>
        </template>

        <!-- Column: Created Date -->
        <template #cell(created_date)="data">
          <small>{{ data.item.created_at }}</small>
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
  </div>
</template>

<script>
import {
  BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink,
  BBadge, BDropdown, BDropdownItem, BPagination,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import store from '@/store'
import { ref, onUnmounted } from '@vue/composition-api'
import { avatarText } from '@core/utils/filter'
import BCardCode from '@core/components/b-card-code'
import LeadsListFilters from './LeadsListFilters.vue'
import useUsersList from './useLeadsList'
import userStoreModule from '../leadStoreModule'
import UserListAddNew from './LeadListAddNew.vue'

export default {
  components: {
    BCardCode,
    LeadsListFilters,
    UserListAddNew,

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

    vSelect,
  },
  props: {
    ownerOptions: {
      type: Array,
      required: false,
    },
    stAdOptions: {
      type: Array,
      required: false,
    }
  },
  data() {
    return {
      advanceSearch: false,
      baseUrl: process.env.VUE_APP_BASE_URL,
      mainProps: { width: 75, height: 75, class: 'm1' },
      filtersOptions: {
        statusLeads: [],
        owners: [],
        sourceNames: [],
        programs: [],
        states: [],
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
      fetchLeadsSn,
      tableColumns,
      tableLeadSn,
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
      refetchData,

      // UI
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

      fetchLeadsSn,
      tableColumns,
      tableLeadSn,
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
      refetchData,

      // Filter
      avatarText,

      // UI
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
    resolveLeadSnStatusVariant (status) {
      if (status === 2) return 'success'
      if ([3, 4].includes(status)) return 'dark'
      if (status === 5) return 'secondary'
      if (status === 6) return 'warning'
      if (status === 7) return 'danger'
      return 'primary'
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
@import '@core/scss/vue/libs/vue-select.scss';
</style>
