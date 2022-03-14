<template>
  <div>
    <v-select
      id="vSelectReasons"
      v-model="selectedReason"
      :options="arrayReasons"
      label="reason"
      class="w-100"
      :reduce="(val) => val.id"
      transition
    />
  </div>
</template>

<script>
export default {
  mounted() {
    this.getReasonsNoPotential();
  },
  data() {
    return {
      arrayReasons: [],
      selectedReason: null,
    };
  },
  methods: {
    getReasonsNoPotential() {
      axios.get("/api/get-reasons-not-potential").then((response) => {
        this.arrayReasons = response.data;
        // console.log(this.arrayReasons, "reas");
      });
    },
  },
  watch: {
    selectedReason(newVal) {
      this.$emit("input", newVal);
    },
  },
};
</script>

<style>
</style>
