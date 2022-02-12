<template>
  <div class="p-2">
    <b-tabs
      lazy
      active-tab-class="p-0 "
      pills
      nav-class="mb-0"
      active-nav-item-class="bg-info box-shadow-info border-info info"
    >
      <b-tab title="Pending" :title-link-class="[bgTabsNavs, 'sub-tab px-3']">
        <pending-done active :status="1" />
      </b-tab>
      <b-tab title="Done" :title-link-class="[bgTabsNavs, 'sub-tab px-3']">
        <pending-done :status="2" />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import PendingDone from "./subcomponents/PendingDone.vue";

export default {
  components: {
    PendingDone
  }
};
</script>