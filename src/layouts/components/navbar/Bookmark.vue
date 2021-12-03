<template>
  <b-navbar-nav class="nav">
    <template v-for="bookmark in bookmarks">
      <component
        :key="bookmark.id"
        :is="bookmark.componentName"
        v-if="bookmark.visible"
      ></component>
    </template>
  </b-navbar-nav>
</template>

<script>
import TaskDropdown from "./components/tasks/TaskDropdown.vue";
import StickyNotes from "./components/sticky-notes/StickyNotes.vue";
import Appointments from "./components/appointments/Appointments.vue";
import Messages from "./components/messages/Messages.vue";
import Messenger from "./components/messenger/Messenger.vue";
import PayStub from "./components/pay-stub/PayStub.vue";
export default {
  data() {
    return {
      bookmarks: [
        {
          componentName: "messages",
          visible: true,
        },
        {
          componentName: "appointments",
          visible: true,
        },
        {
          componentName: "task-dropdown",
          visible: true,
        },
        {
          componentName: "sticky-notes",
          visible: true,
        },
        {
          componentName: "pay-stub",
          visible: true,
        },
        {
          componentName: "messenger",
          visible: true,
        }
      ],
    };
  },
  components: {
    TaskDropdown,
    StickyNotes,
    Appointments,
    Messages,
    Messenger,
    PayStub,
  },
};
</script>

<style lang="scss" scoped>
@import "~@core/scss/base/bootstrap-extended/include";

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
p {
  margin: 0;
}

.nav-bookmar-content-overlay {
  position: fixed;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-transition: all 0.7s;
  transition: all 0.7s;
  z-index: -1;

  &:not(.show) {
    pointer-events: none;
  }

  &.show {
    cursor: pointer;
    z-index: 10;
    opacity: 1;
  }
}
</style>
