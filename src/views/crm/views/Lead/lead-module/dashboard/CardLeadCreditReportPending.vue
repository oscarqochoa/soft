<template>
  <div>
    <b-card-body class="px-0">
      <b-table
        show-empty
        sticky-header
        striped
        responsive="sm"
        :fields="fieldsEvent"
        :items="S_CREDIT_REPORT_PENDINGS"
        :busy.sync="isBusy"
        class="mb-0"
        small
      >
        <template #table-busy>
          <div class="text-center text-primary my-2">
            <b-spinner class="align-middle mr-1" />
            <strong>Loading ...</strong>
          </div>
        </template>

        <template #cell(request_by)="data">
          <span>{{ data.item.seller_name }}</span>
          <br>
          <span>{{ data.item.date | myGlobal }}</span>
        </template>

        <template #cell(tracking)="data">
          <div class="text-center">
            <b-button
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
              variant="flat-info"
              class="button-little-size rounded-circle"
              @click="onOpenTrackingStatus(data.item.score_id)"
            >
              <feather-icon
                icon="ListIcon"
              />
            </b-button>
          </div>
        </template>

        <template #cell(actions)="data">
          <div class="text-center">
            <span
              v-if="data.item.status_id == 3"
              class="cursor-pointer"
              @click="onChangeStatus(data.item.score_id, 4)"
            >
              Validate Information
            </span>
            <span
              v-if="data.item.status_id == 3 && data.item.attemps_count < 3"
              class="cursor-pointer"
              @click="onChangeStatus(data.item.score_id, 5)"
            >
              &nbsp;| Other Source (DI)
            </span>
            <span
              v-if="data.item.status_id == 6"
              class="cursor-pointer"
              @click="onChangeStatus(data.item.score_id, 7)"
            >
              Information Was Correct
            </span>
            <span
              v-if="data.item.status_id == 6 && item.attemps_count < 3"
              class="cursor-pointer"
              @click="onChangeStatus(data.item.score_id, 8)"
            >
              &nbsp;| Other Source (II)
            </span>
          </div>
        </template>

      </b-table>
    </b-card-body>

    <!-- modal TRACKING STATUS -->
    <b-modal
      id="modal-tracking-status"
      title-class="h3 text-white"
      modal-class="modal-primary"
      centered
      size="lg"
      title="Tracking Status"
      hide-footer
    >
      <modal-tracking-status :modul="modul" :lead="lead" :id-score="scoreId" />
    </b-modal>
  </div>
</template>

<script>

import { mapActions, mapGetters, mapState } from 'vuex'

import Ripple from 'vue-ripple-directive'

import ModalTrackingStatus from '@/views/crm/views/Lead/lead-module/dashboard/modal/ModalTrackingStatus.vue'

export default {
  components: {
    ModalTrackingStatus,
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token',
      /* G_TEMPLATES: 'CrmTemplateStore/G_TEMPLATES' */
    }),
    ...mapState({
      S_CREDIT_REPORT_PENDINGS: event => event.CrmCreditReportStore.S_CREDIT_REPORT_PENDINGS,
    }),
  },
  created() {},
  directives: {},
  data() {
    return {
      fieldsEvent: [
        { key: 'request_by' },
        { key: 'status' },
        { key: 'tracking' },
      ],
      scoreId: null,
    }
  },
  directives: { Ripple },
  methods: {
    ...mapActions({
      /* A_GET_TEMPLATES: 'CrmTemplateStore/A_GET_TEMPLATES' */
    }),
    onOpenTrackingStatus (scoreId) {
      this.scoreId = scoreId
      console.log('this.scoreId', this.scoreId)
      this.$bvModal.show('modal-tracking-status')
    },
    onChangeStatus(scoreId, statusId) {
      /* *INTEGRATE* */
    },
  },
  mounted() {},
  props: {
    modul: {
      type: Number,
      required: true,
    },
    lead: {
      type: Object,
      required: true
    },
    isBusy: {
      type: Boolean,
      required: true,
    },
  },
  setup() {},
}
</script>
