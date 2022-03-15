<template>
  <div>
    <b-input-group prepend="GLOBAL SEARCH">
      <b-form-input
        placeholder="By Nickname, Name, Last Name or Mobile"
        v-model="searchGlobal"
        @keyup.enter="search()"
      ></b-form-input>
      <b-input-group-append>
        <b-button variant="info" @click="search()">
          <feather-icon icon="SearchIcon" size="12"> </feather-icon>
        </b-button>
      </b-input-group-append>
    </b-input-group>
    <modal-search-global-leads-sn
      v-if="modalGlobalSearch"
      :show="modalGlobalSearch"
      @onClose="closeModalGlobalSearch"
    >
    </modal-search-global-leads-sn>
  </div>
</template>

<script>
import ModalSearchGlobalLeadsSn from './ModalSearchGlobalLeadsSn.vue';
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      searchGlobal: "",
      modalGlobalSearch: false,
    };
  },
  components: {
    "modal-search-global-leads-sn": ModalSearchGlobalLeadsSn,
  },
  methods: {
      ...mapActions('SocialNetworkLeadsStore', ['A_SEARCH_GLOBAL_LEADS_SN']),
    async search() {
      if (!this.searchGlobal.trim()) {
        this.showToast(
          "danger",
          "top-right",
          "Oop!",
          "AlertOctagonIcon",
          "Please enter a valid text."
        );
      } else {
        this.addPreloader();
        await this.A_SEARCH_GLOBAL_LEADS_SN({
          name_text: this.searchGlobal,
        });
        this.removePreloader();
        this.modalGlobalSearch = true;
      }
    },
    closeModalGlobalSearch() {
      this.modalGlobalSearch = false;
    },
  },
};
</script>

<style>
</style>