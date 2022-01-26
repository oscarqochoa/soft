<template>
  <div>
    <b-card no-body class="mb-1">
      <div class="m-2">
        <b-row>
          <b-col
            cols="12"
            md="6"
            lg="6"
            sm="6"
            class="d-flex align-items-start justify-content-start mb-1 mb-md-0"
          >
            <h2>Inventory</h2>
          </b-col>
          <b-col
            cols="12"
            md="6"
            lg="6"
            sm="6"
            class="d-flex align-items-end justify-content-end mb-1 mb-md-0"
          >
            <b-button
              @click="openModalRequest()"
              v-if="![1, 19].includes($route.meta.module)"
              variant="success"
            >
              Request Equipment
            </b-button>
          </b-col>
        </b-row>
      </div>
    </b-card>
    <b-nav pills>
      <b-nav-item
        :to="{ name: 'inventory-crm-equipment' }"
        exact
        exact-active-class="active"
        link-classes="ml-1 border-secondary hover-primary"
        >Equipment</b-nav-item
      >
      <b-nav-item
        :to="{ name: 'inventory-crm-equipment-request' }"
        exact
        exact-active-class="active"
        link-classes="ml-1 border-secondary hover-primary"
        >Equipment Request
        <span class="ml-1" v-if="countRequest > 0">
            <feather-icon
              icon
              :badge="countRequest > 99 ? '+99' : countRequest"
              badge-classes="badge-important"
            />
          </span>
        </b-nav-item
      >
      <b-nav-item
        v-if="[12, 19].includes($route.meta.module)"
        :to="{ name: 'inventory-crm-assign' }"
        exact
        exact-active-class="active"
        link-classes="ml-1 border-secondary hover-primary"
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
    <p>{{statusUpdateRequestEquip}}</p>
    <router-view :key="$route.name"></router-view>
  </div>
</template>

<script>
import RequestEquipment from "./modal/RequestEquipment.vue";
import { mapGetters } from "vuex";
import { amgApi } from '@/service/axios';
export default {
  components: {
    RequestEquipment,
  },
  data() {
    return {
      modalRequest: false,
      countRequest: 0,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
    ...mapGetters("inventory-store", ["updateRequestEquip"]),
    statusUpdateRequestEquip(){
      if(this.updateRequestEquip){
        this.countRequestEquipment()
      }
    },
  },
  methods: {
    openModalRequest() {
      this.modalRequest = true;
    },
    closeModalRequest() {
      this.modalRequest = false;
      // this.$refs.inventoryRequest?.resetSearch();
    },
    countRequestEquipment() {
      const params = {
        id_module: this.$route.meta.module,
        status: 1,
      };
      amgApi
        .post("/logistics/inventory/get-counter-equipment-request", params)
        .then((response) => {
          if (response.status == 200) {
            this.countRequest = response.data[0].counter;
          }
        });
    },
    
  },
  created(){
      this.countRequestEquipment()
    }
};
</script>

<style>
</style>