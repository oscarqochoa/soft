<template>
  <div class="p-2">
    <header-slot>
      <template #actions>
        <b-button
          v-if="!statusUserRedirected"
          :disabled="!getStatusButton"
          @click="sendForPusher"
          variant="primary"
          >Done List</b-button
        >
        <div  v-if="statusFullName"
          class="text-center class-coco-campo-text bg-primary rounded text-white font-medium-1 px-1"
          style="padding-top: 5px; padding-bottom: 5px"
        >
          {{ fullname }}
        </div>
      </template>
    </header-slot>
    <!-- Tabs -->
    <b-tabs
      lazy
      active-tab-class="p-0 "
      pills
      nav-class="mb-0"
      active-nav-item-class="bg-info box-shadow-info border-info info"
    >
      <!-- Tab Credit Experts -->
      <b-tab
        title="Credit Experts"
        :title-link-class="[bgTabsNavs, 'sub-tab px-3']"
      >
        <tab-by-program
          @TaskCompleted="TaskCompleted"
          active
          :programId="3"
          :userId="userId"
        />
      </b-tab>
      <!-- Tab Business -->
      <b-tab title="Business" :title-link-class="[bgTabsNavs, 'sub-tab px-3']">
        <tab-by-program
          @TaskCompleted="TaskCompleted"
          :programId="1"
          :userId="userId"
        />
      </b-tab>

      <!-- Tax Research -->
      <b-tab
        title="Tax Research"
        :title-link-class="[bgTabsNavs, 'sub-tab px-3']"
      >
        <tab-by-program
          @TaskCompleted="TaskCompleted"
          :programId="5"
          :userId="userId"
        />
      </b-tab>

      <!-- Debt Solution -->
      <b-tab
        title="Debt Solution"
        :title-link-class="[bgTabsNavs, 'sub-tab px-3']"
      >
        <tab-by-program
          @TaskCompleted="TaskCompleted"
          :programId="4"
          :userId="userId"
        />
      </b-tab>

      <!-- Boost Credit -->
      <b-tab
        title="Boost Credit"
        :title-link-class="[bgTabsNavs, 'sub-tab px-3']"
      >
        <tab-by-program
          @TaskCompleted="TaskCompleted"
          :programId="2"
          :userId="userId"
        />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
// Import Component TabByProgram
import TabByProgram from "./components/TabByProgram.vue"
// Import Service
import RecoveryListService from "./service/recovery.list.service"
export default {
  components: {
    TabByProgram,
  },
  props: {
    userId: {
      type: [Number, String],
    },
    fullname: {
      type: String,
    },
  },
  data() {
    return {
      statusButton: false,
    }
  },
  computed: {
    statusUserRedirected() {
      return this.userId != null ? true : false
    },
    statusFullName(){
      return this.fullname != null ? true : false
    },
    getStatusButton() {
      return this.statusButton
    },
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  methods: {
    TaskCompleted: function (status) {
      this.statusButton = status
    },

    firstRequestStatusButton: async function () {
      try {
        if (this.userId === undefined) {
          let params = {
            id_user: parseInt(this.currentUser.user_id),
            count_list: parseInt(this.currentUser.user_id),
          }
          const data = await RecoveryListService.searchRecoveryList(params)
          let countDone = parseInt(data.data.data[0].count_done)
          let countPending = parseInt(data.data.data[0].count_pending)
          let taskCompleted =
            countDone - countPending == countDone ? true : false
          this.statusButton = taskCompleted
        }
      } catch (error) {}
    },
    sendForPusher: async function () {
      try {
        let params = {
          id_user: this.currentUser.user_id,
          fullname: `${this.currentUser.first_name} ${this.currentUser.last_name}`,
        }
        const data = await RecoveryListService.sendForPusher(params)
      } catch (error) {
        console.log(error)
      }
    },
  },
  created: function () {
    this.firstRequestStatusButton()
  },
}
</script>
