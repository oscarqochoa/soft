<template>
  <div>
    <feather-icon icon="ClockIcon" size="19" @click="openModal()" />
    <b-tooltip
      triggers="hover"
      :target="`bookmark-clock-in`"
      title="Clock In"
      :delay="{ show: 1000, hide: 50 }"
    />
    <b-modal
      v-model="dialAttendance"
      :title="titleModal"
      size="sm"
      body-class="p-0"
      no-close-on-backdrop
    >
      <content-camera />
      <template #modal-footer>
        <div class="footer-capture">
          <b-button variant="primary" @click="attendance()">CAPTURE</b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import ContentCamera from "./DialAttendance.vue";
export default {
  data() {
    return {
      payStubModalController: false,
      dialAttendance: false,
      titleModal: "clock in",
    };
  },
  components: {
    ContentCamera,
  },
  methods: {
    openPayStubModal() {
      this.payStubModalController = true;
    },
    openModal() {
      this.dialAttendance = true;
    },
    attendance(){
      this.$el.querySelectorAll('.photo-capture-actions');
    }
  },
};
</script>

<style>
.footer-capture {
  width: 100%;
  text-align: center;
}
</style>