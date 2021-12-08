<template>
  <div>
    <b-table
      :items="commissionsUser"
      :fields="fields"
      class="mt-2"
      responsive
      no-border-collapse
      sticky-header="50vh"
      :busy="isBusy"
    >
      <template #table-busy>
        <div class="text-center text-primary my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template #cell(created_at)="data">
        <span>{{data.value | myGlobal}}</span>
      </template>
      <template #cell(approve_date)="data">
        <span>{{data.value | myGlobal}}</span>
      </template>
    </b-table>
    <b-row>
      <template v-if="!isCeo">
        <b-col lg="6" :class="[textRightBig]">
          <div class="font-weight-bolder">SUM:</div>
        </b-col>
        <b-col lg="6" :class="[textLeftBig]">
          <div>$ {{ this.total_amount }}</div>
        </b-col>
      </template>
      <template v-if="!isCeo && !isSupervisor">
        <b-col lg="6" :class="[textRightBig]">
          <div class="font-weight-bolder">DISCOUNT:</div>
        </b-col>
        <b-col lg="6" :class="[textLeftBig]">
          <div>$ {{ this.discount }}</div>
        </b-col>
      </template>
      <template v-if="isSupervisor">
        <b-col lg="6" :class="[textRightBig]">
          <div class="font-weight-bolder">20% OF COMMISSIONS</div>
        </b-col>
        <b-col lg="6" :class="[textLeftBig]">
          <div>$ {{ this.total_department }}</div>
        </b-col>
        <b-col lg="6" :class="[textRightBig]">
          <div class="font-weight-bolder">10% OF COMMISSIONS</div>
        </b-col>
        <b-col lg="6" :class="[textLeftBig]">
          <div>$ {{ this.total_commission }}</div>
        </b-col>
        <b-col lg="6" :class="[textRightBig]">
          <div class="font-weight-bolder">10% OF PROGRAMS</div>
        </b-col>
        <b-col lg="6" :class="[textLeftBig]">
          <div>$ {{ this.total_programs }}</div>
        </b-col>
      </template>
      <template v-if="!isCeo && !isSupervisor">
        <template v-if="total_supervisor_program > 0">
          <b-col lg="6" :class="[textRightBig]">
            <div class="font-weight-bolder">10% OF CRM:</div>
          </b-col>
          <b-col lg="6" :class="[textLeftBig]">
            <div>$ {{ this.total_supervisor_program.toFixed(2) }}</div>
          </b-col>
        </template>
      </template>
      <b-col lg="6" :class="[textRightBig]">
        <div class="font-weight-bolder">TOTAL GENERATED:</div>
      </b-col>
      <b-col lg="6" :class="[textLeftBig]">
        <div>$ {{ this.total? this.total.toFixed(2): 0 }}</div>
      </b-col>
      <template v-if="total > total_to_pay && !isCeo && !isSupervisor">
        <b-col lg="6" :class="[textRightBig]">
          <div class="font-weight-bolder">DISCOUNT FOR PENALTIES:</div>
        </b-col>
        <b-col lg="6" :class="[textLeftBig]">
          <div>$ {{ (total - total_to_pay).toFixed(2) }}</div>
        </b-col>
      </template>
      <template v-if="!isCeo && !isSupervisor">
        <b-col lg="6" :class="[textRightBig]">
          <div class="font-weight-bolder">TOTAL TO PAY:</div>
        </b-col>
        <b-col lg="6" :class="[textLeftBig]">
          <div>$ {{ this.total_to_pay? this.total_to_pay.toFixed(2): 0 }}</div>
        </b-col>
      </template>
    </b-row>
  </div>
</template>

<script>
import commissionsService from "@/commons/components/commissions/services/commissions.service";
import { mapGetters } from "vuex";
export default {
  name: "DetailsCrm",
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      commissionsUser: [],
      fields: [],
      isBusy: true,
      total_amount: "",
      discount: "",
      total: "",
      total_commission: "",
      total_department: "",
      total_programs: "",
      total_to_pay: "",
      total_supervisor_program: ""
    };
  },
  created() {
    this.searchCommissions();
  },
  mounted() {
    this.modalUp = this.showModal;
    this.showOverlay = this.showModal;
  },
  computed: {
    ...mapGetters({
      bigWindow: "app/bigWindow"
    }),
    textRightBig() {
      return this.bigWindow ? "text-right" : "text-center";
    },
    textLeftBig() {
      return this.bigWindow ? "text-left" : "text-center mb-1";
    },
    isCeo() {
      return this.info.role_id == 1;
    },
    isSupervisor() {
      return this.info.role_id == 2;
    }
  },
  methods: {
    async searchCommissions() {
      this.getFields();

      let response = await commissionsService.searchCommissionsUserCrm(
        this.info
      );
      if (response.length > 0) {
        this.filterCommissions(response);
        this.total_amount = response[0].total_amount;
        this.discount = response[0].discount;
        this.total = response[0].total;
        this.total_department = response[0].commission_department;
        this.total_commission = response[0].commission_bond;
        this.total_programs = response[0].amount_programs;
        this.total_to_pay = response[0].total_to_pay;
      }
      this.ifNotEntries();
      this.isBusy = false;
      this.showOverlay = false;
    },
    ifNotEntries() {
      //When is Supervisor from Department, not Crm
      if (this.commissionsUser.length == 0) {
        this.total_amount = 0;
        this.discount = 0;
        this.total = this.info.amountTotal ? this.info.amountTotal : 0;
        this.total = this.total.toFixed(2);
        this.total_to_pay = this.info.amountTotal ? this.info.amountTotal : 0;
        this.total_supervisor_program = this.info.amountTotal
          ? this.info.amountTotal
          : 0;
      } else {
        this.total_supervisor_program =
          this.info.amountTotal - (this.total_amount - this.discount);
      }
    },
    getFields() {
      this.fields = [
        {
          key: "lead",
          label: "Client"
        },
        {
          key: "value",
          label: "Program"
        },
        {
          key: "type",
          label: "Type"
        },
        {
          key: "commission",
          label: "Amount"
        },
        {
          key: "percentage_pay",
          label: "Percentage to pay"
        },
        {
          key: "approve_date",
          label: "Approved Date"
        },
        {
          key: "created_at",
          label: "Created Date"
        }
      ];
    },
    filterCommissions(commissions) {
      //Get Commissions, Just for User
      this.commissionsUser = commissions.filter(commission => {
        return commission.user_id == this.info.user;
      });
    }
  },
  watch: {}
};
</script>

<style>
</style>