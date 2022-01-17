<template>
  <div>
    <!-- Table Container Card -->
    <b-card no-body class="mb-0">
      <filter-slot
        v-scrollbar
        :filter="filter"
        :filter-principal="filterPrincipal"
        :total-rows="S_LEADS.total"
        :paginate="paginate"
        :start-page="S_LEADS.fromPage"
        :to-page="S_LEADS.toPage"
        @reload="myProvider"
        @onChangeCurrentPage="onChangeCurrentPage"
      >
        <template #buttons>
          <b-button
            variant="success"
            class="ml-1"
            :disabled="!leadsSelecteds.length"
            @click="modalSmssOpen"
          >
            <feather-icon icon="MessageCircleIcon" class="mr-50" />Send SMS
          </b-button>
          <b-button
            v-if="[5].includes(currentUser.role_id)"
            variant="success"
            class="ml-1"
            :disabled="!(leadsSelecteds.length && leadsSelecteds.map(el => el.user_id).includes(currentUser.user_id))"
            @click="showToast('warning', 'top-right', 'In maintenance', 'AlertIcon', 'This action is under maintenance')"
          >
            <feather-icon icon="ListIcon" class="mr-50" />ADD LIST
          </b-button>
        </template>

        <b-table
          slot="table"
          ref="refUserListTable"
          class="position-relative"
          primary-key="id"
          empty-text="No matching records found"
          select-mode="multi"
          responsive="sm"
          table-class="text-nowrap"
          sticky-header="73vh"
          small
          show-empty
          :sort-by.sync="sortBy"
          :fields="fields"
          :items="S_LEADS.items"
          :sort-desc.sync="isSortDirDesc"
          :busy.sync="isBusy"
          @row-selected="onRowSelected"
        >
          <!-- Head: Check -->
          <template #head(selected)>
            <b-form-checkbox v-model="selectAll" @input="selectedAll" />
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
              <b-form-checkbox v-model="data.item.selected" @input="onSelectedRow(data.item)" />
            </b-form-group>
          </template>

          <!-- Column: Date Even -->
          <template #cell(date_even)="data">
            <b-badge v-if="data.item.date_even" pill variant="light-danger" class="text-capitalize">
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
              class="text-important"
              :to="`/${routeModule}/leads/${data.item.id}`"
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

          <!-- Column: Credit Report -->
          <template #cell(credit_report)="data">
            <strong
              :class="`text-${ (data.item.credit_report == 1) ? 'danger' : 'success' }`"
            >{{ (data.item.credit_report == 1) ? 'NO' : 'YES' }}</strong>
          </template>

          <!-- Column: Programs -->
          <template #cell(programs)="data">
            <div v-if="data.item.programs" class="d-flex" style="gap: .5rem">
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
            <br />
            <small>{{ data.item.created_at | myDateGlobalWithHour }}</small>
          </template>

          <!-- Column: Assign To -->
          <template #cell(assign_to)="data">
            <small>{{ data.item.assign_to }}</small>
            <br />
            <small v-if="data.item.assign_date">{{ data.item.assign_date | myDateGlobal }}</small>
          </template>

          <!-- Column: Actions -->
          <template #cell(actions)="data">
            <actions-table
              :options="actionsOptions"
              :row-data="data.item"
              @onRowDelete="onRowDelete"
              @onRowProcess="onRowProcess"
              @modalSmsOpen="modalSmsOpen"
              @modalHistorySmsOpen="modalHistorySmsOpen"
            />
          </template>
        </b-table>
      </filter-slot>
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
        :modul="currentUser.modul_id"
        :typesms="typesms"
        :sms="leads_sms_o"
        :name-leads="name_leads_arr"
      />

      <template #modal-footer>
        <b-form-group label="VARS" class="w-100">
          <b-row>
            <b-col sm="3">
              <b-input-group size="sm">
                <b-input-group-prepend is-text>@1</b-input-group-prepend>
                <b-form-input placeholder="FIRST NAME" readonly />
              </b-input-group>
            </b-col>
            <b-col sm="3">
              <b-input-group size="sm">
                <b-input-group-prepend is-text>@2</b-input-group-prepend>
                <b-form-input placeholder="LAST NAME" readonly />
              </b-input-group>
            </b-col>
            <b-col v-if="currentUser.modul_id == 15" sm="3">
              <b-input-group size="sm">
                <b-input-group-prepend is-text>@3</b-input-group-prepend>
                <b-form-input placeholder="LAST NAME" readonly />
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
        :modul="currentUser.modul_id"
        :lead-name="historySms.leadName"
      />
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import { BTable, BPagination, BModal } from "bootstrap-vue";

import vSelect from "vue-select";

import ActionsTable from "../../lead-table/ActionsTable.vue";
import dataFields from "@/views/crm/views/Lead/lead-table/fields.data";
import dataFilters from "@/views/crm/views/Lead/lead-table/filtersLead.data";
import FilterSlot from "@/views/crm/views/sales-made/components/slots/FilterSlot.vue";
import FiltersTable from "../../lead-table/FiltersTable.vue";
import ModalHistorySms from "../../lead-sms/ModalHistorySms.vue";
import ModalSendSms from "../../lead-sms/ModalSendSms.vue";
import PaginateTable from "@/views/crm/views/Lead/lead-table/PaginateTable.vue";

export default {
  components: {
    FilterSlot,
    FiltersTable,
    ActionsTable,
    ModalSendSms,
    ModalHistorySms,

    BTable,
    BPagination,
    BModal,

    vSelect,
    PaginateTable
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      token: "auth/token",
      G_STATUS_LEADS: "CrmLeadStore/G_STATUS_LEADS",
      G_OWNERS: "CrmGlobalStore/G_OWNERS",
      G_PROGRAMS: "CrmGlobalStore/G_PROGRAMS",
      G_SOURCE_NAMES: "CrmGlobalStore/G_SOURCE_NAMES",
      G_STATES: "CrmGlobalStore/G_STATES",
      G_CRS: "CrmGlobalStore/G_CRS",
      G_TYPE_DOCS: "CrmGlobalStore/G_TYPE_DOCS"
    }),
    ...mapState({
      S_LEADS: state => state.CrmLeadStore.S_LEADS
    }),
    routeModule() {
      return this.$route.meta.route;
    }
  },
  data() {
    return {
      isOnlyLead: false,
      type: 0,
      actionsOptions: ["returnToSocialNetwork", "sendSMS", "historySMS"],
      baseUrl: process.env.VUE_APP_BASE_URL_ASSETS,
      isBusy: false,
      fields: dataFields.leadFields,
      filter: dataFilters,
      filterPrincipal: {
        type: "input",
        inputType: "text",
        placeholder: "Search...",
        model: ""
      },
      paginate: {
        currentPage: 1,
        perPage: 10
      },
      perPageOptions: [10, 25, 50, 100],
      sortBy: "id",
      isSortDirDesc: true,
      rowData: {},
      historySms: {
        leadName: "",
        id: null
      },
      name_leads_arr: [],
      leads_sms: [],
      selectAll: false,
      typesms: null,
      leads_sms_o: [],

      leadsSelecteds: []
    };
  },
  created() {
    this.myProvider();
    this.setOptionsOnFilters();
  },
  methods: {
    ...mapActions({
      A_GET_LEADS: "CrmLeadStore/A_GET_LEADS",
      A_SET_FILTERS_LEADS: "CrmLeadStore/A_SET_FILTERS_LEADS",
      A_SET_SELECTED_LEADS: "CrmLeadStore/A_SET_SELECTED_LEADS",
      A_DELETE_LEADS: "CrmLeadStore/A_DELETE_LEADS",
      A_PROCESS_LEADS: "CrmLeadStore/A_PROCESS_LEADS"
    }),
    resolveUserStatusVariant(status) {
      if (status === "Pending") return "warning";
      if (status === "Active") return "success";
      if (status === "Inactive") return "secondary";
      if (status === "Not Contacted") return "danger";
      return "primary";
    },
    selectedAll() {
      if (this.selectAll)
        this.S_LEADS.items.forEach(item => (item.selected = true));
      else this.S_LEADS.items.forEach(item => (item.selected = false));
      this.onRowSelected();
    },
    onSelectedRow(data) {
      const index = this.leadsSelecteds.findIndex(
        select => select.id === data.id
      );
      if (data.selected === true && index === -1)
        this.leadsSelecteds.push(data);
      else if (data.selected === false && index !== -1)
        this.leadsSelecteds.splice(index, 1);
      this.onRowSelected();
    },
    async myProvider() {
      try {
        this.setFilters();
        this.isBusy = true;
        await this.A_GET_LEADS({
          assign_to: this.filter[4].model,
          cr: this.filter[5].model,
          date_from: this.filter[0].model,
          date_to: this.filter[1].model,
          idrole: 1,
          iduser: 1,
          lead_status: this.filter[2].model,
          name_text: this.filterPrincipal.model,
          order: "desc",
          orderby: 10,
          program: this.filter[6].model,
          sourcename: this.filter[8].model,
          state_h: this.filter[7].model,
          typedoc: this.filter[9].model,
          user_owner: this.filter[3].model,
          perpage: this.paginate.perPage,
          page: this.paginate.currentPage
        });
        setTimeout(() => {
          this.isBusy = false;
        }, 500);
      } catch (error) {
        console.log("Somtehing went wrong myProvider", error);
        this.showToast(
          "danger",
          "top-right",
          "Oop!",
          "AlertOctagonIcon",
          this.getInternalErrors(error)
        );
      }
    },
    setOptionsOnFilters() {
      this.filter[2].options = this.G_STATUS_LEADS;
      this.filter[3].options = this.G_OWNERS;
      this.filter[4].options = this.G_OWNERS;
      this.filter[5].options = this.G_CRS;
      this.filter[6].options = this.G_PROGRAMS;
      this.filter[7].options = this.G_STATES;
      this.filter[8].options = this.G_SOURCE_NAMES;
      this.filter[9].options = this.G_TYPE_DOCS;
    },
    onChangeCurrentPage(e) {
      this.paginate.currentPage = e;
      this.myProvider();
    },
    setFilters() {
      this.A_SET_FILTERS_LEADS({
        from: this.filter[0].model,
        to: this.filter[1].model,
        statusLead: this.filter[2].model,
        owner: this.filter[3].model,
        assignTo: this.filter[4].model,
        cr: this.filter[5].model,
        program: this.filter[6].model,
        stAd: this.filter[7].model,
        sourceName: this.filter[8].model,
        typeDoc: this.filter[9].model,
        perPage: this.paginate.perPage,
        currentPage: this.paginate.currentPage
      });
    },
    onRowSelected() {
      this.A_SET_SELECTED_LEADS(this.leadsSelecteds);
    },
    onRowDelete(id) {
      this.showSwalGeneric(
        "Are you sure?",
        "You won't be able to revert this!",
        "question"
      )
        .then(async result => {
          if (result.value) {
            const { user_id, role_id } = this.currentUser;
            const response = await this.A_DELETE_LEADS({
              leadid: id,
              idsession: user_id,
              iduser: user_id,
              idrole: role_id
            });
            if (this.isResponseSuccess(response)) {
              this.showToast(
                "success",
                "top-right",
                "Deleted!",
                "CheckIcon",
                "Your file has been deleted."
              );
            } else {
              this.showToast(
                "warning",
                "top-right",
                "Warning!",
                "AlertTriangleIcon",
                `Something went wrong.${response.message}`
              );
            }
          }
        })
        .catch(error => {
          console.log("Something went wrong onRowDelete:", error);
          this.showErrorSwal(error);
        });
    },
    onRowProcess(id) {
      this.showSwalGeneric(
        "Are you sure?",
        "You won't be able to revert this!",
        "warning",
        {
          input: "textarea",
          inputValidator: value => {
            if (!value) {
              return "You need to write something!";
            }
          }
        }
      )
        .then(async result => {
          if (result.value) {
            const { user_id, role_id } = this.currentUser;
            const response = await this.A_PROCESS_LEADS({
              lead_id: id,
              status: 3,
              user_id,
              description: result.value
            });
            if (this.isResponseSuccess(response)) {
              this.showToast(
                "success",
                "top-right",
                "Success!",
                "CheckIcon",
                "Successful operation"
              );
            } else {
              this.showToast(
                "warning",
                "top-right",
                "Warning!",
                "AlertTriangleIcon",
                `Something went wrong.${response.message}`
              );
            }
          }
        })
        .catch(error => {
          console.log("Something went wrong onRowProcess:", error);
          this.showErrorSwal(error);
        });
    },
    modalSmsOpen(item) {
      this.rowData = item;
      this.leads_sms = [];
      this.typesms = 1;
      this.leads_sms_o = [];
      this.leads_sms_o.push(item.id);
      this.name_leads_arr = [{ name: item.lead_name, id: item.id }];
      this.$bvModal.show("modal-send-sms");
    },
    modalHistorySmsOpen(item) {
      this.historySms.id = item.id;
      this.historySms.leadName = item.lead_name;
      this.$bvModal.show("modal-history-sms");
    },
    modalSmssOpen() {
      this.typesms = 0;
      this.name_leads_arr = this.leadsSelecteds.map(el => ({
        name: el.lead_name,
        id: el.id
      }));
      this.leads_sms = this.leadsSelecteds.map(el => el.id);
      this.$bvModal.show("modal-send-sms");
    },
    resetQuickData(item) {
      this.quickData = item;
    }
  },
  mounted() {
    if (![4].includes(this.currentUser.role_id) && !this.isOnlyLead)
      this.fields.unshift({
        key: "selected",
        label: "",
        sortable: false
      });
    if ([1, 2].includes(this.currentUser.role_id) && this.type === 0)
      this.actionsOptions.push("delete");
  }
};
</script>

<style lang="scss" scoped>
.table-responsive > div {
  min-height: 15rem;
}
</style>
