<template>
  <b-dropdown
    variant="link"
    no-caret
    :right="$store.state.appConfig.isRTL"
  >
    <template #button-content>
      <feather-icon
        icon="MoreVerticalIcon"
        size="16"
        class="align-middle text-body"
      />
    </template>

    <!-- returnToSocialNetwork -->
    <b-dropdown-item
      v-if="options.includes('returnToSocialNetwork') && rowData.status_sn_id == 2"
      v-b-tooltip.hover.left="'Return to Social Network'"
      @click="onRowProcess(rowData.id)"
    >
      <feather-icon icon="CornerUpLeftIcon" />
      <span
        class="align-middle ml-50"
      >Return</span>
    </b-dropdown-item>

    <!-- sendSMS -->
    <b-dropdown-item
      v-if="options.includes('sendSMS')"
      v-b-tooltip.hover.left="'Send SMS'"
      v-b-modal.modal-primary
      @click="onRowSms(rowData)"
    >
      <feather-icon icon="MessageSquareIcon" />
      <span
        class="align-middle ml-50"
      >SMS</span>
    </b-dropdown-item>

    <!-- Edit -->
    <b-dropdown-item
      v-if="options.includes('edit')"
      variant="warning"
      @click="onRowEdit(rowData.id)"
    >
      <feather-icon icon="TrashIcon" />
      <span class="align-middle ml-50">Edit</span>
    </b-dropdown-item>

    <!-- Delete -->
    <b-dropdown-item
      v-if="options.includes('delete')"
      variant="danger"
      @click="onRowDelete(rowData.id)"
    >
      <feather-icon icon="TrashIcon" />
      <span class="align-middle ml-50">Delete</span>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import {
  BSidebar, BForm, BFormGroup, BFormInvalidFeedback, BButton,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import formValidation from '@core/comp-functions/forms/form-validation'
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import crmService from '@/views/crm/services/crm.service'

export default {
  components: {
    BSidebar,
    BForm,
    BFormGroup,
    BFormInvalidFeedback,
    BButton,
    VueGoogleAutocomplete,

    // Form Validation
    ValidationProvider,
    ValidationObserver,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    rowData: {
      required: true
    },
  },
  data() {
    return {
    }
  },
  methods: {
    onRowProcess (id) {
      this.$emit('onRowProcess', id)
    },
    onRowSms (item) {
      this.$emit('modalSmsOpen', item)
    },
    onRowEdit (id) {
      this.$emit('onRowEdit', id)
    },
    onRowDelete (id) {
      this.$emit('onRowDelete', id)
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

#add-new-user-sidebar {
  .vs__dropdown-menu {
    max-height: 200px !important;
  }
}
.sidebar-xl {
  width: 90rem;
}
</style>
