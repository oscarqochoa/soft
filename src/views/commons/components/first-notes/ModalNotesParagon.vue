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
      <header-modal-notes
        program="Paragon"
        :info="noteInfo"
        @close="hideModal(false)"
      />
    </template>
    <validation-observer ref="form">
      <b-row>
        <b-col>
          <b-form-group
            label="Type of Business"
            label-class="font-weight-bolder"
          >
            <v-select
              v-model="note.typeOfBuisiness.value"
              :disabled="disabled"
              :options="note.typeOfBuisiness.options"
              label="name"
              multiple
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <validation-provider
            v-slot="{ errors }"
            name="contactTime"
            rules="required"
          >
            <b-form-group
              label="Contact time"
              label-class="font-weight-bolder"
            >
              <b-form-input
                v-model="note.contactTime.value"
                :disabled="disabled"
              />
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col>
          <validation-provider>
            <b-form-group
              label="Origin Country"
              label-class="font-weight-bolder"
            >
              <v-select
                v-model="note.country.value"
                :disabled="disabled"
                label="name"
                :reduce="value => value.id"
                :options="note.country.options"
              />
            </b-form-group>
          </validation-provider>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          cols="4"
        >
          <validation-provider
            v-slot="{ errors }"
            name="logo"
            rules="required"
          >
            <b-form-group
              label="Logo"
              label-class="font-weight-bolder"
            >
              <b-form-radio-group
                v-model="note.logo.value"
                :disabled="disabled"
                :options="note.logo.options"
                name="identification"
                :class="{'border-danger rounded': errors[0]}"
              />
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col
          :cols="note.facebook.value === 'Yes'? 3 : 4"
        >
          <validation-provider
            v-slot="{ errors }"
            name="facebook"
            rules="required"
          >
            <b-form-group
              label="Facebook"
              label-class="font-weight-bolder"
            >
              <b-form-radio-group
                v-model="note.facebook.value"
                :options="note.facebook.options"
                name="facebook"
                :class="{'border-danger rounded': errors[0]}"
                :disabled="disabled"
              />
            </b-form-group>
          </validation-provider>
        </b-col>
        <transition name="fade">
          <b-col
            v-if="note.facebook.value === 'Yes'"
            class="d-flex"
          >
            <b-form-group
              label-class="font-weight-bolder"
              label="Facebook Link"
              class="mr-1"
            >
              <b-form-input
                v-model="note.facebook.link"
                :disabled="disabled"
              />
            </b-form-group>
            <b-form-group
              label-class="font-weight-bolder"
              label="Facebook Likes"
            >
              <b-form-input
                v-model="note.facebook.likes"
                :disabled="disabled"
              />
            </b-form-group>

          </b-col>
        </transition>
        <b-col
          cols="4"
        >
          <validation-provider
            v-slot="{ errors }"
            name="facebook"
            rules="required"
          >
            <b-form-group
              label="Experience with Social Media Services"
              label-class="font-weight-bolder"
            >
              <b-form-radio-group
                v-model="note.experience.value"
                :options="note.experience.options"
                name="experience"
                :class="{'border-danger rounded': errors[0]}"
                :disabled="disabled"
              />
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col
          cols="4"
        >
          <validation-provider
            v-slot="{ errors }"
            name="website"
            rules="required"
          >
            <b-form-group
              label="Website"
              label-class="font-weight-bolder"
            >
              <b-form-radio-group
                v-model="note.website.value"
                :options="note.website.options"
                name="website"
                :class="{'border-danger rounded': errors[0]}"
                :disabled="disabled"
              />
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col
          cols="4"
        >
          <validation-provider
            v-slot="{ errors }"
            name="instagram"
            rules="required"
          >
            <b-form-group
              label="Instagram"
              label-class="font-weight-bolder"
            >
              <b-form-radio-group
                v-model="note.instagram.value"
                :options="note.instagram.options"
                name="instagram"
                :class="{'border-danger rounded': errors[0]}"
                :disabled="disabled"
              />
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col
          cols="4"
        >
          <validation-provider
            v-slot="{ errors }"
            name="newBusiness"
            rules="required"
          >
            <b-form-group
              label="It a New Business?"
              label-class="font-weight-bolder"
            >
              <b-form-radio-group
                v-model="note.newBusiness.value"
                :options="note.newBusiness.options"
                name="newBusiness"
                :class="{'border-danger rounded': errors[0]}"
                :disabled="disabled"
              />
            </b-form-group>
          </validation-provider>
        </b-col>
      </b-row>
      <transition name="fade">
        <b-row v-if="note.experience.value === 'Yes'">
          <b-col>
            <b-form-group
              label="Details"
              label-class="font-weight-bolder"
            >
              <quill-editor
                v-model="note.details.value"
                :disabled="disabled"
                :options="editorOption"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </transition>
      <b-row>
        <b-col>
          <b-form-group
            label="Information"
            label-class="font-weight-bolder"
          >
            <quill-editor
              v-model="note.information.value"
              :disabled="disabled"
              :options="editorOption"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            label="Indications"
            label-class="font-weight-bolder"
          >
            <quill-editor
              v-model="note.indications.value"
              :disabled="disabled"
              :options="editorOption"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            label="Suggestions"
            label-class="font-weight-bolder"
          >
            <quill-editor
              v-model="note.suggestion.value"
              :disabled="disabled"
              :options="editorOption"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            label="Pending"
            label-class="font-weight-bolder"
          >
            <quill-editor
              v-model="note.pending.value"
              :disabled="disabled"
              :options="editorOption"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </validation-observer>
    <template #modal-footer>
      <template v-if="newNote">
        <b-button
          v-if="showButtonSave"
          variant="info"
          class="font-medium-1"
          @click="saveNotesIncomplete"
        >Save</b-button>

        <b-button
          v-if="showButtonSave"
          variant="primary"
          class="font-medium-1"
          @click="saveNotesCompleted"
        >Save & Complete</b-button>

        <b-button
          v-if="showNewButtonUpdate || showNewButtonUpdateAdmin"
          variant="primary"
          class="font-medium-1"
          @click="updateNotesCompleted"
        >Update</b-button>
      </template>
      <template v-else>
        <b-button
          v-if="showButtonSave"
          variant="info"
          class="font-medium-1"
          @click="saveNotesIncomplete"
        >Save</b-button>
        <b-button
          v-if="showButtonUpdate"
          variant="primary"
          class="font-medium-1"
          @click="updateNotesCompleted"
        >Update</b-button>
      </template>
    </template>
  </b-modal>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import vSelect from 'vue-select'
import NotesServices from '@/views/commons/components/first-notes/services/notes.service'
import HeaderModalNotes from '@/views/commons/components/first-notes/HeaderModalNotes.vue'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  name: 'ModalNotesParagon',
  components: { HeaderModalNotes, quillEditor, vSelect },
  props: {
    noteInfo: {
      type: Object,
      required: true,
      default: () => ({
        programSelected: '',
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
      modalUp: false,
      note: {
        logo: {
          value: null,
          options: [
            {
              text: 'Yes',
              value: 'Yes',
            },
            {
              text: 'No',
              value: 'No',
            },
          ],
          disabled: false,
        },
        facebook: {
          value: null,
          options: [
            {
              text: 'Yes',
              value: 'Yes',
            },
            {
              text: 'No',
              value: 'No',
            },
          ],
          disabled: false,
          link: '',
          likes: '',
        },
        experience: {
          value: null,
          options: [
            {
              text: 'Yes',
              value: 'Yes',
            },
            {
              text: 'No',
              value: 'No',
            },
          ],
          disabled: false,
        },
        newBusiness: {
          value: null,
          options: [
            {
              text: 'Yes',
              value: 'Yes',
            },
            {
              text: 'No',
              value: 'No',
            },
          ],
          disabled: false,
        },
        website: {
          value: null,
          options: [
            {
              text: 'Yes',
              value: 'Yes',
            },
            {
              text: 'No',
              value: 'No',
            },
          ],
          disabled: false,
        },
        instagram: {
          value: null,
          options: [
            {
              text: 'Yes',
              value: 'Yes',
            },
            {
              text: 'No',
              value: 'No',
            },
          ],
          disabled: false,
        },
        typeOfBuisiness: {
          value: [],
          disabled: false,
          options: [],
        },
        contactTime: {
          value: '',
          disabled: false,
        },
        country: {
          value: null,
          disabled: false,
          options: [],
        },
        information: {
          value: '',
          disabled: false,
        },
        indications: {
          value: '',
          disabled: false,
        },
        suggestion: {
          value: '',
          disabled: false,
        },
        pending: {
          value: '',
          disabled: false,
        },
        details: {
          value: '',
          disabled: false,
        },
      },
      editorOption: {
        modules: { toolbar: false },
      },

    }
  },
  computed: {
    disabled() {
      return this.noteInfo.statusSale === 4 || this.noteInfo.notSeller
    },
    newNote() {
      return this.noteInfo.created > '2021-05-16 00:00:00'
    },
    emptyNote() {
      if (this.newNote) {
        return this.noteInfo.notes_status_new == null
      }
      return this.noteInfo.notes_status == 0
    },
    disabledNote() {
      return (
        this.noteInfo.statusSale == 4
          || this.noteInfo.statusSale == 2
          || this.noteInfo.notSeller
      )
    },
    showButtonSave() {
      return this.showSave && !this.noteInfo.notSeller
    },
    showNewButtonUpdate() {
      return (
        this.showUpdate && this.noteInfo.module != 4 && !this.noteInfo.notSeller
      )
    },
    showNewButtonUpdateAdmin() {
      return this.showUpdateAdmin && this.noteInfo.module == 4
    },
    showButtonUpdate() {
      return this.showUpdate && !this.noteInfo.notSeller
    },
    dateTypeAgreement() {
      return this.noteInfo.created > '2021-08-05'
    },
  },
  async created() {
    await this.getFirstNote()
    await this.listTypeBusiness()
    await this.getCountries()
    this.note.country.value = this.noteInfo.originCountry
  },
  methods: {
    async saveNotesIncomplete() {
      if (this.emptyNote) {
        this.saveUpdate('insert')
      } else {
        this.saveUpdate('update')
      }
    },
    async saveNotesCompleted() {
      const validate = await this.$refs.form.validate()
      if (validate) {
        if (this.emptyNote) {
          this.saveUpdate('insert')
        } else {
          this.saveUpdate('update')
        }
      }
    },
    async updateNotesCompleted() {
      const validate = await this.$refs.form.validate()
      if (validate) {
        this.saveUpdate('update')
      }
    },
    paramsNote() {
      const params = {
        sale_id: this.noteInfo.saleId,
        note: this.answersNote(),
        file_audio: this.note.fileAudio,
        file_name: this.note.fileName,
        lead_id: this.noteInfo.idLead,
        originCountry: this.note.originCountry,
        idLead: this.noteInfo.idLead,
      }
      return params
    },
    async saveUpdate(type) {
      const swal = await this.showConfirmSwal()
      if (swal.isConfirmed) {
        this.addPreloader()
        try {
          const service = type == 'insert' ? 'insertFirstNote' : 'updateFirstNote'
          const response = await NotesServices[service](this.paramsNote())
          this.hideModal(true)
        } catch (error) {
          console.log(error)
          this.removePreloader()
          this.showErrorSwal(error)
        }
      }
    },

    answersNote() {
      const note = []
      note.push(
        { number: 1044, value: this.note.identification },
        { number: 1045, value: this.note.work },
        { number: 1046, value: this.note.credit },
        { number: 1047, value: this.note.hours },
        { number: 1048, value: this.note.typeDays },
        { number: 1049, value: this.note.typeGoal },
        { number: 1050, value: this.note.another },
        { number: 1051, value: this.note.pending },
        { number: 1052, value: this.note.inconvenience },
        { number: 1053, value: this.note.information },
        { number: 1054, value: this.note.recommendations },
        {
          number: 1063,
          value: this.dateTypeAgreement ? this.note.typeAgreement : 1,
        },
        {
          number: 1055,
          value: (this.note.file = this.note.file_name != ''
            ? `SM/${this.noteInfo.idLead}/${this.note.fileName}`
            : 0),
        },
      )
      return note
    },
    hideModal(status) {
      this.modalUp = false
      this.$emit('hide', status)
    },
    async getCountries() {
      try {
        const response = await amgApi.post('/view-countrys', {})
        this.note.country.options = response.data
      } catch (error) {
        this.showErrorSwal(error)
      }
    },
    initialValidationNote(note) {
      if (note.length != 0 && this.noteInfo.statusSale == 2) {
        this.showSave = false
        this.showUpdate = false
        this.showUpdateAdmin = true
        return
      }
      if (
        note.length != 0
          && this.noteInfo.statusSale != 4
          && !this.noteNull
          && this.newNote
      ) {
        this.showUpdate = true
        this.showUpdateAdmin = false
        return
      }

      if (this.newNote && (note.length == 0 || this.noteNull)) {
        this.showSave = true
        return
      }

      if (note.length != 0 && this.noteInfo.statusSale != 4) {
        this.showUpdate = true
        this.showUpdateAdmin = false
        return
      }

      if (note.length == 0) {
        this.showSave = true
        return
      }

      if (
        this.noteInfo.editModal
          || this.noteInfo.statusSales == 4
          || this.noteInfo.statusSales == 2
      ) {
        this.showUpdate = false
        this.showSave = false
        this.showUpdateAdmin = false
      }
    },
    getDetailsAnswers(note) {
      note.forEach(answer => {
        console.log(answer)
        if (answer.answer != 'null') {
          if (answer.question_id === 1075) this.note.facebook.value = answer.answer
          if (answer.question_id === 1072) this.note.website.value = answer.answer
          if (answer.question_id === 1078) this.note.instagram.value = answer.answer
          if (answer.question_id === 1083) this.note.logo.value = answer.answer
          if (answer.question_id === 1081) this.note.experience.value = answer.answer
          if (answer.question_id === 1066) this.note.newBusiness.value = answer.answer
          if (answer.question_id === 1064) this.note.typeOfBuisiness.value = JSON.parse(answer.answer)
          if (answer.question_id === 1071) this.note.contactTime.value = answer.answer
          if (answer.question_id === 1067) this.note.information.value = answer.answer
          if (answer.question_id === 1068) this.note.indications.value = answer.answer
          if (answer.question_id === 1069) this.note.suggestion.value = answer.answer
          if (answer.question_id === 1070) this.note.pending.value = answer.answer
          if (answer.question_id === 1082) this.note.details.value = answer.answer

          if (answer.question_id === 1076) this.note.facebook.link = answer.answer
          if (answer.question_id === 1077) this.note.facebook.likes = answer.answer
        }
      })
    },
    async listTypeBusiness() {
      try {
        const response = await amgApi.get('/listtypebusiness')
        this.note.typeOfBuisiness.options = response.data
      } catch (error) {
        this.showErrorSwal(error)
      }
    },
    async getFirstNote() {
      try {
        const params = { sale_id: this.noteInfo.saleId }
        const response = await NotesServices.getFirstNote(params)
        await this.getDetailsAnswers(response)
        await this.initialValidationNote(response)
        console.log(response)
        this.modalUp = true
        this.removePreloader()
      } catch (error) {
        this.modalUp = false
        this.showErrorSwal(error)
        this.removePreloader()
      }
    },
  },
}
</script>

<style scoped>
.quill-editor{
  height: 100px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}
</style>
