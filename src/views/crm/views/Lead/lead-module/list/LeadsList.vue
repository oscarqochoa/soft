<template>
  <div>
    <!-- Table Container Card -->
    <b-card
      no-body
      class="mb-0"
    >

      <!-- Paginate -->
      <paginate-table
        :currentPage="currentPage"
        :total-rows="totalLeads"
        :per-page="perPage"
        :from-page="fromPage"
        :to-page="toPage"
        @onChangeCurrentPage="onChangeCurrentPage"
      />

      <div class="m-2">

        <!-- Filters -->
        <filters-table
          :filter="optionFilters"
          :per-page="perPage"
          :per-page-options="perPageOptions"
          :status-lead-options="statusLeadOptions"
          :owner-options="ownerOptions"
          :assign-to-options="assignToOptions"
          :cr-options="crOptions"
          :program-options="programOptions"
          :source-name-options="sourceNameOptions"
          :type-doc-options="typeDocOptions"
          :st-ad-options="stAdOptions"
          @onSearch="myProvider"
        >
          <template #actions>
            <b-button
              variant="success"
              class="ml-50"
              @click="modalSmssOpen"
            >
              <feather-icon
                icon="MessageCircleIcon"
              />
              Send SMS
            </b-button>
          </template>
        </filters-table>

      </div>

      <b-table
        ref="refUserListTable"
        class="position-relative"
        :fields="fields"
        :items="items"
        responsive
        small
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
        selectable
        select-mode="multi"
        :busy.sync="isBusy"
        @row-selected="onRowSelected"
      >
        <template #table-busy>
          <div class="text-center text-primary my-2">
            <b-spinner class="align-middle mr-1" />
            <strong>Loading ...</strong>
          </div>
        </template>

        <!-- Column: Date Even -->
        <template #cell(date_even)="data">
          <b-badge
            v-if="data.item.date_even"
            pill
            variant="light-danger"
            class="text-capitalize"
          >
            <feather-icon
              v-if="data.item.date_even"
              icon="CalendarIcon"
              size="18"
              class="mr-50 text-danger"
            />
            <span class="align-text-top text-capitalize">{{ data.item.date_even }}</span>
          </b-badge>
        </template>

        <!-- Column: Name -->
        <template #cell(lead_name)="data">
          <a
            href="#"
            target="_blank"
          >{{ data.item.lead_name }}</a>
        </template>

        <!-- Column: Status -->
        <template #cell(status)="data">
          <b-badge
            pill
            :variant="`light-${resolveUserStatusVariant(data.item.status)}`"
            class="text-capitalize"
          >
            {{ data.item.status }}
          </b-badge>
        </template>

        <!-- Column: Status -->
        <template #cell(credit_report)="data">
          <strong :class="`text-${ (data.item.credit_report == 1) ? 'danger' : 'success' }`">{{ (data.item.credit_report == 1) ? 'NO' : 'YES' }}</strong>
        </template>

        <!-- Column: Programs -->
        <template #cell(programs)="data">
          <div
            class="d-flex"
            style="gap: .5rem"
          >
            <template v-for="(program, key) in JSON.parse(data.item.programs)">
              <div
                :key="key"
                style="width: 50px;height: 50px;background-position: center;background-repeat: no-repeat;background-size: contain;"
                v-bind:style="{ backgroundImage: `url(${baseUrl + program.logo})` }"
              />
            </template>
          </div>
        </template>

        <!-- Column: Created By -->
        <template #cell(created_by)="data">
          <small>{{ data.item.owner }}</small>
          <br>
          <small>{{ data.item.created_at }}</small>
        </template>

        <!-- Column: Assign To -->
        <template #cell(assign_to)="data">
          <small>{{ data.item.assign_to }}</small>
          <br>
          <small>{{ data.item.assign_date }}</small>
        </template>

        <!-- Column: Actions -->
        <template #cell(actions)="data">
          <actions-table
            :options="[ 'returnToSocialNetwork', 'sendSMS', 'historySMS', 'delete' ]"
            :row-data="data.item"
            @onRowDelete="onRowDelete"
            @onRowProcess="onRowProcess"
            @modalSmsOpen="modalSmsOpen"
            @modalHistorySmsOpen="modalHistorySmsOpen"
          />
        </template>

      </b-table>
      
      <!-- Paginate -->
      <paginate-table
        :currentPage="currentPage"
        :total-rows="totalLeads"
        :per-page="perPage"
        :from-page="fromPage"
        :to-page="toPage"
        @onChangeCurrentPage="onChangeCurrentPage"
      />

    </b-card>

    <!-- modal SEND SMS -->
    <b-modal
      id="modal-send-sms"
      ok-only
      modal-class="modal-primary"
      centered
      size="lg"
      title="SEND SMS"
    >
      <modal-send-sms
        :row-data="rowData"
        :smss="leads_sms"
        :modul="modul"
        :typesms="typesms"
        :sms="leads_sms_o"
        :name-leads="name_leads_arr"
        :quicks="quicks"
        @modalQuickOpen="modalQuickOpen"
      />

      <template #modal-footer>
        <b-form-group
          label="VARS"
          class="w-100"
        >
          <b-row>
            <b-col sm="3">
              <b-input-group size="sm">
                <b-input-group-prepend is-text>
                  @1
                </b-input-group-prepend>
                <b-form-input placeholder="FIRST NAME" readonly />
              </b-input-group>
            </b-col>
            <b-col sm="3">
              <b-input-group size="sm">
                <b-input-group-prepend is-text>
                  @2
                </b-input-group-prepend>
                <b-form-input placeholder="LAST NAME" readonly />
              </b-input-group>
            </b-col>
            <b-col v-if="modul == 15" sm="3">
              <b-input-group size="sm">
                <b-input-group-prepend is-text>
                  @3
                </b-input-group-prepend>
                <b-form-input placeholder="LAST NAME" readonly />
              </b-input-group>
            </b-col>
          </b-row>
        </b-form-group>
      </template>
    </b-modal>

    <!-- modal QUICK SMS -->
    <b-modal
      id="modal-quick-sms"
      ok-only
      modal-class="modal-primary"
      centered
      size="lg"
      title="QUICK SMS"
      hide-footer
    >
      <modal-quick-sms
        :modul="modul"
        :quicks="quicks"
        @modalQuickCreateOpen="modalQuickCreateOpen"
        @modalQuickEditOpen="modalQuickEditOpen"
        @modalQuickDelete="modalQuickDelete"
      />
    </b-modal>

    <!-- modal SAVE QUICK SMS -->
    <b-modal
      id="modal-quick-sms-save"
      ok-only
      modal-class="modal-primary"
      centered
      size="lg"
      :title="(quickData.id) ? 'EDIT QUICK SMS' : 'NEW QUICK SMS'"
      hide-footer
    >
      <modal-quick-sms-save
        :modul="modul"
        :quick-data="quickData"
        @updateQuicks="updateQuicks"
        @modalQuickCreateClose="$bvModal.hide('modal-quick-sms-save')"
      />
    </b-modal>

    <!-- modal HISTORY SMS -->
    <b-modal
      id="modal-history-sms"
      ok-only
      modal-class="modal-primary"
      centered
      size="lg"
      title="HISTORY OF SMS"
      hide-footer
    >
      <modal-history-sms
        :modul="modul"
        :row-data="rowData"
      />
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { BTable, BPagination, BModal } from 'bootstrap-vue'

import vSelect from 'vue-select'

import ActionsTable from '../../lead-table/ActionsTable.vue'
import crmService from '@/views/crm/services/crm.service'
import dataFields from '@/views/crm/views/Lead/lead-table/fields.data'
import FiltersTable from '../../lead-table/FiltersTable.vue'
import ModalSendSms from '../../lead-sms/ModalSendSms.vue'
import ModalQuickSms from '../../lead-sms/ModalQuickSms.vue'
import ModalQuickSmsSave from '../../lead-sms/ModalQuickSmsSave.vue'
import ModalHistorySms from '../../lead-sms/ModalHistorySms.vue'
import PaginateTable from '@/views/crm/views/Lead/lead-table/PaginateTable.vue'

export default {
  components: {
    FiltersTable,
    ActionsTable,
    ModalSendSms,
    ModalQuickSms,
    ModalQuickSmsSave,
    ModalHistorySms,

    BTable,
    BPagination,
    BModal,

    vSelect,
    PaginateTable,
  },
  props: {
    stateLeadOptions: {
      type: Array,
      required: false,
    },
    statusLeadOptions: {
      type: Array,
      required: false,
    },
    ownerOptions: {
      type: Array,
      required: false,
    },
    assignToOptions: {
      type: Array,
      required: false,
    },
    crOptions: {
      type: Array,
      required: false,
    },
    programOptions: {
      type: Array,
      required: false,
    },
    sourceNameOptions: {
      type: Array,
      required: false,
    },
    typeDocOptions: {
      type: Array,
      required: false,
    },
    stAdOptions: {
      type: Array,
      required: false,
    },
    leadsSelecteds: {
      type: Object,
      required: true,
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token'
    }),
  },
  data() {
    return {
      modul: 2,
      advanceSearch: false,
      baseUrl: process.env.VUE_APP_BASE_URL_ASSETS,
      mainProps: { width: 75, height: 75, class: 'm1' },
      rowData: {},
      name_leads_arr: [],
      leads_sms: [],
      typesms: null,
      leads_sms_o: [],
      quicks: [],
      quickData: {},
      blankQuickData: {
        id: null,
        sms: '',
        title: ''
      },
      
      isBusy: false,
      fields: dataFields.leadFields,
      items: [],
      totalLeads: 0,
      perPage: 10,
      fromPage: 0,
      toPage: 0,
      currentPage: 1,
      optionFilters: {
        searchQuery: '',
        assignTo: null,
        from: null,
        to: null,
        statusLead: null,
        owner: null,
        assignTo: null,
        cr: null,
        program: null,
        sourceName: null,
        typeDoc: null,
        stAd: null,
      },
      perPageOptions: [10, 25, 50, 100],
      sortBy: 'id',
      isSortDirDesc: true,
    }
  },
  created () {
    this.myProvider()
    this.getAllQuicksSms()
  },
  methods: {
    resolveUserStatusVariant (status) {
      if (status === 'Pending') return 'warning'
      if (status === 'Active') return 'success'
      if (status === 'Inactive') return 'secondary'
      if (status === 'Not Contacted') return 'danger'
      return 'primary'
    },
    async myProvider () {
      try {
        this.isBusy = true
        const response = await crmService.getLeads({
          assign_to: this.optionFilters.assignTo,
          cr: this.optionFilters.cr,
          date_from: this.optionFilters.from,
          date_to: this.optionFilters.to,
          idrole: 1,
          iduser: 1,
          lead_status: this.optionFilters.statusLead,
          name_text: this.optionFilters.searchQuery,
          order: 'desc',
          orderby: 10,
          program: this.optionFilters.program,
          sourcename: this.optionFilters.sourceName,
          state_h: this.optionFilters.stAd,
          typedoc: this.optionFilters.typeDoc,
          user_owner: this.optionFilters.owner,
          perpage: this.perPage,
          page: this.currentPage
        })
        this.totalLeads = response.total
        this.fromPage = response.from
        this.toPage = response.to
        this.items = response.data
        this.isBusy = false
      } catch (error) {
        console.log('Somtehing went wrong myProvider', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    },
    onChangeCurrentPage (e) {
      this.currentPage = e
      this.myProvider()
    },
    onRowSelected (items) {
      this.leadsSelecteds.leads = items
      this.leads_sms = items.map(el => el.id)
    },
    onRowDelete (id) {
      this.$swal.fire({
        title: 'Are you sure?',
        icon: 'question',
        text: 'You won\'t be able to revert this!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ab9220',
        cancelButtonColor: '#8f9194',
        confirmButtonText: 'Yes, delete it!',
      })
      .then(async (result) => {
        if (result.value) {
          const { id: user_id, id: role_id } = this.currentUser
          const response = await crmService.postDeleteLead({
            leadid: id,
            idsession: user_id,
            iduser: user_id,
            idrole: role_id,
          })
          if (response) {
            /*
              DELETED ROW HERE
            */
            this.$swal('Successful!', 'Operation successfully', 'success')
          } else {
            this.$swal('Failed!', 'There was something wronge', 'warning')
          }
        }
      })
      .catch(error => {
        console.log('Something went wrong onRowDelete:', error)
        this.$swal('Oops!', 'There was something wronge', 'error')
      })
    },
    onRowProcess (id) {
      this.$swal.fire({
        title: 'Are you sure?',
        icon: 'question',
        text: 'You won\'t be able to revert this!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ab9220',
        cancelButtonColor: '#8f9194',
        confirmButtonText: 'Yes',
        input: 'textarea',
        inputValidator: (value) => {
          if (!value) {
            return 'You need to write something!'
          }
        },
      })
      .then(async (result) => {
        if (result.value) {
          const { id: user_id, id: role_id } = this.currentUser
          const response = await crmService.postProcessLead({
            lead_id: id,
            status: 3,
            user_id,
            description: result.value,
          })
          if (response.status == 200) {
            this.refresh = true
            this.$swal('Successful!', 'Operation successfully', 'success')
          } else {
            this.$swal('Failed!', 'There was something wronge', 'warning')
          }
        }
      })
      .catch(error => {
        console.log('Something went wrong onRowProcess:', error)
        this.$swal('Oops!', 'There was something wrong', 'error')
      })
    },
    async getAllQuicksSms () {
      try {
        const response = await crmService.getAllQuicksSms({
          modul: this.modul,
        })
        this.quicks = response.map(el => ({ ...el, value: el.sms, label: el.title, showMore: false }))
      } catch (error) {
        console.log('Something wnet wrong getAllQuicksSms:', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      }
    },
    modalSmsOpen (item) {
      this.rowData = item
      this.leads_sms = []
      this.typesms = 1
      this.leads_sms_o = []
      this.leads_sms_o.push(item.id)
      this.name_leads_arr = [{ name: item.lead_name, id: item.id }]
      this.$bvModal.show('modal-send-sms')
    },
    modalHistorySmsOpen (item) {
      this.rowData = item
      this.$bvModal.show('modal-history-sms')
    },
    modalSmssOpen () {
      this.typesms = 0
      this.name_leads_arr = this.leadsSelecteds.leads.map(el => ({ name: el.lead_name, id: el.id }))
      this.$bvModal.show('modal-send-sms')
    },
    modalQuickOpen () {
      this.$bvModal.show('modal-quick-sms')
    },
    modalQuickCreateOpen () {
      this.quickData = JSON.parse(JSON.stringify(this.blankQuickData))
      this.$bvModal.show('modal-quick-sms-save')
    },
    modalQuickEditOpen (item) {
      this.quickData = item
      this.$bvModal.show('modal-quick-sms-save')
    },
    updateQuicks (item) {
      const index = this.quicks.map(el => el.id).indexOf(item.id)
      if (index !== -1) {
        this.quicks[index] = { ...item, value: item.sms, label: item.title }
      } else {
        this.quicks.push({ ...item, value: item.sms, label: item.title })
      }
    },
    resetQuickData (item) {
      this.quickData = item
    },
    async modalQuickDelete (id) {
      this.$swal.fire({
        title: 'Are you sure?',
        icon: 'question',
        text: 'You won\'t be able to revert this!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ab9220',
        cancelButtonColor: '#8f9194',
        confirmButtonText: 'Yes, delete it!',
      })
      .then(async (result) => {
        if (result.value) {
          const response = await crmService.postDeleteQuickSms({ id })
          console.log('response postDeleteQuickSms', response)
          if (response.status == 200) {
            const index = this.quicks.map(el => el.id).indexOf(id)
            if (index !== -1)
              this.quicks.splice(index, 1)
            this.showToast('success', 'top-right', 'Success!', 'CheckIcon', 'Successful operation')
          } else
            this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', response.message)
        }
      })
      .catch(error => {
        console.log('Something went wrong modalQuickDelete', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
      })
    }
  },
}
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
