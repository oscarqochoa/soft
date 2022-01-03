<template>
  <div class="navbar-container d-flex content align-items-center">
    <!-- Left Col -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>
    <div
      class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex"
    >
      <!-- Bookmarks Container -->
      <bookmarks />
    </div>
    <b-navbar-nav class="nav align-items-center ml-auto">
      <dark-Toggler />
      <task-dropdown v-b-tooltip.hover.top="'Tasks'" />
      <notification-dropdown />
      <user-dropdown />
    </b-navbar-nav>
  </div>
</template>

<script>
import DarkToggler from "@core/layouts/components/app-navbar/components/DarkToggler.vue";
import NotificationDropdown from "./NotificationDropdown.vue";
import TaskDropdown from "./components/tasks/TaskDropdown.vue";
import UserDropdown from "./UserDropdown.vue";
import Bookmarks from './Bookmark.vue';
export default {
  components: {
    DarkToggler,
    NotificationDropdown,
    UserDropdown,
    Bookmarks,
    TaskDropdown,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style>
</style>