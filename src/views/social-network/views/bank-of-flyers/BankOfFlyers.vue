<template>
  <div>
    <b-card>
      <div class="card-header">
        <div>
          <b-card-title>BANK OF FLYERS</b-card-title>
        </div>
      </div>
      <b-nav pills>
        <b-nav-item
          :to="{ name: 'list-social-network-preactive' }"
          exact
          exact-active-class="active"
          link-classes="border-secondary hover-primary"
        >PRE ACTIVE</b-nav-item>
        <b-nav-item
          :to="{ name: 'list-social-network-active' }"
          exact
          exact-active-class="active"
          link-classes="border-secondary hover-primary"
        >ACTIVE</b-nav-item>
        <b-nav-item
          :to="{ name: 'list-social-network-inactive' }"
          exact
          exact-active-class="active"
          link-classes="border-secondary hover-primary"
        >INACTIVE</b-nav-item>
      </b-nav>
      <router-view :key="$route.name" />
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'BankOfFlyers',
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token',

    }),

  },
}
</script>

<style scoped>
</style>
