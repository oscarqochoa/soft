<template>
  <b-modal
    v-model="modalUp"
    size="xmd"
    header-class="p-0"
    header-bg-variant="transparent"
    scrollable
    @hide="hideModal(false)"
  >
    <template #modal-header>
      <header-modal-notes program :info="noteInfo" @close="hideModal(false)" />
    </template>
    <div>
      <b-row>
        <b-col>
          <b-form-group label="Contact Schedule" label-class="font-weight-bolder">
            <b-form-input :disabled="valorEdit" v-model="contact_schedule" />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="Origin Country" label-class="font-weight-bolder">
            <v-select :options="countries" label="name" />
          </b-form-group>
        </b-col>
        <b-col></b-col>
      </b-row>
    </div>
  </b-modal>
</template>

<script>
import HeaderModalNotes from "@/views/commons/components/first-notes/HeaderModalNotes.vue";
import NotesServices from "@/views/commons/components/first-notes/services/notes.service";
import vSelect from "vue-select";
export default {
  name: "ModalNotesOld",
  props: {
    dato: {
      type: Boolean
    },
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
        notes_status_new: null
      })
    }
  },
  components: {
    HeaderModalNotes,
    vSelect
  },
  components: {
    HeaderModalNotes,
    vSelect,
  },
  data() {
    return {
      modalUp: true,
      countries: [],
      contact_schedule: null,
      valorEdit: false
    };
  },

  created() {
    // this.modalUp = true
    this.getCountries();
  },
  methods: {
    hideModal(status) {
      this.modalUp = false;
      this.$emit("hide", status);
    },
    closeModal() {
      this.$emit("close", false);
    },
    async getCountries() {
      try {
        const response = await NotesServices.notesSales({});
        this.countries = response;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
</style>
