<template>
  <b-card no-body class="mt-2  h-28">
    <span class="title-card mb-3">Cards</span>
    <div class="col-lg-12 px-0">
      <div >
        <div
          
          :style="cards.length >= 3 ? 'height: 166px;overflow: auto;' : ''"
          id="cont-list"
        >
          <!-- <table class="table">
            <tbody class="font-bureau-style">
              <tr class="bg-light-gray text-table-gray">
                <th>Card Holder Name</th>
                <th>Card Number</th>
                <th>Type</th>
                <th>MM</th>
                <th>YY</th>
                <th>CVC</th>
              </tr>
              <tr v-for="card in cards" :key="card.id">
                <td>{{ card.cardholdername }}</td>
                <td>{{ "XXXX-XXXX-XXXX-" + card.cardnumber }}</td>
                <td>{{ card.type_card }}</td>
                <td>{{ card.card_expi_month }}</td>
                <td>{{ card.card_expi_year }}</td>
                <td>
                  {{
                    card.cardsecuritycode.length == 3
                      ? "XX" + card.cardsecuritycode.substr(2)
                      : "XXX" + card.cardsecuritycode.substr(3)
                  }}
                </td>
              </tr>
            </tbody>
          </table> -->
          <div class="table-responsive">
            <b-table responsive="sm" :items="cards" :fields="fields">
              <template #cell(cardnumber)="data">
                <div
                  class="
                    d-flex
                    flex-column
                    justify-content-start
                    align-items-start
                  "
                >
                  <span> {{ 'XXXX-XXXX-XXXX-'+data.item.cardnumber }} </span>
                </div>
              </template>
              <template #cell(cardsecuritycode)="data">
                <div
                  class="
                    d-flex
                    flex-column
                    justify-content-start
                    align-items-start
                  "
                >
                  <span> {{ data.item.cardsecuritycode.length == 3 ? "XX"+data.item.cardsecuritycode.substr(2) : "XXX" + data.item.cardsecuritycode.substr(3) }} </span>
                </div>
              </template>
            </b-table>
          </div>
        </div>
      </div>
      <div class="col-lg-12 text-right pr-0 mt-4">
        <b-button
          type="button"
          variant="primary"
          class="btn rounded float-right btn-orange"
          @click="openModalCreateCard"
        >
         
          <feather-icon
                      icon="PlusCircleIcon"
                      size="15"
                    ></feather-icon> ADD
        </b-button>
      </div>
    </div>

    <modal-card-edit
      v-if="modalCard"
      :ifModalCard="modalCard"
      :cards="card"
      @click="closeModalCard"
      :modul="modul"
    ></modal-card-edit>
    <modal-card-create
      v-if="modalCreateCard"
      :ifModalCard="modalCreateCard"
      @click="closeModalCreateCard"
      :session="cardsLead.user_id"
      :idlead="cardsLead.lead_id"
      @new="addCard"
    ></modal-card-create>
    <modal-card-delete
      v-if="deletecardmodal"
      :ifModalCard="deletecardmodal"
      :card_id="card_id"
      :lead_id="cardsLead.lead_id"
      @click="closedModalDeleteCar"
      @new="addCard"
      style="z-index: 99"
      :session="cardsLead.user_id"
    ></modal-card-delete>
  </b-card>
</template>
<script>
import { amgApi } from "@/service/axios.js";
import  ModalCardCreate from "@/views/crm/views/payments/components/ModalCardCreate.vue"

export default {
  components:{
    ModalCardCreate,
  },
  props: {
    cardsLead: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      //More information
      statesCard: [],
      states_leads: [],
      dragCount: 0,

      cards: [],
      modalCreateCard: false,
      modalCard: false,
      deletecardmodal: false,
      card_id: "",
      fields: [
        {
          key: "cardholdername",
          label: "Card Holder Name",
        },
        {
          key: "cardnumber",
          label: "Card Number",
        },
        {
          key: "type_card",
          label: "Type",
        },
        {
          key: "card_expi_month",
          label: "MM",
        },
        {
          key: "card_expi_year",
          label: "YY",
        },
        {
          key: "cardsecuritycode",
          label: "CVC",
        },
      ],
    };
  },

  created() {
    this.searchcards();
  },
  mounted() {},

  computed: {
    isSupervisor() {
      return this.cardsLead.rol == 1 || this.cardsLead.rol == 2;
    },
  },
  methods: {
    //Add and Remove Preoloader
    addPreloader() {
      var x = document.getElementById("app");
      x.classList.add("preloader");
      x.classList.add("opacity-uno");
    },
    removePreloader() {
      var x = document.getElementById("app");
      x.classList.remove("preloader");
      x.classList.remove("opacity-uno");
    },

    //Edit and Cancel information
    editInformation() {
      this.$swal
        .fire({
          title: "Are you Sure ? ",
          text: "Do you want to edit the information?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#ab9220",
          cancelButtonColor: "#8f9194",
          confirmButtonText: "Yes",
        })
        .then((r) => {
          if (r.value) {
            this.returnInformation = JSON.parse(JSON.stringify(this.form));
            this.edit = true;
          }
        });
    },

    //Cards
    openModalCreateCard() {
      this.modalCreateCard = true;
    },
    closeModalCreateCard() {
      this.modalCreateCard = false;
    },

    addCard(cards) {
      this.cards = cards;
    },
    closeModalCard() {
      this.modalCard = false;
    },

    openModalCard(id) {
      amgApi
        .post("/carddata", {
          id: id,
        })
        .then((response) => {
          if (response.status == 200) {
            this.card = {
              valor: response.data[0],
              role: this.cardsLead.rol,
            };
            this.modalCard = true;
          }
        });
    },

    openmodaldeletecard(id) {
      this.card_id = id;
      this.deletecardmodal = true;
    },
    closedModalDeleteCar() {
      this.deletecardmodal = false;
    },
    searchcards() {
      amgApi
        .post("/searchcards", {
          id: this.cardsLead.lead_id,
        })
        .then((response) => {
          if (response.status == 200) {
            this.cards = response.data;
          }
        })
        .catch((err) => {
          console.error(err);
        });
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
