<template>
  <div>
    <b-modal
      v-model="modalUp"
      size="xmd"
      header-class="p-0"
      header-bg-variant="transparent"
      footer-bg-variant
      @hide="hideModal()"
      scrollable
    >
      <template #modal-header>
        <HeaderModalNotes @close="hideModal" program="Boost Credit" :info="noteInfo" />
      </template>
      <ValidationObserver ref="form">
        <b-row class="px-1 mt-1">
          <b-col lg="4">
            <ValidationProvider name="identification" rules="required" v-slot="{errors}">
              <b-form-group label="Type of identification Number" label-class="font-weight-bolder">
                <b-form-radio-group
                  v-model="note.identification"
                  :options="identificationOptions"
                  name="identification"
                  :class="{'border border-danger rounded': errors[0]}"
                  :disabled="disabledNote"
                ></b-form-radio-group>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col lg="4">
            <ValidationProvider name="Another" rules="required" v-slot="{errors}">
              <b-form-group
                label-class="font-weight-bolder"
                label="Did you use another SSN or ITIN?"
              >
                <b-form-radio-group
                  v-model="note.another"
                  :options="anotherOptions"
                  :class="{'border border-danger rounded': errors[0]}"
                  :disabled="disabledNote"
                  name="Another"
                ></b-form-radio-group>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col lg="4">
            <ValidationProvider name="Pending" rules="required" v-slot="{errors}">
              <b-form-group label-class="font-weight-bolder" label=" Pending">
                <b-form-checkbox-group
                  v-model="note.pending"
                  :options="pendingOptions"
                  :class="{'border border-danger rounded': errors[0]}"
                  :disabled="disabledNote"
                  name="Pending"
                ></b-form-checkbox-group>
              </b-form-group>
            </ValidationProvider>
          </b-col>
        </b-row>
        <b-row class="mt-1 px-1">
          <b-col lg="4" v-if="dateTypeAgreement">
            <ValidationProvider name="agreement" rules="required" v-slot="{errors}">
              <b-form-group label-class="font-weight-bolder" label="Type of Agreement">
                <b-form-radio-group
                  v-model="note.typeAgreement"
                  :options="typeAgreementOptions"
                  :class="{'border border-danger rounded': errors[0]}"
                  :disabled="disabledNote"
                  name="typeAgreement"
                ></b-form-radio-group>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col lg="4">
            <ValidationProvider name="Credit" rules="required" v-slot="{errors}">
              <b-form-group label-class="font-weight-bolder" label="Credit">
                <b-form-radio-group
                  v-model="note.credit"
                  :options="creditOptions"
                  :class="{'border border-danger rounded': errors[0]}"
                  :disabled="disabledNote"
                  name="Credit"
                ></b-form-radio-group>
              </b-form-group>
            </ValidationProvider>
          </b-col>
        </b-row>
        <b-row class="mt-1 px-1">
          <b-col lg="4">
            <ValidationProvider name="Work" rules="required" v-slot="{errors}">
              <b-form-group label-class="font-weight-bolder" label="Work Status" label-for="work">
                <b-form-input
                  id="work"
                  v-model="note.work"
                  type="text"
                  :state="errors[0] ? false :  null"
                  :disabled="disabledNote"
                />
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col lg="4">
            <ValidationProvider name="Hours" rules="required" v-slot="{errors}">
              <b-form-group
                label-class="font-weight-bolder"
                label="Available Hours"
                label-for="hours"
              >
                <b-form-input
                  id="hours"
                  v-model="note.hours"
                  type="text"
                  :state="errors[0] ? false :  null"
                  :disabled="disabledNote"
                />
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col lg="4">
            <ValidationProvider name="TypeDays" rules="required" v-slot="{errors}">
              <b-form-group
                label-class="font-weight-bolder"
                label="Available Days"
                label-for="TypeDays"
              >
                <v-select
                  v-model="note.typeDays"
                  :dir="'ltr'"
                  multiple
                  transition="multiple"
                  label="name"
                  :options="dayOptions"
                  :class="{'border-danger rounded': errors[0]}"
                  :disabled="disabledNote"
                />
              </b-form-group>
            </ValidationProvider>
          </b-col>
        </b-row>
        <b-row class="mt-1 px-1">
          <b-col lg="6">
            <ValidationProvider name="TypGoal" rules="required" v-slot="{errors}">
              <b-form-group label-class="font-weight-bolder" label="Goal" label-for="TypGoal">
                <v-select
                  v-model="note.typeGoal"
                  :dir="'ltr'"
                  multiple
                  transition="multiple"
                  label="name"
                  :options="goalOptions"
                  :class="{'border-danger rounded': errors[0]}"
                  :disabled="disabledNote"
                />
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col lg="6">
            <ValidationProvider name="OriginCountry" rules="required" v-slot="{errors}">
              <b-form-group
                label-class="font-weight-bolder"
                label="Origin Country"
                label-for="OriginCountry"
              >
                <v-select
                  v-model="note.originCountry"
                  :dir="'ltr'"
                  transition="multiple"
                  label="name"
                  :options="countryOptions"
                  :reduce="value => value.id"
                  :class="{'border-danger rounded': errors[0]}"
                  :disabled="disabledNote"
                />
              </b-form-group>
            </ValidationProvider>
          </b-col>
        </b-row>

        <b-row class="mt-1 px-1">
          <b-col lg="6">
            <b-form-group label-class="font-weight-bolder" label="Attach Call">
              <b-input-group>
                <b-input-group-prepend>
                  <b-button
                    variant="info"
                    class="btn-icon"
                    :disabled="!audioCall || disabledFile"
                    title="Delete File"
                    @click="audioCall = null"
                  >
                    <feather-icon icon="Trash2Icon" class="text-white"></feather-icon>
                  </b-button>
                </b-input-group-prepend>

                <b-form-file
                  placeholder="Choose a file or drop it here..."
                  browse-text="Audio"
                  accept="audio/*"
                  v-model="audioCall"
                  :disabled="disabledFile"
                >
                  <template slot="file-name" slot-scope="{ names }">
                    <b-badge variant="primary">{{ names[0] }}</b-badge>
                  </template>
                </b-form-file>
              </b-input-group>
            </b-form-group>
          </b-col>

          <b-col lg="6" v-if="audioCall">
            <audio :src="note.fileAudio" controls class="mt-1 w-100" type="audio/mp3"></audio>
          </b-col>
        </b-row>

        <b-row class="px-1">
          <b-col lg="12">
            <ValidationProvider name="Inconvenience" rules="required" v-slot="{errors}">
              <b-form-group
                label-class="font-weight-bolder"
                label="Inconvenience"
                label-for="Inconvenience"
              >
                <b-form-textarea
                  no-resize
                  v-model="note.inconvenience"
                  rows="3"
                  :state="errors[0] ? false :  null"
                />
              </b-form-group>
            </ValidationProvider>
          </b-col>
        </b-row>

        <b-row class="mt-1 px-1">
          <b-col lg="12">
            <ValidationProvider name="Information" rules="required" v-slot="{errors}">
              <b-form-group
                label-class="font-weight-bolder"
                label="Information"
                label-for="Information"
              >
                <b-form-textarea
                  no-resize
                  v-model="note.information"
                  rows="3"
                  :state="errors[0] ? false :  null"
                />
              </b-form-group>
            </ValidationProvider>
          </b-col>
        </b-row>
        <b-row class="mt-1 px-1">
          <b-col lg="12">
            <ValidationProvider name="Recommendations" rules="required" v-slot="{errors}">
              <b-form-group
                label-class="font-weight-bolder"
                label="Recommendations"
                label-for="Recommendations"
              >
                <b-form-textarea
                  no-resize
                  v-model="note.recommendations"
                  rows="3"
                  :state="errors[0] ? false :  null"
                />
              </b-form-group>
            </ValidationProvider>
          </b-col>
        </b-row>
      </ValidationObserver>

      <template #modal-footer>
        <template v-if="noteInfo.created > '2021-05-16 00:00:00' ">
          <b-button variant="info" v-if="showButtonSave" @click="saveNotesIncomplete">Save</b-button>

          <b-button
            variant="primary"
            v-if="showButtonSave"
            @click="saveNotesCompleted"
          >Save & Complete</b-button>

          <b-button
            variant="primary"
            v-if="showNewButtonUpdate || showNewButtonUpdateAdmin"
            @click="updateNotas"
          >Update</b-button>
        </template>
        <template v-else>
          <b-button variant="info" v-if="showButtonSave" @click="saveNotesIncomplete">Save</b-button>
          <b-button variant="primary" v-if="showButtonUpdate" @click="updateNotas">Update</b-button>
        </template>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import vSelect from "vue-select";
import NotesServices from "@/views/commons/components/first-notes/services/notes.service";
import HeaderModalNotes from "./HeaderModalNotes.vue";
import GlobalService from "@/views/services/global.service";
import CommissionsModulesVue from "../commissions/CommissionsModules.vue";
export default {
  name: "ModalNotesBoost",
  components: {
    vSelect,
    HeaderModalNotes
  },
  props: {
    noteInfo: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  created() {
    this.getFirstNote();
    this.getListTypeGoal();
    this.getCountrys();
    this.getOriginCountry();
  },
  mounted() {
    console.log(this.emptyNote);
    console.log(this.noteInfo);
  },
  data() {
    return {
      modalUp: false,
      disabledForm: false,
      note: {
        identification: null,
        typeAgreement: null,
        work: null,
        credit: null,
        hours: null,
        typeDays: [],
        typeGoal: [],
        another: null,
        pending: [],
        originCountry: null,
        inconvenience: null,
        information: null,
        recommendations: null,
        fileAudio: null,
        fileName: null,
        file: null
      },
      audioCall: null,
      disablebutton: {
        save: false,
        update: false
      },
      showSave: false,
      showUpdate: false,
      showUpdateAdmin: false,
      noteNull: false,
      identificationOptions: [
        {
          text: "INVENTED SSN",
          value: "1"
        },
        {
          text: "ITIN",
          value: "2"
        },
        {
          text: "SSN",
          value: "3"
        }
      ],
      typeAgreementOptions: [
        {
          text: "Email",
          value: "Email"
        },
        {
          text: "Ups",
          value: "Ups"
        },
        {
          text: "Voice",
          value: "Voice"
        }
      ],
      creditOptions: [
        {
          text: "Increase",
          value: "1"
        },
        {
          text: "Start",
          value: "2"
        }
      ],
      dayOptions: [
        { name: "Sunday", id: 1 },
        { name: "Monday", id: 2 },
        { name: "Tuesday", id: 3 },
        { name: "Wednesday", id: 4 },
        { name: "Thursday", id: 5 },
        { name: "Friday", id: 6 },
        { name: "Saturday", id: 7 }
      ],
      goalOptions: [],
      anotherOptions: [
        {
          text: "Yes",
          value: "1"
        },
        {
          text: "No",
          value: "2"
        }
      ],
      pendingOptions: [
        {
          text: "UB",
          value: "1"
        },
        {
          text: "ID",
          value: "2"
        },
        {
          text: "OTHER",
          value: "3"
        }
      ],
      countryOptions: []
    };
  },
  computed: {
    ...mapGetters({
      bigWindow: "app/bigWindow",
      currentUser: "auth/currentUser",
      moduleId: "auth/moduleId",
      userSession: "auth/userSession",
      skin: "appConfig/skin"
    }),
    newNote() {
      return this.noteInfo.created > "2021-05-16 00:00:00";
    },
    emptyNote() {
      if (this.newNote) {
        return this.noteInfo.notes_status_new == null;
      }
      return this.noteInfo.notes_status == 0;
    },
    disabledNote() {
      return (
        this.noteInfo.statusSale == 4 ||
        this.noteInfo.statusSale == 2 ||
        this.noteInfo.notSeller
      );
    },
    disabledFile() {
      return this.noteInfo.statusSale == 4;
    },
    showButtonSave() {
      return this.showSave && !this.noteInfo.notSeller;
    },
    showNewButtonUpdate() {
      return (
        this.showUpdate && this.noteInfo.module != 4 && !this.noteInfo.notSeller
      );
    },
    showNewButtonUpdateAdmin() {
      return this.showUpdateAdmin && this.noteInfo.module == 4;
    },
    showButtonUpdate() {
      return this.showUpdate && !this.noteInfo.notSeller;
    },
    dateTypeAgreement() {
      return this.noteInfo.created > "2021-08-05";
    }
  },
  methods: {
    //Save or Update
    async saveNotesIncomplete() {
      const validate = await this.$refs.form.validate();
      console.log(this.note.typeGoal);
      console.log(this.note.typeDays);
    },
    async saveNotesCompleted() {
      const validate = await this.$refs.form.validate();
    },
    async updateNotas() {
      const validate = await this.$refs.form.validate();
      console.log(this.note.typeGoal);
      console.log(this.note.typeDays);
    },

    pushAnswersNote() {
      let note = [];
      note.push(
        { number: 1044, value: this.note.identification },
        { number: 1045, value: this.note.work },
        { number: 1046, value: this.note.credit },
        { number: 1047, value: this.note.hours },
        { number: 1048, value: this.note.typeDays },
        { number: 1049, value: this.note.typeGoal },
        { number: 1050, value: this.note.another },
        { number: 1051, value: this.note.pending },
        { number: 1052, value: this.note.inconvenience },
        { number: 1053, value: this.note.information },
        { number: 1054, value: this.note.recommendations },
        {
          number: 1063,
          value: this.dateTypeAgreement ? this.note.typeAgreement : 1
        },
        {
          number: 1055,
          value: (this.note.file =
            this.note.file_name != ""
              ? "SM/" + this.noteInfo.idLead + "/" + this.note.file_name
              : 0)
        }
      );
      return note;
    },

    //Get Answers Note
    async getFirstNote() {
      this.addPreloader();
      try {
        const params = { sale_id: this.noteInfo.saleId };
        const response = await NotesServices.getFirstNote(params);
        await this.cleanAnswers(response);
        await this.initialValidationNote(response);
        await this.getDetailsAnswers(response);
        this.modalUp = true;
        this.removePreloader();
      } catch (error) {
        this.modalUp = false;
        this.showErrorSwal(error);
        this.removePreloader();
      }
      return;

      this.modalUp = true;
    },

    cleanAnswers(answers) {
      answers.forEach(answer => {
        if (answer == "null") {
          answer = "";
          this.noteNull = true;
        }
      });
    },
    initialValidationNote(note) {
      if (note.length != 0 && this.noteInfo.statusSale == 2) {
        this.showSave = false;
        this.showUpdate = false;
        this.showUpdateAdmin = true;
        return;
      }

      if (
        note.length != 0 &&
        this.noteInfo.statusSale != 4 &&
        !this.noteNull &&
        this.newNote
      ) {
        this.showUpdate = true;
        this.showUpdateAdmin = false;
        return;
      }

      if (this.newNote && (note.length == 0 || this.noteNull)) {
        this.showSave = true;
        return;
      }

      if (note.length != 0 && this.noteInfo.statusSale != 4) {
        this.showUpdate = true;
        this.showUpdateAdmin = false;
        return;
      }

      if (note.length == 0) {
        this.showSave = true;
        return;
      }

      if (
        this.noteInfo.editModal ||
        this.noteInfo.statusSales == 4 ||
        this.noteInfo.statusSales == 2
      ) {
        this.showUpdate = false;
        this.showSave = false;
        this.showUpdateAdmin = false;
        return;
      }
    },
    getDetailsAnswers(note) {
      note.forEach(answer => {
        if (answer.question_id == 1044)
          this.note.identification = answer.answer;
        if (answer.question_id == 1045) this.note.work = answer.answer;
        if (answer.question_id == 1046) this.note.credit = answer.answer;
        if (answer.question_id == 1047) this.note.hours = answer.answer;
        if (answer.question_id == 1048)
          this.note.typeDays = JSON.parse(answer.answer);
        if (answer.question_id == 1049)
          this.note.typeGoal = JSON.parse(answer.answer);
        if (answer.question_id == 1050) this.note.another = answer.answer;
        if (answer.question_id == 1051)
          this.note.pending = JSON.parse(answer.answer);
        if (answer.question_id == 1052) this.note.inconvenience = answer.answer;
        if (answer.question_id == 1053) this.note.information = answer.answer;
        if (answer.question_id == 1054)
          this.note.recommendations = answer.answer;
        if (answer.question_id == 1055) {
          this.note.fileAudio = answer.answer;
          this.audioCall = answer.url;
        }
        if (answer.question_id == 1063) this.note.typeAgreement = answer.answer;
      });
    },

    //Initials Gets

    async getListTypeGoal() {
      try {
        const response = await NotesServices.getListTypeGoal();
        this.goalOptions = response;
      } catch (error) {
        this.showErrorSwal();
      }
    },
    async getCountrys() {
      try {
        const response = await GlobalService.getCountrys();
        this.countryOptions = response;
      } catch (error) {
        this.showErrorSwal();
      }
    },
    getOriginCountry() {
      this.note.originCountry = this.noteInfo.originCountry;
    },

    /* File */
    onAudioChange() {
      console.log(this.audioCall);
      var file = this.audioCall;
      var reader = new FileReader();
      reader.onload = e => {
        this.note.fileAudio = e.target.result;
      };
      this.note.fileName = file.name;
      reader.readAsDataURL(file);
    },

    //Hide Modal
    hideModal() {
      this.modalUp = false;
      this.$emit("hide");
    }
  },
  watch: {
    audioCall(newValue) {
      if (newValue) {
        this.onAudioChange();
      }
    }
  }
};
</script>

<style scoped>
.restart-font-size {
  font-size: 100% !important;
}
* {
  font-size: 0.8rem !important;
}
</style>