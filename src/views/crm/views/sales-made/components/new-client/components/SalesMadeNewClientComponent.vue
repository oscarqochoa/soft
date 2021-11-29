<template>
  <div>
    <b-card
      no-body
      class="mb-1"
    >
      <div class="mx-2 mb-2 mt-2">
        <b-row>
          <b-col
            cols="12"
            sm="6"
            class="
                d-flex
                align-items-center
                justify-content-center justify-content-sm-start
              "
          >
            <span
              class="text-muted"
            >Showing {{ startPage }} to {{ toPage }} of
              {{ totalRows }} entries</span>
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="
                d-flex
                align-items-center
                justify-content-center justify-content-sm-end
              "
          >
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
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
              :options="[10, 25, 50, 100]"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
            <label class="mr-2">entries</label>
            <feather-icon
              class="cursor-pointer"
              icon="RefreshCcwIcon"
              size="20"
              @click="resetFilter"
            />
          </b-col>
          <!-- Search -->
          <b-col
            cols="12"
            md="6"
          >
            <div
              class="
                d-flex
                align-items-center
                justify-content-end
                align-items-center
              "
            >
              <b-form-input
                v-model="filter.text"
                class="d-inline-block mr-1"
                placeholder="Client..."
                debounce="200"
              />
              <b-button
                variant="primary"
                @click="basicSearch = !basicSearch"
              >
                <div class="d-flex justify-content-between">
                  <span
                    class="mr-50"
                  ><feather-icon
                    icon="FilterIcon"
                    size="15"
                  /></span>

                  <span class="text-nowrap">{{
                    basicSearch ? "Basic Search" : "Advanced Search"
                  }}</span>
                </div>
              </b-button>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="mr-2 ml-2 mb-2">
        <b-row>
          <b-col>
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
              </b-form-row>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
      <div class="table-responsive">
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
              <b-icon
                  icon="arrow-left-square-fill"
                  variant="primary"
              />
            </b-btn>
          </template>
        </b-table>
      </div>
      <div class="mx-2 mb-2 mt-2">
        <b-row>
          <b-col
              cols="12"
              sm="6"
              class="
                d-flex
                align-items-center
                justify-content-center justify-content-sm-start
              "
          >
            <span
                class="text-muted"
            >Showing {{ startPage }} to {{ toPage }} of
              {{ totalRows }} entries</span>
          </b-col>
          <!-- Pagination -->
          <b-col
              cols="12"
              sm="6"
              class="
                d-flex
                align-items-center
                justify-content-center justify-content-sm-end
              "
          >
            <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
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
import { mapState } from 'vuex'
import vSelect from 'vue-select'
import CrmService from '@/views/crm/services/crm.service'
import dataFields from './fields.data'
import dataFilters from './filters.data'

export default {
  name: 'SalesMadeNewClientComponent',
  components: {
    vSelect,
  },
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
      currentPage: 1,
      perPage: 10,
      basicSearch: true,
      selected: null,
      filter: dataFilters,
      startPage: null,
      toPage: null,
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

<style lang="scss" scoped>
.flexible{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
}
.per-page-selector {
  width: 90px;
}
td.div {
  width: 100% !important;
}
@media (max-width: 960px) {
  .column-table {
    display: flex;
    flex-direction: column;
  }
}
</style>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
@import "@core/scss/vue/libs/vue-sweetalert.scss";
</style>
