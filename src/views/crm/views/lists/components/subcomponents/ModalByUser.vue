<template>
  <div>
    <b-modal
      id="modal-xs"
      title-class="h3"
      size="lg"
      v-model="mutableIfModalCard"
      modal-class="modal-primary"
      centered
      :title="`${objectUser.user_name}`"
      @hidden="closeModal"
      hide-footer
    >
    </b-modal>
  </div>
</template>


<script>
export default {
  props: {
    objectUser: {
      type: Object,
    },
    ifModalCard: {
      type: Boolean,
    },
    idByUser: {
      type: [Number, String],
    },
  },
  data() {
    return {
      mutableIfModalCard: this.ifModalCard,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close", false);
    },
  },
};
</script>