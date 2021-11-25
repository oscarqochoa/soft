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
      :busy.sync="isBusy"
      id="new-client-done-table"
      ref="new-client-done-table"
      small
      class="text-center"
      :items="myProvider"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      :filter="filter"
    >
      <template #table-busy>
        <div class="text-center text-primary my-2">
          <b-spinner class="align-middle mr-1"></b-spinner>
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
          <small>{{ data.item.state }}</small>
        </p>
        <p> <small> {{ data.item.sourcesname }} </small></p>
      </template>
      <template v-slot:cell(program)="data">
        <b-button
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
          size="sm"
        >
          {{ data.item.program }}
        </b-button>
      </template>
      <template v-slot:cell(captured)="data">
        <p> {{ data.item.captured }}</p>
        <p v-if="data.item.commission">
          <small class="text-primary font-weight-bold"> $ {{ getComision(data.item.commission, 0) }} </small>
        </p>
      </template>
      <template v-slot:cell(seller)="data">
        <p> {{ data.item.seller }}</p>
        <p v-if="data.item.commission">
          <small class="text-primary font-weight-bold"> $ {{ getComision(data.item.commission, 1) }} </small>
        </p>
      </template>
      <template v-slot:cell(fee)="data">
        <span> $ {{ data.item.fee }} </span>
      </template>
      <template v-slot:cell(initial_amount)="data">
        <b-icon
          v-if="data.item.initial_amount === '0.00'"
          icon="wallet2"
        />
        <h6
          v-else
          class="text-success font-weight-bold"
        >
          $ {{ data.item.initial_amount }}
        </h6>
      </template>
      <template v-slot:cell(contract_fee_status)="data">
        <b-icon
          icon="file-text"
          :variant="
            (data.item.contract_fee_status === 0) ? 'muted' :
            (data.item.contract_fee_status === 1) ? 'success' :
            'danger' "
        />
      </template>
      <template v-slot:cell(notes_status)="data">
        <b-icon
          icon="chat-square-text-fill"
          :variant="
            (data.item.notes_status === 0) ? 'muted':
            (data.item.notes_status === 1) ? 'success' :
            'danger' "
        />
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
  name: 'NewClientDoneComponent',
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
      ],
      totalRows: 0,
      currentPage: 1,
      perPage: 10,
      basicSearch: true,
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
      ],
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
      status: state => state['crm-store'].status
    }),
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
          done: 1,
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
