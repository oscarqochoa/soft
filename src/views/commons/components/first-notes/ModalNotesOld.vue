<template />

<script>
export default {
  name: 'ModalNotesOld',
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
      notas: this.noteInfo.notesProgram.filter(val => val.question_id != 1062),
      valorEdit: false,
      notesCompleted: true,
      contact_schedule:
          this.noteInfo.notesProgram[5].answer == 'null'
          || this.noteInfo.notesProgram[5].answer == undefined
          || this.noteInfo.notesProgram[5].answer == null
            ? ''
            : this.noteInfo.notesProgram[5].answer,
      contact_error: false,
      origin_country: null,
      countrys: [],
    }
  },
  mounted() {
    // Filter by date for new fields
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

    this.cleanNotes()
  },
  created() {
    this.origin_country = this.noteInfo.originCountry
    this.getCountries()
    this.filterQuestions()
  },
  methods: {
    closeModal() {
      this.$emit('close', false)
    },
    deleteRequired(nota) {
      if (nota.answer != null || nota.answer != null) {
        this.$refs[`required${nota.question_id}`].$el.classList.remove('required-text')
      }
    },
    findfather(id) {
      if (id != null) {
        const father = this.notas.find(element => element.question_id == id)
        return father.answer == 'YES'
      }
      return true
    },
    saveNotesCompleted() {
      const notes = []
      this.addPreloader()
      let fr = true
      let nr = 0
      for (let x = 0; x < this.notas.length; x++) {
        if (!this.findfather(this.notas[x].father)) {
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
          this.$refs[`required${this.notas[x].question_id}`].$el.classList.add('required-text')
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

</style>
