<template>
  <div>
    <b-nav pills>
      <b-nav-item
        :to="{ name: 'payments-crm-list' }"
        exact
        exact-active-class="active"
        >Payments</b-nav-item
      >
      <b-nav-item
        :to="{ name: 'payments-crm-process' }"
        exact
        exact-active-class="active"
        >Process</b-nav-item
      >
    </b-nav>
    <router-view :key="$route.name"></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>