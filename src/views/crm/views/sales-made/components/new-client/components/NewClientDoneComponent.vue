<template>
  <div>
    <b-overlay :show="isBusy" />
    <b-table
      class="text-center"
      :items="myProvider"
      :fields="fields"
    >
      <template v-slot:cell(client)="data">
        <h6>{{ data.item.client }}</h6>
        <p class="mb-0">
          <small>{{ data.item.state }}</small>
        </p>
        <p> <small> {{ data.item.sourcesname }} </small></p>
      </template>
      <template v-slot:cell(program)="data">
        <b-button variant="outline-primary">
          {{ data.item.program }}
        </b-button>
      </template>
      <template v-slot:cell(captured)="data">
        <p> {{ data.item.captured }}</p>
        <p v-if="data.item.commission">
          <small class="text-primary font-weight-bold"> $ {{ getComision(data.item.commission, 0) }} </small>
        </p>
      </template>
      <template v-slot:cell(seller)="data">
        <p> {{ data.item.seller }}</p>
        <p v-if="data.item.commission">
          <small class="text-primary font-weight-bold"> $ {{ getComision(data.item.commission, 1) }} </small>
        </p>
      </template>
      <template v-slot:cell(fee)="data">
        <span> $ {{ data.item.fee }} </span>
      </template>
      <template v-slot:cell(initial_amount)="data">
        <b-icon
          v-if="data.item.initial_amount === '0.00'"
          icon="wallet2"
        />
        <h6
          v-else
          class="text-success font-weight-bold"
        >
          $ {{ data.item.initial_amount }}
        </h6>
      </template>
      <template v-slot:cell(contract_fee_status)="data">
        <b-icon
          icon="file-text"
          :variant="
            (data.item.contract_fee_status === 0) ? 'muted' :
            (data.item.contract_fee_status === 1) ? 'success' :
            'danger' "
        />
      </template>
      <template v-slot:cell(notes_status)="data">
        <b-icon
          icon="chat-square-text-fill"
          :variant="
            (data.item.notes_status === 0) ? 'muted':
            (data.item.notes_status === 1) ? 'success' :
            'danger' "
        />
      </template>
    </b-table>
  </div>
</template>

<script>
import CrmService from '@/views/crm/services/crm.service'

export default {
  name: 'NewClientDoneComponent',
  data() {
    return {
      isBusy: false,
      fields: [
        {
          key: 'client',
          sortable: true,
          label: 'Client',
        },
        {
          key: 'program',
          sortable: false,
          label: 'Program',
        },
        {
          key: 'captured',
          sortable: false,
          label: 'Captured By',
        },
        {
          key: 'seller',
          sortable: false,
          label: 'Seller',
        },
        {
          key: 'fee',
          sortable: false,
          label: 'Fee ($)',
        },
        {
          key: 'initial_amount',
          sortable: false,
          label: 'IP',
        },
        {
          key: 'contract_fee_status',
          sortable: false,
          label: 'CF',
        },
        {
          key: 'notes_status',
          sortable: false,
          label: 'NT',
        },
      ],
    }
  },
  methods: {
    async myProvider(ctx) {
      try {
        console.log(ctx)
        this.isBusy = true
        const data = await CrmService.getSaleMade({
          text: '',
          status: null,
          program: null,
          state_h: null,
          from: null,
          to: null,
          orderby: 11,
          order: 'desc',
          captured: null,
          seller: null,
          salemade: 0,
          rolsession: 1,
          statusip: null,
          sourcesname_id: '',
          done: 1,
        })
        this.isBusy = false
        return data.data
      } catch (e) {
        this.isBusy = false
        this.$swal({
          title: 'Error!',
          text: 'Ocurrio un error inesperado, vuelva a intentarlo.',
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })
        this.$router.go(-1)
        return []
      }
    },
    getComision(comission, id) {
      const data = JSON.parse(comission)
      return data[id].commission
    },
  },
}
</script>

<style scoped>

</style>
