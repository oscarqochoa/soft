<template>
  <div>
    <b-nav tabs>
      <b-nav-item
        :to="{ name: 'ncr-pending' }"
        exact
        exact-active-class="active"
        >Pending</b-nav-item>
      
      <!-- <b-nav-item
        :to="{ name: 'returned' }"
        exact
        exact-active-class="active"
        >Returned</b-nav-item
      >
      <b-nav-item
        :to="{ name: 'completed' }"
        exact
        exact-active-class="active"
        >Completed</b-nav-item
      > -->
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