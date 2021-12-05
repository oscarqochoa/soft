<template>
  <div>
    <filter-slot
      annulled
      :fields="fields"
      :filter="filter"
      :total-rows="totalRows"
      :paginate="paginate"
      :start-page="startPage"
      :to-page="toPage"
    >
      <b-table
        v-scrollbar
        :has-provider="true"
        id="annull-table"
        slot="table"
        ref="annull-table"
        sticky-header="70vh"
        small
        class="font-small-3 text-center"
        :busy.sync="isBusy"
        :items="myProvider"
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
        <template v-slot:cell(program)="data">
            {{ data.item.program }}
        </template>
        <template v-slot:cell(captured)="data">
          <b-row>
            <b-col>
              {{ data.item.captured }}
            </b-col>
          </b-row>
          <b-row v-if="data.item.commission">
            <b-col>
              <p class=" m-0 text-primary font-weight-bold"> $ {{ JSON.parse(data.item.commission)[0].commission }} </p>
            </b-col>
          </b-row>
        </template>
        <template v-slot:cell(seller)="data">
          <b-row>
            <b-col>
              {{ data.item.seller }}
            </b-col>
          </b-row>
          <b-row v-if="data.item.commission">
            <b-col>
              <p class="m-0 text-primary font-weight-bold"> $ {{ JSON.parse(data.item.commission)[1].commission }} </p>
            </b-col>
          </b-row>
        </template>
        <template v-slot:cell(fee)="data">
          $ {{ data.item.fee }}
        </template>
        <template v-slot:cell(initial_amount)="data">
          <div>
            <b-icon
              v-if="data.item.initial_payment_status === 1 || data.item.initial_payment_status === 3"
              icon="wallet2"
              variant="muted"
            />
          </div>
        </template>
        <template v-slot:cell(contract_fee_status)="data">
          <b-icon
            icon="file-text"
            variant="muted"
            v-if="data.item.contract_fee_status === 0"
          />
        </template>
        <template v-slot:cell(notes_status)="data">
          <b-icon
            v-if="data.item.notes_status == 0"
            icon="chat-square-text-fill"
            variant="muted"
          />
        </template>
        <template v-slot:cell(trackings)="data">
          <b-icon
            class="cursor-pointer"
            icon="list-check"
            variant="muted"
          />
        </template>
        <template v-slot:cell(files)="data">
          <b-icon
            icon="folder-fill"
            variant="warning"
          />
        </template>
        <template v-slot:cell(status)="data">
          <p
            class="m-0 font-weight-bold font-small-3"
            :class="'color: text-' + status[data.item.status].variant"
          >
            {{ status[data.item.status].text }}
          </p>
        </template>
        <template v-slot:cell(creates)="data">
          <span>{{ data.item.creates | myGlobal }}</span>
        </template>
        <template v-slot:cell(approved)="data">
          <span class="font-weight-bold" :class="data.item.approved ? 'text-info' : ''">{{ data.item.approved | myGlobal }}</span>
        </template>
        <template v-slot:cell(annulled_by)="data">
          <div>
            <p>{{data.item.annulled_by}}</p>
            <p>{{data.item.annulled_at | myGlobal}}</p>
          </div>
        </template>
      </b-table>
    </filter-slot>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FilterSlot
from '@/views/crm/views/sales-made/components/slots/FilterSlot.vue'
import dataFields from './fields.data'
import dataFilters from './filters.data'
import CrmService from '@/views/crm/services/crm.service'
/* Modals Import can be deleted */

export default {
  name: 'SalesMadeAnnulledComponent', // Change name component
  components: {
    FilterSlot,
  },
  data() {
    return {
      items: {},
      isBusy: false,
      fields: dataFields,
      totalRows: 0,
      paginate: {
        currentPage: 1,
        perPage: 10,
      },
      basicSearch: true,
      filter: dataFilters,
      startPage: null,
      toPage: null,
      modal: {
        tracking: false,
      },
      modalData: {
        tracking: {
          program: '',
          client: '',
          tabla: '',
        },
      },
    }
  },
  computed: {
    ...mapState({
      status: state => state['crm-store'].status,
    }),
    filteredFields() {
      return this.fields
    },
  },
  methods: {
    async myProvider(ctx) {
      try {
        const sortBy = 30
        const sortDirection = 'desc'
        const data = await CrmService.getSaleAnnul({
          captured: ctx.filter.captured,
          from: ctx.filter.from,
          order: sortDirection,
          orderby: sortBy,
          program: ctx.filter.program,
          rolsession: 1,
          salemade: 0,
          seller: ctx.filter.seller,
          status: ctx.filter.status,
          statusip: ctx.filter.stip,
          text: ctx.filter.text,
          to: ctx.filter.to,
          per_page: ctx.perPage,
        },
        ctx.currentPage)
        this.startPage = data.from
        this.toPage = data.to
        if (this.totalRows !== data.total) this.totalRows = data.total
        this.items = data.data
        console.log(this.items)
        return this.items
      } catch (e) {
        this.showToast('danger', 'top-right', 'Error', 'XIcon', e)
        return []
      }
    },
    openTrackingModal(program, client, tabla) {
      this.modalData.tracking.program = program
      this.modalData.tracking.client = client
      if (tabla) {
        this.modalData.tracking.tabla = JSON.parse(tabla)
        this.modal.tracking = true
      }
    },
  },
}
</script>

<style scoped>
p{
  margin: 0;
}
</style>
