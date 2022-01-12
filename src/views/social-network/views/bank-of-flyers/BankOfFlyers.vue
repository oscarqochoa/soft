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
            exact-active-class="active"
            link-classes="border-secondary hover-primary"
            exact
            :to="{ name: 'list-social-network-preactive' }"
        >PRE ACTIVE</b-nav-item>
        <b-nav-item
            exact-active-class="active"
            link-classes="border-secondary hover-primary"
            exact
            :to="{ name: 'list-social-network-active' }"
        >ACTIVE</b-nav-item>
        <b-nav-item
            exact-active-class="active"
            link-classes="border-secondary hover-primary"
            exact
            :to="{ name: 'list-social-network-inactive' }"

        >INACTIVE</b-nav-item>
      </b-nav>
      <router-view  />
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: "BankOfFlyers",
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token',

    }),
    ...mapState({

    })
  },
};
</script>

<style scoped>
</style>
