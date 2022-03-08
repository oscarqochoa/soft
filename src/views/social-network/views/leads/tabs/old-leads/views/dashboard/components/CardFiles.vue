<template>
  <b-card body-class="px-0">
    <template #header>
      <b-card-title>
        Files &nbsp;
        <span>
          <a class="text-important"> </a>
        </span>
      </b-card-title>
    </template>

    <template v-if="files.length > 0">
      <b-table small :fields="table.fields" :items="files" class="text-center">
        <template #cell(file_name)="data">
          <div v-if="!editName[data.index].view">
            <div v-if="data.item.extension != null">
              <b-img
                :src="$options.filters.extFile(data.item.extension)"
                style="width: 15px; margin-right: 5px"
              ></b-img>
              <a
                :href="data.item.route"
                target="_blank"
                style="cursor: pointer"
              >
                {{ data.item.file_name }}.{{ data.item.extension }}
              </a>
            </div>
          </div>
          <div v-if="editName[data.index].view">
            <div>
              <input
                class="input-form"
                type="text"
                style="width: 80%; margin-right: 5px"
                :style="errornamefile ? 'border:1px solid red !important;' : ''"
                v-model="data.item.custom_file_name"
                @keyup.enter="updateFileName(data.item)"
                @keyup.esc="cancelnamefile(data.index, data.item.file_name)"
              />
              <img
                @click="updateFileName(data.item)"
                src="/images/icons/save_lead.png"
                style="cursor: pointer"
              />
              <span style="margin: 0px 5px">|</span>
              <img
                @click="cancelnamefile(data.index, data.item.file_name)"
                src="/images/icons/cancel_lead.png"
                style="cursor: pointer"
              />
            </div>
          </div>
        </template>

        <template #cell(created_by)="data">
          <span>{{ data.item.user_upload }}</span>
          <br />
          <span>{{ data.item.created_at | myGlobalDay }}</span>
        </template>

        <template #cell(actions)="data">
          <b-button
            @click="editNameFile(data.index, data.item)"
            variant="flat-warning rounded-circle"
            class="btn-icon"
          >
            <feather-icon icon="EditIcon"></feather-icon>
          </b-button>

          <b-button
            @click="deleteFile(data.item.id)"
            variant="flat-danger rounded-circle"
            class="btn-icon"
          >
            <feather-icon icon="TrashIcon"></feather-icon>
          </b-button>
        </template>
      </b-table>
    </template>
    <div class="mt-2">
      <b-button
        variant="primary"
        class="float-right mr-2"
        @click="openModalCreateFile()"
      >
        UPLOAD FILES
      </b-button>
    </div>

    <modal-upload-files
      v-if="showModalUploadFiles"
      :show="showModalUploadFiles"
      :lead="lead"
      @onClose="closeModalUploadFiles"
    ></modal-upload-files>
  </b-card>
</template>

<script>
import { mapGetters } from "vuex";

// Services
import SNLeadService from "@/views/social-network/services/leads";

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
      table: {
        fields: [
          { key: "file_name", label: "File Name" },
          { key: "created_by", label: "Created By" },
          { key: "actions", label: "Actions" },
        ],
      },

      files: [],
      editName: [],

      // Modals
      showModalUploadFiles: false,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  methods: {
    openModalUploadFiles() {
      this.showModalUploadFiles = true;
    },
    closeModalUploadFiles() {
      this.showModalUploadFiles = false;
    },
    async getFiles() {
      const response = await SNLeadService.getLeadFiles({
        id_lead: 50486,
        orderby: 2,
        order: "asc",
      });

      if (response.status == 200) {
        this.files = response.data;

        this.editname = [];
        this.files.forEach((value, index) => {
          this.editname.push({ id: index, view: false });
          this.$set(value, "custom_file_name", null);
        });
      }
    },
    editNameFile(index, item) {
      this.editName[index].view = true;
      item.custom_file_name = item.file_name;
    },
    async deleteFile(id) {
      try {
        const confirm = await this.showConfirmSwal();

        if (confirm.value) {
          this.addPreloader();

          const response = await SNLeadService.deleteFile({
            file_id: id,
            user_id: this.currentUser.user_id,
          });

          if (response.status == 200) {
            this.showGenericToast({
              text: "Successful operation",
            });
          }

          this.removePreloader();
        }
      } catch (error) {
        throw error;
      }
    },
  },
  created() {
    this.getFiles();
  },
};
</script>

<style>
</style>

