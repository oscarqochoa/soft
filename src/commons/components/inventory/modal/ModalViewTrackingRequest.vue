<template>
  <div>
    <b-modal
      modal
      title="Tracking Request"
      v-model="mutableIfModalEquipment"
      size="lg"
      modal-class="modal-primary"
      hide-footer
      body-class="mb-2"
      @hidden="closeModal"
      title-tag="h3"
    >
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    modalTrackingRequest: {
      type: Boolean,
    },
    requestId: {
      type: [Number, String],
    },
    global: {
      type: Object,
    },
  },
  components: {},
  data() {
    return {
        mutableIfModalEquipment:this.modalTrackingRequest
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeTrackingRequest", false);
    },
  },
};
</script>