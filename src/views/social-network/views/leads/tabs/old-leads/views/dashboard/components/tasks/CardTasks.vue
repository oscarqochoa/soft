<template>
  <b-card body-class="px-0">
    <template #header>
      <b-card-title> Tasks </b-card-title>
    </template>

    <b-tabs
      pills
      nav-class="mb-0 mt-1 ml-1"
      active-nav-item-class="bg-primary box-shadow-info"
    >
      <b-tab title="CRM" @click="searchTasks(0)">
        <table-tasks :fields="fields" :items="tasks" :lead="lead"></table-tasks>
        <div class="text-right">
          <b-button
            variant="primary"
            class="mt-2 mr-1"
            size="sm"
            @click="openModalAddTask"
          >
            ADD
          </b-button>
        </div>
      </b-tab>
      <b-tab title="SN" @click="searchTasks(1)">
        <table-tasks :fields="fields" :items="tasks" :lead="lead"></table-tasks>
        <div class="text-right">
          <b-button variant="primary" class="mt-2 mr-1" size="sm">
            ADD
          </b-button>
        </div>
      </b-tab>
    </b-tabs>

    <modal-add-task
      :show="showModalAddTask"
      @onClose="closeModalAddTask"
    ></modal-add-task>

    <modal-view-task
      :show="showModalViewTask"
      @onClose="closeModalViewTask"
    ></modal-view-task>
  </b-card>
</template>

<script>
// Components
import TableTasks from "./TableTasks.vue";
import ModalAddTask from "./ModalAddTask.vue";
import ModalViewTask from "./ModalViewTask.vue";

// Services
import SnLeadsService from "@/views/social-network/services/leads";

export default {
  props: {
    lead: {
      type: Object,
    },
  },
  components: {
    TableTasks,
    ModalAddTask,
    ModalViewTask,
  },
  data() {
    return {
      // Modals
      showModalAddTask: false,
      showModalViewTask: false,

      isCrm: true,

      tasks: [],
    };
  },
  computed: {
    fields() {
      return [
        { key: "subject", label: "Subject" },
        { key: "date", label: "Date/Hour" },
        { key: "sms", label: "Sms" },
        this.isCrm ? { key: "type", label: "Type" } : null,
        { key: "actions", label: "Actions" },
      ];
    },
  },
  methods: {
    openModalAddTask() {
      this.showModalAddTask = true;
    },
    closeModalAddTask() {
      this.showModalAddTask = false;
    },
    openModalViewTask() {
      this.showModalViewTask = true;
    },
    closeModalViewTask() {
      this.showModalViewTask = false;
    },
    async searchTasks(type) {
      try {
        this.tasks = [];

        let idParam = this.$route.params.id;

        type == 0 ? (this.isCrm = true) : (this.isCrm = false);

        const response = await SnLeadsService.getLeadTasks({
          lead_id: idParam,
          taskForSn: type,
        });

        if (response.status == 200) {
          this.tasks = response.data;
        }
      } catch (error) {
        throw error;
      }
    },
  },
  created() {
    this.searchTasks(0);
  },
};
</script>

<style lang="scss">
.card-tasks {
  overflow: auto;
  max-height: 680px !important;
}
</style>