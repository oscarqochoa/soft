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
          <b-dropdown
            variant="link"
            no-caret
            :right="$store.state.appConfig.isRTL"
          >
            <template #button-content>
              <feather-icon
                icon="MoreVerticalIcon"
                size="16"
                class="align-middle text-body"
              />
            </template>
            <b-dropdown-item :to="{ name: 'apps-users-view', params: { id: data.item.id } }">
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Details</span>
            </b-dropdown-item>

            <b-dropdown-item :to="{ name: 'apps-users-edit', params: { id: data.item.id } }">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Edit</span>
            </b-dropdown-item>

            <b-dropdown-item>
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50">Delete</span>
            </b-dropdown-item>
          </b-dropdown>
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

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    BCardCode,
    LeadsListFilters,

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
    }
  },
  data() {
    return {
      advanceSearch: false,
      baseUrl: process.env.VUE_APP_BASE_URL_ASSETS,
      mainProps: { width: 75, height: 75, class: 'm1' }
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
