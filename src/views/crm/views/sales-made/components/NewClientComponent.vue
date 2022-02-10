<template>
  <div>
    <b-card body-class="p-0 ">
      <b-tabs
        lazy
        v-model="tabIndex"
        pills
        nav-class="mb-0 mt-2"
        active-nav-item-class="bg-info box-shadow-info border-info info"
      >
        <b-tab title="Done" :title-link-class="[bgTabsNavs, 'sub-tab px-3']">
          <sales-made-new-client-component :done="1" />
        </b-tab>
        <b-tab title="Pending" :title-link-class="[bgTabsNavs, 'sub-tab px-3']">
          <sales-made-new-client-component :done="0" />
        </b-tab>
      </b-tabs>
    </b-card>
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
