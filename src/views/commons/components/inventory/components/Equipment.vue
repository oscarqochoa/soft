<template>
  <div>
    <b-tabs pills lazy
    active-nav-item-class="bg-important border-0 shadow-none">
      <b-tab title="Available" v-if="[19, 16, 12].includes($route.meta.module)">
        <!-- <pending-done active
         :status="1"
        /> -->
      </b-tab>
      <b-tab title="Assigned">
        <!-- <pending-done
          :status="2"
        /> -->
        <b-card no-body>
          <inventory-grid
            :global="currentUser"
            :module="$route.meta.module"
            :statusEquipment="2"
          ></inventory-grid>
        </b-card>
      </b-tab>
      <b-tab title="To Repair" v-if="[19, 12].includes($route.meta.module)">
        <!-- <pending-done
          :status="2"
        /> -->
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import InventoryGrid from "./InventoryGrid.vue";
export default {
  components: {
    InventoryGrid,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
};
</script>