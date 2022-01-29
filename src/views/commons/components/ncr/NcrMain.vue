<template>
  <div>
    <header-slot></header-slot>
    <b-card no-body class="mb-1">
      <div>
        <b-row style="height: 20px"></b-row>
      </div>
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
        >
          Returned
          <span class="ml-2" v-if="countData > 0 && currentUser.role_id != 1">
            <feather-icon icon :badge="countData" badge-classes="badge-important" />
          </span>
        </b-nav-item>

        <b-nav-item
          :to="{ name: 'ncr-completed' }"
          exact
          exact-active-class="active"
          link-classes="ml-1 border-secondary hover-primary"
        >Completed</b-nav-item>
      </b-nav>
      <router-view :key="$route.name"></router-view>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NrcService from "./service/ncr.service"
export default {
  data() {
    return {
      countData: null
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser"
    })
  },
  methods: {
    async countReturned() {
      if (this.currentUser.role_id != 1) {
        try{
          const response = await  NrcService.ncrLeadsCountInProcess({
            user_id: this.currentUser.user_id,
            modul: this.$route.meta.module})
          if (response.status == 200) {
              this.countData =
                response.data[0].countReturned > 99
                  ? "+99"
                  : response.data[0].countReturned;
          }
        }catch(error){
          console.error(error);
            this.showToast(
              "danger",
              "top-right",
              "Error",
              "XIcon",
              "Something went wrong!"
            );

        }
      }
    }
  },
  created() {
    this.countReturned();
  }
};
</script>