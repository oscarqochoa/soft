<template>
  <div>

    <!-- Alert: No item found -->
    <b-alert
      variant="danger"
      :show="userData === undefined"
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

      <!-- <b-row>
        <b-col
          cols="12"
          lg="6"
        >
          <user-view-user-timeline-card />
        </b-col>
        <b-col
          cols="12"
          lg="6"
        >
          <user-view-user-permissions-card />
        </b-col>
      </b-row> -->
    </template>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserViewUserInfoCard from './UserViewUserInfoCard.vue';
export default {
  components: {
    UserViewUserInfoCard,
  },
  computed:{
    ...mapGetters({
      currentUser: 'auth/currentUser',
    })
  }
}
</script>

<style>

</style>
