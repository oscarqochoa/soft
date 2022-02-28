<template>
  <div>
    <b-card>
      <b-container>
        <b-row>
          <b-col lg="4" md="4" sm="4" cols="9">
            <h3 class="title-card">Personal Information</h3>
          </b-col>
          <b-col
            lg="4"
            md="4"
            sm="4"
            cols="12"
            class="text-center mt-lg-0 mt-md-0 mt-sm-0 mt-1"
            order-lg="0"
            order-md="0"
            order-sm="0"
            order="3"
          >
            <b-button :variant="statusClass">
              {{ personalInfo.valueStatus }}
            </b-button>
          </b-col>
          <b-col lg="4" md="4" sm="4" cols="3" class="text-right">
            <b-button
              v-if="!editInformation"
              variant="warning"
              class="btn-icon"
              size="sm"
              @click="enableForm"
            >
              <feather-icon icon="SettingsIcon" />
            </b-button>
            <b-row v-if="editInformation" class="justify-content-end">
              <b-button variant="danger" size="sm" @click="disableForm">
                <feather-icon icon="Trash2Icon" />
                Cancel
              </b-button>
              <b-button
                variant="success"
                size="sm"
                @click="updateInformation(1)"
                class="ml-1"
              >
                <feather-icon icon="CheckIcon" />
                Update
              </b-button>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="mt-1">
        <br />

        <b-row>
          <b-col md="6">
            <standar-form-group label="Nickname" :disabled="!editInformation">
              <b-form-input
                v-model.trim="personalInfo.nickname"
                :disabled="!editInformation"
                type="text"
              ></b-form-input>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group label="Phone(M)" :disabled="!editMobile">
              <b-row>
                <b-col :cols="editMobile ? '9' : '10'">
                  <b-form-input
                    v-model="personalMobile.phonem"
                    type="text"
                    :disabled="!editMobile"
                  ></b-form-input>
                </b-col>
                <b-col :cols="editMobile ? '3' : '1'" class="text-left">
                  <b-button
                    v-if="!editMobile"
                    variant="primary"
                    class="btn-icon"
                    size="sm"
                    @click="enableMobileFormField"
                  >
                    <feather-icon icon="SettingsIcon" />
                  </b-button>
                  <b-row v-if="editMobile">
                    <b-button
                      variant="danger"
                      size="sm"
                      @click="disableMobileFormField"
                    >
                      <feather-icon icon="Trash2Icon" />
                    </b-button>
                    <b-button
                      variant="success"
                      size="sm"
                      class="ml-1"
                      @click="updateInformation(2)"
                    >
                      <feather-icon icon="CheckIcon" />
                    </b-button>
                  </b-row>
                </b-col>
              </b-row>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group label="Name" :disabled="!editInformation">
              <b-form-input
                v-model="personalInfo.name"
                :disabled="!editInformation"
                type="text"
              ></b-form-input>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group label="ST/AD" :disabled="!editInformation">
              <v-select
                v-model="personalInfo.stateAd"
                :options="G_STATES"
                :reduce="(el) => el.slug"
                :clearable="false"
                :disabled="!editInformation"
              >
              </v-select>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group label="Lastname" :disabled="!editInformation">
              <b-form-input
                v-model="personalInfo.last_name"
                :disabled="!editInformation"
                type="text"
              ></b-form-input>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group label="Status" :disabled="!editInformation">
              <v-select
                v-model="personalInfo.status"
                :options="G_STATUS_LEAD"
                :reduce="(el) => el.id"
                :clearable="false"
                :disabled="!editInformation"
              >
              </v-select>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group label="DOB" :disabled="!editInformation">
              <b-form-datepicker
                v-model="personalInfo.dob"
                :disabled="!editInformation"
              ></b-form-datepicker>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              label-for="input"
              label-class="p-0"
              label-cols-sm="4"
              label-cols-lg="3"
              content-cols-sm
              content-cols-lg="8"
            >
              <template #label>
                <v-select
                  v-model="personalInfo.document"
                  :options="docTypesOptions"
                  class="w-75"
                  :reduce="(el) => el.value"
                  :disabled="!editInformation"
                  :clearable="false"
                >
                </v-select>
              </template>
              <b-input-group>
                <b-form-input
                  v-model="personalInfo.numberDocument"
                  :disabled="!editInformation"
                  v-mask="'###-##-####'"
                  v-if="showDocument || emptyDocument"
                ></b-form-input>
                <div
                  :class="[
                    'form-control',
                    isDarkTheme ? 'form-control-dark' : 'form-control-light',
                  ]"
                  v-else
                >
                  <p style="font-size: 14px; margin-top: 2px">
                    {{ personalInfo.numberDocumentEnc }}
                  </p>
                </div>

                <b-input-group-append>
                  <b-button
                    class="btn-icon"
                    variant="primary"
                    :disabled="editInformation"
                    @click="showDocument = !showDocument"
                  >
                    <feather-icon
                      v-if="showDocument"
                      icon="EyeIcon"
                    ></feather-icon>
                    <feather-icon v-else icon="EyeOffIcon"></feather-icon>
                  </b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group label="E-mail" :disabled="!editInformation">
              <b-form-input
                v-model="personalInfo.email"
                :disabled="!editInformation"
                type="text"
              ></b-form-input>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group
              label="Origin Country"
              :disabled="!editInformation"
            >
              <v-select
                v-model="personalInfo.origin_country"
                :options="G_COUNTRIES"
                :disabled="!editInformation"
                :reduce="(el) => el.id"
              >
              </v-select>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group label="Language" :disabled="!editInformation">
              <v-select
                v-model="personalInfo.language"
                :options="languagesOptions"
                :disabled="!editInformation"
                :reduce="(el) => el.value"
                :clearable="false"
              >
              </v-select>
            </standar-form-group>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

// Components
import vSelect from "vue-select";
import StandarFormGroup from "@/views/social-network/views/leads/components/StandarFormGroup.vue";

export default {
  props: {
    personalInfo: {
      type: Object,
      default: () => ({}),
    },
    personalAddress: {
      type: Object,
      default: () => ({}),
    },
    personalMobile: {
      type: Object,
      default: () => ({}),
    },
    requiredFieldsForCreateCrmTask: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    vSelect,
    "standar-form-group": StandarFormGroup,
  },
  data() {
    return {
      editInformation: false,
      editMobile: false,
      showDocument: false,
      emptyDocument: false,

      docTypesOptions: [
        { label: "Document", value: "" },
        { label: "SSN", value: 1 },
        { label: "ITIN", value: 2 },
        { label: "CPN", value: 3 },
      ],
      languagesOptions: [
        { label: "Spanish", value: "ES" },
        { label: "English", value: "EN" },
      ],
    };
  },
  computed: {
    ...mapState({
      S_LEAD: (state) => state.SocialNetworkLeadsStore.S_LEAD,
    }),
    ...mapGetters({
      G_STATES: "StandarStore/G_STATES",
      G_STATUS_LEAD: "StandarStore/G_STATUS_LEAD",
      G_COUNTRIES: "StandarStore/G_COUNTRIES",
    }),
    isDarkTheme() {
      return this.$store.state.appConfig.layout.skin == "dark";
    },
    statusClass() {
      return this.editInformation ? "info" : "warning";
    },
  },
  watch: {},
  methods: {
    ...mapActions({
      A_GET_STATES: "StandarStore/A_GET_STATES",
      A_GET_STATUS_LEAD: "StandarStore/A_GET_STATUS_LEAD",
      A_GET_COUNTRIES: "StandarStore/A_GET_COUNTRIES",
      A_POST_UPDATE_LEAD_INFORMATION:
        "SocialNetworkLeadsStore/A_POST_UPDATE_LEAD_INFORMATION",
      A_POST_UPDATE_LEAD_INFORMATION_FIELDS:
        "SocialNetworkLeadsStore/A_POST_UPDATE_LEAD_INFORMATION_FIELDS",
    }),
    getEmptyDocument() {
      this.emptyDocument =
        this.personalInfo.numberDocument == null ? true : false;
    },
    enableForm() {
      this.showConfirmSwal(
        "Are you sure?",
        "Do you want to edit the information?",
        "question"
      ).then((result) => {
        if (result.value) {
          this.editInformation = true;
          this.showDocument = true;
        }
      });
    },
    disableForm() {
      this.showConfirmSwal(
        "Are you sure?",
        "Changes will be lost!",
        "question"
      ).then((result) => {
        if (result.value) {
          this.editInformation = false;
          this.showDocument = false;
        }
      });
    },
    enableMobileFormField() {
      this.showConfirmSwal(
        "Are you sure?",
        "Do you want to edit the mobile?",
        "question"
      ).then(async (result) => {
        if (result.value) {
          this.editMobile = true;
        }
      });
    },
    disableMobileFormField() {
      this.showConfirmSwal(
        "Are you sure?",
        "Changes will be lost!",
        "question"
      ).then(async (result) => {
        if (result.value) {
          this.editMobile = false;
        }
      });
    },
    async getStatesAD() {
      try {
        await this.A_GET_STATES({
          type: 1,
        });
      } catch (error) {
        console.log("Something went wrong on getStatesAD: ", error);
        this.showErrorSwal(error);
      }
    },
    async getStatusLead() {
      try {
        await this.A_GET_STATUS_LEAD();
      } catch (error) {
        console.log("Something went wrong on getStatusLead: ", error);
        throw error;
      }
    },
    async getCountries() {
      try {
        await this.A_GET_COUNTRIES();
      } catch (error) {
        console.log("Something went wrong on getCountries: ", error);
        throw error;
      }
    },
    async updateInformation(type) {
      try {
        let message = type == 1 ? "information" : type == 3 ? "mobile" : "";

        this.showConfirmSwal(
          "Are you sure?",
          `The ${message} will be save`,
          "question"
        ).then(async (result) => {
          if (result.value) {
            this.addPreloader();
            let response = null;

            if (type == 1) {
              switch (this.personalInfo.document) {
                case 1:
                  this.personalInfo.ssn = this.personalInfo.numberDocument;
                  break;
                case 2:
                  this.personalInfo.itin = this.personalInfo.numberDocument;
                  break;
                case 3:
                  this.personalInfo.othe = this.personalInfo.numberDocument;
                  break;
              }

              this.personalInfo.numberDocumentEnc = this.personalInfo
                .numberDocument
                ? "XXX-XX-" +
                  this.personalInfo.numberDocument.substring(
                    this.personalInfo.numberDocument.length - 4
                  )
                : null;

              response = await this.A_POST_UPDATE_LEAD_INFORMATION(
                this.personalInfo
              );

              this.editInformation = false;
            } else {
              response = await this.A_POST_UPDATE_LEAD_INFORMATION_FIELDS(
                this.personalMobile
              );

              this.editMobile = false;
            }

            this.requiredFieldsForCreateCrmTask.first_name =
              response.data[0].first_name;
            this.requiredFieldsForCreateCrmTask.last_name =
              response.data[0].last_name;
            this.requiredFieldsForCreateCrmTask.mobile =
              response.data[0].mobile;
            this.requiredFieldsForCreateCrmTask.state = response.data[0].state;

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
        this.removePreloader();
        console.log("Something went wrong on updateInformation: ", error);
        throw error;
      }
    },
  },
  async created() {
    await this.getStatesAD();
    await this.getStatusLead();
    await this.getCountries();
  },
  mounted() {
    this.getEmptyDocument();
  },
};
</script>

<style lang="scss">
.form-control {
  &-dark {
    background: #252b3b !important;
    border: 1px solid #353b4b !important;
  }

  &-light {
    background: #fff;
  }
}
</style>