<template>
  <b-container>
    <b-row class="my-2">
      <b-col
        sm="12"
        md="12"
        xl="6"
        class="
          d-flex
          align-items-center
          justify-content-center justify-content-sm-start
        "
      >
        <b-button
          variant="primary"
          class="mr-1"
          v-b-toggle.sidebar-backdrop
          @click="getMoreInfo()"
        >
          <feather-icon
            icon="InfoIcon"
            class="mr-50 text-center cursor-pointer"
          />
          MORE INFO</b-button
        >
      </b-col>
      <b-col
        sm="12"
        md="12"
        xl="2"
        class="d-flex align-items-center justify-content-end align-items-center"
      >
        <b-form-group label="From" label-for="from" style="width: 100%">
          <b-form-datepicker
            id="from"
            v-model="filter.from"
            :date-format-options="{
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            }"
          /> </b-form-group
      ></b-col>
      <b-col
        sm="12"
        md="12"
        xl="2"
        class="d-flex align-items-center justify-content-end align-items-center"
      >
        <b-form-group label="To" label-for="to" style="width: 100%">
          <b-form-datepicker
            id="to"
            v-model="filter.to"
            :date-format-options="{
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            }"
          /> </b-form-group
      ></b-col>
      <b-col
        sm="12"
        md="12"
        xl="2"
        class="d-flex align-items-center justify-content-end align-items-center"
      >
        <b-form-group label="Module" label-for="modul" style="width: 100%">
          <b-form-select
            id="modul"
            v-model="filter.modulId"
            :options="moduls"
          ></b-form-select
        ></b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-table-simple
        hover
        small
        caption-top
        responsive
        ref="table_report_modul"
      >
        <b-thead>
          <b-tr>
            <b-th
              v-for="(item, index) in fields"
              :key="index"
              class="text-center"
              >{{ item.label }}</b-th
            >
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="(item, index) in items" :key="index">
            <b-td v-for="(schedule, i) in item.json_data" :key="i">
              <div
                :class="bgSchedule(schedule)"
                @click="openDetails(item, schedule, schedule.checking_m, 1)"
                v-b-tooltip.hover
                :title="titleSchedule(schedule, 1)"
              >
                {{ schedule.checking_m }}
              </div>
              <div
                class="bg-default p-s"
                @click="
                  openDetails(item, schedule, schedule.m_begining_break, 2)
                "
                v-b-tooltip.hover
                :title="titleSchedule(schedule, 2)"
              >
                {{ schedule.m_begining_break }}
              </div>
              <div
                class="bg-default p-s"
                @click="openDetails(item, schedule, schedule.m_finish_break, 3)"
                v-b-tooltip.hover
                :title="titleSchedule(schedule, 3)"
              >
                {{ schedule.m_finish_break }}
              </div>
              <div
                class="bg-default p-s"
                @click="openDetails(item, schedule, schedule.m_checkout, 4)"
                v-b-tooltip.hover
                :title="titleSchedule(schedule, 4)"
              >
                {{ schedule.m_checkout }}
              </div>
              <div class="bg-hours p-s">HOURS: {{ schedule.total_hours }}</div>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </b-row>
    <!-- *************** MORE DETAILS SCHEDULE ******************* -->
    <b-modal
      v-model="modalDetails"
      :title="titleModal"
      size="lg"
      body-class="p-0"
      title-class="title-assitence-schedule"
      hide-footer
    >
      <b-container fluid class="p-4">
        <div class="text-center">
          <b-img
            :src="detailsSchedule.image"
            fluid
            class="image-captured"
            alt="Responsive image"
          ></b-img>
        </div>
        <b-row class="py-2">
          <b-col cols="auto">
            <feather-icon icon="CheckCircleIcon" class="mr-50 text-center" />
            ASSIGNED: {{ detailsSchedule.assigned }}</b-col
          >
          <b-col cols="auto">
            <feather-icon icon="CheckCircleIcon" class="mr-50 text-center" />
            ASSISTANCE: {{ detailsSchedule.assistance }}</b-col
          >
          <b-col cols="auto">
            <feather-icon icon="CheckCircleIcon" class="mr-50 text-center" />
            IP ADDRESS: {{ detailsSchedule.ip }}</b-col
          >
        </b-row>
      </b-container>
    </b-modal>
    <!-- ***************** MORE INFO **************** -->
    <b-sidebar
      id="sidebar-backdrop"
      title="More info"
      bg-variant="white"
      sidebar-class="sidebar-lg-schedule"
      header-class="pt-1"
      backdrop
      shadow
    >
      <div class="px-3 py-2">
        <content-more-info-report :data="dataSchedule" :key="keyMoreInfo" />
      </div>
    </b-sidebar>
  </b-container>
</template>
<script>
import SchedulesServices from "../service/schedule.service";
import contentMoreInfoReport from "../modals/contentInfoReportModul.vue";
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      fields: [],
      items: [],
      titleModal: null,
      modal: false,
      schedule: {},
      dataSchedule: [],
      modalDetails: false,
      filter: {
        from: moment().startOf("week").add(1, "days").format("YYYY-MM-DD"),
        to: moment().endOf("week").add(1, "days").format("YYYY-MM-DD"),
        searchUser: "",
        modulId: null,
      },
      keyMoreInfo: 0,
      bgBtnAdres: "background-color: rgba(51, 59, 81, 0.2) !important",
      detailsSchedule: {},
      moduls: [],
    };
  },
  components: { contentMoreInfoReport },
  mounted() {
    this.filter.modulId = this.currentUser.modul_id;
    console.log(this.currentUser.arrModuls);
    this.getReport();
  },
  methods: {
    async getReport() {
      this.addPreloader();
      this.items = [];
      const params = {
        modul_id: this.filter.modulId,
        user_id: this.currentUser.user_id,
        start_date: this.filter.from,
        end_date: this.filter.to,
      };
      const data = await SchedulesServices.getHourReport(params);
      let array = data.data;
      array.forEach((element) => {
        this.items.push({
          id: element.id,
          user_name: element.name_user,
          json_data: element.json_data,
        });
      });
      this.dataByDay(data);
      this.modulsUser();
      this.removePreloader();
    },
    dataByDay(data) {
      this.fields = [];
      let array = data.days;
      array.forEach((element) => {
        let letter = element.dayheader.toUpperCase();
        this.fields.push({
          key: "field",
          label: letter.toUpperCase(),
        });
      });
    },
    modulsUser() {
      let array = this.currentUser.arrModuls;
      this.moduls = [];
      array.forEach((element) => {
        this.moduls.push({
          value: element.id_module,
          text: element.module_name,
        });
      });
    },
    bgSchedule(schedule) {
      if (schedule.status) {
        return "bg-late";
      } else {
        return "bg-default";
      }
    },
    openDetails(item, schedule, assistance, type) {
      let dataNull = "00:00:00";
      this.titleModal = item.user_name;
      this.schedule = schedule;
      if (assistance != dataNull) {
        this.getDetailsSchedule(schedule, type);
      } else {
        this.showToast("info", "top-right", "Oops!", "XIcon", "NO ASSISTANCE");
      }
    },
    titleSchedule(schedule, assistance) {
      let dataNull = "00:00:00";
      let replace = "NOT ASSIGNED";
      switch (assistance) {
        case 1:
          return schedule.checking == dataNull ? replace : schedule.checking;
        case 2:
          return schedule.begining_break == dataNull
            ? replace
            : schedule.begining_break;
        case 3:
          return schedule.finish_break == dataNull
            ? replace
            : schedule.finish_break;
        case 4:
          return schedule.checkout == dataNull ? replace : schedule.checkout;
      }
    },
    async getDetailsSchedule(schedule, type) {
      this.addPreloader();
      const params = { id: schedule.id_schedule };
      const data = await SchedulesServices.getDetailsSchedule(params);
      if (type == 1) {
        this.detailsSchedule = {
          ip: data[0].ip,
          assigned: schedule.checking,
          assistance: schedule.checking_m,
          image: data[0].images,
        };
      } else if (type == 2) {
        this.detailsSchedule = {
          ip: data[0].ip2,
          assigned: schedule.begining_break,
          assistance: schedule.m_begining_break,
          image: data[0].images2,
        };
      } else if (type == 3) {
        this.detailsSchedule = {
          ip: data[0].ip3,
          assigned: schedule.finish_break,
          assistance: schedule.m_finish_break,
          image: data[0].images3,
        };
      } else if (type == 4) {
        this.detailsSchedule = {
          ip: data[0].ip4,
          assigned: schedule.checkout,
          assistance: schedule.m_checkout,
          image: data[0].images4,
        };
      }
      this.modalDetails = true;
      this.removePreloader();
    },
    getMoreInfo() {
      this.dataSchedule = this.items;
      this.keyMoreInfo = ++this.keyMoreInfo;
    },
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  watch: {
    "filter.from"(newVal, oldVal) {
      this.getReport();
    },
    "filter.to"(newVal, oldVal) {
      this.getReport();
    },
  },
};
</script>

<style>
</style>