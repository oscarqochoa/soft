<template>
  <div>
    <b-card no-body class="p-2 mt-4">
      <b-row>
        <b-col md="6">
          <h4 class="title-card">Basic Information</h4>
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
                label="Nickname"
            >
              <b-form-input
                  placeholder="Please type nickname"
                  v-model="lead.nickname"
                  class="select-icon-none font-bureau-style border-hover bg-white-c"
                  :class="{'border-error-sn' :errors[0]}"
                  :state="errors[0] ? false : null"
              ></b-form-input>
              <div v-if="errors[0]" class="text-error-sn text-center">Nickname {{errors[0]}}</div>
            </b-form-group>
          </ValidationProvider>
        </b-col>
        <b-col mb="6">
          <ValidationProvider rules="required" v-slot="{errors}">

            <b-form-group
                label="Language"
                label-for="st-ad"
                :state="errors[0] ? false : null"
                id="fieldset-horizontal"
                label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                label-cols-sm="4"
                label-cols-lg="4"
                content-cols-sm
                content-cols-lg="8"
                class="m-0"
            >
              <v-select
                  id="leadLanguage"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="label"
                  v-model="lead.language"
                  :options="languagesOptions"
                  :clearable="false"
                  :reduce="el => el.value"
              />
              <div v-if="errors[0]" class="text-error-sn text-center">Language {{errors[0]}}</div>
            </b-form-group>
            <input type="radio" class="d-none bg-green" v-model="lead.language" />

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
                label="Did you start dialogue?"
            >
              <VueToggles
                  class="mt-1"
                  height="31"
                  width="90"
                  checkedText="YES"
                  uncheckedText="NO"
                  checkedBg="#FF6A6A"
                  :dotColor="lead.addEvidence? 'white' : '#FF6A6A'"
                  uncheckedBg="lightgrey"
                  :value="lead.addEvidence"
                  @click="lead.addEvidence = !lead.addEvidence"
                  fontWeight="bold"
              ></VueToggles>
            </b-form-group>


          </ValidationProvider>
        </b-col>
        <b-col mb="6">
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import VueToggles from "vue-toggles";
import vSelect from "vue-select";

export default {
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
  components: {
    VueToggles,
    vSelect
  },
  data() {
    return {
      languagesOptions : [
        {
          label: "Select a Language",
          value: null
        },
        {
          label: "Spanish",
          value: "ES"
        },
        {
          label: "English",
          value: "EN"
        }
      ]
    }
  },
  computed: {
    nickname () {
      return this.lead.nickname;
    }
  },
  methods: {
    ...mapActions(
        'SocialNetworkLeadsStore',
        [
          'A_VALIDATE_NICKNAME',
        ]
    ),
  },
  watch: {
    async nickname() {
      if (this.nickname.length > 2) {
        console.log(this.nickname)
        const resp = await this.A_VALIDATE_NICKNAME({
          nickname: this.nickname, lead_id: null
        })
        if(resp.data.code){
          this.$bvToast.toast(`The Nickname already exists: ${resp.data.message}`, {
            title: `Information`,
            autoHideDelay: 3000,
            appendToast: true,
            variant: 'danger'
          })
        }

      }
    }
  }
}
</script>