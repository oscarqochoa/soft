<template>
  <div>
    <b-modal
      modal
      title="Tracking Status"
      v-model="ifModal"
      size="lg"
      modal-class="modal-primary"
      hide-footer
      body-class="mb-2"
      @hidden="closeModal"
      title-tag="h3"
    >
      <div>
        <b-row>
          <b-col cols="6" class="mb-3">
            <b-row>
              <b-col md="12">
                <b-row>
                  <b-col
                    class="font-bureau-style text-gray-light m-auto text-center"
                    cols="4"
                  >
                    <p><strong>Lead</strong></p>
                  </b-col>
                  <b-col cols="8" class="px-1">
                    <div class="">
                      <p
                        class="
                          bg-important
                          rounded
                          text-white
                          font-medium-1
                          px-1
                        "
                        style="padding-top: 10px; padding-bottom: 10px"
                      >
                        <strong>{{ lead_name }}</strong>
                      </p>
                    </div>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        <div class="campos-detail-modal row m-0">
          <div class="col-lg-12 col-md-12 px-0">
            <div
              class="form-group"
              :style="
                data != null
                  ? data.length > 7
                    ? 'height: 295px;overflow-y: auto;'
                    : ''
                  : ''
              "
            >
              <div class="text-center" v-if="statusSpinner">
                <div class="text-center text-primary my-2">
                  <b-spinner class="align-middle mr-1"></b-spinner>
                  <strong>Loading ...</strong>
                </div>
              </div>
              <table class="table" v-if="!statusSpinner">
                <thead class="font-bureau-style">
                  <tr class="bg-light-gray text-table-gray">
                    <th>Status</th>
                    <th>Provider</th>
                    <th>Created By</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody class="font-bureau-style">
                  <tr v-for="(item, index) in data" :key="index">
                    <td>{{ item.status }}</td>
                    <td>
                      <img v-if="item.plataform_ico != null"
                        :src="assetsImg + item.plataform_ico"
                        :title="item.plataform_name"
                      />
                      <!-- <img v-else
                        :src="assetsImg + item.plataform_ico"
                        :title="item.plataform_name"
                      /> -->
                    </td>
                    <td>
                      {{ item.created_name }}
                      <div v-if="item.created_at != null">
                        {{ item.created_at | myGlobalDay }}
                      </div>
                    </td>
                    <td>{{ item.note }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { amgApi } from "@/service/axios";
export default {
  props: {
    modalTrackingStatus: {
      type: Boolean,
    },
    score_id: {
      type: [String, Number],
    },
    lead_name: {
      type: [String, Number],
    },
  },
  data() {
    return {
      ifModal: this.modalTrackingStatus,
      data: null,
      status: false,
      assetsImg: process.env.VUE_APP_BASE_URL_ASSETS,
    };
  },
  computed: {
    statusSpinner() {
      return this.status;
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeTrackingStatus", false);
    },
    getTrackingStatus() {
      this.status = true;
      amgApi
        .post("/ncr-leads-get-tracking-status", {
          score_id: this.score_id,
        })
        .then((response) => {
          if (response.status == 200) {
            this.data = response.data;
            this.status = false;
          }
        })
        .catch((error) => {
          console.error(error);
          this.status = false;
        });
    },
  },
  created() {
    this.getTrackingStatus();
  },
};
</script>


