<template>
  <div>
    <b-modal
      modal
      title="TRACKING"
      v-model="mutableIfModalEquipment"
      size="lg"
      modal-class="modal-primary"
      hide-footer
      body-class="mb-2"
      @hidden="closeModal"
      title-tag="h3"
    >
      <div class="table-responsive">
        <b-table
          :api-url="'/inventory/get-tracking-request'"
          ref="refPaymentsGrid"
          class="position-relative"
          :items="myProvider"
          stacked="lg"
          :fields="arrayColumns"
          primary-key="id"
          table-class="text-nowrap table-seccion-head-gray"
          responsive
          show-empty
        >
          <template #table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner class="align-middle mr-1"></b-spinner>
              <strong>Loading ...</strong>
            </div>
          </template>
          <template #cell(status)="data">
          <p
            :style="data.item.status == 'DISAPPROVED' ? 'color: #FF0000' : ( data.item.status == 'SEND' ? 'color: rgb(255 177 0);' : ( data.item.status == 'APPROVED' ? 'color: blue;' : 'color: #00CC00' ) )"
          >{{ data.item.status }}</p>
        </template>
        <template #cell(created_at)="data">
          {{data.item.created_by}}
          <br />
          {{data.item.created_at | myGlobalDay}}
        </template>
        <template #cell(commentary)="data">
          <div style="white-space: normal;" v-html="data.item.commentary"></div>
        </template>
        </b-table>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    modalTrackingRequest: {
      type: Boolean,
    },
    requestId: {
      type: [Number, String],
    },
    global: {
      type: Object,
    },
  },
  components: {},
  data() {
    return {
      mutableIfModalEquipment: this.modalTrackingRequest,
      id: "",
      arrayColumns: [
        {
          key: "created_at",
          label: "Created BY",
          class: "text-left",
          sortable: false,
        },
        {
          key: "status",
          label: "Status",
          class: "text-left",
          sortable: false,
        },
        {
          key: "commentary",
          label: "Commentary",
          class: "text-left",
          sortable: false,
        },
      ],
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeTrackingRequest", false);
    },
    myProvider(ctx) {
      const promise = amgApi.post(`${ctx.apiUrl}`, {
        requestId: this.requestId,
      });
      return promise.then((data) => {
        const items = data.data;
        return items || [];
      });
    },
  },
};
</script>