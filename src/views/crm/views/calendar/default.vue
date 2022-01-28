<template>
  <div>
    <header-slot></header-slot>
    <b-card>
      <b-nav pills>
        <b-nav-item
          :to="{ name: 'crm-calendar-appointment' }"
          exact
          exact-active-class="active"
          link-classes="border-secondary hover-primary"
        >Appointments</b-nav-item>
        <b-nav-item
          :to="{ name: 'crm-calendar-task' }"
          exact
          exact-active-class="active"
          link-classes="border-secondary hover-primary"
        >Tasks</b-nav-item>
      </b-nav>
      <router-view />
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
