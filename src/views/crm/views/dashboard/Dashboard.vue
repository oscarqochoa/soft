<template>
  <div class="row">
    <div class="col-md-12 col-lg-12 col-sm-12">
      <div class="row">
        <div class="col-lg-6" />
        <div class="col-lg-6" />
      </div>
      <b-row />
      <!-- <b-row>
        <b-col cols="6" sm="3" md="4" lg="3" xl="2">
          <b-card
            class="ecommerce-card col-lg-12 h-200"
            style="height: 11rem"
            no-body
          >
            <div class="text-center pt-1">
              <b-button
                variant="primary"
                tag="a"
                class="btn-cart w-100"
                @click="change_tab(0)"
              >
                <span>Leads</span>
              </b-button>
            </div>
            <div class="row" style="height: 10px" />
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
        </b-col>
        <b-col cols="6" sm="3" md="4" lg="3" xl="2">
          <b-card
            class="ecommerce-card col-lg-12 h-200"
            style="height: 11rem"
            no-body
          >
            <div class="text-center pt-1">
              <b-button
                variant="primary"
                tag="a"
                class="btn-cart w-100"
                @click="change_tab(1)"
              >
                <span>Appointments</span>
              </b-button>
            </div>
            <div class="row" style="height: 10px" />
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
                      <p class="borde-count">{{ global.eventmonth }}</p>
                    </div>
                  </div>
                </div>
              </b-card-body>
            </div>
          </b-card>
        </b-col>
        <b-col cols="6" sm="3" md="4" lg="3" xl="2">
          <b-card
            class="ecommerce-card col-lg-12 h-200"
            style="height: 11rem"
            no-body
          >
            <div class="text-center pt-1">
              <b-button
                variant="primary"
                tag="a"
                class="btn-cart w-100"
                @click="change_tab(2)"
              >
                <span>Tasks</span>
              </b-button>
            </div>
            <div class="row" style="height: 10px" />
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
        </b-col>
        <b-col cols="6" sm="3" md="4" lg="3" xl="2">
          <b-card
            class="ecommerce-card col-lg-12 h-200"
            style="height: 11rem"
            no-body
          >
            <div class="text-center pt-1">
              <b-button
                variant="primary"
                tag="a"
                class="btn-cart w-100"
                @click="change_tab(3)"
              >
                <span>Sales</span>
              </b-button>
            </div>
            <div class="row" style="height: 10px" />
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
        </b-col>
        <b-col cols="6" sm="3" md="4" lg="3" xl="2">
          <b-card
            class="ecommerce-card col-lg-12 h-200"
            style="height: 11rem"
            no-body
          >
            <div class="text-center pt-1">
              <b-button
                variant="primary"
                tag="a"
                class="btn-cart w-100"
                @click="change_tab(4)"
              >
                <span>Capturated</span>
              </b-button>
            </div>
            <div class="row" style="height: 10px" />
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
        </b-col>
      </b-row> -->
      <!-- <div class="row">
        <div class="cont-search-paginate">
          <ul
            id="myTab"
            class="nav nav-tabs unstyled-list list-inline"
            role="tablist"
          >
            <li class="nav-item p-1 ratings-list-item">
              <b-card class="ecommerce-card col-lg-12 h-200" no-body>
                <div class="text-center pt-1">
                  <b-button
                    variant="primary"
                    tag="a"
                    class="btn-cart w-100"
                    @click="change_tab(0)"
                  >
                    <feather-icon icon="Edit3Icon" class="mr-50" />
                    <span>Leads</span>
                  </b-button>
                </div>
                <div class="row" style="height: 10px" />
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
                          <p class="borde-count">
                            {{ global.leadmonth }}
                          </p>
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
                  <b-button
                    variant="primary"
                    tag="a"
                    class="btn-cart w-100"
                    @click="change_tab(1)"
                  >
                    <feather-icon icon="Edit3Icon" class="mr-50" />
                    <span>Appointments</span>
                  </b-button>
                </div>
                <div class="row" style="height: 10px" />
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
                          <p class="borde-count">
                            {{ global.eventmonth }}
                          </p>
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
                  <b-button
                    variant="primary"
                    tag="a"
                    class="btn-cart w-100"
                    @click="change_tab(2)"
                  >
                    <feather-icon icon="Edit3Icon" class="mr-50" />
                    <span>Tasks</span>
                  </b-button>
                </div>
                <div class="row" style="height: 10px" />
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
                          <p class="borde-count">
                            {{ global.taskmonth }}
                          </p>
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
                  <b-button
                    variant="primary"
                    tag="a"
                    class="btn-cart w-100"
                    @click="change_tab(3)"
                  >
                    <feather-icon icon="TrendingUpIcon" class="mr-50" />
                    <span>Sales</span>
                  </b-button>
                </div>
                <div class="row" style="height: 10px" />
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
                          <p class="borde-count">
                            {{ global.vendiomonth }}
                          </p>
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
                  <b-button
                    variant="primary"
                    tag="a"
                    class="btn-cart w-100"
                    @click="change_tab(4)"
                  >
                    <feather-icon icon="StarIcon" class="mr-50" />
                    <span>Capturated</span>
                  </b-button>
                </div>
                <div class="row" style="height: 10px" />
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
                          <p class="borde-count">
                            {{ global.clientmonth }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </b-card-body>
                </div>
              </b-card>
            </li>
          </ul>
        </div>
      </div>-->
      <!-- <div class="row">
        
        <div></div>
      </div> -->
      <b-row>
        <b-col cols="2">
          <b-row class="w-100">
            <b-card
              title="Leads"
              @click="change_tab(0)"
              class="ecommerce-card col-lg-12 h-100 cursor-pointer"
              :style="itemCards[0]==true? 'background: linear-gradient(to right, blue, rgb(230, 174, 230));':''"
            >
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
                      background-color: blue;
                      border-radius: 4px;
                    "
                    class="mr-1 item-wrapper-font"
                  ></div>
                  <div class="mr-1">
                    <span style="font-size: medium">Today :</span>
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
                      background-color: rgb(230, 174, 230);
                      border-radius: 4px;
                    "
                    class="mr-1"
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

          <b-row class="w-100">
            <b-card
              title="Appointments"
              class="ecommerce-card col-lg-12 h-150 cursor-pointer"
              @click="change_tab(1)"
              :style="itemCards[1]==true? 'background: linear-gradient(to right, blue, rgb(230, 174, 230));':''"
              
            >
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
                      background-color: blue;
                      border-radius: 4px;
                    "
                    class="mr-1 item-wrapper-font"
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
                      background-color: rgb(230, 174, 230);
                      border-radius: 4px;
                    "
                    class="mr-1"
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
          <b-row class="w-100">
            <b-card
              title="Tasks"
              class="ecommerce-card col-lg-12 h-150 cursor-pointer"
              @click="change_tab(2)"
              :style="itemCards[2]==true? 'background: linear-gradient(to right, blue, rgb(230, 174, 230));':''"
              
            >
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
                      background-color: blue;
                      border-radius: 4px;
                    "
                    class="mr-1 item-wrapper-font"
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
                      background-color: rgb(230, 174, 230);
                      border-radius: 4px;
                    "
                    class="mr-1"
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
          <b-row class="w-100">
            <b-card
              title="Sales"
              class="ecommerce-card col-lg-12 h-150 cursor-pointer"
              @click="change_tab(3)"
              :style="itemCards[3]==true? 'background: linear-gradient(to right, blue, rgb(230, 174, 230));':''"
              
            >
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
                      background-color: blue;
                      border-radius: 4px;
                    "
                    class="mr-1 item-wrapper-font"
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
                      background-color: rgb(230, 174, 230);
                      border-radius: 4px;
                    "
                    class="mr-1"
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
          <b-row class="w-100">
            <b-card
              title="Capturated"
              class="ecommerce-card col-lg-12 h-150 cursor-pointer"
              @click="change_tab(4)"
              :style="itemCards[4]==true? 'background: linear-gradient(to right, blue, rgb(230, 174, 230));':''"
              
            >
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
                      background-color: blue;
                      border-radius: 4px;
                    "
                    class="mr-1 item-wrapper-font"
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
                      background-color: rgb(230, 174, 230);
                      border-radius: 4px;
                    "
                    class="mr-1"
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
        <b-col cols="10">
          <b-card :title="`${nameOfTab} Balance`" class="col-12 " >
            <div class="d-flex justify-content-between flex-wrap row">
              <div class="mb-1 mb-sm-0 d-inline col-lg-7">
                <b-row>
                  <b-col cols="12" sm="4" md="4">
                    <span class="text-muted w-100">MONTHLY GRAPHICS</span>
                  </b-col>
                  <b-col cols="12" sm="3" md="3">
                    <v-select
                      v-model="year"
                      class="per-page-selector"
                      style="font-size: 15px"
                      :clearable="false"
                      :options="years"
                      @input="filtrocont()"
                    />
                  </b-col>
                  <b-col cols="12" sm="4" md="4">
                    <v-select
                      v-if="[1, 2].includes(currentUser.role_id)"
                      v-model="userfilter"
                      class="per-page-selector-user"
                      style="font-size: 15px"
                      placeholder="Select User"
                      label="user_name"
                      :options="users"
                      :reduce="(val) => val.id"
                      @input="filtrocont()"
                    />
                  </b-col>
                </b-row>
              </div>
              <div class="d-flex   mb-1 mb-sm-0 col-lg-3 inline">
                <b-row class="w-100" >
                  <div>
                  <h1 class="font-weight-bolder">TOTAL: </h1>
                </div>
                <div
                   class="important text-center ml-1 mr-1"
                  > 
                  <div  style="
                      background-color:blue;
                      border-radius: 4px;
                    " class="ml-2 mr-2 w-100">
                    <h1 class="font-weight-bolder" style="color:white">{{ total_year }}</h1>
                  </div>
                  </div>
                </b-row>
                <div class="pt-25 ml-75" />
              </div>
            </div>
            <br />
            <br />
            <b-card-body height="80" >
              <app-echart-line-crm :key="idEchart" :option-data="option" />
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
        series: {   
          name: "",
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
      nameOfTab: "Leads",
      itemCards:[false,false,false,false,false],
      item:null,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  created() {
    this.userCreator();
    this.allData();
    this.year_select();
  },
  methods: {
    chargeDataToEchart(array, name) {
      this.option.series.name = name;
      this.option.series.data = array;
      this.idEchart++;
    },
    
    changeItemCards(index){
      for(let i=0; i < this.itemCards.length;i++){
        if (i===index){
          this.itemCards[i] = true
        }else{
          this.itemCards[i] = false
        }
        
      }
    },
    change_tab(index) {
      this.changeItemCards(index)
      switch (index) {
        case 0:
          this.total_year = this.global.leads_year;
          this.chargeDataToEchart(this.leads, "Total leads");
          this.nameOfTab = "Leads";
          
          break;
        case 1:
          this.total_year = this.global.quotes_year;
          this.chargeDataToEchart(this.quotes, "Total Appointments");
          this.nameOfTab = "Appointments";
          break;
        case 2:
          this.total_year = this.global.calls_year;
          this.chargeDataToEchart(this.calls, "Total Calls");
          this.nameOfTab = "Tasks";
          break;
        case 3:
          this.total_year = this.global.sales_year;
          this.chargeDataToEchart(this.sales, "Total Sales");
          this.nameOfTab = "Sales";
          break;
        case 4:
          this.total_year = this.global.clients_year;
          this.chargeDataToEchart(this.captur, "Total Captured");
          this.nameOfTab = "Captured";

          break;
      }
      this.index = index;
    },
    async allData() {
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
        this.chargeDataToEchart(this.leads, "Total Leads");
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
          this.chargeDataToEchart(this.leads, "Total Leads");
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
        this.allData();
        this.year = "2021";
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

.ecommerce-card .card-title{
  font-weight: bold
}
.ecommerce-card {
  &:hover {
    box-shadow: 0 4px 25px 0 rgba(black, 0.25);

    // background-color: #8077e6;
    background: linear-gradient(to right, blue, rgb(230, 174, 230));
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
