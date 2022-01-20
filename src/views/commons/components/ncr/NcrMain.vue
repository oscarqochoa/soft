<template>
  <div>
    <b-nav pills>
      <b-nav-item
        :to="{ name: 'ncr-pending' }"
        exact
        exact-active-class="active"
        link-classes="ml-1 border-secondary hover-primary"
        >Pending</b-nav-item>
      
      <b-nav-item
        :to="{ name: 'ncr-returned' }"
        exact
        exact-active-class="active"
        link-classes="ml-1 border-secondary hover-primary"
        >Returned</b-nav-item
      >
      <b-nav-item
        :to="{ name: 'ncr-completed' }"
        exact
        exact-active-class="active"
        link-classes="ml-1 border-secondary hover-primary"
        >Completed</b-nav-item
      >
    </b-nav>
    <router-view :key="$route.name"></router-view>
  </div>
</template>

<script>
export default {
    created(){
        // console.log(this.$route.meta.module)
    }
}
</script>