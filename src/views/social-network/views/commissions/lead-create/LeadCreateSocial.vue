<template>
  <div>
    <CatchmentCreateSn/>
  </div>
</template>

<script>
import CatchmentCreateSn from '@/views/social-network/views/commissions/lead-create/CatchmentCreateSn'
export default {
  name: 'LeadCreateSocial',
  components: { CatchmentCreateSn },
  data() {
    return {
      info: {},
      leadsourcename: [],
      value: "00:00 AM",
      min: new Date(1950, 0, 1, 0, 0, 0),
      max: new Date(2049, 11, 31, 24, 0, 0),
      minDate: new Date(1000, 1, 1),
      minDateI: new Date(),
      maxDate: new Date(2050, 9, 1),
      currentDate: new Date(),
      documents: [
        { name: "Document", id: null, disabled: true },
        { name: "SSN", id: 1 },
        { name: "ITIN", id: 2 },
        { name: "CPN", id: 3 }
      ],
      lead: {
        id: "",
        user_id: this.global.layout.id,
        first_name: "",
        last_name: "",
        nickname: "",
        fanpage_id: "",
        source_id: 7,
        sourcesname_id: 17,
        program_id: null,
        mobile: null,
        program: [],
        state: "CA",
        state_h: null,
        zipcode: "",
        language: "ES",
        super: this.global.layout.role_id,
        created_by: this.global.layout.id,
        usercreator: this.global.layout.id,
        note: "",
        last_action: 1,

        attend: null,

        seller: "",
        title: "",
        date: null,
        from: null,
        to: null,
        description: "",

        subject: "CALL",
        assign: "",
        due_date: moment().format("YYYY-MM-DD"),
        hour: "",
        created_date: moment().format("YYYY-MM-DD"),
        created_hour: "",
        recovery: 0,
        catcher: this.global.layout.id,

        addEvidence: false,
        images: [],
        files: [],

        potential: 1,
        sms_status: 1,
        google_ads: null,
        flyer: null,

        //New information
        email: "",
        moreInfo: false,
        dob: "",
        state_lead: null,
        ssn: "",
        itin: "",
        other: "",
        phone: null,
        street: "",
        city: "",
        card_expi_month: "",
        card_expi_year: "",
        cardholdername: "",
        cardnumber: "",
        cardsecuritycode: "",
        streetcard: "",
        citycard: "",
        zipcodecard: "",
        statecard: "",
        countrycard: "United States",

        //reasons
        reason_not_pontential: null,

        //NeW Fields
        type_document: null,
        document: "",
        idMethod: null,
        sub_source: null
      },
      states: [],
      social: "",
      cardnumber1: "",
      cardnumber2: "",
      cardnumber3: "",
      cardnumber4: "",
      imgcard: "",
      otherinfo: false,

      dateNew: "",

      //New Leads
      id_parent_source: 1,
      spinner: false,
      errorsBack: {}
    };
  },
  mounted() {},

  computed: {

  },
  methods: {

    validateLead() {

    },
    saveLead() {
      console.log('save lead', this.lead)

    },
    cancel() {
      window.location.href = "/socialnetwork/leads";
    },
    selectDocument() {
      //Switch type of document
      if (this.lead.type_document) {
        switch (this.lead.type_document) {
          case 1:
            this.lead.itin = "";
            this.lead.other = "";
            this.lead.ssn = this.lead.document;
            break;
          case 2:
            this.lead.other = "";
            this.lead.ssn = "";
            this.lead.itin = this.lead.document;
            break;
          case 3:
            this.lead.ssn = "";
            this.lead.itin = "";
            this.lead.other = this.lead.document;
            break;
        }
      }
    },
    cleanCardNumber() {
      this.lead.cardnumber =
          this.cardnumber1 +
          "-" +
          this.cardnumber2 +
          "-" +
          this.cardnumber3 +
          "-" +
          this.cardnumber4;
    },

    capitalize(text) {
      return text.substr(0, 1).toUpperCase() + text.substr(1);
    },
    getInfo() {
      this.info = {
        modul: this.modul,
        catcher:
            this.global.layout.first_name + " " + this.global.layout.last_name,
        created_by: this.global.layout.id,
        errors: this.errors
      };
    }
  },
  created() {
    this.getInfo();
    this.addPreloader();
  },
  watch: {
    "lead.addEvidence"(newVal, oldVal) {
      if (!newVal) {
        this.lead.moreInfo = false;
        this.lead.attend = null;
        this.lead.email = "";
        (this.lead.first_name = ""),
            (this.lead.last_name = ""),
            (this.lead.zipcode = ""),
            (this.lead.mobile = null),
            (this.lead.note = "");
      }
    },

    "lead.moreInfo"(newVal, oldVal) {
      if (!newVal) {
        (this.lead.dob = ""),
            (this.lead.state_lead = null),
            (this.lead.ssn = ""),
            (this.lead.itin = ""),
            (this.lead.other = ""),
            (this.lead.phone = null),
            (this.lead.street = ""),
            (this.lead.city = ""),
            (this.lead.card_expi_month = ""),
            (this.lead.card_expi_year = ""),
            (this.lead.cardholdername = ""),
            (this.lead.cardnumber = ""),
            (this.lead.cardsecuritycode = ""),
            (this.lead.streetcard = ""),
            (this.lead.citycard = ""),
            (this.lead.zipcodecard = ""),
            (this.lead.statecard = ""),
            (this.social = ""),
            (this.hideSSN = false),
            (this.hideITIN = false),
            (this.hideCPN = false),
            (this.cardnumber1 = ""),
            (this.cardnumber2 = ""),
            (this.cardnumber3 = ""),
            (this.cardnumber4 = ""),
            (this.imgcard = ""),
            (this.otherinfo = false);
      }
    },
    "lead.first_name"(newValue) {
      this.lead.name = this.capitalize(newValue);
    },
    "lead.last_name"(newValue) {
      this.lead.last_name = this.capitalize(newValue);
    }
  }
}
</script>
