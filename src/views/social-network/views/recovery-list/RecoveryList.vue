<template>
  <div class="p-2">
    <header-slot>
      <template #actions>
        <b-button :disabled="!getStatusButton" variant="primary">Done List</b-button>
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
      <b-tab title="Credit Experts" :title-link-class="[bgTabsNavs, 'sub-tab px-3']">
        <tab-by-program @TaskCompleted="TaskCompleted" active :status="3" />
      </b-tab>
      <!-- Tab Business -->
      <b-tab title="Business" :title-link-class="[bgTabsNavs, 'sub-tab px-3']">
        <tab-by-program @TaskCompleted="TaskCompleted" :status="1" />
      </b-tab>

      <!-- Tax Research -->
      <b-tab title="Tax Research" :title-link-class="[bgTabsNavs, 'sub-tab px-3']">
        <tab-by-program @TaskCompleted="TaskCompleted" :status="5" />
      </b-tab>

      <!-- Debt Solution -->
      <b-tab title="Debt Solution" :title-link-class="[bgTabsNavs, 'sub-tab px-3']">
        <tab-by-program @TaskCompleted="TaskCompleted" :status="4" />
      </b-tab>

      <!-- Boost Credit -->
      <b-tab title="Boost Credit" :title-link-class="[bgTabsNavs, 'sub-tab px-3']">
        <tab-by-program @TaskCompleted="TaskCompleted"  :status="2" />
      </b-tab>
    </b-tabs>
  </div>
</template>


<script>
// Import Component TabByProgram
import TabByProgram from './components/TabByProgram.vue'
// Import Service
import RecoveryListService from "./service/recovery.list.service"
export default {
    components:{
        TabByProgram,
    },
    data(){
      return {
        statusButton:false,
      }
    },
    computed:{
      getStatusButton(){
        return this.statusButton
      }
    },
    methods:{
      TaskCompleted:function(status){
        this.statusButton = status
      },

      firstRequestStatusButton:async function(){
        try{
          let params = {
            id_user: 59,
            count_list: 59,
          }
          const data = await RecoveryListService.searchRecoveryList(params)
          let countDone = parseInt(data.data.data[0].count_done)
          let countPending = parseInt(data.data.data[0].count_pending)
          let taskCompleted = countDone - countPending == countDone ? true : false
          this.statusButton = taskCompleted
        }catch(error){

        }
      }

    },
    created:function(){
      this.firstRequestStatusButton()
    }


}
</script>