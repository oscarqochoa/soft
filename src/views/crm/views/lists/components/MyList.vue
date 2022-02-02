<template>
  <div>
    <b-card body-class="px-0">
      <b-tabs
        active-tab-class="p-0 "
        pills
        card
        :nav-wrapper-class="[bgLightDark, 'pb-0']"
        nav-class="mb-0"
        active-nav-item-class="bg-info box-shadow-info border-info"
      >
        <b-tab title="Pending">
          <pending-done active :status="1" />
        </b-tab>
        <b-tab title="Done">
          <pending-done :status="2" />
        </b-tab>
      </b-tabs>
    </b-card>

    <!-- <b-tabs pills lazy active-nav-item-class="bg-important box-shadow-important border-important">
      <b-tab title="Pending" title-link-class="border-secondary ml-1 hover-important">
        <pending-done active :status="1" />
      </b-tab>
      <b-tab title="Done" title-link-class="border-secondary ml-1 hover-important">
        <pending-done :status="2" />
      </b-tab>
    </b-tabs>-->
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