<template>
    <div>
        <b-card no-body>
          <!-- <inventory-grid
            :global="currentUser"
            :module="$route.meta.module"
            :statusEquipment="3"
          ></inventory-grid> -->
           <request-equipment-grid
            :global="currentUser"
            :module="$route.meta.module"
            :statusEquipment="3"
            ></request-equipment-grid>
        </b-card>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import RequestEquipmentGrid from "./subcomponents/RequestEquipmentGrid.vue"
export default {
  components: {
    RequestEquipmentGrid,
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