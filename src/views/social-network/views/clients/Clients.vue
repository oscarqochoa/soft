<template>
  <div>
    <b-card>
      <div class="card-header">
        <div>
          <b-card-title>CLIENTS</b-card-title>
        </div>
      </div>
      <b-nav pills>
        <b-nav-item
          :to="{ name: 'list-clients' }"
          exact
          exact-active-class="active"
          link-classes="border-secondary hover-primary"
        >ALL CLIENTS</b-nav-item>

      </b-nav>
      <router-view :key="$route.name" />
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
