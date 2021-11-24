<template>
  <div class="row">
    <div class="col-md-12 col-lg-12 col-sm-12">
      <div class="row">
        <div class="col-lg-6"></div>
        <div class="col-lg-6">
          <v-select
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
      <div>
        <div class="cards_wrap ">
            <!--
          <div class="card_item">
            <b-card class="card_section ">
              <div class="text-center">
                <b-button variant="primary" tag="a" class="btn-cart">
                  <feather-icon icon="Edit3Icon" class="mr-50" />
                  <span>Leads</span>
                </b-button>
              </div>
              <div class="row" style="height: 10px"></div>
              <div
                class="cont-contst borde-box-dashboard"
                style="background: white"
              >
                <div class="row">
                  <div class="col-6">
                    <div class="content-info pad-new text-center">
                      <label for>TODAY</label>
                      <p class="borde-count" style="color: #baa345">{{ 31 }}</p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="content-info pad-new text-center">
                      <label for>MONTH</label>
                      <p class="borde-count">{{ 41 }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </b-card>
          </div>
          <div class="card_item">
            <b-card class="card_section ">
              <div class="text-center">
                <b-button variant="primary" tag="a" class="btn-cart">
                  <feather-icon icon="Edit3Icon" class="mr-50" />
                  <span>Appointem</span>
                </b-button>
              </div>
              <div class="row" style="height: 10px"></div>
              <div
                class="cont-contst borde-box-dashboard"
                style="background: white"
              >
                <div class="row">
                  <div class="col-6">
                    <div class="content-info pad-new text-center">
                      <label for>TODAY</label>
                      <p class="borde-count" style="color: #baa345">{{ 31 }}</p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="content-info pad-new text-center">
                      <label for>MONTH</label>
                      <p class="borde-count">{{ 41 }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </b-card>
          </div>
          <div class="card_item">
            <b-card class="card_section p-2 ">
              <div class="text-center">
                <b-button variant="primary" tag="a" class="btn-cart">
                  <feather-icon icon="Edit3Icon" class="mr-50" />
                  <span>TASKS</span>
                </b-button>
              </div>
              <div class="row" style="height: 10px"></div>
              <div
                class="cont-contst borde-box-dashboard"
                style="background: white"
              >
                <div class="row">
                  <div class="col-6">
                    <div class="content-info pad-new text-center">
                      <label for>TODAY</label>
                      <p class="borde-count" style="color: #baa345">{{ 31 }}</p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="content-info pad-new text-center">
                      <label for>MONTH</label>
                      <p class="borde-count">{{ 41 }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </b-card>
          </div>
          <div class="card_item">
            <b-card class="card_section p-2 ">
              <div class="text-center">
                <b-button variant="primary" tag="a" class="btn-cart">
                  <feather-icon icon="TrendingUpIcon" class="mr-50" />
                  <span>Sales</span>
                </b-button>
              </div>
              <div class="row" style="height: 10px"></div>
              <div
                class="cont-contst borde-box-dashboard"
                style="background: white"
              >
                <div class="row">
                  <div class="col-6">
                    <div class="content-info pad-new text-center">
                      <label for>TODAY</label>
                      <p class="borde-count" style="color: #baa345">{{ 31 }}</p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="content-info pad-new text-center">
                      <label for>MONTH</label>
                      <p class="borde-count">{{ 41 }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </b-card>
          </div>
          <div class="card_item">
            <b-card class="card_section p-2 ">
              <div class="text-center">
                <b-button variant="primary" tag="a" class="btn-cart">
                  <feather-icon icon="StarIcon" class="mr-50" />
                  <span>Capturated</span>
                </b-button>
              </div>
              <div class="row" style="height: 10px"></div>
              <div
                class="cont-contst borde-box-dashboard"
                style="background: white"
              >
                <div class="row">
                  <div class="col-6">
                    <div class="content-info pad-new text-center">
                      <label for>TODAY</label>
                      <p class="borde-count" style="color: #baa345">{{ 51 }}</p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="content-info pad-new text-center">
                      <label for>MONTH</label>
                      <p class="borde-count">{{ 45 }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </b-card>
          </div> -->
            <div class="card_item">
                <div class="card_inner">
                    <img src="" alt="">
                    <div class="role_name">Black panter</div>
                    <div class="role_name">Black panter</div>
                </div>
            </div>
            <div class="card_item">
                <div class="card_inner">
                    <img src="" alt="">
                    <div class="role_name">Black panter</div>
                    <div class="role_name">Black panter</div>
                </div>
            </div>
            <div class="card_item">
                <div class="card_inner">
                    <img src="" alt="">
                    <div class="role_name">Black panter</div>
                    <div class="role_name">Black panter</div>
                </div>
            </div>
            <div class="card_item">
                <div class="card_inner">
                    <img src="" alt="">
                    <div class="role_name">Black panter</div>
                    <div class="role_name">Black panter</div>
                </div>
            </div>
        
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { BCard, BButton } from "bootstrap-vue";
import vSelect from "vue-select";
import axios from "axios";
export default {
  name: "dashboard-crm",
  components: {
    BCard,
    BButton,
    vSelect,
  },
  data() {
    return {
      users: [],
      userfilter: "",
    };
  },
  methods: {
    userCreator() {
      axios.get("http://localhost:3000/data").then((response) => {
        this.users = response.data;
        console.log(this.users);
      });
    },
  },
  created() {
    this.userCreator();
  },
};
</script>

<style scoped>
.cards_wrap{
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.cards_wrap .card_item{
    padding: 15px 25px;

    width: 25%;
}

.cards_wrap .card_inner{
    background: #fff;
    border-radius: 5px;
    padding: 35px 20px;
    min-width: 225px;
    min-height: 315px;
    width: 100%;
}


@media (min-width: 600px) {
  .cards_wrap { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 900px) {
  .cards_wrap { grid-template-columns: repeat(4, 1fr); }
}
</style>

