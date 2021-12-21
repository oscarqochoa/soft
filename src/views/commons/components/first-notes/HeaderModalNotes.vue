<template>
  <div class="w-100">
    <b-button-close @click="closeModal()" style="transform: translate(-12px, 4px) !important;"></b-button-close>
    <b-container fluid>
      <b-row class="bg-primary px-1 py-1 rounded-top">
        <h3 class="text-white mb-0 ml-1">{{ program }} Note</h3>
      </b-row>
      <b-row class="pt-1 px-1">
        <b-col lg="4">
          <TitlesModals title="Benjamin Monse" label-title="Client" />
        </b-col>
        <b-col lg="4">
          <TitlesModals title="Facebook" label-title="Source" />
        </b-col>
        <b-col lg="4">
          <TitlesModals title="Adrian Mendoza | Chidori Sifuentes" label-title="Catcher | Seller" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TitlesModals from "@/views/commons/utilities/TitlesModals";
export default {
  name: "HeaderModalNotes",
  components: { TitlesModals },
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    program: {
      type: String,
      default: ""
    }
  },
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>

<style>
</style>