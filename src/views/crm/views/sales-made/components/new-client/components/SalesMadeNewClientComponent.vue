<template>
  <div>
    <b-row>
      <b-col>
        <b-button
          class="mr-2"
          size="sm"
          @click="$refs['new-client-done-table'].refresh()"
        >
          <b-icon icon="arrow-repeat" />
        </b-button>
        <b-button
          size="sm"
          variant="success"
        >
          <b-icon
            icon="chat-text-fill"
          /> Send SMS
        </b-button>
      </b-col>
      <b-col>
        <b-form-input
          v-model="filter.text"
          placeholder="Search by name"
        />
      </b-col>
      <b-col>
        <b-button
          size="sm"
          variant="warning"
          @click="swapSearch"
        >
          <div v-if="basicSearch">
            Advanced Search
            <b-icon icon="caret-right-fill" />
          </div>
          <div v-else>
            <b-icon icon="caret-left-fill" />
            Basic Search
          </div>
        </b-button>
      </b-col>
      <b-col>
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          aria-controls="new-client-done-table"
          first-number
          last-number
        />
      </b-col>
      <b-col cols="1">
        <b-form-input
          v-model="perPage"
          type="number"
          min="10"
          max="100"
        />
      </b-col>
    </b-row>
    <b-form-group v-if="!basicSearch">
      <b-form-row>
        <b-col>
          <label>From:</label>
          <b-form-datepicker
            id="from-date-picker"
            v-model="filter.from"
            locale="en"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
            placeholder="From"
            size="sm"
          />
        </b-col>
        <b-col>
          <label>To:</label>
          <b-form-datepicker
            id="to-date-picker"
            v-model="filter.to"
            locale="en"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
            placeholder="To"
            size="sm"
          />
        </b-col>
        <b-col>
          <label>Captured By:</label>
          <b-form-select
            v-model="filter.captured"
            :options="captured"
            size="sm"
          />
        </b-col>
        <b-col>
          <label>Seller:</label>
          <b-form-select
            v-model="filter.seller"
            :options="sellers"
            size="sm"
          />
        </b-col>
        <b-col>
          <label>Source name:</label>
          <b-form-select
            v-model="filter.source"
            :options="sources"
            size="sm"
          />
        </b-col>
        <b-col>
          <label>Status:</label>
          <b-form-select
            v-model="filter.status"
            :options="status"
            size="sm"
          />
        </b-col>
        <b-col>
          <label>Services:</label>
          <b-form-select
            v-model="filter.program"
            :options="programs"
            size="sm"
          />
        </b-col>
        <b-col>
          <label>IP:</label>
          <b-form-select
            v-model="filter.stip"
            :options="stip"
            size="sm"
          />
        </b-col>
        <b-col>
          <label>ST/AD:</label>
          <b-form-select
            v-model="filter.state"
            :options="sts"
            size="sm"
          />
        </b-col>
        <b-col
          class="flexible"
          cols="0"
        >
          <b-button
            size="sm"
            variant="warning"
            @click="resetFilter"
          >
            <b-icon icon="x" />
          </b-button>
        </b-col>
      </b-form-row>
    </b-form-group>
    <b-table
      id="new-client-done-table"
      ref="new-client-done-table"
      :busy.sync="isBusy"
      small
      class="text-center"
      :items="myProvider"
      :fields="filteredFields"
      :per-page="perPage"
      :current-page="currentPage"
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
        >
          <!--
          :variant="
            (data.item.program === 'Boost Credit') ? 'outline-info' :
            (data.item.program === 'Business') ? 'outline-primary' :
            (data.item.program === 'Credit Experts') ? 'outline-success' :
            (data.item.program === 'Tax Research') ? 'outline-warning' :
            (data.item.program === 'Debt Solution') ? 'outline-dark' :
            (data.item.program === 'Specialist') ? 'outline-secondary' :
            (data.item.program === 'General Support') ? 'outline-danger' :
            'outline-info'
          "
          -->
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
              <small class="text-primary font-weight-bold"> $ {{ getComision(data.item.commission, 0) }} </small>
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
              <small class="text-primary font-weight-bold"> $ {{ getComision(data.item.commission, 1) }} </small>
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
          icon="list-check"
          :variant="
            (data.item.trackings) ? 'success': 'muted' "
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
          <b-icon icon="arrow-left-square-fill" variant="primary"></b-icon>
        </b-btn>
      </template>
    </b-table>
    <b-row>
      <b-col style="display: flex; justify-content: flex-end">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          aria-controls="new-client-done-table"
          first-number
          last-number
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CrmService from '@/views/crm/services/crm.service'

export default {
  name: 'SalesMadeNewClientComponent',
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
      fields: [
        {
          key: 'selected',
          label: '',
          sortable: false,
        },
        {
          key: 'client',
          sortable: true,
          label: 'Client',
        },
        {
          key: 'program',
          sortable: false,
          label: 'Program',
        },
        {
          key: 'captured',
          sortable: false,
          label: 'Captured By',
        },
        {
          key: 'seller',
          sortable: false,
          label: 'Seller',
        },
        {
          key: 'fee',
          sortable: false,
          label: 'Fee ($)',
        },
        {
          key: 'initial_amount',
          sortable: false,
          label: 'IP',
        },
        {
          key: 'contract_fee_status',
          sortable: false,
          label: 'CF',
        },
        {
          key: 'notes_status',
          sortable: false,
          label: 'NT',
        },
        {
          key: 'trackings',
          sortable: false,
          label: 'TK',
        },
        {
          key: 'files',
          sortable: false,
          label: 'FI',
        },
        {
          key: 'status',
          sortable: false,
          label: 'ST',
        },
        {
          key: 'creates',
          sortable: true,
          label: 'Created',
        },
        {
          key: 'approved',
          sortable: true,
          label: 'Approved',
        },
        {
          key: 'sms',
          sortable: false,
          label: 'SMS',
        },
        {
          key: 'url',
          sortable: false,
          label: 'Url',
        },
        {
          key: 'done',
          sortable: false,
          label: 'Done',
        },
      ],
      totalRows: 0,
      currentPage: 1,
      perPage: 10,
      basicSearch: true,
      selected: null,
      filter: {
        from: null,
        to: null,
        text: '',
        seller: null,
        captured: null,
        program: null,
        source: '',
        state: null,
        stip: null,
        status: null,
      },
    }
  },
  async created() {
    try {
      await this.$store.dispatch('crm-store/getSellers')
      await this.$store.dispatch('crm-store/getCaptured')
      await this.$store.dispatch('crm-store/getPrograms')
      await this.$store.dispatch('crm-store/getSources')
      await this.$store.dispatch('crm-store/getStates')
    } catch (e) {
      console.error(e)
    }
  },
  computed: {
    ...mapState({
      sellers: state => state['crm-store'].sellersCrm,
      captured: state => state['crm-store'].capturedCrm,
      // TODO HACERLO GLOBAL
      programs: state => state['crm-store'].programs,
      sources: state => state['crm-store'].sources,
      sts: state => state['crm-store'].states,
      stip: state => state['crm-store'].statusip,
      status: state => state['crm-store'].status,
    }),
    filteredFields() {
      return this.fields.filter(field => this.inputFields.includes(field.key))
    },
  },
  methods: {
    async myProvider(ctx) {
      try {
        console.log(ctx)
        this.isBusy = true
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
        },
        ctx.currentPage, ctx.perPage)
        this.isBusy = false
        if (this.totalRows !== data.total) this.totalRows = data.total
        console.log(data)
        return data.data
      } catch (e) {
        this.isBusy = false
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
    getComision(comission, id) {
      const data = JSON.parse(comission)
      return data[id].commission
    },
    resetFilter() {
      this.filter.from = null
      this.filter.to = null
      this.filter.text = ''
      this.filter.seller = null
      this.filter.captured = null
      this.filter.program = null
      this.filter.source = ''
      this.filter.state = null
      this.filter.stip = null
      this.filter.status = null
    },
    swapSearch() {
      this.resetFilter()
      this.basicSearch = !this.basicSearch
    },
  },
}
</script>

<style scoped>
.flexible{
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
}
</style>
