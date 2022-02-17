<template>
  <div>
    <filter-slot
      :filter="[]"
      :filter-principal="{}"
      :total-rows="totalRows"
      :paginate="paginate"
      :start-page="startPage"
      :to-page="toPage"
      @reload="$refs['refClientsList'].refresh()"
    >
      <template #table>
        <b-table
          ref="refClientsList"
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
        >
          <template #cell(client_name)="data">
            <a :class="textLink">{{ data.item.first_name }} {{ data.item.last_name }}</a>
          </template>
          <template #cell(dob)="data">
            <a :class="textLink">{{ data.item.dob }}</a>
          </template>
          <template #cell(phone)="data">
            <a :class="textLink">{{ data.item.phone }}</a>
          </template>
          <template #cell(email)="data">
            <a :class="textLink">{{ data.item.email }}</a>
          </template>
          <template #cell(address)="data">
            <a :class="textLink">{{ data.item.address }}</a>
          </template>
          <template #cell(payments)="data">
            <a :class="textLink">{{ data.item.npayments }}</a>
          </template>
          <template #cell(total)="data">
            <a :class="textLink">{{ data.item.total }}</a>
          </template>
        </b-table>
      </template>
    </filter-slot>
  </div>
</template>

<script>
import AmgTestService from './amg-test.service';
export default {
  methods: {
    onChangeFilter() {
      this.$refs.refClientsList.refresh();
    },
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    async myProvider(ctx) {
      const params = {
        api_url: ctx.apiUrl,
        per_page: ctx.perPage,
        order: ctx.sortDesc == 1 ? "desc" : "asc",
        orderby: 5,
      };
      const data = await AmgTestService.getClients(params);

      this.items = data.data;
      console.log(this.items);
      this.startPage = data.from;
      this.paginate.currentPage = data.current_page;
      this.paginate.perPage = data.per_page;
      this.nextPage = this.startPage + 1;
      this.endPage = data.last_page;
      this.totalRows = data.total;
      this.toPage = data.to;
      // Must return an arthis.items or an empty array if an error occurred
      return this.items || [];
    },
  },

  data() {
    return {
      items: [],
      sortDesc: true,
      searchInput: "",
      orderby: "",
      order: "",
      startPage: 0,
      endPage: "",
      totalRows: 0,
      perPage: 10,
      nextPage: "",
      currentPage: 1,
      paginate: {
        perPage: 10,
        currentPage: 1,
      },
      toPage: 0,
      isBusy: false,
      perPageOptions: [10, 25, 50, 100],
      isClientsTab: false,
      fields: [
        {
          key: "client_name",
          label: "Client name",
          sortable: true,
        },
        {
          key: "dob",
          label: "DOB",
          sortable: true,
        },
        {
          key: "phone",
          label: "Phone",
          sortable: true,
        },
        {
          key: "email",
          label: "Email",
          sortable: true,
        },
        {
          key: "address",
          label: "Address",
          sortable: true,
        },
        {
          key: "payments",
          label: "Payments",
          sortable: true,
        },
        {
          key: "total",
          label: "Total",
          sortable: true,
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
    };
  },
};
</script>

<style>
</style>
