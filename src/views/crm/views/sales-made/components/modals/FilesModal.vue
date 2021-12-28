<template>
  <b-modal
    v-model="modal.files"
    lazy
    centered
    title-class="h3 text-white font-weight-bolder"
    size="xl"
    title="Files"
    hide-footer
    scrollable
  >
    <b-container fluid>
      <program-client-header
        :client="files.client"
        :program="files.program"
        class="sticky-top"
      />
      <b-row class="mt-2 d-flex align-items-center justify-content-end mr-1">
        <b-btn
          variant="info"
          @click="loadFile = !loadFile"
        >
          <feather-icon icon="PlusIcon" />
          Upload File
        </b-btn>
      </b-row>
      <b-row v-if="loadFile">
        <b-container fluid>
          <b-row class="my-2">
            <div>
              <label>Type</label>
              <v-select
                v-model="selected"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="options"
                :clearable="false"
                :reduce="(option) => option.id"
              />
            </div>
            <div
              v-if="selected !== 3"
              class="mx-4"
            >
              <label>DOE</label>
              <b-form-datepicker
                id="from-date-picker"
                v-model="doe"
                locale="en"
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              />
            </div>
          </b-row>
          <b-row>
            <b-form-file
              v-model="file"
              drop-placeholder="Drop file here..."
              placeholder="Choose a file or drop it here..."
              size="lg"
            />
          </b-row>
          <b-row class="mt-2">
            <b-button variant="success">
              <feather-icon icon="UploadIcon" /> Upload
            </b-button>
          </b-row>
        </b-container>
      </b-row>
      <b-row class="mt-2">
        <b-col>
          <b-table
            v-scrollbar
            :items="item"
            small
            class="font-small-3"
            sticky-header="50vh"
            :fields="fields"
          >
            <template v-slot:cell(file_name)="data">
              <div>
                <feather-icon icon="FileTextIcon" />
                {{ data.item.file_name.replace('UNSIGNED', files.client) }}
              </div>
            </template>
            <template v-slot:cell(size)="data">
              <div>
                {{ data.item.size }} KB
              </div>
            </template>
            <template v-slot:cell(expiration)="data">
              <div v-if="data.item.expiration">
                {{ data.item.expiration | myGlobal }}
              </div>
            </template>
            <template v-slot:cell(updated_at)="data">
              {{ data.item.updated_at | myGlobalWithHour }}
            </template>
            <template v-slot:cell(actions)="data">
              <b-container fluid>
                <b-row v-if="data.item.is_ag">
                  <b-col>
                    <b-row v-if="data.item.route">
                      <b-col
                        cols="1"
                        class="text-info text-center d-flex align-items-center justify-content-center"
                      >
                        EN
                      </b-col>
                      <b-col class="d-flex">
                        <b-btn
                          variant="info"
                          size="sm"
                          :href="data.item.url"
                          target="_blank"
                          :disabled="!data.item.url"
                        >
                          <feather-icon icon="DownloadIcon" />
                        </b-btn>
                        <b-btn
                          variant="success"
                          class="ml-1"
                          size="sm"
                        >
                          <feather-icon icon="Share2Icon" />
                        </b-btn>
                      </b-col>
                    </b-row>
                    <b-row
                      v-if="data.item.route_es"
                      class="mt-1"
                    >
                      <b-col
                        cols="1"
                        class="text-info text-center d-flex align-items-center justify-content-center"
                      >
                        ES
                      </b-col>
                      <b-col class="d-flex">
                        <b-btn
                          variant="info"
                          size="sm"
                          :href="data.item.route_es"
                          target="_blank"
                          :disabled="!data.item.route_es"
                        >
                          <feather-icon icon="DownloadIcon" />
                        </b-btn>
                        <b-btn
                          variant="success"
                          class="ml-1"
                          size="sm"
                        >
                          <feather-icon icon="Share2Icon" />
                        </b-btn>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col
                    cols="6"
                    class="d-flex align-items-center justify-content-start"
                  >
                    <b-btn
                      variant="warning"
                      size="sm"
                      @click="generatePdf(files.id, files.program, files.sale_id, data.item.is_ag)"
                    >
                      <feather-icon icon="RefreshCcwIcon" />
                    </b-btn>
                  </b-col>
                </b-row>
                <b-row v-else>
                  <b-btn
                    variant="info"
                    size="sm"
                    target="_blank"
                    :href="base_url + '/dowloadfile?route='+data.item.route +'/'+data.item.file_name+'&file='+data.item.file_name"
                  >
                    <feather-icon icon="DownloadIcon" />
                  </b-btn>
                  <b-btn
                    class="ml-1"
                    variant="danger"
                    size="sm"
                    @click="deleteFile(data.item.id, data.item.route +'/'+data.item.file_name)"
                  >
                    <feather-icon icon="TrashIcon" />
                  </b-btn>
                </b-row>
              </b-container>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
import vSelect from 'vue-select'
import CrmService from '@/views/crm/services/crm.service'
import ProgramClientHeader from '@/views/crm/views/sales-made/components/modals/ProgramClientHeader'

export default {
  name: 'FilesModal',
  components: { ProgramClientHeader, vSelect },
  props: {
    modal: {
      type: Object,
      required: true,
    },
    files: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      item: [],
      fields: [
        {
          key: 'file_name',
          sortable: false,
          label: 'Name',
        },
        {
          key: 'size',
          sortable: false,
          label: 'Size',
        },
        {
          key: 'expiration',
          sortable: false,
          label: 'DOE',
        },
        {
          key: 'updated_at',
          sortable: false,
          label: 'Upload',
        },
        {
          key: 'updater_name',
          sortable: false,
          label: 'Updated By',
        },
        {
          key: 'actions',
          sortable: false,
          label: 'Actions',
        },
      ],
      loadFile: false,
      file: null,
      options: [
        {
          label: 'ID',
          id: 1,
        },
        {
          label: 'UB',
          id: 2,
        },
        {
          label: 'Others',
          id: 3,
        },
      ],
      selected: 1,
      doe: '',
      base_url: process.env.VUE_APP_BASE_URL_ASSETS,
    }
  },
  async created() {
    await this.loadTable()
  },
  methods: {
    async loadTable() {
      try {
        this.item = await CrmService.getLeadsFiles({
          program: this.files.program,
          id: this.files.id,
        })
      } catch (error) {
        this.showToast('danger', 'top-right', 'Error', 'XIcon', error)
      }
    },
    // eslint-disable-next-line camelcase
    async generatePdf(lead_id, program, sale_id, typee) {
      const result = await this.$swal.fire({
        icon: 'warning',
        title: 'Are you sure ?',
        text: 'You won\'t be able to revert this!',
        showCancelButton: true,
      })
      try {
        if (result.isConfirmed) {
          this.$store.commit('app/SET_LOADING', true)
          const response = await CrmService.generatePdf({
            lead_id,
            program,
            sale_id,
            typee,
          })
          this.$store.commit('app/SET_LOADING', false)
          if (response === 'ok') this.showToast('success', 'top-right', 'Success', 'CheckIcon', 'Tu archivo se genero correctamente')
          await this.loadTable()
        }
      } catch (error) {
        this.$store.commit('app/SET_LOADING', false)
        this.showToast('danger', 'top-right', 'Error', 'XIcon', error)
        await this.loadTable()
      }
    },
    async deleteFile(id, url) {
      const result = await this.$swal.fire({
        icon: 'warning',
        title: 'Are you sure ?',
        text: 'You won\'t be able to revert this!',
        showCancelButton: true,
      })
      try {
        if (result.isConfirmed) {
          this.$store.commit('app/SET_LOADING', true)
          const response = await CrmService.deleteFile({
            id,
            url,
          })
          this.$store.commit('app/SET_LOADING', false)
          if (response === 'ok') this.showToast('success', 'top-right', 'Success', 'CheckIcon', 'Tu archivo se elimino correctamente')
          await this.loadTable()
        }
      } catch (error) {
        this.$store.commit('app/SET_LOADING', false)
        this.showToast('danger', 'top-right', 'Error', 'XIcon', error)
        await this.loadTable()
      }
    },
  },
}
</script>

<style>
</style>
