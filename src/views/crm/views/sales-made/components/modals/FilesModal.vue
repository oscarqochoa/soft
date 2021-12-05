<template>
  <b-modal
    v-model="modal.files"
    lazy
    centered
    title-class="h3"
    size="xl"
    title="Files"
    hide-footer
    scrollable
  >
    <b-container fluid>
      <b-row>
        <b-col>
          <b-input-group>
            <b-input-group-prepend>
              <b-btn variant="secondary">
                PROGRAM
              </b-btn>
            </b-input-group-prepend>
            <b-form-input
              disabled
              :value="files.program"
            />
          </b-input-group>
        </b-col>
        <b-col>
          <b-input-group>
            <b-input-group-prepend>
              <b-btn variant="secondary">
                CLIENT
              </b-btn>
            </b-input-group-prepend>
            <b-form-input
              disabled
              :value="files.client"
            />
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="mt-2 d-flex align-items-center justify-content-end mr-1">
        <b-btn variant="success">
          <feather-icon icon="PlusIcon"/>
          Add New File
        </b-btn>
      </b-row>
      <b-row class="mt-2">
        <b-col>
          <b-table :items="item" small class="font-small-3" sticky-header="50vh" v-scrollbar :fields="fields">
            <template v-slot:cell(file_name)="data">
              <div>
                <feather-icon icon="FileTextIcon"/>
                {{ data.item.file_name }}
              </div>
            </template>
            <template v-slot:cell(size)="data">
              <div>
                {{data.item.size}} KB
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
                <b-row>
                  <b-col>
                    <b-row v-if="data.item.route">
                      <b-col cols="1" class="text-info text-center d-flex align-items-center justify-content-center">
                        EN
                      </b-col>
                      <b-col class="d-flex">
                        <b-btn variant="info" size="sm">
                          <feather-icon icon="DownloadIcon"/>
                        </b-btn>
                        <b-btn variant="success" class="ml-1" size="sm">
                          <feather-icon icon="Share2Icon"/>
                        </b-btn>
                      </b-col>
                    </b-row>
                    <b-row v-if="data.item.route_es" class="mt-1">
                      <b-col cols="1" class="text-info text-center d-flex align-items-center justify-content-center">
                        ES
                      </b-col>
                      <b-col class="d-flex">
                        <b-btn variant="info" size="sm">
                          <feather-icon icon="DownloadIcon"/>
                        </b-btn>
                        <b-btn variant="success" class="ml-1" size="sm">
                          <feather-icon icon="Share2Icon"/>
                        </b-btn>
                      </b-col>
                    </b-row>
                  </b-col>
                  <b-col cols="6" class="d-flex align-items-center justify-content-start">
                    <b-btn variant="warning" size="sm">
                      <feather-icon icon="RefreshCcwIcon" />
                    </b-btn>
                  </b-col>
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
import CrmService from '@/views/crm/services/crm.service'

export default {
  name: 'FilesModal',
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
    }
  },
  async created() {
    this.item = await CrmService.getLeadsFiles({
      program: this.files.program,
      id: this.files.id,
    })
    console.log(this.item)
  },
}
</script>

<style scoped>

</style>
