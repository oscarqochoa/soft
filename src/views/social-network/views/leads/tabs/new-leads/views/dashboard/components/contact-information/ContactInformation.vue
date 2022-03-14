<template>
  <ValidationObserver ref="form">
    <b-row>
      <b-col md="12">
        <b-form-group
          label="Catcher"
          label-class="font-weight-bolder"
          label-cols="5"
          content-cols="7"
        >
          <b-form-input
            v-model.trim="contactInfo.catcher"
            type="text"
            :class="['bg-white']"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Program"
          label-class="font-weight-bolder"
          label-cols="5"
          content-cols="7"
        >
          <b-form-input
            v-model.trim="contactInfo.program"
            type="text"
            :class="['bg-white']"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Date"
          label-class="font-weight-bolder"
          label-cols="5"
          content-cols="7"
        >
          <b-form-input
            v-model="contactInfo.date"
            type="email"
            :class="['bg-white']"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          v-if="parent_source == 2"
          label="Contact Method"
          label-class="font-weight-bolder"
          label-cols="5"
          content-cols="7"
        >
          <b-form-input
            v-model.trim="contactInfo.contact_method"
            type="text"
            :class="['bg-white capitalize-sn']"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Potential"
          label-class="font-weight-bolder"
          label-cols="5"
          content-cols="7"
        >
          <b-form-checkbox
            switch
            inline
            v-model="potencial"
            :value="potential"
            @click.native="editReply(1)"
          >
            {{ reply.potencial ? "YES" : "NO" }}
          </b-form-checkbox>
        </b-form-group>
        <b-form-group
          label="Start Dialogue"
          label-class="font-weight-bolder"
          label-cols="5"
          content-cols="7"
        >
          <b-form-checkbox
            switch
            inline
            v-model="dialogue"
            :value="dialogue"
            @click.native="editReply(2)"
          >
            {{ reply.dialogue ? "YES" : "NO" }}
          </b-form-checkbox>
        </b-form-group>
      </b-col>

      <b-modal
        id="modalReasonNoPotential"
        v-model="modalReasonNoPotential"
        size="md"
        title="Choose a reason"
        centered
        @ok.prevent="confirmPotential"
        no-close-on-backdrop
        @hidden="close"
      >
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
              variant="outline-danger"
              @click="cancel(), (potential = !potential)"
            >
              Cancel
            </b-button>
            <b-button
              variant="primary"
              @click="ok()"
              class="rounded btn-ui-green"
            >
              Confirm
            </b-button>
          </div>
        </template>
      </b-modal>
    </b-row>
  </ValidationObserver>
</template>

<script>
import ModalReasonNoPotential from "./ModalReasonNotPotential.vue";

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
  components: {
    ModalReasonNoPotential,
  },
  data() {
    return {
      dialogue: true,
      potential: true,
      modalReasonNoPotential: false,
      reasonId: null,
    };
  },
  methods: {
    async editReply(type) {
      const confirm = await this.showGenericConfirmSwal({
        text: "Do you want to edit the information?",
      });

      if (confirm.value) {
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
      //let response = await axios.post(
      //  "/api/update-potential-dialogue-by-id-reply",
      //  params
      //);
    },
  },
  mounted() {
    this.dialogue = this.contactInfo.dialogue == "NO" ? false : true;
    this.potential = this.contactInfo.potential == "NO" ? false : true;
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
