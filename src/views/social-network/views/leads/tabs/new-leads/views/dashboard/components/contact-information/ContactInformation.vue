<template>
  <ValidationObserver ref="form">
    <b-row>
      <b-col md="12">
        <b-form-group>
          <b-input-group>
            <b-input-group-prepend class="w-pre">
              <b-input-group-text class="w-100 prepend-without-borders">
                <span
                  class="roboto-class"
                  style="color: #939393; font-size: 15px"
                  >Catcher</span
                >
              </b-input-group-text>
            </b-input-group-prepend>
            <b-form-input
              v-model.trim="contactInfo.catcher"
              :placeholder="startTypingP"
              type="text"
              :class="['bg-white', borderInputP, borderNickname]"
              :disabled="!editContact"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
        <b-form-group>
          <b-input-group>
            <b-input-group-prepend class="w-pre">
              <b-input-group-text class="w-100 prepend-without-borders">
                <span
                  class="roboto-class"
                  style="color: #939393; font-size: 15px"
                  >Program</span
                >
              </b-input-group-text>
            </b-input-group-prepend>
            <b-form-input
              v-model.trim="contactInfo.program"
              :placeholder="startTypingP"
              type="text"
              :class="['bg-white', borderInputP]"
              :disabled="!editContact"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
        <b-form-group>
          <b-input-group>
            <b-input-group-prepend class="w-pre">
              <b-input-group-text class="w-100 prepend-without-borders">
                <span
                  class="roboto-class"
                  style="color: #939393; font-size: 15px"
                  >Date</span
                >
              </b-input-group-text>
            </b-input-group-prepend>
            <b-form-input
              v-model="contactInfo.date"
              :placeholder="startTypingP"
              type="email"
              :class="['bg-white', borderInputP]"
              :disabled="!editContact"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
        <b-form-group v-if="parent_source == 2">
          <b-input-group>
            <b-input-group-prepend class="w-pre">
              <b-input-group-text class="w-100 prepend-without-borders">
                <span
                  class="roboto-class"
                  style="color: #939393; font-size: 15px"
                  >Contact Method</span
                >
              </b-input-group-text>
            </b-input-group-prepend>
            <b-form-input
              v-model.trim="contactInfo.contact_method"
              :placeholder="startTypingP"
              type="text"
              :class="['bg-white capitalize-sn', borderInputP]"
              :disabled="!editContact"
            ></b-form-input>
          </b-input-group>
        </b-form-group>
        <b-form-group>
          <b-input-group>
            <b-input-group-prepend class="w-pre">
              <b-input-group-text class="w-100 prepend-without-borders">
                <span
                  class="roboto-class"
                  style="color: #939393; font-size: 15px"
                  >Potential</span
                >
              </b-input-group-text>
            </b-input-group-prepend>
            <VueToggles
              class="mt-1 ml-2"
              height="27"
              width="70"
              checkedText="YES"
              uncheckedText="NO"
              checkedBg="#FF6045"
              uncheckedBg="lightgrey"
              :value="potential"
              @click="editReply(1)"
              fontWeight="bold"
            ></VueToggles>
          </b-input-group>
        </b-form-group>
        <b-form-group>
          <b-input-group>
            <b-input-group-prepend class="w-pre">
              <b-input-group-text class="w-100 prepend-without-borders">
                <span
                  class="roboto-class"
                  style="color: #939393; font-size: 15px"
                  >Start Dialogue</span
                >
              </b-input-group-text>
            </b-input-group-prepend>
            <VueToggles
              class="mt-1 ml-2"
              height="27"
              width="70"
              checkedText="YES"
              uncheckedText="NO"
              checkedBg="#FF6045"
              uncheckedBg="lightgrey"
              :value="dialogue"
              @click="editReply(2)"
              fontWeight="bold"
            ></VueToggles>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-modal
        id="modalReasonNoPotential"
        v-model="modalReasonNoPotential"
        header-class="bg-white p-4 flex-between"
        size="md"
        centered
        @ok.prevent="confirmPotential"
        no-close-on-backdrop
      >
        <template #modal-header="{ close }">
          <span>
            <h3 class="roboto-class" style="color: #706989">
              <span>Choose a reason</span>
            </h3>
          </span>
          <span>
            <i
              class="fas fa-times"
              style="
                color: #706989;
                font-size: 20px;
                cursor: pointer;
                background: transparent;
              "
              @click="close, (potential = !potential)"
            ></i>
          </span>
        </template>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <modal-reasons-no-potential
            v-model="reasonId"
          ></modal-reasons-no-potential>
          <div class="invalid-feedback" v-if="errors[0]">
            Reason is {{ errors[0] }}
          </div>
        </ValidationProvider>
        <template #modal-footer="{ ok, cancel }">
          <div style="display: flex; justify-content: end; align-items: center">
            <b-button
              class="rounded mr-2 btn-ui-orange"
              @click="cancel(), (potential = !potential)"
              >Cancel</b-button
            >
            <b-button @click="ok()" class="rounded btn-ui-green"
              >Confirm</b-button
            >
          </div>
        </template>
      </b-modal>
    </b-row>
  </ValidationObserver>
</template>

<script>
export default {
  props: {
    contactInfo: {
      type: Object,
      default: () => ({
        catcher: "",
        potential: "",
        program: "",
        date: "",
        dialogue: "",
        contact_method: "",
        reason: "",
      }),
    },
    reply: {
      type: Object,
      default: () => ({}),
    },
    parent_source: {
      type: Number,
      default: () => 0,
    },
  },
  data() {
    return {
      dialogue: true,
      potential: true,
      modalReasonNoPotential: false,
      reasonId: null,
    };
  },
  created() {},
  mounted() {
    this.dialogue = this.contactInfo.dialogue == "NO" ? false : true;
    this.potential = this.contactInfo.potential == "NO" ? false : true;
  },
  methods: {
    editReply(type) {
      swal
        .fire({
          imageUrl: "/images/new-icons/warning-icon.png",
          title: "Are you sure?",
          text: "Do you want to edit the information?",
          showCancelButton: true,
          reverseButtons: true,
          buttonsStyling: false,
          confirmButtonText: "Yes",
          customClass: {
            confirmButton: "btn-update-sn btn-sm mb-4 w-165",
            cancelButton: "btn-cancel-sn btn-sm mr-3 mb-4 w-165",
          },
        })
        .then((result) => {
          if (result.value) {
            if (type == 1) {
              this.potential = !this.potential;
              if (!this.potential) {
                this.modalReasonNoPotential = true;
              } else {
                this.updateChanges(type, this.contactInfo.potential);
                this.reply.potencial = this.potential ? "YES" : "NO";
              }
            } else {
              this.dialogue = !this.dialogue;
              this.contactInfo.dialogue = this.dialogue ? 1 : 2;
              this.updateChanges(type, this.contactInfo.dialogue);
              this.reply.dialogue = this.dialogue ? "YES" : "NO";
            }
          }
        });
    },
    confirmPotential() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        } else {
          this.contactInfo.potential = this.potential ? 1 : 2;
          this.updateChanges(1, this.contactInfo.potential);
          this.reply.potencial = this.potential ? "YES" : "NO";
          this.modalReasonNoPotential = false;
        }
      });
    },
    async updateChanges(type, value) {
      let params = {
        type: type,
        value: value,
        id_reply: this.contactInfo.reply_id,
        reason_id: this.reasonId,
      };
      let response = await axios.post(
        "/api/update-potential-dialogue-by-id-reply",
        params
      );
    },
  },
};
</script>

<style scoped>
.w-pre {
  width: 40% !important;
}
.capitalize-sn {
  text-transform: capitalize;
}
</style>
