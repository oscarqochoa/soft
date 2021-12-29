<template>
  <div>
    <b-card
      no-body
      class="mb-1"
    >
      <b-sidebar
        id="sidebar-right"
        right
        backdrop
        bg-variant="white"
        sidebar-class="sidebar-lg"
        lazy
      >
        <template #header>
          <b-container>
            <b-row>
              <h3>Advanced Search</h3>
            </b-row>
          </b-container>
        </template>
        <b-container>
          <filters-component
            :filters="filter"
          />
        </b-container>
        <template #footer>
          <b-container>
            <b-row class="d-flex align-items-center justify-content-between p-1">
              <b-button
                v-b-toggle.sidebar-right
                variant="outline-danger"
                class="hover-close"
              >
                Close
              </b-button>
              <b-button
                v-b-toggle.sidebar-right
                variant="primary"
                @click="sideBarSearch"
              >
                Search
              </b-button>
            </b-row>
          </b-container>
        </template>
      </b-sidebar>
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
            <b-button
              v-if="sendMultipleSms"
              variant="success"
              class="ml-1"
              @click="$emit('sendMultipleSms')"
            >
              <feather-icon
                icon="MessageCircleIcon"
                class="mr-50"
              />Send SMS
            </b-button>
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
              <b-input-group v-if="!noVisiblePrincipalFilter" class="mr-1">
                <b-form-input
                  v-if="filterPrincipal.type === 'input'"
                  v-model="filterPrincipal.model"
                  :type="filterPrincipal.inputType"
                  :placeholder="filterPrincipal.placeholder"
                  :class="filterPrincipal.class"
                  @keyup.enter="$emit('reload')"
                />
                <b-input-group-append>
                  <b-button
                    variant="primary"
                    @click="$emit('reload')"
                  >
                    <feather-icon icon="SearchIcon" />
                  </b-button>
                </b-input-group-append>
              </b-input-group>
              <b-button
                v-b-toggle.sidebar-right
                variant="primary"
              >
                <div class="d-flex justify-content-between">
                  <feather-icon
                    icon="FilterIcon"
                    size="15"
                  />
                </div>
              </b-button>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="table-responsive">
        <slot name="table" />
      </div>
      <div class="mx-2 mb-2 mt-2">
        <b-row>
          <b-col
           
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
          <slot name="footer"></slot>
          <b-col
            
            
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
import vSelect from 'vue-select'
import { mapGetters } from 'vuex'

export default {
  name: 'SalesMadeNewClientComponent',
  components: {
    vSelect,
  },
  props: {
    filter: { required: true, type: Array },
    totalRows: { required: false, type: Number },
    paginate: { required: true, type: Object },
    startPage: { required: false, type: Number },
    toPage: { required: false, type: Number },
    filterPrincipal: { required: true, type: Object },
    sendMultipleSms: { required: false, default: false },
    noVisiblePrincipalFilter:{ required: false, default: false },
  },
  computed: {
    ...mapGetters({
      skin: 'appConfig/skin',
    }),
  },
  created() {
    this.filter.map(fil => {
      fil.model = null
    })
    this.filterPrincipal.model = ''
  },
  methods: {
    resetFilter() {
      this.filter.map(fil => {
        fil.model = null
      })
      this.filterPrincipal.model = ''
      this.$emit('reload')
    },
    sideBarSearch() {
      this.filterPrincipal.model = ''
      this.$emit('reload')
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
.hover-close{
  transition: 300ms;
}
.hover-close:hover{
  background-color: #FF3B19 !important;
  color: white !important;
}
@media (max-width: 960px) {
  .column-table {
    display: flex;
    flex-direction: column;
  }
}
</style>
