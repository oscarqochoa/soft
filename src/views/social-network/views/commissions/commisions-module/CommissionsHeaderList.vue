<template>
  <b-row class="px-2 pt-2">

    <b-col lg="4" :class="[bigWindowLeft]">
      <b-input-group prepend="Year" :class="{ 'w-40': bigWindow }">
        <b-form-select
          v-model="year"
          :options="optionsYear"
          @change="searchCommissions()"
          class="text-center"
        ></b-form-select>
      </b-input-group>
    </b-col>

    <b-col
      lg="4"
      v-if="isSupervisorCrm"
      :class="[bigWindowLeft, 'd-flex justify-content-center']"
    >
      <b-input-group prepend="Departments">
        <b-form-select
          v-model="program"
          :options="programs"
          @change="changeProgram()"
        ></b-form-select>
      </b-input-group>
    </b-col>

    <b-col lg="4" v-if="!isSupervisorCrm && !(isCrm && isManagement)"></b-col>

    <b-col v-if="isCrm && isManagement" lg="4 d-flex justify-content-center">
      <template>
        <b-input-group
          prepend="To Pay"
          append="%"
          :class="{ 'w-input-percent': bigWindow }"
        >
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
        variant="gradient-primary"
        :class="{ 'btn-block': !bigWindow }"
        size="sm"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-tooltip.hover.top="'Change part of the year'"
        @click='$emit("toggleBtn")'
      >
        <b-icon v-if="halfYear" icon="arrow-right" font-scale="1.5"></b-icon>
        <b-icon v-else icon="arrow-left" font-scale="1.5"></b-icon>
        <span v-if="!bigWindow">&nbsp; Half of the Year</span>
      </b-button>
    </b-col>

  </b-row>
</template>

<script>
import moment from "moment";
import { mapGetters, mapState, mapActions } from "vuex";
import Ripple from "vue-ripple-directive";
import ButtonsEdit from "@/views/commons/utilities/ButtonsEdit";
export default {
  name: "CommissionsHeaderList",
  components: { ButtonsEdit },
  props: {
    tab: {
      type: String,
      default: "",
    },
    isManagement: {
      type: Boolean,
      default: false,
    },
  },
  directives: {
    Ripple,
  },
  mounted() {},
  data() {
    return {
      optionsYear: [],
      editPercent: false,
      programShow: [],
      program: null,
    };
  },
  async created() {
    try {
      this.year_select();
      if (this.isSupervisorCrm)
        await this.$store.dispatch("global-store/getPrograms");
      this.addProgramSn();
    } catch (error) {}
  },
  computed: {
    ...mapState('SocialNetworkCommissions', ['S_YEAR','S_MODULE','S_PERCENT_DEPARTMENT']),
    ...mapGetters({
      bigWindow: "app/bigWindow",
      halfYear: "commissions-store/halfYear",
      moduleProgram: "commissions-store/moduleProgram",
      programs: "global-store/programs",
    }),
    year: {
      get() {
        return this.S_YEAR;
      },
      set(value) {
        this.A_SET_YEAR_COMMISSION(value)
      },
    },
    percentApartment: {
      get() {
        return this.S_PERCENT_DEPARTMENT;
      },
      set(value) {
        this.A_SET_PERCENT_DEPARTMENT_COMMISSION(value);
      },
    },
    isSupervisorCrm() {
      return this.tab === "supervisorCrm";
    },
    isCrm() {
      return this.tab === "crm";
    },
    //Classes CSS
    bigWindowLeft() {
      return this.bigWindow ? "" : "d-flex justify-content-center mb-1";
    },
    bigWindowRight() {
      return this.bigWindow
        ? "text-right"
        : "d-flex justify-content-center mt-1";
    },
  },
  methods: {
    ...mapActions('SocialNetworkCommissions', ['A_SET_YEAR_COMMISSION','A_SET_MODULE_COMMISSION','A_SET_PERCENT_DEPARTMENT_COMMISSION','A_SET_MODULE_TOTAL']),
    addProgramSn() {
      this.programs.unshift({
        id: null,
        text: "All",
      });
      this.programs.push({
        value: 15,
        text: "Social Network",
      });
    },
    changeProgram() {
      this.A_SET_MODULE_COMMISSION(this.program)
      this.A_SET_MODULE_TOTAL(true)
    },
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
      console.log('percent', this.percentApartment)
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
    },
  },
  watch: {
    S_MODULE(){
      this.$emit("search");
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
