<template>
  <div >
    <b-button
        variant="success"
        class="mr-1 d-flex align-items-center"
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
        lazy
        @hidden="onCloseSidebar"
    >

      <template #default>
        <!-- BODY -->
        <div class="mx-4 container-create" id="container-create-lead-sn">
          <validation-observer ref="refFormLeadObserver">
            <CatchmentCreateSn :lead="lead"/>

            <BasicInformationCreateLeadSn :lead="lead" :isValidNickname="isValidNickname"/>

            <template v-if="lead.addEvidence">
              <PersonalInformationCreateLeadSn :lead="lead" :isValidMobile="isValidMobile"/>
            </template>

            <template v-if="lead.moreInfo">
              <MoreInformation :lead="lead"/>
              <BillingInformation :lead="lead"/>
            </template>

            <template v-if="lead.addEvidence">
              <TaskCreateLeadSn :lead="lead"/>
            </template>

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

    <b-toast
        id="toast-validation-create-lead"
    >
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-center mr-1">
          <amg-icon icon="AmgIcon" size="26"/>
          <strong class="mr-auto pl-1 text-primary">Warning validation</strong>
        </div>
      </template>

      <div>
        <p class="m-0" v-for="(value, index) in toastData" :key="index"><span class="font-weight-bolder">{{index +1 }}.</span> {{ value.label }} {{ value.error }}</p>
      </div>

    </b-toast>

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
import {amgApi} from "@/service/axios";

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
        sms_status: false,
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
      toastData: [],
      isValidNickname: true,
      isValidPhone: true,
      isValidMobile: true
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
    window.addEventListener('scroll', this.handleScroll)
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
        const validate = await this.$refs.refFormLeadObserver;
        // Validar formulario
        if (await validate.validate() && this.isValidNickname && this.isValidMobile) {

          const resp = await this.showConfirmSwal(
              "Are you sure?",
              "You won't be able to revert this!",
              "question"
          )
          console.log('data1: ', this.lead)
          if(resp.value){
            this.addPreloader()
            // Transformar fechas
            this.lead.dob = this.transformDate(this.lead.dob);
            this.lead.date = this.transformDate(this.lead.date);
            this.lead.due_date = this.transformDate(this.lead.due_date);

            console.log('data2: ', this.lead)

            // Enviar peticion a la api
            await this.A_CREATE_LEAD_SN(this.lead);

            setTimeout(async () => {
              await this.resetForm()
              await this.onCloseSidebar();
              await this.removePreloader();

              this.showSuccessSwal(
                  "Success!",
                  "Successful Process",
                  ""
              );
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
              });

            },1000)
          }
        } else {
          const fields = Object.values(validate.fields).map(field => field.name);
          let errors = Object.values(validate.errors)
          errors = errors.map((error, index) => {
            return {
              index: fields[index].split('-')[3] ? parseInt(fields[index].split('-')[3].split(',')[0]) : null,
              error: error[0],
              id: fields[index].split(',')[0],
              label: fields[index].split(',')[1]
            }
          }).filter(error => error.error !== undefined && error.index !== null)
          //this.toastData = errors.filter(error => !error.label.includes('card-number-'));

          const nickValid = errors.find(err => err.id == 'input-create-lead-10')
          if(!nickValid && !this.isValidNickname) {
            console.log('encontro nick')
            const isNickValidItem = {
              error: "is not unique",
              id: "input-create-lead-10",
              index: 10,
              label: "NickName",
            }
            errors.push(isNickValidItem)
            errors.sort(function (a, b) {
              if (a.index > b.index) {
                return 1;
              }  else {
                return  -1;
              }
            });
          }
          const phoneValid = errors.find(err => err.id == 'input-create-lead-14')
          if(!phoneValid && this.lead.addEvidence && !this.isValidMobile) {
            console.log('encontro phone')
            const isPhoneValidItem = {
              error: "is not unique",
              id: "input-create-lead-14",
              index: 14,
              label: "Phone(M)",
            }
            errors.push(isPhoneValidItem)
            errors.sort(function (a, b) {
              if (a.index > b.index) {
                return 1;
              }  else {
                return  -1;
              }
            });
          }

          this.toastData = errors.sort(function (a, b) {
            if (a.index > b.index) {
              return 1;
            }  else {
              return  -1;
            }
          });
          this.$bvToast.show('toast-validation-create-lead')
          const input = document.getElementById(`${this.toastData[0].id}`);
          input.scrollIntoView({behavior: "smooth"});
        }

      } catch (error) {
        console.log('error', error)
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
    onCloseSidebar(){
      //this.$emit('closeSidebar')

      this.resetForm();
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
    resetForm() {
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
      this.$refs.refFormLeadObserver.reset();
    },
    handleScroll () {
      var sortMenu = this.$refs.containerSidebarSreateLead.scrollLeft;
      console.log(sortMenu);
    },
    transformDate(date) {
      const data_dob = date.split('/');
      const data = data_dob[0] == '' || data_dob[2].length != 4 ? this.lead.dob : `${data_dob[2]}/${data_dob[0]}/${data_dob[1]}`;
      return data.replaceAll('/','-');
    }
  },
  watch: {
    async "lead.nickname"() {
      const resp = await amgApi.post('/lead/social-network/validate-exists-nickname', {
        nickname: this.lead.nickname, lead_id: null
      });
      if(resp.data.code) {
        this.isValidNickname = false;
      } else {
        this.isValidNickname = true;
        this.toastData = this.toastData.filter(err => err.id !== "input-create-lead-10")
      }
    },
    async "lead.mobile" () {
      const resp = await amgApi.post('/lead/social-network/unique-mobile-sn', {
        mobile: this.lead.mobile
      });
      if(resp.data.code) {
        this.isValidMobile = false;
      } else {
        this.isValidMobile = true;
        this.toastData = this.toastData.filter(err => err.id !== "input-create-lead-14")
      }
    }
  }
}
</script>

<style>
.btn-create-lead{
  padding-top: .15rem !important;
  margin-left: .3rem;
  font-size: 16px;
}
.b-sidebar-body{
  //background: red !important;
  scroll-behavior: smooth !important;
}
.container-create{
  overflow-y: scroll !important;
  scroll-behavior: smooth !important;
}
</style>
