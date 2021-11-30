<template>
  <div>
    <b-card>
      <b-row>
        <b-col md="4">
          <b-input-group prepend="Year" class="w-40">
            <b-form-select v-model="year" :options="optionsYear"></b-form-select>
          </b-input-group>
        </b-col>
        <b-col md="4 d-flex justify-content-center">
          <b-input-group prepend="To Pay" append="%" class="w-input-percent">
            <b-form-input
              min="1"
              max="100"
              type="number"
              v-model="percentApartment"
              :disabled="!editPercent"
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
        </b-col>
        <b-col md="4 text-right">
          <b-button
            variant="gradient-warning"
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

    <b-card>
      <div v-if="!commissions" class="text-center text-primary my-2">
        <b-spinner class="align-middle mr-1" />
        <strong>Loading ...</strong>
      </div>

      <div>
        <b-table-simple responsive table-class="table-bordered">
          <b-thead>
            <b-tr>
              <b-th sticky-column>User</b-th>
              <template v-if="halfYear">
                <b-th>Jan</b-th>
                <b-th>Feb</b-th>
                <b-th>Mar</b-th>
                <b-th>Apr</b-th>
                <b-th>May</b-th>
                <b-th>Jun</b-th>
              </template>
              <template v-else>
                <b-th>Jul</b-th>
                <b-th>Aug</b-th>
                <b-th>Sep</b-th>
                <b-th>Oct</b-th>
                <b-th>Nov</b-th>
                <b-th>Dic</b-th>
              </template>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-th sticky-column>Sticky Column Row Header</b-th>
              <template v-if="halfYear">
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
              </template>
              <template v-else>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
                <b-td>Cell</b-td>
              </template>
            </b-tr>
          </b-tbody>
          <b-tfoot>
            <b-tr>
              <b-th sticky-column>Total Generated</b-th>
              <template v-if="halfYear">
                <b-th>Heading 1</b-th>
                <b-th>Heading 2</b-th>
                <b-th>Heading 3</b-th>
                <b-th>Heading 4</b-th>
                <b-th>Heading 1</b-th>
                <b-th>Heading 2</b-th>
              </template>
              <template v-else>
                <b-th>Heading 3</b-th>
                <b-th>Heading 4</b-th>
                <b-th>Heading 1</b-th>
                <b-th>Heading 2</b-th>
                <b-th>Heading 3</b-th>
                <b-th>Heading 4</b-th>
              </template>
            </b-tr>
            <b-tr>
              <b-th sticky-column>Total To Pay</b-th>
              <template v-if="halfYear">
                <b-th>Heading 1</b-th>
                <b-th>Heading 2</b-th>
                <b-th>Heading 3</b-th>
                <b-th>Heading 4</b-th>
                <b-th>Heading 1</b-th>
                <b-th>Heading 2</b-th>
              </template>
              <template v-else>
                <b-th>Heading 3</b-th>
                <b-th>Heading 4</b-th>
                <b-th>Heading 1</b-th>
                <b-th>Heading 2</b-th>
                <b-th>Heading 3</b-th>
                <b-th>Heading 4</b-th>
              </template>
            </b-tr>
          </b-tfoot>
        </b-table-simple>
      </div>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Ripple from "vue-ripple-directive";
import ButtonsEdit from "@/commons/utilities/ButtonsEdit";
import moment from "moment";
export default {
  name: "CommissionsComponent",
  components: {
    ButtonsEdit
  },
  directives: {
    Ripple
  },
  props: {
    module: {
      type: Number,
      default: null
    },
    tab: {
      type: String,
      default: null
    }
  },
  mounted() {
    console.log(this.currentUser);
  },
  data() {
    return {
      halfYear: true,
      commissions: null,
      percentApartment: "100.00",
      returnPercent: null,
      editPercent: false,
      optionsYear: [],
      user: "",
      users: "",
      modal: false,
      month: "",
      ps_month: "",
      user_id: "",
      user_name: "",
      role_id: "",
      year: moment().format("YYYY"),
      modalApprove: false,
      amountCommission: "",
      amountToPayCommission: "",
      approve_by: "",
      paid_state: "",
      programs: [],
      program_id: "",
      module_id: null,
      module: "",
      modalp: false,
      type: "",
      modalm: false,
      module_name: "",
      ready: false,
      percentages: null,
      amountTotal: null
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      token: "auth/token"
    })
  },
  methods: {
    changePartOfYear() {
      this.halfYear = !this.halfYear;
    },
    //Percentage to 100
    maxPercentage() {
      this.percentApartment =
        this.percentApartment > 100 ? "100.00" : this.percentApartment;
    },

    //Current Month
    getCurrentMonth() {
      let currentMonth = moment().format("MM");
      const firstPart = ["01", "02", "03", "04", "05", "06"];
      if (firstPart.includes(currentMonth)) {
        this.halfYear = true;
      } else {
        this.halfYear = false;
      }
    },
    //Changes Percentages Crm
    editPercentageDepartment() {
      this.returnPercent = JSON.parse(JSON.stringify(this.percentApartment));
      this.editPercent = true;
    },
    cancelPercentageDepartment() {
      this.percentApartment = this.returnPercent;
      this.editPercent = false;
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