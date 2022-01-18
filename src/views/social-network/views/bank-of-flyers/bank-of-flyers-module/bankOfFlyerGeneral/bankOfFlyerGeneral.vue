<template>
  <div>
    <CoolLightBox
      :items="itemImage"
      :index="showImage"
      @close="showImage = null"
    />
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
          @reload="$refs['bank-of-flyer-general'].refresh()"
        >
          <template #buttons>
            <b-button
              v-if="status===4"
              variant="primary"
              class="ml-1"
              @click="OpenWatchModal(1,1)"
            >
              <feather-icon
                icon="FilePlusIcon"
                class="mr-50"
              />UPLOUD FLYERS

            </b-button>
          </template>
          <b-table
            id="bank-of-flyer-general"
            slot="table"

            ref="bank-of-flyer-general"
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
            <template #table-busy>
              <div class="text-center text-primary my-2">
                <b-spinner class="align-middle mr-1" />
                <strong>Loading ...</strong>
              </div>
            </template>
            <template v-slot:cell(name)="data">
              <p class="mb-0 font-weight-bold">
                {{ data.item.flyer_name }}
              </p>
            </template>

            <template v-slot:cell(flyer)="data">
              <p class="mb-0 font-weight-bold">
                <a
                  class="clickable"
                  @click="openImage(data.index)"
                >
                  <b-img-lazy
                    class="img-content-table-ti"
                    v-bind="mainProps"
                    :src="data.item.route_thumb"
                  />
                </a>
              </p>
            </template>

            <template v-slot:cell(program)="data">
              <p class="mb-0 font-weight-bold">

                <b-img
                  :src="`${baseImg}/assets${data.item.logo}`"
                  style="height: 40px"
                />

              </p>
            </template>

            <template v-slot:cell(replies)="data">
              <p
                v-if="data.item.count>0"
                class="mb-0 font-weight-bold cursor-pointer text-success"
                @click="OpenRepliesModal(data.index)"
              >
                {{ data.item.count }}
              </p>

              <p
                v-else
                class="mb-0 font-weight-bold"
              >
                {{ data.item.count }}
              </p>
            </template>

            <template v-slot:cell(new_replies)="data">
              <p
                class="mb-0 font-weight-bold "
              >
                {{ data.item.new_count }}
              </p>
            </template>

            <template v-slot:cell(created_by)="data">
              <p class="mb-0 font-weight-bold" /><p>{{ data.item.user_upload }}</p>
              <p>{{ data.item.created_at | myGlobalDay }}</p>

            </template>

            <template v-slot:cell(actions)="data">

              <amg-icon
                icon="InfoIcon"
                title="WATCH"
                size="20"
                class="cursor-pointer m-1"

                @click="OpenWatchModal(data.index,2)"
              />

            </template>

            <template v-slot:cell(comments)="data">
              <b-dropdown
                variant="link"
                no-caret
              >
                <template #button-content>
                  <amg-icon
                    icon="MoreVerticalIcon"
                    size="16"
                    class="align-middle text-body"
                  />
                </template>
                <b-dropdown-item @click="OpenInsertCommentsModal(data.item.id)">
                  <feather-icon
                    icon="PlusIcon"
                  />Add
                </b-dropdown-item>
                <b-dropdown-item @click="OpenListCommentsModal(data.item.id)">
                  <feather-icon icon="RotateCcwIcon" />History
                </b-dropdown-item>
              </b-dropdown>
            </template>

          </b-table>
          <template #footer>
            <b-col
              class="d-flex
            align-items-center
            justify-content-end
          "
            >
              <div
                style="
              background-color: #3764ff !important;
              padding: 5px;
              border-radius: 30px;
              padding-left: 15px;
              padding-right: 15px;
            "
              >
                <span
                  class="text-nowrap"
                  style="color: #fff"
                >
                  Total Replies
                  {{ totalReplies == 0 ? + totalReplies : totalReplies }}
                </span>
              </div>
              <div
                style="
              background-color: #3764ff !important;
              padding: 5px;
              border-radius: 30px;
              padding-left: 15px;
              padding-right: 15px;
            "
              >
                <span
                  class="text-nowrap"
                  style="color: #fff"
                >
                  Total New Replies
                  {{ totalNewReplies == 0 ? + totalNewReplies : totalNewReplies }}
                </span>
              </div>
            </b-col>

          </template>
        </filter-slot>
        <modal-watch-active

          v-if="modalWatch"
          :item="items[showWatch]"
          :items="items"
          :status="status"
          :info="info"

          @close="closeWatchModal"
        />

        <modal-replies

          v-if="modalReplies"
          :item="items[showReplies]"
          @close="closeRepliesModal"
        />
        <modal-insert-comments
          v-if="modalInsertCommentsModal"
          :index="showComments"
          @close="closeInsertCommentsModal"
        />

        <modal-list-comments
          v-if="modalListCommentsModal"
          :index="showListComments"
          @close="closeListCommentsModal"
        />
      </b-card>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapState } from 'vuex'
import CoolLightBox from 'vue-cool-lightbox'
import FilterSlot from '@/views/crm/views/sales-made/components/slots/FilterSlot.vue'
import dataFields from '@/views/social-network/views/bank-of-flyers/bank-of-flyers-module/bankOfFlyerGeneral/fields.data'
import dataFilters from '@/views/social-network/views/bank-of-flyers/bank-of-flyers-module/bankOfFlyerGeneral/filters.data'
import SocialNetworkService from '@/views/social-network/services/social-network.service'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import ModalWatchActive
from '@/views/social-network/views/bank-of-flyers/bank-of-flyers-module/modals/modalWatch/ModalWatchActive.vue'
import ModalReplies
from '@/views/social-network/views/bank-of-flyers/bank-of-flyers-module/modals/modalReplies/ModalReplies.vue'
import ModalInsertComments
from '@/views/social-network/views/bank-of-flyers/bank-of-flyers-module/modals/modalInsertComments/modalInsertComments.vue'
import ModalListComments
from '@/views/social-network/views/bank-of-flyers/bank-of-flyers-module/modals/modalListComments/modalListComments.vue'

export default {
  components: {
    FilterSlot,
    CoolLightBox,
    ModalWatchActive,
    ModalReplies,
    ModalInsertComments,
    ModalListComments,
  },
  props: {
    status: null,

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
        placeholder: 'Search...',
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
      // lazy Img
      mainProps: {
        center: false,
        fluidGrow: false,
        blank: true,
        blankColor: '#bbb',
        height: 73,
        block: false,
        fluid: true,
        rounded: true,
        thumbnail: true,
      },

      modalWatch: false,
      modalReplies: false,
      modalInsertCommentsModal: false,
      modalListCommentsModal: false,

      // Cooll Vue
      showImage: null,
      showWatch: null,
      showReplies: null,
      showComments: null,
      showListComments: null,
      info: null,
      comments: null,
      orderby: 1,
      totalReplies: 0,
      totalNewReplies: 0,
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token',

    }),
    ...mapState({

      programs: state => state.SocialNetworkGlobalStore.S_PROGRAMS,
      states: state => state.SocialNetworkGlobalStore.S_STATES,

    }),

    filteredFields() {
      return this.fields
    },

  },
  async created() {
    try {
      await Promise.all([
        this.$store.dispatch('SocialNetworkGlobalStore/A_GET_PROGRAMS'),
        this.$store.dispatch('SocialNetworkGlobalStore/A_GET_STATES'),
      ])
      this.filter[2].options = this.programs
      this.filter[3].options = this.states
    } catch (error) {
      console.error(error)
    }
  },

  methods: {

    pushImage() {
      const imageArray = []
      this.items.forEach(element => {
        imageArray.push({
          title: element.campaign,
          src: element.route,
          thumb: element.route_thumb,
        })
      })
      this.itemImage = imageArray
    },
    openImage(index) {
      this.showImage = index
    },

    OpenWatchModal(index, info) {
      this.modalWatch = true
      this.showWatch = index
      this.info = info
    },

    closeWatchModal() {
      this.modalWatch = false
    },
    OpenRepliesModal(index) {
      this.modalReplies = true
      this.showReplies = index
    },
    OpenInsertCommentsModal(index) {
      this.modalInsertCommentsModal = true
      this.showComments = index
      console.log(index)
    },

    OpenListCommentsModal(index) {
      this.modalListCommentsModal = true
      this.showListComments = index
    },
    closeRepliesModal() {
      this.modalReplies = false
    },
    closeInsertCommentsModal() {
      this.modalInsertCommentsModal = false
    },
    closeListCommentsModal() {
      this.modalListCommentsModal = false
    },
    async search(ctx) {
      try {
        let orderBy = 1
        let sortDirection = 'desc'
        if (ctx.sortBy === 'program') {
          if (ctx.sortDesc) sortDirection = 'desc'
          else sortDirection = 'asc'
          orderBy = 3
        } else if (ctx.sortBy === 'campaign') {
          if (ctx.sortDesc) sortDirection = 'desc'
          else sortDirection = 'asc'
          orderBy = 10
        } else if (ctx.sortBy === 'name') {
          if (ctx.sortDesc) sortDirection = 'desc'
          else sortDirection = 'asc'
          orderBy = 17
        } else if (ctx.sortBy === 'replies') {
          if (ctx.sortDesc) sortDirection = 'desc'
          else sortDirection = 'asc'
          orderBy = 20
        } else if (ctx.sortBy === 'new_replies') {
          if (ctx.sortDesc) sortDirection = 'desc'
          else sortDirection = 'asc'
          orderBy = 21
        } else if (ctx.sortBy === 'publication_date') {
          if (ctx.sortDesc) sortDirection = 'desc'
          else sortDirection = 'asc'
          orderBy = 2
        } else if (ctx.sortBy === 'created_by') {
          if (ctx.sortDesc) sortDirection = 'desc'
          else sortDirection = 'asc'
          orderBy = 1
        }

        const params = {
          perPage: this.paginate.perPage,
          orderby: orderBy,
          order: sortDirection,
          status: this.status,
          from: this.filter[0].model,
          to: this.filter[1].model,
          program: this.filter[2].model,
          state: this.filter[3].model,
          text: this.filterPrincipal.model,
          user_id: this.currentUser.user_id,
        }
        const data = await SocialNetworkService.getBankOfFlyers(params, ctx.currentPage)
        this.items = data.data.data
        // Must return an array of items or an empty array if an error occurred
        this.pushImage()
        if (this.items) {
          this.totalReplies = 0
          this.items.forEach(item => {
            this.totalReplies += item.count
            this.totalNewReplies += item.new_count
            console.log(this.items)
            console.log(this.totalReplies)
          })
        }
        this.startPage = data.data.from
        this.paginate.currentPage = data.data.current_page
        this.paginate.perPage = data.data.per_page
        this.nextPage = this.startPage + 1
        this.endPage = data.data.last_page
        this.totalData = data.data.total
        this.totalRows = data.data.total
        this.toPage = data.data.to

        return this.items
      } catch (e) {
        this.showErrorSwal(e)
        return []
      }
    },

  },
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
