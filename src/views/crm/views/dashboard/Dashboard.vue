<template>
  <div class="row">
    <div class="col-md-12 col-lg-12 col-sm-12">
      <b-row class="">
        <b-col class="" cols="12" sm="4" md="4" lg="3" xl="2">
          <b-row class="pl-1 pr-1">
              <b-card
              
              @click="change_tab(0)"
              class="ecommerce-card-leads ecommerce-card col-lg-12 h-100 cursor-pointer"
              :class="classAdd"
              :style="
                itemCards[0] == true
                  ? 'background: linear-gradient(to right, blue, rgb(230, 174, 230)); color: white'
                  : classAdd=='dark'? '':'background-color:aliceblue'
              "
            >
              <b-card-title :style="itemCards[0] == true?'color: white':''">Leads</b-card-title>
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
                    :style="itemCards[0] == true?'background-color: white':''"
                    class="mr-2 item-wrapper-font div-box1 "
                  ></div>
                  <div class="mr-1 ">
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
                    :style="itemCards[0] == true?'background-color: white':''"
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

          <b-row class="pl-1 pr-1">
            <b-card
              
              class="ecommerce-card-appointments ecommerce-card col-lg-12 h-150 cursor-pointer"
              :class="classAdd"
              @click="change_tab(1)"
              :style="
                itemCards[1] == true
                  ? 'background: linear-gradient(to right, #299aff, rgb(230, 174, 230));color: white'
                  :  classAdd=='dark'? '':'background-color:aliceblue'
              "
            >
            <b-card-title :style="itemCards[1] == true?'color: white':''">Appointments</b-card-title>
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
                    :style="itemCards[1] == true?'background-color: white':''"
                    class="mr-1 item-wrapper-font div-box1"
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
                    :style="itemCards[1] == true?'background-color: white':''"
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
          <b-row class="pl-1 pr-1">
            <b-card
              class="ecommerce-card-tasks ecommerce-card col-lg-12 h-150 cursor-pointer"
              :class="classAdd"
              @click="change_tab(2)"
              :style="
                itemCards[2] == true
                  ? 'background: linear-gradient(to right, #82868b, rgb(230, 174, 230));color: white'
                  : classAdd=='dark'? '':'background-color:aliceblue'
              "
            >
            <b-card-title :style="itemCards[2] == true?'color: white':''">Tasks</b-card-title>
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
                    :style="itemCards[2] == true?'background-color: white':''"
                    class="mr-1 item-wrapper-font div-box1"
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
                    :style="itemCards[2] == true?'background-color: white':''"
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
          <b-row class="pl-1 pr-1">
            <b-card
              class="ecommerce-card-sales ecommerce-card col-lg-12 h-150 cursor-pointer"
              :class="classAdd"
              @click="change_tab(3)"
              :style="
                itemCards[3] == true
                  ? 'background: linear-gradient(to right, #28c76f, rgb(240, 214, 240));color: white'
                  : classAdd=='dark'? '':'background-color:aliceblue'
              "
            >
            <b-card-title :style="itemCards[3] == true?'color: white':''">Sales</b-card-title>
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
                    :style="itemCards[3] == true?'background-color: white':''"
                    class="mr-1 item-wrapper-font div-box1"
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
                    :style="itemCards[3] == true?'background-color: white':''"
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
          <b-row class="pl-1 pr-1">
            <b-card
              class="ecommerce-card-capturated ecommerce-card col-lg-12 h-150 cursor-pointer"
              :class="classAdd"
              @click="change_tab(4)"
              :style="
                itemCards[4] == true
                  ? 'background: linear-gradient(to right, #e83e8c, rgb(211, 192, 211));color: white'
                  : classAdd=='dark'? '':'background-color:aliceblue'
              "
            >
            <b-card-title :style="itemCards[4] == true?'color: white':''">Capturated</b-card-title>
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
                    :style="itemCards[4] == true?'background-color: white':''"
                    class="mr-1 item-wrapper-font div-box1"
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
                    style="
                      width: 17px;
                      height: 17px;
                      
                      border-radius: 4px;
                    "
                    :style="itemCards[4] == true?'background-color: white':''"
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
        <b-col class="mb-3" cols="12" sm="8" md="8" lg="9" xl="10">
          <b-card title="" class="col-12 h-100">
            <br />
            <br />
            <div class="d-flex justify-content-between flex-wrap row">
              <div class="mb-1 mb-sm-0 d-inline col-lg-7">
                <b-row>
                  <b-col cols="12" sm="12" md="12">
                    <span class="text-muted w-100">MONTHLY GRAPHICS</span>
                  </b-col>
                  <b-col cols="12" sm="12" md="4">
                    <v-select
                      v-model="year"
                      class="per-page-selector"
                      style="font-size: 15px"
                      :clearable="false"
                      :options="years"
                      @input="filtrocont()"
                    />
                  </b-col>
                  <b-col cols="12" sm="12" md="4">
                    <v-select
                      v-if="[1, 2].includes(currentUser.role_id)"
                      v-model="userfilter"
                      class="per-page-selector-user"
                      
                      style="font-size: 15px;"
                      placeholder="Select User"
                      label="user_name"
                      :options="users"
                      :reduce="(val) => val.id"
                      @input="filtrocont()"
                    />
                  </b-col>
                </b-row>
              </div>
              <div class=" mb-1 mb-sm-0 col-lg-5 col-md-5 inline">
                <!-- <b-row class="w-100">
                  <div>
                    <h1 class="font-weight-bolder">TOTAL:</h1>
                  </div>
                  <div class="important text-center ml-1 mr-1">
                    <div
                      style="background-color: blue; border-radius: 4px"
                      class="ml-2 mr-2 w-100"
                    >
                      <h1 class="font-weight-bolder" style="color: white">
                        {{ total_year }}
                      </h1>
                    </div>
                  </div>
                </b-row> -->
                <b-row v-for="data in totalYearByCard" :key="data.id"  class="w-100" style="padding-bottom:6px">
                  <div>
                    <h3 class="font-weight-bolder">{{data.name}}:</h3>
                  </div>
                  <div class="important text-center ml-1 mr-1" style="position: absolute; left: 170px;width:90px">
                    <div
                      style="background: #0090E7; border-radius: 5px;"
                      class="ml-2 mr-2 w-100"
                    >
                      <h1 class="font-weight-bolder" style="color: white">
                        {{ data.total }}
                      </h1>
                    </div>
                  </div>
                </b-row>
               
              </div>
            </div>
            <b-card-body class="mb-2">
              <app-echart-line-crm :key="idEchart" :option-data="repaint" />
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { BCard, BButton, BCardBody, BBadge } from "bootstrap-vue";
import vSelect from "vue-select";
import moment from "moment";
import AppEchartLine from "@core/components/charts/echart/AppEchartLine.vue";
import { mapGetters } from "vuex";
import AppEchartLineCrm from "./components/AppEchartLineCrm.vue";
import DashboardService from "./service/dashboard.service";
export default {
  name: "DashboardCrm",
  components: {
    BCard,
    BButton,
    BCardBody,
    AppEchartLine,
    AppEchartLineCrm,
    BBadge,
    vSelect,
  },
  data() {
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
      totalYearByCard:[],
      index: 0,
      users: [],
      year: moment().format("YYYY"),
      years: [],
      nameOfTab: "Leads",
      itemCards: [true, false, false, false, false],
      item: null,
    };
  },
  computed: {
    ...mapGetters({
      skin: "appConfig/skin"
    }),
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
    classAdd() {
      return this.skin == "dark" ? "dark" : "";
    },
    repaint() {
      return this.option;
    },
  },
  created() {
    this.userCreator();
    this.allData();
    this.year_select();
  },
  methods: {
    statusColor(name){
      let color = ''
      switch(name){
        case "Total leads":
          color ='#84d0ff'
          break
        case "Total Appointments":
          color= '#299aff'
          break
        case "Total Calls":
          color ='#82868b'
          break
        case "Total Sales":
          color = '#28c76f'
          break
        case "Total Captured":
          color = '#e83e8c'
          break
      }
      return color
    },
    chargeDataToEchart(array, name) {
      if (this.option.series<= 0) {
        this.option.series.push({ type: "line", name: name, data: array,color: this.statusColor(name), });
      } 
      else {
        let found = false;
        for (let i = 0; i < this.option.series.length; i++) {
          let object = this.option.series[i]
          if (name.localeCompare(object.name) == 0) {
            this.option.series.splice(i, 1);
            found = true;
          }
          
        }
        if (!found) {
            this.option.series.push({ type: "line", name: name, data: array,color: this.statusColor(name) });
          }
      }
      this.idEchart++;
    },
    chargeDataToEchartNew(array,name){
      this.option.series = []
      if (this.option.series<= 0) {
        this.option.series.push({ type: "line", name: name, data: array ,color: this.statusColor(name)});
      } 
      this.idEchart++;
    },

    changeItemCards(index) {
      for (let i = 0; i < this.itemCards.length; i++) {
        if (i === index) {
          if(this.itemCards[i]== true){
            this.itemCards[i] = false
          }else{
            this.itemCards[i] = true;
          }
          
        } 
      }
    },
    changeListYear(name,total){
      if (this.totalYearByCard<= 0) {
        this.totalYearByCard.push({name:name,total:total})
      } else {
        let found = false;
        for (let i = 0; i < this.totalYearByCard.length; i++) {
          let object = this.totalYearByCard[i]
          if (name.localeCompare(object.name) == 0) {
            this.totalYearByCard.splice(i, 1);
            found = true;
          }
          
        }
        if (!found) {
            this.totalYearByCard.push({name:name,total:total})
          }
      }
      
    },
    changeListYearNew(name,total){
      this.totalYearByCard = []
      if (this.totalYearByCard<= 0) {
        this.totalYearByCard.push({name:name,total:total})
      } 
    },
    change_tab(index) {
      this.changeItemCards(index);
      switch (index) {
        case 0:
          this.total_year = this.global.leads_year;
          this.chargeDataToEchart(this.leads, "Total leads");
          this.changeListYear("Total leads",this.global.leads_year)
          this.nameOfTab = "Leads";

          break;
        case 1:
          this.total_year = this.global.quotes_year;
          this.chargeDataToEchart(this.quotes, "Total Appointments");
          this.changeListYear("Total Appointments",this.global.quotes_year)
          this.nameOfTab = "Appointments";
          break;
        case 2:
          this.total_year = this.global.calls_year;
          this.chargeDataToEchart(this.calls, "Total Calls");
          this.changeListYear("Total Calls",this.global.calls_year)
          this.nameOfTab = "Tasks";
          break;
        case 3:
          this.total_year = this.global.sales_year;
          this.chargeDataToEchart(this.sales, "Total Sales");
          this.changeListYear("Total Sales",this.global.sales_year)
          this.nameOfTab = "Sales";
          break;
        case 4:
          this.total_year = this.global.clients_year;
          this.chargeDataToEchart(this.captur, "Total Captured");
          this.changeListYear("Total Captured",this.global.clients_year)
          this.nameOfTab = "Captured";

          break;
      }
      this.index = index;
    },
    async allData(status=null) {
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
        this.captur = response.data.vendio.map((list) => list); // error
        this.removePreloader();
        
        if(status ==null){
          this.chargeDataToEchart(this.leads, "Total leads");
          this.changeListYear("Total leads",this.global.leads_year)
        }else{
          this.chargeDataToEchartNew(this.leads, "Total leads")
        }
        this.total_year = this.global.leads_year;
        
        this.nameOfTab = "Leads";
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
    async filtrocont() {
      this.itemCards =  [true, false, false, false, false]
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
          this.changeListYearNew("Total leads",this.global.leads_year)
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
        this.year =  this.years[this.years.length - 1]
      }
    },
    async userCreator() {
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
    year_select() {
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
.col-container {
  display: table;
  width: 100%;
}
.col {
  display: table-cell;
  padding: 16px;
}


.item-view-radio-group ::v-deep {
  .btn {
    display: flex;
    align-items: center;
  }
}

// .ecommerce-card {
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 4px 25px 0 rgba(black, 0.25);
//     background-color: aqua;
//   }
// }
.div-box1{
  background-color: #0090E7;
}
.div-box{
  background-color: #8F5FE8
}
.ecommerce-card .card-title {
  font-weight: bold;
}
.ecommerce-card-leads {
  &:hover{
    .div-box{
      background-color:white
    }
  }
  &:hover{
    .div-box1{
      background-color:white
    }
  }
  &:hover {
    box-shadow: 0 4px 25px 0 rgba(black, 0.25);
    // background-color: #8077e6;
    // background: linear-gradient(to right, blue, rgb(241, 196, 241));
    background: linear-gradient(90deg, #0090E7 0%, #8F5FE8 100%);
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

.ecommerce-card-appointments{
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

.ecommerce-card-tasks{
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
.ecommerce-card-sales{
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

.ecommerce-card-capturated{
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
  height: 50px;
}

.per-page-selector-user {
  width: 200px;
  height: 50px;
  
}
</style>
