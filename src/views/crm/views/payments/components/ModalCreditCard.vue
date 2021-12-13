<template>
  <b-card no-body class="mt-2 h-28">
    <span class="title-card mb-3">Cards</span>
    <div class="col-lg-12 px-0">
      <div>
        <div
          :style="cards.length >= 3 ? 'height: 166px;overflow: auto;' : ''"
          id="cont-list"
        >
          <div class="table-responsive" style="margin-bottom: 0" >
            <b-table responsive="sm"  style="margin-bottom:0px"
              show-empty table-class="text-nowrap"
              sticky-header :items="cards" :fields="fields">
              <template #cell(Select)="data">
                  <b-form-radio
                  class="vs-checkbox-con"
                  :value="data.item.id"
                  @change="$emit('CardId',data.item.id)"
                  v-model="selected"
                  plain
                >
                </b-form-radio>
              </template>
              <template #cell(cardnumber)="data">
                <div
                  class="
                    d-flex
                    flex-column
                    justify-content-start
                    align-items-start
                  "
                >
                  <span> {{ "XXXX-XXXX-XXXX-" + data.item.cardnumber }} </span>
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
        </div>
      </div>
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
import { amgApi } from "@/service/axios.js";
import ModalCardCreate from "@/views/crm/views/payments/components/ModalCardCreate.vue";

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
  data() {
    return {
      selected:null,
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
          key:"Select",
          label:"",
        },
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
    //Edit and Cancel information
    editInformation() {
      this.$swal
        .fire({
          title: "Are you Sure ? ",
          text: "Do you want to edit the information?",
          icon: "warning",
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
