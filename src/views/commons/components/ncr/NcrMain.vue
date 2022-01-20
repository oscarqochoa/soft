<template>
  <div>
    <b-nav pills>
      <b-nav-item
        :to="{ name: 'ncr-pending' }"
        exact
        exact-active-class="active"
        link-classes="ml-1 border-secondary hover-primary "
        >Pending</b-nav-item>
      
     
        <b-nav-item
        :to="{ name: 'ncr-returned' }"
        exact
        exact-active-class="active"
        link-classes="ml-1 border-secondary hover-primary h-29"
        >Returned 
        <!-- <span class="badge badge-pill badge-warning"
            style="float:right;margin-bottom:-15px;margin-right:-18px;font-size:10px">123</span> -->
              <span class="badge badge-pill badge-success"
               style=" float:right;position:absolute;transform: translate(45px,-14px);"> 86</span> 
        </b-nav-item>
      
      <b-nav-item
        :to="{ name: 'ncr-completed' }"
        exact
        exact-active-class="active"
        link-classes="ml-1 border-secondary hover-primary"
        >Completed </b-nav-item>
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