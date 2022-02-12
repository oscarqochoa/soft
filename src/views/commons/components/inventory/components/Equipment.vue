<template>
  <div class="p-1 px-2">
    <b-tabs
      lazy
      active-tab-class="p-0 "
      pills
      nav-class="mb-0"
      active-nav-item-class="bg-info box-shadow-info border-info info"
    >
      <b-tab
        :title-link-class="[bgTabsNavs, 'sub-tab px-3']"
        title="Available"
        v-if="[19, 16, 12].includes($route.meta.module)"
      ></b-tab>
      <b-tab :title-link-class="[bgTabsNavs, 'sub-tab px-3']" title="Assigned">
        <b-card no-body>
          <inventory-grid :global="currentUser" :module="$route.meta.module" :statusEquipment="2"></inventory-grid>
        </b-card>
      </b-tab>
      <b-tab title="To Repair" v-if="[19, 12].includes($route.meta.module)"></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import InventoryGrid from "./InventoryGrid.vue";
export default {
  components: {
    InventoryGrid
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser"
    })
  }
};
</script>