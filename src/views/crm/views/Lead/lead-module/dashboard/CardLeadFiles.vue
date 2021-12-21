<template>
  <b-card title="FILES">
    <b-table
      show-empty
      sticky-header
      striped
      small
      responsive="sm"
      :fields="fields"
      :items="S_FILES_LEADS"
      :busy.sync="isBusy"
      class="mb-0"
    >
      <template #table-busy>
        <div class="text-center text-primary my-2">
          <b-spinner class="align-middle mr-1" />
          <strong>Loading ...</strong>
        </div>
      </template>
      
      <template #cell(file_name)="data">
        <a v-if="data.item.isDisabled" :href="data.item.route" target="_blank">
          <b-icon :icon="getIcon(data.item.extension)" />
          {{ data.item.file_name }}.{{ data.item.extension }}
        </a>
        <validation-observer
          v-else
          :ref="`refFormObserver${ data.index }`"
        >
          <validation-provider
            #default="validationContext"
            name="File Name"
            rules="required"
          >
            <b-input-group
              label-for="file-name"
            >
              <b-form-input
                id="file-name"
                :ref="`fileName${ data.index }`"
                v-model="data.item.custom_file_name"
                :state="getValidationState(validationContext)"
                @keyup.enter="onSubmit(data.index, data.item)"
                @keyup.esc="data.item.isDisabled = true"
              />
              <b-input-group-append>
                <b-button
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  variant="outline-success"
                  @click="onSubmit(data.index, data.item)"
                >
                  <feather-icon v-if="!isLoading" icon="CheckIcon" />
                  <b-spinner v-else small />
                </b-button>
                <b-button
                  v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                  variant="outline-danger"
                  @click="data.item.isDisabled = true"
                >
                  <feather-icon v-if="!isLoading" icon="XIcon" />
                  <b-spinner v-else small />
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </validation-provider>
        </validation-observer>
      </template>
      
      <template #cell(created_by)="data">
        <span>{{ data.item.user_upload }}</span>
        <br />
        <span>{{ data.item.created_at | myGlobalWithHour }}</span>
      </template>
      
      <template #cell(actions)="data">
        <div class="w-100 text-center">
          <b-button
            variant="flat-warning"
            class="button-little-size rounded-circle"
            :disabled="isLoading"
            @click="data.item.isDisabled = false"
          >
            <feather-icon
              v-if="!isLoading"
              icon="Edit2Icon"
            />
            <b-spinner v-else small />
          </b-button>
          <b-button
            variant="flat-danger"
            class="button-little-size rounded-circle ml-1"
            :disabled="isLoading"
            @click="onDeleteFile(data.index, data.item)"
          >
            <feather-icon
              v-if="!isLoading"
              icon="Trash2Icon"
            />
            <b-spinner v-else small />
          </b-button>
        </div>
      </template>

    </b-table>

    <b-card-footer class="text-right">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-danger"
      >
        <feather-icon
          icon="UploadCloudIcon"
          class="mr-50"
        />
        <span class="align-middle">Upload File</span>
      </b-button>
    </b-card-footer>
  </b-card>
</template>

<script>

import { mapActions, mapGetters, mapState,  } from 'vuex'

import Ripple from 'vue-ripple-directive'

import formValidation from '@core/comp-functions/forms/form-validation'

export default {
  components: {},
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token'
      /* G_TEMPLATES: 'CrmTemplateStore/G_TEMPLATES' */
    }),
    ...mapState({
      S_FILES_LEADS: event => event.CrmLeadStore.S_FILES_LEADS
    }),
  },
  created () {
    this.authUser = this.currentUser
    this.getFilesLeads()
  },
  data () {
    return {
      authUser: {},
      fields: [
        { key: 'file_name' },
        { key: 'created_by' },
        { key: 'actions' },
      ],
      isBusy: false,
      isLoading: false,
    }
  },
  directives: { Ripple },
  methods: {
    ...mapActions({
      A_GET_FILES_LEADS: 'CrmLeadStore/A_GET_FILES_LEADS',
      A_SET_FILE_LEAD: 'CrmLeadStore/A_SET_FILE_LEAD'
    }),
    async getFilesLeads (orderby, order) {
      try {
        this.isBusy = true
        await this.A_GET_FILES_LEADS({
          id_lead: this.lead.id,
          orderby: orderby || 2,
          order: order || 'asc',
        })
        this.isBusy = false
      } catch (error) {
        console.log('Something went wrong getFilesLeads', error)
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', this.getInternalErrors(error))
        this.isBusy = false
      }
    },
    getIcon (extension) {
      switch (true) {
        case (extension === 'pdf'): return 'file-pdf'
        case (extension === 'pptx'): return 'file-ppt'
        case (extension === 'xlsx' && extension === 'csv'): return 'file-excel'
        case (extension === 'docx'): return 'file-word'
        case (['png', 'jpg', 'jpeg', 'ico'].includes(extension)): return 'file-image'
      }
      return 'file'
    },
    async onSubmit (index, item) {
      if (await this.$refs[`refFormObserver${ index }`].validate()) {
        this.showConfirmSwal()
        .then(async result => {
          if (result.value) {
            this.isLoading = true
            console.log('this.$refs[`fileName${ index }`].value', this.$refs[`fileName${ index }`])
            const response = await this.A_SET_FILE_LEAD({
              file_id: item.id,
              name_file: item.custom_file_name,
              user_id: this.authUser.user_id
            })
            if (this.isResponseSuccess(response)) {
              this.S_FILES_LEADS[index].file_name = item.custom_file_name
              this.S_FILES_LEADS[index].isDisabled = true
              this.showToast('success', 'top-right', 'Success!', 'CheckIcon', 'Successful operation')
            } else
              this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', 'Something went wrong.', response.message)
            this.isLoading = false
          }
        }).catch(error => {
          console.log('Something went wrong onSubmit', error)
          this.showErroSwal()
        })
      }
    },
  },
  mounted () {},
  props: {
    modul: {
      type: Number,
      required: true
    },
    onlyRead: {
      type: Boolean,
      required: true
    },
    lead: {
      type: Object,
      required: true
    },
  },
  setup () {
    const {
      refFormObserver,
      getValidationState,
    } = formValidation(() => {})

    return {
      refFormObserver,
      getValidationState
    }
  },
}
</script>
