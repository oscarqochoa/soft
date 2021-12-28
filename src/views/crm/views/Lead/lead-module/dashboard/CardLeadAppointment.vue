<template>
  <b-card>
    <template #header>
      <b-card-title>Appointments</b-card-title>
    </template>
    <b-table
      show-empty
      sticky-header
      striped
      responsive="sm"
      :fields="fieldsEvent"
      :items="S_EVENTS"
      :busy.sync="isBusy"
      class="mb-0"
    >
      <template #table-busy>
        <div class="text-center text-primary my-2">
          <b-spinner class="align-middle mr-1" />
          <strong>Loading ...</strong>
        </div>
      </template>

      <template #cell(title)="data">
        <b-button
          variant="flat-primary"
          @click="openModalEditEventShow(data.item.id)"
        >
          {{ data.item.title }}
        </b-button>
      </template>

      <template #cell(seller)="data">
        {{ data.item.user.first_name }} {{ data.item.user.last_name }}
      </template>

      <template #cell(date)="data">
        <div style="white-space: nowrap;">
          {{ data.item.date | myDateGlobal }}
          <template v-if="data.item.state !== 'CA'">
            <br>
            <span class="font-weight-bold">{{ data.item.real_time | myDateGlobal }}</span>
          </template>
        </div>
      </template>

      <template #cell(from)="data">
        <div style="white-space: nowrap;">
          {{ data.item.from | myTime }}
          <template v-if="data.item.state !== 'CA'">
            <br>
            <span class="font-weight-bold">{{ data.item.real_time | myDateGlobal }}</span>
          </template>
        </div>
      </template>

      <template #cell(to)="data">
        <div style="white-space: nowrap;">
          {{ data.item.to | myTime }}
          <template v-if="data.item.state !== 'CA'">
            <br>
            <span class="font-weight-bold">-</span>
          </template>
        </div>
      </template>

      <template #cell(actions)="data">
        <div class="w-100 text-center">
          <b-button
            v-if="data.item.attend != 2 && !onlyRead"
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="flat-danger"
            class="button-little-size rounded-circle"
            @click="deleteEvent(data.item.id)"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
        </div>
      </template>

    </b-table>
    
    <template v-if="!onlyRead" #footer>
      <div class="text-right">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="primary"
          @click="isInfo = false, $bvModal.show('modal-event-create')"
        >
          <span class="align-middle">Add</span>
        </b-button>
      </div>
    </template>

    <!-- modal EVENT CREATE -->
    <b-modal
      id="modal-event-create"
      ok-only
      modal-class="modal-primary"
      centered
      size="lg"
      title="EVENT CREATE"
      hide-footer
      no-close-on-backdrop
    >
      <modal-event-create
        :modul="modul"
        :only-read="onlyRead"
        :lead="lead"
        :event="event"
        @resetData="resetData"
      />
    </b-modal>
    <!-- modal EVENT EDIT -->
    <b-modal
      id="modal-event-edit"
      ok-only
      modal-class="modal-warning"
      centered
      size="lg"
      :title="titleModalEventEdit"
      hide-footer
      no-close-on-backdrop
    >
      <modal-event-edit
        :modul="modul"
        :only-read="onlyRead"
        :lead="lead"
        :event="event"
      />
    </b-modal>
  </b-card>
</template>

<script>

import { mapActions, mapGetters, mapState,  } from 'vuex'
import { BModal } from 'bootstrap-vue'

import Ripple from 'vue-ripple-directive'

import ModalEventCreate from '../../lead-event/ModalEventCreate.vue'
import ModalEventEdit from '../../lead-event/ModalEventEdit.vue'

export default {
  components: {
    BModal,
    ModalEventCreate,
    ModalEventEdit,
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
    isBusy: {
      type: Boolean,
      required: true
    },
    lead: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      blankEvent: {},
      campos: {},
      event: {
        attend: null,
        date: '',
        from: '',
        id: null,
        location: '',
        real_time: '',
        title: '',
        to: '',
      },
      fieldsEvent: [
        { key: 'title' },
        { key: 'seller' },
        { key: 'location' },
        { key: 'date' },
        { key: 'from' },
        { key: 'to' },
        { key: 'Actions' },
      ],
      titleModalEventEdit: 'EVENT EDIT',
    }
  },
  mounted () {},
  created () {
    this.setDataBlank('event')
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token'
    }),
    ...mapState({
      S_EVENTS: event => event.CrmEventStore.S_EVENTS
    })
  },
  methods: {
    ...mapActions({
      A_DELETE_EVENTS: 'CrmEventStore/A_DELETE_EVENTS',
      A_GET_EVENT: 'CrmEventStore/A_GET_EVENT',
    }),
    setDataBlank (key) {
      this[`blank${ key.charAt(0).toUpperCase() }${ key.slice(1) }`] = Object.assign({}, this[key])
    },
    resetData (key) {
      this[key] = Object.assign({}, this[`blank${ key.charAt(0).toUpperCase() }${ key.slice(1) }`])
    },
    async openModalEditEventShow (id) {
      try {
        const response = await this.A_GET_EVENT({ id })
        this.resetData('event')
        if (this.isResponseSuccess(response)) {
          this.event = response.data[0]
          this.event.user_id = { label: this.event.seller_name, value: this.event.seller_id }
          this.titleModalEventEdit = this.event.title
          this.$bvModal.show('modal-event-edit')
        } else
          this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', `Something went wrong. ${ response.message }`)
      } catch (error) {
        console.log('Something went wrong getEvents', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    },
    deleteEvent (id) {
      this.showSwalGeneric('Are you sure?', 'You won\'t be able to revert this!', 'warning')
      .then(async (result) => {
        if (result.value) {
          const response = await this.A_DELETE_EVENTS(id)
          if (this.isResponseSuccess(response)) {
            this.showToast('success', 'top-right', 'Deleted!', 'CheckIcon', 'Your file has been deleted.')
          } else {
            this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', `Something went wrong. ${ response.message }`)
          }
        }
      }).catch(error => {
        console.log('Something went wrong deleteEvent', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      })
    },
  },
  directives: {
    Ripple,
  },
}
</script>

