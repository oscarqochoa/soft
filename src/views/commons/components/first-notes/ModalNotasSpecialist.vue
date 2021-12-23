<template>
  <b-modal
    v-model="modalShow"
    id="modal-lg"
    size="lg"
    title="NOTES"
    header-class="b-vue-modal-header"
    modal-class="height-modal"
    content-class="modal-classs-credit-content"
    scrollable
  >
    <template #modal-header>
      <div class="col-lg-12 col-md-12" style="text-align: center;">
        <h3>NOTES</h3>
        <i class="fas fa-times icon-close-target" @click="closeModal"></i>
      </div>
    </template>
    <b-container fluid>
      <b-row>
        <b-col lg="12" md="12" style="text-align: center;">
          <b-row>
            <div
              :class="
              notesprogram[0].program_id == 1 ? 'col-md-3' : 'col-md-4'
            "
            >
              <b-card no-body>
                <template #header>
                  <h4 class="mb-0">Program</h4>
                </template>
                <b-card-body>
                  <b-card-text>{{ program }}</b-card-text>
                </b-card-body>
              </b-card>
              <!--
            <table class="table">
              <tbody style="border: 1px solid #ccc;">
                <tr class style="background: #999999;color: #ffffff;">
                  <td style="text-align: left;padding-left:20px">Program</td>
                </tr>
                <tr class>
                  <td style="text-align: left;padding-left:20px">
                    <span>{{ program }}</span>
                  </td>
                </tr>
              </tbody>
              </table>-->
            </div>
            <div
              :class="
              notesprogram[0].program_id == 1 ? 'col-md-3' : 'col-md-4'
            "
            >
              <b-card no-body>
                <template #header style="background: #999999;color: #ffffff;">
                  <h4 class="mb-0">Client</h4>
                </template>
                <b-card-body>
                  <b-card-text style="text-align: left;padding-left:20px">{{ client_name }}</b-card-text>
                </b-card-body>
              </b-card>
              <!--
            <table class="table">
              <tbody style="border: 1px solid #ccc;">
                <tr class style="background: #999999;color: #ffffff;">
                  <td style="text-align: left;padding-left:20px">Client</td>
                </tr>
                <tr class>
                  <td style="text-align: left;padding-left:20px">
                    <span>{{ client_name }}</span>
                  </td>
                </tr>
              </tbody>
              </table>-->
            </div>
            <div
              :class="
              notesprogram[0].program_id == 1 ? 'col-md-3' : 'col-md-4'
            "
            >
              <b-card no-body>
                <template #header style="background: #999999;color: #ffffff;">
                  <h4 class="mb-0">Source</h4>
                </template>
                <b-card-body>
                  <b-card-text style="text-align: left;padding-left:20px">{{ sourcesname }}</b-card-text>
                </b-card-body>
              </b-card>
              <!--
            <table class="table">
              <tbody style="border: 1px solid #ccc;">
                <tr class style="background: #999999;color: #ffffff;">
                  <td style="text-align: left;padding-left:20px">Source</td>
                </tr>
                <tr class>
                  <td style="text-align: left;padding-left:20px">
                    <span>{{ sourcesname }}</span>
                  </td>
                </tr>
              </tbody>
              </table>-->
            </div>
            <div class="col-md-12">
              <div class="form-group class-inline row" style="margin-top: 0;">
                <div class="class-campo-icon add-class-campo-icon col-md-4">
                  <span>Catcher | Seller</span>
                </div>
                <div class="class-campo-text col-md-8">
                  {{
                  notesprogram[0].captured +
                  " | " +
                  notesprogram[0].seller
                  }}
                </div>
              </div>
            </div>
          </b-row>
        </b-col>
        <validation-observer ref="form">
          <b-col lg="12" md="12" style="height: 360px;overflow-y: auto;">
            <b-row>
              <b-col md="7">
                <b-form-group class="form-group-idtypenumber" label="TYPE OF SERVICE">
                  <div class="contentradiobtn" style="display:flex;">
                    <b-form-radio
                      v-for="(value, key) in listTypeService"
                      v-model="service"
                      :name="'service'"
                      :value="value.value"
                      :key="key"
                      :disabled="disable"
                    >{{value.text}}</b-form-radio>
                  </div>
                </b-form-group>
              </b-col>
              <b-col md="5" v-if="dateTypeAgreement">
                <validation-provider rules="required" v-slot="{ errors }">
                  <b-form-group class="form-group-idtypenumber" label="Type of Agreement">
                    <div
                      class="contentradiobtn"
                      style="display:flex;"
                      :class="{ 'border border-danger': errors[0] }"
                    >
                      <b-form-radio
                        v-for="(value, key) in listTypeAgreement"
                        v-model="typeAgreement"
                        :name="'listTypeAgreement'"
                        :value="value.value"
                        :key="key"
                        :disabled="disable"
                      >{{value.text}}</b-form-radio>
                    </div>
                  </b-form-group>
                </validation-provider>
              </b-col>
              <b-col md="12" v-if="service == 1">
                <b-row>
                  <b-col md="5">
                    <validation-provider rules="required" v-slot="{ errors }">
                      <b-form-group class="form-group-idtypenumber" label="PREVIOUS ID NUMBERS">
                        <div
                          class="contentradiobtn"
                          style="display:flex;"
                          :class="{ 'border border-danger': errors[0] }"
                        >
                          <b-form-radio
                            v-for="(value, key) in listPreviousIdNumber"
                            v-model="previous"
                            :name="'listPreviousIdNumber'"
                            :value="value.value"
                            :key="key"
                            :disabled="disable"
                          >{{value.text}}</b-form-radio>
                        </div>
                      </b-form-group>
                    </validation-provider>
                    <b-row>
                      <b-col md="8">
                        <validation-provider rules="required" v-slot="{ errors }">
                          <b-form-group class="form-group-idtypenumber" label="TIME">
                            <b-form-input
                              :class="{ 'border border-danger': errors[0] }"
                              v-model="time_previous"
                              :disabled="disable"
                            ></b-form-input>
                          </b-form-group>
                        </validation-provider>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col md="2">
                    <label style="position: relative;top: 35px;">TO</label>
                  </b-col>
                  <b-col md="5">
                    <validation-provider rules="required" v-slot="{ errors }">
                      <b-form-group class="form-group-idtypenumber" label="CURRENT ID NUMBER">
                        <div
                          class="contentradiobtn"
                          style="display:flex;"
                          :class="{ 'border border-danger': errors[0] }"
                        >
                          <b-form-radio
                            v-for="(value, key) in listCurrentIdNumber"
                            v-model="currentNumber"
                            :name="'currentNumber'"
                            :value="value.value"
                            :key="key"
                            :disabled="disable"
                          >{{value.text}}</b-form-radio>
                        </div>
                      </b-form-group>
                    </validation-provider>
                    <b-row>
                      <b-col md="8">
                        <validation-provider rules="required" v-slot="{ errors }">
                          <b-form-group class="form-group-idtypenumber" label="TIME">
                            <b-form-input
                              :class="{ 'border border-danger': errors[0] }"
                              v-model="time_current"
                              :disabled="disable"
                            ></b-form-input>
                          </b-form-group>
                        </validation-provider>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-col>
              <b-col lg="12" md="12" v-if="service == 2">
                <b-row>
                  <b-col md="7">
                    <validation-provider rules="required" v-slot="{ errors }">
                      <b-form-group class="form-group-idtypenumber" label="ID TYPE NUMBER">
                        <div
                          class="contentradiobtn"
                          style="display:flex;"
                          :class="{ 'border border-danger': errors[0] }"
                        >
                          <b-form-radio
                            v-for="(value, key) in listTypeNumber"
                            v-model="typeNumber"
                            :name="'typeNumber'"
                            :value="value.value"
                            :key="key"
                            :disabled="disable"
                          >{{value.text}}</b-form-radio>
                        </div>
                      </b-form-group>
                    </validation-provider>
                  </b-col>
                  <b-col md="7" class="col-md-7">
                    <validation-provider rules="required" v-slot="{ errors }">
                      <b-form-group class="form-group-idtypenumber" label="STUDENT LOAN TYPE">
                        <div
                          class="contentradiobtn"
                          style="display:flex;"
                          :class="{ 'border border-danger': errors[0] }"
                        >
                          <b-form-radio
                            v-for="(value, key) in listStudentLoanType"
                            v-model="loanType"
                            :name="'loanType'"
                            :value="value.value"
                            :key="key"
                            :disabled="disable"
                          >{{value.text}}</b-form-radio>
                        </div>
                      </b-form-group>
                    </validation-provider>
                  </b-col>
                  <b-col md="5" class="col-md-5">
                    <validation-provider rules="required" v-slot="{ errors }">
                      <b-form-group class="form-group-idtypenumber" label="AMOUNT OWED">
                        <b-input-group size="lg" prepend="$">
                          <b-form-input
                            :class="{ 'border border-danger': errors[0] }"
                            v-model="amount"
                            @blur="formatCred"
                            :disabled="disable"
                          ></b-form-input>
                        </b-input-group>
                      </b-form-group>
                    </validation-provider>
                  </b-col>
                </b-row>
              </b-col>
              <b-col lg="6" md="6">
                <b-form-group label="Origin Country" label-for="Origin Country">
                  <b-form-select
                    id="origin_country"
                    v-model="origin_country"
                    :options="countrys"
                    class="select-icon-none font-bureau-style border-hover bg-white-c"
                    :disabled="disable"
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col lg="12" md="12">
                <validation-provider rules="required" v-slot="{ errors }">
                  <b-form-group label="Inconvenience" label-for="textarea-lazy" class="mb-0">
                    <b-form-textarea
                      id="textarea-lazy"
                      v-model="inconvenience"
                      :class="{ 'border border-danger': errors[0] }"
                    ></b-form-textarea>
                  </b-form-group>
                </validation-provider>
              </b-col>

              <b-col lg="12" md="12">
                <validation-provider rules="required" v-slot="{ errors }">
                  <b-form-group label="Information" label-for="textarea-lazy" class="mb-0">
                    <b-form-textarea
                      id="textarea-lazy"
                      v-model="information"
                      :class="{ 'border border-danger': errors[0] }"
                    ></b-form-textarea>
                  </b-form-group>
                </validation-provider>
              </b-col>

              <b-col lg="12" md="12">
                <validation-provider rules="required" v-slot="{ errors }">
                  <b-form-group label="Recommendations" label-for="textarea-lazy" class="mb-0">
                    <b-form-textarea
                      id="textarea-lazy"
                      v-model="recommendations"
                      :class="{ 'border border-danger': errors[0] }"
                    ></b-form-textarea>
                  </b-form-group>
                </validation-provider>
              </b-col>

              <b-col lg="12" md="12">
                <validation-provider rules="required" v-slot="{ errors }">
                  <b-form-group label="Pending" label-for="textarea-lazy" class="mb-0">
                    <b-form-textarea
                      id="textarea-lazy"
                      v-model="pending"
                      :class="{ 'border border-danger': errors[0] }"
                    ></b-form-textarea>
                  </b-form-group>
                </validation-provider>
              </b-col>
              <b-col lg="12" md="12">
                <validation-provider rules="required" v-slot="{ errors }">
                  <b-form-group label="Goal" label-for="textarea-lazy" class="mb-0">
                    <b-form-textarea
                      id="textarea-lazy"
                      v-model="goal"
                      :class="{ 'border border-danger': errors[0] }"
                    ></b-form-textarea>
                  </b-form-group>
                </validation-provider>
              </b-col>
            </b-row>
          </b-col>
        </validation-observer>
      </b-row>
    </b-container>
    <template #modal-footer>
      <b-container fluid class="modal-footer" v-if="(createsNote > '2021-05-16 00:00:00')">
        <b-button
          v-if="showSave && !notSeller"
          type="button"
          @click="saveNotesIncomplete"
          style="background-color: rgb(30, 191, 203);border:none; "
          pill
        >
          <i class="far fa-save"></i> SAVE
        </b-button>
        <b-button
          class="text-decoration-none"
          type="button"
          v-if="showSave && !notSeller"
          @click="saveNotesCompleted"
          style=" width: 150px;"
          variant="success"
          pill
        >
          <i class="far fa-save"></i> SAVE&COMPLETE
        </b-button>

        <b-button
          v-if="showUpdate && !notSeller"
          type="button"
          @click="updateNotas"
          variant="success"
          pill
        >
          <i class="far fa-save"></i> UPDATE
        </b-button>
      </b-container>
      <b-container fluid class="modal-footer" v-else>
        <b-button
          v-if="showSave && !notSeller"
          type="button"
          @click="saveNotesCompleted"
          style=" width: 150px"
          variant="success"
          pill
        >
          <i class="far fa-save"></i> SAVE
        </b-button>
        <b-button
          v-if="showUpdate && !notSeller"
          type="button"
          @click="updateNotas"
          variant="success"
        >
          <i class="far fa-save"></i> UPDATE
        </b-button>
      </b-container>
    </template>
  </b-modal>
</template>

<script>
import wysiwyg from "vue-wysiwyg";
Vue.use(wysiwyg, {
  maxHeight: "60px",
});
export default {
  props: [
    "notesprogram",
    "nameProgram",
    "nameClient",
    "type",
    "editmodal",
    "statusSale",
    "sourcesname",
    "pack",
    "role_id",
    "sale",
    "salemades",
    "created",
    "originCountry",
    "idLead",
    "notSeller",
  ],
  data() {
    return {
      modalShow: true,
      program: this.nameProgram,
      client_name: this.nameClient,
      //PREVIOUS ID NUMBERS
      listTypeService: [
        {
          text: "TRANSFER INFORMATION",
          value: "1",
        },
        {
          text: "STUDENT LOAN",
          value: "2",
        },
      ],
      listTypeAgreement: [
        {
          text: "Email",
          value: "Email",
        },
        {
          text: "Ups",
          value: "Ups",
        },
        {
          text: "Voice",
          value: "Voice",
        },
      ],
      listPreviousIdNumber: [
        {
          text: "INVENTED SSN",
          value: "1",
        },
        {
          text: "ITIN",
          value: "2",
        },
        {
          text: "SSN",
          value: "3",
        },
      ],
      listCurrentIdNumber: [
        {
          text: "INVENTED SSN",
          value: "1",
        },
        {
          text: "ITIN",
          value: "2",
        },
        {
          text: "SSN",
          value: "3",
        },
      ],
      listStudentLoanType: [
        {
          text: "PRIVATE",
          value: 1,
        },
        {
          text: "FEDERAL",
          value: 2,
        },
      ],
      listTypeNumber: [
        {
          text: "INVENTED SSN",
          value: 1,
        },
        {
          text: "ITIN",
          value: 2,
        },
        {
          text: "SSN",
          value: 3,
        },
      ],
      valorEdit: false,
      tranfer: "",
      student: "",
      viewtranfer: "",
      time_previous: "",
      time_current: "",
      inconvenience: "",
      information: "",
      recommendations: "",
      pending: "",
      goal: "",
      amount: "",
      pre: "",
      cur: "",
      num: "",
      loa: "",
      loa: "",
      service: 1,
      previous: "",
      currentNumber: "",
      typeNumber: "",
      loanType: "",
      typeAgreement: "",
      showSave: false,
      showUpdate: false,
      valider: "",
      disable: false,
      currencyValue: 0,
      noteNull: false,
      origin_country: null,
      countrys: [],
    };
  },
  watch: {
    modalShow(newVal) {
      if (!newVal) {
        this.$emit("close", false);
      }
    },
  },
  mounted() {
    if (this.statusSale == 4 || this.statusSale == 2 || this.notSeller) {
      this.disable = true;
    } else {
      this.disable = false;
    }
  },
  methods: {
    closeModal() {
      this.$emit("close", false);
    },
    getAnswer() {
      axios
        .post("/api/getfirstnote", {
          sale_id: this.notesprogram[0].sale_id,
        })
        .then((response) => {
          if (response.status == 200) {
            //botons
            for (var x = 0; x < response.data.length; x++) {
              if (response.data[x].answer == "null") {
                this.noteNull = true;
              }
            }

            if (response.data.length != 0 && this.statusSale == 2) {
              this.showSave = false;
              this.showUpdate = false;
            } else if (
              response.data.length != 0 &&
              this.statusSale != 4 &&
              !this.noteNull &&
              this.createsNote > "2021-05-16 00:00:00"
            ) {
              this.showUpdate = true;
            } else if (
              this.noteNull &&
              this.createsNote > "2021-05-16 00:00:00"
            ) {
              this.showSave = true;
            } else if (response.data.length != 0 && this.statusSale != 4) {
              this.showUpdate = true;
            } else if (response.data.length == 0) {
              this.showSave = true;
            } else if (
              this.editmodal == true ||
              this.statusSale == 4 ||
              this.statusSale == 2
            ) {
              this.showSave = false;
              this.showUpdate = false;
            }

            response.data.map((index) => {
              if (this.service == 1) {
                if (index.question_id == 1031) {
                  this.service = index.answer;
                  this.valider = this.service == 1 ? 1 : 2;
                }
              }

              if (this.previous == "") {
                if (index.question_id == 1032 && this.valider == 1) {
                  this.previous = index.answer;
                }
              }

              if (this.time_previous == "") {
                if (index.question_id == 1033 && this.valider == 1) {
                  this.time_previous =
                    index.answer == "null" ? "" : index.answer;
                }
              }

              if (this.currentNumber == "") {
                if (index.question_id == 1034 && this.valider == 1) {
                  this.currentNumber = index.answer;
                }
              }

              if (this.time_current == "") {
                if (index.question_id == 1035 && this.valider == 1) {
                  this.time_current =
                    index.answer == "null" ? "" : index.answer;
                }
              }

              if (this.typeNumber == "") {
                if (index.question_id == 1036 && this.valider == 2) {
                  this.typeNumber = index.answer;
                }
              }

              if (this.loanType == "") {
                if (index.question_id == 1037 && this.valider == 2) {
                  this.loanType = index.answer;
                }
              }

              if (this.amount == "") {
                if (index.question_id == 1038 && this.valider == 2) {
                  this.amount = index.answer == "null" ? "" : index.answer;
                }
              }

              if (this.inconvenience == "") {
                if (index.question_id == 1039) {
                  this.inconvenience =
                    index.answer == "null" ? "" : index.answer;
                }
              }
              if (this.information == "") {
                if (index.question_id == 1040) {
                  this.information = index.answer == "null" ? "" : index.answer;
                }
              }
              if (this.recommendations == "") {
                if (index.question_id == 1041) {
                  this.recommendations =
                    index.answer == "null" ? "" : index.answer;
                }
              }
              if (this.pending == "") {
                if (index.question_id == 1042) {
                  this.pending = index.answer == "null" ? "" : index.answer;
                }
              }
              if (this.goal == "") {
                if (index.question_id == 1043) {
                  this.goal = index.answer == "null" ? "" : index.answer;
                }
              }
              if (this.typeAgreement == "") {
                if (index.question_id == 1063) {
                  this.typeAgreement =
                    index.answer == "null" ? "" : index.answer;
                }
              }
            });
          }
        });
    },
    saveNotesCompleted() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        } else {
          if (this.noteNull) {
            this.updateaxios();
          } else {
            this.saveaxios();
          }
        }
      });
    },
    saveaxios() {
      this.notesprogram[0].sale_id;
      var dt = [];
      dt.push(
        { number: 1031, value: this.service },
        {
          number: 1032,
          value: this.previous ? this.previous : 0,
        },
        { number: 1033, value: this.service == 2 ? 1 : this.time_previous },
        {
          number: 1034,
          value: this.currentNumber ? this.currentNumber : 0,
        },
        { number: 1035, value: this.service == 2 ? 1 : this.time_current },
        {
          number: 1036,
          value: this.typeNumber ? this.typeNumber : 0,
        },
        {
          number: 1037,
          value: this.loanType ? this.loanType : 0,
        },
        { number: 1038, value: this.service == 1 ? 1 : this.amount },
        { number: 1039, value: this.inconvenience },
        { number: 1040, value: this.information },
        { number: 1041, value: this.recommendations },
        { number: 1042, value: this.pending },
        { number: 1043, value: this.goal },
        { number: 1063, value: this.dateTypeAgreement ? this.typeAgreement : 1 }
      );
      swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#ab9220",
          cancelButtonColor: "#8f9194",
          confirmButtonText: "Yes",
        })
        .then((result) => {
          if (result.value) {
            axios
              .post("/api/insertfirstnote", {
                sale_id: this.notesprogram[0].sale_id,
                note: dt,
                originCountry: this.origin_country,
                idLead: this.idLead,
              })
              .then((response) => {
                if (response.status == 200) {
                  swal
                    .fire({
                      type: "success",
                      title: "OPERATION SUCCESSFULLY",
                    })
                    .then((res) => {
                      if (res) {
                        this.$emit("click", false);
                      }
                    });
                }
              });
          }
        });
    },
    updateNotas() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        } else {
          this.updateaxios();
        }
      });
    },
    saveNotesIncomplete() {
      if (this.noteNull) {
        this.updateaxios();
      } else {
        this.saveaxios();
      }
    },
    updateaxios() {
      this.notesprogram[0].sale_id;
      var dt = [];
      dt.push(
        { number: 1031, value: this.service },
        {
          number: 1032,
          value: this.previous ? this.previous : 0,
        },
        { number: 1033, value: this.service == 2 ? 1 : this.time_previous },
        {
          number: 1034,
          value: this.currentNumber ? this.currentNumber : 0,
        },
        { number: 1035, value: this.service == 2 ? 1 : this.time_current },
        {
          number: 1036,
          value: this.typeNumber ? this.typeNumber : 0,
        },
        {
          number: 1037,
          value: this.loanType ? this.loanType : 0,
        },
        { number: 1038, value: this.service == 1 ? 1 : this.amount },
        { number: 1039, value: this.inconvenience },
        { number: 1040, value: this.information },
        { number: 1041, value: this.recommendations },
        { number: 1042, value: this.pending },
        { number: 1043, value: this.goal },
        { number: 1063, value: this.dateTypeAgreement ? this.typeAgreement : 1 }
      );
      swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#ab9220",
          cancelButtonColor: "#8f9194",
          confirmButtonText: "Yes",
        })
        .then((result) => {
          if (result.value) {
            axios
              .post("/api/updatefirstnote", {
                sale_id: this.notesprogram[0].sale_id,
                note: dt,
                originCountry: this.origin_country,
                idLead: this.idLead,
              })
              .then((response) => {
                if (response.status == 200) {
                  swal
                    .fire({
                      type: "success",
                      title: "OPERATION SUCCESSFULLY",
                    })
                    .then((res) => {
                      if (res) {
                        this.$emit("click", false);
                      }
                    });
                }
              });
          }
        });
    },
    formatCred() {
      // if(this.amount >= 0){
      this.currencyValue = parseFloat(this.amount.replace(/[^\d\.]/g, ""));
      console.log("this.currencyValue", this.currencyValue);
      // Ensure that it is not NaN. If so, initialize it to zero.
      // This happens if user provides a blank input or non-numeric input like "abc"
      if (isNaN(this.currencyValue)) {
        this.currencyValue = 0;
      }
      // Format display value based on calculated currencyValue
      this.amount = this.currencyValue
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
      // }
    },
    getCountries() {
      axios
        .post("/api/view-countrys", {})
        .then((response) => {
          let tempCountrys = response.data;
          tempCountrys.forEach((element) => {
            element["text"] = element.name;
            element["value"] = element.id;
          });
          this.countrys = tempCountrys;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  computed: {
    //Date of creation
    createsNote() {
      if (this.salemades) {
        for (var i = 0; i < this.salemades.length; i++) {
          if (this.salemades[i].id == this.notesprogram[0].sale_id) {
            return this.salemades[i].creates;
          }
        }
      }
    },
    dateTypeAgreement() {
      return this.created > "2021-08-05";
    },
  },
  created() {
    this.origin_country = this.originCountry;
    this.getCountries();
    this.getAnswer();
    if (this.statusSale == 2) {
      this.disable = true;
    } else {
      this.disable = false;
    }
  },
};
</script>

<style lang="stylus">
.textarea-style {
  border: 1px solid #ccc;
  width: 100%;
  height: 80px;
  border-radius: 15px;
  padding: 5px;
}

.required-text {
  border: 1px solid red !important;
  margin: 0;
}

#nohoverlink:hover {
  color: #fff;
}

#nohoverlink {
  float: left;
  margin-bottom: 8px;
  width: 11rem;
}

.form-group-idtypenumber legend {
  font-weight: 700;
  color: black;
}

.contentradiobtn .custom-control {
  margin-right: 20px;
}

::v-deep .modal-content, .modal-content, ::v-deep .modal {
  position: fixed;
  width: 800px;
  top: 31px;
  background: red !important;
}

::v-deep .my-modal, .my-modal {
  background: red !important;
  color: white;
  display: none !important;
}

::v-deep .modal-dialog {
  top: 0px;
  margin-top: 0px;
  background: red !important;
}

.my-modal .modal-body {
  max-height: 80vh; /* max 80% of the viewport height */
  overflow-y: auto;
  background: red !important;
}

/deep/ .my-modal {
  display: none !important;
}

/deep/ .modal-content, ::v-deep .modal-content {
  background: red !important;
}

::v-deep #modal-lg {
  top: 0px;
  overflow: hidden;
}

.btn-color-green, .btn-color-greenn {
  width: 80px;
  height: 25px;
  padding: 2px;
  background: #55af88;
  color: #fff;
  border: 1px solid #55af88;
  border-radius: 5px;
}
</style>
