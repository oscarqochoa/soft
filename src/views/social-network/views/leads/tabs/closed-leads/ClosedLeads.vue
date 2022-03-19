<template>
  <div>
    <!-- Table Container Card -->
    <b-card no-body class="mb-0">
      <filter-slot
        v-scrollbar
        :filter="filters"
        :filter-principal="filterPrincipal"
        :total-rows="totalLeads"
        :paginate="paginate"
        :start-page="fromPage"
        :to-page="toPage"
        :send-multiple-sms="false"
        @reload="getSocialNetworkLeadsPotential"
        @onChangeCurrentPage="onChangeCurrentPage"
      >
        <b-table
          slot="table"
          class="position-relative"
          ref="refUserListTable"
          primary-key="id"
          empty-text="No matching records found"
          select-mode="multi"
          responsive="sm"
          table-class="text-nowrap"
          sticky-header="50vh"
          small
          show-empty
          :sort-by.sync="sortBy"
          :fields="fields"
          :items="S_LEADS.items"
          :sort-desc.sync="isSortDirDesc"
          :busy.sync="isBusy"
        >

          <template #table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner class="align-middle mr-1" />
              <strong>Loading ...</strong>
            </div>
          </template>

          <template #cell(nickname)="data">
            <div style="white-space: pre-wrap;">
              <router-link :to="{ name: 'sn-dashboard-old-lead' }">
                {{ data.item.nickname }}
              </router-link>
              <br>
              {{ data.item.nickname }}
            </div>
          </template>

          <template #cell(source)="data">
            <div>
                <b-img
                  fluid
                  :src="baseUrl + '/images/social-network/facebook.png'"
                  style="width: 30px"
                  v-if="data.item.sourcesname_id == 17"
                />
                <b-img
                  fluid
                  :src="baseUrl + '/images/social-network/facebook.png'"
                  style="width: 30px"
                  v-if="data.item.sourcesname_id == 32"
                />
            </div>
          </template>

          <template #cell(status)="data">
            <div>
              <b-badge
                pill
                :variant="data.item.status | variant"
                class="text-capitalize"
              >
                {{ data.item.status }}
              </b-badge>
            </div>
          </template>

          <template #cell(program)="data">
            <div>
              <b-img
                :src="data.item.program_name | renderProgramLogo"
                style="height: 40px"
              />
            </div>
          </template>

          <template #cell(recomendations)="data">
            <div>
              <small
                v-for="(program, index) in JSON.parse(data.item.programs)"
                :key="index"
              >
                {{ program }} <br />
              </small>
            </div>
          </template>

          <!-- Column: Created Date -->
          <template #cell(owner)="data">
            <small>{{ data.item.owner }}</small>
            <br>
            <small>{{ data.item.created_at | myGlobalDay }}</small>
          </template>

          <!-- Column: Tracking -->
          <template #cell(tracking)="data">
            <div class="text-center">
                <feather-icon
                  icon="ListIcon"
                  size="15"
                  class="text-primary cursor-pointer"
                  @click="openModalTracking(data.item.id, data.item.nickname)"
                />
            </div>
          </template>

          <template #cell(actions)="data">
            <actions-table
              :id="data.item.id"
              @onProcessLead="onProcessLead"
              @onDeleteLead="deleteLead"
            ></actions-table>
          </template>

           <!-- div(style="width: 110px")
              select.float-left(
                :id="'status_' + lead.id",
                @change="processLead(lead.id)",
                v-if="lead.status_sn_id != 7",
                style="width: 75px"
              )
                option(disabled, selected)
                option(value="1") IN CATCHER
                option(value="5") RECOVERY
                option(value="7") APPROVE -->

        </b-table>
      </filter-slot>
    </b-card>

    <modal-tracking
      v-if="showModalTracking"
      :show="showModalTracking"
      :name="nameLeadSelected"
      @onClose="closeModalTracking"
    ></modal-tracking>

  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import dataFilters from "./filters.data";
import Fields from "./fields.data";
import {swalErrorIcon, swalInfoIcon, swalSuccessIcon, swalWarningIcon} from "@/icons/statusIcons";

// Components
import ModalTracking from "../../components/ModalTracking.vue";
import ActionsTable from "./components/ActionsTable.vue";

export default {
  components: {
    "modal-tracking": ModalTracking,
    "actions-table": ActionsTable,
  },
  data() {
    return{
      baseUrl: process.env.VUE_APP_BASE_URL_ASSETS,
      filters: dataFilters,
      filterPrincipal: {
        type: "input",
        inputType: "text",
        placeholder: "Search...",
        model: ""
      },
      totalLeads: 0,
      paginate: {
        currentPage: 1,
        perPage: 10
      },
      fromPage: 0,
      toPage: 0,
      sortBy: "id",
      fields: Fields,
      isSortDirDesc: true,
      isBusy: false,
      showModalTracking: false,
      nameLeadSelected: "",
    }
    
  },
  computed: {
    ...mapState('SocialNetworkLeadsStore',['S_LEADS']),
    ...mapState('auth',['currentUser']),
    
  },
  created() {
    this.getSocialNetworkLeadsPotential();
  },
  methods: {
    ...mapActions('SocialNetworkLeadsStore', ['A_SET_FILTERS', 'A_GET_NEW_LEADS', 'A_GET_TRACKING_NEW_LEADS', 'A_DELETE_LEAD']),
    ...mapActions('CrmLeadStore', ['A_PROCESS_LEADS']),
    ...mapMutations('SocialNetworkLeadsStore', ['REMOVE_LEAD_DATA']),
    async getSocialNetworkLeadsPotential() {
      try {
        this.isBusy = true;
        this.setFilters();
        const response = await this.A_GET_NEW_LEADS({
          name_text: this.filterPrincipal.model,
          lead_status: null,
          cr: null,
          program: null,
          date_from: this.filters[0].model,
          date_to: this.filters[1].model,
          orderby: 10,
          order: "desc",
          user_owner: null,
          iduser: this.currentUser.user_id,
          idrole: this.currentUser.role_id,
          user_catcher: null,
          fanpage: null,
          type: 2,
          sourcename: null,
          perpage: this.paginate.perPage,
          page: this.paginate.currentPage,
        });
        this.totalLeads = response.total;
        this.fromPage = response.from;
        this.toPage = response.to;
        this.isBusy = false;
      } catch (error) {
        console.log("Somtehing went wrong getSocialNetworkLeadsPotential", error);
        this.showToast(
          "danger",
          "top-right",
          "Oop!",
          "AlertOctagonIcon",
          this.getInternalErrors(error)
        );
      }
    },
    async openModalTracking(id, name) {
      await this.A_GET_TRACKING_NEW_LEADS({
        lead_id: id,
      });
      this.nameLeadSelected = name;
      this.showModalTracking = true;
    },
    closeModalTracking() {
      this.showModalTracking = false;
    },


    onProcessLead(lead_id, status) {
      this.showConfirmSwal(
          "Are you sure?",
          "You won't be able to revert this!",
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
                lead_id: lead_id,
                status: status,
                user_id,
                description: result.value
              });
              if (this.isResponseSuccess(response)) {
                await this.REMOVE_LEAD_DATA({destination: "S_LEADS", id: lead_id})

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

    async deleteLead(id) {
      const result = await this.showConfirmSwal(
        "Are you sure?",
        "You won't be able to revert this!",
        "question"
      )
      if (result.value) {
          const { user_id } = this.currentUser;
          const response = await this.A_DELETE_LEAD({
            lead_id: id,
            user_id: user_id,
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
    },


    onChangeCurrentPage(e) {
      this.paginate.currentPage = e;
      this.getSocialNetworkLeadsPotential();
    },
    setFilters() {
      this.A_SET_FILTERS({
        from: this.filters[0].model,
        to: this.filters[1].model,
      });
    },
  },
  mounted() {
    if ([1, 2].includes(this.currentUser.role_id) && this.type === 0)
      this.actionsOptions.push("delete");
  }
}
</script>