<template>
  <div>
    <header-slot />

    <b-nav card-header pills class="m-0">
      <b-nav-item
        :to="{name: 'sales-made-crm-new-client'}"
        exact-active-class="active"
        :link-classes="['px-3',bgTabsNavs]"
      >New Clients</b-nav-item>
      <b-nav-item
        v-if="(currentUser.role_id == 1 || currentUser.role_id == 2)"
        :to="{name: 'sales-made-crm-add-change'}"
        exact-active-class="active"
        :link-classes="['px-3',bgTabsNavs]"
      >Add/Change Service</b-nav-item>
      <b-nav-item
        v-if="(currentUser.role_id == 1 || currentUser.role_id == 2)"
        :to="{name: 'sales-made-crm-annulled'}"
        exact-active-class="active"
        :link-classes="['px-3',bgTabsNavs]"
      >Annulled</b-nav-item>
    </b-nav>

    <b-card no-body class="border-primary border-table-radius px-1">
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
