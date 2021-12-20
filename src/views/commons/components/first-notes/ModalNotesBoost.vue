<template>
  <div>
    <b-modal
      v-model="modalUp"
      title-class="h2"
      size="lg"
      title="Boost Credit Note"
      hide-footer
      modal-class="modal-primary"
      @hidden="hideModal()"
    >
      <b-row>
        <b-col lg="4">
          <ValidationProvider name="identification" rules="required" v-slot="{errors}">
            <b-form-radio-group
              v-model="note.identification"
              :options="identificationOptions"
              :state="state"
              class="demo-inline-spacing"
              name="identification"
            >
              <b-form-invalid-feedback v-if="errors[0]" :state="state">Please select one</b-form-invalid-feedback>
              <b-form-valid-feedback :state="state">Thank you</b-form-valid-feedback>
            </b-form-radio-group>
          </ValidationProvider>
        </b-col>

        <b-col lg="4">
          <ValidationProvider name="agreement" rules="required" v-slot="{errors}">
            <b-form-radio-group
              v-model="note.typeAgreement"
              :options="typeAgreementOptions"
              :state="state"
              class="demo-inline-spacing"
              name="typeAgreement"
            >
              <b-form-invalid-feedback v-if="errors[0]" :state="state">Please select one</b-form-invalid-feedback>
              <b-form-valid-feedback :state="state">Thank you</b-form-valid-feedback>
            </b-form-radio-group>
          </ValidationProvider>
        </b-col>
        <b-col lg="4">
          <ValdationProvider name="Work" rules="required" v-slot="{valid, errors}">
            <b-form-group label="Work Status" label-for="work">
              <b-form-input
                id="work"
                v-model="note.work"
                type="text"
                :state="errors[0] ? false : (valid ? true : null)"
              />
            </b-form-group>
          </ValdationProvider>
        </b-col>
      </b-row>

      <b-row>
        <b-col lg="4">
          <ValidationProvider name="Credit" rules="required" v-slot="{errors}">
            <b-form-radio-group
              v-model="note.credit"
              :options="creditOptions"
              :state="state"
              class="demo-inline-spacing"
              name="Credit"
            >
              <b-form-invalid-feedback v-if="errors[0]" :state="state">Please select one</b-form-invalid-feedback>
              <b-form-valid-feedback :state="state">Thank you</b-form-valid-feedback>
            </b-form-radio-group>
          </ValidationProvider>
        </b-col>
        <b-col lg="3">
          <ValdationProvider name="Hours" rules="required" v-slot="{valid, errors}">
            <b-form-group label="Available Hours" label-for="hours">
              <b-form-input
                id="hours"
                v-model="note.hours"
                type="text"
                :state="errors[0] ? false : (valid ? true : null)"
              />
            </b-form-group>
          </ValdationProvider>
        </b-col>
        <b-col lg="5">
          <ValdationProvider name="TypeDays" rules="required" v-slot="{errors}">
            <b-form-group label="Available Days" label-for="TypeDays">
              <v-select
                v-model="note.typeDays"
                :dir="'ltr'"
                multiple
                label="title"
                :options="dayOptions"
                :class="{'is-invalid': errors[0]}"
              />
            </b-form-group>
          </ValdationProvider>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import loansService from "@/views/commons/components/loans/services/loans.service";
import { mapGetters, mapMutations } from "vuex";
import vSelect from "vue-select";
export default {
  name: "ModalTrackingLoan",
  components: {
    vSelect
  },
  props: {
    info: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  created() {},
  mounted() {},
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
        typeGoal: null,
        another: null,
        pending: null,
        originCountry: null,
        inconvenience: null,
        information: null,
        recommendations: null,
        file: null,
        file_name: null
      },
      identificationOptions: [
        {
          label: "INVENTED SSN",
          value: "1"
        },
        {
          label: "ITIN",
          value: "2"
        },
        {
          label: "SSN",
          value: "3"
        }
      ],
      typeAgreementOptions: [
        {
          label: "Email",
          value: "Email"
        },
        {
          label: "Ups",
          value: "Ups"
        },
        {
          label: "Voice",
          value: "Voice"
        }
      ],
      creditOptions: [
        {
          label: "Increase",
          value: "1"
        },
        {
          label: "Start",
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
    hideModal() {
      this.modalUp = false;
      this.$emit("hide");
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