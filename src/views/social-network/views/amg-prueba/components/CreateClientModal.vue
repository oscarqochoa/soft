<template>
  <b-modal
    id="modal-closing"
    ref="modal"
    v-model="onControl"
    size="xl"
    :title="title"
    @hidden="close"
    @ok="handleOk"
  >
    <div class="d-block">
      <b-form ref="form" @submit.stop.prevent="handleSubmit">
        <h3>Personal Information</h3>
        <b-container>
          <b-form-row>
            <b-col>
              <b-form-group
                id="input-group-1"
                label="First name:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="client.first_name"
                  type="text"
                  placeholder="Enter first name"
                  required
                />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                id="input-group-2"
                label="Last name:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="client.last_name"
                  type="text"
                  placeholder="Enter last name"
                  required
                />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group id="input-group-3" label="DOB:" label-for="input-3">
                <b-form-input
                  id="input-3"
                  v-model="client.dob"
                  type="date"
                  placeholder="Enter date"
                  required
                />
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-row>
            <b-col>
              <b-form-group
                id="input-group-4"
                label="Phone:"
                label-for="input-4"
              >
                <b-form-input
                  id="input-4"
                  v-model="client.phone"
                  type="text"
                  placeholder="Enter phone"
                  required
                />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                id="input-group-5"
                label="Email:"
                label-for="input-5"
              >
                <b-form-input
                  id="input-5"
                  v-model="client.email"
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                id="input-group-6"
                label="Address:"
                label-for="input-6"
              >
                <b-form-input
                  id="input-6"
                  v-model="client.address"
                  type="text"
                  placeholder="Enter address"
                  required
                />
              </b-form-group>
            </b-col>
          </b-form-row>
        </b-container>
        <div class="flex">
          <h3>Payments</h3>
          <b-button :disabled="disable" @click="addPayment"> + </b-button>
        </div>
        <b-container v-for="payment in client.payments" :key="payment.id">
          <b-form-row>
            <b-col>
              <b-form-group
                id="input-group-7"
                label="Transaction ID:"
                label-for="input-7"
              >
                <b-form-input
                  id="input-7"
                  v-model="payment.transaction_id"
                  type="number"
                  placeholder="Enter transaction ID"
                  required
                />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                id="input-group-8"
                label="Amount:  $"
                label-for="input-8"
              >
                <b-form-input
                  id="input-8"
                  v-model="payment.amount"
                  type="number"
                  placeholder="Enter amount"
                  required
                />
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group
                id="input-group-9"
                label="Date:"
                label-for="input-9"
              >
                <b-form-input
                  id="input-9"
                  v-model="payment.date"
                  type="date"
                  placeholder="Enter date"
                  required
                />
              </b-form-group>
            </b-col>
          </b-form-row>
        </b-container>
      </b-form>
    </div>
    <pre>{{ client }}</pre>
  </b-modal>
</template>

<script>
import AmgPruebaService from "@/views/social-network/views/amg-prueba/amg-prueba.service";

export default {
  props: {
    // eslint-disable-next-line vue/require-prop-type-constructor,vue/require-default-prop
    clientId: null,
    editing: null,
  },
  data() {
    return {
      onControl: false,
      client: {
        address: "",
        first_name: "",
        last_name: "",
        dob: "",
        phone: '',
        email: '',
        payments: [],
        client_id: null
      },
      title: '',
      disable: false,
    };
  },
  async created() {
    this.onControl = true;
    this.title = "Add Client";
    if (this.editing) {
      this.client.client_id = this.clientId
      await this.getClient();
      this.title = "Edit Client";
      console.log('full client: ', this.client)
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
    checkValidity() {
      const valid = this.$refs.form.checkValidity();
      return valid;
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.handleSubmit();
    },
    async handleSubmit() {
      // eslint-disable-next-line no-restricted-globals
      if (!this.checkValidity()) {
        return;
      }
      if (this.editing) {
        await this.updateClientAndPayments();
      } else {
        await this.createClientAndPayments();
      }
      this.$nextTick(() => this.$bvModal.hide("modal-closing"));
      this.$emit('reload');
    },
    async createClientAndPayments() {
      const data = await AmgPruebaService.createClient(this.client);
      console.log('Creating')

    },
    async updateClientAndPayments() {
      const data = await AmgPruebaService.updateClient(this.client);
      console.log('Updating')
    },
    addPayment() {
      if (this.client.payments.length <= 4) {
        this.client.payments.push({
          transaction_id: null,
          amount: 0,
          date: null,
          client_id: null,
        });
        this.disable = true
      }
    },
    async getClient() {
      const data = await AmgPruebaService.getClient(this.clientId);
      this.client = data.data[0];
      this.client.client_id = data.data[0].id
      const payments = await AmgPruebaService.getPayments(this.clientId);
      this.$set(this.client, 'payments', payments.data);
    },
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
</style>
