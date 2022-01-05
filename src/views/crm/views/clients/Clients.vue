<template>
  <div>
    <b-nav pills>
      <b-nav-item :to="{ name: 'crm-clients-list' }" exact exact-active-class="active" link-classes="border-secondary hover-primary">Clients</b-nav-item>
      <b-nav-item :to="{ name: 'crm-clients-shared-list' }" exact exact-active-class="active" link-classes="border-secondary hover-primary">Shared</b-nav-item>
    </b-nav>

    <router-view :key="$route.name" />
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  methods:{
    ...mapMutations({
      UPDATE_SIDEBAR_ITEM_PROPERTY: 'SidebarStore/UPDATE_SIDEBAR_ITEM_PROPERTY'
    })
  },
  mounted(){
    this.UPDATE_SIDEBAR_ITEM_PROPERTY({routeName: 'sales-made-crm-new-client', tag: 10})
  }
};
</script>

<style>
</style>
