<template>
  <div>
    <header-slot></header-slot>

    <b-card no-body>
      <b-card-header header-tag="nav" :class="['pb-0', bgLightDark  ]">
        <b-nav card-header pills class="m-0">
          <b-nav-item :to="{ name: 'payments-crm-list' }" exact exact-active-class="active">Payments</b-nav-item>
          <b-nav-item
            :to="{ name: 'payments-crm-process' }"
            exact
            exact-active-class="active"
          >Process</b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body class="border-primary rounded">
        <router-view :key="$route.name"></router-view>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>