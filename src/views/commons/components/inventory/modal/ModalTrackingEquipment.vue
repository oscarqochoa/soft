<template>
  <div>
    <b-modal
      modal
      title="Tracking"
      v-model="mutableIfModalEquipment"
      size="lg"
      modal-class="modal-primary"
      hide-footer
      body-class="mb-2"
      @hidden="closeModal"
      title-tag="h3"
    >
      <!-- <b-container>
        <b-row class="mt-2">
          <b-table class="font-small-2" :fields="fields" :items="table" small>
            <template> </template>
          </b-table>
        </b-row>
      </b-container> -->
      <div class="table-responsive">
        <b-table
          :api-url="'/inventory/get-tracking-equipment'"
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
              :style="
                data.item.status == 'RETURN'
                  ? 'color: #FF0000'
                  : data.item.status == 'REGISTERED'
                  ? 'color: blue'
                  : data.item.status == 'ASSIGNED'
                  ? 'color: rgb(255 177 0);'
                  : data.item.status == 'TO REPAIR'
                  ? 'color: rgb(122 0 255);'
                  : 'color: #00CC00'
              "
            >
              {{ data.item.status }}
            </p>
          </template>

          <template #cell(created_at)="data">
            {{ data.item.created_by }}
            <br />
            {{ data.item.created_at | myGlobalDay }}
          </template>

          <template #cell(description)="data">
            <div
              style="white-space: normal"
              v-html="data.item.description"
            ></div>
          </template>
        </b-table>
      </div>
    </b-modal>
  </div>
</template>


<script>
export default {
  props: {
    modalTracking: {
      type: Boolean,
    },
    global: {
      type: Object,
    },
    equipmentId: {
      type: [Number,String],
    },
  },
  data() {
    return {
      mutableIfModalEquipment: this.modalTracking,
      
      arrayColumns: [
        {
          key: "status",
          label: "Status",
          class: "text-left",
          sortable: false,
        },
        {
          key: "created_at",
          label: "Created BY",
          class: "text-left",
          sortable: false,
        },
        {
          key: "description",
          label: "Commentary",
          class: "text-left",
          sortable: false,
        },
      ],
    };
  },
  methods: {
    closeModal() {
      this.$emit("close", false);
    },
    myProvider(ctx) {
      const promise = amgApi.post(`${ctx.apiUrl}`, {
        equipmentId: this.equipmentId,
      });
      return promise.then((data) => {
        const items = data.data;
        return items || [];
      });
    },
  },
  created() {},
};
</script>