<template>
  <div>
    <filter-slot
      :fields="fields"
      :filter="filter"
      :total-rows="totalRows"
      :paginate="paginate"
      :start-page="startPage"
      :to-page="toPage"
    >
      <b-table
        v-scrollbar
        sticky-header="70vh"
        id="new-client-done-table"
        slot="table"
        ref="new-client-done-table"
        small
        class="text-center"
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
        <template #head(selected)="data">
          <b-form-checkbox />
        </template>
        <template v-slot:cell(selected)="row">
          <b-form-group>
            <b-form-checkbox />
          </b-form-group>
        </template>
        <template v-slot:cell(client)="data">
          <h6>{{ data.item.client }}</h6>
          <p class="mb-0">
            <small> {{ data.item.mobile }}</small>
          </p>
          <p class="mb-0">
            <small>{{ data.item.state }}</small>
          </p>
          <p> <small> {{ data.item.sourcesname }} </small></p>
        </template>
        <template v-slot:cell(program)="data">
          <b-button
            :style="`color: ${data.item.program_color} !important; border-color: ${data.item.program_color} !important; background-color: transparent !important;`"
            size="sm"
            @click="openModalProgram(data.item)"

          >
            {{ data.item.program }}
            <b-icon
              v-if="data.item.haveRates !== 1"
              icon="exclamation-triangle-fill"
              variant="danger"
            />
          </b-button>
        </template>
        <template v-slot:cell(captured)="data">
          <b-row>
            <b-col>
              <p> {{ data.item.captured }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p v-if="data.item.commission">
                <small class="text-primary font-weight-bold"> $ {{ JSON.parse(data.item.commission)[0].commission }} </small>
              </p>
            </b-col>
          </b-row>
          <b-row v-if="data.item.status == 1 || data.item.status == 3">
            <b-col>
              <b-icon icon="pencil-fill" />
            </b-col>
            <b-col>
              <b-icon icon="list-ul" />
            </b-col>
          </b-row>
        </template>
        <template v-slot:cell(seller)="data">
          <b-row>
            <b-col>
              <p> {{ data.item.seller }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p v-if="data.item.commission">
                <small class="text-primary font-weight-bold"> $ {{ JSON.parse(data.item.commission)[1].commission }} </small>
              </p>
            </b-col>
          </b-row>
          <b-row v-if="data.item.status === 1 || data.item.status === 3">
            <b-col>
              <b-icon icon="pencil-fill" />
            </b-col>
            <b-col>
              <b-icon icon="list-ul" />
            </b-col>
          </b-row>
        </template>
        <template v-slot:cell(fee)="data">
          <b-row>
            <b-col>
              <p> $ {{ data.item.fee }} </p>
            </b-col>
          </b-row>
          <b-row v-if="data.item.status === 1 || data.item.status === 3">
            <b-col>
              <b-icon icon="pencil-fill" />
            </b-col>
            <b-col>
              <b-icon icon="list-ul" />
            </b-col>
          </b-row>
        </template>
        <template v-slot:cell(initial_amount)="data">
          <div class="cursor-pointer" @click="openInitialPaymentModal(data.item.program, data.item.client, data.item.initial_amount, data.item.id)">
            <b-icon
                v-if="data.item.initial_payment_status === 1"
                icon="wallet2"
                variant="muted"
            />
            <b-icon
                v-else-if="data.item.initial_payment_status === 3"
                icon="wallet2"
                variant="warning"
            />
            <p
                v-else-if="data.item.initial_payment_status === 2"
                class="text-success font-weight-bold"
            >
              $ {{ data.item.initial_amount }}
            </p>
          </div>
        </template>
        <template v-slot:cell(contract_fee_status)="data">
          <b-icon
            icon="file-text"
            :variant="
              ( data.item.contract_fee_status === 0 ||
                (data.item.contract_fee_status === 1 && data.item.initial_payment_status === 3)
              ) ? 'muted' :
                (data.item.contract_fee_status === 1 && data.item.initial_payment_status === 2) ? 'success' :
                (data.item.contract_fee_status === 2) ? 'danger' : '' "
          />
        </template>
        <template v-slot:cell(notes_status)="data">
          <b-icon
            v-if="data.item.creates > '2021-05-16 00:00:00' "
            icon="chat-square-text-fill"
            :variant="
              (data.item.notes_status_new == null) ? 'muted':
              (data.item.notes_status_new == 0) ? 'success' :
              'warning' "
          />
          <b-icon
            v-else
            icon="chat-square-text-fill"
            :variant="
              (data.item.notes_status === 0) ? 'muted': 'success' "
          />
        </template>
        <template v-slot:cell(trackings)="data">
          <b-icon
            class="cursor-pointer"
            icon="list-check"
            :variant="
              (data.item.trackings) ? 'success': 'muted' "
            @click="openTrackingModal(data.item.program, data.item.client, data.item.trackings)"
          />
        </template>
        <template v-slot:cell(files)="data">
          <b-icon
            icon="folder-fill"
            variant="warning"
          />
        </template>
        <template v-slot:cell(status)="data">
          <b-button
            size="sm"
            :variant="status[data.item.status].variant"
          >
            {{ status[data.item.status].text }}
          </b-button>
        </template>
        <template v-slot:cell(creates)="data">
          <span>{{ new Date(Date.parse(data.item.creates)).toLocaleDateString("en-US") }}</span>
        </template>
        <template v-slot:cell(approved)="data">
          <span
            v-if="data.item.approved"
            class="bg-warning py-1 px-1 rounded-pill text-white"
          > {{ new Date(Date.parse(data.item.approved)).toLocaleDateString("en-US") }}</span>
          <span v-else>-</span>
        </template>
        <template v-slot:cell(sms)="data">
          <b-icon
            icon="chat-text-fill"
            variant="primary"
          />
        </template>
        <template v-slot:cell(url)="data">
          <b-icon
            v-if="data.item.initial_payment_status === 1"
            icon="link"
            variant="primary"
          />
        </template>
        <template v-slot:cell(done)="data">
          <b-btn v-if="data.item.initial_payment_status == 2">
            <b-icon
              icon="arrow-left-square-fill"
              variant="primary"
            />
          </b-btn>
        </template>
      </b-table>
    </filter-slot>
    <tracking-modal
      :modal="modal"
      :tracking="modalData.tracking"
    />
    <detail-of-sail-modal
      :modal="modal"
      :boost_credit="modalData.boost_credit"
    />
    <initial-payment-modal
        :key="initialPaymentKey"
        :modal="modal"
        :initial_payment="modalData.initial_payment"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FilterSlot
from '@/views/crm/views/sales-made/components/new-client/components/FilterSlot.vue'
import dataFields from '@/views/crm/views/sales-made/components/new-client/components/fields.data'
import dataFilters from '@/views/crm/views/sales-made/components/new-client/components/filters.data'
import CrmService from '@/views/crm/services/crm.service'
import TrackingModal from '@/views/crm/views/sales-made/components/modals/TrackingModal.vue'
import DetailOfSailModal from '@/views/crm/views/sales-made/components/modals/DetailOfSailModal.vue'
import InitialPaymentModal from "@/views/crm/views/sales-made/components/modals/InitialPaymentModal";

export default {
  name: 'SalesMadeNewComponent',
  components: { InitialPaymentModal, DetailOfSailModal, TrackingModal, FilterSlot },
  props: {
    done: {
      required: true,
      type: Number,
    },
    inputFields: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      isBusy: false,
      fields: dataFields,
      totalRows: 0,
      paginate: {
        currentPage: 1,
        perPage: 100,
      },
      basicSearch: true,
      filter: dataFilters,
      startPage: null,
      toPage: null,
      modal: {
        tracking: false,
        boost_credit: false,
        initial_payment: false,
      },
      modalData: {
        tracking: {
          program: '',
          client: '',
          tabla: '',
        },
        boost_credit: {
          program: '',
          client: '',
          fee: null,
        },
        initial_payment: {
          program: '',
          client: '',
          amount: null,
          sale_id: null,
        },
      },
      initialPaymentKey: 0,
    }
  },
  computed: {
    ...mapState({
      status: state => state['crm-store'].status,
    }),
    filteredFields() {
      return this.fields.filter(field => this.inputFields.includes(field.key))
    },
  },
  methods: {
    async myProvider(ctx) {
      try {
        let sortBy = 11
        let sortDirection = 'desc'
        if (ctx.sortBy === 'client') {
          sortBy = 0
          if (ctx.sortDesc) sortDirection = 'desc'
          else sortDirection = 'asc'
        } else if (ctx.sortBy === 'creates') {
          if (ctx.sortDesc) sortDirection = 'desc'
          else sortDirection = 'asc'
        } else if (ctx.sortBy === 'approved') {
          sortBy = 12
          if (ctx.sortDesc) sortDirection = 'desc'
          else sortDirection = 'asc'
        }
        const data = await CrmService.getSaleMade({
          text: ctx.filter.text,
          status: ctx.filter.status,
          program: ctx.filter.program,
          state_h: ctx.filter.state,
          from: ctx.filter.from,
          to: ctx.filter.to,
          orderby: sortBy,
          order: sortDirection,
          captured: ctx.filter.captured,
          seller: ctx.filter.seller,
          salemade: 0,
          rolsession: 1,
          statusip: ctx.filter.stip,
          sourcesname_id: ctx.filter.source,
          done: this.done,
          per_page: ctx.perPage,
        },
        ctx.currentPage)
        this.startPage = data.from
        this.toPage = data.to
        if (this.totalRows !== data.total) this.totalRows = data.total
        return data.data
      } catch (e) {
        this.$swal({
          title: 'Error!',
          text: 'Ocurrio un error inesperado, vuelva a intentarlo.',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })
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
    openInitialPaymentModal(program, client, amount, saleId) {
      this.modalData.initial_payment.amount = amount
      this.modalData.initial_payment.client = client
      this.modalData.initial_payment.program = program
      this.modalData.initial_payment.sale_id = saleId
      this.modal.initial_payment = true
      this.initialPaymentKey = (this.initialPaymentKey + 1) % 2
    },
    openModalProgram(data) {
      if (data.program_id === 2 || data.program_id === 7 || data.program_id === 6) this.openDetailOfSail(data.program, data.client, data.fee)
    },
    openDetailOfSail(program, client, fee) {
      this.modalData.boost_credit.program = program
      this.modalData.boost_credit.client = client
      this.modalData.boost_credit.fee = fee
      this.modal.boost_credit = true
    },
  },
}
</script>

<style scoped>

</style>
