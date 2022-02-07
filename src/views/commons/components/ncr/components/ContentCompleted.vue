<template>
  <div>
    <b-card body-class="px-0">
      <b-tabs lazy
        active-tab-class="p-0 "
        pills
        card
        :nav-wrapper-class="[bgLightDark, 'pb-0']"
        nav-class="mb-0"
        active-nav-item-class="bg-info box-shadow-info border-info"
      >
        <b-tab title="Successfull">
          <content-sub-completed :status="1"></content-sub-completed>
        </b-tab>
        <b-tab title="Invalid">
          <content-sub-completed :status="2"></content-sub-completed>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import ContentSubCompleted from "./subcomponents/ContentSubCompleted.vue";
export default {
  props: {},
  components: {
    ContentSubCompleted
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

