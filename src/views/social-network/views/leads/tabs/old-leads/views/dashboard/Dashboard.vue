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

    <b-row>
      <b-col md="6">
        <card-client />
      </b-col>
      <b-col md="6">
        <card-tasks />
      </b-col>
      <b-col md="6">
        <card-notes />
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

export default {
  components: {
    "card-client": CardClient,
    "card-notes": CardNotes,
    "card-tasks": CardTasks,
    "card-files": CardFiles,
  },
};
</script>

<style>
</style>