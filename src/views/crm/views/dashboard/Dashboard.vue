<template>
  <div class="row">
    <div class="col-md-12 col-lg-12 col-sm-12">
      <div class="row">
        <div class="col-lg-6"></div>
        <div class="col-lg-6">
          <v-select
            v-on:input="filtrocont()"
            class="input-form"
            style="font-size: 15px; width: 50%; float: right"
            placeholder="Select User"
            v-model="userfilter"
            label="user_name"
            :options="users"
          >
          </v-select>
        </div>
      </div>
      <div class="row">
        <div class="cont-search-paginate">
          <ul
            class="nav nav-tabs unstyled-list list-inline"
            id="myTab"
            role="tablist"
          >
            <li class="nav-item p-1 ratings-list-item">
              <b-card class="ecommerce-card col-lg-12 h-200" no-body>
                <div class="text-center pt-1">
                  <b-button variant="primary" tag="a" class="btn-cart w-100"
                    @click="change_tab(0)">
                    <feather-icon icon="Edit3Icon" class="mr-50" />
                    <span>Leads</span>
                  </b-button>
                </div>
                <div class="row" style="height: 10px"></div>
                <div>
                  <b-card-body>
                    <div class="row item-wrapper">
                      <div class="col-6">
                        <div class="content-info pad-new text-center">
                          <label class="item-name" for>TODAY</label>
                          <p class="borde-count" style="color: #baa345">
                            {{ global.leadday }}
                          </p>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="content-info pad-new text-center">
                          <label for>MONTH</label>
                          <p class="borde-count">{{ global.leadmonth }}</p>
                        </div>
                      </div>
                    </div>
                  </b-card-body>
                </div>
              </b-card>
            </li>
            <li class="nav-item p-1">
              <b-card class="ecommerce-card col-lg-12 h-200" no-body>
                <div class="text-center pt-1">
                  <b-button variant="primary" tag="a" class="btn-cart w-100"
                    @click="change_tab(1)">
                    <feather-icon icon="Edit3Icon" class="mr-50" />
                    <span>APPOINTMENTS</span>
                  </b-button>
                </div>
                <div class="row" style="height: 10px"></div>
                <div>
                  <b-card-body>
                    <div class="row">
                      <div class="col-6">
                        <div class="content-info pad-new text-center">
                          <label for>TODAY</label>
                          <p class="borde-count" style="color: #baa345">
                            {{ global.eventday }}
                          </p>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="content-info pad-new text-center">
                          <label for>MONTH</label>
                          <p class="borde-count">{{ global.eventmonth}}</p>
                        </div>
                      </div>
                    </div>
                  </b-card-body>
                </div>
              </b-card>
            </li>
            <li class="nav-item p-1">
              <b-card class="ecommerce-card col-lg-12 h-200" no-body>
                <div class="text-center pt-1">
                  <b-button variant="primary" tag="a" class="btn-cart w-100"
                    @click="change_tab(2)">
                    <feather-icon icon="Edit3Icon" class="mr-50" />
                    <span>TASKS</span>
                  </b-button>
                </div>
                <div class="row" style="height: 10px"></div>
                <div>
                  <b-card-body>
                    <div class="row">
                      <div class="col-6">
                        <div class="content-info pad-new text-center">
                          <label for>TODAY</label>
                          <p class="borde-count" style="color: #baa345">
                            {{ global.taskday }}
                          </p>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="content-info pad-new text-center">
                          <label for>MONTH</label>
                          <p class="borde-count">{{ global.taskmonth }}</p>
                        </div>
                      </div>
                    </div>
                  </b-card-body>
                </div>
              </b-card>
            </li>
            <li class="nav-item p-1">
              <b-card class="ecommerce-card col-lg-12 h-200" no-body>
                <div class="text-center pt-1">
                  <b-button variant="primary" tag="a" class="btn-cart w-100"
                    @click="change_tab(3)">
                    <feather-icon icon="TrendingUpIcon" class="mr-50" />
                    <span>Sales</span>
                  </b-button>
                </div>
                <div class="row" style="height: 10px"></div>
                <div>
                  <b-card-body>
                    <div class="row">
                      <div class="col-6">
                        <div class="content-info pad-new text-center">
                          <label for>TODAY</label>
                          <p class="borde-count" style="color: #baa345">
                            {{ global.vendioday }}
                          </p>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="content-info pad-new text-center">
                          <label for>MONTH</label>
                          <p class="borde-count">{{ global.vendiomonth }}</p>
                        </div>
                      </div>
                    </div>
                  </b-card-body>
                </div>
              </b-card>
            </li>
            <li class="nav-item p-1">
              <b-card class="ecommerce-card col-lg-12 h-200" no-body>
                <div class="text-center pt-1">
                  <b-button variant="primary" tag="a" class="btn-cart w-100"
                    @click="change_tab(4)">
                    <feather-icon icon="StarIcon" class="mr-50" />
                    <span>Capturated</span>
                  </b-button>
                </div>
                <div class="row" style="height: 10px"></div>
                <div>
                  <b-card-body>
                    <div class="row">
                      <div class="col-6">
                        <div class="content-info pad-new text-center">
                          <label for>TODAY</label>
                          <p class="borde-count" style="color: #baa345">
                            {{ global.clientday }}
                          </p>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="content-info pad-new text-center">
                          <label for>MONTH</label>
                          <p class="borde-count">{{ global.clientmonth }}</p>
                        </div>
                      </div>
                    </div>
                  </b-card-body>
                </div>
              </b-card>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <b-card title="Balance" class="col-12">
          <div class="d-flex justify-content-between flex-wrap">
            <div class="mb-1 mb-sm-0 d-inline">
              <div class="row">
                <div class="col-lg-5">
                  <span  class="text-muted w-100">MONTHLY GRAPHICS</span>
                </div>
                <div class="col-lg-7 ">
                  <v-select
                    v-on:input="filtrocont()"
                    class="input-form w-100 "
                    style="font-size: 15px; width: 50%; float: left; "
                    v-model="year" 
                    :clearable="false"
                    :options="years"
                  >
                  </v-select>
                </div>
              </div> 
            </div>
            <div class="d-flex align-content-center mb-1 mb-sm-0">
              <h1 class="font-weight-bolder">TOTAL: {{ total_year}} </h1>
              <div class="pt-25 ml-75">
              </div>
            </div>
          </div>
            <br>
            <br>
          <app-echart-line-crm :option-data="option" :key="idEchart" />
        </b-card>
      </div>
    </div>
  </div>
</template>


<script>
import { BCard, BButton, BCardBody, BBadge } from "bootstrap-vue";
import vSelect from "vue-select";
import axios from "axios";
import moment from "moment";
import AppEchartLine from "@core/components/charts/echart/AppEchartLine.vue";
import AppEchartLineCrm from "./components/AppEchartLineCrm.vue"
import { amgApi } from '@/service/axios';
import { mapGetters } from 'vuex';
export default {
  name: "dashboard-crm",
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
        series: {
          name: '',
          data: [],
        },
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
      index: 0,
      users: [],
      year: moment().format("YYYY"),
      years: [],
      
    };
  },
  computed:{
    ...mapGetters({
      currentUser: 'auth/currentUser'
    })
  },
  methods: {
    chargeDataToEchart(array,name){
      this.option.series.name = name
      this.option.series.data = array
      this.idEchart++

    },
    change_tab(index) {
      switch (index) {
        case 0:
          this.total_year = this.global.leads_year;
          this.chargeDataToEchart(this.leads,'Total leads')
          break;
        case 1:
          this.total_year = this.global.quotes_year;
          this.chargeDataToEchart(this.quotes,'Total Appointments')
          break;
        case 2:
          this.total_year = this.global.calls_year;
          this.chargeDataToEchart(this.calls,'Total Calls')
          break;
        case 3:
          this.total_year = this.global.sales_year;
          this.chargeDataToEchart(this.sales,'Total Sales')
          break;
        case 4:
          this.total_year = this.global.clients_year;
          this.chargeDataToEchart(this.captur,'Total Captured')
          
          break;
      }
      this.index = index;
    },
    allData() {
      var user_id = this.currentUser.user_id;  
      if (this.currentUser.arrRoles[0].role_id == 1 || this.currentUser.arrRoles[0].role_id== 2) {
        user_id = 0;
      }
      amgApi
        .post("/filtrouserdash",{
          created_id:user_id,
        })
        .then((response) => {
          this.userfilter = response.data.usercreate;
          this.global = response.data;
          this.leads = response.data.leads.map((list) => {
            return list;
          });
          
          this.quotes = response.data.quotes.map((list) => {
            return list;
          });
          this.calls = response.data.calls.map((list) => {
            return list;
          });
          this.sales = response.data.sales.map((list) => {
            return list;
          });
          this.captur = response.data.vendio.map((list) => {
            return list;
          });
          
          this.chargeDataToEchart(this.leads,'Total Leads')
          this.total_year = this.global.leads_year;
        });
    },
    filtrocont(){
      if(this.userfilter != null){
        amgApi
        .post("/filtrouserdash", {
          created_id:this.userfilter.id,
          anio: this.year,
        }).then(response =>{
              this.global = response.data;
              this.leads = response.data.leads.map((list) => {
                return list;
              });
              this.quotes = response.data.quotes.map((list) => {
                return list;
              });
              this.calls = response.data.calls.map((list) => {
                return list;
              });
              this.sales = response.data.sales.map((list) => {
                return list;
              });
              this.captur = response.data.vendio.map((list) => {
                return list;
              });
              this.chargeDataToEchart(this.leads,'Total Leads')
              this.total_year = this.global.leads_year;
        }) 
      }else{
        
        this.allData()
        this.year = '2021'
        
      }
    },
    userCreator() {
      amgApi
        .post("/sellerall/2", {
          roles: "",
          type: "1",
        })
        .then((response) => {
           this.users = response.data;
        });
    },
    year_select() {
      for (var x = 2014; x <= moment().format("YYYY"); x++) {
        this.years.push(x);
      }
    },
    
  },
  created() {
    this.userCreator()
    this.allData()
    this.year_select()
    
  },
};
</script>

<style lang="scss">
@import "~@core/scss/base/pages/app-ecommerce.scss";
</style>

<style lang="scss" scoped>
.item-view-radio-group ::v-deep {
  .btn {
    display: flex;
    align-items: center;
  }
}

.ecommerce-card {
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 25px 0 rgba(black, 0.25);
  }
}

.per-page-selector {
  width: 90px;
}
</style>

