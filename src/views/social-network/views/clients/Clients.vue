<template>
  <div>
    <header-slot>

    </header-slot>


      <b-nav card-header pills class="m-0">
        <b-nav-item
          :to="{ name: 'list-clients' }"
          exact
          exact-active-class="active"
          :link-classes="['px-3',bgTabsNavs]"
        >ALL CLIENTS</b-nav-item>

      </b-nav>
    <router-view :key="$route.name"></router-view>

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
