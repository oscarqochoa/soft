<template>
  <div>
    <header-slot></header-slot>
    <b-card no-body class="mb-1 px-2">
      <b-nav pills class="pt-2">
        <b-nav-item
          :to="{ name: 'payments-crm-list' }"
          exact
          exact-active-class="active"
          link-classes="ml-1 border-secondary hover-primary"
        >Payments</b-nav-item>
        <b-nav-item
          :to="{ name: 'payments-crm-process' }"
          exact
          exact-active-class="active"
          link-classes="ml-1 border-secondary hover-primary"
        >Process</b-nav-item>
      </b-nav>

      <router-view :key="$route.name"></router-view>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>