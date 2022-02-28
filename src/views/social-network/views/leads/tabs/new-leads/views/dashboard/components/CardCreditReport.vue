<template>
  <div>
    <b-card body-class="px-0">
      <b-container>
        <b-row>
          <b-col cols="6">
            <h3 class="title-card">Credit Report</h3>
          </b-col>
          <b-col cols="6" class="text-right"> </b-col>
        </b-row>
      </b-container>

      <br />

      <b-table
        show-empty
        sticky-header
        striped
        responsive="sm"
        :fields="fields"
        class="mb-0"
        small
      ></b-table>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: "provider", label: "Provider", tdClass: "py-1" },
        { key: "date", label: "Date", tdClass: "py-1" },
        { key: "tu", label: "TU", tdClass: "py-1" },
        { key: "ex", label: "EX", tdClass: "py-1" },
        { key: "eq", label: "EQ", tdClass: "py-1" },
        { key: "cr", label: "CR", tdClass: "py-1" },
        { key: "pdf", label: "PDF", tdClass: "py-1" },
      ],
    };
  },
};
</script>

<style>
</style>