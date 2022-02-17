<template>
  <div>
    <div class="flex">
      <h1>ANSWERS GUIDE</h1>
      <b-button
        class="m-1"
        variant="primary"
        @click="openModal()"
      >
        CREATE +
      </b-button>
    </div>
    <filter-slot
      :filter="[]"
      :filter-principal="filterPrincipal"
      :total-rows="totalRows"
      :paginate="paginate"
      :start-page="startPage"
      :to-page="toPage"
      @reload="$refs['refTableClients'].refresh()"
    >
      <template #table>
        <b-table
          ref="refTableClients"
          :api-url="'/amg-test/get-clients'"
          class="position-relative"
          :items="myProvider"
          :fields="fields"
          primary-key="id"
          table-class="text-nowrap"
          responsive="sm"
          show-empty
          no-provider-filtering
          sticky-header="50vh"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :current-page="paginate.currentPage"
          :per-page="paginate.perPage"
          :filter="searchInput"
          :busy="isBusy"
        > <!--props de b table -->
          <template #table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner class="align-middle mr-1" />
              <strong>Loading ...</strong>
            </div>
          </template>
          <template #cell(client_name)="data">
            {{ data.item.first_name }} {{ data.item.last_name }}
          </template>
          <template #cell(actions)="data">
            <b-button
              class="mr-1"
              variant="success"
              @click="editClient(data.item.id)"
            >
              Edit
            </b-button>
            <b-button
              class="mr-1"
              variant="danger"
              @click="deleteClient(data.item.id)"
            >
              Delete
            </b-button>
          </template>
        </b-table>

      </template>
    </filter-slot>
    <create-client-modal
      v-if="open"
      :client-id="clientId"
      :editing="editing"
      @close="closeModal"
      @reload="update"
    />
  </div>
</template>

<script>

import CreateClientModal from '@/views/social-network/views/amg-prueba/components/CreateClientModal.vue'
import AmgPruebaService from './slots.service'
// eslint-disable-next-line import/extensions

export default {
  components: {
    CreateClientModal,
  },
  data() {
    return {
      items: [],
      open: false,
      editing: false,
      totalRows: 1,
      paginate: {
        perPage: 5,
        currentPage: 1,
      },
      isBusy: false,
      filterPrincipal: {
        type: 'input',
        inputType: 'text',
        placeholder: 'Client...',
        model: '',
      },
      startPage: 0,
      endPage: '',
      toPage: 0,
      sortBy: 'first_name',
      sortDesc: true,
      searchInput: '',
      clientId: 0,
      fields: [
        {
          key: 'client_name',
          label: 'Client name',
          sortable: true,
        },
        {
          key: 'dob',
          label: 'DOB',
          sortable: true,
        },
        {
          key: 'phone',
          label: 'Phone',
          sortable: true,
        },
        {
          key: 'email',
          label: 'Email',
          sortable: true,
        },
        {
          key: 'address',
          label: 'Address',
          sortable: true,
        },
        {
          key: 'npayments',
          label: 'Payments',
          sortable: true,
        },
        {
          key: 'total',
          label: 'Total',
          sortable: true,
        },
        {
          key: 'actions',
          label: 'Actions',
        },
      ],
    }
  },
  methods: {
    async deleteClient(id) {
      console.log(id)
      const data = await AmgPruebaService.deleteClient(id)
      this.$refs.refTableClients.refresh()
      console.log(data)
    },
    editClient(id) {
      this.editing = true
      this.clientId = id
      this.open = true
    },
    async myProvider(ctx) {
      const params = {
        api_url: ctx.apiUrl,
        per_page: ctx.perPage,
        orderby: 'first_name',
        page: ctx.currentPage,
        order: ctx.sortDesc == 1 ? 'desc' : 'asc',
        campo: this.filterPrincipal.model,
      }
      const data = await AmgPruebaService.getClients(params)
      this.items = data.data
      this.startPage = data.from
      this.paginate.currentPage = data.current_page
      this.paginate.perPage = data.per_page
      this.nextPage = this.startPage + 1
      this.endPage = data.last_page
      this.totalRows = data.total
      this.toPage = data.to
      console.log(this.items)
      return this.items || []
    },
    openModal() {
      this.editing = false
      this.open = true
    },
    closeModal() {
      this.open = false
    },
    update() {
      this.$refs.refTableClients.refresh()
    },
  },
}
</script>
<style>
.flex{
  display: flex;
  justify-content: space-between;
}
</style>
