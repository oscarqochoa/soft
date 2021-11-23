<template>
  <div>
    <b-nav tabs>
      <b-nav-item to="/crm/sales-made/" exact exact-active-class="active">New Clients</b-nav-item>
      <b-nav-item to="/crm/sales-made/programs" exact exact-active-class="active">Add/Change Service</b-nav-item>
      <b-nav-item to="/crm/sales-made/annul" exact exact-active-class="active">Annulled</b-nav-item>
    </b-nav>
    <router-view/>
  </div>
</template>

<script>
import { BNav, BNavItem } from 'bootstrap-vue'

export default {
  name: 'SalesMade',
  components: {
    BNav,
    BNavItem,
  },
}
</script>

<style scoped>

</style>
