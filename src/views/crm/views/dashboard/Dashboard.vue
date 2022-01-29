<template>
  <div class="row">
    <div class="col-md-12 col-lg-12 col-sm-12">
      <div class="row">
        <div class="col-lg-6" />
        <div class="col-lg-6" />
      </div>
      <b-row />
      <b-row>
        <b-col cols="6" sm="3" md="4" lg="3" xl="2">
          <b-card class="ecommerce-card col-lg-12 h-200" style="height:11rem;" no-body>
            <div class="text-center pt-1">
              <b-button variant="primary" tag="a" class="btn-cart w-100" @click="change_tab(0)">
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
                      <p class="borde-count" style="color: #baa345">{{ global.leadday }}</p>
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
          <b-card class="ecommerce-card col-lg-12 h-200" style="height:11rem;" no-body>
            <div class="text-center pt-1">
              <b-button variant="primary" tag="a" class="btn-cart w-100" @click="change_tab(1)">
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
                      <p class="borde-count" style="color: #baa345">{{ global.eventday }}</p>
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
          <b-card class="ecommerce-card col-lg-12 h-200" style="height:11rem;" no-body>
            <div class="text-center pt-1">
              <b-button variant="primary" tag="a" class="btn-cart w-100" @click="change_tab(2)">
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
                      <p class="borde-count" style="color: #baa345">{{ global.taskday }}</p>
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
          <b-card class="ecommerce-card col-lg-12 h-200" style="height:11rem;" no-body>
            <div class="text-center pt-1">
              <b-button variant="primary" tag="a" class="btn-cart w-100" @click="change_tab(3)">
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
                      <p class="borde-count" style="color: #baa345">{{ global.vendioday }}</p>
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
          <b-card class="ecommerce-card col-lg-12 h-200" style="height:11rem;" no-body>
            <div class="text-center pt-1">
              <b-button variant="primary" tag="a" class="btn-cart w-100" @click="change_tab(4)">
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
                      <p class="borde-count" style="color: #baa345">{{ global.clientday }}</p>
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
      </b-row>
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
      <div class="row">
        <b-card :title="`${nameOfTab} Balance`" class="col-12">
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
                    v-if="[1,2].includes(currentUser.role_id)"
                    v-model="userfilter"
                    class="per-page-selector-user"
                    style="font-size: 15px"
                    placeholder="Select User"
                    label="user_name"
                    :options="users"
                    :reduce="val => val.id"
                    @input="filtrocont()"
                  />
                </b-col>
              </b-row>
            </div>
            <div class="d-flex align-content-center mb-1 mb-sm-0 col-lg-3">
              <h1 class="font-weight-bolder">TOTAL: {{ total_year }}</h1>
              <div class="pt-25 ml-75" />
            </div>
          </div>
          <br />
          <br />
          <app-echart-line-crm :key="idEchart" :option-data="option" />
        </b-card>
      </div>
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
import { amgApi } from "@/service/axios";

export default {
  name: "DashboardCrm",
  components: {
    BCard,
    BButton,
    BCardBody,
    AppEchartLine,
    AppEchartLineCrm,
    BBadge,
    vSelect
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
          "December"
        ],
        series: {
          name: "",
          data: []
        }
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
      nameOfTab: "Leads"
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser"
    })
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
    change_tab(index) {
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
    allData() {
      this.$store.commit("app/SET_LOADING", true);
      let { user_id } = this.currentUser;
      if (this.currentUser.role_id == 1 || this.currentUser.role_id == 2) {
        user_id = 0;
      }
      amgApi
        .post("/crm/get-data-dashboard", {
          created_id: user_id
        })
        .then(response => {
          this.userfilter = response.data.usercreate;
          this.global = response.data;
          this.leads = response.data.leads.map(list => list);
          this.quotes = response.data.quotes.map(list => list);
          this.calls = response.data.calls.map(list => list);
          this.sales = response.data.sales.map(list => list);
          this.captur = response.data.vendio.map(list => list); // error
          this.$store.commit("app/SET_LOADING", false);
          this.chargeDataToEchart(this.leads, "Total Leads");
          this.total_year = this.global.leads_year;
          this.nameOfTab = "Leads";
        })
        .catch(error => {
          this.$store.commit("app/SET_LOADING", false);
          this.showToast(
            "danger",
            "top-right",
            "Error",
            "XIcon",
            "Something went wrong!"
          );
          console.error(error);
        });
    },
    filtrocont() {
      if (this.userfilter != null) {
        this.$store.commit("app/SET_LOADING", true);
        amgApi
          .post("/crm/get-data-dashboard", {
            created_id: this.userfilter,
            anio: this.year
          })
          .then(response => {
            this.global = response.data;
            this.leads = response.data.leads.map(list => list);
            this.quotes = response.data.quotes.map(list => list);
            this.calls = response.data.calls.map(list => list);
            this.sales = response.data.sales.map(list => list);
            this.captur = response.data.vendio.map(list => list);
            this.chargeDataToEchart(this.leads, "Total Leads");
            this.total_year = this.global.leads_year;
            this.$store.commit("app/SET_LOADING", false);
          })
          .catch(error => {
            this.$store.commit("app/SET_LOADING", false);
            this.showToast(
              "danger",
              "top-right",
              "Error",
              "XIcon",
              "Something went wrong!"
            );
            console.error(error);
          });
      } else {
        this.allData();
        this.year = "2021";
      }
    },
    userCreator() {
      amgApi
        .post("/commons/sellerall/2", {
          roles: "",
          type: "1"
        })
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          this.showToast(
            "danger",
            "top-right",
            "Error",
            "XIcon",
            "Something went wrong with users!"
          );
          console.error(error);
        });
    },
    year_select() {
      for (let x = 2014; x <= moment().format("YYYY"); x++) {
        this.years.push(x);
      }
    }
  }
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
  width: 130px;
  height: 50px;
}
.per-page-selector-user {
  width: 200px;
  height: 50px;
}
</style>
