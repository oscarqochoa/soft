<template>
  <div class="mt-2" style="margin-bottom: 15px">
    <div class="row" style="margin: 0">
      <div class="col-md-12">
        <b-card
          body-class="p-2"
          header-class="fs-21 pt-0 pb-1 pl-4  bg-white border-bottom-0"
          class="h-card-sn card-without-borders"
        >
          <template #header>
            <span class="sub-title-card" style="margin-right: 50px">Notes</span>
            <span>
              <b-button
                class="rounded btn-orange"
                @click="openModalHistoryNotes"
                v-if="lead.count_notes != 0"
              >
                <i class="fas fa-receipt"></i>
              </b-button>
              <b-button
                class="rounded btn-orange"
                @click="openModalCreateNote"
                v-if="lead.count_notes != 0"
              >
                <i class="fas fa-pencil-alt"></i>
              </b-button>
              <b-button
                class="rounded button-text-card"
                size="sm"
                @click="cancelEditNote"
                v-if="btnsEditNotes"
                style="padding-top: 9px; padding-bottom: 9px"
                >Cancel</b-button
              >
              <b-button
                class="rounded button-text-card"
                size="sm"
                @click="updateNote"
                v-if="btnsEditNotes"
                style="padding-top: 9px; padding-bottom: 9px"
                >Confirm</b-button
              >
            </span>
          </template>
          <div class="col-md-12" style="height: 243px">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <textarea
                    class="text-area-box roboto-class"
                    id="textarea-notes"
                    style="
                      border-radius: 5px;
                      width: 100%;
                      height: 187px;
                      padding: 10px;
                      max-height: 191px;
                      font-size: 15px;
                      color: #676767;
                    "
                    name="text"
                    cols="30"
                    rows="3"
                    v-model="note.text"
                    @click="editNote"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </b-card>
      </div>
    </div>
    <b-modal
      v-model="modalHistoryNotes"
      size="lg"
      header-class="bg-white p-4"
      hide-footer
    >
      <template #modal-header="{ close }">
        <span>
          <h5 class="roboto-class" style="color: #706989">
            {{ type != 1 ? "History Notes" : "New Note" }}
          </h5>
        </span>
        <i
          class="fas fa-times"
          style="
            color: #706989;
            font-size: 20px;
            cursor: pointer;
            background: transparent;
          "
          @click="close"
        ></i>
      </template>
      <new-modal-create-lead-notes
        :data="this.dataHistoryNotes"
        :leadname="this.personalInfo.nickname"
        :type="this.type"
        :userid="this.currentUser.user_id"
        :leadid="this.personalInfo.id_lead"
        @new="addNote"
        @click="closeModalHistoryNotes"
        :imp="note.text == '' ? true : false"
        :replyid="reply.reply_id"
      ></new-modal-create-lead-notes>
    </b-modal>
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
    reply: {
      type: Object,
      default: () => ({}),
    },
    personalInfo: {
      type: Object,
      default: () => ({}),
    },
    lead: {
      type: Object,
    },
  },
  data() {
    return {
      note: {
        id: this.reply.id_note,
        user_id: this.currentUser.user_id,
        lead_id: this.lead.id,
        text: this.reply.content_note,
        reply_id: this.reply.reply_id,
      },
      modalHistoryNotes: false,
      dataHistoryNotes: [],
      type: "",
      btnsEditNotes: false,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  methods: {
    cancelEditNote() {
      this.btnsEditNotes = false;
    },
    updateNote() {
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
            axios.post("/api/updatenotes", this.note).then((response) => {
              if (response.status == 200 || response.status == 201) {
                swal
                  .fire({
                    type: "success",
                    title: "OPERATION SUCCESSFULLY",
                  })
                  .then((res) => {
                    if (res) {
                      this.note.id = response.data[0].id;
                      this.note.user_id = response.data[0].created_by;
                      this.note.lead_id = response.data[0].lead_id;
                      this.note.text = response.data[0].text;

                      this.reply.content_note = response.data[0].text;
                      this.reply.id_note = response.data[0].id;
                      this.btnsEditNotes = false;
                    }
                  });
              }
            });
          }
        });
    },
    editNote() {
      this.btnsEditNotes = true;
    },
    addNote(notes) {
      this.note = notes[0];
      this.reply.content_note = notes[0].text;
      this.reply.id_note = notes[0].id;
    },
    openModalCreateNote() {
      this.type = 1;
      this.modalHistoryNotes = true;
    },
    closeModalHistoryNotes() {
      this.modalHistoryNotes = false;
    },
    openModalHistoryNotes() {
      axios
        .post("/api/getleadnotes", {
          lead_id: this.lead.id,
          reply_id: this.reply.reply_id,
        })
        .then((response) => {
          if (response.status == 200) {
            this.dataHistoryNotes = response.data;
            this.type = 0;
            this.modalHistoryNotes = true;
          }
        });
    },
  },
};
</script>

<style>
</style>
