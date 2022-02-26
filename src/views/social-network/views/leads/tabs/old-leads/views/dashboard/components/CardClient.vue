<template>
  <div>
    <b-card class="card-client">
      <b-container>
        <b-card-title>
          <h3 class="title-card">Client</h3>
        </b-card-title>
        <hr />
      </b-container>

      <b-container class="mt-2">
        <router-link :to="{ name: 'sn-edit-old-lead' }">
          <h4><b>Iris Canizales</b></h4>
        </router-link>
        <h5 class="text-danger">California (CA)</h5>

        <br />

        <b-row>
          <b-col md="6">
            <standar-form-group
              label="Nickname:"
              display="block"
              label-size="md"
            >
              <b-form-input
                :disabled="true"
                class="border-bottom"
              ></b-form-input>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group label="Status:" display="block" label-size="md">
              <b-form-input
                :disabled="true"
                class="border-bottom"
              ></b-form-input>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group
              label="Lead Owner:"
              display="block"
              label-size="md"
            >
              <b-form-input
                :disabled="true"
                class="border-bottom"
              ></b-form-input>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group
              label="Fan Page:"
              display="block"
              label-size="md"
            >
              <b-form-input
                :disabled="true"
                class="border-bottom"
              ></b-form-input>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group
              label="Language:"
              display="block"
              label-size="md"
            >
              <b-form-input
                :disabled="true"
                class="border-bottom"
              ></b-form-input>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group
              label="Program:"
              display="block"
              label-size="md"
            >
              <b-form-input
                :disabled="true"
                class="border-bottom"
              ></b-form-input>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group
              label="Catcher:"
              display="block"
              label-size="md"
            >
              <b-form-input
                :disabled="true"
                class="border-bottom"
              ></b-form-input>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group
              label="Created at:"
              display="block"
              label-size="md"
            >
              <b-form-input
                :disabled="true"
                class="border-bottom"
              ></b-form-input>
            </standar-form-group>
          </b-col>
          <b-col md="6">
            <standar-form-group label="Flyer:" display="block" label-size="md">
              <div class="flyer">
                <b-badge variant="primary" class="badge"> CA </b-badge>
                <b-img
                  src="https://amgsoftpre.s3.amazonaws.com/BankFlyers/Ti/Boost-Credit-2.1.3%282%29/thumb.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA6BWVK4LFMHWTYIUL%2F20220131%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220131T175721Z&X-Amz-SignedHeaders=host&X-Amz-Expires=7200&X-Amz-Signature=39a3e6f4d7c1830647adf95be1edefbe4feacff80a3df479b2180a6544be3e82"
                  class="flyer"
                ></b-img>
              </div>
            </standar-form-group>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
  </div>
</template>

<script>
// Components
import StandarFormGroup from "@/views/social-network/views/leads/components/StandarFormGroup.vue";

export default {
  components: {
    "standar-form-group": StandarFormGroup,
  },
};
</script>

<style lang="scss">
.card-client{
  height: 680px;
}

.flyer {
  position: relative;
  width: 150px;
  height: 150px;
  background-color: #1d222e;
  overflow: hidden;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  .badge {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 10;
  }

  .img {
    width: 100%;
    height: 100%;
    contain: cover;
  }
}

.border-bottom {
  border: none !important;
  border-radius: 0 !important;
}
</style>