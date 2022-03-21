<template>
  <b-row class="mt-2">
    <b-col md="2" class="d-flex align-items-center">
      <h3 class="title-card m-0 font-medium-1">Content Task</h3>
    </b-col>
    <b-col md="5" class="d-flex align-items-center ">

      <div class="container-task-later">

        <div class="mr-1 text-left">
          <ValidationProvider rules="required" v-slot="{errors}" name="input-create-lead-35,Day event">
            <b-form-group
                label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                label-for="input-horizontal"
                :state="errors[0] ? false : null"
                label="Day Event:"
            >
              <kendo-datepicker

                  :format="'MM/dd/yyyy'"
                  v-model="lead.date"
                  v-mask="'##/##/####'"
                  class="leads-datepicker"
                  id="input-create-lead-35"
                  :class="errors[0] ? 'w-100 rounded bg-transparent k-picker-custom border-error-datepicker picker-select-date' : 'w-100 rounded bg-transparent k-picker-custom picker-select-date'"
              />
              <div v-if="errors[0]" class="text-error-sn text-center">Day event {{errors[0]}}</div>
            </b-form-group>
          </ValidationProvider>
        </div>

        <div class="mr-1 text-left">
          <ValidationProvider rules="required" v-slot="{errors}" name="input-create-lead-36,From">

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
                  id="input-create-lead-36"
              ></b-form-timepicker>
              <div v-if="errors[0]" class="text-error-sn text-center">From {{errors[0]}}</div>
            </b-form-group>
          </ValidationProvider>
        </div>
        <div class="text-left">
          <ValidationProvider rules="required" v-slot="{errors}" name="input-create-lead-37,To">

            <b-form-group
                label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                label-for="input-horizontal"
                label="To:"
                id="input-create-lead-37"
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
          <ValidationProvider rules="required" v-slot="{errors}" name="input-create-lead-38,Title seller">
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
                  id="input-create-lead-38"
              ></b-input>
              <div v-if="errors[0]" class="text-error-sn text-center">Title {{errors[0]}}</div>
            </b-form-group>
          </ValidationProvider>
        </div>

        <div class="">
          <b-col md="12 text-left">
            <ValidationProvider v-slot="{errors}" rules="required" name="input-create-lead-39,Seller">
              <b-form-group
                  :state="errors[0] ? false : null"
                  label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                  label-for="input-horizontal"
                  label="Seller"
              >
                <v-select
                    id="input-create-lead-39"
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

<script>
import {mapActions, mapState} from "vuex";
import vSelect from "vue-select";
import Ripple from "vue-ripple-directive";

export default {
  name: 'TaskAddLater',
  props: {
    lead: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    document.getElementById('input-create-lead-35').placeholder = 'Type day event'

  },
  directives: {
    Ripple,
  },
  components: {
    vSelect
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

      this.lead.sms_status = false;
      this.lead.due_date = "";
      this.lead.attend = null;
    },
    async findSellers() {
      if(this.lead.date && this.lead.from) {
        const date_date = this.lead.date.split('/')
        await this.A_GET_SELLER_TASK_FAVORITE({date_hour: `${date_date[2]}-${date_date[0]}-${date_date[1]} ${this.lead.from}`})
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