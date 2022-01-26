<template>
  <div>
    <b-card no-body class="mb-1">
      <div class="m-2">
        <b-row>
          <b-col
            cols="12"
            md="6"
            lg="6"
            sm="6"
            class="d-flex align-items-start justify-content-start mb-1 mb-md-0"
          >
             <h2>NCR</h2>
          </b-col>
          <b-col
            cols="12"
            md="6"
            lg="6"
            sm="6"
            class="d-flex align-items-end justify-content-end mb-1 mb-md-0"
          >
          
          </b-col>
        </b-row>
      </div>
    </b-card>
    <b-nav pills>
      <b-nav-item
        :to="{ name: 'ncr-pending' }"
        exact
        exact-active-class="active"
        link-classes="ml-1 border-secondary hover-primary "
        >Pending</b-nav-item
      >

      <b-nav-item
        :to="{ name: 'ncr-returned' }"
        exact
        exact-active-class="active"
        link-classes="ml-1 border-secondary hover-primary h-29"
        >Returned 
         <span class="ml-1" v-if="countData>0 && currentUser.role_id != 1">
            <feather-icon
              icon
              :badge="countData"
              badge-classes="badge-important"
            />
          </span>
      </b-nav-item>

      <b-nav-item
        :to="{ name: 'ncr-completed' }"
        exact
        exact-active-class="active"
        link-classes="ml-1 border-secondary hover-primary"
        >Completed
      </b-nav-item>
    </b-nav>
    <router-view :key="$route.name"></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      countData: null,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  methods: {
    countReturned() {
      if (this.currentUser.role_id != 1) {
        amgApi
          .post("/lead/ncr/ncr-leads-count-in-process", {
            user_id: this.currentUser.user_id,
            modul: this.$route.meta.module,
          })
          .then((response) => {
            if (response.status == 200) {
              this.countData =
                response.data[0].countReturned > 99
                  ? "+99"
                  : response.data[0].countReturned;
            }
          }).catch(error=>{
            console.error(error)
            this.showToast(
                  "danger",
                  "top-right",
                  "Error",
                  "XIcon",
                  "Something went wrong!"
                );
          })
      }
    },
  },
  created() {
    console.log("created")
    this.countReturned()
  },
};
</script>