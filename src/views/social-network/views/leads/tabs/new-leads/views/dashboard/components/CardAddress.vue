<template>
  <div>
    <b-card>
      <b-container>
        <b-row>
          <b-col cols="6">
            <h3 class="title-card">Address</h3>
          </b-col>
          <b-col cols="6" class="text-right">
            <b-button
              v-if="!editInformation"
              variant="warning"
              class="btn-icon"
              size="sm"
              @click="enableForm"
            >
              <feather-icon icon="SettingsIcon"></feather-icon>
            </b-button>
            <b-row v-if="editInformation" class="justify-content-end">
              <b-button variant="danger" size="sm" @click="disableForm">
                <feather-icon icon="Trash2Icon"></feather-icon>
                Cancel
              </b-button>
              <b-button
                variant="success"
                size="sm"
                @click="updateInformation"
                class="ml-1"
              >
                <feather-icon icon="CheckIcon"></feather-icon>
                Update
              </b-button>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="mt-1">
        <br />

        <b-row>
          <b-col md="12">
            <standar-form-group
              label="Address"
              cols="12"
              :disabled="!editInformation"
            >
              <vue-google-autocomplete
                v-model="personalAddress.street"
                id="street_address"
                class="form-control form-group-col-12"
                :placeholder="editInformation ? 'Pleace type your address' : ''"
                country="us"
                v-on:placechanged="getAddressData"
                :disabled="!editInformation"
              >
              </vue-google-autocomplete>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group label="City" :disabled="!editInformation">
              <b-form-input
                v-model="personalAddress.city"
                type="text"
                :disabled="!editInformation"
              ></b-form-input>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group label="Zip Code" :disabled="!editInformation">
              <b-form-input
                v-model="personalAddress.zipcode"
                type="text"
                :disabled="!editInformation"
              ></b-form-input>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group label="State" :disabled="!editInformation">
              <v-select
                v-model="personalAddress.state"
                :options="G_STATES_EEUU"
                :reduce="(el) => el.id"
                :clearable="false"
                :disabled="!editInformation"
              ></v-select>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group label="Country" :disabled="!editInformation">
              <b-form-input
                v-model="personalAddress.country"
                type="text"
                :disabled="!editInformation"
              ></b-form-input>
            </standar-form-group>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

// Components
import vSelect from "vue-select";
import StandarFormGroup from "@/views/social-network/views/leads/components/StandarFormGroup.vue";
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default {
  components: {
    vSelect,
    "standar-form-group": StandarFormGroup,
    VueGoogleAutocomplete,
  },
  props: {
    personalAddress: {
      type: Object,
      default: () => ({}),
    },
    requiredFieldsForCreateCrmTask: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      editInformation: false,
    };
  },
  computed: {
    ...mapGetters({
      G_STATES_EEUU: "StandarStore/G_STATES_EEUU",
    }),
  },
  methods: {
    ...mapActions({
      A_GET_STATES_EEUU: "StandarStore/A_GET_STATES_EEUU",
      A_POST_UPDATE_LEAD_INFORMATION_FIELDS:
        "SocialNetworkLeadsStore/A_POST_UPDATE_LEAD_INFORMATION_FIELDS",
    }),
    enableForm() {
      this.showSwalGeneric(
        "Are you sure?",
        "Do you want to edit the information?",
        "question"
      ).then((result) => {
        if (result.value) {
          this.editInformation = true;
        }
      });
    },
    disableForm() {
      this.showSwalGeneric(
        "Are you sure?",
        "Changes will be lost!",
        "question"
      ).then((result) => {
        if (result.value) {
          this.editInformation = false;
        }
      });
    },
    getAddressData(mainAddress, details, type) {
      let address = mainAddress.street_number
        ? mainAddress.street_number + " " + mainAddress.route
        : mainAddress.route;

      this.personalAddress.street = address;
      this.personalAddress.city = mainAddress.locality;
      this.personalAddress.zipcode = mainAddress.postal_code;
      this.personalAddress.state = mainAddress.administrative_area_level_1;
    },
    async getStatesEEUU() {
      try {
        await this.A_GET_STATES_EEUU({});
      } catch (error) {
        console.log("Something went wrong on getStatesEEUU", error);
        throw error;
      }
    },
    updateInformation() {
      try {
        this.showSwalGeneric(
          "Are you sure?",
          "The address will be save",
          "question"
        ).then(async (result) => {
          if (result.value) {
            this.addPreloader();

            const response = await this.A_POST_UPDATE_LEAD_INFORMATION_FIELDS(
              this.personalAddress
            );

            this.requiredFieldsForCreateCrmTask.first_name =
              response.data[0].first_name;
            this.requiredFieldsForCreateCrmTask.last_name =
              response.data[0].last_name;
            this.requiredFieldsForCreateCrmTask.mobile =
              response.data[0].mobile;
            this.requiredFieldsForCreateCrmTask.state = response.data[0].state;

            this.editInformation = false;

            this.removePreloader();

            if (response.status == 200) {
              this.showToast(
                "success",
                "top-right",
                "Success!",
                "CheckIcon",
                "Information was saved"
              );
            }
          }
        });
      } catch (error) {
        console.log("Something went wrong on updateInformation", error);
        throw error;
      }
    },
  },
  async created() {
    await this.getStatesEEUU();
  },
};
</script>

<style>
.form-group-col-12 {
  margin-left: -58px;
}
</style>