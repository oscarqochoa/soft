<template>
  <div>
    <b-btn @click="modal.tracking = !modal.tracking">
      ABRETE TRACKING
    </b-btn>
    <b-btn @click="modal.boost_credit = !modal.boost_credit">
      ABRETE BOOST CREDIT
    </b-btn>
    <tracking-modal :modal="modal" :tracking="modalData.tracking" />
    <boost-credit-modal :modal="modal" :boost_credit="modalData.boost_credit"/>
  </div>
</template>

<script>
import TrackingModal from '@/views/crm/views/sales-made/components/modals/TrackingModal'
import BoostCreditModal from "@/views/crm/views/sales-made/components/modals/DetailOfSailModal";

export default {
  name: 'PruebaModal',
  components: {
    BoostCreditModal,
    TrackingModal,
  },
  data() {
    return {
      modal: {
        tracking: false,
        boost_credit: false,
      },
      modalData: {
        tracking: {
          program: 'Credit Express',
          client: 'Roger Segura',
          tabla: JSON.parse('[{"id": 15861, "date": "2021-07-31 13:25:56.000000", "type": "send", "comments": "324", "user_name": "Roger Segura"}, {"id": 15862, "date": "2021-07-31 13:27:38.000000", "type": "approved", "comments": "234324", "user_name": "Roger Segura"}]'),
        },
        boost_credit: {
          program: 'Credit Express',
          client: 'Roger Segura',
          fee: 29.99,
        },
      },
    }
  },
}
</script>

<style scoped>

</style>
