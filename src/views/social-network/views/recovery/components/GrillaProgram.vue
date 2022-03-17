<template>
  <div>
    <cool-light-box :items="itemImage" :index="showImage" :effect="'fade'" @close="showImage = null" ></cool-light-box>
    <!-- Table Container Card -->
    <b-card no-body class="mb-0">
      <filter-slot
        v-scrollbar
        :filter="filters"
        :filter-principal="filterPrincipal"
        :total-rows="totalLeads"
        :paginate="paginate"
        :start-page="fromPage"
        :to-page="toPage"
        :send-multiple-sms="false"
        @reload="getSNRecoveryLeads"
        @onChangeCurrentPage="onChangeCurrentPage"
      >

        <template #buttons>
          <b-button
            variant="success"
            class="ml-1"
            :disabled="!leadsSelecteds.length"
            @click="modalSmssOpen"
          >
            <feather-icon icon="MessageCircleIcon" class="mr-50" />Send SMS
          </b-button>
        </template>

        <b-table
          slot="table"
          class="position-relative"
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

          <template #table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner class="align-middle mr-1" />
              <strong>Loading ...</strong>
            </div>
          </template>

          <template #head(selected)>
            <b-form-checkbox v-model="selectAll" @input="selectedAll" />
          </template>

          <!-- Column: Selected -->
          <template #cell(selected)="data">
            <b-form-group>
              <b-form-checkbox v-model="data.item.selected" @input="onSelectedRow(data.item)" />
            </b-form-group>
          </template>

          <!-- Column: Nickname -->
          <template #cell(nickname)="data">
            <div style="white-space: pre-wrap;">
              <!-- <router-link :to="{ name: 'sn-dashboard-old-lead' }"> -->
                {{ data.item.nickname }}
              <!-- </router-link> -->
              <br />
              <small>{{ data.item.lead_name }}</small>
            </div>
          </template>

          <template #cell(parent)="data">
            <div>
              <div v-if="data.item.parent == 1" class="text-center">
                <b-img thumbnail fluid :src="baseUrl + '/images/social-network/facebook.png'" style="width: 50px" />
                <br>
                <span>{{data.item.child}}</span>
              </div>
              <div v-if="data.item.parent == 2" class="text-center">
                <b-img thumbnail fluid :src="baseUrl + '/images/social-network/google.png'" style="width: 50px" />
                <br>
                <span>{{data.item.contact_method}}</span>
              </div>
            </div>
          </template>

          <!-- Column: Status -->
          <template #cell(status)="data">
            <div>
              <b-badge
                pill
                :variant="data.item.status | variant"
                class="text-capitalize"
              >
                {{ data.item.status }}
              </b-badge>
            </div>
          </template>

          <!-- Column: Fanpage -->
          <template #cell(fanpage)="data">
            <b-img thumbnail fluid :src="baseUrl + data.item.logo" style="width: 50px" />
          </template>

          <!-- Column: Recomendations -->
          <template #cell(programs)="data">
            <div>
              <small
                v-for="(program, index) in JSON.parse(data.item.programs)"
                :key="index"
              >
                {{ program }} <br />
              </small>
            </div>
          </template>

          <!-- Column: Task -->
          <template #cell(attend)="data">
            <div>
              <span class="text-capitalize text-success" v-if="data.item.attend == 2"> YES 
                <feather-icon
                  icon="CheckCircleIcon"
                  size="15"
                  class="mr-50 text-success"
                />
              </span>
              <span class="text-capitalize text-success" v-else-if="data.item.attend == 1"> YES </span>
              <span class="text-capitalize text-danger" v-else-if="data.item.attend == null"> NO </span>
              <div v-if="data.item.seller_name != null"> {{ data.item.seller_name }} </div>
              <div v-if="data.item.attend_date != null"> {{ data.item.attend_date | myGlobalDay }} </div>
              <div v-if="data.item.real_time != null && data.item.state_hour != 'CA'"> {{ data.item.real_time | myGlobalDay }} {{ data.item.state_hour }}</div>
            </div>
          </template>

          <!-- Column: Evidence -->
          <template #cell(file_evidence)="data">
            <div class="text-center">
              <feather-icon
                v-if="data.item.file_evidence"
                icon="FolderIcon"
                size="15"
                class="text-success cursor-pointer"
                @click="open(data.item.file_evidence)"
              />
              <feather-icon
                icon="UploadCloudIcon"
                size="15"
                class="text-success cursor-pointer"
                v-else
                @click="openModalEvidence(data.item.id, data.item.nickname)"
              />
            </div>
          </template>

          <!-- Column: Created Date -->
          <template #cell(created_at)="data">
            <small>{{ data.item.created_at | myGlobalDay }}</small>
          </template>

          <!-- Column: Tracking -->
          <template #cell(tracking)="data">
            <div class="text-center">
                <feather-icon
                  icon="ListIcon"
                  size="15"
                  class="text-primary cursor-pointer"
                  @click="openModalTracking(data.item.id, data.item.nickname)"
                />
            </div>
          </template>

          <template #cell(actions)="data">
            <actions-table
              :id="data.item.id"
              :name="data.item.nickname"
              @onDeleteLead="deleteLead"
              @onShowSmsList="openModalSmsList"
              @onSendSms="openModalSendSMS(data.item)"
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

    <modal-send-sms
      v-if="sendModalSms"
      :smss="leads_sms"
      :modul="currentUser.modul_id"
      :show="sendModalSms"
      :typesms="typesms"
      :sms="leads_sms_o"
      :name-leads="name_leads_arr"
      @hide="closeModalSendSms">
    </modal-send-sms>

    <modal-evidence-sn
      v-if="modalEvidence"
      :show="modalEvidence"
      :lead_id="lead_id"
      :lead_name="lead_name"
      @onClose="closeModalEvidence">
    </modal-evidence-sn>

  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

import dataFilters from "./filters.data";
import Fields from "./fields.data";
import FeatherIcon from '@/@core/components/feather-icon/FeatherIcon.vue';

// Components
import ModalTracking from "../../leads/components/ModalTracking.vue";
import ActionsTable from "./ActionsTable.vue";
import ModalSendSms from "@/views/crm/views/Lead/lead-sms/ModalSendSms.vue";
import ModalSmsList from "../../leads/components//ModalSmsList.vue";
import ModalEvidenceSn from "./ModalEvidenceSn.vue";

export default {
  components: {
    FeatherIcon,
    "modal-tracking": ModalTracking,
    "actions-table": ActionsTable,
    "modal-send-sms": ModalSendSms,
    "modal-sms-list": ModalSmsList,
    "cool-light-box": CoolLightBox,
    "modal-evidence-sn": ModalEvidenceSn,
  },
  data() {
    return{
      items: [],
      baseUrl: process.env.VUE_APP_BASE_URL_ASSETS,
      filters: dataFilters,
      filterPrincipal: {
        type: "input",
        inputType: "text",
        placeholder: "Search...",
        model: ""
      },
      totalLeads: 0,
      paginate: {
        currentPage: 1,
        perPage: 10
      },
      fromPage: 0,
      toPage: 0,
      sortBy: "id",
      fields: Fields,
      isSortDirDesc: true,
      isBusy: false,
      showModalTracking: false,
      nameLeadSelected: "",

      showModalSmsList: false,

      sendModalSms: false,
      rowData: [],
      typesms: null,
      leads_sms_o: [],
      leads_sms: [],
      name_leads_arr: [],
      showImage: null,
      itemImage: [],
      modalEvidence: false,
      lead_id: "",
      lead_name: "",
      selectAll: false,
      leadsSelecteds: [],
    }
  },
  computed: {
    ...mapState({
      S_LEADS: (state) => state.SocialNetworkLeadsStore.S_LEADS,
    }),
    ...mapState('auth',['currentUser']),
  },
  async created() {
   await this.getSNRecoveryLeads();
  },
  methods: {
    ...mapActions('SocialNetworkLeadsStore', ['A_GET_RECOVERY_LEADS_SN_BY_PROGRAM', 'A_SET_FILTERS', 'A_GET_TRACKING_NEW_LEADS', 'A_DELETE_LEAD', 'A_GET_SMS_SENT_TO_NEW_LEADS']),
    ...mapMutations('SocialNetworkLeadsStore', ['M_SET_EVIDENCE_URL']),
    ...mapActions('CrmLeadStore', ['A_SET_SELECTED_LEADS']),
    async getSNRecoveryLeads() {
      try {
        this.isBusy = true;
        this.setFilters();
        const response = await this.A_GET_RECOVERY_LEADS_SN_BY_PROGRAM({
          name_text: this.filterPrincipal.model,
          lead_status: null,
          cr: null,
          evidence: 0,
          date_from: this.filters[0].model,
          date_to: this.filters[1].model,
          orderby: 10,
          order: "desc",
          user_owner: null,
          mobile: 0,
          iduser: 1,
          idrole: 1,
          type: 3,
          task: null,
          last_action: null,
          fanpage: this.$route.meta.program,
          sourcename: null,
          perpage: this.paginate.perPage,
          page: this.paginate.currentPage,
          notcall: this.$route.meta.program == 0 ? 1 : 0,
        });
        this.totalLeads = response.total;
        this.fromPage = response.from;
        this.toPage = response.to;
        this.isBusy = false;
      } catch (error) {
        console.log("Somtehing went wrong getSNRecoveryLeads", error);
        this.showToast(
          "danger",
          "top-right",
          "Oop!",
          "AlertOctagonIcon",
          this.getInternalErrors(error)
        );
      }
    },
    onChangeCurrentPage(e) {
      this.paginate.currentPage = e;
      this.getSNRecoveryLeads();
    },
    setFilters() {
      this.A_SET_FILTERS({
        from: this.filters[0].model,
        to: this.filters[1].model,
      });
    },
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
    async deleteLead(id) {
      const result = await this.showConfirmSwal(
        "Are you sure?",
        "You won't be able to revert this!",
        "question"
      )
      if (result.value) {
          const { user_id } = this.currentUser;
          const response = await this.A_DELETE_LEAD({
            lead_id: id,
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
    },
    async openModalSendSMS(item) {
      this.rowData = item;
      this.leads_sms = [];
      this.typesms = 1;
      this.leads_sms_o = [];
      this.leads_sms_o.push(item.id);
      this.name_leads_arr = [{ name: item.lead_name, id: item.id }];
      this.sendModalSms = true;
    },
    closeModalSendSms(value) {
      this.sendModalSms = value;
    },
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

    modalSmssOpen() {
      this.typesms = 0;
      this.name_leads_arr = this.leadsSelecteds.map(el => ({
        name: el.lead_name,
        id: el.id
      }));
      this.leads_sms = this.leadsSelecteds.map(el => el.id);
      this.sendModalSms = true;
    },

    onSelectedRow(data) {
      const index = this.leadsSelecteds.findIndex(
          select => select.id === data.id
      );
      if (data.selected === true && index === -1)
        this.leadsSelecteds.push(data);
      else if (data.selected === false && index !== -1)
        this.leadsSelecteds.splice(index, 1);
      this.onRowSelected();
    },

    onRowSelected() {
      this.A_SET_SELECTED_LEADS(this.leadsSelecteds);
    },

    selectedAll() {
      if (this.selectAll)
        this.S_LEADS.items.forEach(item => (item.selected = true));
      else this.S_LEADS.items.forEach(item => (item.selected = false));
      this.onRowSelected();
    },

    open(image) {
      this.itemImage = [image];
      this.showImage = 0;
    },
    openModalEvidence(id, lead_name) {
      this.lead_id = id;
      this.lead_name = lead_name;
      this.modalEvidence = true;
    },
    closeModalEvidence(payload) {
      if(payload){
          this.M_SET_EVIDENCE_URL(payload)
      }
      this.modalEvidence = false;
    }
  },
  mounted() {
    if ([1, 2].includes(this.currentUser.role_id) && this.type === 0)
      this.actionsOptions.push("delete");
  }
}
</script>