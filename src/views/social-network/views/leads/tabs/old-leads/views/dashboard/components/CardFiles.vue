<template>
  <b-card class="px-0">
    <template #header>
      <b-card-title>
        Files &nbsp;
        <span>
          <a class="text-important"> </a>
        </span>
      </b-card-title>
    </template>

    <b-container class="mt-1">
      <div class="text-right">
        <b-button
          variant="primary"
          class="mr-1"
          size="sm"
          @click="openModalUploadFiles"
        >
          <feather-icon
            icon="FileTextIcon"
            size="15"
            class="mr-50 text-white"
          ></feather-icon>
          UPLOAD
        </b-button>
      </div>
    </b-container>

    <modal-upload-files
      v-if="showModalUploadFiles"
      :show="showModalUploadFiles"
      :lead="lead"
      @onClose="closeModalUploadFiles"
    ></modal-upload-files>
  </b-card>
</template>

<script>
// Components
import ModalUploadFiles from "../../../../../components/ModalUploadFiles.vue";

export default {
  props: {
    lead: {
      type: Object,
      required: true,
    },
  },
  components: {
    ModalUploadFiles,
  },
  data() {
    return {
      // Modals
      showModalUploadFiles: false,
    };
  },
  methods: {
    openModalUploadFiles() {
      this.showModalUploadFiles = true;
    },
    closeModalUploadFiles() {
      this.showModalUploadFiles = false;
    },
  },
};
</script>

<style>
</style>

