<template>
  <b-list-group>
    <!-- :class="[ 'flex-column', 'align-items-start', notification.status == 1 ?
    'list-group-item-selected' : '', ]" -->
    <b-list-group-item
      v-for="notification in S_ALL_USER_NOTIFICATIONS"
      :key="notification.id"
      :disabled="notification.status == 1"
    >
      <div class="d-flex w-100 justify-content-between">
        <b-media no-body>
          <b-media-aside class="mr-2">
            <b-avatar size="30" variant="light-primary">
              <feather-icon size="15" icon="XIcon" />
            </b-avatar>
          </b-media-aside>
          <b-media-body class="my-auto">
            <h5 class="font-weight-bold mb-0">
              {{ notification.notification }}
            </h5>
          </b-media-body>
        </b-media>
        <!-- <div class="d-flex justify-content-between align-items-center">
          <b-avatar size="30" variant="light-primary">
            <feather-icon size="15" icon="XIcon" />
          </b-avatar>
          <span
            ><h5 class="mb-1">{{ notification.notification }}</h5></span
          >
        </div> -->
        <small>{{ notification.created_at | myDateGlobal }}</small>
      </div>
      <!-- <b-card-text class="mb-1">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
        risus varius blandit.
      </b-card-text> -->
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  mounted() {
    this.A_GET_ALL_USER_NOTIFICATIONS({
      id: this.currentUser.user_id,
    });
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
    ...mapState({
      S_ALL_USER_NOTIFICATIONS: (state) =>
        state.NotificationStore.S_ALL_USER_NOTIFICATIONS,
    }),
  },
  methods: {
    ...mapActions({
      A_GET_ALL_USER_NOTIFICATIONS:
        "NotificationStore/A_GET_ALL_USER_NOTIFICATIONS",
    }),
  },
};
</script>

<style >
/* .list-group-item-selected {
  background-color: #82868b !important;
  border-color: white !important;
  color: white !important;
  opacity: 0.6 !important;
} */
/* .list-group-item-selected h5,
h4 {
  color: white !important;
} */
</style>