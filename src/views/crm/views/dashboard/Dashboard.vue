<template>
  <b-row>
    <div class="col-md-12 col-lg-12 col-sm-12">
      <!-- All Screen -->
      <b-row style="">
        <!-- Column Cards -->
        <b-col class="col-cards" cols="12" sm="4" md="4" lg="3" xl="2" style="">
          <!-- Card Leads-->
          <b-row class="pl-1 pr-1">
            <b-card
              @click="changeTab(0)"
              class="
                ecommerce-card-leads ecommerce-card
                col-lg-12
                h-100
                cursor-pointer
              "
              :class="classAdd"
              :style="
                itemCards[0] == true
                  ? 'background: linear-gradient(to right, blue, rgb(230, 174, 230)); color: white'
                  : classAdd == 'dark'
                  ? ''
                  : 'background-color:aliceblue'
              "
            >
              <!-- Card Title -->
              <b-card-title :style="itemCards[0] == true ? 'color: white' : ''"
                >Leads</b-card-title
              >
              <!-- Card Content -->
              <b-card-text>
                <div
                  class="
                    row
                    item-wrapper
                    justify-content-center
                    align-items-center
                  "
                >
                  <div
                    style="width: 17px; height: 17px; border-radius: 4px"
                    :style="
                      itemCards[0] == true ? 'background-color: white' : ''
                    "
                    class="mr-2 item-wrapper-font div-box1"
                  ></div>
                  <div class="mr-1">
                    <span style="font-size: medium" class="">Today :</span>
                  </div>
                  <div>
                    <span style="font-size: large"
                      ><strong>{{ global.leadday }}</strong></span
                    >
                  </div>
                </div>
                <div class="row" style="height: 10px" />
                <div
                  class="
                    row
                    item-wrapper
                    justify-content-center
                    align-items-center
                  "
                >
                  <div
                    style="
                      width: 17px;
                      height: 17px;

                      border-radius: 4px;
                    "
                    :style="
                      itemCards[0] == true ? 'background-color: white' : ''
                    "
                    class="mr-1 div-box"
                  ></div>
                  <div class="mr-1">
                    <span style="font-size: medium">Month :</span>
                  </div>
                  <div>
                    <span style="font-size: large"
                      ><strong>{{ global.leadmonth }}</strong></span
                    >
                  </div>
                </div>
              </b-card-text>
            </b-card>
          </b-row>
          <!-- Card Appointments-->
          <b-row class="pl-1 pr-1">
            <b-card
              class="
                ecommerce-card-appointments ecommerce-card
                col-lg-12
                h-150
                cursor-pointer
              "
              :class="classAdd"
              @click="changeTab(1)"
              :style="
                itemCards[1] == true
                  ? 'background: linear-gradient(to right, #299aff, rgb(230, 174, 230));color: white'
                  : classAdd == 'dark'
                  ? ''
                  : 'background-color:aliceblue'
              "
            >
              <!-- Card Title -->
              <b-card-title :style="itemCards[1] == true ? 'color: white' : ''"
                >Appointments</b-card-title
              >
              <!-- Card Content -->
              <b-card-text>
                <div
                  class="
                    row
                    item-wrapper
                    justify-content-center
                    align-items-center
                  "
                >
                  <div
                    style="width: 17px; height: 17px; border-radius: 4px"
                    :style="
                      itemCards[1] == true ? 'background-color: white' : ''
                    "
                    class="mr-2 item-wrapper-font div-box1"
                  ></div>
                  <div class="mr-1">
                    <span style="font-size: medium">Today :</span>
                  </div>
                  <div>
                    <span style="font-size: large"
                      ><strong>{{ global.eventday }}</strong></span
                    >
                  </div>
                </div>
                <div class="row" style="height: 10px" />
                <div
                  class="
                    row
                    item-wrapper
                    justify-content-center
                    align-items-center
                  "
                >
                  <div
                    style="
                      width: 17px;
                      height: 17px;

                      border-radius: 4px;
                    "
                    :style="
                      itemCards[1] == true ? 'background-color: white' : ''
                    "
                    class="mr-1 item-wrapper-font div-box"
                  ></div>
                  <div class="mr-1">
                    <span style="font-size: medium">Month :</span>
                  </div>
                  <div>
                    <span style="font-size: large"
                      ><strong>{{ global.eventmonth }}</strong></span
                    >
                  </div>
                </div>
              </b-card-text>
            </b-card>
          </b-row>
          <!-- Card Tasks-->
          <b-row class="pl-1 pr-1">
            <b-card
              class="
                ecommerce-card-tasks ecommerce-card
                col-lg-12
                h-150
                cursor-pointer
              "
              :class="classAdd"
              @click="changeTab(2)"
              :style="
                itemCards[2] == true
                  ? 'background: linear-gradient(to right, #82868b, rgb(230, 174, 230));color: white'
                  : classAdd == 'dark'
                  ? ''
                  : 'background-color:aliceblue'
              "
            >
              <!-- Card Title -->
              <b-card-title :style="itemCards[2] == true ? 'color: white' : ''"
                >Tasks</b-card-title
              >
              <!-- Card Content -->
              <b-card-text>
                <div
                  class="
                    row
                    item-wrapper
                    justify-content-center
                    align-items-center
                  "
                >
                  <div
                    style="
                      width: 17px;
                      height: 17px;

                      border-radius: 4px;
                    "
                    :style="
                      itemCards[2] == true ? 'background-color: white' : ''
                    "
                    class="mr-2 item-wrapper-font div-box1"
                  ></div>
                  <div class="mr-1">
                    <span style="font-size: medium">Today :</span>
                  </div>
                  <div>
                    <span style="font-size: large"
                      ><strong>{{ global.taskday }}</strong></span
                    >
                  </div>
                </div>
                <div class="row" style="height: 10px" />
                <div
                  class="
                    row
                    item-wrapper
                    justify-content-center
                    align-items-center
                  "
                >
                  <div
                    style="
                      width: 17px;
                      height: 17px;

                      border-radius: 4px;
                    "
                    :style="
                      itemCards[2] == true ? 'background-color: white' : ''
                    "
                    class="mr-1 item-wrapper-font div-box"
                  ></div>
                  <div class="mr-1">
                    <span style="font-size: medium">Month :</span>
                  </div>
                  <div>
                    <span style="font-size: large"
                      ><strong>{{ global.taskmonth }}</strong></span
                    >
                  </div>
                </div>
              </b-card-text>
            </b-card>
          </b-row>
          <!-- Card Sales-->
          <b-row class="pl-1 pr-1">
            <b-card
              class="
                ecommerce-card-sales ecommerce-card
                col-lg-12
                h-150
                cursor-pointer
              "
              :class="classAdd"
              @click="changeTab(3)"
              :style="
                itemCards[3] == true
                  ? 'background: linear-gradient(to right, #28c76f, rgb(240, 214, 240));color: white'
                  : classAdd == 'dark'
                  ? ''
                  : 'background-color:aliceblue'
              "
            >
              <!-- Card Title -->
              <b-card-title :style="itemCards[3] == true ? 'color: white' : ''"
                >Sales</b-card-title
              >
              <!-- Card Content -->
              <b-card-text>
                <div
                  class="
                    row
                    item-wrapper
                    justify-content-center
                    align-items-center
                  "
                >
                  <div
                    style="
                      width: 17px;
                      height: 17px;

                      border-radius: 4px;
                    "
                    :style="
                      itemCards[3] == true ? 'background-color: white' : ''
                    "
                    class="mr-2 item-wrapper-font div-box1"
                  ></div>
                  <div class="mr-1">
                    <span style="font-size: medium">Today :</span>
                  </div>
                  <div>
                    <span style="font-size: large"
                      ><strong>{{ global.vendioday }}</strong></span
                    >
                  </div>
                </div>
                <div class="row" style="height: 10px" />
                <div
                  class="
                    row
                    item-wrapper
                    justify-content-center
                    align-items-center
                  "
                >
                  <div
                    style="
                      width: 17px;
                      height: 17px;

                      border-radius: 4px;
                    "
                    :style="
                      itemCards[3] == true ? 'background-color: white' : ''
                    "
                    class="mr-1 item-wrapper-font div-box"
                  ></div>
                  <div class="mr-1">
                    <span style="font-size: medium">Month :</span>
                  </div>
                  <div>
                    <span style="font-size: large"
                      ><strong>{{ global.vendiomonth }}</strong></span
                    >
                  </div>
                </div>
              </b-card-text>
            </b-card>
          </b-row>
          <!-- Card Capturated-->
          <b-row class="pl-1 pr-1">
            <b-card
              class="
                ecommerce-card-capturated ecommerce-card
                col-lg-12
                h-150
                cursor-pointer
              "
              :class="classAdd"
              @click="changeTab(4)"
              :style="
                itemCards[4] == true
                  ? 'background: linear-gradient(to right, #e83e8c, rgb(211, 192, 211));color: white'
                  : classAdd == 'dark'
                  ? ''
                  : 'background-color:aliceblue'
              "
            >
              <!-- Card Title -->
              <b-card-title :style="itemCards[4] == true ? 'color: white' : ''"
                >Capturated</b-card-title
              >
              <!--Card Content  -->
              <b-card-text>
                <div
                  class="
                    row
                    item-wrapper
                    justify-content-center
                    align-items-center
                  "
                >
                  <div
                    style="width: 17px; height: 17px; border-radius: 4px"
                    :style="
                      itemCards[4] == true ? 'background-color: white' : ''
                    "
                    class="mr-2 item-wrapper-font div-box1"
                  ></div>
                  <div class="mr-1">
                    <span style="font-size: medium">Today :</span>
                  </div>
                  <div>
                    <span style="font-size: large"
                      ><strong>{{ global.clientday }}</strong></span
                    >
                  </div>
                </div>
                <div class="row" style="height: 10px" />
                <div
                  class="
                    row
                    item-wrapper
                    justify-content-center
                    align-items-center
                  "
                >
                  <div
                    style="width: 17px; height: 17px; border-radius: 4px"
                    :style="
                      itemCards[4] == true ? 'background-color: white' : ''
                    "
                    class="mr-1 item-wrapper-font div-box"
                  ></div>
                  <div class="mr-1">
                    <span style="font-size: medium">Month :</span>
                  </div>
                  <div>
                    <span style="font-size: large"
                      ><strong>{{ global.clientmonth }}</strong></span
                    >
                  </div>
                </div>
              </b-card-text>
            </b-card>
          </b-row>
        </b-col>

        <!-- Column Graphics -->
        <b-col cols="12" sm="8" md="8" lg="9" xl="10">
          <b-card class="col-12">
            <br />
            <br />
            <!-- Content Card -->
            <b-row class="">
              <div class="mb-1 mb-sm-0 d-inline col-lg-10 col-md-12 col-xl-7">
                <b-row>
                  <!-- Select User -->
                  <b-col cols="12" sm="12" md="5" lg="5" class="pb-1">
                    <v-select
                      v-if="[1, 2].includes(currentUser.role_id)"
                      v-model="userfilter"
                      class="per-page-selector-user style-chooser"
                     
                      placeholder="Select User"
                      label="user_name"
                      :options="users"
                      :reduce="(val) => val.id"
                      @input="filtroCont()"
                    />
                  </b-col>
                  <!-- Year and Sub Title -->
                  <b-col cols="12" sm="12" md="12" lg="7" class="d-flex flex-wrap pb-1">
                    <div
                      class="
                        d-flex
                        align-items-center
                        justify-content-center
                        pr-1
                      "
                    >
                      <!-- Graphic Sub Title -->
                      <div>
                        <h5><strong>MONTHLY GRAPHICS</strong></h5>
                      </div>
                    </div>
                     <!-- Select Year -->
                    <v-select
                      v-model="year"
                      class="per-page-selector"
                      style="font-size: 15px"
                      :clearable="false"
                      :options="years"
                      @input="filtroCont()"
                    />
                  </b-col>
                </b-row>
              </div>
              <!-- Array of Sub title Totals -->
              <div
                class="col-lg-8 col-md-12 col-xl-5 d-flex flex-wrap"
                style="width: 100%"
              >
                <div
                  v-for="data in totalYearByCard"
                  :key="data.id"
                  class="d-flex flex-wrap mb-1 justify-content-between pr-1"
                  :style="`${screenWidth<576? 'width: 100%':'width: 50%'}`"
                >
                  <!-- Name of Total -->
                  <div>
                    <span class="font-weight-bolder">{{ data.name }}:</span>
                  </div>
                  <!-- Quantity of Data -->
                  <div class="important text-center" style="float: left">
                    <div
                      style="background: #0090e7; border-radius: 5px; text-center;width:50px;"
                    >
                      <span class="font-weight-bolder" style="color: white">
                        {{ data.total }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </b-row>
            <!-- Graphics Line -->
            <b-card-body class="p-0 pb-2">
              <app-echart-line-crm :key="idEchart" :option-data="rePaint" :screen="screen" />
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-row>
</template>

<script>
import { BCard, BButton, BCardBody, BBadge } from "bootstrap-vue";
import { mapGetters } from "vuex";
import vSelect from "vue-select";
import moment from "moment";
// Import Components
import AppEchartLine from "@core/components/charts/echart/AppEchartLine.vue";
import AppEchartLineCrm from "./components/AppEchartLineCrm.vue";
// Import Services
import DashboardService from "./service/dashboard.service";
export default {
  name: "DashboardCrm",
  components: {
    BCard,
    BButton,
    BCardBody,
    BBadge,
    vSelect,
    AppEchartLine,
    AppEchartLineCrm,
    
  },
  data: function () {
    return {
      idEchart: 0,
      option: {
        xAxisData: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        series: [],
      },
      global: [],
      leads: [],
      quotes: [],
      calls: [],
      sales: [],
      captur: [],
      userfilter: "",
      value: "",
      total_year: 0,
      totalYearByCard: [],
      index: 0,
      users: [],
      year: moment().format("YYYY"),
      years: [],
      itemCards: [true, false, false, false, false],
      item: null,
      widthOfScreen:null,
      heightOfScreen:null,
    };
  },
  computed: {
    screen:function() {
      this.heightOfScreen = window.screen.height
      return this.heightOfScreen;
    },
    screenWidth:function() {
      this.widthOfScreen = window.screen.width
      return this.widthOfScreen
    },
    ...mapGetters({
      skin: "appConfig/skin",
    }),
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
    classAdd: function () {
      return this.skin == "dark" ? "dark" : "";
    },
    rePaint: function () {
      return this.option;
    },
  },
  created: function () {
    this.userCreator();
    this.allData();
    this.yearSelect();
  },
  methods: {
    statusColor: function (name) {
      let color = "";
      switch (name) {
        case "Total leads":
          color = "#84d0ff";
          break;
        case "Total Appointments":
          color = "#299aff";
          break;
        case "Total Calls":
          color = "#82868b";
          break;
        case "Total Sales":
          color = "#28c76f";
          break;
        case "Total Captured":
          color = "#e83e8c";
          break;
      }
      return color;
    },
    chargeDataToEchart: function (array, name) {
      if (this.option.series <= 0) {
        this.option.series.push({
          type: "line",
          name: name,
          data: array,
          color: this.statusColor(name),
        });
      } else {
        let found = false;
        for (let i = 0; i < this.option.series.length; i++) {
          let object = this.option.series[i];
          if (name.localeCompare(object.name) == 0) {
            this.option.series.splice(i, 1);
            found = true;
          }
        }
        if (!found) {
          this.option.series.push({
            type: "line",
            name: name,
            data: array,
            color: this.statusColor(name),
          });
        }
      }
      this.idEchart++;
    },
    chargeDataToEchartNew: function (array, name) {
      this.option.series = [];
      if (this.option.series <= 0) {
        this.option.series.push({
          type: "line",
          name: name,
          data: array,
          color: this.statusColor(name),
        });
      }
      this.idEchart++;
    },
    changeItemCards: function (index) {
      for (let i = 0; i < this.itemCards.length; i++) {
        if (i === index) {
          if (this.itemCards[i] == true) {
            this.itemCards[i] = false;
          } else {
            this.itemCards[i] = true;
          }
        }
      }
    },
    changeListYear: function (name, total) {
      if (this.totalYearByCard <= 0) {
        this.totalYearByCard.push({ name: name, total: total });
      } else {
        let found = false;
        for (let i = 0; i < this.totalYearByCard.length; i++) {
          let object = this.totalYearByCard[i];
          if (name.localeCompare(object.name) == 0) {
            this.totalYearByCard.splice(i, 1);
            found = true;
          }
        }
        if (!found) {
          this.totalYearByCard.push({ name: name, total: total });
        }
      }
    },
    changeListYearNew: function (name, total) {
      this.totalYearByCard = [];
      if (this.totalYearByCard <= 0) {
        this.totalYearByCard.push({ name: name, total: total });
      }
    },
    // Change By Card
    changeTab: function (index) {
      this.widthOfScreen = window.screen.width
      this.heightOfScreen = window.screen.height
      this.changeItemCards(index);
      switch (index) {
        case 0:
          this.total_year = this.global.leads_year;
          this.chargeDataToEchart(this.leads, "Total leads");
          this.changeListYear("Total leads", this.global.leads_year);
          break;
        case 1:
          this.total_year = this.global.quotes_year;
          this.chargeDataToEchart(this.quotes, "Total Appointments");
          this.changeListYear("Total Appointments", this.global.quotes_year);
          break;
        case 2:
          this.total_year = this.global.calls_year;
          this.chargeDataToEchart(this.calls, "Total Calls");
          this.changeListYear("Total Calls", this.global.calls_year);
          break;
        case 3:
          this.total_year = this.global.sales_year;
          this.chargeDataToEchart(this.sales, "Total Sales");
          this.changeListYear("Total Sales", this.global.sales_year);
          break;
        case 4:
          this.total_year = this.global.clients_year;
          this.chargeDataToEchart(this.captur, "Total Captured");
          this.changeListYear("Total Captured", this.global.clients_year);
          break;
      }
      this.index = index;
    },
    allData: async function (status = null) {
      try {
        this.addPreloader();
        let { user_id } = this.currentUser;
        if (this.currentUser.role_id == 1 || this.currentUser.role_id == 2) {
          user_id = 0;
        }
        const response = await DashboardService.getDashboardData({
          created_id: user_id,
        });
        this.userfilter = response.data.usercreate;
        this.global = response.data;
        this.leads = response.data.leads.map((list) => list);
        this.quotes = response.data.quotes.map((list) => list);
        this.calls = response.data.calls.map((list) => list);
        this.sales = response.data.sales.map((list) => list);
        this.captur = response.data.vendio.map((list) => list);
        this.removePreloader();
        if (status == null) {
          this.chargeDataToEchart(this.leads, "Total leads");
          this.changeListYear("Total leads", this.global.leads_year);
        } else {
          this.chargeDataToEchartNew(this.leads, "Total leads");
          this.changeListYearNew("Total leads", this.global.leads_year);
        }
        this.total_year = this.global.leads_year;
      } catch (error) {
        console.log(error);
        this.removePreloader();
        this.showToast(
          "danger",
          "top-right",
          "Error",
          "XIcon",
          "Something went wrong!"
        );
      }
    },
    // Change By User or Year
    filtroCont: async function () {
      this.itemCards = [true, false, false, false, false];
      if (this.userfilter != null) {
        try {
          this.addPreloader();
          const response = await DashboardService.getDashboardData({
            created_id: this.userfilter,
            anio: this.year,
          });
          this.global = response.data;
          this.leads = response.data.leads.map((list) => list);
          this.quotes = response.data.quotes.map((list) => list);
          this.calls = response.data.calls.map((list) => list);
          this.sales = response.data.sales.map((list) => list);
          this.captur = response.data.vendio.map((list) => list);
          this.chargeDataToEchartNew(this.leads, "Total leads");
          this.changeListYearNew("Total leads", this.global.leads_year);
          this.total_year = this.global.leads_year;
          this.removePreloader();
        } catch (error) {
          console.error(error);
          this.removePreloader();
          this.showToast(
            "danger",
            "top-right",
            "Error",
            "XIcon",
            "Something went wrong!"
          );
        }
      } else {
        this.allData("update");
        this.year = this.years[this.years.length - 1];
      }
    },
    userCreator: async function () {
      try {
        const data = await DashboardService.userCreator({
          roles: "",
          type: "1",
        });
        this.users = data;
      } catch (error) {
        console.log(error);
        this.showToast(
          "danger",
          "top-right",
          "Error",
          "XIcon",
          "Something went wrong!"
        );
      }
    },
    yearSelect: function () {
      for (let x = 2014; x <= moment().format("YYYY"); x++) {
        this.years.push(x);
      }
    },
  },
};
</script>

<style lang="scss">
@import "~@core/scss/base/pages/app-ecommerce.scss";
</style>

<style lang="scss" scoped>
// Styles V-select
.col-cards {
  height: 70vh;
  max-height: 70vh;
  overflow: auto;
}
// hidding scrollbar
::-webkit-scrollbar {
  width: 0; 
  background: transparent;
}

.item-view-radio-group ::v-deep {
  .btn {
    display: flex;
    align-items: center;
  }
}

.div-box1 {
  background-color: #0090e7;
}
.div-box {
  background-color: #8f5fe8;
}
.ecommerce-card .card-title {
  font-weight: bold;
}
.ecommerce-card-leads {
  &:hover {
    .div-box {
      background-color: white;
    }
  }
  &:hover {
    .div-box1 {
      background-color: white;
    }
  }
  &:hover {
    box-shadow: 0 4px 25px 0 rgba(black, 0.25);
    background: linear-gradient(90deg, #0090e7 0%, #8f5fe8 100%);
    color: white;
  }
  &:hover {
    .card-title {
      color: white;
    }
  }
  &:hover {
    .item-wrapper .item-wrapper-font {
      background-color: white;
    }
  }
}

.ecommerce-card-appointments {
  &:hover {
    box-shadow: 0 4px 25px 0 rgba(black, 0.25);
    background: linear-gradient(to right, #299aff, rgb(230, 174, 230));
    color: white;
  }
  &:hover {
    .card-title {
      color: white;
    }
  }
  &:hover {
    .item-wrapper .item-wrapper-font {
      background-color: white;
    }
  }
}

.ecommerce-card-tasks {
  &:hover {
    box-shadow: 0 4px 25px 0 rgba(black, 0.25);
    background: linear-gradient(to right, #82868b, rgb(230, 174, 230));
    color: white;
  }
  &:hover {
    .card-title {
      color: white;
    }
  }
  &:hover {
    .item-wrapper .item-wrapper-font {
      background-color: white;
    }
  }
}
.ecommerce-card-sales {
  &:hover {
    box-shadow: 0 4px 25px 0 rgba(black, 0.25);
    background: linear-gradient(to right, #28c76f, rgb(240, 214, 240));
    color: white;
  }
  &:hover {
    .card-title {
      color: white;
    }
  }
  &:hover {
    .item-wrapper .item-wrapper-font {
      background-color: white;
    }
  }
}

.ecommerce-card-capturated {
  &:hover {
    box-shadow: 0 4px 25px 0 rgba(black, 0.25);
    background: linear-gradient(to right, #e83e8c, rgb(211, 192, 211));
    color: white;
  }
  &:hover {
    .card-title {
      color: white;
    }
  }
  &:hover {
    .item-wrapper .item-wrapper-font {
      background-color: white;
    }
  }
}

.per-page-selector {
  width: 130px;
}

.per-page-selector-user {
  width: 200px;
}
</style>
