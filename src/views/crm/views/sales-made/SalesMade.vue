<template>
  <div>
    <b-nav pills>
      <b-nav-item
        to="/crm/sales-made/"
        exact
        exact-active-class="active"
      >
        New Clients
      </b-nav-item>
      <b-nav-item
        v-if="(currentUser.role_id == 1 || currentUser.role_id == 2)"
        to="/crm/sales-made/programs"
        exact
        exact-active-class="active"
      >
        Add/Change Service
      </b-nav-item>
      <b-nav-item
        v-if="(currentUser.role_id == 1 || currentUser.role_id == 2)"
        to="/crm/sales-made/annul"
        exact
        exact-active-class="active"
      >
        Annulled
      </b-nav-item>
    </b-nav>
    <router-view />
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
