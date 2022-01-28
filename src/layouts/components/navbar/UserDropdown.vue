<template>
  <b-nav-item-dropdown
    right
    toggle-class="d-flex align-items-center dropdown-user-link"
    class="dropdown-user"
  >
    <template #button-content>
      <div class="d-sm-flex d-none user-nav">
        <p class="user-name font-weight-bolder mb-0">
          {{ userData.fullName || userData.username }}
        </p>
        <span class="user-status">{{ userData.roleName }}</span>
      </div>
      <b-avatar
        size="40"
        :src="userData.avatar"
        variant="light-primary"
        badge
        class="badge-minimal"
        badge-variant="success"
      >
        <feather-icon v-if="!userData.fullName" icon="UserIcon" size="19" />
      </b-avatar>
    </template>

    <b-dropdown-item
      :to="{ name: 'users-my-profile' }"
      link-class="d-flex align-items-center"
    >
      <feather-icon size="16" icon="UserIcon" class="mr-50" />
      <span>My Profile</span>
    </b-dropdown-item>
    <b-dropdown-item
      link-class="d-flex align-items-center"
      :to="{ name: 'amg-messages' }"
    >
      <messages class="mr-50"></messages>
      <span>Messages</span>
    </b-dropdown-item>
    <b-dropdown-item
      link-class="d-flex align-items-center"
      @click="$refs.stickyNotes.openStickyNotes()"
    >
      <sticky-notes ref="stickyNotes" class="mr-50"></sticky-notes>
      <span>Sticky Notes</span>
    </b-dropdown-item>
    <b-dropdown-item
      link-class="d-flex align-items-center"
      @click="$refs.payStub.openPayStubModal()"
    >
      <pay-stub ref="payStub" class="mr-50"></pay-stub>
      <span>Pay Stub</span>
    </b-dropdown-item>
    <b-dropdown-item
      link-class="d-flex align-items-center"
      @click="$refs.messenger.redirectToMessenger()"
    >
      <messenger ref="messenger" class="mr-50"></messenger>
      <span>Messenger</span>
    </b-dropdown-item>
    <b-dropdown-item
      link-class="d-flex align-items-center"
      @click="$refs.schedules.openModalReport()"
    >
      <schedules-report ref="schedules" class="mr-50"></schedules-report>
      <span>Schedule Report</span>
    </b-dropdown-item>
    <b-dropdown-item link-class="d-flex align-items-center" @click="logout">
      <feather-icon size="16" icon="LogOutIcon" class="mr-50" />
      <span>Logout</span>
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import { initialAbility } from "@/libs/acl/config";
import useJwt from "@/auth/jwt/useJwt";
import { avatarText } from "@core/utils/filter";
import StickyNotes from "./components/sticky-notes/StickyNotes.vue";
import Appointments from "./components/appointments/Appointments.vue";
import Messages from "./components/messages/Messages.vue";
import Messenger from "./components/messenger/Messenger.vue";
import PayStub from "./components/pay-stub/PayStub.vue";
import SchedulesReport from "./components/schedules/SchedulesReportUser.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    StickyNotes,
    Appointments,
    Messages,
    Messenger,
    PayStub,
    SchedulesReport,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem("userData")),
      avatarText,
    };
  },
  methods: {
    ...mapMutations({
      resetState: "resetState",
    }),
    logout() {
      // Remove userData from localStorage
      // ? You just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token
      localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName);
      localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName);

      // Remove userData from localStorage
      this.resetState();
      // this.$store.commit('resetState');
      console.log(this.$store.commit("resetState"), "store");
      // Reset ability
      this.$ability.update(initialAbility);

      // Redirect to login page
      this.$router.push({ name: "auth-login" });
    },
  },
};
</script>
