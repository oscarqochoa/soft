<template>
  <b-nav-item-dropdown
    class="dropdown-notification mr-25"
    menu-class="dropdown-menu-media"
  >
    <template #button-content>
      <feather-icon
        badge="1"
        badge-classes="bg-danger"
        class="text-body"
        icon="ClipboardIcon"
        size="21"
      />
    </template>

    <!-- Header -->
    <li class="dropdown-menu-header">
      <div class="dropdown-header d-flex">
        <h4 class="notification-title mb-0 mr-auto">Tasks</h4>
      </div>
    </li>

    <!-- Notifications -->
    <vue-perfect-scrollbar
      :settings="perfectScrollbarSettings"
      class="scrollable-container media-list scroll-area"
      tagname="li"
    >
      <template v-for="notification in notifications">
        <div :key="notification.id">
          <div class="media d-flex align-items-center">
            <h6 class="font-weight-bolder mr-auto mb-0 text-capitalize">
              {{ notification.type }}
            </h6>
          </div>
          <!-- Account Notification -->
          <template v-for="task in notification.tasks">
            <b-link :key="task.id">
              <b-media>
                <template #aside>
                  <b-avatar size="32" variant="light-secondary">
                    <feather-icon icon="ClipboardIcon" />
                  </b-avatar>
                </template>

                <p class="media-heading">
                  <span class="font-weight-bolder">
                    {{ task.subject }}
                  </span>
                </p>
                <div class="d-flex justify-content-between  align-items-center">
                  <small class="notification-text" style="width: calc(100% - 115px);"
                    >{{ task.client_name }} | {{ task.date | myHourTime }} |
                    {{ task.real_time | myHourTime }}</small
                  >
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="outline-primary"
                    size="sm"
                    style="width: 105px;"
                    block
                  >
                    {{ notification.type == "today" ? "" : task.cant }}
                    {{ notification.type }}
                  </b-button>
                </div>
              </b-media>
            </b-link>
          </template>
        </div>
      </template>
    </vue-perfect-scrollbar>

    <!-- Cart Footer -->
    <li class="dropdown-menu-footer">
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        block
        >See all tasks</b-button
      >
    </li>
  </b-nav-item-dropdown>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import Ripple from "vue-ripple-directive";
import NavbarService from "../../service/navbar.service";
import { mapGetters } from "vuex";
export default {
  mounted() {
    this.getFirstFiveUserTasks();
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
    async getFirstFiveUserTasks() {
      let data = await NavbarService.getFirstFiveUserTask(
        this.currentUser.user_id
      );
      data.forEach((task) => {
        task.tasks = JSON.parse(task.tasks);
      });
      this.notifications = data;
    },
  },
};
</script>

<style>
</style>
