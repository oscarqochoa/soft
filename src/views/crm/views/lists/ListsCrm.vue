<template>
  <div>
    <b-nav pills>
      <b-nav-item
        :to="{ name: 'lists-crm-mylist' }"
        exact
        exact-active-class="active"
        link-classes="ml-1 border-secondary hover-primary"
        >My List</b-nav-item
      >
      <b-nav-item
        :to="{ name: 'lists-crm-list' }"
        exact
        exact-active-class="active"
        link-classes="ml-1 border-secondary hover-primary"
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