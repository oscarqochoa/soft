<template>
  <b-card body-class="px-0">
    <template #header>
      <b-card-title class="card-title-cr"> Credit Report </b-card-title>
    </template>

    <b-row class="mt-1 mb-3">
      <b-col sm="4" md="4" lg="4" class="text-center">
        <span class="font-bureau-style text-center font-weight-bolder">
          TransUnion
        </span>
        <div class="circle-bureau" :class="colorScore(scoreTransunion, 2)">
          <span class="text-circle" :class="colorScore(scoreTransunion, 1)">
            {{ scoreTransunion }}
            <!--class="show-lead-score-cr"
            style="border: 2px solid #0aafdb" -->
          </span>
        </div>
      </b-col>
      <b-col sm="4" md="4" lg="4" class="text-center">
        <span class="font-bureau-style text-center font-weight-bolder">
          Experian
        </span>
        <div class="circle-bureau" :class="colorScore(scoreExperian, 2)">
          <span class="text-circle" :class="colorScore(scoreExperian, 1)">
            {{ scoreExperian }}
          </span>
        </div>
      </b-col>
      <b-col sm="4" md="4" lg="4" class="text-center">
        <span class="font-bureau-style text-center font-weight-bolder">
          Equifax
        </span>
        <div class="circle-bureau" :class="colorScore(scoreEquifax, 2)">
          <span class="text-circle" :class="colorScore(scoreEquifax, 1)">
            {{ scoreEquifax }}
          </span>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12" md="12" lg="12" xl="12">
        <b-tabs
          pills
          active-nav-item-class="bg-orange-tab"
          class="override-tab ml-2"
        >
          <b-tab
            :active="tab == 1"
            title-item-class="text-center w-auto"
            title-link-class="bg-default-tab"
            @click="(tab = 1), getReports()"
          >
            <template #title>Obtained</template>
          </b-tab>
          <b-tab
            :active="tab == 2"
            title-item-class="text-center w-auto"
            title-link-class="bg-default-tab"
            @click="(tab = 2), getReports()"
          >
            <template #title>
              Pending
              <b-badge variant="danger" pill v-if="countData != 0">
                {{ countData }}
              </b-badge>
            </template>
          </b-tab>
        </b-tabs>
      </b-col>
      <b-col sm="12" md="12" lg="12" xl="12">
        <b-table
          v-if="tab == 1"
          small
          :fields="tableObtained.fields"
          :items="reports"
          sticky-header="180px"
        >
          <template #cell(provider)="data">
            <div
              v-b-tooltip.hover.top="data.item.plataform_name"
              style="
                width: 20px;
                height: 20px;
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
              "
              :style="{
                backgroundImage: `url(${baseUrl + data.item.plataform_icon})`,
              }"
            />
          </template>

          <template #cell(date)="data">
            <span v-if="data.item.date != null">
              {{ data.item.date | myGlobal }}
            </span>
          </template>

          <template #cell(cr)="data">
            <a
              v-if="data.item.state == 1"
              :href="
                '/socialnetwork/ncr/reportLead/' +
                data.item.lead_id +
                '/' +
                data.item.id
              "
              target="_blank"
              style="cursor: pointer"
            >
              <feather-icon icon="FileIcon"></feather-icon>
            </a>
          </template>
          <template #cell(pdf)="data">
            <a
              :href="data.item.route_pdf"
              v-if="data.item.route_pdf"
              target="_blank"
            >
              <img src="/assets/images/extensions/pdf.png" width="23px" alt="">
            </a>
          </template>
        </b-table>

        <b-table
          v-if="tab == 2"
          small
          :fields="tablePending.fields"
          :items="pendings"
          sticky-header="180px"
        >
          <template #cell(request_by)="data">
            <div>{{ data.item.seller_name }}</div>
            <div>{{ data.item.date | myGlobalDay }}</div>
          </template>
          <template #cell(tracking)="data">
            <b-button
              variant="flat-primary"
              class="btn-icon"
              @click="
                openModalTrackingStatus(data.item.score_id, data.item.lead_name)
              "
            >
              <feather-icon icon="ListIcon"></feather-icon>
            </b-button>
          </template>

          <template #cell(action)="data">
            <span
              v-if="data.item.status_id == 3"
              @click="changeStatus(data.item.score_id, 4)"
              style="cursor: pointer"
            >
              Validate Information
              <span
                class="ml-1"
                v-if="data.item.status_id == 3 && data.item.attemps_count < 3"
                @click="changeStatus(data.item.score_id, 5)"
                style="cursor: pointer"
              >
                | Other Source (DI)
              </span>
              <span
                class="ml-1"
                v-if="data.item.status_id == 6"
                @click="changeStatus(data.item.score_id, 7)"
                style="cursor: pointer"
              >
                Information Was Correct
              </span>
              <span
                class="ml-1"
                v-if="data.item.status_id == 6 && data.item.attemps_count < 3"
                @click="changeStatus(data.item.score_id, 8)"
                style="cursor: pointer"
              >
                | Other Source (II)
              </span>
            </span>
          </template>
        </b-table>
      </b-col>
      <b-col sm="12" md="12" lg="12" xl="12">
        <b-form-group>
          <b-button
            variant="primary"
            class="float-right mt-2 mr-2"
            @click="openModalRequestCreditReport"
          >
            <feather-icon icon="PlusIcon" class="mr-50"></feather-icon>
            REQUEST CR
          </b-button>
        </b-form-group>
      </b-col>
    </b-row>

    <modal-request-credit-report
      v-if="showModalRequestCreditReport"
      :lead_id="lead.id"
      :modul="15"
      @onClose="closeModalRequestCreditReport"
    ></modal-request-credit-report>

    <modal-tracking-status
      v-if="showModalTrackingStatus"
      :score_id="score_id"
      :lead_name="lead_name"
      @onClose="closeModalTrackingStatus"
    ></modal-tracking-status>
  </b-card>
</template>

<script>
// Components
import ModalRequestCreditReport from "./ModalRequestCreditReport.vue";
import ModalTrackingStatus from "./ModalTrackingStatus.vue";

// Services
import SNLeadsService from "@/views/social-network/services/leads";

export default {
  props: {
    lead: {
      type: Object,
    },
  },
  components: {
    ModalRequestCreditReport,
    ModalTrackingStatus,
  },
  data() {
    return {
      tableObtained: {
        fields: [
          { key: "provider", label: "Provider" },
          { key: "date", label: "Date" },
          { key: "transunion", label: "TU" },
          { key: "experian", label: "EX" },
          { key: "equifax", label: "EQ" },
          { key: "cr", label: "CR" },
          { key: "pdf", label: "PDF" },
        ],
      },

      tablePending: {
        fields: [
          { key: "request_by", label: "Request By" },
          { key: "status", label: "Status" },
          { key: "tracking", label: "Tracking" },
          { key: "action", label: "Action" },
        ],
      },

      reports: [],
      pendings: [],
      countData: 0,
      tab: 1,
      modalTrackingStatus: false,
      lead_name: "",
      score_id: "",
      scoreEquifax: "...",
      scoreTransunion: "...",
      scoreExperian: "...",

      // Modals
      showModalRequestCreditReport: false,
      showModalTrackingStatus: false,
    };
  },
  computed: {
    modul() {
      return this.global.layout.modul_id;
    },
    isOverSize() {
      return (
        (this.tab == 1 && this.reports.length >= 2) ||
        (this.tab == 2 && this.pendings.length >= 2)
      );
    },
    leadIdParam() {
      return this.$route.params.id;
    },
  },
  methods: {
    openModalRequestCreditReport() {
      this.showModalRequestCreditReport = true;
    },
    closeModalRequestCreditReport() {
      this.showModalRequestCreditReport = false;
      this.getReports();
    },
    openModalTrackingStatus(id, lead_name) {
      this.score_id = id;
      this.lead_name = lead_name;

      this.showModalTrackingStatus = true;
    },
    closeModalTrackingStatus() {
      this.showModalTrackingStatus = false;
    },
    colorScore(score, type) {
      if (score < 659) {
        return type == 1 ? "text-danger" : "bg-light-danger";
      }
      if (score >= 659 && score < 699) {
        return type == 1 ? "text-warning" : "bg-light-warning";
      }
      return type == 1 ? "text-success" : "bg-light-success";
    },
    async changeStatus(score_id, status_id) {
      const confirm = await this.showConfirmSwal();

      if (confirm.value) {
        const response = await SNLeadsService.changeCreditReportStatus({
          user_id: this.global.layout.id,
          score_id: score_id,
          status_id: status_id,
          text: result.value,
        });

        if (response.status == 200) {
          this.getReports();
          this.removePreloader();
          this.showToast();
        }
      }
    },
    async getReports() {
      try {
        if (this.tab == 1) {
          const response = await SNLeadsService.getCreditReports({
            id: this.leadIdParam,
          });

          if (response.status == 200) {
            this.reports = response.data;
            this.countPendingTab();
          }
        } else {
          const response = await SNLeadsService.getPendingCreditReport({
            id: this.leadIdParam,
            modul: 15,
          });

          if (response.status == 200) {
            this.pendings = response.data;

            this.pendings.map((item) => {
              item.attemps_count =
                item.attemps == null ? "" : JSON.parse(item.attemps).length;
            });
            this.countPendingTab();
          }
        }
      } catch (error) {
        throw error;
      }
    },
    async countPendingTab() {
      try {
        const response = await SNLeadsService.getCountPendingReports({
          id: this.leadIdParam,
          modul: 15,
        });

        if (response.status == 200) {
          this.countData =
            response.data[0].countPending > 99
              ? "+99"
              : response.data[0].countPending;
        }
      } catch (error) {
        throw error;
      }
    },
    async getScore() {
      try {
        const response = await SNLeadsService.getCreditReportScore({
          id: this.leadIdParam,
        });

        if (response.status == 200) {
          this.scoreEquifax = response.data.equifax;
          this.scoreTransunion = response.data.transunion;
          this.scoreExperian = response.data.experian;
        }
      } catch (error) {
        throw error;
      }
    },
  },
  async created() {
    await this.getScore();
    await this.getReports();
  },
};
</script>

<style lang="scss" scoped>
.text-danger {
  color: #dc3545 !important;
}
.text-warning {
  color: #ffc107 !important;
}
.text-success {
  color: #28a745 !important;
}
.bg-light-danger {
  background-color: #f9e7e7 !important;
  border: 1px solid #dc3545 !important;
}
.bg-light-warning {
  background-color: #f9f9d9 !important;
  border: 1px solid #ffc107 !important;
}
.bg-light-success {
  background-color: #f0ffea !important;
  border: 1px solid #28a745 !important;
}
.circle-bureau {
  margin-top: 5px !important;
  max-width: 85px !important;
  height: 85px;
  border-radius: 30px;
  margin: auto;
  background: #eeedfd;
}
.text-circle {
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 28px;
  color: #8561fb;
  display: flex;
  justify-items: center;
  justify-content: space-around;
  align-items: center;
  height: 85px;
}
.nav-tabs .override-tab {
  border-bottom: none !important;
}
.nav-link .bg-default-tab {
  border-bottom: none !important;
}
.card-title-cr {
  width: 100%;
  font-weight: 600 !important;
}
</style>
