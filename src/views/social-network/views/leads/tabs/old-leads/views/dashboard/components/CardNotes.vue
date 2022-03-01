<template>
    <b-card>
      <template #header>
        <b-card-title>
          Notes &nbsp;
          <span>
            <a class="text-important"> </a>
          </span>
        </b-card-title>
      </template>

      <b-container class="mt-1">
        <b-form-textarea
          id="textarea"
          rows="3"
          placeholder="Label in Textarea"
          @input="alert('asdas')"
        />

        <b-row class="mt-1">
          <b-col md="6"></b-col>
          <b-col md="6" class="text-right">
            <b-button variant="warning" class="btn-icon" size="sm">
              <feather-icon icon="ListIcon" />
            </b-button>
            <b-button variant="primary" class="ml-1" size="sm">
              <feather-icon
                icon="PlusIcon"
                size="15"
                class="mr-50 text-white"
              ></feather-icon>
              ADD
            </b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
</template>

<script>
export default {};
</script>

<style>
</style>