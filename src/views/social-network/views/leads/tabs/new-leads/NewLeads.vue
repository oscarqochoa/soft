<template>
  <div>
    <b-card no-body class="mb-0">
      <div class="mt-2">
        <b-button
          variant="info"
          class="mr-1"
          :to="{ name: 'sn-create-new-lead' }"
        >
          <feather-icon
            icon="PlusIcon"
            size="15"
            class="mr-50 text-white"
          ></feather-icon>
          CREATE
        </b-button>
        <b-dropdown id="dropdown-6" variant="success">
          <template #button-content>
            <feather-icon
              icon="DownloadIcon"
              size="16"
              class="align-middle"
            ></feather-icon>
            <span class="ml-1">EXPORT TO EXCEL</span>
          </template>

          <b-dropdown-item>EXPORT CURRENT PAGE</b-dropdown-item>
          <b-dropdown-item>EXPORT ALL PAGE</b-dropdown-item>
          <b-dropdown-item>EXPORT SELECTION</b-dropdown-item>
        </b-dropdown>
      </div>

      <filter-slot
        v-scrollbar
        :filter="filters"
        :filter-principal="filterPrincipal"
        :paginate="paginate"
        :start-page="S_LEADS.fromPage"
        :to-page="S_LEADS.toPage"
        @reload="search"
        @onChangeCurrentPage="onChangeCurrentPage"
      >
        <template #buttons>
          <b-button
            variant="success"
            class="ml-1"
            :disabled="!selectedLeads.length"
            @click="openModalSendSMS"
          >
            <feather-icon icon="MessageCircleIcon" class="mr-50" />Send SMS
          </b-button>
        </template>

        <b-table
          slot="table"
          class="position-relative text-center"
          ref="refUserListTable"
          primary-key="id"
          empty-text="No matching records found"
          select-mode="multi"
          responsive="sm"
          table-class="text-nowrap"
          sticky-header="50vh"
          small
          show-empty
          :sort-by.sync="sortBy"
          :fields="fields"
          :items="S_LEADS.items"
          :sort-desc.sync="isSortDirDesc"
          :busy.sync="isBusy"
          @row-selected="onRowSelected"
        >
          <template #head(selected)>
            <b-form-checkbox v-model="allRowsSelected" @input="selectAllRows" />
          </template>

          <template #table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner class="align-middle mr-1" />
              <strong>Loading ...</strong>
            </div>
          </template>

          <template #cell(selected)="data">
            <b-form-group>
              <b-form-checkbox
                v-model="data.item.selected"
                @input="selectRow(data.item)"
              />
            </b-form-group>
          </template>

          <!-- Column: Name -->
          <template #cell(lead_name)="data">
            <div class="text-left">
              <!-- :to="{ name: 'lead-show', params: { id: data.item.id } }" -->
              <!-- target="_blank" -->
              <router-link
                :to="{
                  name: 'sn-dashboard-new-lead',
                  params: { id: data.item.id },
                }"
                >{{ data.item.lead_name }}
              </router-link>
              <br />
              <small>{{ data.item.nickname }} </small>
            </div>
          </template>

          <template #cell(source)="data">
            <div class="text-center">
              <b-img
                v-if="data.item.parent == 1"
                :src="`${baseImg}/assets/images/social/facebook.png`"
                style="height: 30px; margin-bottom: 4px"
              />
              <b-img
                v-else
                :src="`${baseImg}/assets/images/social/google.png`"
                style="height: 30px; margin-bottom: 4px"
              />
              <br />
              <small>{{ data.item.child }}</small>
            </div>
          </template>

          <template #cell(mobile)="data">
            <small>{{ data.item.mobile }}</small>
          </template>

          <template #cell(status)="data">
            <b-badge
              pill
              :variant="data.item.status | variant"
              class="text-capitalize"
            >
              {{ data.item.status }}
            </b-badge>
          </template>

          <template #cell(program_name)="data">
            <b-img
              :src="data.item.program_name | renderProgramLogo"
              style="height: 40px"
            />
          </template>

          <template #cell(recomendations)="data">
            <small
              v-for="(program, index) in JSON.parse(data.item.programs)"
              :key="index"
            >
              {{ program }} <br />
            </small>
          </template>

          <template #cell(task)="data">
            <div class="text-left">
              <small v-if="data.item.attend == 2" class="text-success"
                >YES
                <feather-icon
                  icon="CheckCircleIcon"
                  size="15"
                  class="mr-50 text-success"
                />
              </small>
              <small v-if="data.item.attend == 1" class="text-success"
                >YES</small
              >
              <small v-if="data.item.attend == null" class="text-danger"
                >NO</small
              >
              <br />
              <small v-if="data.item.seller_name != null">
                {{ data.item.seller_name }}
              </small>
              <br />
              <small v-if="data.item.attend_date != null">
                {{ data.item.attend_date | myGlobalDay }}
              </small>
              <br />
              <small
                v-if="
                  data.item.real_time != null && data.item.state_hour != 'CA'
                "
              >
                {{ data.item.real_time | myGlobalDay }}
                ({{ data.item.state_hour }})
              </small>
            </div>
          </template>

          <template #cell(cr)="data">
            <small v-if="data.item.credit_report == '1'" class="text-danger">
              NO
            </small>
            <small v-else class="text-success">YES</small>
          </template>

          <template #cell(sale)="data">
            <b-badge
              pill
              v-if="data.item.sale_status != null"
              :variant="
                data.item.sale_status == 1 ? 'light-info' : 'light-success'
              "
              class="text-capitalize"
            >
              {{ data.item.sale_lead_status }}
            </b-badge>
          </template>

          <template #cell(created_at)="data">
            <small>{{ data.item.created_at }}</small>
          </template>

          <template #cell(actions)="data">
            <actions-table
              :id="data.item.id"
              :name="data.item.lead_name"
              @onShowTracking="openModalTracking"
              @onShowSmsList="openModalSmsList"
              @onDelete="deleteLead"
            ></actions-table>
          </template>
        </b-table>
      </filter-slot>
    </b-card>

    <modal-tracking
      v-if="showModalTracking"
      :show="showModalTracking"
      :name="nameLeadSelected"
      @onClose="closeModalTracking"
    ></modal-tracking>

    <modal-sms-list
      v-if="showModalSmsList"
      :show="showModalSmsList"
      :name="nameLeadSelected"
      @onClose="closeModalSmsList"
    ></modal-sms-list>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

// Data
import Filters from "./filters.data";
import Fields from "./fields.data";

// Components
import ActionsTable from "./components/ActionsTable.vue";
import ModalTracking from "./components/ModalTracking.vue";
import ModalSmsList from "./components/ModalSmsList.vue";

export default {
  components: {
    "actions-table": ActionsTable,
    "modal-tracking": ModalTracking,
    "modal-sms-list": ModalSmsList,
  },
  data() {
    return {
      fields: Fields,
      filters: Filters,
      filterPrincipal: {
        type: "input",
        inputType: "text",
        placeholder: "Search...",
        model: "",
      },
      paginate: {
        currentPage: 1,
        perPage: 10,
      },
      perPageOptions: [10, 25, 50, 100],
      sortBy: "id",
      isSortDirDesc: true,
      allRowsSelected: false,
      isBusy: false,
      selectedLeads: new Set(),

      baseImg: process.env.VUE_APP_BASE_URL_FRONT,

      showModalTracking: false,
      showModalSmsList: false,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      token: "auth/token",
      G_STATUS_LEADS: "SocialNetworkLeadsStore/G_STATUS_LEADS",
      G_OWNERS: "StandarStore/G_OWNERS",
      G_PROGRAMS: "StandarStore/G_PROGRAMS",
      G_SOURCE_NAMES: "StandarStore/G_SOURCE_NAMES",
      GET_STATES_SLUG: "StandarStore/GET_STATES_SLUG",
      G_CRS: "StandarStore/G_CRS",
      G_TYPE_DOCS: "StandarStore/G_TYPE_DOCS",
    }),
    ...mapState({
      S_LEADS: (state) => state.SocialNetworkLeadsStore.S_LEADS,
    }),
  },
  methods: {
    ...mapActions({
      A_GET_NEW_LEADS: "SocialNetworkLeadsStore/A_GET_NEW_LEADS",
      A_GET_TRACKING_NEW_LEADS:
        "SocialNetworkLeadsStore/A_GET_TRACKING_NEW_LEADS",
      A_SET_FILTERS: "SocialNetworkLeadsStore/A_SET_FILTERS",
      A_GET_SMS_SENT_TO_NEW_LEADS:
        "SocialNetworkLeadsStore/A_GET_SMS_SENT_TO_NEW_LEADS",
      A_SET_SELECTED_LEADS: "SocialNetworkLeadsStore/A_SET_SELECTED_LEADS",
      A_DELETE_LEAD: "SocialNetworkLeadsStore/A_DELETE_LEAD",
    }),
    async openModalTracking(id, name) {
      await this.A_GET_TRACKING_NEW_LEADS({
        lead_id: id,
      });

      this.nameLeadSelected = name;
      this.showModalTracking = true;
    },
    closeModalTracking() {
      this.showModalTracking = false;
    },
    async openModalSendSMS() {},
    closeModalSendSms() {},
    async openModalSmsList(id, name) {
      await this.A_GET_SMS_SENT_TO_NEW_LEADS({
        id: id,
      });

      this.nameLeadSelected = name;
      this.showModalSmsList = true;
    },
    closeModalSmsList() {
      this.showModalSmsList = false;
    },
    selectAllRows() {
      if (this.allRowsSelected) {
        this.S_LEADS.items.forEach((item) => (item.selected = true));
      } else {
        this.S_LEADS.items.forEach((item) => (item.selected = false));
      }
    },
    selectRow(data) {
      if (data.selected) {
        this.selectedLeads.add(data);
      } else {
        this.selectedLeads.delete(data);
      }

      this.onRowSelected();
    },
    onRowSelected() {
      const arrSelectedLeads = Array.from(this.selectedLeads);
      this.A_SET_SELECTED_LEADS(arrSelectedLeads);
    },
    async search() {
      try {
        this.setFilters();
        this.isBusy = true;

        await this.A_GET_NEW_LEADS({
          name_text: null,
          lead_status: this.filters[9].model,
          cr: this.filters[2].model,
          program: this.filters[4].model,
          date_from: this.filters[0].model,
          date_to: this.filters[1].model,
          orderby: 10,
          order: "desc",
          user_owner: this.filters[6].model,
          iduser: 1,
          idrole: 1,
          type: 1,
          last_action: null,
          fanpage: null,
          state_h: this.filters[8].model,
          sourcename: this.filters[5].model,
          subsource: null,
          type_document: this.filters[3].model,
          per_page: this.paginate.perPage,
          page: this.paginate.currentPage,
        });

        setTimeout(() => {
          this.isBusy = false;
        }, 500);
      } catch (error) {
        console.log("Something went wrong with search", error);
        this.showToast(
          "danger",
          "top-right",
          "Oops!",
          "AlertOctagonIcon",
          this.getInternalErrors(error)
        );
      }
    },
    setOptionsOnFilters() {
      this.filters[2].options = this.G_CRS;
      this.filters[3].options = this.G_TYPE_DOCS;
      this.filters[4].options = this.G_PROGRAMS;
      this.filters[5].options = this.G_SOURCE_NAMES;
      this.filters[6].options = this.G_OWNERS;
      this.filters[7].options = [];
      this.filters[8].options = [];
      this.filters[9].options = this.G_STATUS_LEADS;
    },
    onChangeCurrentPage(page) {
      this.paginate.currentPage = page;
      this.search();
    },
    setFilters() {
      this.A_SET_FILTERS({
        from: this.filters[0].model,
        to: this.filters[1].model,
        cr: this.filters[2].model,
        typeDoc: this.filters[3].model,
        program: this.filters[4].model,
        sourceName: this.filters[5].model,
        owner: this.filters[6].model,
        task: this.filters[7].model,
        stAd: this.filters[8].model,
        statusLead: this.filters[9].model,
      });
    },
    deleteLead(id) {
      this.showSwalGeneric(
        "Are you sure?",
        "You won't be able to revert this!",
        "question"
      ).then(async (result) => {
        if (result.value) {
          const { user_id } = this.currentUser;
          const response = await this.A_DELETE_LEAD({
            id: id,
            user_id: user_id,
          });

          if (this.isResponseSuccess(response)) {
            this.showToast(
              "success",
              "top-right",
              "Deleted!",
              "CheckIcon",
              "Your file has been deleted."
            );
          } else {
            this.showToast(
              "warning",
              "top-right",
              "Warning!",
              "AlertTriangleIcon",
              `Something went wrong.${response.message}`
            );
          }
        }
      });
    },
  },
  created() {
    this.search();
    this.setOptionsOnFilters();
  },
};
</script>

<style>
</style>