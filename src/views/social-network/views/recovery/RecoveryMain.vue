<template>
  <div>
    <header-slot>

      <template #actions>
        <div>
          <b-row style="justify-content: right;">
            <b-col md="9">
              <b-input-group prepend="GLOBAL SEARCH">
                <b-form-input placeholder="By Nickname, Name, Last Name or Mobile" v-model="searchGlobal"></b-form-input>
                <b-input-group-append>
                  <b-button variant="info" @click="search()">
                    <feather-icon
                      icon="SearchIcon"
                      size="15"
                    >
                    </feather-icon>
                  </b-button>
                </b-input-group-append>
              </b-input-group>
            </b-col>
          </b-row>

          <!-- span.advice-not-found(v-if="search_not_found") Search not found -->

        </div>
      </template>
    </header-slot>
    <b-nav card-header pills class="m-0">
      <b-nav-item
        exact-active-class="active"
        :link-classes="['px-3', bgTabsNavs]"
        exact
        :to="{ name: 'sn-list-business' }"
        >BUSINESS
      </b-nav-item>
      <b-nav-item
        exact-active-class="active"
        :link-classes="['px-3', bgTabsNavs]"
        exact
        :to="{ name: 'sn-list-credit-experts' }"
        >CREDIT EXPERTS
      </b-nav-item>
      <b-nav-item
        exact-active-class="active"
        :link-classes="['px-3', bgTabsNavs]"
        exact
        :to="{ name: 'sn-list-tax-research' }"
        >TAX RESEARCH
      </b-nav-item>
      <b-nav-item
        exact-active-class="active"
        :link-classes="['px-3', bgTabsNavs]"
        exact
        :to="{ name: 'sn-list-boost-credit' }"
        >BOOST CREDIT
      </b-nav-item>
      <b-nav-item
        exact-active-class="active"
        :link-classes="['px-3', bgTabsNavs]"
        exact
        :to="{ name: 'sn-list-debt-solution' }"
        >DEBT SOLUTION
      </b-nav-item>

      <b-nav-item
        exact-active-class="active"
        :link-classes="['px-3', bgTabsNavs]"
        exact
        :to="{ name: 'sn-list-not-call' }"
        >NOT CALL
      </b-nav-item>
    </b-nav>
      
    <b-card 
      no-body
      class="border-top-primary border-3 border-table-radius px-0"
    > 
      <router-view :key="$route.name"/>
    </b-card>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  components: {
    //
  },
  data() {
    return {
      searchGlobal: "",
      leadsGlobal: [],
      modalGlobalSearch: false,
      searchGlobal_error: false,
    };
  },
  methods: {
    //Global Search
    search() {
      if (!this.searchGlobal.trim()) {
        this.searchGlobal_error = true;
      } else {
        axios
          .post("/api/search-global-leads-sn", {
            name_text: this.searchGlobal
          })
          .then(response => {
            if (response.status == 200) {
              if (response.data.length > 0) {
                this.leadsGlobal = response.data;
                this.modalGlobalSearch = true;
              } else {
                this.search_not_found = true;
                this.searchGlobal_error = true;
              }
            }
          });
      }
    }
  },

  watch: {
    //
  },
};
</script>