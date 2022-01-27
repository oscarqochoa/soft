<template>
  <div>
    <p>{{ statusUpdateRequestEquip }}</p>
    <filter-slot
      :filter="filter"
      :filter-principal="filterPrincipal"
      :no-visible-principal-filter="true"
      :total-rows="totalRows"
      :paginate="paginate"
      :start-page="startPage"
      :to-page="toPage"
      :send-multiple-sms="false"
      @reload="$refs['refClientsList'].refresh()"
    >
      <b-table
        v-scrollbar
        small
        slot="table"
        no-provider-filtering
        :api-url="'/logistics/inventory/search-request-equipment'"
        ref="refClientsList"
        :items="myProvider"
        :fields="arrayColumns"
        primary-key="id"
        table-class="text-nowrap"
        responsive="sm"
        show-empty
        sticky-header="70vh"
        :sort-desc.sync="sortDesc"
        :current-page="paginate.currentPage"
        :per-page="paginate.perPage"
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
          <div class="tdbreak">
              {{ data.item.commentary }}
          </div>
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
    </filter-slot>

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
import ModalViewTrackingRequest from "../../modal/ModalViewTrackingRequest.vue";
import FilterSlot from "@/views/crm/views/sales-made/components/slots/FilterSlot.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
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
    FilterSlot,
  },
  data() {
    return {
      totalRows: 0,
      paginate: {
        currentPage: 1,
        perPage: 10,
      },
      filterPrincipal: {
        type: "input",
        inputType: "text",
        placeholder: "Client...",
        model: "",
      },
      startPage: null,
      toPage: null,
      totalData: "",
      // currentPage: 1,
      // perPage: 10,
      perPageOptions: [10, 25, 50, 100],
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
      requestId: "",
      sortDesc: true,
      filter: [
        {
          type: "datepicker",
          margin: true,
          showLabel: true,
          label: "From",
          placeholder: "Date",
          class: "font-small-3",
          model: null,
          locale: "en",
          dateFormatOptions: {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          },
          cols: 6,
        },
        {
          type: "datepicker",
          margin: true,
          showLabel: true,
          label: "To",
          placeholder: "Date",
          class: "font-small-3",
          model: null,
          locale: "en",
          dateFormatOptions: {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          },
          cols: 6,
        },
      ],
    };
  },
  computed: {
    ...mapGetters("inventory-store", ["updateRequestEquip"]),
    statusUpdateRequestEquip() {
      if (this.updateRequestEquip) {
        this.$refs.refClientsList.refresh();
        this.UpdateRequEquip();
      }
    },
  },
  methods: {
    ...mapActions("inventory-store", ["UPDATE_REQUEST_EQUIPMENT"]),
    UpdateRequEquip() {
      if (this.updateRequestEquip) {
        this.UPDATE_REQUEST_EQUIPMENT(false);
      }
    },
    resetSearch() {
      this.fromToObject.from = null;
      this.fromToObject.to = null;
      this.$refs.refClientsList.refresh();
    },
    myProvider(ctx) {
      const promise = amgApi.post(`${ctx.apiUrl}?page=${ctx.currentPage}`, {
        from: this.filter[0].model == "" ? null : this.filter[0].model,
        to: this.filter[1].model == "" ? null : this.filter[1].model,
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
        this.totalRows = data.data.total;
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
.tdbreak {
  word-break: break-all;
  // width: 10em;
}
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

