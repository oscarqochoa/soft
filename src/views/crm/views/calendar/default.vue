<template>
  <div>
    <header-slot></header-slot>

    <b-card no-body>
      <b-card-header header-tag="nav" :class="['pb-0', bgLightDark  ]">
        <b-nav card-header pills class="m-0">
          <b-nav-item
            :to="{ name: 'crm-calendar-appointment' }"
            exact
            exact-active-class="active"
          >Appointments</b-nav-item>
          <b-nav-item :to="{ name: 'crm-calendar-task' }" exact exact-active-class="active">Tasks</b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body class="border-primary rounded">
        <router-view />
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  components: {},
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      token: "auth/token"
    }),
    ...mapState({})
  },
  data() {
    return {
      modul: 2,
      dato1: "desc",
      dato2: 10
    };
  },
  created() {},
  methods: {
    ...mapActions({})
  }
};
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>
