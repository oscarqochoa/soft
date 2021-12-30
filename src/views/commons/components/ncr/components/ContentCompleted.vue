<template>
  <div>
    <b-tabs
      pills
      lazy
      active-nav-item-class="bg-important border-0 shadow-none"
    >
      <b-tab title="Successfull">
        <content-sub-completed :status="1"></content-sub-completed>
      </b-tab>
      <b-tab title="Invalid">
        <content-sub-completed :status="2"></content-sub-completed>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import ContentSubCompleted from "./subcomponents/ContentSubCompleted.vue";
export default {
  props: {},
  components: {
    ContentSubCompleted,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

