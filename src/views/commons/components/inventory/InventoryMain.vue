<template>
  <div>
    <header-slot>
      <template #actions>
        <b-button
          @click="openModalRequest()"
          v-if="![1, 19].includes($route.meta.module)"
          variant="success"
        >Request Equipment</b-button>
      </template>
    </header-slot>

    <b-nav card-header pills class="m-0">
      <b-nav-item
        :to="{ name: 'inventory-crm-equipment' }"
        exact
        exact-active-class="active"
        :link-classes="['px-3',bgTabsNavs]"
      >Equipment</b-nav-item>
      <b-nav-item
        :to="{ name: 'inventory-crm-equipment-request' }"
        exact
        exact-active-class="active"
        :link-classes="['px-3',bgTabsNavs]"
      >
        Equipment Request
        <span class="ml-1" v-if="countRequest > 0">
          <feather-icon
            icon
            :badge="countRequest > 99 ? '+99' : countRequest"
            badge-classes="badge-important"
          />
        </span>
      </b-nav-item>
      <b-nav-item
        v-if="[12, 19].includes($route.meta.module)"
        :to="{ name: 'inventory-crm-assign' }"
        exact
        exact-active-class="active"
        :link-classes="['px-3',bgTabsNavs]"
      >To Assigned</b-nav-item>
    </b-nav>

    <b-card no-body class="border-primary border-table-radius px-0">
      <p>{{ statusUpdateRequestEquip }}</p>
      <router-view :key="$route.name"></router-view>
    </b-card>

    <request-equipment
      v-if="modalRequest"
      :modalRequest="modalRequest"
      :global="currentUser"
      :module="$route.meta.module"
      @closeModalRequest="closeModalRequest"
    ></request-equipment>
  </div>
</template>

<script>
import RequestEquipment from "./modal/RequestEquipment.vue";
import { mapGetters } from "vuex";
import InventoryService from "./service/inventory.service";
export default {
  components: {
    RequestEquipment
  },
  data() {
    return {
      modalRequest: false,
      countRequest: 0
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser"
    }),
    ...mapGetters("inventory-store", ["updateRequestEquip"]),
    statusUpdateRequestEquip() {
      if (this.updateRequestEquip) {
        this.countRequestEquipment();
      }
    }
  },
  methods: {
    openModalRequest() {
      this.modalRequest = true;
    },
    closeModalRequest() {
      this.modalRequest = false;
      // this.$refs.inventoryRequest?.resetSearch();
    },
    async countRequestEquipment() {
      try {
        const params = {
          id_module: this.$route.meta.module,
          status: 1
        };
        const response = await InventoryService.countRequestEquipment(params);
        this.countRequest = response.data[0].counter;
      } catch (error) {
        console.error(error);
        this.showToast(
          "danger",
          "top-right",
          "Error",
          "XIcon",
          "Something went wrong!"
        );
      }
    }
  },
  created() {
    this.countRequestEquipment();
  }
};
</script>

<style>
</style>