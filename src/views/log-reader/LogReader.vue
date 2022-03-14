<template>
  <div>
    <header-slot>
      <template #actions>
        <div>
          <b-button variant="danger" @click="clearEverything">
            Clear All
          </b-button>
        </div>
      </template>
    </header-slot>
    <b-card>
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <span v-if="items.length !== 0" class="k-font-weight-bold font-medium-1" >Showing Logs: {{dateFilter}}</span>
          <span v-else class="k-font-weight-bold font-medium-1" >There are no logs</span>
          <div class="d-inline mx-2">
            <b-badge href="#" :class="statusBadges[0] === 1 ? 'info-bg':''" @click="filterByType(0, 'INFO')">
              Info
            </b-badge>
            <b-badge  href="#" :class="statusBadges[1] === 1 ? 'emergency-bg':''" class="ml-1" @click="filterByType(1,'EMERGENCY')" >
              Emergency
            </b-badge>
            <b-badge  href="#" :class="statusBadges[2] === 1 ? 'critical-bg':''" class="ml-1" @click="filterByType(2, 'CRITICAL')" >
              Critical
            </b-badge>
            <b-badge href="#" :class="statusBadges[3] === 1 ? 'alert-bg':''"  class="ml-1" @click="filterByType(3, 'ALERT')" >
              Alert
            </b-badge>
            <b-badge href="#" :class="statusBadges[4] === 1 ? 'error-bg':''"  class="ml-1" @click="filterByType(4, 'ERROR')" >
              Error
            </b-badge>
            <b-badge href="#" :class="statusBadges[5] === 1 ? 'warning-bg':''"  class="ml-1" @click="filterByType(5, 'WARNING')" >
              Warning
            </b-badge>
            <b-badge href="#" :class="statusBadges[6] === 1 ? 'notice-bg':''"  class="ml-1" @click="filterByType(6, 'NOTICE')" >
              Notice
            </b-badge>
            <b-badge  href="#" :class="statusBadges[7] === 1 ? 'debug-bg':''"  class="ml-1" @click="filterByType(7, 'DEBUG')" >
              Debug
            </b-badge>
            <b-badge v-if="statusBadges.includes(1)" href="#" variant="primary"  class="ml-1" @click="clearFilters" >
              Clear filter
            </b-badge>
          </div>
        </div>
        <div class="d-flex justify-content between align-items-center">
          <span>Select Date: </span>
          <v-select class="ml-1" :options="datesOptions" v-model="dateFilter" style="width:160px !important;" :clearable="false"
                    @input="onChangeDate"
          ></v-select>
          <feather-icon
              v-b-tooltip.hover.top="'Clear the logs for the selected date!'"
              class="cursor-pointer text-danger ml-1"
              size = "20"
              icon="TrashIcon"
              @click="clearByDate"
          />
        </div>
      </div>
      <b-table
          no-border-collapse
          class="mt-1 position-relative"
          :fields="fields"
          show-empty
          sticky-header="50vh"
          primary-key="id"
          responsive="sm"
          :items="filteredItems"
          :busy="isBusy"
      >
        <template #table-busy>
          <div class="text-center text-primary my-2">
            <b-spinner class="align-middle mr-1" />
            <strong>Loading ...</strong>
          </div>
        </template>
        <template #cell(type)="data">
          <b-badge :class="returnColorBgType(data.item.type)" >{{data.item.type}}</b-badge>
        </template>
      </b-table>
    </b-card>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import LogReaderService from '@/views/log-reader/log-reader.service'
export default {
  components:{
    vSelect,
  },
  async created() {
    await this.getLogs()
  },
  data(){
    return {
      isBusy: false,
      items: [],
      filteredItems: [],
      datesOptions: [],
      fields: [
        {
          key: 'timestamp',
          label: 'Timestamp',
        },
        {
          key: 'env',
          label: 'Env',
        },
        {
          key: 'type',
          label: 'Type',
        },
        {
          key: 'message',
          label: 'Message',
          thStyle: {
            width: '600px',
          },
        },
      ],
      statusBadges: [0,0,0,0,0,0,0,0],
      dateFilter: '',
      filename: '',
    }
  },
  methods: {
    returnColorBgType(type){
      switch (type) {
        case 'INFO': return 'info-bg';
        case 'EMERGENCY': return 'emergency-bg';
        case 'CRITICAL': return 'critical-bg';
        case 'ALERT': return 'alert-bg';
        case 'ERROR': return 'error-bg';
        case 'WARNING': return 'warning-bg';
        case 'NOTICE': return 'notice-bg';
        case 'DEBUG': return 'debug-bg';
      }
    },
    clearFilters() {
      this.filteredItems = this.items
      this.statusBadges = [0,0,0,0,0,0,0,0]
    },
    filterByType(index, type){
      this.statusBadges = [0,0,0,0,0,0,0,0]
      this.$set(this.statusBadges, index, 1)
      this.filteredItems = this.items.filter(item => item.type===type)
    },
    async getLogs(date=null){
      try{
        this.isBusy=true
        const data = await LogReaderService.getLogList({date: date})
        console.log(data)
        if (data.status===200){
          this.isBusy=false
          if (data.data.success){
            this.items = data.data.data.logs
            this.filteredItems = this.items
            this.datesOptions = data.data.data.available_log_dates
            this.filename = data.data.data.filename
            if(!date) this.dateFilter = this.datesOptions[0]
          }
        }
      }catch (e) {
        this.isBusy=false
        this.showErrorSwal(e)
      }
    },
    async onChangeDate(){
      await this.getLogs(this.dateFilter)
    },
    async clearByDate(){
      try {
        const response = await this.showConfirmSwal()
        if (response.isConfirmed){
          const data = await LogReaderService.deleteLogList({filename: this.filename})
          if (data.status === 200) {
            this.showSuccessSwal()
            await this.getLogs()
          }        }
      } catch (e){
        this.showErrorSwal(e)
      }
    },
    async clearEverything(){
      try {
        const response = await this.showConfirmSwal()
        if (response.isConfirmed) {
          const data = await LogReaderService.deleteLogList({ clear: true })
          if (data.status === 200) {
            this.showSuccessSwal()
            await this.getLogs()
          }
        }
      } catch (e){
        this.showErrorSwal(e)
      }
    }
  },
}
</script>

<style scoped>
.info-bg{
  background-color: #6BB5B5;
}
.emergency-bg{
  background-color: #FF6060;
}
.critical-bg{
  background-color: #DE4F4F;
}
.alert-bg{
  background-color: blue;
}
.error-bg{
  background-color: red;
}
.warning-bg{
  background-color: #F7BE57;
}
.notice-bg{
  background-color: #8F5FE8;
}
.debug-bg{
  background-color: #343a40 ;
}
</style>
