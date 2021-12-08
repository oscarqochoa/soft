<template>
  <b-row>
    <b-col lg="3 mb-1">
      <b-input-group class>
        <b-input-group-prepend>
          <b-input-group-text class="font-weight-bolder">
            <span>USER</span>
          </b-input-group-text>
        </b-input-group-prepend>
        <b-form-input type="text" v-model="info.user_name" disabled class="text-center"></b-form-input>
      </b-input-group>
    </b-col>

    <b-col lg="3 mb-1">
      <b-input-group class>
        <b-input-group-prepend>
          <b-input-group-text class="font-weight-bolder">
            <span>MODULE</span>
          </b-input-group-text>
        </b-input-group-prepend>
        <b-form-input type="text" v-model="info.module_name" disabled class="text-center"></b-form-input>
      </b-input-group>
    </b-col>

    <b-col lg="3 mb-1">
      <b-input-group class>
        <b-input-group-prepend>
          <b-input-group-text class="font-weight-bolder">
            <span>YEAR</span>
          </b-input-group-text>
        </b-input-group-prepend>
        <b-form-input type="text" v-model="info.year" disabled class="text-center"></b-form-input>
      </b-input-group>
    </b-col>

    <b-col lg="3 mb-1">
      <b-input-group class>
        <b-input-group-prepend>
          <b-input-group-text class="font-weight-bolder">
            <span>MONTH</span>
          </b-input-group-text>
        </b-input-group-prepend>
        <b-form-input type="text" v-model="info.monthName" disabled class="text-center"></b-form-input>
      </b-input-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "ModalHeader",
  props: {
    info: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>