<template>
  <div>
    <div class="w-100 text-right">
      <b-button
        variant="info"
        class="mb-2"
        @click="$emit('modalQuickCreateOpen', true)"
      >
        CREATE
      </b-button>
    </div>
    <b-table
      responsive="sm"
      :fields="fieldsQuicks"
      :items="quicks"
      :busy="isBusy"
      sticky-header
    >
      <template #table-busy>
        <div class="text-center text-primary my-2">
          <b-spinner class="align-middle mr-1" />
          <strong>Loading ...</strong>
        </div>
      </template>

      <!-- Column: SMS -->
      <template #cell(sms)="data">
        <div v-html="(data.item.sms.length >= 75 && !data.item.showMore) ? `${data.item.sms.replace(/\n/g, '<br \/>').substr(0, 75)}...` : data.item.sms.replace(/\n/g, '<br \/>')" />
        <b-button
          v-if="data.item.sms.length > 75"
          variant="flat-info"
          size="sm"
          class="text-nowrap"
          @click="onShowMore(data.item.id)"
        >
          {{ (data.item.showMore) ? 'Show Less' : 'Show more' }}
        </b-button>
      </template>

      <!-- Column: CreatedBy -->
      <template #cell(created_by)="data">
        <span>{{ data.item.user_created }}</span>
        <br>
        <span>{{ data.item.created_at }}</span>
      </template>

      <!-- Column: UpdatedBy -->
      <template #cell(updated_by)="data">
        <span>{{ data.item.user_updated }}</span>
        <br>
        <span
          v-if="data.item.updated_at"
        >
          {{ data.item.updated_at }}
        </span>
      </template>

      <!-- Column: Actions -->
      <template #cell(actions)="data">
        <actions-table :options="[ 'edit', 'delete' ]" :row-data="data.item" @onRowEdit="onRowEdit($event, data.item)" @onRowDelete="onRowDelete" />
      </template>
    </b-table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

import ActionsTable from '../lead-table/ActionsTable.vue'

export default {
  components: {
    ActionsTable
  },
  props: {
    modul: {
      type: Number,
      required: true
    },
    quicks: {
      type: Array,
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
      isBusy: true,
      fieldsQuicks: [
        { key: 'title' },
        { key: 'sms' },
        { key: 'created_by'},
        { key: 'updated_by'},
      ],
    }
  },
  methods: {
    onShowMore (id) {
      const index = this.quicks.map(el => el.id).indexOf(id)
      if (index !== -1) {
        this.quicks[index].showMore = !this.quicks[index].showMore
      }
    },
    onRowEdit (id, item) {
      this.$emit('modalQuickEditOpen', item)
    },
    onRowDelete (id) {
      this.$emit('modalQuickDelete', id)
    }
  },
  created() {
    this.userId = this.currentUser.id
    this.roleId = this.currentUser.id
    if ([ 1, 2 ].includes(this.roleId) || this.modul == 15)
      this.fieldsQuicks.push({ key: 'actions' })
    setTimeout(() => {
      this.isBusy = !this.isBusy
    }, 500)
  },
}
</script>
