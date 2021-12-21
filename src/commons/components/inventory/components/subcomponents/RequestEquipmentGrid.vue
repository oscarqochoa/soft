<template>
  <div>
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
          <span class="text-muted"
            >Showing {{ startPage }} to {{ toPage }} of
            {{ totalData }} entries</span
          >
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
            :total-rows="totalData"
            :per-page="perPage"
            first-number
            last-number
            class="mb-0 mt-1 mt-sm-0"
            prev-class="prev-item"
            next-class="next-item"
          >
            <template #prev-text>
              <feather-icon icon="ChevronLeftIcon" size="18" />
            </template>
            <template #next-text>
              <feather-icon icon="ChevronRightIcon" size="18" />
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
            :options="perPageOptions"
            :clearable="false"
            class="per-page-selector d-inline-block mx-50"
          />
          <label class="mr-2">entries</label>
          <feather-icon
            class="cursor-pointer"
            icon="RefreshCcwIcon"
            size="20"
            @click="resetSearch"
          />
        </b-col>
        <!-- Search -->
        <b-col cols="12" md="6">
          <div class="d-flex align-items-end justify-content-end">
            <b-form-group label="From" label-for="from" class="mb-md-0 mb-2">
              <b-form-datepicker
                class="per-page-datepicker d-inline-block mx-50"
                id="from"
                :date-format-options="{
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                }"
                v-model="fromToObject.from"
              />
            </b-form-group>
            <!-- <label>{{filter.label}}</label> -->

            <b-form-group label="To" label-for="to" class="mb-md-0 mb-2">
              <b-form-datepicker
                class="per-page-datepicker d-inline-block mx-50"
                id="to"
                :date-format-options="{
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                }"
                v-model="fromToObject.to"
              />
            </b-form-group>
            <!-- <label>{{filter.label}}</label> -->

            <b-button
              variant="primary"
              class="button-top"
              @click="$refs.refClientsList.refresh()"
            >
              <div class="d-flex">
                <span class="mr-50"
                  ><feather-icon icon="FilterIcon" size="15"
                /></span>

                <span class="text-nowrap">{{ "Search" }}</span>
              </div>
            </b-button>
          </div>
        </b-col>
      </b-row>
    </div>
    <b-table
      small
      
      :api-url="'/inventory/search-request-equipments'"
      ref="refClientsList"
      :items="myProvider"
      :fields="arrayColumns"
      primary-key="id"
      table-class="text-nowrap"
      responsive="sm"
      show-empty
      sticky-header="50vh"
      :sort-desc.sync="sortDesc"
      :current-page="currentPage"
      :per-page="perPage"
    >
      <template #table-busy>
        <div class="text-center text-primary my-2">
          <b-spinner class="align-middle mr-1"></b-spinner>
          <strong>Loading ...</strong>
        </div>
      </template>
      <template #cell(programs_to_install)="data">
        <div>
          <ul id="v-for-object" class="demo">
            <li v-for="value in data.item.programs_to_install" :key="value">
              {{ value }}
            </li>
          </ul>
        </div>
      </template>
      <template #cell(commentary)="data">
        <b-form-textarea
          id="textarea"
          v-model="data.item.commentary"
          placeholder="Argue Something ..."
          rows="2"
          max-rows="2"
          class="input-background-white"
          disabled
        ></b-form-textarea>
      </template>
      <template #cell(status)="data">
        <p
          :style="
            data.item.status == 'APPROVED'
              ? 'color:#00CC00'
              : data.item.status == 'DISAPPROVED'
              ? 'color: #FF0000'
              : 'color: rgb(255 177 0)'
          "
        >
          {{ data.item.status }}
        </p>
      </template>
      <template #cell(created_at)="data">
        {{ data.item.created_by }}
        <br />
        {{ data.item.created_at | myGlobalDay }}
      </template>
      <template #cell(tracking)="data">
        <div>
          <b-button
            class="btn-sm"
            variant="light"
            @click="openModalTrackingRequest(data.item.id)"
          >
            <span>TRACKING</span>
          </b-button>
        </div>
      </template>
    </b-table>
    <modal-view-tracking-request
      v-if="modalTrackingRequest"
      :modalTrackingRequest="modalTrackingRequest"
      :requestId="requestId"
      :global="global"
      @closeTrackingRequest="closeModalTrackingRequest"
    ></modal-view-tracking-request>
  </div>
</template>

<script>
import vSelect from "vue-select";
import ModalViewTrackingRequest from "../../modal/ModalViewTrackingRequest.vue"
export default {
  props: {
    global: {
      type: Object,
    },
    module: {
      type: [Number, String],
    },
    statusEquipment: {
      type: [Number, String],
    },
  },
  components: {
    vSelect,
    ModalViewTrackingRequest,
  },
  data() {
    return {
      startPage: "",
      toPage: "",
      totalData: "",
      currentPage: 1,
      perPage: 10,
      perPageOptions: [10, 25, 50, 100],
      fromToObject: {
        from: null,
        to: null,
      },
      arrayColumns: [
        {
          key: "equipment",
          label: "Equipment",
          class: "text-left",
          sortable: false,
        },
        {
          key: "cant",
          label: "Quantity",
          class: "text-left",
          sortable: false,
        },
        {
          key: "name_operator",
          label: "Assign To ",
          class: "text-left",
          sortable: false,
        },
        {
          key: "programs_to_install",
          label: "Programs to Install",
          class: "text-left",
          sortable: false,
        },
        {
          key: "commentary",
          label: "Comment",
          class: "text-left",
          sortable: false,
        },
        {
          key: "status",
          label: "Status",
          class: "text-left",
          sortable: true,
        },
        {
          key: "created_at",
          label: "Created By",
          class: "text-left",
          sortable: true,
        },
        {
          key: "tracking",
          label: "Tracking",
          class: "text-left",
        },
        {
          key: "actions",
          label: "Actions",
          class: "text-left",
        },
      ],
      modalTrackingRequest: false,
      requestId:"",
      sortDesc: true,
    };
  },
  methods: {
    resetSearch() {
      this.fromToObject.from = null;
      this.fromToObject.to = null;
      this.$refs.refClientsList.refresh();
    },
    myProvider(ctx) {
      const promise = amgApi.post(`${ctx.apiUrl}?page=${ctx.currentPage}`, {
        from: this.fromToObject.from == "" ? null : this.fromToObject.from,
        to: this.fromToObject.to == "" ? null : this.fromToObject.to,
        perpage: ctx.perPage,
        order: ctx.sortBy == "" ? "created_at" : ctx.sortBy,
        orderby: ctx.sortDesc == 1 ? "desc" : "asc",
        module_id: this.module,
        statusRequest: null,
        // statusRequest: this.filters[0].model,
      });
      // Must return a promise that resolves to an array of items
      return promise.then((data) => {
        // Pluck the array of items off our axios response
        const items = data.data.data;
        this.startPage = data.data.from;
        this.current_page = data.data.current_page;
        this.perpage = data.data.per_page;
        this.next_page = this.startPage + 1;
        this.end_page = data.data.last_page;
        this.totalData = data.data.total;
        this.toPage = data.data.to;
        // Must return an array of items or an empty array if an error occurred
        return items || [];
      });
    },
    openModalTrackingRequest(requestId) {
      this.requestId = requestId;
      this.modalTrackingRequest = true;
    },
    closeModalTrackingRequest() {
      this.modalTrackingRequest = false;
    },
  },
};
</script>


<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
.per-page-datepicker {
  width: 180px;
}
td.div {
  width: 100% !important;
}
@media (max-width: 1024) {
  .column-table {
    display: flex;
    flex-direction: column;
  }
  .button-top {
    margin-bottom: 22px;
  }
}

@media (max-width: 740px) {
  .per-page-datepicker {
    width: 110px;
  }
  .button-top {
    margin-bottom: 22px;
  }
}
.b-calendar-grid-caption {
  background: transparent !important;
}
</style>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
@import "@core/scss/vue/libs/vue-sweetalert.scss";
</style>

