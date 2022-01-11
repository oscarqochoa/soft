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
      <HeaderModalNotes
        program="Specialist"
        :info="noteInfo"
        @close="hideModal(false)"
      />
    </template>
    <ValidationObserver ref="form">
      <b-row>
        <b-col>
          <b-form-group
            label="Type of Services"
            label-class="font-weight-bolder"
          >
            <validation-provider
              v-slot="{ errors }"
              name="typeOfServices"
              rules="required"
            >
              <b-form-radio-group
                v-model="note.typeOfServices.value"
                :options="note.typeOfServices.options"
                :class="{'border-danger rounded': errors[0]}"
                :disabled="disabled"
                @change="changeTypeService"
              />
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col
          v-if="dateTypeAgreement"
          cols="5"
        >
          <validation-provider
            v-slot="{ errors }"
            name="typeOfAgreement"
            rules="required"
          >
            <b-form-group
              label="Type of Agreement"
              label-class="font-weight-bolder"
            >
              <b-form-radio-group
                v-model="note.typeOfAgreement.value"
                :disabled="disabled"
                :options="note.typeOfAgreement.options"
                :class="{'border-danger rounded': errors[0]}"
              />
            </b-form-group>
          </validation-provider>
        </b-col>
      </b-row>
      <b-row
        v-if="note.typeOfServices.value === '1'"
        class="mt-1"
      >
        <b-col cols="5">
          <b-form-group
            label-class="font-weight-bolder"
            label="Previous ID Numbers"
          >
            <validation-provider
              v-slot="{ errors }"
              name="previousIdNumbers"
              rules="required"
            >
              <b-form-radio-group
                v-model="note.previousIdNumbers.value"
                :disabled="disabled"
                :options="note.previousIdNumbers.options"
                :class="{'border-danger rounded': errors[0]}"
              />
            </validation-provider>
          </b-form-group>
          <b-form-group
            label="Time"
            label-class="font-weight-bolder"
            label-cols="2"
          >
            <validation-provider
              v-slot="{ errors }"
              name="previousIdNumbersTime"
              rules="required"
            >
              <b-form-input
                v-model="note.previousIdNumbers.time"
                size="sm"
                class="w-75"
                :class="{'border-danger rounded': errors[0]}"
              />
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col
          cols="2"
          class="font-weight-bolder d-flex align-items-center"
        >
          TO
        </b-col>
        <b-col cols="5">
          <b-form-group
            label-class="font-weight-bolder"
            label="Current ID Numbers"
          >
            <validation-provider
              v-slot="{ errors }"
              name="currentIdNumbers"
              rules="required"
            >
              <b-form-radio-group
                v-model="note.currentIdNumbers.value"
                :disabled="disabled"
                :options="note.currentIdNumbers.options"
                :class="{'border-danger rounded': errors[0]}"
              />
            </validation-provider>
          </b-form-group>
          <b-form-group
            label="Time"
            label-class="font-weight-bolder"
            label-cols="2"
          >
            <validation-provider
              v-slot="{ errors }"
              name="currentIdNumbersTime"
              rules="required"
            >
              <b-form-input
                v-model="note.currentIdNumbers.time"
                size="sm"
                class="w-75"
                :class="{'border-danger rounded': errors[0]}"
              />
            </validation-provider>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row
        v-else-if="note.typeOfServices.value === '2'"
        class="mt-1"
      >
        <b-col cols="5">
          <b-form-group
            label="ID Type Number"
            label-class="font-weight-bolder"
          >
            <validation-provider
              v-slot="{ errors }"
              name="idTypeNumber"
              rules="required"
            >
              <b-form-radio-group
                v-model="note.idTypeNumber.value"
                :options="note.idTypeNumber.options"
                :class="{'border-danger': errors[0]}"
              />
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col>
          <validation-provider
            v-slot="{ errors }"
            name="studentLoanType"
            rules="required"
          >
            <b-form-group
              label="Student Loan Type"
              label-class="font-weight-bolder"
            >
              <b-form-radio-group
                v-model="note.studentLoanType.value"
                :options="note.studentLoanType.options"
                :class="{'border-danger': errors[0]}"
              />
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col>
          <b-form-group
            label-class="font-weight-bolder"
            label="Amount Owed"
          >
            <validation-provider
              v-slot="{ errors }"
              name="amountOwed"
              rules="required"
            >
              <money
                v-model="note.amountOwed.value"
                size="sm"
                v-bind="{precision: 2, prefix: '$  '}"
                class="form-control form-control-sm"
                :class="{'border-danger': errors[0]}"
              />
            </validation-provider>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="5">
          <validation-provider
            v-slot="{ errors }"
            name="originCountry"
            rules="required"
          >
            <b-form-group
              label="Origin Country"
              label-class="font-weight-bolder"
            >
              <v-select
                v-model="note.country.value"
                :class="{'border-danger rounded': errors[0]}"
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
        <b-col>
          <validation-provider
            v-slot="{ errors }"
            name="inconvenience"
            rules="required"
          >
            <b-form-group
              label="Inconvenience"
              label-class="font-weight-bolder"
            >
              <quill-editor
                v-model="note.inconvenience.value"
                :disabled="disabled"
                :options="editorOption"
                :class="{'border-danger rounded' : errors[0]}"
              />
            </b-form-group>
          </validation-provider>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <validation-provider
            v-slot="{ errors }"
            name="information"
            rules="required"
          >
            <b-form-group
              label="Information"
              label-class="font-weight-bolder"
            >
              <quill-editor
                v-model="note.information.value"
                :disabled="disabled"
                :options="editorOption"
                :class="{'border-danger rounded' : errors[0]}"
              />
            </b-form-group>
          </validation-provider>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <validation-provider
            v-slot="{ errors }"
            name="recommendations"
            rules="required"
          >
            <b-form-group
              label="Recommendations"
              label-class="font-weight-bolder"
            >
              <quill-editor
                v-model="note.recommendations.value"
                :disabled="disabled"
                :options="editorOption"
                :class="{'border-danger rounded' : errors[0]}"
              />
            </b-form-group>
          </validation-provider>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <validation-provider
            v-slot="{ errors }"
            name="pending"
            rules="required"
          >
            <b-form-group
              label="Pending"
              label-class="font-weight-bolder"
            >
              <quill-editor
                v-model="note.pending.value"
                :disabled="disabled"
                :options="editorOption"
                :class="{'border-danger rounded' : errors[0]}"
              />
            </b-form-group>
          </validation-provider>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <validation-provider
            v-slot="{ errors }"
            name="goal"
            rules="required"
          >
            <b-form-group
              label="Goal"
              label-class="font-weight-bolder"
            >
              <quill-editor
                v-model="note.goal.value"
                :disabled="disabled"
                :options="editorOption"
                :class="{'border-danger rounded' : errors[0]}"
              />
            </b-form-group>
          </validation-provider>
        </b-col>
      </b-row>
    </ValidationObserver>

    <template #modal-footer>
      <template v-if="newNote">
        <button-save
          v-if="showButtonSave"
          @click="saveNotesIncomplete"
        />
        <button-save-and-complete
          v-if="showButtonSave"
          @click="saveNotesCompleted"
        />
        <button-update
          v-if="showNewButtonUpdate || showNewButtonUpdateAdmin"
          @click="updateNotesCompleted"
        />
      </template>
      <template v-else>
        <button-save
          v-if="showButtonSave"
          @click="saveNotesIncomplete"
        />
        <button-update
          v-if="showButtonUpdate"
          @click="updateNotesCompleted"
        />
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
import ButtonSave from '@/views/commons/utilities/ButtonSave'
import ButtonSaveAndComplete from '@/views/commons/utilities/ButtonSaveAndComplete'
import ButtonUpdate from '@/views/commons/utilities/ButtonUpdate'

export default {
  name: 'ModalNotesSpecialist',
  components: {
    ButtonUpdate,
    ButtonSaveAndComplete,
    ButtonSave,
    HeaderModalNotes,
    quillEditor,
    vSelect,
  },
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
      noteNull: false,
      modalUp: false,
      note: {
        inconvenience: {
          value: '',
          disabled: false,
        },
        information: {
          value: '',
          disabled: false,
        },
        recommendations: {
          value: '',
          disabled: false,
        },
        pending: {
          value: '',
          disabled: false,
        },
        goal: {
          value: '',
          disabled: false,
        },
        country: {
          value: null,
          disabled: false,
          options: [],
        },
        amountOwed: {
          value: '',
        },
        studentLoanType: {
          value: '',
          options: [
            {
              text: 'Private',
              value: '1',
            },
            {
              text: 'Federal',
              value: '2',
            },
          ],
        },
        idTypeNumber: {
          value: '',
          options: [
            {
              text: 'INVENTED SSN',
              value: '1',
            },
            {
              text: 'ITIN',
              value: '2',
            },
            {
              text: 'SSN',
              value: '3',
            },
          ],
        },
        currentIdNumbers: {
          value: '',
          options: [
            {
              text: 'INVENTED SSN',
              value: '1',
            },
            {
              text: 'ITIN',
              value: '2',
            },
            {
              text: 'SSN',
              value: '3',
            },
          ],
          time: '',
        },
        previousIdNumbers: {
          value: '',
          options: [
            {
              text: 'INVENTED SSN',
              value: '1',
            },
            {
              text: 'ITIN',
              value: '2',
            },
            {
              text: 'SSN',
              value: '3',
            },
          ],
          time: '',
        },
        typeOfServices: {
          value: '',
          options: [
            {
              text: 'TRANSFER INFORMATION',
              value: '1',
            },
            {
              text: 'STUDENT LOAN',
              value: '2',
            },
          ],
        },
        typeOfAgreement: {
          value: '',
          options: [
            {
              text: 'Email',
              value: 'Email',
            },
            {
              text: 'Ups',
              value: 'Ups',
            },
            {
              text: 'Voice',
              value: 'Voice ',
            },
          ],
        },
      },
      showSave: false,
      showUpdate: false,
      editorOption: {
        modules: { toolbar: false },
      },

    }
  },
  computed: {
    dateTypeAgreement() {
      return this.noteInfo.created > '2021-08-05'
    },
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
    showButtonSave() {
      return this.showSave && !this.noteInfo.notSeller
    },
    showButtonUpdate() {
      return this.showUpdate && !this.noteInfo.notSeller
    },
    showNewButtonUpdate() {
      return (
        this.showUpdate && this.noteInfo.module != 4 && !this.noteInfo.notSeller
      )
    },
    showNewButtonUpdateAdmin() {
      return this.showUpdateAdmin && this.noteInfo.module == 4
    },
  },
  async created() {
    await this.getFirstNote()
    await this.getCountries()
    this.note.country.value = this.noteInfo.originCountry
  },
  methods: {
    changeTypeService(newValue) {
      if (newValue === '2') {
        this.note.idTypeNumber.value = ''
        this.note.studentLoanType.value = ''
        this.note.amountOwed.value = ''
        this.note.previousIdNumbers.value = '0'
        this.note.previousIdNumbers.time = '0'
        this.note.currentIdNumbers.value = '0'
        this.note.currentIdNumbers.time = '0'
      }
      if (newValue === '1') {
        this.note.idTypeNumber.value = '0'
        this.note.studentLoanType.value = '0'
        this.note.amountOwed.value = '0'
        this.note.previousIdNumbers.value = ''
        this.note.previousIdNumbers.time = ''
        this.note.currentIdNumbers.value = ''
        this.note.currentIdNumbers.time = ''
      }
    },
    async saveNotesIncomplete() {
      if (this.emptyNote) {
        await this.saveUpdate('insert')
      } else {
        await this.saveUpdate('update')
      }
    },
    async saveNotesCompleted() {
      const validate = await this.$refs.form.validate()
      if (validate) {
        if (this.emptyNote) {
          await this.saveUpdate('insert')
        } else {
          await this.saveUpdate('update')
        }
      }
    },
    async updateNotesCompleted() {
      const validate = await this.$refs.form.validate()
      if (validate) {
        await this.saveUpdate('update')
      }
    },
    paramsNote() {
      const params = {
        sale_id: this.noteInfo.saleId,
        note: this.answersNote(),
        originCountry: this.note.country.value,
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
          await NotesServices[service](this.paramsNote())
          this.hideModal(true)
        } catch (error) {
          console.log(error)
          this.removePreloader()
          this.showErrorSwal(error)
        }
      }
    },

    answersNote() {
      return [
        { number: 1039, value: this.note.inconvenience.value },
        { number: 1040, value: this.note.information.value },
        { number: 1041, value: this.note.recommendations.value },
        { number: 1042, value: this.note.pending.value },
        { number: 1043, value: this.note.goal.value },
        { number: 1063, value: this.note.typeOfAgreement.value },
        { number: 1031, value: this.note.typeOfServices.value },
        { number: 1032, value: this.note.previousIdNumbers.value },
        { number: 1033, value: this.note.previousIdNumbers.time },
        { number: 1034, value: this.note.currentIdNumbers.value },
        { number: 1035, value: this.note.currentIdNumbers.time },
        { number: 1036, value: this.note.idTypeNumber.value },
        { number: 1037, value: this.note.studentLoanType.value },
        { number: 1038, value: this.note.amountOwed.value.toFixed(2) },
      ]
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
      if (note.length != 0 && this.noteInfo.statusSale != 4 && !this.noteNull && this.newNote) {
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
      if (this.noteInfo.editModal || this.noteInfo.statusSales == 4 || this.noteInfo.statusSales == 2) {
        this.showUpdate = false
        this.showSave = false
        this.showUpdateAdmin = false
      }
    },
    getDetailsAnswers(note) {
      note.forEach(answer => {
        if (answer.answer != 'null') {
          if (answer.question_id === 1039) this.note.inconvenience.value = answer.answer
          if (answer.question_id === 1040) this.note.information.value = answer.answer
          if (answer.question_id === 1041) this.note.recommendations.value = answer.answer
          if (answer.question_id === 1042) this.note.pending.value = answer.answer
          if (answer.question_id === 1043) this.note.goal.value = answer.answer
          if (answer.question_id === 1063) this.note.typeOfAgreement.value = answer.answer
          if (answer.question_id === 1031) this.note.typeOfServices.value = answer.answer
          if (answer.question_id === 1032) this.note.previousIdNumbers.value = answer.answer
          if (answer.question_id === 1033) this.note.previousIdNumbers.time = answer.answer
          if (answer.question_id === 1034) this.note.currentIdNumbers.value = answer.answer
          if (answer.question_id === 1035) this.note.currentIdNumbers.time = answer.answer
          if (answer.question_id === 1036) this.note.idTypeNumber.value = answer.answer
          if (answer.question_id === 1037) this.note.studentLoanType.value = answer.answer
          if (answer.question_id === 1038) this.note.amountOwed.value = answer.answer
        } else this.noteNull = true
      })
    },
    async getFirstNote() {
      try {
        const params = { sale_id: this.noteInfo.saleId }
        const response = await NotesServices.getFirstNote(params)
        await this.getDetailsAnswers(response)
        await this.initialValidationNote(response)
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
</style>
