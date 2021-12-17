

<template>
  <div>
    <div class="m-2">
      <b-row>
        <b-col
          cols="12"
          md="6"
          lg="6"
          sm="6"
          class="d-flex align-items-start justify-content-start mb-1 mb-md-0"
        >
        </b-col>
        <b-col
          cols="12"
          md="6"
          lg="6"
          sm="6"
          class="d-flex align-items-end justify-content-end mb-1 mb-md-0"
        >
          <b-button variant="success"> REQUEST EQUIPMENT </b-button>
        </b-col>
      </b-row>
    </div>
    <b-nav tabs>
      <b-nav-item
        :to="{ name: 'inventory-crm-equipment' }"
        exact
        exact-active-class="active"
        >Equipment</b-nav-item
      >
      <b-nav-item
        :to="{ name: 'inventory-crm-equipment-request' }"
        exact
        exact-active-class="active"
        >Equipment Request</b-nav-item
      >
      <b-nav-item
        v-if="[12,19].includes($route.meta.module)"
        :to="{ name: 'inventory-crm-assign' }"
        exact
        exact-active-class="active"
        >To Assigned</b-nav-item
      >
    </b-nav>
    <router-view :key="$route.name"></router-view>
  </div>
</template>

<script>

export default {
  components: {
   
  },
};
</script>

<style>
</style>