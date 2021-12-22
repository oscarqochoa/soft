<template>
  <div>
    <!-- Table Container Card -->
    <b-card
      no-body
      class="mb-0"
    >

      <!-- Paginate -->
      <paginate-table
        :currentPage="currentPage"
        :total-rows="totalLeads"
        :per-page="perPage"
        :from-page="fromPage"
        :to-page="toPage"
        @onChangeCurrentPage="onChangeCurrentPage"
      />

      <div class="m-2">

        <!-- Filters -->
        <filters-table
          :filter="optionFilters"
          :per-page="perPage"
          :per-page-options="perPageOptions"
          :owner-options="G_OWNERS"
          :st-ad-options="G_STATES"
          @onSearch="myProvider"
        />

      </div>

      <b-table
        ref="refUserListTable"
        class="position-relative"
        :fields="fields"
        :items="items"
        responsive
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :busy.sync="isBusy"
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
          <small>{{ data.item.created_at | myDateGlobalWithHour }}</small>
        </template>

      </b-table>

      <!-- Paginate -->
      <paginate-table
        :currentPage="currentPage"
        :total-rows="totalLeads"
        :per-page="perPage"
        :from-page="fromPage"
        :to-page="toPage"
        @onChangeCurrentPage="onChangeCurrentPage"
      />

    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {
  BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink,
  BBadge, BDropdown, BDropdownItem, BPagination,
} from 'bootstrap-vue'

import BCardCode from '@core/components/b-card-code'
import vSelect from 'vue-select'

import dataFields from '@/views/crm/views/Lead/lead-table/fields.data'
import FiltersTable from '../../lead-table/FiltersTable.vue'
import PaginateTable from '@/views/crm/views/Lead/lead-table/PaginateTable.vue'

export default {
  components: {
    BCardCode,
    FiltersTable,
    PaginateTable,

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
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token',
      G_OWNERS: 'CrmGlobalStore/G_OWNERS',
      G_STATES: 'CrmGlobalStore/G_STATES',
    }),
  },
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL_ASSETS,
      mainProps: { width: 75, height: 75, class: 'm1' },

      isBusy: false,
      fields: dataFields.leadSnFields,
      items: [],
      totalLeads: 0,
      perPage: 10,
      fromPage: 0,
      toPage: 0,
      currentPage: 1,
      optionFilters: {
        searchQuery: '',
        from: null,
        to: null,
        stAd: null,
        owner: null,
      },
      perPageOptions: [10, 25, 50, 100],
      sortBy: 'id',
      isSortDirDesc: true,
    }
  },
  created () {
    this.myProvider()
  },
  methods: {
    ...mapActions({
      A_GET_W_POTENTIAL_LEADS: 'CrmLeadStore/A_GET_W_POTENTIAL_LEADS',
    }),
    resolveLeadSnStatusVariant (status) {
      if (status === 2) return 'success'
      if ([3, 4].includes(status)) return 'dark'
      if (status === 5) return 'secondary'
      if (status === 6) return 'warning'
      if (status === 7) return 'danger'
      return 'primary'
    },
    async myProvider () {
      try {
        this.isBusy = true
        const response = await this.A_GET_W_POTENTIAL_LEADS({
          cr: null,
          date_from: this.optionFilters.from,
          date_to: this.optionFilters.to,
          lead_status: null,
          name_text: this.optionFilters.searchQuery,
          order: 'desc',
          orderby: 10,
          program: null,
          state_h: this.optionFilters.stAd,
          type: 3,
          user_owner: this.optionFilters.owner,
          perpage: this.perPage,
          page: this.currentPage
        })
        this.totalLeads = response.total
        this.fromPage = response.from
        this.toPage = response.to
        this.items = response.data
        this.isBusy = false
      } catch (error) {
        console.log('Somtehing went wrong myProvider', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    },
    onChangeCurrentPage (e) {
      this.currentPage = e
      this.myProvider()
    },
  },
}
</script>

<style lang="scss" scoped>
  .table-responsive {
    min-height: 15rem;
  }
</style>
