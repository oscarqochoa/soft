<template>
  <b-card title="TASKS">
    <b-table
      show-empty
      sticky-header
      striped
      responsive="sm"
      small
      :fields="fieldsTask"
      :items="lead.lead_tasks"
      class="mb-0"
    >

      <template #cell(title)="data">
        {{ data.item.title }}
      </template>

    </b-table>
    <div v-if="!onlyRead" class="pt-2 text-right">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        variant="outline-primary"
      >
        <feather-icon
          icon="PlusIcon"
          class="mr-50"
        />
        <span class="align-middle">Add</span>
      </b-button>
    </div>
  </b-card>
</template>

<script>

import { mapActions, mapGetters, mapState,  } from 'vuex'

import Ripple from 'vue-ripple-directive'

export default {
  components: {},
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token'
      /* G_TEMPLATES: 'CrmTemplateStore/G_TEMPLATES' */
    }),
  },
  created () {},
  data () {
    return {
      fieldsTask: [
        { key: 'subject' },
        { key: 'date', label: 'Date/Hour' },
        { key: 'sms' },
        { key: 'Actions' },
      ],
    }
  },
  directives: {
    Ripple,
  },
  methods: {
    ...mapActions({
      /* A_GET_TEMPLATES: 'CrmTemplateStore/A_GET_TEMPLATES' */
    })
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
    }
  },
  setup() {},
}
</script>
