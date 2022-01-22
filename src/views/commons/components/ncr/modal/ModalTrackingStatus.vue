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
          <b-col cols="12" md="6" class="mb-3">
            <b-row>
              <b-col md="12">
                <b-row>
                  <b-col
                    class="font-bureau-style text-gray-light m-auto text-center"
                    cols="4"
                    md="4"
                  >
                    <p>
                      <strong>Lead</strong>
                    </p>
                  </b-col>
                  <b-col cols="8" md="8" class="px-1">
                    <div class>
                      <p
                        class="bg-important rounded text-white font-medium-1 px-1"
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
        <div>
          <b-table
            ref="refClientsList"
            :items="data"
            :fields="arrayColumns"
            primary-key="id"
            table-class="text-nowrap"
            responsive="sm"
            show-empty
            sticky-header="50vh"
          >
            <template #cell(plataform_ico)="data">
              <div class="d-flex flex-column justify-content-start align-items-start">
                <img
                  v-if="data.item.plataform_ico != null"
                  :src="assetsImg + data.item.plataform_ico"
                  :title="data.item.plataform_name"
                />
              </div>
            </template>
            <template #cell(created_name)="data">
              <div class="d-flex flex-column justify-content-start align-items-start">
                <span>{{ data.item.created_name }}</span>
                <div>{{ data.item.created_at | myGlobalDay }}</div>
                <!-- <span>{{ data.item.date | myGlobalDay }}</span> -->
              </div>
            </template>
          </b-table>
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
      type: Boolean
    },
    score_id: {
      type: [String, Number]
    },
    lead_name: {
      type: [String, Number]
    }
  },
  data() {
    return {
      ifModal: this.modalTrackingStatus,
      data: null,
      status: false,
      assetsImg: process.env.VUE_APP_BASE_URL_ASSETS,
      arrayColumns: [
        {
          key: "status",
          label: "STATUS",
          class: "text-left",
          sortable: false
        },
        {
          key: "plataform_ico",
          label: "PROVIDER",
          class: "text-left",
          sortable: false
        },
        {
          key: "created_name",
          label: "CREATED BY",
          class: "text-left",
          sortable: false
        },
        {
          key: "note",
          label: "NOTE",
          class: "text-left",
          sortable: false
        }
      ],
      currentPage: ""
    };
  },
  computed: {
    statusSpinner() {
      return this.status;
    }
  },
  methods: {
    closeModal() {
      this.$emit("closeTrackingStatus", false);
    },
    getTrackingStatus() {
      this.status = true;
      amgApi
        .post("/lead/ncr/get-lead-tracking-status-by-id", {
          score_id: this.score_id
        })
        .then(response => {
          if (response.status == 200) {
            this.data = response.data;
            this.status = false;
          }
        })
        .catch(error => {
          console.error(error);
          this.status = false;
        });
    }
    // myProvider(ctx) {
    //   const promise = amgApi.post(`${ctx.apiUrl}`, {
    //     name_text: this.score_id,
    //   });
    //   return promise.then((data) => {
    //     const items = data.data.data;
    //     console.log(items);
    //     return items || [];
    //   });
    // },
  },
  created() {
    this.getTrackingStatus();
  }
};
</script>


