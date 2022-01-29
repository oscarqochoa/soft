<template>
  <div>
    <b-card
      no-body
      class="mb-0"
    >
      <filter-slot

        :filter="filter"
        :filter-principal="filterPrincipal"
        :total-rows="totalRows"
        :paginate="paginate"
        :start-page="startPage"
        :to-page="toPage"
        @reload="$refs['clientsList'].refresh()"
      >

        <b-table
          id="clientsList"
          slot="table"
          ref="clientsList"
          v-scrollbar
          class="position-relative"
          table-class="text-nowrap"
          responsive="sm"
          sticky-header="50vh"
          small
          no-provider-filtering
          :busy.sync="isBusy"
          :items="search"
          :fields="filteredFields"
          :per-page="paginate.perPage"
          :current-page="paginate.currentPage"

          :filter="filter"
        >
          <template #table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner class="align-middle mr-1" />
              <strong>Loading ...</strong>
            </div>
          </template>
          <template v-slot:cell(name)="data">
            <p class="mb-0 font-weight-bold">
              {{ data.item.lead_name }}
            </p>
          </template>

          <template v-slot:cell(mobile)="data">

            <p class="mb-0 font-weight-bold">
              {{ data.item.mobile }}
            </p>

          </template>

          <template v-slot:cell(account)="data">

            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span
                v-for="(account, index) in JSON.parse(data.item.accounts)"
                :key="index"
              >{{ account.account }}</span>
            </div>

          </template>

          <template v-slot:cell(status)="data">

            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <template
                v-for="(account, index) in JSON.parse(data.item.accounts)"
              >
                <span
                  :key="index"
                  class="d-flex justify-content-between align-items-center"
                >
                  <feather-icon
                    v-if="account.status === 1"
                    icon="CircleIcon"
                    size="13"
                    :style="`color: #00CC00; border-color: #00CC00; background: #00CC00; border-radius: 50%; margin-bottom: 2px; margin-right: 5px;`"
                  />
                  <div
                    v-if="account.status === 2"
                    class="client-status client-status-hold1"
                    :style="`top: 50%;margin-right: 5px; background: ${
                      account.validate_sp === 2 ? 'red' : ''
                    }`"
                  />
                  <feather-icon
                    v-if="account.status === 3"
                    icon="CircleIcon"
                    size="13"
                    :style="`color: #0066FF; border-color: #0066FF; background: #0066FF; border-radius: 50%; margin-bottom: 2px; margin-right: 5px;`"
                  />
                  <feather-icon
                    v-if="
                      account.status == 4 ||
                        account.status == 5 ||
                        account.status == 6
                    "
                    icon="CircleIcon"
                    size="13"
                    :style="`color: red; border-color: red; background: red; border-radius: 50%; margin-bottom: 2px; margin-right: 5px;`"
                  />
                  <span>
                    {{
                      account.status == 1
                        ? "Active"
                        : account.status == 2
                          ? "Hold"
                          : account.status == 3
                            ? "Transition"
                            : account.status == 4
                              ? "Canceled"
                              : account.status == 5
                                ? "Loyal"
                                : "Closed"
                    }}
                  </span>
                </span>
              </template>

            </div>

          </template>

          <template #cell(advisor)="data">
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span
                v-for="(account, index) in JSON.parse(data.item.accounts)"
                :key="index"
              >{{ account.advisor_name }}</span>
            </div>
          </template>

          <template #cell(creation_date)="data">
            {{
              data.item.created_at | myGlobal
            }}</template>

          <template #cell(fee_charges)="data">
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span
                v-for="(account, index) in JSON.parse(data.item.accounts)"
                :key="index"
              >{{ account.charges }}</span>
            </div>
          </template>

          <template #cell(mp)="data">
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span
                v-for="(account, index) in JSON.parse(data.item.accounts)"
                :key="index"
              >{{ account.monthly_amount }}</span>
            </div>
          </template>

          <template #cell(pt)="data">
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span
                v-for="(account, index) in JSON.parse(data.item.accounts)"
                :key="index"
              >{{ account.monthly_amount }}</span>
            </div>
          </template>
        </b-table>

      </filter-slot>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FilterSlot from '@/views/crm/views/sales-made/components/slots/FilterSlot.vue'
import dataFields
from '@/views/social-network/views/clients/clients-module/fields.data'
import dataFilters
from '@/views/social-network/views/clients/clients-module/filters.data'

import ClientService from '@/views/social-network/views/clients/client.service'

export default {
  components: {
    FilterSlot,

  },

  data() {
    return {
      fields: dataFields,
      totalRows: 0,
      filterPrincipal: {
        type: 'input',
        inputType: 'text',
        placeholder: 'Search...',
        model: '',
      },
      paginate: {
        currentPage: 1,
        perPage: 10,
      },
      isBusy: false,
      basicSearch: true,
      filter: dataFilters,
      startPage: null,
      toPage: null,
      items: [],
    }
  },

  computed: {
    filteredFields() {
      return this.fields
    },
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token',

    }),
  },

  methods: {
    async search(ctx) {
      try {
        let orderBy = 5
        let sortDirection = 'desc'
        if (ctx.sortBy === 'program') {
          if (ctx.sortDesc) sortDirection = 'desc'
          else sortDirection = 'asc'
          orderBy = 3
        } else if (ctx.sortBy === 'campaign') {
          if (ctx.sortDesc) sortDirection = 'desc'
          else sortDirection = 'asc'
          orderBy = 10
        } else if (ctx.sortBy === 'name') {
          if (ctx.sortDesc) sortDirection = 'desc'
          else sortDirection = 'asc'
          orderBy = 17
        } else if (ctx.sortBy === 'replies') {
          if (ctx.sortDesc) sortDirection = 'desc'
          else sortDirection = 'asc'
          orderBy = 20
        } else if (ctx.sortBy === 'new_replies') {
          if (ctx.sortDesc) sortDirection = 'desc'
          else sortDirection = 'asc'
          orderBy = 21
        } else if (ctx.sortBy === 'publication_date') {
          if (ctx.sortDesc) sortDirection = 'desc'
          else sortDirection = 'asc'
          orderBy = 2
        } else if (ctx.sortBy === 'created_by') {
          if (ctx.sortDesc) sortDirection = 'desc'
          else sortDirection = 'asc'
          orderBy = 1
        }

        const params = {
          perPage: this.paginate.perPage,
          orderby: orderBy,
          order: sortDirection,
          from: this.filter[0].model,
          to: this.filter[1].model,
          program: this.filter[2].model,
          state: this.filter[3].model,
          text: this.filterPrincipal.model,
          status: this.status,
          type: this.paymentType,
          day: this.paymentDay,
          rol_id: this.currentUser.arrRoles.find(rol => rol.module_id == 2)
            .role_id,
          session: this.currentUser.user_id,
          modul: 2,
        }
        const data = await ClientService.getClients(params, ctx.currentPage)
        this.items = data.data.data
        // Must return an array of items or an empty array if an error occurred

        this.startPage = data.data.from
        this.paginate.currentPage = data.data.current_page
        this.paginate.perPage = data.data.per_page
        this.nextPage = this.startPage + 1
        this.endPage = data.data.last_page
        this.totalData = data.data.total
        this.totalRows = data.data.total
        this.toPage = data.data.to

        return this.items
      } catch (e) {
        this.showErrorSwal(e)
        return []
      }
    },
  },
}
</script>

<style scoped>

</style>
