<template>
  <div>
    <modal-notes-credit-old
      @hide="hideModal"
      v-if="createsMomentIsBefore"
      :noteInfo="noteInfo"
    />
    <modal-notes-credit-new @hide="hideModal" :noteInfo="noteInfo" v-else />
  </div>
</template>

<script>
import ModalNotesCreditOld from "@/views/commons/components/first-notes/credit-experts/ModalNotesCreditOld.vue"
import ModalNotesCreditNew from "@/views/commons/components/first-notes/credit-experts/ModalNotesCreditNew.vue";
export default {
  name: "ModalNotasCredit",
  components: {
    ModalNotesCreditOld,
    ModalNotesCreditNew,
  },
  props: {
    noteInfo: {
      type: Object,
      required: true,
      default: () => ({
        programSelected: "",
        roleId: null,
        notesProgram: null,
        nameProgram: null,
        nameClient: null,
        salesMades: null,
        module: null,
        type: null,
        editModal: false,
        statusSale: null,
        sourcesName: null,
        pack: null,
        created: null,
        originCountry: null,
        idLead: null,
        notSeller: null,
        capturedName: null,
        sellerName: null,
        trackings: null,
        notes_status: null,
        notes_status_new: null,
      }),
    },
  },
  data() {
    return {
      creates: "",
    };
  },
  computed: {
    createsMoment() {
      return this.$moment(this.creates);
    },
    deployMoment() {
      return this.$moment("2022-03-17");
    },
    createsMomentIsBefore() {
      return this.createsMoment.isBefore(this.deployMoment);
    },
  },
  async created() {
    try {
      const response = await amgApi.post("/sale/get-creates-sale", {
        sale_id: this.noteInfo.saleId,
      });
      if (this.isResponseSuccess(response)) {
        this.creates = response.data.creates;
      }
    } catch (error) {
      this.showErrorSwal(error);
    }
  },
  methods: {
    hideModal(status) {
      this.modalUp = false;
      this.$emit("hide", status);
    },
  },
};
</script>

<style scoped>
.quill-editor {
  height: 100px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
