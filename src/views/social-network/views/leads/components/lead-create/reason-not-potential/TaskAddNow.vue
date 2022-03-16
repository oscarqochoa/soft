<template>
  <b-row class="mt-2">
    <b-col md="2" class="d-flex align-items-center">
      <h3 class="title-card m-0 font-medium-1">Content Task</h3>
    </b-col>
    <b-col md="10" class="d-flex align-items-center ">

      <div class="container-task-later task-now-seller">

        <div class="mr-1 text-left">

          <b-col md="12">
            <ValidationProvider v-slot="{errors}" rules="required" name="input-create-lead-40,Subject">
              <b-form-group
                  label="Subject"
                  label-for="subject"
                  :state="errors[0] ? false : null"
                  id="fieldset-horizontal"
                  label-class="font-bureau-style font-weight-normal color-gray-input-sn"

              >
                <v-select
                    id="input-create-lead-40"
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
            <ValidationProvider v-slot="{errors}" rules="required" name="input-create-lead-41,Assign to">
              <b-form-group
                  :state="errors[0] ? false : null"
                  label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                  label-for="input-horizontal"
                  label="Assign to"
              >
                <v-select
                    id="input-create-lead-41"
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
          <ValidationProvider rules="required" v-slot="{errors}" name="input-create-lead-42,Due date">
            <b-form-group
                label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                label-for="input-horizontal"

                label="Due Date"
            >
              <kendo-datepicker
                  :format="'MM-dd-yyyy'"
                  v-model="lead.due_date"
                  v-mask="'##/##/####'"
                  class="leads-datepicker"
                  id="input-create-lead-42"
                  :class="errors[0] ? 'w-100 rounded bg-transparent k-picker-custom border-error-datepicker picker-select-date' : 'w-100 rounded bg-transparent k-picker-custom picker-select-date'"
              />
              <div v-if="errors[0]" class="text-error-sn text-center">Due date {{errors[0]}}</div>
            </b-form-group>
          </ValidationProvider>
        </div>
        <div class="mr-1 text-left">
          <ValidationProvider rules="required" v-slot="{errors}" name="input-create-lead-43,Due hour">
            <b-form-group
                label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                label-for="input-horizontal"
                label="Due Hour"
            >
              <b-form-timepicker
                  id="input-create-lead-43"
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

<script>
import {mapActions, mapState} from "vuex";
import vSelect from "vue-select";
import Ripple from "vue-ripple-directive";

export default {
  name: 'TaskAddNow',
  data () {
    return {
      subjectOptions: [
        {
          label: 'CALL',
          value: 1
        }
      ]
    }
  },
  props: {
    lead: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    document.getElementById('input-create-lead-42').placeholder = 'Type day event'
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
        console.log('date 123: ', date)
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
        this.lead.date = `${date_date[2]}-${date_date[0]}-${date_date[1]}`
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