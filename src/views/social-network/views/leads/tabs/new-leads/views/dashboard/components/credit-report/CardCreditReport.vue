<template>
  <b-card body-class="px-0">
    <b-container>
      <b-row>
        <h3 class="title-card ml-3">Credit Report</h3>
      </b-row>
    </b-container>
    <b-row class="mt-2 mb-3">
      <b-col sm="4" md="4" lg="4" class="text-center">
        <span class="font-bureau-style text-center font-weight-bolder">
          TransUnion
        </span>
        <div class="circle-bureau" :class="colorScore(scoreTransunion, 2)">
          <span class="text-circle" :class="colorScore(scoreTransunion, 1)">
            {{ scoreTransunion }}
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
              <div
                v-if="countData == 0"
                class="rounded-circle text-white"
                style="
                  display: inline-block;
                  background: red;
                  padding: 0px 4px 0px 4px;
                  margin-left: 10px;
                "
              >
                {{ countData }}
              </div>
            </template>
          </b-tab>
        </b-tabs>
      </b-col>
      <b-col sm="12" md="12" lg="12" xl="12">
        <div
          id="cont-list"
          :style="isOverSize ? 'height: 170px; overflow: auto;' : ''"
        >
          <b-table
            v-if="tab == 1"
            small
            :fields="tableObtained.fields"
            :items="reports"
          >
            <template #cell(provider)="data">
              {{data.item.plataform_icon}}
              <img
                :src="data.item.plataform_icon"
                :title="data.item.plataform_name"
                alt
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
                  '/socialnetwork/leads/report/' +
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
                <i
                  class="far fa-file-pdf text-dark"
                  style="font-size: 20px"
                ></i>
              </a>
            </template>
          </b-table>

          <b-table
            v-if="tab == 2"
            small
            :fields="tablePending.fields"
            :items="pendings"
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
                  openTrackingStatus(data.item.score_id, data.item.lead_name)
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
        </div>
      </b-col>
      <b-col sm="12" md="12" lg="12" xl="12">
        <b-form-group>
          <b-button
            variant="primary"
            class="float-right mt-2 mr-2"
            @click="openRequestReport"
          >
            <feather-icon icon="PlusIcon" class="mr-50"></feather-icon>
            REQUEST CR
          </b-button>
        </b-form-group>
      </b-col>
    </b-row>

    <modal-request-credit-report-crm
      :ifModal="modalOpenRequestCR"
      v-if="modalOpenRequestCR"
      :lead_id="this.global.editleads[0].id"
      :global="this.global"
      :modul="this.modul"
      @click="closeModalRequestCR"
      @close="closeModalRequestCRC"
    ></modal-request-credit-report-crm>

    <modal-ncr-crm-tracking-status-ad
      v-if="modalTrackingStatus"
      :ifModal="modalTrackingStatus"
      :score_id="score_id"
      :lead_name="lead_name"
      @click="closeTrackingStatus"
    ></modal-ncr-crm-tracking-status-ad>
  </b-card>
</template>

<script>
// Services
import SNLeadsService from "@/views/social-network/services/leads";

export default {
  props: {
    lead: {
      type: Object,
    },
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

      modalOpenRequestCR: false,
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
  },
  methods: {
    colorScore(score, type) {
      if (score < 659) {
        return type == 1 ? "text-danger" : "bg-light-danger";
      }
      if (score >= 659 && score < 699) {
        return type == 1 ? "text-warning" : "bg-light-warning";
      }
      return type == 1 ? "text-success" : "bg-light-success";
    },
    changeStatus(score_id, status_id) {
      swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#ab9220",
          cancelButtonColor: "#8f9194",
          confirmButtonText: "Yes",
          input: "textarea",
        })
        .then((result) => {
          if (result.value) {
            this.addPreloader();
            // axios
            //   .post("/api/ncr-leads-change-status", {
            //     user_id: this.global.layout.id,
            //     score_id: score_id,
            //     status_id: status_id,
            //     text: result.value,
            //   })
            //   .then((response) => {
            //     if (response.status == 200) {
            //       this.getReports();
            //       this.removePreloader();
            //       swal.fire({
            //         type: "success",
            //         title: "OPERATION SUCCESSFULLY",
            //       });
            //     }
            //   });
          }
        });
    },
    async getReports() {
      try {
        if (this.tab == 1) {
          const response = await SNLeadsService.getCreditReports({
            id: this.lead.id,
          });

          if (response.status == 200) {
            this.reports = response.data;
            this.countPendingTab();
          }
        } else {
          const response = await SNLeadsService.getPendingCreditReport({
            id: this.lead.id,
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
    closeTrackingStatus() {
      this.modalTrackingStatus = false;
    },
    openTrackingStatus(id, lead_name) {
      this.lead_name = lead_name;
      this.score_id = id;
      this.modalTrackingStatus = true;
    },
    countPendingTab() {
      // axios
      //   .post("/api/get-cr-count-pending-tab", {
      //     id: this.global.editleads[0].id,
      //     modul: this.modul,
      //   })
      //   .then((response) => {
      //     if (response.status == 200) {
      //       this.countData =
      //         response.data[0].countPending > 99
      //           ? "+99"
      //           : response.data[0].countPending;
      //     }
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //   });
    },
    getScore() {
      // axios
      //   .post("/api/get-score-by-lead-sn", {
      //     id: this.global.editleads[0].id,
      //   })
      //   .then((response) => {
      //     if (response.status == 200) {
      //       this.scoreEquifax = response.data.equifax;
      //       this.scoreTransunion = response.data.transunion;
      //       this.scoreExperian = response.data.experian;
      //     }
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //   });
    },
    closeModalRequestCR() {
      this.tab = 2;
      this.getReports();
      this.modalOpenRequestCR = false;
    },
    closeModalRequestCRC() {
      this.modalOpenRequestCR = false;
    },
    openRequestReport() {
      this.modalOpenRequestCR = true;
    },
    addPreloader() {
      var x = document.getElementById("app");
      x.classList.add("preloader");
      x.classList.add("opacity-uno");
    },
    removePreloader() {
      var x = document.getElementById("app");
      x.classList.remove("preloader");
      x.classList.remove("opacity-uno");
    },
  },
  created() {
    this.getScore();
    this.getReports();
  },
};
</script>

<style scoped>
.center-fix {
  display: flex;
  justify-content: center;
}
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
  background-color: #e4ffdb !important;
  border: 1px solid #28a745 !important;
}
.circle-bureau {
  width: 85px;
  height: 85px;
  border-radius: 50%;
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
</style>
