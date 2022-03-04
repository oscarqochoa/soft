<template>
  <b-card
    no-body
    :class="
      tabSupervisorCrm
        ? 'border-top-primary border-3 box-shadow-3 rounded-bottom border-table-radius pb-1'
        : 'pb-2'
    "
  >
    <CommissionsHeaderList
      @search="searchCommissions(true)"
      :tab="tab"
      :isManagement="!isManagement"
      :class="[isSeller ? 'mt-2 ml-1 mr-1' : '']"
      @toggleBtn="toggleCurrentMonth"
    />

    <div :class="['mt-1', isSeller ? 'margin-is-seller' : '']">
      <div v-if="this.S_LOADING" class="text-center text-primary my-4">
        <b-spinner class="align-middle mr-1" />
        <strong>Loading ...</strong>
      </div>
      <b-table-simple
        v-else
        responsive
        sticky-header="74vh"
        no-border-collapse
        hover
        bordered
      >
        <b-thead>
          <b-tr class="width-th">
            <b-th style="width: 100px !important">User</b-th>
            <b-th v-if="isTotal"></b-th>
            <template v-if="currentMonth">
              <b-th>
                Jan
                <span v-if="isCrm" class="float-right"
                  >{{ S_DEPARTMENT_PERCENTAGE.january_percentage }}%</span
                >
              </b-th>
              <b-th>
                Feb
                <span v-if="isCrm" class="float-right"
                  >{{ S_DEPARTMENT_PERCENTAGE.february_percentage }}%</span
                >
              </b-th>
              <b-th>
                Mar
                <span v-if="isCrm" class="float-right"
                  >{{ S_DEPARTMENT_PERCENTAGE.march_percentage }}%</span
                >
              </b-th>
              <b-th>
                Apr
                <span v-if="isCrm" class="float-right"
                  >{{ S_DEPARTMENT_PERCENTAGE.april_percentage }}%</span
                >
              </b-th>
              <b-th>
                May
                <span v-if="isCrm" class="float-right"
                  >{{ S_DEPARTMENT_PERCENTAGE.may_percentage }}%</span
                >
              </b-th>
              <b-th>
                Jun
                <span v-if="isCrm" class="float-right"
                  >{{ S_DEPARTMENT_PERCENTAGE.june_percentage }}%</span
                >
              </b-th>
            </template>
            <template v-else>
              <b-th>
                Jul
                <span v-if="isCrm" class="float-right"
                  >{{ S_DEPARTMENT_PERCENTAGE.july_percentage }}%</span
                >
              </b-th>
              <b-th>
                Aug
                <span v-if="isCrm" class="float-right"
                  >{{ S_DEPARTMENT_PERCENTAGE.august_percentage }}%</span
                >
              </b-th>
              <b-th>
                Sep
                <span v-if="isCrm" class="float-right"
                  >{{ S_DEPARTMENT_PERCENTAGE.september_percentage }}%</span
                >
              </b-th>
              <b-th>
                Oct
                <span v-if="isCrm" class="float-right"
                  >{{ S_DEPARTMENT_PERCENTAGE.october_percentage }}%</span
                >
              </b-th>
              <b-th>
                Nov
                <span v-if="isCrm" class="float-right"
                  >{{ S_DEPARTMENT_PERCENTAGE.november_percentage }}%</span
                >
              </b-th>
              <b-th>
                Dic
                <span v-if="isCrm" class="float-right"
                  >{{ S_DEPARTMENT_PERCENTAGE.december_percentage }}%</span
                >
              </b-th>
            </template>
          </b-tr>
        </b-thead>

        <b-tbody>
          <h3>{{ this.S_MODULE }}</h3>
          <b-tr v-for="(item, index) in S_COMMISSIONS" :key="index">
            <b-td>
              <div class="font-weight-bolder text-dark">
                {{ item.user_name }}
              </div>
              <div v-if="isSupervisorCrm" class="color-gray-m fs10">
                {{ item.main_name }}
              </div>
            </b-td>
            <b-td v-if="isTotal">
              <div>
                <div class="font-weight-bold">Generated:</div>
                <div
                  class="margin-t-pay font-weight-bold"
                >
                  % to Pay:
                </div>
                <div class="margin-t-pay font-weight-bold">To Pay:</div>
              </div>
            </b-td>
            <template v-if="currentMonth">
              <b-td>
                <CommissionsMounthlyList :item="item" type="jan" month="January"/>
              </b-td>

              <b-td>
                <CommissionsMounthlyList :item="item" type="feb" month="February"/>
              </b-td>

              <b-td>
                <CommissionsMounthlyList :item="item" type="mar" month="March"/>
              </b-td>

              <b-td>
                <CommissionsMounthlyList :item="item" type="apr" month="April"/>
              </b-td>

              <b-td>
                <CommissionsMounthlyList :item="item" type="may" month="May"/>
              </b-td>

              <b-td>
                <CommissionsMounthlyList :item="item" type="jun" month="June"/>
              </b-td>
            </template>

            <template v-else>
              <b-td>
                <CommissionsMounthlyList :item="item" type="jul" month="July"/>
              </b-td>
              <b-td>
                <CommissionsMounthlyList :item="item" type="aug" month="August"/>
              </b-td>
              <b-td>
                <CommissionsMounthlyList :item="item" type="sep" month="September"/>
              </b-td>
              <b-td>
                <CommissionsMounthlyList :item="item" type="oct" month="October"/>
              </b-td>
              <b-td>
                <CommissionsMounthlyList :item="item" type="nov" month="November"/>
              </b-td>
              <b-td>
                <CommissionsMounthlyList :item="item" type="dec" month="December"/>
              </b-td>
            </template>
          </b-tr>
        </b-tbody>

        <b-tfoot>
          <b-tr>
            <b-th class="footer-black">Total Generated</b-th>
            <b-th class="footer-black" v-if="this.isTotal"></b-th>
            <template v-if="currentMonth">
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('jan') === "0.00" ? '-' :  `$ ${getSumTotal('jan')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('feb') === "0.00" ? '-' :  `$ ${getSumTotal('feb')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('mar') === "0.00" ? '-' :  `$ ${getSumTotal('mar')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('apr') === "0.00" ? '-' :  `$ ${getSumTotal('apr')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('may') === "0.00" ? '-' :  `$ ${getSumTotal('may')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('jun') === "0.00" ? '-' :  `$ ${getSumTotal('jun')}` }} </span>
                </div>
              </b-th>
            </template>
            <template v-else>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('jul') === "0.00" ? '-' :  `$ ${getSumTotal('jul')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('aug') === "0.00" ? '-' :  `$ ${getSumTotal('aug')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('sep') === "0.00" ? '-' :  `$ ${getSumTotal('sep')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('oct') === "0.00" ? '-' :  `$ ${getSumTotal('oct')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('nov') === "0.00" ? '-' :  `$ ${getSumTotal('nov')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('dec') === "0.00" ? '-' :  `$ ${getSumTotal('dec')}` }} </span>
                </div>
              </b-th>
            </template>
          </b-tr>
          <b-tr v-if="true">
            <b-th class="footer-black">Total To Pay</b-th>
            <b-th v-if="isTotal" class="footer-black"></b-th>
            <template v-if="currentMonth">
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('jan_to_pay') === "0.00" ? '-' :  `$ ${getSumTotal('jan_to_pay')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('feb_to_pay') === "0.00" ? '-' :  `$ ${getSumTotal('feb_to_pay')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('mar_to_pay') === "0.00" ? '-' :  `$ ${getSumTotal('mar_to_pay')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('apr_to_pay') === "0.00" ? '-' :  `$ ${getSumTotal('apr_to_pay')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('may_to_pay') === "0.00" ? '-' :  `$ ${getSumTotal('may_to_pay')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('jun_to_pay') === "0.00" ? '-' :  `$ ${getSumTotal('jun_to_pay')}` }} </span>
                </div>
              </b-th>
            </template>
            <template v-else>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('jul_to_pay') === "0.00" ? '-' :  `$ ${getSumTotal('jul_to_pay')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('aug_to_pay') === "0.00" ? '-' :  `$ ${getSumTotal('aug_to_pay')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('sep_to_pay') === "0.00" ? '-' :  `$ ${getSumTotal('sep_to_pay')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('oct_to_pay') === "0.00" ? '-' :  `$ ${getSumTotal('oct_to_pay')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('nov_to_pay') === "0.00" ? '-' :  `$ ${getSumTotal('nov_to_pay')}` }} </span>
                </div>
              </b-th>
              <b-th class="footer-black">
                <div class="footer-span w-100">
                  <span class=" font-small-3 text-center"> {{ getSumTotal('dec_to_pay') === "0.00" ? '-' :  `$ ${getSumTotal('dec_to_pay')}` }} </span>
                </div>
              </b-th>
            </template>
          </b-tr>
        </b-tfoot>
      </b-table-simple>
    </div>
    <ModalCommissionsDetails
      v-if="modalDetails"
      :showModal="modalDetails"
      :info="infoDetails"
    />
    <ModalCommissionsPayment
      v-if="modalPayment"
      :showModal="modalPayment"
      :info="infoPayment"
    />
  </b-card>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import Ripple from "vue-ripple-directive";
import OverlayWait from "@/views/commons/utilities/OverlayWait";
import CommissionsHeaderList from "./commisions-module/CommissionsHeaderList.vue";
import ModalCommissionsDetails from "@/views/commons/components/commissions/modals/modal-details/ModalCommissionsDetails";
import ModalCommissionsPayment from "@/views/commons/components/commissions/modals/modal-payment/ModalCommissionsPayment";
import CommissionsMounthlyList from '@/views/social-network/views/commissions/commisions-module/CommissionsMounthlyList'
export default {
  name: "CommissionsList",
  components: {
    OverlayWait,
    CommissionsHeaderList,
    CommissionsMounthlyList,
    ModalCommissionsDetails,
    ModalCommissionsPayment,
  },
  directives: {
    Ripple,
  },
  props: {
    module: {
      type: Number,
      default: null,
    },
    tab: {
      type: String,
      default: null,
    },
    tabSupervisorCrm: {
      type: Boolean,
      default: false,
    },
    module_num: {
      type: Number
    },
    module_total: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    //when change tab supervisorCrm, set to null subProgram
    // this.$store.commit("commissions-store/SET_MODULE_PROGRAM", null);
  },
  data() {
    return {
      sessionUser: null,
      commissions: null,
      returnPercent: null,
      editPercent: false,
      user_id: null,
      supervisorCrm: 0,
      users: "",
      user_name: "",
      modal: false,
      month: "",
      ps_month: "",
      role_id: "",
      approve_by: "",
      paid_state: "",
      module_id: null,
      type: "",
      modalm: false,
      module_name: "",
      percentages: null,
      amountTotal: null,
      showOverlay: false,
      modalDetails: false,
      modalPayment: false,
      infoDetails: null,
      infoPayment: null,
      currentMonth: true,
    };
  },
  async created() {
    console.log('meta:', this.$route.meta)
    this.A_SET_MODULE_COMMISSION(this.module_num)
    this.A_SET_MODULE_TOTAL(this.module_total)
    await this.A_GET_DEPARTMENT_PERCENTAGE();
    await this.searchCommissions(false);
  },

  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      isCeo: "auth/isCeo",
      isSupervisor: "auth/isSupervisor",
      userSession: "auth/userSession",
      token: "auth/token",
      currentBreakPoint: "app/currentBreakPoint",
      bigWindow: "app/bigWindow",
      skin: "appConfig/skin",
      moduleProgram: "commissions-store/moduleProgram",
      isSeller: "auth/isSeller",
    }),
    ...mapState('SocialNetworkCommissions',['S_COMMISSIONS','S_DEPARTMENT_PERCENTAGES','S_LOADING','S_YEAR','S_MODULE','S_MODULE_TOTAL']),
    getSumTotal() {
      return mes => this.S_COMMISSIONS.map((com) => {
        return parseFloat(com[mes])
      }).reduce((accumulator, curr) => accumulator + curr).toFixed(2);
    },
    isManagement() {
      return this.module === 16;
    },
    isDepartment() {
      return this.module_id !== 2 && this.module_id !== 4;
    },
    isCrm() {
      return this.tab === "crm";
    },
    isSupervisorCrm() {
      return this.tab === "supervisorCrm";
    },
    isTotal() {
      return !this.S_MODULE_TOTAL
    }
  },
  methods: {
    ...mapActions('SocialNetworkCommissions', ['A_GET_DEPARTMENT_PERCENTAGE','A_GET_COMMISSIONS','A_SET_MODULE_COMMISSION','A_SET_MODULE_TOTAL']),
    toggleCurrentMonth() {
      this.currentMonth = !this.currentMonth;
    },

    //Get Commissions
    async searchCommissions(reload) {

      //Only when user is diferrent from CEO or SUPERVISOR
      if (!(this.isSupervisor || this.isCeo || this.isManagement))
        this.user_id = this.currentUser.user_id;

      //Just for CRM Supervisor
      if (this.isSupervisorCrm) this.supervisorCrm = 1;

      const params = {
        user: this.user_id,
        year: this.S_YEAR,
        module: this.module_num,
        supervisorCrm: this.supervisorCrm,
        subProgram: this.isSupervisorCrm ? this.moduleProgram : null,
      };
      console.log('params commissions', params)
      // TODO enviar hacia la api
      await this.A_GET_COMMISSIONS(params);
    },
  },
  watch: {
    S_MODULE() {
      if (this.S_MODULE === 0) this.A_SET_MODULE_TOTAL(true);
      //if( this.$route.meta.module === this.S_MODULE) this.A_SET_MODULE_TOTAL(false)
    }
  },
}

</script>

<style scoped>
.margin-t-pay {
  margin-top: 29px;
}

.width-th th {
  min-width: 166px;
}

.fs10 {
  font-size: 10px;
}

.color-gray-m {
  color: #9f9da8;
}

.margin-is-seller {
  margin-left: 27px;
  margin-right: 27px;
}
</style>
