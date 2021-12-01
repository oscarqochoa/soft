<template>
  <div>
    <user-list-add-new
      :is-add-new-user-sidebar-active.sync="isAddNewUserSidebarActive"
      :role-options="roleOptions"
      :plan-options="planOptions"
      @refetch-data="refetchData"
    />

    <!-- Filters -->
    <users-list-filters
      :role-filter.sync="roleFilter"
      :plan-filter.sync="planFilter"
      :status-filter.sync="statusFilter"
      :role-options="roleOptions"
      :plan-options="planOptions"
      :status-options="statusOptions"
    />

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
                variant="primary"
                @click="isAddNewUserSidebarActive = true"
              >
                <span class="text-nowrap">Add User</span>
              </b-button>
            </div>
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
import UsersListFilters from './LeadsListFilters.vue'
import useUsersList from './useLeadsList'
import userStoreModule from '../leadStoreModule'
import UserListAddNew from './LeadListAddNew.vue'

export default {
  components: {
    BCardCode,
    UsersListFilters,
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
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL_ASSETS,
      mainProps: { width: 75, height: 75, class: 'm1' }
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

    const isAddNewUserSidebarActive = ref(false)

    const roleOptions = [
      { label: 'Admin', value: 'admin' },
      { label: 'Author', value: 'author' },
      { label: 'Editor', value: 'editor' },
      { label: 'Maintainer', value: 'maintainer' },
      { label: 'Subscriber', value: 'subscriber' },
    ]

    const planOptions = [
      { label: 'Basic', value: 'basic' },
      { label: 'Company', value: 'company' },
      { label: 'Enterprise', value: 'enterprise' },
      { label: 'Team', value: 'team' },
    ]

    const statusOptions = [
      { label: 'Pending', value: 'pending' },
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
    ]

    const {
      fetchLeadsSn,
      tableColumns,
      tableLeadSn,
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
      roleFilter,
      planFilter,
      statusFilter,
    } = useUsersList()

    return {

      // Sidebar
      isAddNewUserSidebarActive,

      fetchLeadsSn,
      tableColumns,
      tableLeadSn,
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

      roleOptions,
      planOptions,
      statusOptions,

      // Extra Filters
      roleFilter,
      planFilter,
      statusFilter,
    }
  },
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
