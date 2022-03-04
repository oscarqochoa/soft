<template>

  <div>
    <template v-if="!this.S_MODULE_TOTAL">
      <div>
        <a
            class="name-class cursor-pointer font-small-4"
            v-b-tooltip.hover
            :title="`${this.month}-${item.user_name}`"
        >{{ (this.item[this.type] === '0.00' || this.item[this.type] === '00.00') ? '-' : `$ ${this.item[this.type]}` }}</a>
      </div>
      <template v-if="true">
        <b-form-input
            min="1"
            max="100"
            type="number"
            v-model="this.item[this.type + '_percentage_pay']"
            :disabled="true"
            class="d-inline-flex text-center p-0 mt-2 font-fam"
        ></b-form-input>
      </template>
      <div class="mt-2">
        <a
            class="name-class text-color-m color-gray-m cursor-pointer font-small-4"
            v-b-tooltip.hover
            :title="`${this.month}-${item.user_name}`"
        >{{ (this.item[this.type + '_to_pay'] === '0.00' || this.item[this.type + '_to_pay'] === '00.00') ? '-' : `$ ${this.item[this.type + '_to_pay']}` }}</a>
      </div>
    </template>
    <template v-else>
      <div>
        <a
            class="name-class color-gray-m cursor-pointer font-small-4"
            v-b-tooltip.hover
            :title="`${this.month}-${item.user_name}`"
        >{{ (this.item[this.type] === '0.00' || this.item[this.type] === '00.00') ? '-' : `$ ${this.item[this.type]}` }}</a>
      </div>
    </template>

  </div>
</template>

<script>
import ButtonsEdit from "@/views/commons/utilities/ButtonsEdit";
import { mapState } from 'vuex'
export default {
  name: "CommissionsMonthlyList",
  components: { ButtonsEdit },
  props: {
    item: {
      type: Object,
    },
    type: {
      type: String,
    },
    month: {
      type: String,
    }
  },
  data() {
    return {

    };
  },
  created() {

  },
  mounted() {

  },
  computed: {
    ...mapState('SocialNetworkCommissions',['S_COMMISSIONS','S_DEPARTMENT_PERCENTAGES','S_LOADING','S_YEAR','S_MODULE','S_MODULE_TOTAL']),
    isSupervisor() {
      return this.info.rol == 2;
    },
    admCrm() {
      return this.tab == "adm" || this.tab == "crm";
    },
    isCrm() {
      return this.tab == "crm";
    },
    isSupervisorCrm() {
      return this.tab === "supervisorCrm";
    },
    isTotal() {
      return !this.S_MODULE_TOTAL
    }
  },
  methods: {

  },
  watch: {

  }
};
</script>

<style scoped>
.button-size {
  height: 23px;
  padding: 3px;
}
.w-input-percentage {
  width: 4.1rem;
}
.border-top-dash {
  border-top: 1px solid #ff6045;
}
.border-left-dash {
  border-left: 1px dashed #ff6045;
}

.bg-button-orange {
  background: #ff7f00;
}
.bg-button-green {
  background: #1cc700;
}

.color-gray-m {
  color: #9f9da8 !important;
}

.text-color-m {
  color: #666371 !important;
  transition: .2s all ease-in-out;
}

.text-color-m:hover {
  color: #ff7f00 !important;
}
.font-fam {
  font-family: "Rubik";
  font-style: normal;
}
.name-class {
  font-size: 15px;
  line-height: 11px;
  font-weight: 600;
}
.name-class:hover{
  color: #D8D8D8;
}

.margin-t-pay {
  margin-top: 29px;
}
</style>
