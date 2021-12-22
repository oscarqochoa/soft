<template>
  <div>
    <b-nav tabs>
      <b-nav-item :to="{ name: 'crm-clients-list' }" exact exact-active-class="active">Clients</b-nav-item>
      <b-nav-item :to="{ name: 'crm-clients-shared-list' }" exact exact-active-class="active">Shared</b-nav-item>
    </b-nav>

    <router-view :key="$route.name" />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
