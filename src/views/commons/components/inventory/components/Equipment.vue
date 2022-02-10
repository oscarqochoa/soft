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
        <b-tab title="Available" v-if="[19, 16, 12].includes($route.meta.module)"></b-tab>
        <b-tab title="Assigned">
          <b-card no-body>
            <inventory-grid :global="currentUser" :module="$route.meta.module" :statusEquipment="2"></inventory-grid>
          </b-card>
        </b-tab>
        <b-tab title="To Repair" v-if="[19, 12].includes($route.meta.module)"></b-tab>
      </b-tabs>
    </b-card>
    <!-- <b-tabs pills lazy active-nav-item-class="bg-important box-shadow-important border-important">
      <b-tab
        title="Available"
        v-if="[19, 16, 12].includes($route.meta.module)"
        
      ></b-tab>
      <b-tab title="Assigned" >
        <b-card no-body>
          <inventory-grid :global="currentUser" :module="$route.meta.module" :statusEquipment="2"></inventory-grid>
        </b-card>
      </b-tab>
      <b-tab
        title="To Repair"
        v-if="[19, 12].includes($route.meta.module)"
        
      ></b-tab>
    </b-tabs>-->
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