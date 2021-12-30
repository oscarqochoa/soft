<template>
  <div>
    <b-card no-body class="mb-1">
      <div class="p-2">
        <div class="row mb-3">
          <div class="col-lg-6">
            <b-button class="btn btn-danger" :to="{ name: 'ncr-completed' }">
              <feather-icon icon="ChevronsLeftIcon"></feather-icon>
              Return</b-button
            >
            <h3
              class="font-weight-bold ml-2 d-inline"
              :class="process != 1 ? 'red-text-2' : 'text-success'"
            >
              {{
                process != 1 ? "UNPROCESSED" : "PROCESSED BY: " + processInfo
              }}
            </h3>
          </div>
          <div class="col-lg-6 text-right">
            <h4 class="font-weight-bold">Provider : {{ nameProvider }}</h4>
          </div>
        </div>
      </div>
      <div class="pb-1">
        <ValidationObserver ref="accounts">
          <table class="table table-bordered">
            <tr :class="classAdd">
              <th colspan="4">
                <span>Personal Profile</span>
              </th>
            </tr>
            <tr>
              <th></th>
              <th class="font-weight-bold col-3 text-center">
                <span>Trans</span>
                <span style="color: #4d917a"> Union</span>
              </th>
              <th class="font-weight-bold col-3 text-center">
                <span>Experian</span>
              </th>
              <th class="font-weight-bold col-3 text-center">
                <span>EQUIFAX</span>
              </th>
            </tr>
            <tr>
              <td class="td-left col-2 text-right">
                <span>Score</span>
                <b-button
                  class="rounded ml-2"
                  :title="!editScore ? 'Edit Score' : 'Save Score'"
                  :variant="!editScore ? 'info' : 'success'"
                  v-if="isForSpecialist"
                  size="sm"
                  @click="editScore = !editScore"
                >
                  <i :class="'fas ' + (!editScore ? 'fa-edit' : 'fa-save')"></i>
                  {{ !editScore ? "Edit" : "Save" }}
                </b-button>
              </td>
              <template
                class="td-center td-bold"
                align="center"
                v-for="score in datos.score"
              >
                <td class="td-center td-bold" align="center" :key="score.id">
                  <span v-if="!editScore">{{ score.score }}</span>
                  <b-input
                    v-else
                    class="form-control"
                    type="text"
                    v-model="score.score"
                    v-mask="'###'"
                  ></b-input>
                </td>
              </template>
            </tr>
            <tr>
              <td class="td-left text-right">Credit Report Date</td>
              <td class="td-center text-center">
                <span>{{ datos.date }}</span>
              </td>
              <td class="td-center text-center">
                <span>{{ datos.date }}</span>
              </td>
              <td class="td-center text-center">
                <span>{{ datos.date }}</span>
              </td>
            </tr>
            <tr v-for="(LineIndex) in 3" :key="LineIndex">
            <td class="td-left text-right">
              {{LineIndex == 1 ? 'Name:' : LineIndex==2 ? 'Date of Birth:' : 'Address(es):'}}
              <b-button
                class="rounded ml-2"
                size="sm"
                @click="modalPersonalInfo(LineIndex)"
                v-if="LineIndex != 2 && isForSpecialist"
              >
                <i class="fas fa-plus"></i>
              </b-button>
              <div
                v-if="isForRound && personal_info.filter(x => x.type == LineIndex && x.to_select).length > 0"
                class="text-left"
              >
                <ValidationProvider rules="required" v-slot="{errors}">
                  <b-form-group label="ADD REASON" label-for="input-3">
                    <select
                      class="form-control"
                      v-model="setPersonal[LineIndex-1].reason"
                      :class="{'border border-danger':errors[0]}"
                    >
                      <option
                        v-for="reason in reasons"
                        :key="reason.id"
                        :value="reason.id"
                      >{{reason.value}}</option>
                    </select>
                  </b-form-group>
                </ValidationProvider>
                <ValidationProvider rules="required" v-slot="{errors}">
                  <b-form-group label="ADD INSTRUCTION" label-for="input-3">
                    <select
                      v-model="setPersonal[LineIndex-1].instruction"
                      class="form-control"
                      :class="{'border border-danger':errors[0]}"
                    >
                      <option
                        v-for="instruction in instructions"
                        :key="instruction.id"
                        :value="instruction.id"
                      >{{instruction.value}}</option>
                    </select>
                  </b-form-group>
                </ValidationProvider>
              </div>
            </td>
            <td class="td-center text-center" v-for="(rowsIndex) in 3" :key="rowsIndex">
              <ul class="list-unstyled">
                <template v-for="(name, index) in personal_info">
                  <li
                    :key="index"
                    v-if="name.type == LineIndex && name.bureau_id == rowsIndex"
                    class="text-center"
                  >
                    <b-form-checkbox
                      v-model="name.to_select"
                      v-if="isForRound && name.status != 1"
                    >{{name.content}}</b-form-checkbox>
                    <div v-else class="mb-2">
                      <div v-if="!name.for_edit">
                        <i class="fas fa-check" v-if="name.check"></i>
                        <span
                          class="text-blue-underline"
                          :class="name.status == 1 ? 'text-orange-wounder' : ''"
                          @click="displayCheckArray(name)"
                          v-if="!name.for_edit"
                        >{{name.content}}</span>
                        <b-button
                          v-if="isForSpecialist"
                          class="ml-2 rounded-circle"
                          size="sm"
                          @click="name.for_edit = !name.for_edit"
                        >
                          <i class="fas fa-edit"></i>
                        </b-button>
                      </div>

                      <div v-if="name.for_edit && isForSpecialist" class="row mx-0">
                        <div class="col-md-9 pr-0">
                          <b-form-input v-model="name.content"></b-form-input>
                        </div>
                        <div class="col-md-3 pl-0 mt-1">
                          <b-button
                            class="rounded-circle"
                            size="sm"
                            @click="name.for_edit = !name.for_edit"
                          >
                            <i class="fas fa-check"></i>
                          </b-button>
                        </div>
                      </div>
                    </div>

                    <div v-if="name.to_select">
                      <ValidationProvider rules="required" v-slot="{errors}">
                        <ul
                          class="list-group list-group-horizontal center my-3"
                          :class="{'border border-danger':errors[0]}"
                        >
                          <li class="list-group-item">
                            <b-form-checkbox
                              value="1"
                              v-model="name.type_of_disput"
                              :unchecked-value="null"
                            >PHONE</b-form-checkbox>
                          </li>
                          <li class="list-group-item">
                            <b-form-checkbox
                              value="2"
                              v-model="name.type_of_disput"
                              :unchecked-value="null"
                            >ONLINE</b-form-checkbox>
                          </li>
                          <li class="list-group-item">
                            <b-form-checkbox
                              value="3"
                              v-model="name.type_of_disput"
                              :unchecked-value="null"
                            >LETTER</b-form-checkbox>
                          </li>
                        </ul>
                      </ValidationProvider>
                    </div>
                  </li>
                </template>
              </ul>
            </td>
          </tr>
          </table>
        </ValidationObserver>
      </div>
    </b-card>
  </div>
</template>

<script>
import { amgApi } from "@/service/axios";
import { mapGetters } from "vuex";
export default {
  props: {
    idFile: {
      type: [],
    },
    idLead: {
      type: [Number, String],
    },
  },
  components: {},
  data() {
    return {
      process: "",
      processed_by: "",
      processed_at: "",
      day_processed: null,
      val: "",
      editScore: false,
      process: "",
      datos: {},
      data: [],
    };
  },
  computed: {
    ...mapGetters({
      skin: "appConfig/skin",
    }),
    classAdd() {
      return this.skin == "dark" ? "dark" : "light";
    },
    processInfo() {
      return this.processed_by + " - " + this.processed_at;
    },
    nameProvider() {
      return this.val == 1
        ? "IdentityIQ"
        : this.val == 3
        ? "PrivacyGuard"
        : this.val == 7
        ? "MyScoreIQ"
        : "MyFreeScoreNow";
    },
    isForSpecialist() {
      return this.process != 1 && this.$route.meta.module == 11;
    },
    isForRound() {
      return (
        this.process == 1 &&
        this.$route.meta.module == 11 &&
        this.day_processed > "2021-09-27"
      );
    },
  },
  created() {
    this.generateReport();
  },
  methods: {
    getDataOfScore() {
      amgApi
        .post("/get-cr-data", {
          score_id: this.idFile,
          account_id: this.idLead,
        })
        .then((res) => {
          //   this.reloadHeaders();
          //Add Scores
          this.datos.score[0].score = res.data.scores[0].transunion;
          this.datos.score[1].score = res.data.scores[0].experian;
          this.datos.score[2].score = res.data.scores[0].equifax;
          //Charge Data Accounts
          for (let i = 0; i < res.data.accounts.length; i++) {
            // this.addAccount();
          }
          res.data.accounts.map((item, i) => {
            item.map((element, j) => {
              let key = element.bureau_id - 1;
              this.accounts[i].element[key].a_description =
                element.a_description;
              this.accounts[i].element[key].a_number = element.a_number;
              this.accounts[i].element[key].a_status = element.a_status;
              this.accounts[i].element[key].balance = element.balance;
              this.accounts[i].element[key].bureau_id = element.bureau_id;
              this.accounts[i].element[key].c_limit = element.c_limit;
              this.accounts[i].element[key].comments = element.comments;
              this.accounts[i].element[key].content = element.content;
              this.accounts[i].element[key].date = element.date;
              this.accounts[i].element[key].id = element.id;
              this.accounts[i].element[key].lp_status = element.lp_status;
              this.accounts[i].element[key].monthly = element.monthly;
              this.accounts[i].element[key].n_months = element.n_months;
              this.accounts[i].element[key].p_status = element.p_status;
              this.accounts[i].element[key].type = element.type;
              this.accounts[i].element[key].status = element.status;
            });
          });
          //End Charge Data Accounts

          //Charge Data Inquires
          res.data.inquires.map((item, i) => {
            item.map((element, j) => {
              this.inquires.push({
                content: element.content,
                id: element.id,
                bureau_id: element.bureau_id,
                date_show: element.date_show,
                sub_content: element.sub_content,
                status: element.status,
                to_select: false,
                type_of_disput: null,
                reason: null,
                instruction: null,
                for_edit: false,
              });
            });
          });
          //End Charge Data Inquires

          //Charge Data Personal Information
          res.data.personal.map((item, i) => {
            item.map((element, j) => {
              this.personal_info.push({
                id: element.id,
                type: element.type,
                content: element.content,
                status: element.status,
                bureau_id: element.bureau_id,
                check: element.status == 6 ? true : false,
                to_select: false,
                type_of_disput: null,
                reason: null,
                instruction: null,
                for_edit: false,
              });
            });
          });
          //End Charge Data Personal Information

          //Charge Data Public Record
          for (let i = 0; i < res.data.public.length; i++) {
            this.addPublicRecord();
          }
          res.data.public.map((item, i) => {
            item.map((element, j) => {
              let key = element.bureau_id - 1;
              this.public_info[i].element[key].content = element.content;
              this.public_info[i].element[key].status = element.status;
              this.public_info[i].element[key].bureau_id = element.bureau_id;
              this.public_info[i].element[key].court = element.court;
              this.public_info[i].element[key].date = element.date;
              this.public_info[i].element[key].id = element.id;
              this.public_info[i].element[key].reference = element.reference;
              this.public_info[i].element[key].closing = element.closing;
              this.public_info[i].element[key].status_show =
                element.status_show;
              this.public_info[i].date = element.date;
              this.public_info[i].to_select = false;
            });
          });
          //End Charge Data Public Record
          this.round_id = res.data.round_id;
          btn.classList.remove("preloader-specialist");
        });
    },
    generateReport() {
      amgApi
        .post("/allreportlead", {
          id: this.idFile,
        })
        .then((response) => {
          if (response.status == 200) {
            this.datos = response.data[0].cr;
            this.data = response.data[0].cra;
            this.val = response.data[0].plataform_id;
            this.process = response.data[0].process;
            this.processed_by = response.data[0].processed_by;
            this.processed_at = response.data[0].processed_at;
            this.day_processed = response.data[0].day_processed;
            this.viewreport = true;
            if (this.isForRound) {
              //   this.getDataOfScore();
            } else {
              //   this.validateArrayAccounts();
              //   this.buildArrayInquires();
              //   this.buildArrayPersonal();
              //   this.buildArrayPublic();
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
.light {
  background-color: #f3f2f7;
}
.dark {
  background-color: #333b51;
}
</style>