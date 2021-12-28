<template>
  <div>
    <b-card no-body class="mb-1">
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
            md="4"
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
          <b-col cols="12" md="8">
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
              <b-form-group class="mb-md-0 mb-2">
                <v-select
                  v-model="seller"
                  class="per-page-datepicker d-inline-block mx-50"
                  style="font-size: 15px"
                  placeholder="Select Seller"
                  label="user_name"
                  :options="sellers"
                  :reduce="(val) => val.id"
                />
              </b-form-group>
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
        :api-url="clientRoute"
        ref="refClientsList"
        :items="myProvider"
        :fields="arrayColumns"
        primary-key="id"
        table-class="text-nowrap"
        responsive="sm"
        show-empty
        sticky-header="50vh"
        :current-page="currentPage"
        :per-page="perPage"
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
            <a href="www.google.com" target="_blank"
            style="text-decoration-line: underline;"> {{data.item.lead_name}} link</a>
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
        <template #cell(cr)="data">
          <div v-if="status == 1">
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
          <div v-if="status == 2">
            <a :href="data.item.route_html" v-if="!data.item.route_html" target="_blanck">
              <amg-icon size="23" icon="CRInvalidIcon"></amg-icon>
            </a>
          </div>
        </template>
        <template #cell(route_pdf)="data">
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <a
              :href="data.item.route_pdf"
              v-if="data.item.route_pdf"
              target="_blanck"
            >
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
        <template #cell(marked_pdf)="data">
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <a
              :href="JSON.parse(data.item.attemps).slice()[0].file_cancel"
              v-if="JSON.parse(data.item.attemps).slice()[0].file_cancel"
              target="_blanck"
            >
              <img
                :src="assetsImg + '/images/icons/pdf.png'"
                style="width: 20px"
              />
              <!-- <p>{{ JSON.parse(data.item.attemps).slice()[0].file_cancel}}</p> -->
            </a>
            <div v-else style="height: 20px"></div>
          </div>
        </template>
      </b-table>
    </b-card>
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
import ModalQuestionnaire from "../../modal/ModalQuestionnaire.vue";
import ModalTrackingStatus from "../../modal/ModalTrackingStatus.vue";
export default {
  components: {
    vSelect,
    ModalQuestionnaire,
    ModalTrackingStatus,
  },
  props: {
    status: {
      type: [Number, String],
    },
  },
  data() {
    return {
      assetsImg: process.env.VUE_APP_BASE_URL_ASSETS,
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
          key: "cr",
          label: "CR",
          class: "text-center",
          sortable: false,
          visible: true,
        },
        {
          key: "route_pdf", //////
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
          key: "marked_pdf",
          label: "File",
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
      modalTrackingStatus: false,
      question_id: "",
      status_id: "",
      score_id: "",
      lead_name: "",
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
    clientRoute() {
      return this.status == 1
        ? "/ncr-leads-search-completed-successfull-crm"
        : "/ncr-leads-search-completed-invalid-crm";
    },
  },
  methods: {
    resetSearch() {
      this.$refs.refClientsList.refresh();
    },
    myProvider(ctx) {
      const promise = amgApi.post(`${ctx.apiUrl}?page=${ctx.currentPage}`, {
        name_text: "",
        date_from: this.fromToObject.from,
        date_to: this.fromToObject.to,
        orderby: this.dato2 == null ? 4 : this.dato2,
        order: this.dato1 == null ? "desc" : this.dato1,
        user_id: this.currentUser.user_id,
        role_id: this.currentUser.role_id,
        seller: this.seller,
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
    openModalQuestionnaire(score_id, lead_name, status_id, question_id) {
      this.status_id = status_id;
      this.question_id = question_id;
      this.score_id = score_id;
      this.lead_name = lead_name;
      this.modalQuestionnaire = true;
    },
    closeModalQuestionnaire() {
      this.modalQuestionnaire = false;
    },
    updateGrid() {
      this.$refs.refClientsList.refresh();
    },
    openTrackingStatus(id, lead_name) {
      this.lead_name = lead_name;
      this.score_id = id;
      this.modalTrackingStatus = true;
    },
    closeTrackingStatus() {
      this.modalTrackingStatus = false;
    },
  },
};
</script>