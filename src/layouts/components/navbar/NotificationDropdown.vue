<template>
  <b-nav-item-dropdown
    class="dropdown-notification mr-25"
    menu-class="dropdown-menu-media"
    right
  >
    <template #button-content>
      <feather-icon
        badge="6"
        badge-classes="bg-danger"
        class="text-body"
        icon="BellIcon"
        size="21"
      />
    </template>

    <!-- Header -->
    <li class="dropdown-menu-header">
      <div class="dropdown-header d-flex">
        <h4 class="notification-title mb-0 mr-auto">Notifications</h4>
        <b-badge pill variant="light-primary"> 6 New </b-badge>
      </div>
    </li>

    <!-- Notifications -->
    <vue-perfect-scrollbar
      :settings="perfectScrollbarSettings"
      class="scrollable-container media-list scroll-area"
      tagname="li"
    >
      <!-- Account Notification -->
      <b-link v-for="notification in notifications" :key="notification.id">
        <b-media>
          <template #aside>
            <b-avatar size="32" variant="light-secondary">
              <feather-icon icon="InfoIcon" />
            </b-avatar>
          </template>
          <p class="media-heading">
            <span class="font-weight-bolder">
              {{ notification.notification }}
            </span>
          </p>
          <small class="notification-text">{{
            notification.created_at | myDateGlobal
          }}</small>
        </b-media>
      </b-link>
    </vue-perfect-scrollbar>

    <!-- Cart Footer -->
    <li class="dropdown-menu-footer">
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        block
        >Read all notifications</b-button
      >
    </li>
  </b-nav-item-dropdown>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import Ripple from "vue-ripple-directive";
import NavbarService from "./service/navbar.service";
import { mapGetters } from "vuex";
export default {
  mounted() {
    this.getUserNotifications();
  },
  components: {
    VuePerfectScrollbar,
  },
  directives: {
    Ripple,
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  data() {
    return {
      perfectScrollbarSettings: {
        maxScrollbarLength: 60,
        wheelPropagation: false,
      },
      notifications: [],
    };
  },
  methods: {
    async getUserNotifications() {
      let data = await NavbarService.getUserNotifications(
        this.currentUser.user_id
      );
      this.notifications = data;
    },
  },
};
</script>

<style>
</style>
