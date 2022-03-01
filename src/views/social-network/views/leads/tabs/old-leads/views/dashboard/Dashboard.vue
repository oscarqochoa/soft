<template>
  <div>
    <header-slot>
      <b-row slot="actions" class="justify-content-end">
        <b-button
          variant="primary"
          class="mr-1"
          :to="{ name: 'sn-create-new-lead' }"
        >
          <feather-icon
            icon="PlusIcon"
            size="15"
            class="mr-50 text-white"
          ></feather-icon>
          CREATE
        </b-button>
        <b-button
          variant="success"
          class="mr-1"
          :to="{ name: 'sn-create-new-lead' }"
        >
          <feather-icon
            icon="MessageCircleIcon"
            size="15"
            class="mr-50 text-white"
          ></feather-icon>
          SEND SMS
        </b-button>
      </b-row>
    </header-slot>

    <b-row class="card-group">
      <b-col md="6">
        <card-client :data="lead" />
      </b-col>
      <b-col md="6">
        <card-notes />
      </b-col>
      <b-col md="6">
        <card-tasks />
      </b-col>
      <b-col md="6">
        <card-files />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CardClient from "./components/CardClient.vue";
import CardNotes from "./components/CardNotes.vue";
import CardTasks from "./components/CardTasks.vue";
import CardFiles from "./components/CardFiles.vue";

// Services
import SnLeadsService from "@/views/social-network/services/leads";

export default {
  components: {
    "card-client": CardClient,
    "card-notes": CardNotes,
    "card-tasks": CardTasks,
    "card-files": CardFiles,
  },
  data() {
    return {
      lead: {},
    };
  },
  computed: {},
  methods: {
    async getLead() {
      try {
        this.addPreloader();
        let idParam = this.$route.params.id;
        const response = await SnLeadsService.getOldLead(idParam);

        if (response.status == 200) {
          this.lead = response.data[0];
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();
        throw error;
      }
    },
  },
  async created() {
    await this.getLead();
  },
};
</script>

<style lang="scss" >
.card-group > div > .card {
  height: calc(100% - 2rem);
  min-height: 350px;
  > .card-header {
    border-bottom: 1px solid rgb(80 85 99 / 50%);
    margin-bottom: 1.5rem;
    .card-title {
      font-weight: bold;
    }
  }
}
</style>