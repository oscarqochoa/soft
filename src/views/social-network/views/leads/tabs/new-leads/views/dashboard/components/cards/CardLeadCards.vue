<template>
  <b-card body-class="px-0">
    <b-container>
      <b-row>
        <b-col cols="6">
          <h3 class="title-card">Cards</h3>
        </b-col>
        <b-col cols="6" class="text-right"> </b-col>
      </b-row>
    </b-container>

    <br />

    <b-table small :fields="table.fields" :items="cards">
      <template #cell(card_number)="data">
        {{ "XXXX-XXXX-XXXX-" + data.item.cardnumber }}
      </template>

      <template #cell(cvc)="data">
        {{
          data.item.cardsecuritycode.length == 3
            ? "XX" + data.item.cardsecuritycode.substr(2)
            : "XXX" + data.item.cardsecuritycode.substr(3)
        }}
      </template>

      <template #cell(actions)="data">
        <b-button
          variant="flat-info"
          class="button-little-size rounded-circle mr-1"
          @click="openModalViewCard(data.item.id)"
        >
          <feather-icon icon="EyeIcon"></feather-icon>
        </b-button>

        <b-button
          variant="flat-danger"
          class="button-little-size rounded-circle"
          @click="openModalDeleteCard(data.item.id)"
        >
          <feather-icon icon="TrashIcon"></feather-icon>
        </b-button>
      </template>
    </b-table>

    <div class="text-right mr-1 mt-3">
      <b-button variant="primary" @click="openModalCreateCard()">
        <feather-icon icon="PlusIcon" size="15"></feather-icon>
        ADD
      </b-button>
    </div>

    <modal-create-card
      v-if="showModalCreateCard"
      :lead="lead"
      @onClose="closeModalCreateCard"
    >
    </modal-create-card>

    <modal-show-card
      v-if="showModalViewCard"
      :modul="15"
      :lead="lead"
      :card="card"
      @onClose="closeModalViewCard"
    ></modal-show-card>
  </b-card>
</template>

<script>
import { mapActions } from "vuex";

// Services
import SNLeadsService from "@/views/social-network/services/leads";

// Components
import ModalCreateCard from "@/views/commons/components/credit-cards/ModalCreateCard.vue";
import ModalShowCard from "@/views/commons/components/credit-cards/ModalShowCard.vue";

export default {
  props: {
    lead: {
      type: Object,
    },
    cardsLead: {
      type: Object,
    },
  },
  components: {
    ModalCreateCard,
    ModalShowCard,
  },
  data() {
    return {
      key: Math.random(),

      table: {
        fields: [
          { key: "cardholdername", label: "Card Holder Name" },
          { key: "card_number", label: "Card Number" },
          { key: "type_card", label: "Type" },
          { key: "card_expi_month", label: "MM" },
          { key: "card_expi_year", label: "YY" },
          { key: "cvc", label: "CVC" },
          { key: "actions", label: "Actions" },
        ],
      },

      statesCard: [],
      states_leads: [],
      dragCount: 0,

      cards: [],
      card: null,
      modalCreateCard: false,
      modalCard: false,
      deletecardmodal: false,
      card_id: "",

      // Modals
      showModalCreateCard: false,
      showModalViewCard: false,
      showModalDeleteCard: false,
    };
  },
  computed: {
    isSupervisor() {
      return this.cardsLead.rol == 1 || this.cardsLead.rol == 2;
    },
  },
  methods: {
    ...mapActions({
      A_GET_CREDIT_CARD: "CrmCreditCardStore/A_GET_CREDIT_CARD",
      A_DELETE_CREDIT_CARD: "CrmCreditCardStore/A_DELETE_CREDIT_CARD",
    }),
    openModalCreateCard() {
      this.showModalCreateCard = false;
    },
    closeModalCreateCard() {
      this.showModalCreateCard = false;
    },
    async openModalViewCard(id) {
      try {
        this.addPreloader();
        const response = await this.A_GET_CREDIT_CARD({ id });

        if (this.isResponseSuccess(response)) {
          this.card = response.data[0];
          this.showModalViewCard = true;
        } else {
          this.showToast(
            "warning",
            "top-right",
            "Warning!",
            "AlertTriangleIcon",
            `Something went wrong. ${response.message}`
          );
        }

        this.removePreloader();
      } catch (error) {
        this.removePreloader();

        throw error;
      }
    },
    closeModalViewCard() {},
    openModalDeleteCard(id) {
      this.card_id = id;
      this.showModalDeleteCard = true;
    },
    closedModalDeleteCard() {
      this.showModalDeleteCard = false;
    },
    addCard(cards) {
      this.cards = cards;
    },
    closeModalCard() {
      this.modalCard = false;
    },
    openModalCard(id) {
      // axios
      //   .post("/api/carddata", {
      //     id: id,
      //   })
      //   .then((response) => {
      //     if (response.status == 200) {
      //       this.card = {
      //         valor: response.data[0],
      //         role: this.cardsLead.rol,
      //       };
      //       this.modalCard = true;
      //     }
      //   });
    },

    async getCards() {
      try {
        const response = await SNLeadsService.getClientCards({
          id: this.cardsLead.lead_id,
        });

        if (response.status == 200) {
          this.cards = response.data;
        }
      } catch (error) {
        throw error;
      }
    },
  },
  async created() {
    await this.getCards();
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
