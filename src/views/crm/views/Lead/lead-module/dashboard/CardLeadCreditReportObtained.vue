<template>
  <div>
    <b-card-body>
      <b-table
        show-empty
        sticky-header
        striped
        responsive="sm"
        :fields="fieldsEvent"
        :items="S_CREDIT_REPORTS"
        :busy.sync="isBusy"
        class="mb-0"
      >
        <template #table-busy>
          <div class="text-center text-primary my-2">
            <b-spinner class="align-middle mr-1" />
            <strong>Loading ...</strong>
          </div>
        </template>

        <template #cell(provider)="data">
          <div
            style="width: 50px;height: 50px;background-position: center;background-repeat: no-repeat;background-size: contain;"
            v-bind:style="{ backgroundImage: `url(${ baseUrl + data.item.plataform_icon })` }"
            v-b-tooltip.hover.top="data.item.plataform_name"
          />
        </template>

        <template #cell(date)="data">
          {{ data.item.date | myGlobal }}
        </template>

        <template #cell(cr)="data">
          <span
            v-if="modul === 4 && data.item.state == 0 && data.item.plataform_type == 'Source'"
            @click="/* *INTEGRATE* resources\js\components\lead\showlead\ContentCreditReport.vue - on: processhtml(data.item.id) */"
            class="text-danger"
          >
            Process
          </span>
          <a
            v-if="data.item.state == 1"
            :href="`/${ moduleName }/leads/report/${ data.item.lead_id }/${ data.item.id }`"
            variant="flat-success"
            class="button-little-size rounded-circle"
            target="_blanck"
          >
            <feather-icon
              icon="FileTextIcon"
              size="18"
            />
          </a>
        </template>
        <template #cell(pdf)="data">
          <a
            v-if="data.item.route_pdf"
            :href="data.item.route_pdf"
            variant="flat-danger"
            class="button-little-size rounded-circle"
            target="_blanck"
          >
            <feather-icon
              icon="FileIcon"
              size="18"
            />
          </a>
        </template>
        <template #cell(ad)="data">
          <b-button
            variant="flat-info"
            class="button-little-size rounded-circle"
            @click="data.item.nlr/* *INTEGRATE* resources\js\components\lead\showlead\ContentCreditReport.vue - on: openModalAD(data.item.nlr, data.item.lead_name) */"
          >
            <feather-icon
              icon="EyeIcon"
              size="18"
            />
          </b-button>
        </template>
        <template #cell(marked)="data">
          <a
            v-if="data.item.marked_pdf"
            :href="data.item.marked_pdf"
            variant="flat-danger"
            class="button-little-size rounded-circle"
            target="_blanck"
          >
            <feather-icon
              icon="FileIcon"
              size="18"
            />
          </a>
        </template>
      </b-table>
    </b-card-body>
  </div>
</template>

<script>

import { mapActions, mapGetters, mapState,  } from 'vuex'

export default {
  components: {},
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token'
      /* G_TEMPLATES: 'CrmTemplateStore/G_TEMPLATES' */
    }),
    ...mapState({
      S_CREDIT_REPORTS: event => event.CrmCreditReportStore.S_CREDIT_REPORTS
    }),
  },
  created () {},
  data () {
    return {
      fieldsEvent: [
        { key: 'provider' },
        { key: 'date' },
        { key: 'transunion', label: 'TU' },
        { key: 'experian', label: 'EX' },
        { key: 'equifax', label: 'EQ' },
        { key: 'cr' },
        { key: 'pdf' },
        (this.modul === 4) ? { key: 'ad' } : null,
        { key: 'marked' },
      ],
      moduleName: this.getModuleName(this.modul)
    }
  },
  directives: {},
  methods: {
    ...mapActions({
      /* A_GET_TEMPLATES: 'CrmTemplateStore/A_GET_TEMPLATES' */
    })
  },
  mounted () {},
  props: {
    modul: {
      type: Number,
      required: true
    },
    isBusy: {
      type: Boolean,
      required: true
    },
  },
  setup() {},
}
</script>
