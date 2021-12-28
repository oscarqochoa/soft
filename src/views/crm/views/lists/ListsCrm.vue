<template>
  <div>
    <b-nav pills>
      <b-nav-item
        :to="{ name: 'lists-crm-mylist' }"
        exact
        exact-active-class="active"
        >My List</b-nav-item
      >
      <b-nav-item
        :to="{ name: 'lists-crm-list' }"
        exact
        exact-active-class="active"
        >List</b-nav-item
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