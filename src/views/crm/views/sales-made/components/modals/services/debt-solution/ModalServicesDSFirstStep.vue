<template>
  <b-container fluid>
    <b-row class="mb-1">
      <b-col class="d-flex align-items-center justify-content-end">
        <b-button
          v-if="!isModalShow"
          variant="primary"
          class="mr-1"
          @click="addNewCreditor"
        >
          <feather-icon icon="PlusIcon" />
          ADD CREDITOR
        </b-button>
        <b-button
          :disabled="creditors.length === 0"
          variant="success"
          @click="salesClient.account_id?downloadPdf():downloadPdfEvent()"
        >
          <feather-icon icon="DownloadIcon" />EXPORT TO PDF
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-table
        :fields="fields"
        :items="creditors"
      >
        <template v-slot:cell(unsecured)="data">
          <div class="w-100 text-center">
            <feather-icon
              v-if="data.item.unsecured == 1"
              icon="CircleIcon"
            />
          </div>
        </template>
        <template v-slot:cell(actions)="data">
          <div
            v-if="!isModalShow"
            class="d-flex align-items-center justify-content-center"
          >
            <feather-icon @click="editCreditor(data.item.id)" class="cursor-pointer text-info font-medium-4 mr-1" icon="EditIcon" />
            <feather-icon @click="deleteCreditor(data.item.id)" class="cursor-pointer text-danger font-medium-4" icon="TrashIcon" />
          </div>
        </template>
        <template #bottom-row>
          <td colspan="1" />
          <td>
            <div>
              Total
            </div>
          </td>
          <td>
            <div
              style="padding-left: 10px"
            >
              {{ "$ " + total_balance }}
            </div>
          </td>
          <td>
            <div
              style="padding-left: 12px"
            >
              {{ "$ " + total_monthly }}
            </div>
          </td>
          <td colspan="1" />
          <td>
            <div>
              {{ total_interest + " %" }}
            </div>
          </td>
        </template>
      </b-table>
    </b-row>
    <b-row v-if="(!passwordIsCorrectAndCreditorLength && creditors.length > 0) && isModalAddThis">
      <b-col cols="4">
        <b-input-group>
          <b-form-input
            v-model="password"
            type="password"
            :style="errorPassword == true ? 'border:1px solid red' : 'border: 2px solid #ccc'"
          />
          <b-input-group-append>
            <b-button
              v-if="!show"
              variant="info"
              size="sm"
              @click="verifyPassword"
            >
              <feather-icon icon="CheckIcon" /> Approve Supervisor
            </b-button>
            <b-button
              v-else
              size="sm"
              variant="info"
              disabled
            >
              <b-spinner small /> Loading...
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
    <b-modal
      v-model="openmodal"
      size="lg"
      scrollable
      header-class="b-vue-modal-header"
      @ok.prevent="statemodal==1?$refs.modalCreditorNew.savecreditor():$refs.modalCreditorNew.updatecreditor()"
    >
      <template #modal-header="{ close }">
        <span>
          <h3>{{ statemodal == 1?'ADD CREDITOR':'EDIT CREDITOR' }}</h3>
        </span>
        <i
          class="fas fa-times-circle text-white"
          style="color: #d0cdc5; font-size: 20px; cursor: pointer"
          @click="close"
        />
      </template>
      <modal-add-creditor-new
        ref="modalCreditorNew"
        :idevent="salesClient.event_id"
        :state="statemodal"
        :idcreditor="idcreditor"
        :account-prog="salesClient.account_id"
        :type_in="0"
        :client_id="null"
        @click="closemodal1"
      />
      <template #modal-footer="{ ok, cancel }">
        <div style="display: flex; justify-content: end; align-items: center">
          <b-button
            variant="secondary"
            class="rounded mr-2"
            @click="cancel()"
          >
            CANCEL
          </b-button>
          <b-button
            variant="primary"
            class="rounded"
            style="border-width: 1px;"
            @click="ok()"
          >{{ statemodal==1?'ADD':'UPDATE' }}</b-button>
        </div>
      </template>
    </b-modal>
  </b-container>
</template>

<script>
import ModalAddCreditorNew from "@/views/crm/views/sales-made/components/modals/services/debt-solution/ModalAddCreditorNew.vue"

export default {
  components: {
    ModalAddCreditorNew,
  },
  props: {
    salesClient: Object,
    idleyend: String,
    typeModal: {
      type: Number,
      default: 1,
      // 1: create, 2: show
    },
    isModalShow: Boolean,
    isModalAdd: Boolean,
  },
  data() {
    return {
      blocking: true,
      creditors: [],
      openmodal: false,
      idcreditor: '',
      statemodal: '',
      errorPassword: false,
      okPassword: false,
      password: '',
      validatenext1: false,
      show: false,
      total_balance: '',
      total_monthly: '',
      total_interest: '',
      id_history: '',
      id_analisis: '',
      exportPdfDisabled: false,
      fields: [
        {
          label: 'Creditors Name',
          key: 'credit',
        },
        {
          label: '# Account',
          key: 'account',
        },
        {
          label: 'Total Balance',
          key: 'balance',
          formatter: value => `$ ${value}`,
        },
        {
          label: 'Monthly Current Payment',
          key: 'monthly',
          formatter: value => `$ ${value}`,
        },
        {
          label: 'Months Behind',
          key: 'months',
        },
        {
          label: 'Interest Rate',
          key: 'interest',
          formatter: value => `${value} %`,
        },
        {
          label: 'Type',
          key: 'typt',
        },
        {
          label: 'Unsecured',
          key: 'unsecured',
        },
        {
          label: 'Actions',
          key: 'actions',
        },
      ],
    }
  },
  computed: {
    passwordIsCorrectAndCreditorLength() {
      return (this.okPassword && this.creditors.length > 0) || (this.creditors.filter(element => element.state1 == 1).length > 0)
    },
    isModalAddThis() {
      return this.typeModal === 1 || this.typeModal === 3 || this.typeModal === 4 || this.typeModal === 6
    },
  },
  watch: {
    passwordIsCorrectAndCreditorLength(newVal) {
      this.$emit('input', newVal)
    },
  },
  async created() {
    await this.allDebtSolution()
  },
  methods: {
    addNewCreditor() {
      this.openmodal = true
      this.statemodal = 1
    },
    async allDebtSolution() {
      try {
        const response = await amgApi.post('/salesmadeds', {
          event: this.typeModal === 3 || this.typeModal === 4 || this.typeModal === 5 ? null : this.salesClient.event_id,
          account: this.typeModal === 3 || this.typeModal === 4 || this.typeModal === 5 ? this.salesClient.account_id : null,
        })
        if (response.status === 200) {
          this.creditors = response.data
          if (this.creditors.length > 0) {
            this.total_balance = this.creditors[0].total_balance
            this.total_monthly = this.creditors[0].total_monthly
            this.total_interest = this.creditors[0].total_interest
            this.id_history = this.creditors[0].id_history
            this.id_analisis = this.creditors[0].id_analisis
          }
          this.removePreloader()
        }
      } catch (error) {
        console.error(error)
      }
    },
    async editCreditor(id) {
      try {
        const result = await this.$swal.fire({
          title: 'Are you Sure?',
          text: 'Before finalizing you must save.',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#ab9220',
          cancelButtonColor: '#8f9194',
          confirmButtonText: 'Yes',
        })
        if (result.value) {
          this.openmodal = true
          this.statemodal = 0
          this.idcreditor = id
        }
      } catch (error) {
        console.error(error)
      }
    },
    async closemodal1() {
      this.openmodal = false
      await this.allDebtSolution()
    },
    async deleteCreditor(id) {
      try {
        const result = await this.$swal.fire({
          title: 'Are you Sure?',
          text: 'Before finalizing you must save.',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#ab9220',
          cancelButtonColor: '#8f9194',
          confirmButtonText: 'Yes',
        })
        if (result.value) {
          const response = await amgApi.post('/deletecredit', { id })
          if (response.status === 200) {
            await this.allDebtSolution()
          }
        }
      } catch (error) {
        console.error(error)
      }
    },
    async verifyPassword() {
      try {
        this.show = true
        const response = await amgApi.post('/claims/get-password-supervisor', {
          module_id: 2,
          field_pass: this.password,
          type: 0,
        })
        if (response.status === 200) {
          if (response.data) {
            this.getPassSuper = response.data
            if (this.getPassSuper === 'ok') {
              this.errorPassword = false
              this.okPassword = true
              this.password = ''
              this.validatenext1 = true
              this.show = false
              this.showToast('success', 'top-right', 'Success', 'CheckIcon', 'Password correct')
            } else {
              this.validatenext1 = false
              this.show = false
              this.errorPassword = true
              this.showToast('danger', 'top-right', 'Danger', 'XIcon', 'Incorrect password')
            }
          }
        }
      } catch (error) {
        console.error(error)
      }
    },
    downloadPdf() {
      this.exportPdfDisabled = true
      // eslint-disable-next-line no-restricted-globals
      location.href = `/imprimirfileappotc/?id=${this.salesClient.account_id}`
      setTimeout(() => {
        this.exportPdfDisabled = false
      }, 10000)
    },
    downloadPdfEvent() {
      this.exportPdfDisabled = true
      // eslint-disable-next-line no-restricted-globals
      location.href = `${process.env.VUE_APP_BASE_URL_ASSETS}/imprimirfileappot/?id=${this.salesClient.event_id}`
      setTimeout(() => {
        this.exportPdfDisabled = false
      }, 10000)
    },
  },
}
</script>

<style>
</style>
