<template>
  <div>
    <old-business-modal
      v-if="salesClient.creates < '2022-02-28'"
      :sales-client="salesClient"
      :header-s="headerS"
      :modal-services="modalServices"
      :programs-all="programsAll"
      :type-modal="typeModal"
      :users-services="usersServices"
      @changeProgram="changeProgram"
      @closeModal="hideModal"
    />
    <new-business-modal
      v-else
      :sales-client="salesClient"
      :header-s="headerS"
      :modal-services="modalServices"
      :programs-all="programsAll"
      :type-modal="typeModal"
      :users-services="usersServices"
      @changeProgram="changeProgram"
      @closeModal="hideModal"
    />
  </div>
</template>

<script>
import OldBusinessModal from "@/views/crm/views/sales-made/components/modals/services/business/OldBusinessModal.vue";
import NewBusinessModal from "@/views/crm/views/sales-made/components/modals/services/business/NewBusinessModal.vue";
export default {
  components: {
    OldBusinessModal,
    NewBusinessModal,
  },
  props: {
    modalServices: {
      type: Boolean,
      default: false,
    },
    salesClient: {
      type: Object,
      default: () => ({
        event_id: "",
        account_id: "",
        id: "",
        lead_id: "",
      }),
      // 1: complete rates crm, 2: detail of sale crm, 3: add Services
      // 4: change Services, 5 show add change Services, 6  add  services to lead from programs
    },
    typeModal: {
      type: Number,
      default: 1,
      // 1: complete rates, 2: detail of sale
    },
    usersServices: {
      type: Array,
      default: () => [],
    },
    programsAll: {
      type: Array,
      default: () => [],
    },
    headerS: {
      type: Object,
      default: () => ({ program: "", seller: "", captured: "" }),
    },
  },
  methods: {
    changeProgram(headerS) {
      this.$emit("changeProgram", headerS);
    },
    hideModal(refresh, programSelect) {
      this.$emit("closeModal", refresh, programSelect);
    },
  },
};
</script>

<style scoped></style>
