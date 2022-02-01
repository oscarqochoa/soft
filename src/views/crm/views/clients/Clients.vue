<template>
  <div>
    <header-slot />

    <b-card no-body>
      <b-card-header header-tag="nav" :class="['pb-0', bgLightDark  ]">
        <b-nav card-header pills class="m-0">
          <b-nav-item :to="{ name: 'crm-clients-list' }" exact exact-active-class="active">Clients</b-nav-item>
          <b-nav-item
            :to="{ name: 'crm-clients-shared-list' }"
            exact
            exact-active-class="active"
          >Shared</b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body class="border-primary rounded">
        <router-view :key="$route.name" />
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {};
</script>

<style>
</style>
