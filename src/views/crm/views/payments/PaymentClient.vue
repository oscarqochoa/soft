<template>
  <div>
    <header-slot></header-slot>

    <b-nav card-header pills class="m-0">
      <b-nav-item
        :to="{ name: 'payments-crm-list' }"
        exact
        exact-active-class="active"
        :link-classes="['px-3',bgTabsNavs]"
      >Payments</b-nav-item>
      <b-nav-item
        :to="{ name: 'payments-crm-process' }"
        exact
        exact-active-class="active"
        :link-classes="['px-3',bgTabsNavs]"
      >Process</b-nav-item>
    </b-nav>

    <b-card class="border-primary border-table-radius px-0">
      <router-view :key="$route.name"></router-view>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>