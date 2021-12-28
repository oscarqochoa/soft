<template>
  <b-card>
    <template #header>
      <b-card-title>Notes</b-card-title>
    </template>
    <validation-observer
      ref="refFormObserver"
    >
      <!-- Form -->
      <b-form
        @reset.prevent="resetForm"
      >
        <b-row>
          <b-col>
            <validation-provider
              #default="validationContext"
              name="text"
              rules="required"
            >
              <b-form-group label-for="text">
                <b-form-textarea
                  v-model="note.text"
                  id="text"
                  rows="11"
                  :disabled="isDisabled || onlyRead"
                  :state="getValidationState(validationContext)"
                />
                <small class="form-text text-muted">
                  <b>Created by: &nbsp;</b>
                  {{ note.created_by_name }} (
                  <feather-icon icon="CalendarIcon" class="mr-50" />
                  <span>{{ note.created_at | myGlobalWithHour }}</span> )
                  <b-button
                    v-if="isMyNote && !onlyRead"
                    size="sm"
                    variant="flat-warning"
                    class="button-little-size rounded-circle"
                    @click="isDisabled = !isDisabled"
                  >
                    <feather-icon icon="Edit2Icon" />
                  </b-button>
                </small>

                <b-form-invalid-feedback>
                  {{ validationContext.errors[0] }}
                </b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
          </b-col>
        </b-row>
      </b-form>
    </validation-observer>

    <template v-if="(!isDisabled && !onlyRead) || (lead.count_notes && !onlyRead) || lead.count_notes" #footer>
      <div class="d-flex" :class="!isDisabled && !onlyRead ? 'justify-content-between' : 'justify-content-end'">
        <div v-if="!isDisabled && !onlyRead">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="outline-success"
            class="btn-icon rounded-circle"
            @click="onSubmit"
          >
            <feather-icon icon="CheckIcon" />
          </b-button>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="outline-danger"
            class="btn-icon rounded-circle ml-50"
            @click="isDisabled = true"
          >
            <feather-icon icon="XIcon" />
          </b-button>
        </div>
        <div>
          <b-button
            v-if="lead.count_notes && !onlyRead"
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="primary"
            @click="$bvModal.show('modal-notes-save')"
          >
            <span class="align-middle">Add</span>
          </b-button>
          <b-button
            v-if="lead.count_notes"
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-secondary"
            class="btn-icon ml-1"
            @click="$bvModal.show('modal-notes-history')"
          >
            <feather-icon
              icon="ListIcon"
              size="18"
            />
          </b-button>
        </div>
      </div>
    </template>

    <!-- modal NOTES SAVE -->
    <b-modal
      id="modal-notes-save"
      ok-only
      modal-class="modal-primary"
      centered
      size="lg"
      title="TASKS"
      hide-footer
      no-close-on-backdrop
    >
      <modal-notes-save
        :modul="modul"
        :lead="lead"
        :note="noteSave"
        :is-important="note.text === ''"
        @reloadNote="reloadNote"
      />
    </b-modal>

    <!-- modal HISTORY NOTES -->
    <b-modal
      id="modal-notes-history"
      ok-only
      modal-class="modal-primary"
      centered
      size="lg"
      title="HISTORY NOTES"
      hide-footer
      no-close-on-backdrop
    >
      <modal-notes-history
        :modul="modul"
        :lead="lead"
        :only-read="onlyRead"
        :note="note"
        @reloadNote="reloadNote"
      />
    </b-modal>
  </b-card>
</template>

<script>

import { mapActions, mapGetters, mapState,  } from 'vuex'

import formValidation from '@core/comp-functions/forms/form-validation'
import Ripple from 'vue-ripple-directive'

import ModalNotesHistory from '../../lead-notes/ModalNotesHistory.vue'
import ModalNotesSave from '../../lead-notes/ModalNotesSave.vue'

export default {
  components: {
    ModalNotesHistory,
    ModalNotesSave,
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token'
    }),
  },
  created () {
    this.authUser = this.currentUser
    this.myNote()
  },
  data () {
    return {
      authUser: new Object,
      blankNote: new Object,
      isDisabled: true,
      isMyNote: false,
      note: new Object,
      noteSave: new Object,
    }
  },
  directives: { Ripple },
  methods: {
    ...mapActions({
      A_UPDATE_LEAD_NOTE: 'CrmNotesStore/A_UPDATE_LEAD_NOTE'
    }),
    setDataBlank (key) {
      this[`blank${ key.charAt(0).toUpperCase() }${ key.slice(1) }`] = Object.assign({}, this[key])
    },
    resetData (key) {
      const object = this[`blank${ key.charAt(0).toUpperCase() }${ key.slice(1) }`]
      for (let subkey in object) {
        this[key][subkey] = object[subkey]
      }
      this.$refs.refFormObserver.reset()
    },
    reloadNote (notes) {
      this.note = notes[0]
      this.lead.count_notes = notes.length
      this.isMyNote = this.note.created_by == this.authUser.user_id
    },
    myNote () {
      this.isMyNote = this.note.user_id == this.authUser.user_id
    },
    async onSubmit () {
      if (await this.$refs.refFormObserver.validate()) {
        this.showConfirmSwal()
        .then(async result => {
          if (result.value) {
            this.isLoading = true
            this.addPreloader()
            const response = await this.A_UPDATE_LEAD_NOTE(this.note)
            if (this.isResponseSuccess(response)) {
              this.reloadNote(response.data)
              this.setDataBlank('note')
              this.isDisabled = true
              this.removePreloader()
              this.showToast('success', 'top-right', 'Success!', 'CheckIcon', 'Successful operation')
            } else {
              this.removePreloader()
              this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', 'Something went wrong. ' + response.message)
            }
            this.isLoading = false
          }
        }).catch(error => {
          console.log('Something went wrong onSubmit', error)
          this.removePreloader()
          this.showErrorSwal()
          this.isLoading = false
        })
      }
    }
  },
  mounted () {
    this.note = this.lead.notes ? this.lead.notes[0] : new Object
    this.note.created_by_name = this.note.created_by
    this.note.created_at = this.note.created
  },
  props: {
    modul: {
      type: Number,
      required: true
    },
    onlyRead: {
      type: Boolean,
      required: true
    },
    lead: {
      type: Object,
      required: true
    }
  },
  setup () {
    const {
      refFormObserver,
      getValidationState,
    } = formValidation(() => {})

    return {
      refFormObserver,
      getValidationState
    }
  },
  watch: {
    isDisabled (current, old) {
      if (current)
        this.resetData('note')
      else
        this.setDataBlank('note')
    }
  }
}
</script>
