<template>
  <div>
    <div>
      <b-card
          no-body
          class="mb-0"
      >
        <filter-slot

            :filter="filter"
            :filter-principal="filterPrincipal"
            :total-rows="totalRows"
            :paginate="paginate"
            :start-page="startPage"
            :to-page="toPage"
            @reload="$refs['bank-of-flyer-active'].refresh()"
        >
          <b-table
              id="bank-of-flyer-active"
              slot="table"
              ref="bank-of-flyer-active"
              :has-provider="true"
              sticky-header="70vh"
              small
              no-provider-filtering
              :class="['text-center']"
              :busy.sync="isBusy"

              :fields="filteredFields"
              :per-page="paginate.perPage"
              :current-page="paginate.currentPage"
              :filter="filter"
              class="font-small-3"

          >

          </b-table>
        </filter-slot>
      </b-card>
    </div>
  </div>

</template>

<script>
import FilterSlot from '@/views/crm/views/sales-made/components/slots/FilterSlot'
import { mapGetters } from 'vuex'
import dataFields from '@/views/social-network/views/bank-of-flyers/bank-of-flyers-module/bank-of-flyers-list-active/fields.data.js'
import dataFilters from '@/views/social-network/views/bank-of-flyers/bank-of-flyers-module/bank-of-flyers-list-active/filters.data.js'


export default {

  components: {
    FilterSlot,

  },
  data() {
    return {
      items: {},
      selected: [],
      isBusy: false,
      fields: dataFields,
      totalRows: 0,
      filterPrincipal: {
        type: 'input',
        inputType: 'text',
        placeholder: 'Client...',
        model: '',
      },
      paginate: {
        currentPage: 1,
        perPage: 10,
      },
      basicSearch: true,
      filter: dataFilters,
      startPage: null,
      toPage: null,


      selectAll: false,
    }
  },

  created() {

  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token',

    }),
    filteredFields() {
      if (this.done === 0) return this.fields
      return this.fields.filter(field => field.key !== 'done')
    },
  }
}
</script>

<style scoped>

</style>
