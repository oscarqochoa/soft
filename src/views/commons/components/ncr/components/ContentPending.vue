<template>
  <div>
    <filter-slot
      v-scrollbar
      :filter="filter"
      :filter-principal="filterPrincipal"
      :total-rows="totalRows"
      :paginate="paginate"
      :start-page="startPage"
      :to-page="toPage"
      :send-multiple-sms="false"
      @reload="$refs['refClientsList'].refresh()"
    >
      <b-table
        slot="table"
        no-provider-filtering
        :api-url="'/ncr-leads-search-pending-crm'"
        ref="refClientsList"
        :items="myProvider"
        :fields="arrayColumns"
        primary-key="id"
        table-class="text-nowrap"
        responsive="sm"
        show-empty
        sticky-header="50vh"
        :current-page="paginate.currentPage"
        :per-page="paginate.perPage"
      >
        <template #table-busy>
          <div class="text-center text-primary my-2">
            <b-spinner class="align-middle mr-1"></b-spinner>
            <strong>Loading ...</strong>
          </div>
        </template>
        <template #cell(lead_name)="data">
          <div
            class="d-flex flex-column justify-content-start align-items-start "
          >
            <a class="select-lead-name"
              href="http://www.google.com"
              target="_blank"
            >
              {{ data.item.lead_name }} link</a
            >
            <!-- <a href=http://www.example.com style="text-decoration-line: underline">Example</a>     -->
          </div>
        </template>
        <template #cell(seller_name)="data">
          <div
            class="d-flex flex-column justify-content-start align-items-start"
          >
            <span>
              {{ data.item.seller_name }}
            </span>
            <div>{{ data.item.date | myGlobalDay }}</div>
            <!-- <span>{{ data.item.date | myGlobalDay }}</span> -->
          </div>
        </template>
        <template #cell(question_id)="data">
          <feather-icon
            icon="HelpCircleIcon"
            v-if="data.item.question_id == null"
            class="font-medium-4"
            style="cursor: pointer; font-size: 18px"
            @click="
              openModalQuestionnaire(
                data.item.score_id,
                data.item.lead_name,
                data.item.status_id,
                data.item.question_id
              )
            "
          ></feather-icon>
          <feather-icon
            v-else
            class="font-medium-4"
            style="cursor: pointer; font-size: 18px; color: green"
            icon="HelpCircleIcon"
            @click="
              openModalQuestionnaire(
                data.item.score_id,
                data.item.lead_name,
                data.item.status_id,
                data.item.question_id
              )
            "
          ></feather-icon>
        </template>
        <template #cell(status)="data">
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <span
              class="ncr-leads-status-successful"
              v-if="data.item.status_id == 1"
              style="background-color: #38c172"
              >{{ data.item.status }}</span
            >
            <span
              class="ncr-leads-status-successful"
              v-else-if="data.item.status_id == 2"
              style="background-color: #3490dc"
              >{{ data.item.status }}</span
            >
            <span
              class="ncr-leads-status-successful"
              v-else-if="data.item.status_id == 3"
              style="background-color: #e13232"
              >{{ data.item.status }}</span
            >
            <span
              class="ncr-leads-status-successful"
              v-else-if="data.item.status_id == 4"
              style="background-color: #ffd46a"
              >{{ data.item.status }}</span
            >
            <span
              class="ncr-leads-status-successful"
              v-else-if="data.item.status_id == 5"
              style="background-color: #ffd46a"
              >{{ data.item.status }}</span
            >
            <span
              class="ncr-leads-status-successful"
              v-else-if="data.item.status_id == 6"
              style="background-color: #e13232"
              >{{ data.item.status }}</span
            >
            <span
              class="ncr-leads-status-successful"
              v-else-if="data.item.status_id == 7"
              style="background-color: #eabc73"
              >{{ data.item.status }}</span
            >
            <span
              class="ncr-leads-status-successful"
              v-else-if="data.item.status_id == 8"
              style="background-color: #eabc73"
              >{{ data.item.status }}</span
            >
            <span
              class="ncr-leads-status-successful"
              v-else-if="data.item.status_id == 9"
              style="
                background-color: #e13232;
                color: white;
                border-radius: 30px;
                padding-left: 15px;
                padding-right: 15px;
              "
              >{{ data.item.status }}</span
            >

            <span
              class="ncr-leads-status-successful"
              v-else-if="data.item.status_id == 10"
              style="background-color: #e13232"
              >{{ data.item.status }}</span
            >
          </div>
        </template>
        <template #cell(tracking)="data">
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <feather-icon
              icon="ListIcon"
              class="font-medium-4"
              style="cursor: pointer"
              @click="
                openTrackingStatus(data.item.score_id, data.item.lead_name)
              "
            ></feather-icon>
          </div>
        </template>
      </b-table>
    </filter-slot>
    <modal-tracking-status
      v-if="modalTrackingStatus"
      :modalTrackingStatus="modalTrackingStatus"
      :score_id="score_id"
      :lead_name="lead_name"
      @closeTrackingStatus="closeTrackingStatus"
    ></modal-tracking-status>
    <modal-questionnaire
      v-if="modalQuestionnaire"
      :modalQuestionnaire="modalQuestionnaire"
      :global="currentUser"
      :score_id="score_id"
      :lead_name="lead_name"
      :modul="$route.meta.module"
      :question_id="question_id"
      :status_id="status_id"
      @closeModalQuestionnaire="closeModalQuestionnaire"
      @updateGrid="updateGrid"
    ></modal-questionnaire>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import vSelect from "vue-select";
import ModalTrackingStatus from "../modal/ModalTrackingStatus.vue";
import ModalQuestionnaire from "../modal/ModalQuestionnaire.vue";
import FilterSlot from "@/views/crm/views/sales-made/components/slots/FilterSlot.vue";
import ncrmixin from '../mixin'

export default {
  mixins: [ncrmixin],
  components: { vSelect, ModalTrackingStatus, ModalQuestionnaire, FilterSlot },
  props: {},
  data() {
    return {
      totalRows: 0,
      paginate: {
        currentPage: 1,
        perPage: 10,
      },
      startPage: null,
      toPage: null,
      totalData: "",
      perPageOptions: [10, 25, 50, 100],
      filterPrincipal: {
        type: "input",
        inputType: "text",
        placeholder: "Client...",
        model: "",
      },
      arrayColumns: [
        {
          key: "lead_name",
          label: "Lead Name",
          class: "text-left",
          sortable: false,
        },
        {
          key: "seller_name",
          label: "Request By",
          class: "text-left",
          sortable: false,
          visible: true,
        },
        {
          key: "admin_name",
          label: "Administrador",
          class: "text-left",
          sortable: false,
          visible: true,
        },
        {
          key: "status",
          label: "Status",
          class: "text-center",
          sortable: false,
          visible: true,
        },
        {
          key: "question_id",
          label: "QU",
          class: "text-left ",
          sortable: false,
          visible: true,
        },
        {
          key: "tracking",
          label: "Tracking",
          class: "text-center",
          sortable: false,
          visible: true,
        },
      ],
      dato2: 4,
      dato1: "desc",
      sellers: [],
      seller: "",
      lead_name: "",
      score_id: "",
      modalTrackingStatus: false,
      modalQuestionnaire: false,
      question_id: "",
      status_id: "",
      filter: [
        {
          type: "select",
          margin: true,
          showLabel: true,
          label: "Seller",
          model: null,
          options: [],
          reduce: "id",
          selectText: "user_name",
          cols: 12,
        },
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
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  methods: {
    updateGrid() {
      this.$refs.refClientsList.refresh();
    },
    resetSearch() {
      this.$refs.refClientsList.refresh();
    },
    myProvider(ctx) {
      const promise = amgApi.post(`${ctx.apiUrl}?page=${ctx.currentPage}`, {
        name_text: this.filterPrincipal.model,
        date_from: this.filter[1].model,
        date_to: this.filter[2].model,
        orderby: this.dato2 == null ? 4 : this.dato2,
        order: this.dato1 == null ? "desc" : this.dato1,
        user_id: this.currentUser.user_id,
        role_id: this.currentUser.role_id,
        seller: this.filter[0].model,
        modul: this.$route.meta.module,
      });
      return promise.then((data) => {
        const items = data.data.data;
        this.startPage = data.data.from;
        this.currentPage = data.data.current_page;
        this.perPage = data.data.per_page;
        this.nextPage = this.startPage + 1;
        this.endPage = data.data.last_page;
        this.totalData = data.data.total;
        this.totalRows = data.data.total;
        this.toPage = data.data.to;
        return items || [];
      });
    },
    
    openTrackingStatus(id, lead_name) {
      this.lead_name = lead_name;
      this.score_id = id;
      this.modalTrackingStatus = true;
    },
    closeTrackingStatus() {
      this.modalTrackingStatus = false;
    },
    
    closeModalQuestionnaire() {
      this.modalQuestionnaire = false;
    },
  },
  created() {
    
  },
};
</script>

<style lang="scss" scoped>
.select-lead-name:hover {
    text-decoration-line: underline
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
  .per-page-datepicker {
    width: 100px;
  }
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
