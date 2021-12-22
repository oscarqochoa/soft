<template>
  <b-card>
    <template #header>
      <b-card-title>
        Client: &nbsp;
        <span>
          <a :href="leadName.url ? `*INTEGRATE*/${getModuleName(modul)}/leads/edit/${lead.id}` : '#'">
            {{ leadName.name }}
          </a>
        </span>
      </b-card-title>
      <b-button-group class="btn-group-sm">
        <b-button
          v-if="lead.mobile != null"
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-tooltip.hover.bottom="'Add To My List'"
          variant="default"
          class="btn-icon"
          @click="onAddMyList"
        >
          <feather-icon
            icon="ClipboardIcon"
            size="18"
          />
        </b-button>
        <b-button
          v-if="lead.status_sn_id && modul === 2 && !lead.potential"
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-tooltip.hover.bottom="'Without Potential'"
          variant="default"
          class="btn-icon"
          @click="onSetPotential"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="question" role="img" viewBox="0 0 384 512" class="feather feather-question">
            <path fill="currentColor" d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"></path>
          </svg>
        </b-button>
        <b-button
          v-if="lead.status_sn_id && modul === 2"
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-tooltip.hover.bottom="'Not Call'"
          variant="default"
          class="btn-icon"
          @click="onNotCall"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-slash" role="img" viewBox="0 0 640 512" class="feather feather-phone-slash">
            <path fill="currentColor" d="M268.2 381.4l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48c-10.7 4.6-16.5 16.1-13.9 27.5l24 104c2.5 10.8 12.1 18.6 23.4 18.6 100.7 0 193.7-32.4 269.7-86.9l-80-61.8c-10.9 6.5-22.1 12.7-33.6 18.1zm365.6 76.7L475.1 335.5C537.9 256.4 576 156.9 576 48c0-11.2-7.7-20.9-18.6-23.4l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-12.2 26.1-27.9 50.3-46 72.8L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4l588.4 454.7c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.4-6.8 4.1-16.9-2.9-22.3z"></path>
          </svg>
        </b-button>
        <b-button
          v-if="lead.status_sn_id && modul === 2 && (lead.not_call && lead.not_call.length)"
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-tooltip.hover.bottom="'Tracking Not Call'"
          variant="default"
          class="btn-icon"
          @click="$bvModal.show('modal-trackin-not-call')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="th-list" role="img" viewBox="0 0 512 512" class="feather feather-th-list">
            <path fill="currentColor" d="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z"></path>
          </svg>
        </b-button>
      </b-button-group>
    </template>
    <detail-component :modul="modul" :details="details" />

    <!-- modal NOT CALL -->
    <b-modal
      id="modal-trackin-not-call"
      ok-only
      modal-class="modal-primary"
      centered
      size="lg"
      :title="`TRACKING NOT CALL - ${ lead.lead_name }`"
      hide-footer
      no-close-on-backdrop
    >
      <modal-trackin-not-call
        :modul="modul"
        :lead="lead"
      />
    </b-modal>
  </b-card>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

import Ripple from 'vue-ripple-directive'

import DetailComponent from '@/views/crm/views/Lead/components/DetailComponent.vue'
import ModalTrackinNotCall from './ModalTrackinNotCall.vue'

export default {
  name: 'CardLeadClient',
  components: {
    DetailComponent,
    ModalTrackinNotCall,
  },
  props: {
    modul: {
      type: Number,
      required: true
    },
    onlyRead: {
      type: Boolean,
      required: true
    },
    lead: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      blankLead: {},
      isLoading: false,
      details: [
        {
          label: 'Nickname:',
          value: this.lead.nickname
        },
        {
          label: 'E-mail:',
          value: this.lead.email
        },
        {
          label: 'Phone:',
          value: this.lead.mobile
        },
        [
          {
            label: 'SNN:',
            value: `XXX-XX-${ this.lead.snn }`
          },
          {
            label: 'ITIN:',
            value: `XXX-XX-${ this.lead.itin }`
          },
        ],
        (this.modul !== 15) ? {
          label: 'DOB:',
          value: this.lead.dob
        } : null,
        {
          label: 'Language:',
          value: this.lead.language === 'en' ? 'English' : 'Spanish'
        },
        {
          label: 'Origin Country:',
          value: this.lead.origin_country
        },
        {
          label: 'Programs:',
          value: this.lead.name_programs.join(' / ')
        },
        (this.modul !== 15) ? {
          label: 'Status:',
          value: this.lead.valuestatuslead
        } : null,
        (this.modul !== 15) ? {
          label: 'Address:',
          value: `${ this.lead.street }${ this.lead.city ? `, ${ this.lead.city }, ${ this.lead.states_eeuu_slug } ${ this.lead.zipcode }` : '' }`
        } : null,
        (this.modul === 15) ? {
          label: 'CATCHER:',
          value: this.lead.user_catcher
        } : null,
        (this.modul === 15) ? {
          label: 'FAN PAGE:',
          value: this.lead.fanpage
        } : null,
        (this.modul === 15) ? {
          label: 'CREATED DATE:',
          value: this.lead.created_at
        } : null,
      ]
    }
  },
  mounted () {},
  created () {
    this.blankLead = Object.assign({}, this.lead)
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token'
    }),
    leadName () {
      if (this.modul === 15) {
        return { name: `${this.lead.nickname} (${this.lead.lead_name})`, url: true }
      } else if (this.onlyRead) {
        return { name: this.lead.lead_name }
      } else {
        return { name: this.lead.lead_name, url: true }
      }
    }
  },
  methods: {
    ...mapActions({
      A_MY_LIST_CREATE: 'CrmLeadStore/A_MY_LIST_CREATE',
      A_SET_POTENTIAL: 'CrmLeadStore/A_SET_POTENTIAL',
      A_CHANGE_STATUS_SN: 'CrmLeadStore/A_CHANGE_STATUS_SN',
    }),
    onAddMyList () {
      this.showConfirmSwal()
      .then(async result => {
        if (result.value) {
          this.isLoading = true
          const response = await this.A_MY_LIST_CREATE({
            module_id: this.modul,
            user_id: this.currentUser.user_id,
            lead_id: this.lead.id,
          })
          if (this.isResponseSuccess(response))
            this.showToast('success', 'top-right', 'Success!', 'CheckIcon', 'Successful operation')
          else
            this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', 'Something went wrong. ' + response.message)
          this.isLoading = false
        }
      }).catch(error => {
        console.log('spmething went wrong onAddMyList: ', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      })
    },
    onSetPotential () {
      this.showConfirmSwal()
      .then(async result => {
        if (result.value) {
          this.isLoading = true
          const response = await this.A_SET_POTENTIAL({
            lead_id: this.lead.id,
            potential: 1,
          })
          if (this.isResponseSuccess(response)) {
            this.lead.potential = 1
            this.showToast('success', 'top-right', 'Success!', 'CheckIcon', 'Successful operation')
          }
          else
            this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', 'Something went wrong. ' + response.message)
          this.isLoading = false
        }
      }).catch(error => {
        console.log('spmething went wrong onSetPotential: ', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      })
    },
    onNotCall () {
      this.showConfirmSwal()
      .then(async result => {
        if (result.value) {
          this.isLoading = true
          const specialist = `${this.currentUser.first_name} ${this.currentUser.last_name}`

          //Have just the first program of a string
          let program = ''
          if (this.lead.lead_programs) {
            const programs = this.lead.name_programs
            program = programs.split(',')[0]
          }
          const response = await this.A_CHANGE_STATUS_SN({
            lead_id: this.lead.id,
            status_id: 4,
            specialist,
            user_id: this.currentUser.user_id,
            language: this.lead.language,
            lead_name: this.lead.last_name,
            modul_id: this.modul,
            program,
          })
          if (this.isResponseSuccess(response))
            this.showToast('success', 'top-right', 'Success!', 'CheckIcon', 'Successful operation')
          else
            this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', 'Something went wrong. ' + response.message)
          this.isLoading = false
        }
      }).catch(error => {
        console.log('spmething went wrong onNotCall: ', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      })
    },
  },
  model: {
    prop: 'lead',
    event: 'update:lead',
  },
  directives: {
    Ripple,
  },
}
</script>

