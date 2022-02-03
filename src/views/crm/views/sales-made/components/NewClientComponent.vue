<template>
  <div>
    <b-card body-class="px-0">
      <b-tabs
        lazy
        v-model="tabIndex"
        active-tab-class="p-0 "
        pills
        card
        :nav-wrapper-class="[bgLightDark, 'pb-0']"
        nav-class="mb-0"
        active-nav-item-class="bg-info box-shadow-info border-info"
      >
        <b-tab title="Done">
          <sales-made-new-client-component :done="1" />
        </b-tab>
        <b-tab title="Pending">
          <sales-made-new-client-component :done="0" />
        </b-tab>
      </b-tabs>
    </b-card>
    <!-- <b-tabs v-model="tabIndex" tabs lazy fill>
      <b-tab title="Done">
        <sales-made-new-client-component :done="1" />
      </b-tab>
      <b-tab title="Pending">
        <sales-made-new-client-component :done="0" />
      </b-tab>
    </b-tabs>-->
  </div>
</template>

<script>
import SalesMadeNewClientComponent from "@/views/crm/views/sales-made/components/new-client/SalesMadeNewClientComponent.vue";

export default {
  name: "NewClientComponent",
  components: {
    SalesMadeNewClientComponent
  },
  data() {
    return {
      tabIndex: null
    };
  },
  created() {
    if (this.$route.query.done) {
      this.tabIndex = this.$route.query.done - 1;
    } else {
      this.tabIndex = 0;
    }
  }
};
</script>

<style scoped>
.nav-item {
  border: 1px solid black !important;
}
</style>
