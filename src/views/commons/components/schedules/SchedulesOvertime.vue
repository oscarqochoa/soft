<template>
  <div>
    <b-tabs
      pills
      lazy
      active-nav-item-class="bg-important border-0 shadow-none"
    >
      <b-tab title="Pending">
        <overtime-pending />
      </b-tab>
      <b-tab title="Done"> <overtime-done /> </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import OvertimePending from "./overtime/ComponentPending.vue";
import OvertimeDone from "./overtime/ComponentDone.vue";
export default {
  components: {
    OvertimePending,
    OvertimeDone,
  },
};
</script>