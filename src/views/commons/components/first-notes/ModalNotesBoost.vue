<template>
  <div>
    <b-modal
      v-model="modalUp"
      title-class="h2 text-light"
      size="lg"
      title="Boost Credit Note"
      @hidden="hideModal()"
    >
      <ValidationObserver ref="form">
        <b-row>
          <b-col lg="4">
            <ValidationProvider name="identification" rules="required" v-slot="{errors}">
              <b-form-group label="Type of identification Number" label-class="font-weight-bolder">
                <b-form-radio-group
                  v-model="note.identification"
                  :options="identificationOptions"
                  name="identification"
                  :class="{'border border-danger rounded': errors[0]}"
                ></b-form-radio-group>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col lg="4">
            <ValidationProvider name="agreement" rules="required" v-slot="{errors}">
              <b-form-group label-class="font-weight-bolder" label="Type of Agreement">
                <b-form-radio-group
                  v-model="note.typeAgreement"
                  :options="typeAgreementOptions"
                  :class="{'border border-danger rounded': errors[0]}"
                  name="typeAgreement"
                ></b-form-radio-group>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col lg="4">
            <ValidationProvider name="Work" rules="required" v-slot="{errors}">
              <b-form-group label-class="font-weight-bolder" label="Work Status" label-for="work">
                <b-form-input
                  id="work"
                  v-model="note.work"
                  type="text"
                  :state="errors[0] ? false :  null"
                />
              </b-form-group>
            </ValidationProvider>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="4">
            <ValidationProvider name="Credit" rules="required" v-slot="{errors}">
              <b-form-group label-class="font-weight-bolder" label="Credit">
                <b-form-radio-group
                  v-model="note.credit"
                  :options="creditOptions"
                  :class="{'border border-danger rounded': errors[0]}"
                  name="Credit"
                ></b-form-radio-group>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col lg="3">
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
                />
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col lg="5">
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
                  label="title"
                  :options="dayOptions"
                  :class="{'border-danger rounded': errors[0]}"
                />
              </b-form-group>
            </ValidationProvider>
          </b-col>
        </b-row>

        <b-row>
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
                />
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col lg="3">
            <ValidationProvider name="Another" rules="required" v-slot="{errors}">
              <b-form-group
                label-class="font-weight-bolder"
                label="Did you use another SSN or ITIN?"
              >
                <b-form-radio-group
                  v-model="note.another"
                  :options="anotherOptions"
                  :class="{'border border-danger rounded': errors[0]}"
                  name="Another"
                ></b-form-radio-group>
              </b-form-group>
            </ValidationProvider>
          </b-col>
          <b-col lg="3">
            <ValidationProvider name="Pending" rules="required" v-slot="{errors}">
              <b-form-group label-class="font-weight-bolder" label=" Pending">
                <b-form-checkbox-group
                  v-model="note.pending"
                  :options="pendingOptions"
                  :class="{'border border-danger rounded': errors[0]}"
                  name="Pending"
                  stacked
                ></b-form-checkbox-group>
              </b-form-group>
            </ValidationProvider>
          </b-col>
        </b-row>
      </ValidationObserver>

      <template #modal-footer>
        <b-button variant="info" @click="saveNotesIncomplete">Save</b-button>
        <b-button variant="primary" @click="saveNotesCompleted">Save & Complete</b-button>
        <b-button variant="primary" @click="updateNotas">Update</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import vSelect from "vue-select";
import NotesServices from "@/views/commons/components/first-notes/services/notes.service";
export default {
  name: "ModalNotesBoost",
  components: {
    vSelect
  },
  props: {
    salesNotes: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  created() {
    this.getListTypeGoal();
  },
  mounted() {
    this.modalUp = true;
  },
  data() {
    return {
      modalUp: false,
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
        file: null,
        file_name: null,
        disablebutton: {
          save: false,
          update: false
        }
      },
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
        { title: "Sunday", id: 1 },
        { title: "Monday", id: 2 },
        { title: "Tuesday", id: 3 },
        { title: "Wednesday", id: 4 },
        { title: "Thursday", id: 5 },
        { title: "Friday", id: 6 },
        { title: "Saturday", id: 7 }
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
      ]
    };
  },
  computed: {
    ...mapGetters({
      bigWindow: "app/bigWindow",
      currentUser: "auth/currentUser",
      moduleId: "auth/moduleId",
      userSession: "auth/userSession"
    })
  },
  methods: {
    async saveNotesIncomplete() {
      const validate = await this.$refs.form.validate();
      if (validate) alert("validate");
    },
    async saveNotesCompleted() {
      const validate = await this.$refs.form.validate();
    },
    async updateNotas() {
      const validate = await this.$refs.form.validate();
    },
    hideModal() {
      this.modalUp = false;
      this.$emit("hide");
    },
    async getListTypeGoal() {
      try {
        const response = await NotesServices.getListTypeGoal();
        this.goalOptions = response;
      } catch (error) {
        this.showErrorSwal();
      }
    },
    async getTracking() {
      try {
        const params = {
          id_loan: this.info.idLoan
        };
        const response = await loansService.getTrackingLoan(params);
        this.trackingData = response;
        this.modalUp = true;
        this.removePreloader();
      } catch (error) {
        this.showErrorSwal();
        this.removePreloader();
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