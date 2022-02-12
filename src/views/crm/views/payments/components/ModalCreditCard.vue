<template>
  <b-card no-body class="mt-2 h-28">
    <!-- Card Title -->
    <b-card-title>Cards</b-card-title>
    <div class="col-lg-12 px-0">
      <div style="margin-bottom: 0">
        <!-- Table -->
        <b-table
          slot="table"
          no-provider-filtering
          ref="refClientsList"
          primary-key="id"
          table-class="text-nowrap"
          responsive="sm"
          show-empty
          sticky-header="30vh"
          :items="cards"
          :fields="fields"
        >
          <!-- Column Select -->
          <template #cell(Select)="data">
            <ValidationProvider
              name="comment"
              rules="required"
              v-slot="{ errors }"
            >
              <b-form-radio
                class="vs-checkbox-con"
                :class="{ 'border-danger': errors[0] }"
                :value="data.item.id"
                @change="$emit('CardId', data.item.id)"
                v-model="selected"
                plain
              >
              </b-form-radio>
            </ValidationProvider>
          </template>
          <!-- Column CARD NUMBER -->
          <template #cell(cardnumber)="data">
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span> {{ "XXXX-XXXX-XXXX-" + data.item.cardnumber }} </span>
            </div>
          </template>
          <!-- Column CVC -->
          <template #cell(cardsecuritycode)="data">
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span>
                {{
                  data.item.cardsecuritycode.length == 3
                    ? "XX" + data.item.cardsecuritycode.substr(2)
                    : "XXX" + data.item.cardsecuritycode.substr(3)
                }}
              </span>
            </div>
          </template>
        </b-table>
      </div>
      <!-- Buttton ADD -->
      <div class="col-lg-12 text-right pr-0 mt-4">
        <b-button
          type="button"
          variant="primary"
          class="btn rounded float-right btn-orange"
          @click="openModalCreateCard"
        >
          <feather-icon icon="PlusCircleIcon" size="15"></feather-icon> ADD
        </b-button>
      </div>
    </div>
    <!-- Modal Create Card -->
    <modal-card-create
      v-if="modalCreateCard"
      :ifModalCard="modalCreateCard"
      @click="closeModalCreateCard"
      :session="cardsLead.user_id"
      :idlead="cardsLead.lead_id"
      @new="addCard"
    ></modal-card-create>
  </b-card>
</template>
<script>
import ModalCardCreate from "@/views/crm/views/payments/components/ModalCardCreate.vue";
import PaymentService from "../service/payments.service";
import fields from "../data/fields.credit.card";
export default {
  components: {
    ModalCardCreate,
  },
  props: {
    cardsLead: {
      type: Object,
      default: () => ({}),
    },
  },
  data:function() {
    return {
      selected: null,
      //More information
      cards: [],
      modalCreateCard: false,
      //data field
      fields: fields,
    };
  },

  created:function() {
    this.searchcards();
  },
  methods: {
    //Cards
    openModalCreateCard:function() {
      this.modalCreateCard = true;
    },
    closeModalCreateCard:function() {
      this.modalCreateCard = false;
    },

    addCard:function(cards) {
      this.cards = cards;
    },

    searchcards: async function() {
      try {
        const data = await PaymentService.searchcards({
          id: this.cardsLead.lead_id,
        });
        this.cards = data;
      } catch (error) {
        console.log(error);
        this.showToast(
          "danger",
          "top-right",
          "Error",
          "XIcon",
          "Something went wrong!"
        );
      }
    },
  },
};
</script>

<style scoped>
.w-pre {
  width: 32% !important;
}
.w-100 {
  width: 100% !important;
}

.w-15 {
  width: 15.5% !important;
}
</style>
