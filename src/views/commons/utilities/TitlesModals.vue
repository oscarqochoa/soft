<template>
  <b-form-group
    label-class="font-weight-bolder font-small-5"
    :label="labelTitle"
  >
    <b-alert
      variant="info"
      show
    >
      <div
        class="alert-body alert-body bg-info rounded text-white font-medium-1 text-center box-shadow-info"
      >
        <span>{{ title }}</span>
      </div>
    </b-alert>
  </b-form-group>
</template>

<script>
export default {
  name: 'TitlesModal',
  props: {
    title: {
      type: String,
      default: '',
    },
    labelTitle: {
      type: String,
      default: 'Title',
    },
  },
}
</script>

<style >
</style>
