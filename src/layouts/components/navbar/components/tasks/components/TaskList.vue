<template>
  <div>
    <b-card no-body class="mb-1">
      <div class="m-2">
        <!-- Table Top -->
        <b-row>
          <!-- Per Page -->
          <b-col cols="12" md="6"> </b-col>
          <!-- Search -->
          <b-col cols="12" md="6">
            <div
              class="
                d-flex
                align-items-center
                justify-content-end
                align-items-center
              "
            >
              <b-button
                variant="primary"
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              >
                <div class="d-flex justify-content-between">
                  <span class="text-nowrap"> Export to excel </span>
                </div>
              </b-button>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="table-responsive">
        <b-table
          ref="refTaskGrid"
          api-url="/alltasks"
          class="position-relative"
          :items="myProvider"
          :fields="arrayColumns"
          primary-key="id"
          table-class="text-nowrap"
          responsive="sm"
          show-empty
          sticky-header="50vh"
          :busy="isBusy"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="searchInput"
          v-scrollbar
        >
          <template #table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner class="align-middle mr-1" />
              <strong>Loading ...</strong>
            </div>
          </template>
          <template #cell(client_name)="data">
            <b-link class="text-important">
              {{ data.item.client_name }}
            </b-link>
            <br />
            <span>
              <amg-icon icon="SmartphoneIcon"></amg-icon> {{ data.item.mobile }}
            </span>
          </template>
          <template #cell(due_date)="data">
            {{ data.item.due_date | myGlobalDay }} <br />
            <span style="font-weight: bold">
              {{ data.item.real_time | myGlobalDay }} ({{
                data.item.state_hour
              }})
            </span>
          </template>
          <template #cell(actions)="data">
            <div class="d-flex justify-content-between align-items-center">
              <span v-if="type != 4">
                <amg-icon
                  icon="CheckIcon"
                  size="20"
                  class="text-success cursor-pointer"
                  @click="checkTask(data.item.id)"
                  v-b-tooltip.hover.top="'Complete'"
                />
              </span>
              <span v-if="type != 4">
                <amg-icon
                  icon="Edit2Icon"
                  size="16"
                  class="text-warning cursor-pointer"
                  v-b-tooltip.hover.top="'Edit'"
                />
              </span>
              <span>
                <amg-icon
                  icon="EyeIcon"
                  size="16"
                  class="text-info cursor-pointer"
                  v-b-tooltip.hover.top="'View'"
                /> </span
              ><span v-if="type != 4">
                <amg-icon
                  icon="TrashIcon"
                  size="16"
                  class="text-danger cursor-pointer"
                  v-b-tooltip.hover.top="'Delete'"
                  @click="deleteTask(data.item.id)"
                />
              </span>
            </div>
          </template>
        </b-table>
      </div>
      <div class="mx-2 mb-2">
        <b-row>
          <b-col
            cols="12"
            sm="6"
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-start
            "
          >
            <span class="text-muted">
              Showing {{ startPage }} to {{ toPage }} of {{ totalData }} entries
            </span>
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-end
            "
          >
            <b-pagination
              v-model="currentPage"
              :total-rows="totalData"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon icon="ChevronLeftIcon" size="18" />
              </template>
              <template #next-text>
                <feather-icon icon="ChevronRightIcon" size="18" />
              </template>
            </b-pagination>
          </b-col>
        </b-row>
      </div>
    </b-card>
  </div>
</template>
<script>
import vSelect from "vue-select";
import Ripple from "vue-ripple-directive";
import TaskService from "@/service/task/index.js";
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    type: {
      type: [Number, String],
      default: 1,
    },
  },
  directives: {
    Ripple,
  },
  components: {
    vSelect,
  },
  data() {
    return {
      sortBy: "client_name",
      sortDesc: true,
      arrayColumns: [
        {
          key: "client_name",
          label: "Client Name",
          sortable: true,
          visible: true,
        },
        {
          key: "subject",
          label: "Subject",
          sortable: true,
          visible: true,
        },
        {
          key: "due_date",
          label: "Date / Hour",
          visible: true,
        },
        { key: "actions", label: "Actions" },
      ],
      searchInput: "",
      orderby: "",
      order: "",
      startPage: "",
      endPage: "",
      totalData: "",
      perPage: 1000,
      nextPage: "",
      currentPage: 1,
      toPage: "",
      isBusy: false,
      perPageOptions: [10, 25, 50, 100],
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  methods: {
    ...mapActions({
      A_GET_TASK_COUNTER: "TaskStore/A_GET_TASK_COUNTER",
    }),
    async myProvider(ctx) {
      let params = {
        api_url: ctx.apiUrl,
        current_page: ctx.currentPage,
        num: ctx.perPage,
        order: ctx.sortDesc == 1 ? "desc" : "asc",
        orderby: 5,
        type: this.type,
        id: this.currentUser.user_id,
      };
      const data = await TaskService.getAllTask(params);
      const items = data.data;
      this.startPage = data.from;
      this.currentPage = data.current_page;
      this.perPage = data.per_page;
      this.nextPage = this.startPage + 1;
      this.endPage = data.last_page;
      this.totalData = data.total;
      this.toPage = data.to;
      // Must return an array of items or an empty array if an error occurred
      return items || [];
    },
    resetSearch() {
      this.$refs.refTaskGrid.refresh();
    },
    async checkTask(taskId) {
      const confirm = await this.showConfirmSwal();
      if (confirm.value) {
        this.addPreloader();
        try {
          const data = await TaskService.postCheckTask({ id: taskId });
          this.removePreloader();
          this.showToast(
            "success",
            "top-right",
            "Congratulation!",
            "CheckIcon",
            "Task has been checked successfully"
          );
          this.A_GET_TASK_COUNTER({ id: this.currentUser.user_id });
          this.$refs.refTaskGrid.refresh();
        } catch (error) {
          this.showToast(
            "error",
            "top-right",
            "Oops!",
            "XIcon",
            "There was an error while deleting the task"
          );
          this.removePreloader();
          throw error;
        }
      }
    },
    async deleteTask(taskId) {
      const confirm = await this.showConfirmSwal();
      if (confirm.value) {
        this.addPreloader();
        try {
          const data = await TaskService.deleteTaskCredit({ id: taskId });
          this.removePreloader();
          this.showToast(
            "success",
            "top-right",
            "Congratulation!",
            "CheckIcon",
            "Task has been deleted successfully"
          );
          this.A_GET_TASK_COUNTER({ id: this.currentUser.user_id });
          this.$refs.refTaskGrid.refresh();
        } catch (error) {
          this.showToast(
            "error",
            "top-right",
            "Oops!",
            "XIcon",
            "There was an error while deleting the task"
          );
          this.removePreloader();
          throw error;
        }
      }
    },
  },
};
</script>


<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
@import "@core/scss/vue/libs/vue-sweetalert.scss";
</style>
