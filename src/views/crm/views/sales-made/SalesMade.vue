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
export default {
  name: 'SalesMade',
}
</script>

<style scoped>

</style>
