<template>
  <div>
    <b-form-group
      label="CLIENT"
      label-cols-md="2"
    >
      <b-form-input
        v-model="rowData.lead_name"
        readonly
      />
    </b-form-group>
    <b-table
      responsive="sm"
      :fields="fieldsQuicks"
      :items="items"
      :busy="isBusy"
      sticky-header
    >
      <template #table-busy>
        <div class="text-center text-primary my-2">
          <b-spinner class="align-middle mr-1" />
          <strong>Loading ...</strong>
        </div>
      </template>

      <!-- Column: Send By -->
      <template #cell(send_by)="data">
        <span>{{ data.item.user_name }}</span>
        <br>
        <span>{{ data.item.created_at }}</span>
      </template>

      <!-- Column: Content -->
      <template #cell(content)="data">
        <div v-html="data.item.content" />
      </template>

    </b-table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import TableActions from './TableActions.vue'
import crmService from '@/views/crm/services/crm.service'

export default {
  components: {
    TableActions
  },
  props: {
    modul: {
      type: Number,
      required: true
    },
    rowData: {
      type: Object,
      required: true
    },
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token'
    }),
  },
  data() {
    return {
      userId: null,
      roleId: null,
      isBusy: false,
      fieldsQuicks: [
        { key: 'send_by' },
        { key: 'content' },
      ],
      items: []
    }
  },
  methods: {
    async getHistorySms () {
      try {
        this.isBusy = true
        const response = await crmService.postHistorySmsLead({ id: this.rowData.id })
        if (response.status == 200) {
          this.items = response.data
        } else
          this.showToast('warning', 'top-right', 'Warning!', 'AlertTriangleIcon', response.message)
        this.isBusy = false
      } catch (error) {
        this.showToast('danger', 'top-right', 'Oop!', 'AlertOctagonIcon', 'Something went wrong')
      }
    },
  },
  created() {
    this.userId = this.currentUser.id
    this.roleId = this.currentUser.id
    this.getHistorySms()
  },
}
</script>
