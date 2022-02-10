<template>
  <div>
    <b-card>
      <b-container>
        <b-card-title>
          <h3 class="title-card">Files</h3>
        </b-card-title>
        <hr />
      </b-container>
      <b-container class="mt-1">
        <br />
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
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>