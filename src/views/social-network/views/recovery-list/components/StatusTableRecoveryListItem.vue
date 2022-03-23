<template>
  <div
      class="d-flex flex-column justify-content-center align-items-center"
  >
    <b-checkbox @change="onChangeStatus(item)" v-model="item.status === 1 ? true : false"/>
  </div>
</template>

<script>
import RecoveryListService from "@/views/social-network/views/recovery-list/service/recovery.list.service";

export default {
  name: 'StatusTableRecoveryListItem',
  data(){
    return {
      totalStatus: 0
    }
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    console.log('item', this.item)
  },
  methods: {
    async onChangeStatus (lead) {
      console.log(lead)
      let recovery_status = true;
      lead.status == 0 ? recovery_status = true : recovery_status = false;
      recovery_status ? this.totalStatus++ : this.totalStatus--;
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

    },
  }
}
</script>