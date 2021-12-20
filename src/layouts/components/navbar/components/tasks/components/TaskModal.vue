<template>
  <b-tabs pills lazy>
    <b-tab active>
      <template #title>OVERDUE ({{taskCounter.overdue}})</template>
        <task-list :type="1"></task-list>
    </b-tab>
    <b-tab >
      <template #title>TODAY ({{taskCounter.today}})</template>
      <task-list :type="2"></task-list>
    </b-tab>
    <b-tab>
      <template #title>UPCOMING ({{taskCounter.upcoming}})</template>
      <task-list :type="3"></task-list>
    </b-tab>
    <b-tab>
      <template #title>COMPLETED ({{taskCounter.done}})</template>
      <task-list :type="4"></task-list>
    </b-tab>
  </b-tabs>
</template>

<script>
import TaskList from './TaskList.vue';
import {mapState} from 'vuex';
export default {
    components:{
        TaskList
    },
    computed:{
        ...mapState({
            taskCounter: state => state.TaskStore.S_TASK_COUNTER
        })
    }
};
</script>

<style>
</style>