<template>
  <b-container
    :class="[`bg-light-${task.title ? taskColor[task.title] : 'primary'}`, 'pt-50']"
  >
    <b-row>
      <b-col
        class="d-flex align-items-center font-weight-bolder"
        :style="`color: ${skin === 'dark' ? 'white' : 'black'} !important;`"
      >
        <b-img
          v-if="task.seller_image"
          rounded
          width="30"
          height="32"
          :src="task.seller_image"
          style="margin-right: 6px !important;"
        />
        <b-avatar
          v-else
          rounded
          size="30"
          style="margin-right: 6px !important;"
          :variant="`light-${task.title ? taskColor[task.title] : 'primary'}`"
        />
        {{ task.title ? task.title : task.subject }}
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <ul
          class="p-0"
          style="margin-left: 47px !important; font-size: 0.76em !important;"
        >
          <li :style="`color: ${skin === 'dark' ? 'white' : 'black'} !important;`">
            {{ task.lead_mobile }}
          </li>
          <li :style="`color: ${skin === 'dark' ? 'white' : 'black'} !important;`">
            {{ task.lead_name }}
          </li>
          <li :style="`color: ${skin === 'dark' ? 'white' : 'black'} !important;`">
            {{ (task.date + ' ' + task.from) | myHourTime }} {{ (task.date + ' ' + task.to) | myHourTime }}
          </li>
          <li
            class="text-danger"
          >
            {{ task.real_time | myHourTime }} ({{ task.state }})
          </li>
        </ul>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'TaskCalendar',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      skin: "appConfig/skin",
    }),
  },
  data() {
    return {
      taskColor: {
        TEL: 'primary',
        CN: 'success',
        Personal: 'danger',
        Family: 'warning',
        ETC: 'info',
      },
    }
  },
}
</script>

<style scoped>
</style>
