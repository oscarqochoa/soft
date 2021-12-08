<template>
  <b-card>
    <b-row>
      <b-col lg="4" :class="[bigWindowLeft]">
        <b-input-group prepend="Year" :class="{'w-40':bigWindow}">
          <b-form-select
            v-model="year"
            :options="optionsYear"
            @change="searchCommissions()"
            class="text-center"
          ></b-form-select>
        </b-input-group>
      </b-col>
      <b-col lg="4 d-flex justify-content-center">
        <template v-if="tab == 'crm'">
          <b-input-group prepend="To Pay" append="%" :class="{'w-input-percent':bigWindow}">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model="percentApartment"
              :disabled="!editPercent"
              class="text-center"
              @keyup="maxPercentage()"
            ></b-form-input>
          </b-input-group>
          <div class="button-margin">
            <buttons-edit
              :editMode="editPercent"
              @edit="editPercentageDepartment()"
              @cancel="cancelPercentageDepartment()"
              @update="updatePercentageDepartment()"
            ></buttons-edit>
          </div>
        </template>
      </b-col>
      <b-col lg="4" :class="[bigWindowRight]">
        <b-button
          variant="gradient-warning"
          :class="{'btn-block': !bigWindow}"
          size="sm"
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          v-b-tooltip.hover.top="'Change part of the year'"
          @click="changePartOfYear()"
        >
          <b-icon v-if="halfYear" icon="arrow-right" font-scale="1.5"></b-icon>
          <b-icon v-else icon="arrow-left" font-scale="1.5"></b-icon>
        </b-button>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
import Ripple from "vue-ripple-directive";
import ButtonsEdit from "@/commons/utilities/ButtonsEdit";
export default {
  name: "CommissionsHeader",
  components: { ButtonsEdit },
  props: {
    tab: {
      type: String,
      default: ""
    }
  },
  directives: {
    Ripple
  },
  data() {
    return {
      optionsYear: [],
      editPercent: false
    };
  },
  created() {
    this.year_select();
  },
  computed: {
    ...mapGetters({
      bigWindow: "app/bigWindow",
      halfYear: "commissions-store/halfYear"
    }),
    year: {
      get() {
        return this.$store.getters["commissions-store/year"];
      },
      set(value) {
        this.$store.commit("commissions-store/SET_YEAR_COMMISSIONS", value);
      }
    },
    percentApartment: {
      get() {
        return this.$store.getters["commissions-store/percentApartment"];
      },
      set(value) {
        this.$store.commit(
          "commissions-store/SET_PERCENT_APARTMENT_COMMISSIONS",
          value
        );
      }
    },
    //Classes CSS
    bigWindowLeft() {
      return this.bigWindow ? "" : "d-flex justify-content-center mb-1";
    },
    bigWindowRight() {
      return this.bigWindow
        ? "text-right"
        : "d-flex justify-content-center mt-1";
    }
  },
  methods: {
    changePartOfYear() {
      this.$store.commit(
        "commissions-store/SET_HALF_YEAR_COMMISSIONS",
        !this.halfYear
      );
    },
    year_select() {
      for (let x = 2020; x <= moment().format("YYYY"); x++) {
        this.optionsYear.push(x);
      }
    },
    //Percentage to 100
    maxPercentage() {
      if (this.percentApartment > 100) {
        this.percentApartment = "100.00";
      }
    }, //Changes Percentages Crm
    editPercentageDepartment() {
      this.returnPercent = JSON.parse(JSON.stringify(this.percentApartment));
      this.editPercent = true;
    },
    cancelPercentageDepartment() {
      this.percentApartment = this.returnPercent;
      this.editPercent = false;
    },
    searchCommissions() {
      this.$emit("search");
    },
    updatePercentageDepartment() {
      this.editPercent = false;
      this.$emit("update-percentage");
    }
  }
};
</script>

<style scoped>
.w-input-percent {
  width: 13.5rem;
}
.w-40 {
  width: 40%;
}

.button-margin {
  margin-top: 8px;
}
</style>