<template>
  <div>
    <header-slot></header-slot>
    <b-card>
      <b-nav pills>
        <b-nav-item
          to="/crm/sales-made/"
          exact
          exact-active-class="active"
          link-classes="border-secondary hover-primary"
        >New Clients</b-nav-item>
        <b-nav-item
          v-if="(currentUser.role_id == 1 || currentUser.role_id == 2)"
          to="/crm/sales-made/programs"
          exact
          exact-active-class="active"
          link-classes="border-secondary hover-primary"
        >Add/Change Service</b-nav-item>
        <b-nav-item
          v-if="(currentUser.role_id == 1 || currentUser.role_id == 2)"
          to="/crm/sales-made/annul"
          exact
          exact-active-class="active"
          link-classes="border-secondary hover-primary"
        >Annulled</b-nav-item>
      </b-nav>

      <router-view />
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SalesMade",
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser"
    })
  }
};
</script>

<style scoped>
</style>
