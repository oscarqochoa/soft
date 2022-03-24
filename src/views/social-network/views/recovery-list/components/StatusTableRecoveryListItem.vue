<template>
  <div
      class="d-flex flex-column justify-content-center align-items-center"
  >
    <b-checkbox :disabled="disabledItem" @change="onChangeStatus(item)" v-model="item.status === 1 ? true : false"/>
  </div>
</template>

<script>
import RecoveryListService from "@/views/social-network/views/recovery-list/service/recovery.list.service";

export default {
  name: 'StatusTableRecoveryListItem',
  data(){
    return {
      //totalStatus: 0,
      disabledItem: true
    }
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    doneLeads: Number,
    totalStatus: Number,
    user: {
      type: Object,
      default: () => {}
    },
  },
  created() {
    //2022-03-20
    //1995, 11, 17
    const date = this.item.list_date.substr(0,10).split('-');
    const dateI = new Date(date[0],date[1] - 1,date[2]);
    console.log('date1 :', date)
    console.log('date2 : ', dateI)
    console.log('item', new Date(dateI.getTime() + 5 * 24 * 60 * 60000), new Date())
    console.log('item true', new Date(dateI.getTime() + (5 * 24 * 60 * 60000)) > new Date())
    if(new Date(dateI.getTime() + (5 * 24 * 60 * 60000)) > new Date()){
      this.disabledItem = false;
    }
  },
  methods: {
    async onChangeStatus (lead) {
      let recovery_status = true;
      lead.status == 0 ? recovery_status = true : recovery_status = false;
      //recovery_status ? this.totalStatus++ : this.totalStatus--;
      const resp = await RecoveryListService.getRecoveryListByUser({
        perpage: 50,
        npage: 1,
        user_id: this.user.id,
        date_in: this.user.date,
        date_from: null,
        date_to: null,
        status: recovery_status,
        program_id: null,
        rol_id: 10,
        update_status: 1,
        id_list: lead.id
      })
      this.$emit('updateStatusDone',{
        done: resp[1].status + 1, status: resp[1].count
      })
      //this.doneLeads = resp[1].status + 1;
      //this.totalStatus = resp[1].count;
      //this.totalStatus, this.doneLeads

    },
  },
}
</script>