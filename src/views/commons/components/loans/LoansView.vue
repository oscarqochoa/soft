<template>
  <div>
    <b-tabs v-if="isTabs" content-class="ml-2" nav-class="ml-2" pills>
      <b-tab lazy title="Pending">
        <LoansTable :tab="tab" :status="1" />
      </b-tab>
      <b-tab lazy>
        <template #title>
          Completed
          <span class="ml-1" v-if="counterTab.counter_comp>0 && isManagement">
            <feather-icon
              :badge="counterTab.counter_comp > 99 ? '99+' : counterTab.counter_comp"
              badge-classes="badge-danger badge-glow"
            />
          </span>
        </template>
        <LoansTable :tab="tab" :status="2" />
      </b-tab>
    </b-tabs>
    <LoansTable v-if="!isTabs" :tab="tab" :status="2" />
  </div>
</template>

<script>
import LoansTable from "@/views/commons/components/loans/LoansTable.vue";
import { mapGetters } from "vuex";
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
    },
    isManagement() {
      return this.$route.meta.module == 16;
    },
    ...mapGetters({ counterTab: "loans-store/counterTab" })
  },
  watch: {}
};
</script>

<style>
</style>