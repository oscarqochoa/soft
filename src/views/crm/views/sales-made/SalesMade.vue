<template>
  <div>
    <header-slot />

    <b-card no-body>
      <b-card-header header-tag="nav" :class="['pb-0', bgLightDark  ]">
        <b-nav card-header pills class="m-0">
          <b-nav-item
            :to="{name: 'sales-made-crm-new-client'}"
            exact-active-class="active"
          >New Clients</b-nav-item>
          <b-nav-item
            v-if="(currentUser.role_id == 1 || currentUser.role_id == 2)"
            :to="{name: 'sales-made-crm-add-change'}"
            exact-active-class="active"
          >Add/Change Service</b-nav-item>
          <b-nav-item
            v-if="(currentUser.role_id == 1 || currentUser.role_id == 2)"
            :to="{name: 'sales-made-crm-annulled'}"
            exact-active-class="active"
          >Annulled</b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body class="border-primary rounded">
        <router-view />
      </b-card-body>
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
