<template>
  <div>
    <b-tabs
      pills
      lazy
      active-nav-item-class="bg-important border-0 shadow-none"
    >
      <b-tab title="Pending">
        <justification-pending />
      </b-tab>
      <b-tab title="Done"> <justification-done /> </b-tab>
    </b-tabs>
  </div>
</template>
<script>
import JustificationPending from "./Justify/ComponentPending.vue";
import JustificationDone from "./Justify/ComponentDone.vue";
export default {
  components: {
    JustificationPending,
    JustificationDone,
  },
};
</script>