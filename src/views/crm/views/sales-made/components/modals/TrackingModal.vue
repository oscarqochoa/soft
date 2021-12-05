<template>
  <b-modal
    lazy
    v-model="modal.tracking"
    centered
    header-bg-variant="primary"
    title-class="text-white h3"
    size="lg"
    title="TRACKING"
    hide-footer
    scrollable
  >
    <b-container fluid>
      <b-row>
        <b-col>
          <b-input-group>
            <b-input-group-prepend>
              <b-btn variant="secondary">
                PROGRAM
              </b-btn>
            </b-input-group-prepend>
            <b-form-input
              disabled
              :value="tracking.program"
            />
          </b-input-group>
        </b-col>
        <b-col>
          <b-input-group>
            <b-input-group-prepend>
              <b-btn variant="secondary">
                CLIENT
              </b-btn>
            </b-input-group-prepend>
            <b-form-input
              disabled
              :value="tracking.client"
            />
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-table
          :fields="fields"
          :items="tracking.tabla"
          small
        >
          <template v-slot:cell(date)="data">
            {{data.item.date | myGlobalWithHour}}
          </template>
          <template v-slot:cell(type)="data">
            <p
              class="text-capitalize my-auto"
              :class="(data.item.type === 'send') ? 'text-info' :
                (data.item.type === 'approved') ? 'text-success' : 'text-warning'
              "
            >
              {{ data.item.type }}
            </p>
          </template>
        </b-table>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>

export default {
  name: 'TrackingModal',
  props: {
    modal: {
      type: Object,
      required: true,
    },
    tracking: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      fields: [
        {
          key: 'date',
          sortable: false,
          label: 'Date',
        },
        {
          key: 'user_name',
          sortable: false,
          label: 'User',
        },
        {
          key: 'type',
          sortable: false,
          label: 'Action',
        },
        {
          key: 'comments',
          sortable: false,
          label: 'Observation',
        },
      ],
    }
  },

}
</script>

<style scoped>

</style>
