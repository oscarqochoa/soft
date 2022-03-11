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

      <div class="mt-1 w-100 text-center" v-if="files.length > 0">
        <b-button variant="primary" style="width: 200px" @click="uploadFiles">
          <feather-icon icon="UploadIcon"></feather-icon>
          Upload
        </b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

// Components
import DragAndDrop from "@/views/commons/utilities/DragAndDrop.vue";

// Services
import SNLeadService from "@/views/social-network/services/leads";

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
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  methods: {
    async uploadFiles() {
      try {
        this.addPreloader();

        const formData = new FormData();

        this.files.forEach((file) => {
          formData.append("images[]", file, file.name);
        });

        formData.append("user_id", this.currentUser.user_id);
        formData.append("id_lead", this.lead.id);
        formData.append("module_id", 15);
        formData.append("reply_id", 1);

        const response = await SNLeadService.uploadFiles(formData);

        if (response.status == 200) {
          this.$emit("onSaved");

          this.showGenericToast({
            text: "Successful operation",
          });
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();

        throw error;
      }
    },
    close() {
      this.$emit("onClose");
    },
  },
  created() {},
};
</script>

<style>
</style>