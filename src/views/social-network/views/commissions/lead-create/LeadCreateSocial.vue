<template>
  <div>
    <validation-observer ref="refFormLeadObserver">
      <CatchmentCreateSn :lead="this.lead"/>

      <BasicInformationCreateLeadSn :lead="this.lead"/>

      <template v-if="lead.addEvidence">
        <PersonalInformationCreateLeadSn :lead="this.lead"/>
      </template>

      <template v-if="lead.moreInfo">
        <MoreInformation :lead="this.lead"/>
        <BillingInformation :lead="this.lead"/>
      </template>

      <template v-if="lead.addEvidence">
        <TaskCreateLeadSn :lead="this.lead"/>
      </template>

      <div class="d-flex align-items-center justify-content-end">
        <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="danger"
            class="mr-2"
            @click=""
        >
          <div class="d-flex align-items-center justify-content-center px-2">
            <feather-icon icon="TrashIcon" size="16" class="text-white"/>
            <span class="btn-create-lead">Cancel</span>
          </div>
        </b-button>
        <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="success"
            class=""
            @click="onSubmit"
        >
          <div class="d-flex align-items-center justify-content-center px-2">
            <feather-icon icon="CheckIcon" size="16" class="text-white"/>
            <span class="btn-create-lead">Create</span>
          </div>
        </b-button>
      </div>
    </validation-observer>
  </div>
</template>

<script>
import CatchmentCreateSn from '@/views/social-network/views/commissions/lead-create/CatchmentCreateSn'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import Ripple from "vue-ripple-directive";
import BasicInformationCreateLeadSn
  from "@/views/social-network/views/commissions/lead-create/BasicInformationCreateLeadSn";
import PersonalInformation from "@/views/social-network/views/commissions/lead-create/PersonalInformationCreateLeadSn";
import PersonalInformationCreateLeadSn
  from "@/views/social-network/views/commissions/lead-create/PersonalInformationCreateLeadSn";
import TaskCreateLeadSn from "@/views/social-network/views/commissions/lead-create/TaskCreateLeadSn";
import MoreInformation from "@/views/social-network/views/commissions/lead-create/MoreInformation";
import BillingInformation from "@/views/social-network/views/commissions/lead-create/BillingInformation";
import {mapActions, mapGetters} from "vuex";
export default {
  name: 'LeadCreateSocial',
  components: {
    BillingInformation,
    MoreInformation,
    TaskCreateLeadSn,
    PersonalInformationCreateLeadSn,
    PersonalInformation,
    BasicInformationCreateLeadSn,
    CatchmentCreateSn,
    ValidationProvider,
    ValidationObserver,
  },
  directives: {
    Ripple,
  },
  data() {
    return {

      lead: {
        // Catchment
        state_h: null,
        user_id: null,
        program: [],
        source_id: null,
        sub_source: null,
        google_ads: null,
        fanpage_id: null,
        flyer: null,
        sourcesname_id: null,

        // Basic information
        nickname: "",
        language: null,
        addEvidence: false,

        // Personal information
        first_name: "",
        last_name: "",
        mobile: "",
        zipcode: "",
        email: "",
        note: "",
        moreInfo: false,
        potential: true,
        reason_not_pontential: null,
        name: "",

        // More information
        dob: "",
        state_lead: null,
        type_document: null,
        document: "",
        phone: "",
        street: "",
        city: "",
        // TODO se envia el valor correcto pero no se muestra el correcto
        state: null,
        // TODO agregar numero de itin, ssn dependiendo del tipo del documento
        itin: "",
        ssn: "",


        // Billing information
        cardholdername: "",
        card_expi_month: "",
        card_expi_year: "",
        cardsecuritycode: "",
        cardnumber: "",
        countrycard: "United States",
        zipcodecard: "",
        citycard: "",
        statecard: null,
        streetcard: "",

        // Task
        title: "",
        seller: 1,
        subject: "CALL",
        hour: "",
        from: "",
        to: "",
        date: "",
        sms_status: 0,
        due_date: "",
        assign: 1,
        attend: null,


        recovery: 0,
        last_action: 1,
        program_id: null,
        super: null,
        usercreator: null,
        catcher: null,
        created_by: null,
        created_date: null,


        content: "",
        created_hour: "",
        description: "",
        files: [],
        id: "",
        idMethod: null,
        images: [],
        other: "",


      },
    };
  },
  async mounted() {
    console.log('current: ', this.currentUser.user_id)
    this.lead.super = this.currentUser.user_id;
    this.lead.usercreator = this.currentUser.user_id;
    this.lead.catcher = this.currentUser.user_id;
    this.lead.created_by = this.currentUser.user_id;
    this.lead.created_date = this.$options.filters.formatDate(new Date());
  },

  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      token: "auth/token",
    }),
  },
  methods: {
    ...mapActions(
        'SocialNetworkLeadsStore',
        [
          'A_FORMAT_DATE',
          'A_CREATE_LEAD_SN'
        ]
    ),
    async onSubmit() {
      try {
        if (await this.$refs.refFormLeadObserver.validate()) {
          console.log('data: ', this.lead)
          await this.A_CREATE_LEAD_SN(this.lead);
          //console.log('data: ', this.lead)

        } else {
          console.log('Sin validacion')
        }

      } catch (error) {

      }
    },
  },
}
</script>

<style>
.btn-create-lead{
  padding-top: .15rem !important;
  margin-left: .3rem;
  font-size: 16px;
}
</style>
