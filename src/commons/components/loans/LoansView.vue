<template>
  <div>
    <b-tabs v-if="isTabs" content-class="ml-2" nav-class="ml-2">
      <b-tab lazy title="PENDING">
        <LoansTable :tab="tab" />
      </b-tab>
      <b-tab lazy title="COMPLETED">
        <LoansTable :tab="tab" />
      </b-tab>
    </b-tabs>
    <LoansTable v-if="!isTabs" :tab="tab" />
  </div>
</template>

<script>
import LoansTable from "@/commons/components/loans/LoansTable.vue";
export default {
  name: "LoansGeneral",
  components: {
    LoansTable
  },
  props: {},
  data() {
    return {
      tab: this.$route.meta.tab
    };
  },
  mounted() {},
  computed: {
    isTabs() {
      return this.$route.meta.tab === 2 || this.$route.meta.tab === 3;
    }
  },
  watch: {}
};
</script>

<style>
</style>