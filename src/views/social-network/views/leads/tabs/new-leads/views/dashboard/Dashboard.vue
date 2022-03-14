<template>
  <div>
    <header-slot>
      <b-row slot="actions" class="justify-content-end">
        <b-button
          variant="primary"
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
        <b-button
          variant="success"
          class="mr-1"
          :to="{ name: 'sn-create-new-lead' }"
        >
          <feather-icon
            icon="MessageCircleIcon"
            size="15"
            class="mr-50 text-white"
          ></feather-icon>
          SEND SMS
        </b-button>
      </b-row>
    </header-slot>

    <b-row class="card-group">
      <b-col md="12">
        <card-personal-information
          :modul="modul"
          :lead="lead"
          :personalInfo="personalInfo"
          :personalAddress="personalAddress"
          :personalMobile="personalMobile"
          :requiredFieldsForCreateCrmTask="requiredFieldsForCreateCrmTask"
        />
      </b-col>
      <b-col md="12">
        <card-address
          :personalAddress="personalAddress"
          :requiredFieldsForCreateCrmTask="requiredFieldsForCreateCrmTask"
        />
      </b-col>
      <b-col md="6">
        <card-credit-report :lead="lead" />
      </b-col>
      <b-col md="6">
        <card-lead-cards :lead="lead" :cardsLead="cardsLead" :modul="modul" />
      </b-col>
      <b-col md="12">
        <card-contact-information
          :catcher="currentUser.user_id"
          :lead="lead"
          :personalInfo="personalInfo"
          :requiredFieldsForCreateCrmTask="requiredFieldsForCreateCrmTask"
          :modul="modul"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

// Components
import CardPersonalInformation from "./components/personal-information/CardPersonalInformation.vue";
import CardAddress from "./components/address/CardAddress.vue";
import CardCreditReport from "./components/credit-report/CardCreditReport.vue";
import CardLeadCards from "./components/cards/CardLeadCards.vue";
import CardContactInformation from "./components/contact-information/CardContactInformation.vue";

// Services
import SNLeadsService from "@/views/social-network/services/leads";

export default {
  components: {
    "card-personal-information": CardPersonalInformation,
    "card-address": CardAddress,
    "card-credit-report": CardCreditReport,
    "card-lead-cards": CardLeadCards,
    "card-contact-information": CardContactInformation,
  },
  data() {
    return {
      personalInfo: {},
      personalAddress: {},
      cardsLead: {},
      personalMobile: {},
      requiredFieldsForCreateCrmTask: {
        first_name: null,
        last_name: null,
        mobile: null,
        state: null,
      },
      lead: {},
      user: null,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
    modul() {
      return this.$route.meta.module;
    },
  },
  methods: {
    async getLead() {
      try {
        this.addPreloader();
        let idParam = this.$route.params.id;

        const response = await SNLeadsService.getLead(idParam);

        if (response.status == 200) {
          this.lead = response.data[0];
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();
        throw error;
      }
    },
    async getPersonalInformation() {
      this.user = this.currentUser;

      let document = this.lead.type_document_sn
        ? this.lead.type_document_sn
        : this.lead.ssn
        ? 1
        : this.lead.itin
        ? 2
        : this.lead.other
        ? 3
        : null;

      let numberDocument =
        document == 1
          ? this.lead.ssn
          : document == 2
          ? this.lead.itin
          : document == 3
          ? this.lead.other
          : null;

      let numberDocumentEnc =
        document == 1
          ? this.lead.ssn_enc
          : document == 2
          ? this.lead.itin_enc
          : document == 3
          ? this.lead.other_enc
          : null;

      // Personal information
      this.personalInfo = {
        id_lead: this.lead.id,
        valueStatus: this.lead.valuestatuslead,
        nickname: this.lead.nickname,
        name: this.lead.lfirst_name,
        status: this.lead.status_l,
        last_name: this.lead.last_name,
        stateAd: this.lead.state,
        document: document,
        numberDocument: numberDocument,
        numberDocumentEnc: numberDocumentEnc,
        ssn: this.lead.ssn,
        itin: this.lead.itin,
        other: this.lead.other,
        dob: this.lead.dob,
        origin_country: this.lead.origin_country,
        email: this.lead.email,
        language: this.lead.language ? this.lead.language.toUpperCase() : null,
        id_user: this.user.user_id,
      };

      // Personal mobile
      this.personalMobile = {
        id_lead: this.lead.id,
        phonem: this.lead.mobile,
        id_user: this.user.user_id,
        typee: 3,
      };

      // Required field for create task in CRM
      this.requiredFieldsForCreateCrmTask.first_name = this.personalInfo.name;
      this.requiredFieldsForCreateCrmTask.last_name =
        this.personalInfo.last_name;
      this.requiredFieldsForCreateCrmTask.mobile = this.personalMobile.phonem;

      // Personal address
      this.personalAddress = {
        id_lead: this.lead.id,
        street: this.lead.street,
        city: this.lead.city,
        zipcode: this.lead.zipcode,
        state: this.lead.state,
        country: this.lead.country ? this.lead.country : "United States",
        id_user: this.user.user_id,
        typee: 1,
      };
    },
    getCardsLead() {
      this.cardsLead = {
        lead_id: this.lead.id,
        user_id: this.user.user_id,
        rol: this.user.role_id,
      };
    },
  },
  async created() {
    await this.getLead();
    await this.getPersonalInformation();
    this.getCardsLead();
  },
};
</script>

<style lang="scss">
.card-group > div > .card > .card-header {
  border-bottom: none !important;
  margin-bottom: 0px !important;
}
</style>