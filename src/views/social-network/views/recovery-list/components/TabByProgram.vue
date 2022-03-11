<template>
  <div>
    <b-card no-body class="mb-1">
      <filter-slot
        :filter="filter"
        :filter-principal="filterPrincipal"
        :total-rows="totalRows"
        :no-visible-principal-filter="true"
        :paginate="paginate"
        :start-page="startPage"
        :to-page="toPage"
        :send-multiple-sms="false"
        @reload="$refs['refClientsList'].refresh()"
      >
        <!-- Slot Counters -->
        <template #recovery-list>
          <b-row class="ml-2">
            <!-- Count Pending -->
            <b-col cols="10" sm="6" md="5" lg="4" xl="3">
              <b-form-group
                label="Pending"
                label-cols="4"
                content-cols="8"
                label-cols-sm="5"
                content-cols-sm="6"
                label-cols-md="3"
                content-cols-md="6"
                label-cols-lg="3"
                content-cols-lg="6"
                label-class=""
              >
                <div>
                  <div
                    class="text-center class-coco-campo-text rounded text-white font-medium-1 px-1"
                    style="padding-top: 5px; padding-bottom: 5px; background: linear-gradient(90deg, #FAC632 0%, #F37432 100%);"
                  >
                    {{ countPendingTask }}
                  </div>
                </div>
              </b-form-group>
            </b-col>
            <!-- Count Done -->
            <b-col cols="10" sm="6" md="5" lg="4" xl="3">
              <b-form-group
                label="Done"
                label-cols="4"
                content-cols="8"
                label-cols-sm="5"
                content-cols-sm="6"
                label-cols-md="3"
                content-cols-md="6"
                label-cols-lg="3"
                content-cols-lg="6"
                label-class=""
              >
                <div>
                  <div
                    class="text-center class-coco-campo-text  rounded text-white font-medium-1 px-1"
                    style="padding-top: 5px; padding-bottom: 5px;background: linear-gradient(90deg, #ADD210 0%, #5F873E 100%);"
                    
                  >
                    {{ countDoneTask }}
                  </div>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
        </template>
        <b-table
          slot="table"
          no-provider-filtering
          :api-url="clientRoute"
          ref="refClientsList"
          :items="myProvider"
          :fields="arrayColumns"
          primary-key="id"
          table-class="text-nowrap"
          responsive="sm"
          show-empty
          sticky-header="50vh"
          :busy="isBusy"
          :current-page="paginate.currentPage"
          :per-page="paginate.perPage"
        >
          <template #table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner class="align-middle mr-1"></b-spinner>
              <strong>Loading ...</strong>
            </div>
          </template>
          <!-- COLUMN NAME LEAD -->
          <template #cell(fullNameLead)="data">
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <!-- Route To Lead Show -->
              <router-link
                :class="textLink"
                :to="{
                  name: 'lead-show',
                  params: { id: data.item.lead_id },
                }"
                target="_blank"
                >{{ data.item.fullNameLead }}</router-link
              >
            </div>
          </template>
          <!-- COLUMN CREATE DATE -->
          <template #cell(created_at)="data">
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span>{{ data.item.created_at | myGlobalDay }}</span>
            </div>
          </template>
          <!-- COLUMN LEAD CREATED AT -->
          <template #cell(leadCreated)="data">
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span>{{ data.item.leadCreated | myGlobalDay }}</span>
            </div>
          </template>
          <!-- COLUMN DONE -->
          <template #cell(done)="data">
            <div
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <b-form-checkbox
                :disabled="statusUserRedirected"
                v-model="data.item.status"
                :value="1"
                @change="changeStatusLead(data.item)"
              ></b-form-checkbox>
            </div>
          </template>
        </b-table>
      </filter-slot>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
// Import Filter
import FilterSlot from "@/views/crm/views/sales-made/components/slots/FilterSlot.vue"
// Import Service
import RecoveryListService from "../service/recovery.list.service"
// Import Data
import fields from "../data/fields.recovery.list.data"
import filtersList from "../data/filters.recovery.list.data"
export default {
  components: {
    FilterSlot,
  },
  props: {
    programId: {
      type: [Number, String],
    },
    userId: {
      type: [Number, String],
    },
  },
  data() {
    return {
      filter: filtersList,
      arrayColumns: fields,
      totalRows: 0,
      paginate: {
        currentPage: 1,
        perPage: 10,
      },
      startPage: null,
      toPage: null,
      isBusy: false,
      sortBy: "created_at",
      sortDesc: true,
      searchInput: "",
      filterPrincipal: {
        type: "input",
        inputType: "text",
        placeholder: "Client...",
        model: "",
      },
      countPendingTask: 0,
      countDoneTask: 0,
    }
  },
  computed: {
    statusUserRedirected() {
      return this.userId != null ? true : false
    },
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
    clientRoute(){
      return "/social-network/recovery-list/search-recovery-by-user"
    },
  },
  methods: {
    myProvider: async function (ctx) {
      try {
        const data = await amgApi.post(`${ctx.apiUrl}`, {
          npage: this.paginate.currentPage,
          perPage: this.paginate.perPage,
          date_from: this.filter[0].model,
          date_to: this.filter[1].model,
          id_user:
            this.userId != null
              ? parseInt(this.userId)
              : this.currentUser.user_id,
          id_program: this.programId,
          status: this.filter[2].model,
          update_id: "",
        })
        const items = data.data.data
        this.startPage = data.data.from
        this.currentPage = data.data.current_page
        this.perPage = data.data.per_page
        this.nextPage = this.startPage + 1
        this.endPage = data.data.last_page
        this.totalRows = data.data.total
        this.toPage = data.data.to
        if (data.data.data[0] != null) {
          this.countPendingTask = data.data.data[0].quantity_pending
          this.countDoneTask = data.data.data[0].quantity_done
          if(this.currentUser.role_id == 11){
            let taskCompleted = this.countDoneTask - this.countPendingTask == this.countDoneTask ? true : false
          // this.statusButton = taskCompleted
            this.$emit("statusCompletedTask",taskCompleted)
          }
        }
        return items || []
      } catch (error) {
        console.error(error)
        return []
      }
    },

    changeStatusLead: async function (Lead) {
      try {
        let params = {
          date_from: null,
          date_to: null,
          id_user: this.currentUser.user_id,
          id_program: this.programId,
          status: Lead.status == "1" ? 1 : 0,
          update_id: Lead.id,
        }
        const data = await RecoveryListService.searchRecoveryList(params)
        this.countPendingTask = data.data.data[0].quantity_pending
        this.countDoneTask = data.data.data[0].quantity_done
        let countDone = parseInt(data.data.data[0].count_done)
        let countPending = parseInt(data.data.data[0].count_pending)
        let taskCompleted = countDone - countPending == countDone ? true : false
        this.$emit("TaskCompleted", taskCompleted)
         this.$emit("statusCompletedTask",taskCompleted)
      } catch (error) {
        console.log(error)
        this.showToast(
          "danger",
          "top-right",
          "Error",
          "XIcon",
          "Something went wrong with data!"
        )
      }
    },
  },
}
</script>
