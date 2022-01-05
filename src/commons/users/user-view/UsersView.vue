<template>
  <div>

    <!-- Alert: No item found -->
    <b-alert
      variant="danger"
      :show="currentUser === undefined"
    >
      <h4 class="alert-heading">
        Error fetching user data
      </h4>
      <div class="alert-body">
        No user found with this user id. Check
        <b-link
          class="alert-link"
          :to="{ name: 'apps-users-list'}"
        >
          User List
        </b-link>
        for other users.
      </div>
    </b-alert>

    <template v-if="currentUser">
      <!-- First Row -->
      <b-row>
        <b-col
          cols="12"
        >
          <user-view-user-info-card :user-data="currentUser" />
        </b-col>
        
      </b-row>
      <b-row>
        <b-col
          cols="12"
          lg="6"
        >
          <user-view-access-card :user-data="currentUser" />
        </b-col>
        <b-col
          cols="12"
          lg="6"
        >
          <user-view-session-list-card />
        </b-col>
      </b-row>
    </template>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserViewUserInfoCard from './UserViewUserInfoCard.vue';
import UserViewAccessCard from './UserViewAccessCard.vue';
import UserViewSessionListCard from './UserViewSessionListCard.vue';
export default {
  components: {
    UserViewUserInfoCard,
    UserViewAccessCard,
    UserViewSessionListCard
  },
  computed:{
    ...mapGetters({
      currentUser: 'auth/currentUser',
    })
  },
  created() {
    this.$store.commit("appConfig/UPDATE_NAV_MENU_HIDDEN", true);
    this.$store.commit("appConfig/UPDATE_NAVBAR_CONFIG", { type: "floating" });
  },
  destroyed() {
    this.$store.commit("appConfig/UPDATE_NAVBAR_CONFIG", {
      type: this.navbarConfig,
    });
    this.$store.commit("appConfig/UPDATE_NAV_MENU_HIDDEN", this.menuHidden);
    this.$store.commit("appConfig/UPDATE_LAYOUT_TYPE", "vertical");
  },
}
</script>

<style>

</style>
