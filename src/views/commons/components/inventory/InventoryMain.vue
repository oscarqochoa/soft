<template>
  <div>
    <div class="m-2">
      <b-row>
        <b-col
          cols="12"
          md="6"
          lg="6"
          sm="6"
          class="d-flex align-items-start justify-content-start mb-1 mb-md-0"
        >
        </b-col>
        <b-col
          cols="12"
          md="6"
          lg="6"
          sm="6"
          class="d-flex align-items-end justify-content-end mb-1 mb-md-0"
        >
          <b-button @click="openModalRequest()"
          v-if="![1,19].includes($route.meta.module)"
          variant="success"> REQUEST EQUIPMENT </b-button>
        </b-col>
      </b-row>
    </div>
    <b-nav pills>
      <b-nav-item
        :to="{ name: 'inventory-crm-equipment' }"
        exact
        exact-active-class="active"
        >Equipment</b-nav-item
      >
      <b-nav-item
        :to="{ name: 'inventory-crm-equipment-request' }"
        exact
        exact-active-class="active"
        >Equipment Request</b-nav-item
      >
      <b-nav-item
        v-if="[12,19].includes($route.meta.module)"
        :to="{ name: 'inventory-crm-assign' }"
        exact
        exact-active-class="active"
        >To Assigned</b-nav-item
      >
    </b-nav>
    <request-equipment
      v-if="modalRequest"
      :modalRequest="modalRequest"
      :global="currentUser"
      :module="$route.meta.module"
      @closeModalRequest="closeModalRequest"
    ></request-equipment>
    <router-view :key="$route.name"></router-view>
  </div>
</template>

<script>

import RequestEquipment from './modal/RequestEquipment.vue'
import { mapGetters } from "vuex";
export default {
  components: {
   RequestEquipment,
  },
  data(){
    return{
        modalRequest:false,
    }
  },
  computed:{
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  methods:{
    openModalRequest() {
      this.modalRequest = true;
    },
    closeModalRequest() {
      this.modalRequest = false;
      // this.$refs.inventoryRequest?.resetSearch();
    },
  }
};
</script>

<style>
</style>