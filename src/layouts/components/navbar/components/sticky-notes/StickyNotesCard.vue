<template>
  <div class="d-flex flex-column justify-content-between align-items-center">
    <span @click="$emit('onCardClicked', note)" class="cursor-pointer">
      <feather-icon
        icon="FileTextIcon"
        size="45"
        :style="`color: ${note.category};`"
      />
    </span>
    <span class="mt-1 text-center" style="width: 100%; max-width: 130px; text-align: center;"> {{ note.subject }} </span>
    <span class="mt-1 text-center text-muted" style="width: 100%; max-width: 130px; text-align: center;">
      {{ note.created_at | myDateGlobal }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  }
};
</script>

<style>
</style>