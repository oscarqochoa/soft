<template>
  <b-card class="lead-client">
    <template #header>
      <b-card-title>
        Client: &nbsp;
        <span>
          <a @click="$emit('onEditLead', false)">
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
          <amg-icon icon="ClipboardIcon" />
        </b-button>
        <b-button
          v-if="lead.status_sn_id && modul === 2 && !lead.potential"
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-tooltip.hover.bottom="'Without Potential'"
          variant="default"
          class="btn-icon"
          @click="onSetPotential"
        >
          <amg-icon icon="QuestionIcon" />
        </b-button>
        <b-button
          v-if="lead.status_sn_id && modul === 2"
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-tooltip.hover.bottom="'Not Call'"
          variant="default"
          class="btn-icon"
          @click="onNotCall"
        >
          <amg-icon icon="PhoneSlashIcon" />
        </b-button>
        <b-button
          v-if="lead.status_sn_id && modul === 2 && (lead.not_call && lead.not_call.length)"
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-tooltip.hover.bottom="'Tracking Not Call'"
          variant="default"
          class="btn-icon"
          @click="$bvModal.show('modal-trackin-not-call')"
        >
          <amg-icon icon="ThListIcon" />
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

import { mapActions, mapGetters, mapState } from 'vuex'

import Ripple from 'vue-ripple-directive'

import DetailComponent from '@/views/crm/views/Lead/components/DetailComponent.vue'
import ModalTrackinNotCall from './ModalTrackinNotCall.vue'
import AmgIcon from '@/icons/AmgIcon.vue'

export default {
  name: 'CardLeadClient',
  components: {
    DetailComponent,
    ModalTrackinNotCall,
    AmgIcon,
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
          this.lead.ssn ? {
            label: 'SSN:',
            value: `XXX-XX-${ this.lead.ssn }`
          } : null,
          this.lead.itin ? {
            label: 'ITIN:',
            value: `XXX-XX-${ this.lead.itin }`
          } : null,
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
          value: this.lead.name_programs
        },
        (this.modul !== 15) ? {
          label: 'Status:',
          value: this.lead.valuestatuslead
        } : null,
        (this.modul !== 15) ? {
          label: 'Address:',
          value: this.longAddress
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
    },
    longAddress () {
      const names = []
      if (this.lead.street) names.push(this.lead.street)
      if (this.lead.city) names.push(this.lead.city)
      if (this.lead.states_eeuu_slug && this.lead.zipcode) names.push(`${ this.lead.states_eeuu_slug } ${ this.lead.zipcode }`)
      return names.join(', ')
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

<style lang="scss">
  .lead-client .btn-group .btn {
    padding-top: 0;
    padding-bottom: 0;
  }
</style>
