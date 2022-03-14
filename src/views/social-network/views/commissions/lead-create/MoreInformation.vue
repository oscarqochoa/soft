<template>
  <div>
    <b-card no-body class="p-2 mt-4">
      <b-row>
        <b-col md="6">
          <h4 class="title-card">More information</h4>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col mb="6">
          <ValidationProvider rules="required" v-slot="{errors}">
            <b-form-group
                id="fieldset-horizontal"
                label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                label-cols-sm="4"
                label-for="input-horizontal"
                label-cols-lg="4"
                content-cols-sm
                content-cols-lg="8"
                label="DOB"
            >
              <b-form-datepicker
                  autofocus
                  :format="'MM/dd/yyyy'"
                  v-model="lead.dob"
                  :class="{'border-error-sn' :errors[0]}"
                  :state="errors[0] ? false : null"
              />
              <div v-if="errors[0]" class="text-error-sn text-center">DOB {{errors[0]}}</div>
            </b-form-group>
          </ValidationProvider>
        </b-col>
        <b-col mb="6">
          <ValidationProvider rules="required" v-slot="{errors}">

            <b-form-group
                label="Status"
                label-for="st-ad"
                :state="errors[0] ? false : null"
                id="fieldset-horizontal"
                label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                label-cols-sm="4"
                label-cols-lg="4"
                content-cols-sm
                content-cols-lg="8"
            >
              <v-select
                  id="userId"
                  v-model="lead.state_lead"
                  selected=""
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="label"
                  :options="optionsState"
                  :clearable="false"
                  :reduce="el => el.value"
                  :class="{'border-error-sn' :errors[0]}"
              />
              <div v-if="errors[0]" class="text-error-sn text-center">DOB {{errors[0]}}</div>
            </b-form-group>
            <input type="radio" class="d-none bg-green" v-model="lead.state_lead" />

          </ValidationProvider>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col mb="6">
          <ValidationProvider rules="required" v-slot="{errors}">
            <b-form-group
                label="Type doc."
                label-for="st-ad"
                :state="errors[0] ? false : null"
                id="fieldset-horizontal"
                label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                label-cols-sm="4"
                label-cols-lg="4"
                content-cols-sm
                content-cols-lg="8"
            >
              <v-select
                  id="type_document"
                  v-model="lead.type_document"
                  selected=""
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="label"
                  :options="documents"
                  :clearable="false"
                  :reduce="el => el.value"
              />
              <div v-if="errors[0]" class="text-error-sn text-center">DOB {{errors[0]}}</div>
            </b-form-group>
            <input type="radio" class="d-none bg-green" v-model="lead.type_document" />
          </ValidationProvider>
        </b-col>
        <b-col mb="6">
          <ValidationProvider rules="required" v-slot="{errors}">
            <b-form-group
                id="fieldset-horizontal"
                label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                label-cols-sm="4"
                label-for="input-horizontal"
                label-cols-lg="4"
                content-cols-sm
                content-cols-lg="8"
                :label="selectDocument"
            >
              <b-form-input
                  v-model="lead.document"
                  class="select-icon-none font-bureau-style border-hover bg-white-c"
                  v-mask="'###-##-####'"
                  placeholder="Please type document"
                  :class="{'border-error-sn' :errors[0]}"
                  :state="errors[0] ? false : null"
              ></b-form-input>
              <div v-if="errors[0]" class="text-error-sn text-center">document {{errors[0]}}</div>
            </b-form-group>
          </ValidationProvider>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col mb="6">
          <ValidationProvider rules="required" v-slot="{errors}">
            <b-form-group
                id="fieldset-horizontal"
                label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                label-cols-sm="4"
                label-for="input-horizontal"
                label-cols-lg="4"
                content-cols-sm
                content-cols-lg="8"
                label="Phone(H)"
            >
              <b-form-input
                  v-model="lead.phone"
                  class="select-icon-none font-bureau-style border-hover bg-white-c"
                  :class="{'border-error-sn' :errors[0]}"
                  v-mask="'(###) ###-####'"
                  placeholder="Please type phone(H)"
                  :state="errors[0] ? false : null"

              ></b-form-input>
              <div v-if="errors[0]" class="text-error-sn text-center">Mobile {{errors[0]}}</div>
            </b-form-group>
          </ValidationProvider>
        </b-col>
        <b-col mb="6">
        </b-col>
      </b-row>

      <StreetCreateSN
          component="MoreInfo"
          :street="lead.street"
          :city="lead.city"
          :state="lead.state"

          @street-changed="streetChanged"
      />

    </b-card>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import vSelect from "vue-select";
import VueGoogleAutocomplete from "vue-google-autocomplete";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import StreetCreateSN from "@/views/social-network/views/commissions/lead-create/StreetCreateSN";

export default {
  data() {
    return {
      optionsState: [{
        label: "Select a State",
        value: null,
      }],
      documents: [
        { label: "Select Document", value: null},
        { label: "SSN", value: 1 },
        { label: "ITIN", value: 2 },
        { label: "CPN", value: 3 }
      ],
      selectDocument: 'Document'
    }
  },
  props: {
    lead: {
      type: Object,
      default: () => ({}),
    },
    info: {
      type: Object,
      default: () => ({}),
    },
  },
  created() {
    this.loadStateLeads()
  },
  components: {
    StreetCreateSN,
    vSelect,
    VueGoogleAutocomplete,
    ValidationProvider,
    ValidationObserver,
  },

  methods: {
    ...mapActions(
        'SocialNetworkLeadsStore',
        [
          'A_GET_STATE_LEAD',
          'A_STATUS_LEADS',
        ]
    ),
    streetChanged({street, city, state}) {
      this.lead.street = street
      this.lead.city = city
      this.lead.state = state
    },

    async loadStateLeads () {
      const loadStateLeads = (await this.A_STATUS_LEADS()).map(st => {
        return {
          label: st.name,
          value: st.id
        }
      });
      this.optionsState = [...this.optionsState, ...loadStateLeads];
    },
  },
  watch: {
    "lead.type_document" () {
      const doc = this.documents.find(doc => doc.value === this.lead.type_document)
      this.selectDocument = doc.label;
    }
  }

}
</script>

