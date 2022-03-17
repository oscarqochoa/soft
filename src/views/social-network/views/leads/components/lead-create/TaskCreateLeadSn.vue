<template>
  <div>
    <b-card no-body class="p-2 mt-4">
      <b-row>
        <b-col md="5" class="d-flex align-items-center">
          <h4 class="title-card m-0">Task</h4>
          <p
              v-if="!lead.first_name || !lead.last_name || !lead.mobile"
              class="m-0 ml-1 text-danger"
          >(First Name, Last Name and Phone (M) are required)</p>
        </b-col>
        <b-col md="2" class="d-flex align-items-center">
        </b-col>
      </b-row>

      <b-row class="mt-2">
        <b-col md="2" class="d-flex align-items-center">
          <h3 class="title-card m-0 font-medium-1">Type Task</h3>
        </b-col>
        <b-col md="2" class="d-flex align-items-center">

          <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant=""
              class="mr-2 pl-5 pr-5"
              :class="!addLater ? '' : 'btn-danger'"
              @click="toggleTask('addLater')"
              :disabled="((lead.first_name === '') || (lead.last_name === '') || (lead.mobile === ''))"
          >
            <span >Later</span>
          </b-button>
          <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant=""
              class="mr-2 pl-5 pr-5"
              :class="!addNow ? '' : 'btn-danger'"
              @click="toggleTask('addNow')"
              :disabled="((lead.first_name === '') || (lead.last_name === '') || (lead.mobile === ''))"
          >
            <span >Now</span>
          </b-button>

        </b-col>
      </b-row>

      <template v-if="addLater">
        <b-row class="mt-2">
          <b-col md="2" class="d-flex align-items-center">
            <h3 class="title-card m-0 font-medium-1">Content Task</h3>
          </b-col>
          <b-col md="5" class="d-flex align-items-center ">

            <div class="container-task-later">

              <div class="mr-1 text-left">
                <ValidationProvider rules="required" v-slot="{errors}" name="Day event">
                  <b-form-group
                      label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                      label-for="input-horizontal"
                      :state="errors[0] ? false : null"
                      label="Day Event:"
                  >
                    <b-form-datepicker
                        :class="{'border-error-sn' :errors[0]}"
                        :state="errors[0] ? false : null"
                        v-model="lead.date"
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        locale="en"
                        class="font-small-4"
                        placeholder="Select day"
                    />
                    <div v-if="errors[0]" class="text-error-sn text-center">Day event {{errors[0]}}</div>
                  </b-form-group>
                </ValidationProvider>
              </div>

              <div class="mr-1 text-left">
                <ValidationProvider rules="required" v-slot="{errors}" name="From">
                  <b-form-group
                      label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                      label-for="input-horizontal"

                      label="From:"
                  >
                    <b-form-timepicker
                        :class="{'border-error-sn' :errors[0]}"
                        :state="errors[0] ? false : null"
                        v-model="lead.from"
                        class="font-small-4"
                        placeholder="Select hour"
                    ></b-form-timepicker>
                    <div v-if="errors[0]" class="text-error-sn text-center">From {{errors[0]}}</div>
                  </b-form-group>
                </ValidationProvider>
              </div>
              <div class="text-left">
                <ValidationProvider rules="required" v-slot="{errors}" name="To">
                  <b-form-group
                      label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                      label-for="input-horizontal"

                      label="To:"
                  >
                    <b-form-timepicker
                        :class="{'border-error-sn' :errors[0]}"
                        :state="errors[0] ? false : null"
                        v-model="lead.to"
                        class="font-small-4"
                        placeholder="Select hour"
                    ></b-form-timepicker>
                    <div v-if="errors[0]" class="text-error-sn text-center">To {{errors[0]}}</div>
                  </b-form-group>
                </ValidationProvider>
              </div>

            </div>

          </b-col>
          <b-col md="5" class="d-flex align-items-center">

            <div class="container-task-later task-later-seller">

              <div class="mr-1 d-flex align-items-center justify-content-center">
                <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="danger"
                    class="btn-find-seller-later"
                    @click="findSellers"
                >
                  <span >Find Seller</span>
                </b-button>
              </div>

              <div class="mr-1 text-left">
                <ValidationProvider rules="required" v-slot="{errors}" name="Title seller">
                  <b-form-group
                      label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                      label-for="input-horizontal"

                      label="Title:"
                  >
                    <b-input
                        :class="{'border-error-sn' :errors[0]}"
                        :state="errors[0] ? false : null"
                        v-model="lead.title"
                        placeholder="Type title"
                    ></b-input>
                    <div v-if="errors[0]" class="text-error-sn text-center">Title {{errors[0]}}</div>
                  </b-form-group>
                </ValidationProvider>
              </div>

              <div class="">
                <b-col md="12 text-left">
                  <ValidationProvider v-slot="{errors}" rules="required" name="Seller">
                    <b-form-group
                        :state="errors[0] ? false : null"
                        label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                        label-for="input-horizontal"
                        label="Seller"
                    >
                      <v-select
                          label="user_name"
                          :reduce="el => el.value"
                          :options="S_SELLERS"
                          v-model="lead.seller">

                        <template #option="{ user_name, status_session }">
                          <div class="d-flex align-items-center justify-content-start">
                            <div class="point-seller" :class="status_session ? 'bg-green' : ''"> </div>
                            <p class="m-0 font-small-2 truncate truncate-options">{{ user_name }}</p>
                          </div>
                        </template>

                        <template #selected-option="{ user_name, status_session }">
                          <div class="d-flex align-items-center justify-content-start">
                            <div class="point-seller" :class="status_session ? 'bg-green' : ''"> </div>
                            <p class="m-0 font-small-2 truncate">{{ user_name }}</p>
                          </div>
                        </template>

                      </v-select>
                      <div v-if="errors[0]" class="text-error-sn text-center">Title {{errors[0]}}</div>
                    </b-form-group>
                    <input type="radio" class="d-none bg-green" v-model="lead.seller" />

                  </ValidationProvider>

                </b-col>

              </div>

            </div>

          </b-col>
        </b-row>

      </template>

      <template v-if="addNow">
        <b-row class="mt-2">
          <b-col md="2" class="d-flex align-items-center">
            <h3 class="title-card m-0 font-medium-1">Content Task</h3>
          </b-col>
          <b-col md="10" class="d-flex align-items-center ">

            <div class="container-task-later task-now-seller">

              <div class="mr-1 text-left">

                <b-col md="12">
                  <ValidationProvider v-slot="{errors}" rules="required" name="Subject">
                    <b-form-group
                        label="Subject"
                        label-for="subject"
                        :state="errors[0] ? false : null"
                        id="fieldset-horizontal"
                        label-class="font-bureau-style font-weight-normal color-gray-input-sn"

                    >
                      <v-select
                          id="subject_id_task"
                          v-model="lead.subject"
                          :options="subjectOptions"
                          :clearable="false"
                      ></v-select>
                    </b-form-group>
                  </ValidationProvider>
                  <input type="radio" class="d-none bg-green" v-model="lead.subject" />

                </b-col>
              </div>

              <div class="mr-1 text-left">
                <b-col md="12">
                  <ValidationProvider v-slot="{errors}" rules="required" name="Assign to">
                    <b-form-group
                        :state="errors[0] ? false : null"
                        label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                        label-for="input-horizontal"
                        label="Assign to"
                    >
                      <v-select
                          :reduce="el => el.value"
                          :options="S_SELLERS"
                          label="user_name"
                          v-model="lead.assign"
                      >

                        <template #option="{ user_name, status_session }">
                          <div class="d-flex align-items-center justify-content-start">
                            <div style="margin-bottom: 3px;" class="point-seller mr-1" :class="status_session ? 'bg-green' : ''"> </div>
                            <p class="m-0 font-small-2">{{ user_name }}</p>
                          </div>
                        </template>

                        <template #selected-option="{ user_name, status_session }">
                          <div class="d-flex align-items-center justify-content-start">
                            <div style="margin-bottom: 3px;" class="point-seller mr-1" :class="status_session ? 'bg-green' : ''"> </div>
                            <p class="m-0 font-small-2">{{ user_name }}</p>
                          </div>
                        </template>

                      </v-select>
                      <div v-if="errors[0]" class="text-error-sn text-center">Assign to {{errors[0]}}</div>
                    </b-form-group>
                    <input type="radio" class="d-none bg-green" v-model="lead.assign" />

                  </ValidationProvider>

                </b-col>

              </div>
              <div class="mr-1 text-left">
                <ValidationProvider rules="required" v-slot="{errors}" name="Due date">
                  <b-form-group
                      label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                      label-for="input-horizontal"

                      label="Due Date"
                  >
                    <b-form-datepicker
                        v-model="lead.due_date"
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        locale="en"
                        :class="{'border-error-sn' :errors[0]}"
                        :state="errors[0] ? false : null"
                    />
                    <div v-if="errors[0]" class="text-error-sn text-center">Due date {{errors[0]}}</div>
                  </b-form-group>
                </ValidationProvider>
              </div>
              <div class="mr-1 text-left">
                <ValidationProvider rules="required" v-slot="{errors}" name="Due hour">
                  <b-form-group
                      label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                      label-for="input-horizontal"
                      label="Due Hour"
                  >
                    <b-form-timepicker
                        :class="{'border-error-sn' :errors[0]}"
                        :state="errors[0] ? false : null"
                        v-model="lead.hour"
                    ></b-form-timepicker>
                    <div v-if="errors[0]" class="text-error-sn text-center">Due hour {{errors[0]}}</div>
                  </b-form-group>
                </ValidationProvider>
              </div>

            </div>

          </b-col>
        </b-row>
      </template>

      <template v-if="(!(lead.first_name === '') && !(lead.last_name === '') && !(lead.mobile === '')) && (addNow || addLater)">
        <b-row class="">
          <b-col md="2" class="d-flex align-items-center">
            <h3 class="title-card m-0 font-medium-1">Send Sms?</h3>
          </b-col>
          <b-col md="5" class="d-flex align-items-center ">

            <div class="container-task-later">

              <VueToggles
                  class="mt-1"
                  height="31"
                  width="90"
                  checkedText="YES"
                  uncheckedText="NO"
                  checkedBg="#FF6A6A"
                  :dotColor="lead.sms_status? 'white' : '#FF6A6A'"
                  uncheckedBg="lightgrey"
                  :value="lead.sms_status"
                  @click="lead.sms_status = !lead.sms_status"
                  fontWeight="bold"
              ></VueToggles>

            </div>

          </b-col>
        </b-row>
      </template>



    </b-card>
  </div>
</template>

<script>
import Ripple from "vue-ripple-directive";
import {mapActions, mapState} from "vuex";
import vSelect from "vue-select";
import VueToggles from "vue-toggles";

export default {
  components: {
    vSelect,
    VueToggles
  },
  props: {
    lead: {
      type: Object,
      default: () => ({}),
    },
    info: {
      type: Object,
      default: () => ({}),
    },

  },
  directives: {
    Ripple,
  },
  data () {
    return {
      addLater: false,
      addNow: false,
      leadGa: {},
      subjectOptions: [
        {
          label: 'CALL',
          value: 1
        }
      ]
    }
  },
  async created() {
    this.leadGa = this.lead
    console.log(this.leadGa)

  },
  computed : {
    ...mapState('SocialNetworkLeadsStore', ['S_SELLERS']),

  },
  methods: {
    ...mapActions(
        'SocialNetworkLeadsStore',
        [
          'A_GET_HOUR_SYSTEM',
          'A_GET_SELLER_TASK_FAVORITE',
          'A_RESERT_S_SELLERS',
          'A_FORMAT_DATE'
        ]
    ),
    async toggleTask(type) {
      await this.A_RESERT_S_SELLERS()
      this.resetValues();

      if (type === 'addNow') {
        this.addNow = true;
        this.addLater = false;



        const hour = await this.A_GET_HOUR_SYSTEM();
        const date = await this.A_FORMAT_DATE(new Date());
        await this.A_GET_SELLER_TASK_FAVORITE({date_hour: `${date} ${hour}:00`})
        this.lead.attend = 2;

      } else {
        this.addNow = false;
        this.addLater = true;

        this.lead.attend = 1;
      }
    },
    resetValues() {
      this.lead.seller = null
      this.lead.assign = null
      this.lead.title = "";
      this.lead.subject = "CALL";
      this.lead.hour = "";
      this.lead.from = "";
      this.lead.to = null;
      this.lead.date = "";

      this.lead.sms_status = 0;
      this.lead.due_date = "";
      this.lead.attend = null;
    },
    async findSellers() {
      if(this.lead.date && this.lead.from) {
        await this.A_GET_SELLER_TASK_FAVORITE({date_hour: `${this.lead.date} ${this.lead.from}`})
      } else{
        this.$bvToast.toast(`You must select a date and time`, {
          title: `Information`,
          autoHideDelay: 3000,
          appendToast: true,
          variant: 'info'
        });
      }
    },
  },
  watch: {

  }
}
</script>

<style scoped lang="scss">
.container-task-later{
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.task-later-seller{
  grid-template-columns: 2fr 1.5fr 3fr;
}
.task-now-seller{
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.point-seller{
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px solid #fff;
  background: #f1f1f1;
  margin-right: 5px;
}
.bg-green{
  background: green !important;
}
.truncate {
  width: 67px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.truncate-options {
  width: 85px;
}
.btn-find-seller-later{
  margin-top: 9px;
}

</style>