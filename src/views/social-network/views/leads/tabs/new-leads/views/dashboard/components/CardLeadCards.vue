<template>
  <div>
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

      <b-table
        show-empty
        sticky-header
        striped
        responsive="sm"
        :fields="fields"
        class="mb-0"
        small
      >
      </b-table>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: "cardholdername", label: "Card Holder Name", tdClass: "py-1" },
        { key: "cardnumber", label: "Card Number", tdClass: "py-1" },
        { key: "type_card", label: "Type", tdClass: "py-1" },
        { key: "card_expi_month", label: "MM", tdClass: "py-1" },
        { key: "card_expi_year", label: "YY", tdClass: "py-1" },
        { key: "cardsecuritycode", label: "CVV", tdClass: "py-1" },
        { key: "actions", tdClass: "py-1" },
      ],
    };
  },
};
</script>

<style lang="scss" >
</style>