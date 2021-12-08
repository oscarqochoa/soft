<template>
  <div>
    aa: {{ (currentUser.role_id == null || currentUser.role_id == 2)? 'verdadero' : 'falso' }}
    <filter-slot
      :fields="fields"
      :filter="filter"
      :total-rows="totalRows"
      :paginate="paginate"
      :start-page="startPage"
      :to-page="toPage"
    >
      <b-table
        id="new-client-done-table"
        slot="table"
        ref="new-client-done-table"
        :has-provider="true"
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
        <template #head(selected)>
          <b-form-checkbox
            v-model="selectAll"
            @input="selectedAll"
          />
        </template>
        <template v-slot:cell(selected)="row">
          <b-form-group>
            <b-form-checkbox
              v-model="row.item.selected"
              @input="selectedRow(row.item)"
            />
          </b-form-group>
        </template>
        <template v-slot:cell(client)="data">
          <p class="mb-0 font-weight-bold">
            {{ data.item.client }}
          </p>
          <p class="mb-0">
            {{ data.item.mobile }}
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
            <b-col v-if="!data.item.editCaptured">
              <p> {{ data.item.captured }}</p>
            </b-col>
            <b-col v-else>
              <v-select
                v-model="data.item.capturedNew"
                class="font-small-1 mb-1"
                :clearable="false"
                :options="captured"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p v-if="(data.item.commission) && (currentUser.role_id == null || currentUser.role_id == 2)">
                <small class="text-primary font-weight-bold"> $ {{ JSON.parse(data.item.commission)[0].commission }} </small>
              </p>
            </b-col>
          </b-row>
          <b-row v-if="(data.item.status == 1 || data.item.status == 3) && (currentUser.role_id == null || currentUser.role_id == 2)">
            <b-col>
              <b-icon
                v-if="!data.item.editCaptured"
                icon="pencil-fill"
                class="cursor-pointer"
                @click="data.item.editCaptured = true;data.item.editCaptured = data.item.captured"
              />
              <feather-icon
                v-else
                class="cursor-pointer"
                icon="SaveIcon"
                @click="saveNewCaptured(data.item.captured, data.item.capturedNew, data.item.id, data.item)"
              />
            </b-col>
            <b-col>
              <b-icon
                v-if="!data.item.editCaptured"
                class="cursor-pointer"
                icon="list-ul"
                @click="openTrackingCapturedByModal(data.item.program, data.item.client, data.item.id, 1)"
              />
              <feather-icon
                v-else
                class="cursor-pointer"
                icon="XSquareIcon"
                @click="data.item.editCaptured = false"
              />
            </b-col>
          </b-row>
        </template>
        <template v-slot:cell(seller)="data">
          <b-row>
            <b-col v-if="!data.item.editSeller">
              <p> {{ data.item.seller }}</p>
            </b-col>
            <b-col v-else>
              <v-select
                v-model="data.item.sellerNew"
                class="font-small-2 mb-1"
                :clearable="false"
                :options="sellers"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p v-if="data.item.commission && (currentUser.role_id == null || currentUser.role_id == 2)">
                <small class="text-primary font-weight-bold"> $ {{ JSON.parse(data.item.commission)[1].commission }} </small>
              </p>
            </b-col>
          </b-row>
          <b-row v-if="(data.item.status == 1 || data.item.status == 3) && (currentUser.role_id == null || currentUser.role_id == 2)">
            <b-col>
              <b-icon
                v-if="!data.item.editSeller"
                icon="pencil-fill"
                class="cursor-pointer"
                @click="data.item.editSeller = true"
              />
              <feather-icon
                v-else
                class="cursor-pointer"
                icon="SaveIcon"
                @click="saveNewSeller(data.item.seller, data.item.sellerNew, data.item.id, data.item)"
              />
            </b-col>
            <b-col>
              <b-icon
                v-if="!data.item.editSeller"
                class="cursor-pointer"
                icon="list-ul"
                @click="openTrackingCapturedByModal(data.item.program, data.item.client, data.item.id, 2)"
              />
              <feather-icon
                v-else
                class="cursor-pointer"
                icon="XSquareIcon"
                @click="data.item.editSeller = false;data.item.sellerNew = data.item.seller"
              />
            </b-col>
          </b-row>
        </template>
        <template v-slot:cell(fee)="data">
          <b-row v-if="!data.item.editFee">
            <b-col>
              <p> $ {{ data.item.fee }} </p>
            </b-col>
          </b-row>
          <b-row v-else>
            <b-col>
              <b-input-group
                prepend="$"
                size="sm"
                class="mb-1"
              >
                <b-form-input
                  v-model="data.item.feeNew"
                  type="number"
                />
              </b-input-group>
            </b-col>
          </b-row>
          <b-row v-if="(data.item.status === 1 || data.item.status === 3) && (currentUser.role_id == null || currentUser.role_id == 2)">
            <b-col>
              <b-icon
                v-if="!data.item.editFee"
                icon="pencil-fill"
                class="cursor-pointer"
                @click="data.item.editFee = true"
              />
              <feather-icon
                v-else
                class="cursor-pointer"
                icon="SaveIcon"
                @click="saveNewFee(data.item.fee, data.item.feeNew, data.item.id, data.item)"
              />
            </b-col>
            <b-col>
              <b-icon
                v-if="!data.item.editFee"
                icon="list-ul"
                class="cursor-pointer"
                @click="openTrackingCapturedByModal(data.item.program, data.item.client, data.item.id, 3)"
              />
              <feather-icon
                v-else
                class="cursor-pointer"
                icon="XSquareIcon"
                @click="data.item.editFee = false; data.item.feeNew = data.item.fee"
              />
            </b-col>
          </b-row>
        </template>
        <template v-slot:cell(initial_amount)="data">
          <div
            :class="(( ( (data.item.user_id == currentUser.user_id) && currentUser.role_id == 5) ||
              currentUser.role_id == null ||
              currentUser.role_id == 2)) ? 'cursor-pointer' : ''"
            @click="( ( (data.item.user_id == currentUser.user_id) && currentUser.role_id == 5) ||
              currentUser.role_id == null ||
              currentUser.role_id == 2) &&
              openInitialPaymentModal(data.item.program, data.item.client, data.item.initial_amount, data.item.id)"
          >
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
            :class="(( ( (data.item.user_id == currentUser.user_id) && currentUser.role_id == 5) ||
              currentUser.role_id == null ||
              currentUser.role_id == 2)) ? 'cursor-pointer' : ''"
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
            :class="(( ( (data.item.user_id == currentUser.user_id) && currentUser.role_id == 5) ||
              currentUser.role_id == null ||
              currentUser.role_id == 2)) ? 'cursor-pointer' : ''"
            icon="folder-fill"
            variant="warning"
            @click="(( ( (data.item.user_id == currentUser.user_id) && currentUser.role_id == 5) ||
              currentUser.role_id == null ||
              currentUser.role_id == 2)) && openFilesModal(data.item.lead_id, data.item.program, data.item.client, data.item.id)"
          />
        </template>
        <template v-slot:cell(status)="data">
          <p
            class="m-0 font-weight-bold font-small-3"
            :class="'color: text-' + status[data.item.status].variant"
          >
            {{ status[data.item.status].label }}
          </p>
        </template>
        <template v-slot:cell(actions)="data">
          <b-row
            v-if="data.item.creates > '2021-05-16 00:00:00'"
            class="d-flex align-items-center justify-content-center"
          >
            <b-button
              v-if="(data.item.status == 1 || data.item.status == 7) &&
                data.item.contract_fee_status == 1 &&
                data.item.notes_status_new == 0 &&
                data.item.initial_payment_status == 2 &&
                currentUser.role_id != null && currentUser.role_id != 2"
              size="sm"
              variant="info"
              :disabled="((data.item.user_id != currentUser.user_id) && currentUser.role_id == 5)"
            >
              Revission
            </b-button>
            <b-button
              v-if="(data.item.status == 1 || data.item.status == 6) &&
                (currentUser.role_id == null || currentUser.role_id == 2) &&
                data.item.contract_fee_status == 1 &&
                data.item.notes_status_new == 0 &&
                data.item.initial_payment_status == 2"
              size="sm"
              :disabled="
                data.item.type == 1 && currentUser.role_id == null
                  ? false
                  : data.item.type == 0 ? false : true
              "
              variant="info"
            >
              Revission
            </b-button>
            <b-button
              v-if="
                data.item.status == 5 &&
                  data.item.contract_fee_status == 1 &&
                  data.item.notes_status_new == 0 &&
                  data.item.initial_payment_status == 2 &&
                  (currentUser.role_id == null || currentUser.role_id == 2)
              "
              size="sm"
              variant="info"
            >
              Revission
            </b-button>
            <b-button
              v-if="
                data.item.status == 5 &&
                  data.item.contract_fee_status == 1 &&
                  data.item.notes_status_new == 0 &&
                  data.item.initial_payment_status == 2 &&
                  (currentUser.role_id == null || currentUser.role_id == 2)
              "
              size="sm"
              variant="warning"
            >
              Return
            </b-button>
            <b-button
              v-if="
                data.item.status == 3 &&
                  data.item.contract_fee_status == 1 &&
                  data.item.notes_status_new == 0 &&
                  data.item.initial_payment_status == 2 &&
                  (currentUser.user_id == data.item.user_id ||
                    currentUser.role_id == null ||
                    currentUser.role_id == 2)
              "
              size="sm"
              variant="info"
            >
              Revission
            </b-button>
            <b-button
              v-if="
                data.item.initial_payment_status == 1 &&
                  (currentUser.role_id == null ||
                    currentUser.role_id == 2)
              "
              size="sm"
              variant="danger"
            >
              ANNUL
            </b-button>
          </b-row>
          <b-row
            v-else
            class="d-flex align-items-center justify-content-center"
          >
            <b-button
              v-if="
                (data.item.status == 1 || data.item.status == 7) &&
                  currentUser.role_id != null &&
                  currentUser.role_id != 2 &&
                  data.item.contract_fee_status == 1 &&
                  data.item.notes_status == 1 &&
                  data.item.initial_payment_status == 2
              "
              size="sm"
              variant="info"
            >
              Revission
            </b-button>
            <b-button
              v-if="
                (data.item.status == 1 || data.item.status == 6) &&
                  (currentUser.role_id == null || currentUser.role_id == 2) &&
                  data.item.contract_fee_status == 1 &&
                  data.item.notes_status == 1 &&
                  data.item.initial_payment_status == 2
              "
              size="sm"
              variant="info"
              :disabled="
                data.item.type == 1 && currentUser.role_id == null
                  ? false
                  : data.item.type == 0 ? false : true
              "
            >
              Revission
            </b-button>
            <b-button
              v-if="
                data.item.status == 5 &&
                  (currentUser.role_id == null || currentUser.role_id == 2) &&
                  data.item.contract_fee_status == 1 &&
                  data.item.notes_status == 1 &&
                  data.item.initial_payment_status == 2
              "
              size="sm"
              variant="info"
            >
              Revission
            </b-button>
            <b-button
              v-if="
                data.item.status == 5 &&
                  (currentUser.role_id == null || currentUser.role_id == 2) &&
                  data.item.contract_fee_status == 1 &&
                  data.item.notes_status_new == 0 &&
                  data.item.initial_payment_status == 2
              "
              size="sm"
              variant="warning"
            >
              Return
            </b-button>
            <b-button
              v-if="
                data.item.status == 3 &&
                  (currentUser.user_id == data.item.user_id ||
                    currentUser.role_id == null ||
                    currentUser.role_id == 2) &&
                  data.item.contract_fee_status == 1 &&
                  data.item.notes_status == 1 &&
                  data.item.initial_payment_status == 2
              "
              size="sm"
              variant="info"
            >
              Revission
            </b-button>
            <b-button
              v-if="
                data.item.initial_payment_status == 1 &&
                  (currentUser.role_id == null ||
                    currentUser.role_id == 2)
              "
              size="sm"
              variant="danger"
            >
              ANNUL
            </b-button>
          </b-row>
        </template>
        <template v-slot:cell(creates)="data">
          <span>{{ data.item.creates | myGlobal }}</span>
        </template>
        <template v-slot:cell(approved)="data">
          <span class="font-weight-bold text-info"> {{ data.item.approved | myGlobal }}</span>
        </template>
        <template v-slot:cell(sms)="data">
          <b-icon
            icon="chat-text-fill"
            variant="primary"
          />
        </template>
        <template v-slot:cell(url)="data">
          <b-icon
            v-if="data.item.initial_payment_status === 1 && (data.item.user_id == currentUser.user_id || currentUser.role_id == null || currentUser.role_id == 2)"
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
      :key="modalKeys.initialPaymentKey"
      :modal="modal"
      :initial_payment="modalData.initial_payment"
    />
    <tracking-captured-by-modal
      :key="modalKeys.capturedByTracking"
      :modal="modal"
      :captured-by-tracking="modalData.capturedByTracking"
    />
    <files-modal
      :key="modalKeys.files"
      :modal="modal"
      :files="modalData.files"
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import vSelect from 'vue-select'
import FilterSlot
from '@/views/crm/views/sales-made/components/slots/FilterSlot.vue'
import dataFields from '@/views/crm/views/sales-made/components/new-client/fields.data'
import dataFilters from '@/views/crm/views/sales-made/components/new-client/filters.data'
import CrmService from '@/views/crm/services/crm.service'
import TrackingModal from '@/views/crm/views/sales-made/components/modals/TrackingModal.vue'
import DetailOfSailModal from '@/views/crm/views/sales-made/components/modals/DetailOfSailModal.vue'
import InitialPaymentModal from '@/views/crm/views/sales-made/components/modals/InitialPaymentModal.vue'
import TrackingCapturedByModal from '@/views/crm/views/sales-made/components/modals/TrackingCapturedByModal.vue'
import FilesModal from '@/views/crm/views/sales-made/components/modals/FilesModal.vue'

export default {
  name: 'SalesMadeNewComponent',
  components: {
    FilesModal,
    TrackingCapturedByModal,
    InitialPaymentModal,
    DetailOfSailModal,
    TrackingModal,
    FilterSlot,
    vSelect,
  },
  props: {
    done: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      items: {},
      selected: [],
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
        boost_credit: false,
        initial_payment: false,
        captuerd_by_tracking: false,
        files: false,
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
        capturedByTracking: {
          program: '',
          client: '',
          id: 0,
        },
        files: {
          id: null,
          program: '',
          client: '',
          sale_id: null,
        },
      },
      modalKeys: {
        initialPaymentKey: 0,
        capturedByTracking: 0,
        files: 0,
      },
      selectAll: false,
    }
  },
  computed: {
    ...mapState({
      status: state => state['crm-store'].status,
      sellers: state => state['crm-store'].sellersCrm,
      captured: state => state['crm-store'].capturedCrm,
    }),
    ...mapGetters({
      currentUser: 'auth/currentUser',
    }),
    filteredFields() {
      if (this.done === 0) return this.fields
      return this.fields.filter(field => field.key !== 'done')
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
        const selectedIds = this.selected.map(s => s.id)
        let index = 0
        while (selectedIds.length > 0 && index < data.data.length) {
          if (selectedIds.includes(data.data[index].id)) {
            const { id } = data.data[index]
            data.data[index].selected = true
            const deleted = selectedIds.findIndex(s => s === id)
            if (deleted !== -1) selectedIds.splice(deleted, 1)
          }
          index += 1
        }
        this.items = data.data
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
    openTrackingCapturedByModal(program, client, id, type) {
      this.modalData.capturedByTracking.client = client
      this.modalData.capturedByTracking.program = program
      this.modalData.capturedByTracking.id = id
      this.modalData.capturedByTracking.type = type
      if (type === 1) this.modalData.capturedByTracking.tittle = 'CAPTURED BY'
      else if (type === 2) this.modalData.capturedByTracking.tittle = 'SELLER'
      else if (type === 3) this.modalData.capturedByTracking.tittle = 'FEE'
      this.modal.captuerd_by_tracking = true
      this.modalKeys.capturedByTracking += 1
    },
    openInitialPaymentModal(program, client, amount, saleId) {
      this.modalData.initial_payment.amount = amount
      this.modalData.initial_payment.client = client
      this.modalData.initial_payment.program = program
      this.modalData.initial_payment.sale_id = saleId
      this.modal.initial_payment = true
      this.modalKeys.initialPaymentKey = (this.modalKeys.initialPaymentKey + 1) % 2
    },
    openModalProgram(data) {
      if (data.program_id === 2 || data.program_id === 7 || data.program_id === 6) this.openDetailOfSail(data.program, data.client, data.fee)
    },
    openDetailOfSail(program, client, fee) {
      this.$refs['new-client-done-table']
        .this.modalData.boost_credit.program = program
      this.modalData.boost_credit.client = client
      this.modalData.boost_credit.fee = fee
      this.modal.boost_credit = true
    },
    openFilesModal(id, program, client, sale_id) {
      this.modalData.files.id = id
      this.modalData.files.program = program
      this.modalData.files.client = client
      this.modalData.files.sale_id = sale_id
      this.modal.files = true
      this.modalKeys.files = (this.modalKeys.files + 1) % 2
    },
    selectedRow(data) {
      const index = this.selected.findIndex(select => select.id === data.id)
      if (data.selected === true && index === -1) this.selected.push(data)
      else if (data.selected === false && index !== -1) this.selected.splice(index, 1)
    },
    selectedAll() {
      if (this.selectAll) this.items.forEach(item => item.selected = true)
      else this.items.forEach(item => item.selected = false)
    },
    async saveNewCaptured(captured, capturedNew, userId, user) {
      if (captured === capturedNew) this.showToast('danger', 'top-right', 'Error', 'XIcon', 'You can\'t select the same captured')
      else if (captured === capturedNew.label) this.showToast('danger', 'top-right', 'Error', 'XIcon', 'You can\'t select the same captured')
      else {
        this.$store.commit('app/SET_LOADING', true)
        try {
          const response = await CrmService.saveNewCaptured({
            capt: capturedNew.id,
            id: userId,
            user: this.currentUser.user_id,
          })
          if (response.status === 200) this.showToast('success', 'top-right', 'Success', 'CheckIcon', 'Se actualizo satisfactoriamente')
          else return
          // eslint-disable-next-line no-param-reassign
          user.captured = user.capturedNew.label
          // eslint-disable-next-line no-param-reassign
          user.capturedNew = user.captured
          // eslint-disable-next-line no-param-reassign
          user.editCaptured = false
          this.$store.commit('app/SET_LOADING', false)
        } catch (error) {
          this.showToast('danger', 'top-right', 'Error', 'XIcon', error)
          this.$store.commit('app/SET_LOADING', false)
        }
      }
    },
    async saveNewSeller(seller, sellerNew, userId, user) {
      if (seller === sellerNew) this.showToast('danger', 'top-right', 'Error', 'XIcon', 'You can\'t select the same captured')
      else if (seller === sellerNew.label) this.showToast('danger', 'top-right', 'Error', 'XIcon', 'You can\'t select the same captured')
      else {
        this.$store.commit('app/SET_LOADING', true)
        try {
          const response = await CrmService.saveNewSeller({
            sel: sellerNew.id,
            id: userId,
            user: this.currentUser.user_id,
          })
          if (response.status === 200) this.showToast('success', 'top-right', 'Success', 'CheckIcon', 'Se actualizo satisfactoriamente')
          else return
          // eslint-disable-next-line no-param-reassign
          user.seller = user.sellerNew.label
          // eslint-disable-next-line no-param-reassign
          user.sellerNew = user.seller
          // eslint-disable-next-line no-param-reassign
          user.editSeller = false
          this.$store.commit('app/SET_LOADING', false)
        } catch (error) {
          this.showToast('danger', 'top-right', 'Error', 'XIcon', error)
          this.$store.commit('app/SET_LOADING', false)
        }
      }
    },
    async saveNewFee(fee, feeNew, userId, user) {
      if (fee === feeNew) this.showToast('danger', 'top-right', 'Error', 'XIcon', 'You can\'t select the same captured')
      else {
        this.$store.commit('app/SET_LOADING', true)
        try {
          const response = await CrmService.saveNewFee({
            fee: feeNew,
            id: userId,
            user: this.currentUser.user_id,
          })
          if (response.status === 200) this.showToast('success', 'top-right', 'Success', 'CheckIcon', 'Se actualizo satisfactoriamente')
          else return
          // eslint-disable-next-line no-param-reassign
          user.fee = user.feeNew
          // eslint-disable-next-line no-param-reassign
          user.feeNew = user.fee
          // eslint-disable-next-line no-param-reassign
          user.editFee = false
          this.$store.commit('app/SET_LOADING', false)
        } catch (error) {
          this.showToast('danger', 'top-right', 'Error', 'XIcon', error)
          this.$store.commit('app/SET_LOADING', false)
        }
      }
    },
  },
}
</script>

<style scoped>

</style>
