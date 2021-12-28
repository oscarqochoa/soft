<template>
  <b-container fluid>
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
      <template v-for="(content, index) in currentFiles">
        <b-col
          :key="index"
          cols="2"
        >
          <b-dropdown
            :ref="'dropdown' + index"
            variant="transparent"
            toggle-class="text-decoration-none"
            no-caret
          >
            <template #button-content />
            <b-dropdown-item
              v-b-toggle.sidebar-right
              @click="selectedFile = content"
            >
              <feather-icon
                icon="InfoIcon"
                class="mr-50"
              />  Details
            </b-dropdown-item>
          </b-dropdown>
          <div
            class="d-flex flex-column align-items-center justify-content-center cursor-pointer mt-50"
            @click="contentClicked(content)"
            @contextmenu.prevent="contentRightClicked(content, 'dropdown' + index)"
          >
            <amg-icon
              :icon="content.type === 'Folder' ? 'FolderIcon' : 'FileIcon'"
              class="font-large-4"
              :class="{'text-warning' : content.type === 'Folder'}"
            />
            <h5 class="mt-1 text-center">
              {{ content.file_name }}
            </h5>
          </div>
        </b-col>
      </template>
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
              Updated: {{ selectedFile.updated_at | myGlobal }} by {{ selectedFile.user_modified }}
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
  </b-container>
</template>

<script>

export default {
  name: 'FileManangerGeneral',
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
        this.currentFiles = response.data.data
        this.currentFolder = folderId
        this.removePreloader()
      } catch (error) {
        this.showErrorSwal(error)
        this.removePreloader()
      }
    },
    contentRightClicked(content, ref) {
      console.log(this.$refs[ref][0].show(), content)
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
    async historyClicked(index) {
      const route = this.history[index]
      await this.getFilesFromFolder(route.folderId, route.folderModule)
      this.history = this.history.slice(0, index + 1)
    },
  },
}
</script>

<style scoped>

</style>
