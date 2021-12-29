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
        small
        slot="table"
        no-provider-filtering
        :api-url="'/ncr-leads-search-returned-crm'"
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
        <template #cell(lead_name)="data" >
            <div
            class="d-flex flex-column justify-content-start align-items-start"
          >  
            <a href="http://www.google.com" target="_blank"
            class="select-lead-name"> {{data.item.lead_name}} link</a>
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
        <template #cell(status)="data">
          <div
            class="d-flex flex-column justify-content-start align-items-start"
          >
            <span
              class="ncr-leads-status-successful"
              v-if="data.item.status_id == 1"
              style="
                background-color: #38c172;
                color: white;
                border-radius: 30px;
                padding-left: 15px;
                padding-right: 15px;
              "
              >{{ data.item.status }}</span
            >
            <span
              class="ncr-leads-status-successful"
              v-else-if="data.item.status_id == 2"
              style="
                background-color: #3490dc;
                color: white;
                border-radius: 30px;
                padding-left: 15px;
                padding-right: 15px;
              "
              >{{ data.item.status }}</span
            >
            <span
              class="ncr-leads-status-successful"
              v-else-if="data.item.status_id == 3"
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
              v-else-if="data.item.status_id == 4"
              style="
                background-color: #ffd46a;
                color: white;
                border-radius: 30px;
                padding-left: 15px;
                padding-right: 15px;
              "
              >{{ data.item.status }}</span
            >
            <span
              class="ncr-leads-status-successful"
              v-else-if="data.item.status_id == 5"
              style="
                background-color: #ffd46a;
                color: white;
                border-radius: 30px;
                padding-left: 15px;
                padding-right: 15px;
              "
              >{{ data.item.status }}</span
            >
            <span
              class="ncr-leads-status-successful"
              v-else-if="data.item.status_id == 6"
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
              v-else-if="data.item.status_id == 7"
              style="
                background-color: #eabc73;
                color: white;
                border-radius: 30px;
                padding-left: 15px;
                padding-right: 15px;
              "
              >{{ data.item.status }}</span
            >
            <span
              class="ncr-leads-status-successful"
              v-else-if="data.item.status_id == 8"
              style="
                background-color: #eabc73;
                color: white;
                border-radius: 30px;
                padding-left: 15px;
                padding-right: 15px;
              "
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
              style="
                background-color: #e13232;
                color: white;
                border-radius: 30px;
                padding-left: 15px;
                padding-right: 15px;
              "
              >{{ data.item.status }}</span
            >
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
        <template #cell(process_date)="data">
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
          <span :style="data.item.state_cancel == 1 ? 'color:red' : ''">{{ data.item.process_date | myGlobalDay }}</span>
          <span>{{data.item.state_cancel}}</span>
          </div>
        </template>
        <template #cell(cr)="data">
          <div >
            <a
              v-if="data.item.cr == 1"
              :href="
                'http://127.0.0.1:8000/crm/leads/report/' +
                data.item.lead_id +
                '/' +
                data.item.score_id
              "
              target="_blanck"
              style="cursor: pointer"
            >
              <img :src="assetsImg + '/images/icons/report2.ico'" />
            </a>
          </div>
        </template>
        <template #cell(route_pdf)="data">
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <a :href="data.item.route_pdf" target="_blanck">
              <img
                v-if="data.item.route_pdf"
                width="20"
                height="20"
                :src="assetsImg + '/images/icons/pdf.png'"
              />
            </a>
          </div>
        </template>
        <template #cell(attemps)="data">
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <ul style="padding-left: 0px; margin-bottom: 0px">
              <li
                v-for="(attemp, index) in JSON.parse(data.item.attemps)
                  .slice()
                  .reverse()"
                :key="index"
                style="list-style: none"
              >
                <img
                  :src="assetsImg + attemp.plataform_ico"
                  :title="attemp.plataform_name"
                />
              </li>
            </ul>
          </div>
        </template>
        <template #cell(actions)="data">
          <b-dropdown
            variant="link"
            no-caret
            :right="$store.state.appConfig.isRTL"
            v-if="data.item.status_id == 6 || data.item.status_id == 3"
          >
            <template #button-content>
              <feather-icon
                icon="MoreVerticalIcon"
                size="16"
                class="align-middle text-body"
              />
            </template>
            <b-dropdown-item
              v-if="data.item.status_id == 3"
              @click="changeStatus(data.item.score_id, 4)"
            >
              <amg-icon icon="ValidationInformationIcon" />
              <span class="align-middle ml-50"> Validate Information</span>
            </b-dropdown-item>

            <b-dropdown-item
              v-if="data.item.status_id == 3 && data.item.attemps_count < 3"
              @click="changeStatus(data.item.score_id, 5)"
            >
              <amg-icon icon="OtherSourcesIcon" />
              <span class="align-middle ml-50">Other Source (DI)</span>
            </b-dropdown-item>
            <b-dropdown-item v-if="data.item.status_id == 6" @click="changeStatus(data.item.score_id, 7)">
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Information Was Correct</span>
            </b-dropdown-item>
            <b-dropdown-item
              v-if="data.item.status_id == 6 && data.item.attemps_count < 3"
              @click="changeStatus(data.item.score_id, 8)"
            >
              <amg-icon icon="OtherSourcesIcon" />
              <span class="align-middle ml-50">Other Source (II)</span>
            </b-dropdown-item>
          </b-dropdown>
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
import ModalQuestionnaire from "../modal/ModalQuestionnaire.vue";
import ModalTrackingStatus from "../modal/ModalTrackingStatus.vue";
import FilterSlot from "@/views/crm/views/sales-made/components/slots/FilterSlot.vue";
import ncrmixin from '../mixin'
export default {
  mixins: [ncrmixin],
  components: { vSelect, ModalQuestionnaire, ModalTrackingStatus,FilterSlot },
  props: {},
  data() {
    return {
      assetsImg: process.env.VUE_APP_BASE_URL_ASSETS,
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
      currentPage: 1,
      perPage: 10,
      perPageOptions: [10, 25, 50, 100],
      
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
        {
          key: "process_date",
          label: "Proccess Date",
          class: "text-center",
          sortable: false,
          visible: true,
        },
        {
          key: "cr",
          label: "CR",
          class: "text-center",
          sortable: false,
          visible: true,
        },
        {
          key: "route_pdf",
          label: "PDF",
          class: "text-center",
          sortable: false,
          visible: true,
        },
        {
          key: "attemps",
          label: "Provider",
          class: "text-center",
          sortable: false,
          visible: true,
        },
        {
          key: "actions",
          label: "Actions",
          class: "text-center",
          sortable: false,
          visible: true,
        },
      ],
      dato2: 4,
      dato1: "desc",
      sellers: [],
      seller: "",
      modalQuestionnaire: false,
      question_id: "",
      status_id: "",
      score_id: "",
      lead_name: "",
      modalTrackingStatus: false,
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
      // Must return a promise that resolves to an array of items
      return promise.then((data) => {
        // Pluck the array of items off our axios response
        const items = data.data.data;
        this.startPage = data.data.from;
        this.currentPage = data.data.current_page;
        this.perPage = data.data.per_page;
        this.nextPage = this.startPage + 1;
        this.endPage = data.data.last_page;
        this.totalData = data.data.total;
        this.totalRows = data.data.total;
        this.toPage = data.data.to;
        if (items != null) {
          items.map((item) => {
            item.attemps_count =
              item.attemps == null ? "" : JSON.parse(item.attemps).length;
          });
        }
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
    changeStatus(score_id, status_id) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          imageUrl: "/assets/images/icons/swal/warning.svg",
          imageWidth: 70,
          showCancelButton: true,
          buttonsStyling: false,
          confirmButtonColor: "#ab9220",
          cancelButtonColor: "#8f9194",
          input: "textarea",
          confirmButtonText: "Yes",
          customClass: {
            confirmButton: "btn btn-primary mr-1",
            cancelButton: "btn btn-outline-danger  ",
          },
        })
        .then((result) => {
          if (result.value) {
            this.$store.commit("app/SET_LOADING", true);
            amgApi
              .post("/ncr-leads-change-status", {
                user_id: this.currentUser.user_id,
                score_id: score_id,
                status_id: status_id,
                text: result.value,
              })
              .then((response) => {
                if (response.status == 200) {
                  this.resetSearch()
                  this.$store.commit("app/SET_LOADING", false);
                  this.showSuccessSwal("OPERATION SUCCESSFULLY");
                }
              })
              .catch((error) => {
                this.$store.commit("app/SET_LOADING", false);
                console.error(error);
                this.showToast(
                  "danger",
                  "top-right",
                  "Error",
                  "XIcon",
                  "Something went wrong!"
                );
              });
          }
        });
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