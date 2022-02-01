<template>
  <div>
    <header-slot />
    <b-card>
      <b-nav
        tabs
        fill
      >
        <b-nav-item
          :to="{name: 'sales-made-crm-new-client'}"
          active-class="active"
        >New Clients</b-nav-item>
        <b-nav-item
          v-if="(currentUser.role_id == 1 || currentUser.role_id == 2)"
          :to="{name: 'sales-made-crm-add-change'}"
          active-class="active"
        >Add/Change Service</b-nav-item>
        <b-nav-item
          v-if="(currentUser.role_id == 1 || currentUser.role_id == 2)"
          :to="{name: 'sales-made-crm-annulled'}"
          active-class="active"
        >Annulled</b-nav-item>
      </b-nav>

      <router-view />
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SalesMade',
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
    }),
  },
}
</script>

<style scoped>
</style>
