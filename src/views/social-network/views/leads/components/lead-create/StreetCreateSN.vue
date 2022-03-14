<template>
  <div>
    <b-row class="mt-2 text-left">
      <b-col mb="12">
        <ValidationProvider rules="required" v-slot="{errors}" :name="`${this.title} address`">
          <b-form-group
              id="fieldset-horizontal"
              label-class="font-bureau-style font-weight-normal color-gray-input-sn"
              label-cols-sm="2"
              label-for="input-horizontal"
              label-cols-lg="2"
              content-cols-sm
              content-cols-lg="10"
              label="Address"
          >
            <vue-google-autocomplete
                :id="`${title}-${street}-street`"
                :ref="`${title}-${street}-street`"
                v-model="street"
                class="form-control input-form fond-white border-hover pl-1"
                placeholder="Please type your address"
                country="us"
                :readonly="false"
                @placechanged="getAddressData"
                @keyup="(e) => onChangeAddress(e, street)"
                :state="errors[0] ? false : null"
                :class="{'border-error-sn style-chooser' :errors[0]}"
            />
            <div v-if="errors[0]" class="text-error-sn text-center">Address {{errors[0]}}</div>
          </b-form-group>
        </ValidationProvider>
      </b-col>
    </b-row>
    <b-row class="mt-2 text-left">
      <b-col mb="6">
        <ValidationProvider rules="required" v-slot="{errors}" :name="`${this.title} city`">
          <b-form-group
              id="fieldset-horizontal"
              label-class="font-bureau-style font-weight-normal color-gray-input-sn"
              label-cols-sm="4"
              label-for="input-horizontal"
              label-cols-lg="4"
              content-cols-sm
              content-cols-lg="8"
              label="City"
          >
            <b-form-input
                v-model="city"
                class="select-icon-none font-bureau-style border-hover bg-white-c"
                :class="{'border-error-sn' :errors[0]}"
                placeholder="Please type city"
                :state="errors[0] ? false : null"

            ></b-form-input>
            <div v-if="errors[0]" class="text-error-sn text-center">City {{errors[0]}}</div>
          </b-form-group>
        </ValidationProvider>
      </b-col>
      <b-col mb="6">
        <ValidationProvider rules="required" v-slot="{errors}" :name="`${this.title} state`">
          <b-form-group
              id="fieldset-horizontal"
              label-class="font-bureau-style font-weight-normal color-gray-input-sn"
              label-cols-sm="4"
              label-for="input-horizontal"
              label-cols-lg="4"
              content-cols-sm
              content-cols-lg="8"
              label="State"
              :state="errors[0] ? false : null"
          >
            <v-select
                id="state_more_information"
                v-model="state"
                :selected="null"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                label="label"
                :options="S_STATES_EEUU"
                :clearable="false"
                :reduce="el => el.value"
            />
            <input type="radio" class="d-none bg-green" v-model="state" />
            <div v-if="errors[0]" class="text-error-sn text-center">State {{errors[0]}}</div>
          </b-form-group>

        </ValidationProvider>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import vSelect from "vue-select";
import {mapActions, mapState} from "vuex";
export default {
  name: 'StreetCreateSN',
  props: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    title: {
      type: String,
      default: 'asdasd'
    }
  },
  components: {
    vSelect,
    VueGoogleAutocomplete,
    ValidationProvider,
    ValidationObserver,
  },
  computed: {
    ...mapState('SocialNetworkLeadsStore', ['S_STATES_EEUU']),
  },
  async created() {
    await this.A_GET_STATE_EEUU()
  },
  mounted() {

  },
  methods: {
    ...mapActions(
        'SocialNetworkLeadsStore',
        [
          'A_STATUS_LEADS',
          'A_GET_STATE_EEUU',
        ]
    ),

    onChangeAddress(event, data) {
      this.street = `${event.target.value}`;
      this.$emit('street-changed', { street: this.street, state: this.state, city: this.city })
      console.log('1')
    },
    getAddressData: function (addressData) {
      const address = `${addressData.route} ${addressData.locality} ${addressData.administrative_area_level_1} ${addressData.country}`;
      this.city = addressData.locality;
      this.state = addressData.administrative_area_level_1
      this.street = address;
      this.$emit('street-changed', { street: this.street, state: this.state, city: this.city })
      console.log('2')
    },
  }
}
</script>

<style scoped lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
.style-chooser {
  border: 1px solid #fc424a !important;

  padding: .1rem;
  border-radius: 0.3rem
}
</style>