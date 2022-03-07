<template>
  <div style="margin-bottom: 15px">
    <div class="row" style="margin: 0">
      <div class="col-md-12">
        <b-card body-class="px-3 pt-3" class="h-card-sn">
          <span class="title-card">Task</span>

          <b-col sm="12" md="12" lg="12" xl="12" class="my-3 px-0">
            <b-tabs
              pills
              active-nav-item-class="bg-orange-tab"
              class="override-tab"
            >
              <b-tab
                title-item-class="text-center w-15"
                title-link-class="bg-default-tab"
                :class="{ active: !taskForSn }"
                @click="getTaskShow(0)"
              >
                <template #title>CRM</template>
              </b-tab>
              <b-tab
                title-item-class="text-center w-15"
                title-link-class="bg-default-tab"
                :class="{ active: taskForSn }"
                @click="getTaskShow(1)"
              >
                <template #title>
                  SN
                  <div
                    v-if="countData == 0"
                    class="rounded-circle text-white"
                    style="display: inline-block; width: 25px; background: red"
                  >
                    {{ countData }}
                  </div>
                </template>
              </b-tab>
            </b-tabs>
          </b-col>

          <div class="col-md-12 px-0">
            <div
              class="form-group mt-0"
              v-if="!spinner"
              :style="tasks.length >= 3 ? 'height: 179px;overflow: auto;' : ''"
              id="cont-list"
            >
              <table class="table">
                <tbody class="font-bureau-style">
                  <tr class="bg-light-gray text-table-gray">
                    <th>Subject</th>
                    <th>Date / Hour</th>
                    <th>Sms</th>
                    <th v-if="!taskForSn">Type</th>
                    <th class="text-center">Actions</th>
                  </tr>
                  <tr v-for="task in tasks" :key="task.id">
                    <td>{{ task.subject }}</td>
                    <td v-if="!lead.state || lead.state == 'UNK'">
                      {{ task.due_date | myGlobalDay }}
                    </td>
                    <td v-else>
                      <span>{{ task.due_date | myGlobalDay }}</span>
                      <br />
                      <span
                        style="font-weight: 700"
                        v-if="task.real_time != null"
                        >{{ task.real_time | myGlobalDay }} ({{
                          lead.state
                        }})</span
                      >
                    </td>
                    <td>
                      <span class="text-yes" v-if="task.sms_status == 1"
                        >YES</span
                      >
                      <span class="text-no" v-else>NO</span>
                    </td>
                    <td v-if="!taskForSn">
                      <span class="text-now" v-if="task.type_attend == 2"
                        >NOW</span
                      >
                      <span class="text-later" v-else>LATER</span>
                    </td>
                    <td class="union-icons">
                      <div
                        class="circle-icon-div"
                        style="background: #00de9b; cursor: pointer"
                        @click="doneTask(task.id)"
                      >
                        <i class="fas fa-check"></i>
                      </div>
                      <div
                        :title="
                          task.type_attend == 2
                            ? 'You cannot edit this task (now)'
                            : 'Edit task'
                        "
                        class="circle-icon-div"
                        style="background: #ffc41c; cursor: pointer"
                        @click="getTask(task.id, 3)"
                        :class="{ 'not-pointer': task.type_attend == 2 }"
                      >
                        <i class="fas fa-pen"></i>
                      </div>
                      <div
                        class="circle-icon-div"
                        style="background: #00c3de; cursor: pointer"
                        @click="getTask(task.id, 2)"
                      >
                        <i class="fas fa-eye"></i>
                      </div>
                      <div
                        class="circle-icon-div"
                        style="background: #ff6a6a; cursor: pointer"
                        @click="deleteTask(task.id)"
                      >
                        <i class="fas fa-trash"></i>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="col-lg-12 text-right">
              <button
                v-show="countTaskDone != 0"
                class="btn rounded btn-orange mr-2"
                title="History Tasks"
                @click="openModalHistoryTasks"
              >
                <img
                  src="/images/new-icons/list-tracking-w.png"
                  width="18px"
                  alt="Edit"
                />
              </button>
              <button
                class="btn rounded btn-orange"
                @click="openModalCreateTask"
                v-if="isLeadFull || taskForSn"
              >
                <i class="fas fa-plus mr-2"></i> ADD
              </button>
            </div>
            <div class="ml-3" v-if="!isLeadFull &amp;&amp; !taskForSn">
              <p style="color: red">
                To create a task for CRM, you must complete these fields:
              </p>
              <ul style="color: red">
                <li v-if="requiredFieldsForCreateCrmTask.first_name == null">
                  First name
                </li>
                <li v-if="requiredFieldsForCreateCrmTask.last_name == null">
                  Last name
                </li>
                <li v-if="requiredFieldsForCreateCrmTask.mobile == null">
                  Mobile
                </li>
              </ul>
            </div>
          </div>
        </b-card>
      </div>
    </div>
    <modal-task-sn
      v-if="modalCreateTaskSn"
      @click="closeModalCreateTaskSn"
      :state="stateUpdate"
      :leadname="nameOrNick"
      :type="this.type"
      :userid="this.currentUser.user_id"
      :leadid="this.lead.id"
      @new="addTask"
      :role="this.currentUser.role_id"
      :modul="this.modul"
      :data="this.dataTask"
      :program_name="this.lead.name_programs"
      :program_id="this.program_id"
      :taskForSn="taskForSn"
      :event_id="this.event_id"
      :leadMobile="lead.mobile"
      :open="modalCreateTaskSn"
      :replyId="replyId"
    ></modal-task-sn>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    notes: {
      type: Object,
      default: () => ({}),
    },
    requiredFieldsForCreateCrmTask: {
      type: Object,
      default: () => ({}),
    },
    replyId: Number,
    modul: [String, Number],
    lead: {
      type: Object,
    },
  },
  data() {
    return {
      tasks: [],
      modalCreateTask: false,
      modalCreateTaskSn: false,
      dataTask: [],
      events: [],
      error: {
        plataform: false,
        dateonline: false,
        usernameonline: false,
        passwordonline: false,
        membernumberonline: false,
      },
      min: new Date(1950, 0, 1, 8, 0, 0),
      max: new Date(2049, 11, 31, 18, 0, 0),
      minDate: new Date(1900, 1, 1),
      maxDate: new Date(2050, 1, 1),
      currentDate: new Date(),
      loadingprocess: true,
      viewp: true,
      program_id:
        this.lead.lead_programs == null
          ? ""
          : JSON.parse(this.lead.lead_programs)[0].program_id,
      spinner: false,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
    isLeadFull() {
      return (
        this.requiredFieldsForCreateCrmTask.first_name &&
        this.requiredFieldsForCreateCrmTask.last_name &&
        this.requiredFieldsForCreateCrmTask.mobile
      );
    },
    stateUpdate() {
      return this.requiredFieldsForCreateCrmTask.state
        ? this.requiredFieldsForCreateCrmTask.state
        : this.lead.state;
    },
  },
  methods: {
    addPreloader() {
      var x = document.getElementById("app");
      x.classList.add("preloader");
      x.classList.add("opacity-uno");
    },
    removePreloader() {
      var x = document.getElementById("app");
      x.classList.remove("preloader");
      x.classList.remove("opacity-uno");
    },
    openModalHistoryTasks() {
      if (!this.lead.lead_name.trim()) {
        this.nameOrNick = this.lead.nickname;
      } else {
        this.nameOrNick = this.lead.lead_name;
      }
      var boton = document.getElementById("loading");
      boton.classList.add("preloader-modal");
      this.type = 0;
      this.modalCreateTaskSn = true;
    },
    getTask(id, type) {
      this.addPreloader();
      axios
        .post("/api/getleadtask", {
          id: id,
        })
        .then((response) => {
          if (response.status == 200) {
            this.type = type;
            this.dataTask = response.data[0];

            if (this.modul == 15) {
              this.event_id = id;
              this.modalCreateTaskSn = true;
              if (!this.lead.lead_name.trim()) {
                this.nameOrNick = this.lead.nickname;
              } else {
                this.nameOrNick = this.lead.lead_name;
              }
            } else {
              this.modalCreateTask = true;
            }
            // this.removePreloader();
          }
        });
    },
    doneTask(id) {
      swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#ab9220",
          cancelButtonColor: "#8f9194",
          confirmButtonText: "Yes",
        })
        .then((result) => {
          if (result.value) {
            axios
              .post("/api/doneleadtask", {
                id: id,
                user_id: this.currentUser.user_id,
                lead_id: this.lead.id,
                taskForSn: this.taskForSn,
              })
              .then((response) => {
                if (response.status == 200) {
                  swal
                    .fire({
                      type: "success",
                      title: "OPERATION SUCCESSFULLY",
                    })
                    .then((res) => {
                      if (res) {
                        this.getTaskShow(this.taskForSn);
                        this.lead.count_task = response.data.count_tasks;
                        eventBus.$emit("updatingTasks", null);
                      }
                    });
                }
              });
          }
        });
    },
    deleteTask(id) {
      swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#ab9220",
          cancelButtonColor: "#8f9194",
          confirmButtonText: "Yes",
        })
        .then((result) => {
          if (result.value) {
            axios
              .post("/api/deleteleadtask", {
                id: id,
                user_id: this.currentUser.user_id,
                lead_id: this.lead.id,
                taskForSn: this.taskForSn,
              })
              .then((response) => {
                if (response.status == 200) {
                  swal
                    .fire({
                      type: "success",
                      title: "OPERATION SUCCESSFULLY",
                    })
                    .then((res) => {
                      if (res) {
                        this.getTaskShow(this.taskForSn);
                        eventBus.$emit("updatingTasks", null);
                      }
                    });
                }
              });
          }
        });
    },
    addTask() {
      this.getTaskShow(this.taskForSn);
    },

    //Tasks
    getTaskShow(type) {
      this.spinner = true;
      this.tasks = [];

      //type = Crm o Sn
      this.taskForSn = type;

      axios
        .post("/api/get-tasks-show-sn", {
          lead_id: this.lead.id,
          taskForSn: this.taskForSn,
          reply_id: this.replyId,
        })
        .then((response) => {
          if (response.status == 200) {
            this.spinner = false;
            this.tasks = response.data;
            if (response.data[0]) {
              this.countTaskDone = response.data[0].count_task;
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    closeModalCreateTaskSn() {
      this.dataTask = [];
      var boton = document.getElementById("loading");
      boton.classList.remove("preloader-modal");
      this.modalCreateTaskSn = false;
    },
    openModalCreateTask() {
      if (!this.lead.lead_name.trim()) {
        this.nameOrNick = this.lead.nickname;
      } else {
        this.nameOrNick = this.lead.lead_name;
      }
      this.addPreloader();
      this.type = 1;
      this.modalCreateTaskSn = true;
      this.modalCreateTask = false;
    },
  },
  created() {
    this.getTaskShow(0);
  },
};
</script>

<style scoped>
.position-img {
  position: absolute;
  right: 0px;
  top: 0px;
}

.tabs-change {
  text-align: center;
  color: white;
  margin: 0px 3px;
  border-radius: 5px 5px 0px 0px;
  width: 160px !important;
  height: 27px !important;
}

.postion-tab {
  position: relative;
  top: -6px;
}

.text-yes {
  color: #80e400;
  font-size: 15;
  font-weight: 600;
}

.text-no {
  color: #ff6a6a;
  font-size: 15;
  font-weight: 600;
}

.text-now {
  color: #3671ee;
  font-size: 15;
  font-weight: 600;
}

.text-later {
  color: #ff9e6a;
  font-size: 15;
  font-weight: 600;
}
</style>
