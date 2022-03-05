<template>
  <div>
    <validation-observer ref="refFormLeadObserver">
      <CatchmentCreateSn :lead="this.lead"/>

      <BasicInformationCreateLeadSn :lead="this.lead"/>

      <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
          class="mr-2"
          @click="onSubmit"
      >
        <span >Save</span>
      </b-button>
    </validation-observer>
  </div>
</template>

<script>
import CatchmentCreateSn from '@/views/social-network/views/commissions/lead-create/CatchmentCreateSn'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import Ripple from "vue-ripple-directive";
import BasicInformationCreateLeadSn
  from "@/views/social-network/views/commissions/lead-create/BasicInformationCreateLeadSn";
export default {
  name: 'LeadCreateSocial',
  components: {
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
        // Catchment
        state_h: "CA",
        user_id: 182,
        program: [],
        source_id: 1,
        sub_source: 6,
        google_ads: 2,
        fanpage_id: null,
        flyer: null,



        addEvidence: true,
        assign: "",
        attend: 1,
        card_expi_month: "11",
        card_expi_year: "11",
        cardholdername: "",
        cardnumber: "---",
        cardsecuritycode: "1111",
        catcher: 1,
        city: "Dallas",
        citycard: "",
        content: "",
        countrycard: "United States",
        created_by: 1,
        created_date: "2022-03-02",
        created_hour: "",
        date: "2022-03-02",
        description: "",
        dob: "2022-03-02",
        document: "213-12-3123",
        due_date: "2022-03-02",
        email: "asd@gmail.com",

        files: [],
        first_name: "sdfsd",

        from: "01:15:00",

        hour: "11:04:00",
        id: "",
        idMethod: null,
        images: [],
        itin: "",
        language: "ES",
        last_action: 1,
        last_name: "Wqeqwe",
        mobile: "(121) 112-2222",
        moreInfo: true,
        name: "Sdfsd",
        nickname: "sdfsdf",
        note: "qwe qwe qweqweqw ",
        other: "",
        phone: "(123) 123-1231",
        potential: 1,
        state_lead: 2,
        program_id: null,
        reason_not_pontential: null,
        recovery: 0,
        seller: 28,
        sms_status: 1,

        sourcesname_id: 32,
        ssn: "213-12-3123",
        state: "MO",


        statecard: "",
        street: "C F Hawn Freeway",
        streetcard: "",

        subject: "CALL",
        super: 1,
        title: "fsdf",
        to: "01:45:00",
        type_document: 1,

        usercreator: 1,
        zipcode: "",
        zipcodecard: "",
      },
    };
  },
  mounted() {},

  computed: {

  },
  methods: {

    async onSubmit() {
      try {

        if (await this.$refs.refFormLeadObserver.validate()) {
          console.log('data lead: ')
        } else {
          console.log('asd')
        }
      } catch (error) {

      }
    },
  },
  created() {

  },
  watch: {

  }
}
</script>
