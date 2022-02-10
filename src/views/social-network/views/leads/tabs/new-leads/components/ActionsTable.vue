<template>
  <b-dropdown variant="link" no-caret>
    <template #button-content>
      <feather-icon
        icon="MoreVerticalIcon"
        size="16"
        class="align-middle text-body"
      />
    </template>

    <!-- v-b-tooltip.hover.left="'Open tracking'" -->

    <b-dropdown-item @click="showTracking">
      <feather-icon icon="ListIcon"></feather-icon>
      <span class="align-middle ml-50"> Tracking </span>
    </b-dropdown-item>

    <b-dropdown-item>
      <feather-icon icon="CornerUpLeftIcon"></feather-icon>
      <span class="align-middle ml-50"> Recovery </span>
    </b-dropdown-item>

    <b-dropdown-item>
      <feather-icon icon="CornerUpLeftIcon"></feather-icon>
      <span class="align-middle ml-50"> Closed </span>
    </b-dropdown-item>

    <b-dropdown-item @click="sendSMS">
      <feather-icon icon="MessageCircleIcon"></feather-icon>
      <span class="align-middle ml-50"> Send SMS </span>
    </b-dropdown-item>

    <b-dropdown-item @click="showSMSList">
      <feather-icon icon="AlignLeftIcon"></feather-icon>
      <span class="align-middle ml-50"> SMS List </span>
    </b-dropdown-item>

    <b-dropdown-item @click="deleteLead">
      <feather-icon icon="TrashIcon" class="text-danger"></feather-icon>
      <span class="align-middle ml-50 text-danger"> Delete </span>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
    },
    name: {
      type: String,
    },
  },
  methods: {
    showTracking() {
      this.$emit("onShowTracking", this.id, this.name);
    },
    sendToRecovery() {
      this.$emit("onSendToRecovery", this.id);
    },
    sendToClosed() {},
    sendSMS() {
      this.$emit("onSendSms", this.id);
    },
    showSMSList() {
      this.$emit("onShowSmsList", this.id, this.name);
    },
    deleteLead() {
      this.$emit("onDelete", this.id);
    },
  },
};
</script>

<style>
</style>