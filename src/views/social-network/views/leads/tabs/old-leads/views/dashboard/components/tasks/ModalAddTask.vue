<template>
  <div>
    <b-modal v-model="show" hide-footer size="lg" @hidden="close">
      test modal
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
    },
  },
  methods: {
    close() {
      this.$emit("onClose");
    },
  },
};
</script>

<style>
</style>