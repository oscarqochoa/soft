<template>
  <div>
    <b-modal
      v-model="mutableShow"
      :title="'Upload File (Lead: ' + ')'"
      title-tag="h3"
      title-class="text-white"
      id="modal-sn-upload-files"
      hide-footer
      size="lg"
      @hidden="close"
    >
      <drag-and-drop v-model="files" :files-array="files" />
    </b-modal>
  </div>
</template>

<script>
// Components
import DragAndDrop from "@/views/commons/utilities/DragAndDrop.vue";

export default {
  props: {
    show: {
      type: Boolean,
    },
    lead: {
      type: Object,
    },
  },
  components: {
    DragAndDrop,
  },
  data() {
    return {
      mutableShow: this.show,

      files: [],
    };
  },
  methods: {
    close() {
      this.$emit("onClose");
    },
  },
  created() {},
};
</script>

<style>
</style>