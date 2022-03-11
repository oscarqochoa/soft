<template>
  <div>
    <b-card no-body class="pl-4 pr-4 pt-2 pb-2">
      <b-row class="mb-3">
        <b-col md="4">
          <h3 class="title-card">Personal Information</h3>
        </b-col>
        <b-col md="4 text-center">
          <h3 style="line-height: 17px">
            <b-badge :variant="statusVariant">
              {{ personalInfo.valueStatus }}
            </b-badge>
          </h3>
        </b-col>
        <b-col md="4 text-right">
          <b-button
            v-show="!editPersonal"
            size="sm"
            variant="warning"
            class="btn-icon"
            title="Edit Personal Information"
            @click="activateInformationEdit(1)"
          >
            <feather-icon icon="SettingsIcon"></feather-icon>
          </b-button>
          <b-button
            size="sm"
            variant="danger"
            title="Cancel Edit"
            class="mr-1"
            @click="cancelInformationEdit(1)"
            v-show="editPersonal"
          >
            <feather-icon icon="TrashIcon"></feather-icon>
            Cancel
          </b-button>
          <b-button
            v-show="editPersonal"
            size="sm"
            variant="success"
            title="Update Personal Information"
            @click="updateInformation(1)"
          >
            <feather-icon icon="CheckIcon"></feather-icon>
            Update
          </b-button>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="6">
          <standar-form-group label="Nickname" :disabled="!editPersonal">
            <b-form-input
              v-model.trim="personalInfo.nickname"
              :placeholder="startTypingP"
              type="text"
              :class="['bg-color-white', 'font-bureau-style', borderNickname]"
              :disabled="!editPersonal"
            ></b-form-input>
          </standar-form-group>
        </b-col>
        <b-col md="6" class="p-relative">
          <standar-form-group label="Phone(M)" :disabled="!editPersonal">
            <b-form-input
              v-model="personalMobile.phonem"
              :placeholder="startTypingM"
              type="text"
              :class="[
                'bg-color-white',
                'font-bureau-style',
                editMobile ? 'w-95' : '',
              ]"
              :disabled="!editMobile"
              v-mask="'(###) ###-####'"
            ></b-form-input>
          </standar-form-group>
          <div class="position-litlle-icons">
            <b-button
              size="sm"
              :class="['btn-icon']"
              variant="warning"
              v-show="!editMobile"
              title="Edit Mobile"
              @click="activateInformationEdit(3)"
            >
              <feather-icon icon="SettingsIcon"></feather-icon>
            </b-button>
            <b-button
              size="sm"
              variant="danger"
              class="btn-icon mr-05"
              title="Cancel Edit"
              @click="cancelInformationEdit(3)"
              v-show="editMobile"
            >
              <feather-icon icon="TrashIcon"></feather-icon>
            </b-button>
            <b-button
              size="sm"
              variant="success"
              class="btn-icon"
              v-show="editMobile"
              title="Update Mobile"
              @click="updateInformation(3)"
            >
              <feather-icon icon="CheckIcon"></feather-icon>
            </b-button>
          </div>
        </b-col>
        <b-col md="6">
          <standar-form-group label="Name" :disabled="!editPersonal">
            <b-form-input
              v-model.trim="personalInfo.name"
              :placeholder="startTypingP"
              type="text"
              :class="['bg-color-white', 'font-bureau-style']"
              :disabled="!editPersonal"
            ></b-form-input>
          </standar-form-group>
        </b-col>
        <b-col md="6">
          <standar-form-group label="ST/AD" :disabled="!editPersonal">
            <v-select
              v-model="personalInfo.stateAd"
              :options="optionsStatesAd"
              :disabled="!editPersonal"
              :reduce="(el) => el.value"
            ></v-select>
          </standar-form-group>
        </b-col>
        <b-col md="6">
          <standar-form-group label="Lastname" :disabled="!editPersonal">
            <b-form-input
              v-model.trim="personalInfo.last_name"
              :placeholder="startTypingP"
              type="text"
              class="bg-color-white font-bureau-style"
              :disabled="!editPersonal"
            ></b-form-input>
          </standar-form-group>
        </b-col>
        <b-col md="6">
          <standar-form-group label="Status" :disabled="!editPersonal">
            <v-select
              v-model="personalInfo.status"
              :options="optionsStatus"
              :disabled="!editPersonal"
              :reduce="(el) => el.value"
            ></v-select>
          </standar-form-group>
        </b-col>
        <b-col md="6">
          <standar-form-group label="DOB" :disabled="!editPersonal">
            <b-form-datepicker
              class="bg-color-white font-bureau-style"
              :disabled="!editPersonal"
              v-model="personalInfo.dob"
            ></b-form-datepicker>
          </standar-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            id="fieldset-horizontal"
            label-class="p-0"
            label-cols-sm="4"
            label-for="input-horizontal"
            label-cols-lg="3"
            content-cols-sm
            content-cols-lg="8"
          >
            <template #label>
              <v-select
                v-model="personalInfo.document"
                :options="optionsDocuments"
                class="
                  select-icon-none
                  bg-color-white
                  pl-0
                  pr-2
                  font-bureau-style
                "
                :disabled="!editPersonal"
                :clearable="false"
                :reduce="(el) => el.value"
              ></v-select>
            </template>
            <b-input-group>
              <b-form-input
                v-model="personalInfo.numberDocument"
                :placeholder="startTypingP"
                type="text"
                class="bg-color-white font-bureau-style border-document"
                v-mask="'###-##-####'"
                :disabled="
                  (!editPersonal || !isCeoOrSupervisor) &&
                  (!emptyDocument || !editPersonal)
                "
                v-if="showDocument || emptyDocument"
              />
              <div
                :placeholder="startTypingP"
                type="text"
                class="
                  bg-color-white
                  font-bureau-style
                  form-control
                  border-document
                "
                style="padding-top: 7px"
                v-else
              >
                {{ personalInfo.numberDocumentEnc }}
              </div>
              <b-input-group-append>
                <b-button
                  :disabled="!isCeoOrSupervisor || editPersonal"
                  variant="warning"
                  class="btn-icon"
                  @click="showDocument = !showDocument"
                >
                  <feather-icon
                    icon="EyeIcon"
                    v-if="showDocument"
                  ></feather-icon>
                  <feather-icon icon="EyeOffIcon" v-else></feather-icon>
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <standar-form-group label="E-mail" :disabled="!editPersonal">
            <b-form-input
              v-model="personalInfo.email"
              :placeholder="startTypingP"
              type="email"
              class="bg-color-white font-bureau-style"
              :disabled="!editPersonal"
            ></b-form-input>
          </standar-form-group>
        </b-col>
        <b-col md="6">
          <standar-form-group label="Origin Country" :disabled="!editPersonal">
            <v-select
              v-model="personalInfo.origin_country"
              :options="optionsOriginCountrys"
              class="select-icon-none bg-color-white font-bureau-style"
              :placeholder="startTypingP"
              :disabled="!editPersonal"
              :reduce="(el) => el.value"
            ></v-select>
          </standar-form-group>
        </b-col>
        <b-col md="6">
          <standar-form-group label="Language" :disabled="!editPersonal">
            <v-select
              v-model="personalInfo.language"
              :options="optionsLanguage"
              class="select-icon-none bg-color-white font-bureau-style"
              :disabled="!editPersonal"
              :reduce="(el) => el.value"
            ></v-select>
          </standar-form-group>
        </b-col>
      </b-row>
    </b-card>
  </div>
  <!-- ADDRESS -->
</template>

<script>
import { mapGetters } from "vuex";
import { mask } from "vue-the-mask";

// Components
import vSelect from "vue-select";
import StandarFormGroup from "@/views/social-network/views/leads/components/StandarFormGroup.vue";
import VueGoogleAutocomplete from "vue-google-autocomplete";

// Services
import SNLeadsService from "@/views/social-network/services/leads";
import globalService from "@/service/global";

export default {
  directives: {
    mask: (el, binding) => {
      if (!binding.value) return;
      mask(el, binding);
    },
  },
  components: { vSelect, VueGoogleAutocomplete, StandarFormGroup },
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
  data() {
    return {
      editPersonal: false,
      editAddress: false,
      editMobile: false,
      repeatNickname: false,
      formatDate: {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      },
      returnInformation: {},
      returnAddress: {},
      returnMobile: {},
      //Options
      optionsStates: [],
      optionsStatus: [],
      optionsOriginCountrys: [],
      optionsStatesAd: [],
      optionsDocuments: [
        { label: "Document", value: null, disabled: true },
        { label: "SSN", value: 1 },
        { label: "ITIN", value: 2 },
        { label: "CPN", value: 3 },
      ],

      optionsLanguage: [
        { label: "Select an option ", value: 0, disabled: true },
        { label: "Spanish", value: "ES" },
        { label: "English", value: "EN" },
      ],
      options: [
        { text: "Select an option ", value: 0, disabled: true },
        { text: "New", value: "new" },
        { text: "In Process", value: "in_process" },
        { text: "Closed", value: "closed" },
      ],
      showDocument: false,
      emptyDocument: false,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
    /* Styles */
    statusVariant() {
      return this.editPersonal ? "light-info" : "light-warning";
    },
    //Styles Nickname
    borderNickname() {
      return this.editPersonal && this.repeatNickname ? "border-danger" : "";
    },
    /* Placheholders */
    startTypingP() {
      return this.editPersonal ? "Start typing..." : "";
    },
    startTypingM() {
      return this.editMobile ? "Start typing..." : "";
    },
    isCeoOrSupervisor() {
      return [1, 2].includes(this.currentUser.role_id);
    },
  },
  methods: {
    getEmptyDocument() {
      this.emptyDocument =
        this.personalInfo.numberDocument == null ? true : false;
    },
    async activateInformationEdit(type) {
      //type 1 personal information
      //type 2 address
      //type 3 mobile

      let message =
        type == 1 ? "information" : type == 2 ? "address" : "mobile";

      const confirm = await this.showConfirmSwal(
        "Are you sure",
        `Do you want to edit the ${message}?`
      );

      if (confirm.value) {
        if (type == 1) {
          this.returnInformation = JSON.parse(
            JSON.stringify(this.personalInfo)
          );
          this.editPersonal = true;
          if (this.isCeoOrSupervisor) {
            this.showDocument = true;
          }
        } else if (type == 2) {
          this.returnAddress = JSON.parse(JSON.stringify(this.personalAddress));
          this.editAddress = true;
        } else if (type == 3) {
          this.returnMobile = JSON.parse(JSON.stringify(this.personalMobile));
          this.editMobile = true;
        }
      }
    },
    async cancelInformationEdit(type) {
      const confirm = await this.showConfirmSwal(
        "Are you sure?",
        "Changes will be lost"
      );

      if (confirm.value) {
        if (type == 1) {
          this.personalInfo = this.returnInformation;
          this.editPersonal = false;
        } else if (type == 2) {
          this.personalAddress = this.returnAddress;
          this.editAddress = false;
        } else if (type == 3) {
          this.personalMobile = this.returnMobile;
          this.editMobile = false;
        }
      }
    },
    async updateInformation(type) {
      try {
        let message =
          type == 1 ? "information" : type == 2 ? "address" : "mobile";

        const confirm = await this.showConfirmSwal(
          "Are you sure?",
          `The ${message} will be save!`
        );

        if (confirm.value) {
          this.addPreloader();
          let params = {};

          if (type == 1) {
            switch (this.personalInfo.document) {
              case 1:
                this.personalInfo.ssn = this.personalInfo.numberDocument;
                break;
              case 2:
                this.personalInfo.itin = this.personalInfo.numberDocument;
                break;
              case 3:
                this.personalInfo.other = this.personalInfo.numberDocument;
                break;
            }
            this.personalInfo.numberDocumentEnc = this.personalInfo
              .numberDocument
              ? "XXX-XX-" +
                this.personalInfo.numberDocument.substring(
                  this.personalInfo.numberDocument.length - 4
                )
              : null;
            params = this.personalInfo;
            this.getEmptyDocument();
          } else if (type == 2) {
            params = this.personalAddress;
          } else if (type == 3) {
            params = this.personalMobile;
          }

          this.updateFunction(params, type);
        }
      } catch (error) {
        throw error;
      }
    },
    async updateFunction(params, type) {
      this.addPreloader();
      try {
        const response =
          type == 1
            ? await SNLeadsService.postUpdateLeadInformation(params)
            : await SNLeadsService.postUpdateLeadInformationFields(params);

        if (response.status == 200) {
          this.removePreloader();

          this.showGenericToast({
            title: "Updated",
            text: "Information was saved",
          });

          this.requiredFieldsForCreateCrmTask.first_name =
            response.data[0].first_name;
          this.requiredFieldsForCreateCrmTask.last_name =
            response.data[0].last_name;
          this.requiredFieldsForCreateCrmTask.mobile = response.data[0].mobile;
          this.requiredFieldsForCreateCrmTask.state = response.data[0].state;
          if (type == 1) {
            this.editPersonal = false;
            this.returnInformation = JSON.parse(
              JSON.stringify(this.personalInfo)
            );
          } else if (type == 2) {
            this.editAddress = false;
            this.returnAddress = JSON.parse(
              JSON.stringify(this.personalAddress)
            );
          } else if (type == 3) {
            this.editMobile = false;
            this.returnMobile = JSON.parse(JSON.stringify(this.personalMobile));
          }

          this.repeatNickname = false;
        }
      } catch (error) {
        this.removePreloader();
        swal.fire(
          "Error!",
          "The information could not be saved, contact support or try again",
          "error"
        );
      }
    },
    capitalize(text) {
      return text.substr(0, 1).toUpperCase() + text.substr(1);
    },
    //Get Options Selects
    async statesAD() {
      try {
        let statesAd = await globalService.getStates({ type: 1 });
        statesAd.data.forEach((state) => {
          this.optionsStatesAd.push({ label: state.state, value: state.slug });
        });
      } catch (error) {
        console.log(error);
      }
    },
    async stateseeuu() {
      try {
        const response = await globalService.getStatesEEuu();

        response.data.map((item) => {
          this.optionsStates.push({ label: item.state, value: item.slug });
        });

        this.optionsStates.unshift({
          label: "Select an option",
          value: 0,
          disabled: true,
        });
      } catch (error) {
        throw error;
      }
    },
    async statusleads() {
      try {
        const response = await globalService.getStatusLead();

        response.data.map((item) => {
          this.optionsStatus.push({
            label: item.name,
            value: item.id,
          });
        });

        this.optionsStatus.unshift({
          label: "Select an option",
          value: 0,
          disabled: true,
        });
      } catch (error) {
        throw error;
      }
    },
    async getCountrys() {
      try {
        const response = await globalService.getCountries();

        response.data.map((item) => {
          this.optionsOriginCountrys.push({
            label: item.name,
            value: item.id,
          });
        });

        this.optionsOriginCountrys.unshift({
          label: "Select an option",
          value: 0,
          disabled: true,
        });
      } catch (error) {
        throw error;
      }
    },
    async validateMobile(mobile) {
      try {
        const validate = await SNLeadsService.verifyMobile({
          mobile: mobile,
        });

        if (validate.status == 200) {
          if (validate.data.error_code == "MOBILE_EXISTS") {
            const verifyMobile = await this.showConfirmSwal(
              "The phone number already exists: " + validate.data.message,
              "",
              {
                confirmButtonText: "OPEN LEAD",
              }
            );

            if (verifyMobile.value) {
              window.open(
                "/social-network/leads/new/dashboard/" + validate.data.lead_id,
                "_blank"
              );
            }
          }
        }
      } catch (error) {
        throw error;
      }
    },
    async validateNickname(nickname) {
      try {
        const validate = await SNLeadsService.validateNickname({
          nickname: nickname,
          lead_id: null,
        });

        if (validate.data.code == 1) {
          this.showWarningSwal(
            "The Nickname already exists: " + validate.data.message,
            ""
          );

          this.repeatNickname = true;
        } else {
          this.repeatNickname = false;
        }
      } catch (error) {
        throw error;
      }
    },
  },
  watch: {
    "personalMobile.phonem"(newValue) {
      if (newValue.length === 14 && this.editPersonal) {
        this.validateMobile(newValue);
      }
    },
    "personalInfo.nickname"(newValue) {
      if (this.editPersonal) {
        this.validateNickname(newValue);
      }
    },
    "personalInfo.name"(newValue) {
      this.personalInfo.name = this.capitalize(newValue);
    },
    "personalInfo.last_name"(newValue) {
      this.personalInfo.last_name = this.capitalize(newValue);
    },
    "personalInfo.numberDocument"(newValue) {
      this.emptyDocument = newValue == null ? true : false;
    },
    editPersonal(newValue) {
      //Selects PlaceHolders
      if (newValue) {
        this.personalInfo.status = this.personalInfo.status
          ? this.personalInfo.status
          : 0;
        this.personalInfo.origin_country = this.personalInfo.origin_country
          ? this.personalInfo.origin_country
          : 0;
        this.personalInfo.language = this.personalInfo.language
          ? this.personalInfo.language
          : 0;
      } else {
        this.personalInfo.status = this.personalInfo.status
          ? this.personalInfo.status
          : null;
        this.personalInfo.origin_country = this.personalInfo.origin_country
          ? this.personalInfo.origin_country
          : null;
        this.personalInfo.language = this.personalInfo.language
          ? this.personalInfo.language
          : null;
      }
    },
    editAddress(newValue) {
      //Selects PlaceHolders
      if (newValue) {
        this.personalAddress.state = this.personalAddress.state
          ? this.personalAddress.state
          : 0;
      } else {
        this.personalAddress.state = this.personalAddress.state
          ? this.personalAddress.state
          : null;
      }
    },
  },
  created() {
    this.statesAD();
    this.stateseeuu();
    this.statusleads();
    this.getCountrys();
  },
  mounted() {
    this.getEmptyDocument();
  },
};
</script>

<style scoped>
.mr-05 {
  margin-right: 5px;
}

.w-95 {
  width: 95%;
}

.b-form-datepicker .dropdown-menu {
  width: 20rem !important;
}
.w-pre {
  width: 32% !important;
}
.w-100 {
  width: 100% !important;
}

.w-15 {
  width: 15.5% !important;
}

.padding-little-icons {
  padding: 0px 4px;
  width: 21px;
  height: 23px;
}

.padding-little-icons-cancel {
  padding: 0px 5.5px;
  width: 21px;
  height: 23px;
}
.position-litlle-icons {
  position: absolute;
  right: 1rem;
  top: 0.3rem;
}
.border-hover-p:hover {
  border: 2px solid #7000ff !important;
}

.border-hover-a:hover {
  border: 2px solid #7000ff !important;
}
.border-hover-m:hover {
  border: 2px solid #7000ff !important;
}

.orange-color-sn {
  background: linear-gradient(75.42deg, #fc482a 24.3%, #f96951 99.88%);
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.purple-color-sn {
  background: linear-gradient(
    75.42deg,
    #6943e6 24.3%,
    #8a67ff 99.88%,
    #7a6aad 99.88%
  );
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.size-icon {
  width: 20.28px;
}
.size-little-icon {
  width: 14.28px;
}

.radius-prepend-eye {
  border-radius: 0px 4px 4px 0px !important;
}
.border-document {
  border-radius: 4px 0px 0px 4px !important;
}
</style>
