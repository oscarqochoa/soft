<template>
  <div >
    <b-button
        variant="success"
        class="mr-1"
        @click="onOpenSidebar"
    >
      <feather-icon icon="PlusIcon" size="15" class="mr-50 text-white" />Create
    </b-button>
    <b-sidebar
        id="add-new-lead-social-network-sidebar"
        :visible="!loading"
        bg-variant="white"
        sidebar-class="sidebar-xl"
        shadow
        backdrop
        right
        title="Create Lead"
        header-class="text-primary"
        @change="(val) => $emit('update:is-add-new-user-sidebar-active', val)"
        lazy
        @hidden="onCloseSidebar"
    >

      <template #default>
        <!-- BODY -->
        <div class="mx-4">
          <validation-observer ref="refFormLeadObserver">
            <CatchmentCreateSn :lead="lead"/>

            <BasicInformationCreateLeadSn :lead="lead" />

            <template v-if="lead.addEvidence">
              <PersonalInformationCreateLeadSn :lead="lead"/>
            </template>

            <template v-if="lead.moreInfo">
              <MoreInformation :lead="lead"/>
              <BillingInformation :lead="lead"/>
            </template>

            <template v-if="lead.addEvidence">
              <TaskCreateLeadSn :lead="lead"/>
            </template>

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

          </validation-observer>


        </div>
      </template>

      <template #footer>
        <div class="d-flex align-items-center justify-content-between px-3 py-2 w-100">
          <div class="">
            <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="info"
                class="mr-2"
                @click="resetForm"
            >
              <div class="d-flex align-items-center justify-content-center px-2">
                <feather-icon icon="RefreshCwIcon" size="16" class="text-white"/>
                <span class="btn-create-lead">Reset</span>
              </div>
            </b-button>
          </div>
          <div>
            <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="danger"
                class="mr-2"
                @click="onCloseSidebar"
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
        </div>
      </template>
    </b-sidebar>
  </div>

</template>

<script>
import CatchmentCreateSn from '@/views/social-network/views/leads/components/lead-create/CatchmentCreateSn'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import Ripple from "vue-ripple-directive";
import BasicInformationCreateLeadSn
  from "@/views/social-network/views/leads/components/lead-create/BasicInformationCreateLeadSn";
import PersonalInformation from "@/views/social-network/views/leads/components/lead-create/PersonalInformationCreateLeadSn";
import PersonalInformationCreateLeadSn
  from "@/views/social-network/views/leads/components/lead-create/PersonalInformationCreateLeadSn";
import TaskCreateLeadSn from "@/views/social-network/views/leads/components/lead-create/TaskCreateLeadSn";
import MoreInformation from "@/views/social-network/views/leads/components/lead-create/MoreInformation";
import BillingInformation from "@/views/social-network/views/leads/components/lead-create/BillingInformation";
import {mapActions, mapGetters, mapState} from "vuex";
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
  props: {
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
      loading: true,
      optionsStatesAd: [{
        label: "Select a State",
        value: null,
      }],
      optionsOwners: [{
        label: 'Select Owner',
        value: null,
      }],
      optionPrograms: [],
    };
  },
  async created() {

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
      G_LANGUAGES: "CrmGlobalStore/G_LANGUAGES",
    }),
    ...mapState('SocialNetworkLeadsStore', ['S_STATES_LEADS','S_SUB_SOURCES','S_FAN_PAGE_PROGRAMS','S_FLYERS']),
  },
  methods: {
    ...mapActions(
        'SocialNetworkLeadsStore',
        [
          'A_GET_SUB_SOURCES',
          'A_GET_STATE_LEAD',
          'A_GET_OWNERS',
          'A_GET_PROGRAMS',
          'A_GET_SUB_SOURCE_SN',
          'A_GET_FAN_PAGE_PROGRAMS',
          'A_GET_FLYERS',
          'A_FORMAT_DATE',
          'A_CREATE_LEAD_SN',
          'A_GET_NEW_LEADS'
        ]
    ),

    async onSubmit() {
      try {
        if (await this.$refs.refFormLeadObserver.validate()) {
          console.log('data: ', this.$refs.refFormLeadObserver)
          //await this.A_CREATE_LEAD_SN(this.lead);

          const resp = await this.showConfirmSwal(
              "Are you sure?",
              "You won't be able to revert this!",
              "question"
          )
          if(resp.value){
            this.addPreloader()

            setTimeout(async () => {
              await this.resetForm()
              await this.onCloseSidebar();
              await this.removePreloader()
              await this.showSuccessSwal(
                  "Success!",
                  "Successful Process",
                  ""
              )
              await this.A_GET_NEW_LEADS({
                cr: null,
                date_from: null,
                date_to: null,
                lead_status: null,
                name_text: "",
                order: "desc",
                orderby: 10,
                page: 1,
                perpage: 10,
                program: null,
                state_h: null,
                type: 1,
                user_owner: null,
              })

            },1000)


          }

        } else {
          console.log('Sin validacion')
          await this.removePreloader()

        }

      } catch (error) {
        console.log('error')
        setTimeout(async () => {
          await this.removePreloader()
        },1000)
      }


    },
    async statesAD() {
      let statesLead = (await this.A_GET_STATE_LEAD()).map(state => {
        return {
          label: state.state,
          value: state.slug
        }
      });
      this.optionsStatesAd = [...this.optionsStatesAd, ...statesLead]
    },
    async ownersLeads() {
      const owners = (await this.A_GET_OWNERS({ modul: 15, body: { roles: "[]", type: "1" }})).map(owner => {
        return {
          label: owner.user_name,
          value: owner.id
        }
      })
      this.optionsOwners = [...this.optionsOwners, ...owners];
    },
    async programsAll() {
      const data = await this.A_GET_PROGRAMS();
      this.optionPrograms = [...data];
    },
    async sub_sources() {
      await this.A_GET_SUB_SOURCE_SN();
    },
    async onCloseSidebar(){
      //this.$emit('closeSidebar')
      this.loading = true;
    },
    async onOpenSidebar() {
      this.addPreloader()
      await Promise.all(
          [
            await this.statesAD(),
            await this.ownersLeads(),
            await this.programsAll(),
            await this.sub_sources(),
            await this.A_GET_FAN_PAGE_PROGRAMS()
          ]
      )
      this.removePreloader()
      this.loading = false;
    },
    async resetForm() {
      this.lead.state_h = null
      this.lead.user_id = null
      this.lead.program = []
      this.lead.source_id = null
      this.lead.sub_source = null
      this.lead.google_ads = null
      this.lead.fanpage_id = null
      this.lead.flyer = null
      this.lead.sourcesname_id =  null

          // Basic information
      this.lead.nickname = ""
      this.lead.language = null
      this.lead.addEvidence = false

          // Personal information
      this.lead.first_name = ""
      this.lead.last_name = ""
      this.lead.mobile = ""
      this.lead.zipcode = ""
      this.lead.email = ""
      this.lead.note = ""
      this.lead.moreInfo = false
      this.lead.potential = true
      this.lead.reason_not_pontential = null
      this.lead.name = ""

          // More information
      this.lead.dob = ""
      this.lead.state_lead = null
      this.lead.type_document = null
      this.lead.document = ""
      this.lead.phone = ""
      this.lead.street = ""
      this.lead.city = ""
          // TODO se envia el valor correcto pero no se muestra el correcto
      this.lead.state = null
          // TODO agregar numero de itin, ssn dependiendo del tipo del documento
      this.lead.itin = ""
      this.lead.ssn = ""


          // Billing information
      this.lead.cardholdername = ""
      this.lead.card_expi_month = ""
      this.lead.card_expi_year = ""
      this.lead.cardsecuritycode = ""
      this.lead.cardnumber = ""
      this.lead.countrycard = "United States"
      this.lead.zipcodecard = ""
      this.lead.citycard = ""
      this.lead.statecard = null
      this.lead.streetcar = ""

          // Task
      this.lead.title= ""
      this.lead.seller= 1
      this.lead.subject= "CALL"
      this.lead.hour= ""
      this.lead.from= ""
      this.lead.to= ""
      this.lead.date= ""
      this.lead.sms_status= 0
      this.lead.due_date= ""
      this.lead.assign= 1
      this.lead.attend= null

          this.lead.recovery= 0
      this.lead.last_action= 1
      this.lead.program_id= null
      this.lead.super= null
      this.lead.usercreator= null
      this.lead.catcher= null
      this.lead.created_by= null,
          this.lead.created_date= null


      this.lead.content= ""
      this.lead.created_hour= ""
      this.lead.description= ""
      this.lead.files= []
      this.lead.id= ""
      this.lead.idMethod= null
      this.lead.images= []
      this.lead.other= ""
      await this.$refs.refFormLeadObserver.reset();
    }
  },
  watch: {

  }
}
</script>

<style>
.btn-create-lead{
  padding-top: .15rem !important;
  margin-left: .3rem;
  font-size: 16px;
}
</style>
