<template>
  <b-container fluid>
    <luke-calendar>
      <template #date="{events}">
        <p> {{ events.length ? events : 'No hay eventos :c' }} </p>
      </template>
    </luke-calendar>
  </b-container>
</template>

<script>
import LukeCalendar from './LukeCalendar.vue'

export default {
  name: 'CalendarTest',
  components: {
    LukeCalendar,
  },

}
</script>

<style scoped>

</style>
