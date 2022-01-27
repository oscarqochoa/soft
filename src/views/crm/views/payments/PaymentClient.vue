<template>
  <div>
    <b-card no-body class="mb-1">
      <div class="m-2">
        <b-row>
          <b-col
            cols="12"
            md="6"
            lg="6"
            sm="6"
            class="d-flex align-items-start justify-content-start mb-1 mb-md-0"
          >
            <h2>Payments</h2>
          </b-col>
          <b-col
            cols="12"
            md="6"
            lg="6"
            sm="6"
            class="d-flex align-items-end justify-content-end mb-1 mb-md-0"
          >
          </b-col>
        </b-row>
      </div>
    </b-card>
    <b-card no-body class="mb-1">
      <div>
        <b-row style="height: 20px"></b-row>
      </div>
      <b-nav pills>
        <b-nav-item
          :to="{ name: 'payments-crm-list' }"
          exact
          exact-active-class="active"
          link-classes="ml-1 border-secondary hover-primary"
          >Payments</b-nav-item
        >
        <b-nav-item
          :to="{ name: 'payments-crm-process' }"
          exact
          exact-active-class="active"
          link-classes="ml-1 border-secondary hover-primary"
          >Process</b-nav-item
        >
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