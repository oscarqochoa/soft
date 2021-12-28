<template>
  <div>
    <!-- Table Container Card -->
    <b-card
      no-body
      class="mb-0"
    >
      <!-- Paginate -->
      <paginate-table
        :current-page="currentPage"
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
          :status-lead-options="G_STATUS_LEADS"
          :owner-options="G_OWNERS"
          :assign-to-options="G_OWNERS"
          :cr-options="G_CRS"
          :program-options="G_PROGRAMS"
          :source-name-options="G_SOURCE_NAMES"
          :type-doc-options="G_TYPE_DOCS"
          :st-ad-options="G_STATES"
          @onSearch="myProvider"
        >
          <template #actions>
            <b-button
              variant="success"
              class="ml-50"
              :disabled="!leadsSelecteds.length"
              @click="modalSmssOpen"
            >
              <feather-icon icon="MessageCircleIcon" />Send SMS
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
        select-mode="multi"
        :busy.sync="isBusy"
        @row-selected="onRowSelected"
      >
        <!-- Head: Check -->
        <template #head(selected)>
          <b-form-checkbox
            v-model="selectAll"
            @input="selectedAll"
          />
        </template>

        <template #table-busy>
          <div class="text-center text-primary my-2">
            <b-spinner class="align-middle mr-1" />
            <strong>Loading ...</strong>
          </div>
        </template>

        <!-- Column: Selected -->
        <template #cell(selected)="data">
          <b-form-group>
            <b-form-checkbox
              v-model="data.item.selected"
              @input="onSelectedRow(data.item)"
            />
          </b-form-group>
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
          <router-link
            :to="{ name: 'lead-show', params: { id: data.item.id } }"
            target="_blank"
          >{{ data.item.lead_name }}</router-link>
        </template>

        <!-- Column: Status -->
        <template #cell(status)="data">
          <b-badge
            pill
            :variant="`light-${resolveUserStatusVariant(data.item.status)}`"
            class="text-capitalize"
          >{{ data.item.status }}</b-badge>
        </template>

        <!-- Column: Status -->
        <template #cell(credit_report)="data">
          <strong
            :class="`text-${ (data.item.credit_report == 1) ? 'danger' : 'success' }`"
          >{{ (data.item.credit_report == 1) ? 'NO' : 'YES' }}</strong>
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
                :style="{ backgroundImage: `url(${baseUrl + program.logo})` }"
              />
            </template>
          </div>
        </template>

        <!-- Column: Created By -->
        <template #cell(created_by)="data">
          <small>{{ data.item.owner }}</small>
          <br>
          <small>{{ data.item.created_at | myDateGlobalWithHour }}</small>
        </template>

        <!-- Column: Assign To -->
        <template #cell(assign_to)="data">
          <small>{{ data.item.assign_to }}</small>
          <br>
          <small v-if="data.item.assign_date">{{ data.item.assign_date | myDateGlobal }}</small>
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
        :current-page="currentPage"
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
      no-close-on-backdrop
    >
      <modal-send-sms
        :smss="leads_sms"
        :modul="modul"
        :typesms="typesms"
        :sms="leads_sms_o"
        :name-leads="name_leads_arr"
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
                <b-form-input
                  placeholder="FIRST NAME"
                  readonly
                />
              </b-input-group>
            </b-col>
            <b-col sm="3">
              <b-input-group size="sm">
                <b-input-group-prepend is-text>
                  @2
                </b-input-group-prepend>
                <b-form-input
                  placeholder="LAST NAME"
                  readonly
                />
              </b-input-group>
            </b-col>
            <b-col
              v-if="modul == 15"
              sm="3"
            >
              <b-input-group size="sm">
                <b-input-group-prepend is-text>
                  @3
                </b-input-group-prepend>
                <b-form-input
                  placeholder="LAST NAME"
                  readonly
                />
              </b-input-group>
            </b-col>
          </b-row>
        </b-form-group>
      </template>
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
        :id="historySms.id"
        :modul="modul"
        :lead-name="historySms.leadName"
      />
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { BTable, BPagination, BModal } from 'bootstrap-vue'

import vSelect from 'vue-select'

import ActionsTable from "../../lead-table/ActionsTable.vue";
import dataFields from "@/views/crm/views/Lead/lead-table/fields.data";
import FiltersTable from "../../lead-table/FiltersTable.vue";
import ModalHistorySms from "../../lead-sms/ModalHistorySms.vue";
import ModalSendSms from "../../lead-sms/ModalSendSms.vue";
import PaginateTable from "@/views/crm/views/Lead/lead-table/PaginateTable.vue";

export default {
  components: {
    FiltersTable,
    ActionsTable,
    ModalSendSms,
    ModalHistorySms,

    BTable,
    BPagination,
    BModal,

    vSelect,
    PaginateTable,
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token',
      G_STATUS_LEADS: 'CrmLeadStore/G_STATUS_LEADS',
      G_OWNERS: 'CrmGlobalStore/G_OWNERS',
      G_PROGRAMS: 'CrmGlobalStore/G_PROGRAMS',
      G_SOURCE_NAMES: 'CrmGlobalStore/G_SOURCE_NAMES',
      G_STATES: 'CrmGlobalStore/G_STATES',
      G_CRS: 'CrmGlobalStore/G_CRS',
      G_TYPE_DOCS: 'CrmGlobalStore/G_TYPE_DOCS',
    }),
  },
  data() {
    return {
      modul: 2,
      baseUrl: process.env.VUE_APP_BASE_URL_ASSETS,

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

      rowData: {},
      historySms: {
        leadName: '',
        id: null,
      },
      name_leads_arr: [],
      leads_sms: [],
      selectAll: false,
      typesms: null,
      leads_sms_o: [],

      leadsSelecteds: [],
    }
  },
  async created() {
    await this.myProvider()
  },
  methods: {
    ...mapActions({
      A_GET_LEADS: 'CrmLeadStore/A_GET_LEADS',
      A_SET_FILTERS_LEADS: 'CrmLeadStore/A_SET_FILTERS_LEADS',
      A_SET_SELECTED_LEADS: 'CrmLeadStore/A_SET_SELECTED_LEADS',
      A_DELETE_LEADS: 'CrmLeadStore/A_DELETE_LEADS',
      A_PROCESS_LEADS: 'CrmLeadStore/A_PROCESS_LEADS',
    }),
    resolveUserStatusVariant(status) {
      if (status === 'Pending') return 'warning'
      if (status === 'Active') return 'success'
      if (status === 'Inactive') return 'secondary'
      if (status === 'Not Contacted') return 'danger'
      return 'primary'
    },
    selectedAll() {
      if (this.selectAll) this.items.forEach(item => (item.selected = true))
      else this.items.forEach(item => (item.selected = false))
      this.onRowSelected()
    },
    onSelectedRow(data) {
      const index = this.leadsSelecteds.findIndex(
        select => select.id === data.id,
      )
      if (data.selected === true && index === -1) this.leadsSelecteds.push(data)
      else if (data.selected === false && index !== -1) this.leadsSelecteds.splice(index, 1)
      this.onRowSelected()
    },
    async myProvider() {
      try {
        this.setFilters()
        this.isBusy = true
        const response = await this.A_GET_LEADS({
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
          page: this.currentPage,
        })
        this.totalLeads = response.total
        this.fromPage = response.from || 0
        this.toPage = response.to || 0

        const selectedIds = this.leadsSelecteds.map(s => s.id)
        let index = 0
        while (selectedIds.length > 0 && index < response.data.length) {
          if (selectedIds.includes(response.data[index].id)) {
            const { id } = response.data[index]
            response.data[index].selected = true
            const deleted = selectedIds.findIndex(s => s === id)
            if (deleted !== -1) selectedIds.splice(deleted, 1)
          }
          index += 1
        }

        this.items = response.data
        this.isBusy = false
      } catch (error) {
        console.log('Somtehing went wrong myProvider', error)
        this.showToast(
          'danger',
          'top-right',
          'Oop!',
          'AlertOctagonIcon',
          this.getInternalErrors(error),
        )
      }
    },
    onChangeCurrentPage(e) {
      this.currentPage = e
      this.myProvider()
    },
    setFilters() {
      this.A_SET_FILTERS_LEADS({
        ...this.optionFilters,
        perPage: this.perPage,
        currentPage: this.currentPage,
      })
    },
    onRowSelected() {
      this.A_SET_SELECTED_LEADS(this.leadsSelecteds)
    },
    onRowDelete(id) {
      this.showSwalGeneric(
        'Are you sure?',
        "You won't be able to revert this!",
        'question',
      )
        .then(async result => {
          if (result.value) {
            const { user_id, role_id } = this.currentUser
            const response = await this.A_DELETE_LEADS({
              leadid: id,
              idsession: user_id,
              iduser: user_id,
              idrole: role_id,
            })
            if (response.status == 200) {
              const index = this.items.map(el => el.id).indexOf(id)
              if (index !== -1) this.items.splice(index, 1)
              this.showToast(
                'success',
                'top-right',
                'Deleted!',
                'CheckIcon',
                'Your file has been deleted.',
              )
            } else {
              this.showToast(
                'warning',
                'top-right',
                'Warning!',
                'AlertTriangleIcon',
                `Something went wrong.${response.message}`,
              )
            }
          }
        })
        .catch(error => {
          console.log('Something went wrong onRowDelete:', error)
          this.showErrorSwal(error)
        })
    },
    onRowProcess(id) {
      this.showSwalGeneric(
        'Are you sure?',
        "You won't be able to revert this!",
        'warning',
        {
          input: 'textarea',
          inputValidator: value => {
            if (!value) {
              return 'You need to write something!'
            }
          },
        },
      )
        .then(async result => {
          if (result.value) {
            const { user_id, role_id } = this.currentUser
            const response = await this.A_PROCESS_LEADS({
              lead_id: id,
              status: 3,
              user_id,
              description: result.value,
            })
            if (response.status == 200) {
              const index = this.items.map(el => el.id).indexOf(id)
              if (index !== -1) this.items[index].status_sn_id = 3
              this.showToast(
                'success',
                'top-right',
                'Success!',
                'CheckIcon',
                'Successful operation',
              )
            } else {
              this.showToast(
                'warning',
                'top-right',
                'Warning!',
                'AlertTriangleIcon',
                `Something went wrong.${response.message}`,
              )
            }
          }
        })
        .catch(error => {
          console.log('Something went wrong onRowProcess:', error)
          this.showErrorSwal(error)
        })
    },
    modalSmsOpen(item) {
      this.rowData = item
      this.leads_sms = []
      this.typesms = 1
      this.leads_sms_o = []
      this.leads_sms_o.push(item.id)
      this.name_leads_arr = [{ name: item.lead_name, id: item.id }]
      this.$bvModal.show('modal-send-sms')
    },
    modalHistorySmsOpen(item) {
      this.historySms.id = item.id
      this.historySms.leadName = item.lead_name
      this.$bvModal.show('modal-history-sms')
    },
    modalSmssOpen() {
      this.typesms = 0
      this.name_leads_arr = this.leadsSelecteds.map(el => ({
        name: el.lead_name,
        id: el.id,
      }))
      this.leads_sms = this.leadsSelecteds.map(el => el.id)
      this.$bvModal.show('modal-send-sms')
    },
    resetQuickData(item) {
      this.quickData = item
    },
  },
}
</script>

<style lang="scss" scoped>
.table-responsive {
  min-height: 15rem;
}
</style>
