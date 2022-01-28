<template>
  <div>
    <header-slot />
    <b-card body-class="pb-0">
      <div>
        <b-nav pills>
          <b-nav-item
            :to="{ name: 'crm-clients-list' }"
            exact
            exact-active-class="active"
            link-classes="border-secondary hover-primary"
          >Clients</b-nav-item>
          <b-nav-item
            :to="{ name: 'crm-clients-shared-list' }"
            exact
            exact-active-class="active"
            link-classes="border-secondary hover-primary"
          >Shared</b-nav-item>
        </b-nav>
        <router-view :key="$route.name" />
      </div>
    </b-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {

}
</script>

<style>
</style>
