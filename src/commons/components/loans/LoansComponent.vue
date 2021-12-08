<template>
  <div>
    <b-card>
      <b-row>
        <b-col lg="6">
          <h2>LOANS</h2>
        </b-col>
        <b-col lg="6" :class="[positionResponsive]">
          <b-button variant="gradient-primary" :block="!bigWindow">REQUEST LOAN</b-button>
        </b-col>
      </b-row>
    </b-card>

    <b-card>
      <b-nav tabs>
        <b-nav-item
          v-if="isManagement"
          :to="`/${route}/loans/general`"
          exact
          exact-active-class="active"
        >LOANS</b-nav-item>
        <b-nav-item
          :to="`/${route}/loans/loans-module/`"
          exact
          exact-active-class="active"
        >LOANS BY MODULE</b-nav-item>
        <b-nav-item :to="`/${route}/loans/my-loans`" exact exact-active-class="active">MY LOANS</b-nav-item>
      </b-nav>
      <!-- <keep-alive>
        
      </keep-alive>-->
      <router-view :key="$route.name" />
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "LoansComponent",
  created() {},

  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      bigWindow: "app/bigWindow",
      currentUser: "auth/currentUser"
    }),
    positionResponsive() {
      return this.bigWindow ? "text-right" : "";
    },
    isManagement() {
      return this.$route.meta.module == 16;
    },
    route() {
      return this.$route.meta.route;
    }
  },
  methods: {}
};
</script>

<style>
</style>