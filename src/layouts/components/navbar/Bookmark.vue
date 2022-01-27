<template>
  <b-navbar-nav class="nav">
    <b-nav-item :id="`bookmark-clock-in`">
      <clock-in></clock-in>
    </b-nav-item>
    <b-nav-item
      :id="`bookmark-messages`"
      :to="{name: 'amg-messages'}"
      v-b-tooltip.hover.top="'Messages'"
    >
      <messages></messages>
    </b-nav-item>
    <b-nav-item @click="$refs.stickyNotes.openStickyNotes()" :id="`bookmark-sticky-notes`">
      <sticky-notes ref="stickyNotes"></sticky-notes>
    </b-nav-item>
    <b-nav-item @click="$refs.payStub.openPayStubModal()" :id="`bookmark-pay-stub`">
      <pay-stub ref="payStub"></pay-stub>
    </b-nav-item>
    <b-nav-item
      @click="$refs.messenger.redirectToMessenger()"
      :id="`bookmark-messenger`"
      v-b-tooltip.hover.top="'AMG Messenger'"
    >
      <messenger ref="messenger"></messenger>
    </b-nav-item>
  </b-navbar-nav>
</template>

<script>
import StickyNotes from "./components/sticky-notes/StickyNotes.vue";
import Appointments from "./components/appointments/Appointments.vue";
import Messages from "./components/messages/Messages.vue";
import Messenger from "./components/messenger/Messenger.vue";
import PayStub from "./components/pay-stub/PayStub.vue";
import ClockIn from "./components/schedules/ClockIn.vue";
export default {
  components: {
    StickyNotes,
    Appointments,
    Messages,
    Messenger,
    PayStub,
    ClockIn
  }
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
