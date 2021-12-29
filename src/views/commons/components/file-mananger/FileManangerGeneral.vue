<template>
  <b-container fluid>
    <b-row>
      <b-col />
      <b-col class="d-flex align-items-center justify-content-end">
        <b-button
          class="mr-1"
          variant="important"
          @click="openModalNewFolder"
        >
          New Folder
        </b-button>
        <b-button
          variant="info"
          @click="openUploadFileMoadl"
        >
          Add Files
        </b-button>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <template v-for="(route, index) in history">
        <div
          :key="index"
          class="mr-50 d-flex align-items-center justify-content-between cursor-pointer"
          @click="historyClicked(index)"
        >
          <amg-icon
            class="font-medium-5"
            :icon="route.icon"
            :class="{'text-warning' : route.icon === 'FolderIcon', 'text-primary' : route.icon === 'HomeIcon'}"
          />
          <span class="ml-50 d-flex align-items-center justify-content-center font-medium-1">{{ route.label }}</span>
          <span class="font-large-1 ml-50">/</span>
        </div>
      </template>
    </b-row>
    <b-row>
      <b-col
        v-for="(content,index) in currentFiles" :key="index"
        cols="1"
      >
        <file-component
          :current-user="currentUser"
          :content="content"
          @contentClicked="contentClicked"
          @details="openFileDetail"
          @deleteFile="deleteFile"
          @shareFile="openShareFileModal"
        />

      </b-col>
    </b-row>
    <b-sidebar
      id="sidebar-right"
      right
      bg-variant="white"
      lazy
      backdrop
    >
      <b-container>
        <b-row class="mb-1">
          <b-col
            v-if="selectedFile !== {}"
            class="d-flex align-items-center justify-content-center"
          >
            <amg-icon
              size="50"
              :icon="selectedFile.type === 'Folder' ? 'FolderIcon' : 'FileIcon'"
              :class="{'text-warning' : selectedFile.type === 'Folder'}"
            />
          </b-col>
        </b-row>
        <b-row class="border-bottom border-bottom-2">
          <b-col class="d-flex align-items-center justify-content-center">
            <h3 class="font-weight-bolder">
              {{ selectedFile.file_name }}
            </h3>
          </b-col>
        </b-row>
        <b-row class="mt-1">
          <b-col>
            <p class="font-medium-1">
              Created: {{ selectedFile.created_at | myGlobal }} by {{ selectedFile.user_upload }}
            </p>
          </b-col>
        </b-row>
        <b-row
          v-if="selectedFile.updated_at"
          class="mt-10"
        >
          <b-col>
            <p class="font-medium-1">
              Updated: {{ selectedFile.updated_at | myGlobal }}
            </p>
          </b-col>
        </b-row>
        <b-row
          v-if="selectedFile.type === 'Folder'"
          class="mt-10"
        >
          <b-col>
            <p class="font-medium-1">
              Files: {{ selectedFile.countfiel }}
            </p>
          </b-col>
        </b-row>
        <b-row
          v-else
          class="mt-10"
        >
          <b-col>
            <p class="font-medium-1">
              Size: {{ selectedFile.size }}
            </p>
          </b-col>
        </b-row>
        <b-row
          class="mt-10"
        >
          <b-col>
            <p class="font-medium-1">
              Route: {{ currentRoute }}
            </p>
          </b-col>
        </b-row>
        <b-row class="mt-10">
          <b-col>
            <p class="font-medium-1">
              Permissions:
              <span v-if="currentUser.modul_id == selectedFile.module_id">
                Rename, Delete, <span v-if="selectedFile.parent == null"> Share </span>
              </span>
              <span v-else>
                None
              </span>
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button
              v-b-toggle.sidebar-right
              variant="primary"
              class="w-100"
              @click="contentClicked(selectedFile)"
            >
              Open
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-sidebar>
    <share-file-modal
      v-if="shareFileModal"
      :selected-file="selectedFile"
      :show-modal="shareFileModal"
      @closeModal="closeShareFileModal"
    />
    <new-folder-modal
      v-if="newFolderModal"
      :current-user="currentUser"
      :show-modal="newFolderModal"
      :current-folder="currentFolder"
      :current-folder-module="currentFolderModule"
      @closeModal="closeModalNewFolder"
      @closeModalAndRefresh="closeModalNewFolderAndRefresh"
    />
    <b-modal
      v-model="uploadFileModal"
      title="Upload File"
      modal-class="modal-primary"
      button-size="sm"
      ok-title="Ok"
      @hidden="actionOnHideUploadFileModal"
    >
      <drag-and-drop
        v-model="files"
        :files-array="files"
      />
      <template #modal-footer>
        <b-button
          v-show="files.length"
          variant="primary"
          @click="onUploadFile"
        >
          Upload
        </b-button>
      </template>
    </b-modal>
  </b-container>
</template>

<script>
import { VBTooltip } from 'bootstrap-vue'
import FileComponent from '@/views/commons/components/file-mananger/components/FileComponent'
import ShareFileModal from '@/views/commons/components/file-mananger/modals/ShareFileModal'
import NewFolderModal from '@/views/commons/components/file-mananger/modals/NewFolderModal'
import DragAndDrop from '@/views/commons/utilities/DragAndDrop'

export default {
  name: 'FileManangerGeneral',
  components: {
    DragAndDrop, NewFolderModal, ShareFileModal, FileComponent,
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      fileModel: {
        model: false,
      },
      shareFileModal: false,
      newFolderModal: false,
      uploadFileModal: false,
      selectedFile: {},
      history: [
        {
          label: '',
          icon: 'HomeIcon',
          folderId: null,
          folderModule: this.currentUser.modul_id,
        },
      ],
      currentFiles: [],
      currentFolder: '',
      currentFolderModule: '',
      files: [],
    }
  },
  computed: {
    currentRoute() {
      let route = ''
      this.history.forEach(r => {
        route += `${r.label}/`
      })
      return route
    },
  },
  async created() {
    await this.getFilesFromFolder(null)
  },
  methods: {
    actionOnHideUploadFileModal() {
      this.files = []
    },
    async onUploadFile() {
      try {
        const result = await this.showConfirmSwal()
        if (result.isConfirmed) {
          const formData = new FormData()
          this.files.forEach(file => {
            formData.append('images[]', file, file.name)
          })
          formData.append('module_id', this.currentFolderModule)
          formData.append('folder_name', '')
          formData.append('user_id', this.currentUser.user_id)
          formData.append('idfolder', this.currentFolder)
          const headers = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            // eslint-disable-next-line func-names
            onUploadProgress: function (progressEvent) {
              this.uploadPercentage = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            }.bind(this),
          }
          const response = await amgApi.post('/filemoduledragdrop', formData, headers)
          if (response.status === 200) {
            this.uploadFileModal = false
            this.showSuccessSwal()
            await this.getFilesFromFolder(this.currentFolder, this.currentFolderModule)
          }
        }
      } catch (error) {
        this.showErrorSwal(error)
      }
    },
    openUploadFileMoadl() {
      this.uploadFileModal = true
    },
    async getFilesFromFolder(folderId, folderModule = this.currentUser.modul_id) {
      try {
        this.addPreloader()
        const response = await amgApi.post('/searchfilesmodule', {
          module_id: folderModule,
          order: 'asc',
          orderby: 2,
          parent: folderId,
          typee: null,
        })
        this.currentFiles = []
        this.currentFiles = response.data.data
        this.currentFolder = folderId
        this.currentFolderModule = folderModule
        this.removePreloader()
      } catch (error) {
        this.showErrorSwal(error)
        this.removePreloader()
      }
    },
    async contentClicked(content) {
      if (content.type === 'Folder') {
        await this.getFilesFromFolder(content.id, content.module_id)
        this.history.push({
          label: content.file_name,
          icon: 'FolderIcon',
          folderId: content.id,
          folderModule: content.module_id,
        })
      } else {
        window.open(
          content.url,
          '_blank', // <- This is what makes it open in a new window.
        )
      }
    },
    openModalNewFolder() {
      this.newFolderModal = true
    },
    closeModalNewFolder() {
      this.newFolderModal = false
    },
    closeModalNewFolderAndRefresh() {
      this.newFolderModal = false
      this.getFilesFromFolder(this.currentFolder, this.currentFolderModule)
    },
    openShareFileModal(content) {
      this.selectedFile = content
      this.shareFileModal = true
    },
    closeShareFileModal() {
      this.shareFileModal = false
    },
    async historyClicked(index) {
      const route = this.history[index]
      await this.getFilesFromFolder(route.folderId, route.folderModule)
      this.history = this.history.slice(0, index + 1)
    },
    openFileDetail(content) {
      this.selectedFile = content
    },
    deleteFile(content) {
      const index = this.currentFiles.indexOf(content)
      if (index > -1) this.currentFiles.splice(index, 1)
    },
  },
}
</script>

<style scoped>

</style>
