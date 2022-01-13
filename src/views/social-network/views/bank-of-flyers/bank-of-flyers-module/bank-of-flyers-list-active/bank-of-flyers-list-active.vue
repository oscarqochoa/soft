<template>
  <div>
    <CoolLightBox :items="itemImage" :index="showImage" @close="showImage = null"></CoolLightBox>
    <div>
      <b-card
          no-body
          class="mb-0"
      >
        <filter-slot

            :filter="filter"
            :filter-principal="filterPrincipal"
            :total-rows="totalRows"
            :paginate="paginate"
            :start-page="startPage"
            :to-page="toPage"
            @reload="$refs['bank-of-flyer-active'].refresh()"
        >
          <b-table
              id="bank-of-flyer-active"
              slot="table"

              ref="bank-of-flyer-active"
              sticky-header="70vh"
              small
              no-provider-filtering
              :busy.sync="isBusy"
              :items="search"
              :fields="filteredFields"
              :per-page="paginate.perPage"
              :current-page="paginate.currentPage"
              :filter="filter"
              class="font-small-3 text-center"

          >

            <template v-slot:cell(name)="data">
              <p class="mb-0 font-weight-bold">
                {{ data.item.flyer_name }}
              </p>
            </template>

            <template v-slot:cell(flyer)="data">
              <p class="mb-0 font-weight-bold">
                <a class="clickable" @click="openImage(data.index)">
                <b-img-lazy
                    class="img-content-table-ti"
                    v-bind="mainProps"
                    :src="data.item.route_thumb"
                ></b-img-lazy>
                </a>
              </p>
            </template>



            <template v-slot:cell(program)="data">
              <p class="mb-0 font-weight-bold">

                <b-img :src="`${baseImg}/assets${data.item.logo}`" style="height: 40px"></b-img>

              </p>
            </template>

            <template v-slot:cell(replies)="data">
              <p class="mb-0 font-weight-bold">
                {{ data.item.count }}
              </p>
            </template>

            <template v-slot:cell(replies)="data">
              <p class="mb-0 font-weight-bold">
                {{ data.item.count}}
              </p>
            </template>

            <template v-slot:cell(new_replies)="data">
              <p class="mb-0 font-weight-bold">
                {{ data.item.new_count}}
              </p>
            </template>

            <template v-slot:cell(created_by)="data">
              <p class="mb-0 font-weight-bold">
              <p>{{ data.item.user_upload }}</p>
              <p>{{ data.item.created_at | myGlobalDay }}</p>

            </template>




            <template v-slot:cell(actions)="data">

              <amg-icon icon="InfoIcon"
                  title="WATCH"
             size="20"

                        @click="openModalCreateFlyer(3, item)"
              />


            </template>

          </b-table>
        </filter-slot>
      </b-card>
    </div>
  </div>

</template>

<script>
import FilterSlot from '@/views/crm/views/sales-made/components/slots/FilterSlot'
import { mapGetters, mapState } from 'vuex'
import dataFields from '@/views/social-network/views/bank-of-flyers/bank-of-flyers-module/bank-of-flyers-list-active/fields.data.js'
import dataFilters from '@/views/social-network/views/bank-of-flyers/bank-of-flyers-module/bank-of-flyers-list-active/filters.data.js'
import SocialNetworkService from '@/views/social-network/services/social-network.service'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {

  components: {
    FilterSlot,
    CoolLightBox,
  },
  data() {
    return {
      baseImg: process.env.VUE_APP_BASE_URL_FRONT,
      items: [],
      itemImage: [],
      selected: [],
      isBusy: false,
      fields: dataFields,
      totalRows: 0,
      filterPrincipal: {
        type: 'input',
        inputType: 'text',
        placeholder: 'Flyer Name...',
        model: '',
      },
      paginate: {
        currentPage: 1,
        perPage: 10,
      },
      basicSearch: true,
      filter: dataFilters,
      startPage: null,
      toPage: null,


      selectAll: false,
      //lazy Img
      mainProps: {
        center: false,
        fluidGrow: false,
        blank: true,
        blankColor: "#bbb",
        height: 73,
        block: false,
        fluid: true,
        rounded: true,
        thumbnail: true,
      },


      //Cooll Vue
      showImage: null,
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token',

    }),
    ...mapState({

      programs: state => state.SocialNetworkGlobalStore.S_PROGRAMS,
      state: state => state.SocialNetworkGlobalStore.S_STATES,

    }),

    filteredFields() {
      return this.fields
    },
    onChangeFilter() {
      this.$refs.re.refresh();
    },
  },
  async created() {
    try {
      await Promise.all([
        this.$store.dispatch('SocialNetworkGlobalStore/A_GET_PROGRAMS'),
        this.$store.dispatch('SocialNetworkGlobalStore/A_GET_STATES'),
      ])
      this.filter[2].options = this.programs
      this.filter[3].options = this.state
    } catch (error) {
      console.error(error)
    }
  },

  methods: {
    pushImage() {
      let imageArray = [];
      this.items.forEach((element) => {
        imageArray.push({
          title: element.campaign,
          src: element.route,
          thumb: element.route_thumb,
        });
      });
      this.itemImage = imageArray;
    },
    openImage(index) {
      this.showImage = index;
    },
    async search(ctx) {
      try {
        let params = {
          perPage:this.paginate.perPage,
          orderby: 1,
          order: "desc",
          status: 1,
          from: this.filter[0].model,
          to: this.filter[1].model,
          program: this.filter[2].model,
          state: this.filter[3].model,
          text: this.filterPrincipal.model,
          user_id: this.currentUser.user_id,
        };
        const data = await SocialNetworkService.getBankOfFlyers(params)
        this.items = data.data.data;
        // Must return an array of items or an empty array if an error occurred
        this.pushImage();
        return this.items;
      } catch (e) {
        this.showErrorSwal(e)
        return []
      }
    },


  }
}
</script>

<style scoped>
.img-content-table-ti {
  height: 60px;
}
.clickable {
  cursor: pointer;
}
</style>
