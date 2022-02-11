<template>
  <div>
    <b-modal
      modal
      centered
      title="TASK TODAY"
      v-model="modaltask"
      size="lg"
      modal-class="modal-primary"
      hide-footer
      @hidden="closeModal"
      title-tag="h3"
      :no-close-on-backdrop="true"
    >
      <b-table
        :api-url="clientRoute"
        ref="refClientsList"
        :items="myProvider"
        :fields="arrayColumns"
        primary-key="id"
        table-class="text-nowrap"
        responsive="sm"
        show-empty
        sticky-header="50vh"
      >
        <template #table-busy>
          <div class="text-center text-primary my-2">
            <b-spinner class="align-middle mr-1"></b-spinner>
            <strong>Loading ...</strong>
          </div>
        </template>
        <template #cell(client_name)="data">
          <div
            class="d-flex flex-column justify-content-start align-items-start"
          >
            <router-link
              class="select-lead-name "
              :to="{
                name: 'lead-show',
                params: { id: data.item.lead_id },
              }"
              target="_blank"
            >
              {{ data.item.client_name }}
            </router-link>
          </div>
        </template>
        <template #cell(due_date)="data">
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <span>{{ data.item.due_date | myGlobalDay }}</span>
          </div>
        </template>
        <template #cell(done)="data">
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <b-form-checkbox
              v-model="data.item.done"
              :value="1"
              @change="
                doneTask(
                  data.item.id,
                  data.item.done,
                )
              "
            >
            </b-form-checkbox>

          </div>
        </template>
      </b-table>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import fields from '../../data/fields.task.data'
export default {
  props: {
    modalTaskToday: {
      type: Boolean,
    },
  },
  data() {
    return {
      modaltask: this.modalTaskToday,
      arrayColumns: fields,
    };
  },
  computed:{
    clientRoute() {
      return "/tasks/search-task-today";
    },
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  methods: {
    closeModal() {
      this.$emit("close", false);
    },
    async myProvider(ctx) {
      try {
        const response = await amgApi.post(`${ctx.apiUrl}`, {
        id: this.currentUser.user_id,
      });
      const items = response.data
      return items || []
      } catch(error) {
        console.error(error)
        return []
      }
    },
    doneTask(id, done) {
        this.showConfirmSwal()
        .then((result) => {
          if (result.value) {
            amgApi
              .post("/lead/done-task-today", {
                id: id,
                user_id: this.currentUser.user_id,
                done: done == "1" ? 1 : 0,
              })
              .then((response) => {
                if (response.status == 200) {
                  this.showSuccessSwal()
                    .then((res) => {
                      if (res) {
                        this.$refs.refClientsList.refresh();
                        this.$emit("updatingTasks", false);
                      }
                    });
                }
              });
          }
        });
    },
  },
};
</script>