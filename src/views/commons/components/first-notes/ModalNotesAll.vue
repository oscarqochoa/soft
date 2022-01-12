<template>
  <div>
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
          :program="noteInfo.nameProgram"
          :info="noteInfo"
          @close="hideModal(false)"
        />
      </template>
      <b-container>
        <b-row>
          <b-col
            v-for="(question, index) in notesSales"
            :key="index"
            :md="question.column"
          >
            <pre> {{ question }}</pre>
            <b-form-group
              v-if="findFather(question.father)"
              :label="question.question"
            >
              <b-form-input
                v-if="question.type == 2"
                :ref="'required'+question.question_id"
                v-model="question.answer"
                :name="'answer'+question.question_id"
                @keyup="deleteRequired(question)"
              />
              <quill-editor
                v-else-if="question.type == 0"
                :id="'required'+question.question_id"
                v-model="question.answer"
                :name="'answer'+question.question_id"
                :disabled="valorEdit"
                :options="{modules: { toolbar: false },}"
                @keyup="deleteRequired(question)"
              />
              <b-form-radio-group
                v-else
                v-model="question.answer"
                :options="JSON.parse(question.options)"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </b-container>
      <!-- <template #modal-footer>
        <template v-if="newNote">
          <button-save v-if="showButtonSave" @click="saveNotesIncomplete" />
          <button-save-and-complete v-if="showButtonSave" @click="saveNotesCompleted" />
          <button-update
            v-if="showNewButtonUpdate || showNewButtonUpdateAdmin"
            @click="updateNotesCompleted"
          />
        </template>
        <template v-else>
          <button-save v-if="showButtonSave" @click="saveNotesIncomplete" />
          <button-update v-if="showButtonUpdate" @click="updateNotesCompleted" />
        </template>
      </template>-->
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { quillEditor } from 'vue-quill-editor'
import vSelect from 'vue-select'
import NotesServices from '@/views/commons/components/first-notes/services/notes.service'
import HeaderModalNotes from './HeaderModalNotes.vue'
import GlobalService from '@/views/services/global.service'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import ButtonSave from '@/views/commons/utilities/ButtonSave'
import ButtonSaveAndComplete from '@/views/commons/utilities/ButtonSaveAndComplete'
import ButtonUpdate from '@/views/commons/utilities/ButtonUpdate'

export default {
  name: 'ModalNotesAll',
  components: {
    ButtonUpdate,
    ButtonSaveAndComplete,
    ButtonSave,
    vSelect,
    HeaderModalNotes,
    quillEditor,
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
      program: this.noteInfo.nameProgram,
      client_name: this.noteInfo.nameClient,
      /* notas: this.noteInfo.notesProgram.filter(val => val.question_id != 1062), */
      valorEdit: false,
      notesCompleted: true,
      /* contact_schedule:
        this.noteInfo.notesProgram[5].answer == "null" ||
        this.noteInfo.notesProgram[5].answer == undefined ||
        this.noteInfo.notesProgram[5].answer == null
          ? ""
          : this.noteInfo.notesProgram[5].answer, */
      contact_error: false,
      origin_country: null,
      countrys: [],
      modalUp: false,
      notesSales: [],
    }
  },
  computed: {
    showContactSchedule() {
      return this.notesSales[0]
    },
  },
  mounted() {
    /*  // Filter by date for new fields
    if (this.noteInfo.created < '2021-08-05') {
      this.notas = this.noteeInfo.notesProgram.filter(val => val.question != 'Type of Agreement' && val.question_id != 1062)
    }

    // type of Modal Edit or Create
    if (
      this.noteInfo.type == 1
        || this.noteInfo.editModal == false
        || this.noteInfo.statusSale == 2
        || this.noteInfo.statusSale == 4
        || this.noteInfo.notSeller
    ) {
      this.valorEdit = true
    } else {
      this.valorEdit = false
    }

    this.cleanNotes() */
  },
  created() {
    this.getNotesSales()
    this.getCountrys()
    this.getOriginCountry()
    console.log(this.noteInfo)
  },
  methods: {
    async getNotesSales() {
      try {
        const params = { id: this.noteInfo.saleId }
        const response = await NotesServices.notesSales(params)
        this.notesSales = response
        this.modalUp = true
        this.removePreloader()
      } catch (e) {
        this.showErrorSwal(e)
        this.removePreloader()
      }
    },
    async getCountrys() {
      try {
        const response = await GlobalService.getCountrys()
        this.countryOptions = response
      } catch (error) {
        this.showErrorSwal()
      }
    },
    getOriginCountry() {
      this.note.originCountry = this.noteInfo.originCountry
    },
    // Hide Modal
    hideModal(status) {
      this.modalUp = false
      this.$emit('hide', status)
    },
    closeModal() {
      this.$emit('close', false)
    },
    deleteRequired(nota) {
      if (nota.answer != null || nota.answer != null) {
        this.$refs[`required${nota.question_id}`].$el.classList.remove(
          'required-text',
        )
      }
    },
    findFather(id) {
      if (id != null) {
        const father = this.notesSales.find(element => element.question_id == id)
        return father.answer === 'YES'
      }
      return true
    },
    saveNotesCompleted() {
      const notes = []
      this.addPreloader()
      let fr = true
      let nr = 0
      for (let x = 0; x < this.notas.length; x++) {
        if (!this.findFather(this.notas[x].father)) {
          fr = false
          nr += 1
          this.notas[x].answer = null
        } else {
          fr = true
        }

        if (
          fr == true
          && (this.notas[x].answer == null || this.notas[x].answer == '')
        ) {
          this.$refs[`required${this.notas[x].question_id}`].$el.classList.add(
            'required-text',
          )
          setTimeout(() => {
            this.removePreloader()
          }, 50)
        }
      }
      this.notas.map(index => {
        if (index.answer != null && index.answer != '') {
          notes.push(index)
        }
      })
      // Validation for Debt Solution
      if (this.notas[0].type_view == 2 && this.created >= '2021-06-15') {
        if (this.contact_schedule == '' || this.contact_schedule == null) {
          this.contact_error = true
          var boton = document.getElementById('loading')
          boton.classList.remove('preloader')
          boton.classList.remove('modal-preloader')
        } else {
          this.contact_error = false
        }
      }

      if (
        this.notas.length == notes.length + nr
        && this.contact_error == false
      ) {
        swal
          .fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ab9220',
            cancelButtonColor: '#8f9194',
            confirmButtonText: 'Yes',
          })
          .then(result => {
            if (result.value) {
              axios
                .post('/api/insertSaleNotes', {
                  notes,
                  sale_id: this.notas[0].sale_id,
                  contact_schedule: this.contact_schedule,
                  originCountry: this.origin_country,
                  idLead: this.idLead,
                })
                .then(response => {
                  if (response.status == 200) {
                    setTimeout(() => {
                      const boton = document.getElementById('loading')
                      boton.classList.remove('preloader')
                    }, 50)
                    boton.classList.remove('modal-preloader')
                    swal
                      .fire({
                        type: 'success',
                        title: 'Notes Successfull',
                      })
                      .then(res => {
                        if (res) {
                          this.$emit('click', false)
                        }
                      })
                  }
                })
            }
          })
      }
    },

    saveNotesIncomplete() {
      const boton = document.getElementById('loading')

      swal
        .fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#ab9220',
          cancelButtonColor: '#8f9194',
          confirmButtonText: 'Yes',
        })
        .then(result => {
          if (result.value) {
            axios
              .post('/api/insertSaleNotes', {
                notes: this.notas,
                sale_id: this.notas[0].sale_id,
                contact_schedule: this.contact_schedule,
                originCountry: this.origin_country,
                idLead: this.idLead,
              })
              .then(response => {
                if (response.status == 200) {
                  setTimeout(() => {
                    const boton = document.getElementById('loading')
                    boton.classList.remove('preloader')
                  }, 50)
                  boton.classList.remove('modal-preloader')
                  swal
                    .fire({
                      type: 'success',
                      title: 'Notes Successfull',
                    })
                    .then(res => {
                      if (res) {
                        this.$emit('click', false)
                      }
                    })
                }
              })
          }
        })
    },
    cleanNotes() {
      for (let x = 0; x < this.notas.length; x++) {
        if (this.notas[x].answer == 'null' || this.notas[x].answer == null) {
          this.notas[x].answer = ''

          // Update o Save
          this.notesCompleted = false
          //
        }
      }
      if (this.contact_schedule == '') {
        this.notesCompleted = false
      }
    },
    filterQuestions() {
      // filter repeat clients
      let noRepeatQuestions = []
      const uniqueQuestion = {}
      noRepeatQuestions = this.notas

      noRepeatQuestions = noRepeatQuestions.filter(current => {
        const exists = !uniqueQuestion[current.question_id]
        uniqueQuestion[current.question_id] = true
        return exists
      })
      this.notas = noRepeatQuestions
    },
    getCountries() {
      axios
        .post('/api/view-countrys', {})
        .then(response => {
          this.countrys = response.data
        })
        .catch(err => {
          console.error(err)
        })
    },
  },
}
</script>

<style scoped>
.quill-editor{
  height: 100px;
}
</style>
