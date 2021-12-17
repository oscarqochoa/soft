<template>
  <div>
    <b-modal
      v-model="ifModalCard"
      modal
      size="lg"
      modal-class="top-modal"
      header-class="bg-white py-3"
      hide-footer
      body-class="mb-2"
      @hidden="closeModal"
    >
      <template #modal-header="{close}">
        <div class="text-center">
          <span class="title-card">Delete Credit Card</span>
        </div>
        <img src="/images/new-icons/x.png" style="width:16px; cursor:pointer;" @click="close" />
      </template>
      <ValidationObserver ref="form">
        <ValidationProvider v-slot="{errors}" rules="required">
          <b-row class="mt-2">
            <b-col class="font-bureau-style text-gray-light col-4 mb-2" cols="12">
              <span>Commentary</span>
            </b-col>
            <b-col md="12">
              <div class="form-group mt-0">
                <textarea
                  v-model="commentary"
                  class="style-area"
                  :class="{'border border-danger':errors[0]}"
                />
              </div>
            </b-col>
          </b-row>
        </ValidationProvider>

        <b-row>
          <b-col md="12" style="text-align: center;" class="mt-4">
            <b-button
              class="btn-update-sn rounded font-bureau-style text-white"
              variant="white"
              @click="deletecard"
            >
              <i class="fas fa-trash-alt mr-2" /> Delete
            </b-button>
          </b-col>
        </b-row>
      </ValidationObserver>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["card_id", "lead_id", "session", "ifModalCard"],
  data() {
    return {
      commentary: "",
      cards: []
    };
  },
  mounted() {},
  methods: {
    async deletecard() {
      try {
        const success = await this.$refs.form.validate();
        if (success) {
          const result = await this.$swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true
          });
          if (result.value) {
            const params = {
              cardid: this.card_id,
              leadid: this.lead_id,
              user_id: this.session,
              comment: this.commentary
            };
            this.addPreloader();
            const response = await amgApi.post("/deletecard", params);
            if (response.status === 200) {
              this.removePreloader();
              this.cards = response.data;
              this.$emit("new", this.cards);
              this.closeModal();
              this.showToast(
                "success",
                "top-right",
                "Deleted",
                "CheckIcon",
                "The credit card has been deleted."
              );
            }
          }
        }
      } catch (error) {
        this.showErrorSwal();
      }
    },
    closeModal() {
      this.$emit("click", false);
    }
  }
};
</script>
