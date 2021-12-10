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
              v-model="paginate.currentPage"
              :total-rows="totalRows"
              :per-page="paginate.perPage"
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
              v-model="paginate.perPage"
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
                    basicSearch ? "Advanced Search" : "Basic Search"
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
                  <v-select
                    v-model="filter.captured"
                    :options="captured"
                    size="sm"
                    :reduce="(option) => option.id"
                  />
                </b-col>
                <b-col>
                  <label>Seller:</label>
                  <v-select
                    v-model="filter.seller"
                    :options="sellers"
                    size="sm"
                    :reduce="(option) => option.id"
                  />
                </b-col>
                <b-col v-if="!annulled">
                  <label>Source name:</label>
                  <v-select
                    v-model="filter.source"
                    :options="sources"
                    size="sm"
                    :reduce="(option) => option.id"
                  />
                </b-col>
                <b-col>
                  <label>Status:</label>
                  <v-select
                    v-model="filter.status"
                    :options="status"
                    size="sm"
                    :reduce="(option) => option.id"
                  />
                </b-col>
                <b-col>
                  <label>Services:</label>
                  <v-select
                    v-model="filter.program"
                    :options="programs"
                    size="sm"
                    :reduce="(option) => option.id"
                  />
                </b-col>
                <b-col>
                  <label>IP:</label>
                  <v-select
                    v-model="filter.stip"
                    :options="stip"
                    size="sm"
                    :reduce="(option) => option.id"
                  />
                </b-col>
                <b-col v-if="!annulled">
                  <label>ST/AD:</label>
                  <v-select
                    v-model="filter.state"
                    :options="sts"
                    size="sm"
                    :reduce="(option) => option.id"
                  />
                </b-col>
              </b-form-row>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
      <div class="table-responsive">
        <slot name="table" />
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
              v-model="paginate.currentPage"
              :total-rows="totalRows"
              :per-page="paginate.perPage"
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

export default {
  name: 'SalesMadeNewClientComponent',
  components: {
    vSelect,
  },
  props: {
    totalRows: { required: false, type: Number },
    filter: { required: true, type: Object },
    startPage: { required: false, type: Number },
    toPage: { required: false, type: Number },
    paginate: { required: true, type: Object },
    annulled: { required: false, type: Boolean, default: false },
  },
  data() {
    return {
      basicSearch: true,
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
  },
  methods: {
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
      this.$emit('reload')
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
