<template>
  <div>
    <b-card no-body class="p-2 mt-4">
      <b-row>
        <b-col md="6">
          <h4 class="title-card">Basic Information</h4>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    lead: {
      type: Object,
      default: () => ({}),
    },
    info: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>