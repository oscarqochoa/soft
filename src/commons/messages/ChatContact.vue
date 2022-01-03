<template>
  <component :is="tag" v-on="$listeners">
    <b-avatar
      size="42"
      :src="user.image"
      :badge="isChatContact"
      class="badge-minimal"
      :icon="user.type == 1 ? 'person-fill' : 'people-fill'"
      :badge-variant="resolveAvatarBadgeVariant(user.state_coworker)"
    />
    <div class="chat-info flex-grow-1">
      <h5 class="mb-0">
        {{ user.coworker }}
      </h5>
    </div>
    <b-badge
      style="height: 25px; width: 25px; border-radius: 50%"
      :style="{
        paddingLeft: user.cm < 10 ? '10px' : '',
        paddingRight: user.cm < 10 ? '10px' : '',
      }"
      variant="light-danger"
      class="d-flex align-items-center justify-content-center mr-1 badge-glow"
      v-if="user.cm > 0"
      >{{ user.cm }}</b-badge
    >
    <div class="chat-meta text-nowrap" style="width: 60px">
      <small
        class="float-right mb-25 chat-time text-right w-100"
        style="white-space: normal !important"
        >{{ user.date | myGlobalDay }}</small
      >
    </div>
  </component>
</template>

<script>
import { formatDateToMonthShort } from "@core/utils/filter";
import useChat from "./useChat";
import { mapGetters } from "vuex";
export default {
  props: {
    tag: {
      type: String,
      default: "div",
    },
    user: {
      type: Object,
      required: true,
    },
    isChatContact: {
      type: Boolean,
      dedfault: false,
    },
  },
  computed: {
    ...mapGetters({
      skin: "appConfig/skin",
      currentUser: "auth/currentUser",
    }),
  },
  setup() {
    const { resolveAvatarBadgeVariant } = useChat();
    return { formatDateToMonthShort, resolveAvatarBadgeVariant };
  },
};
</script>

<style>
</style>
