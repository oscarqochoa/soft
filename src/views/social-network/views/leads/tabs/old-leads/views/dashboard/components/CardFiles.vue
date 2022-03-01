<template>
  <b-card class="px-0">
    <template #header>
      <b-card-title>
        Files &nbsp;
        <span>
          <a class="text-important"> </a>
        </span>
      </b-card-title>
    </template>

    <b-container class="mt-1">
      <div class="text-right">
        <b-button
          variant="primary"
          class="mr-1"
          size="sm"
          :to="{ name: 'sn-create-new-lead' }"
        >
          <feather-icon
            icon="FileTextIcon"
            size="15"
            class="mr-50 text-white"
          ></feather-icon>
          UPLOAD
        </b-button>
      </div>
    </b-container>
  </b-card>
</template>

<script>
export default {};
</script>

<style>
</style>