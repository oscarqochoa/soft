<template>
  <div style="margin-bottom: 15px">
    <div class="row" style="margin: 0">
      <div class="col-md-12">
        <b-card body-class="px-3 pt-3" class="h-card-sn">
          <span class="title-card">Files</span>
          <div class="col-lg-12" style="padding: 0px">
            <div
              class="table-side"
              v-if="files.length > 0"
              :style="files.length >= 3 ? 'height: 186px;overflow: auto;' : ''"
            >
              <table class="table" v-if="files != null">
                <thead class="font-bureau-style">
                  <tr class="bg-light-gray text-table-gray">
                    <th>
                      <span @click="search('asc', 3)">File Name</span>
                    </th>
                    <th>
                      <span @click="search('desc', 2)">Created By</span>
                    </th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody class="font-bureau-style">
                  <tr v-for="(item, index) in files" :key="index">
                    <td v-if="!editname[index].view">
                      <div v-if="item.extension != null">
                        <img
                          v-if="item.extension == 'pdf'"
                          src="/images/icons/pdf.png"
                          style="width: 20px; margin-right: 5px"
                        />
                        <img
                          v-else-if="item.extension == 'pptx'"
                          src="/images/icons/ext_files/ppt.jpg"
                          style="width: 20px; margin-right: 5px"
                        />
                        <img
                          v-else-if="
                            item.extension == 'xlsx' || item.extension == 'csv'
                          "
                          src="/images/icons/excel.png"
                          style="width: 20px; margin-right: 5px"
                        />
                        <img
                          v-else-if="item.extension == 'docx'"
                          src="/images/icons/doc.png"
                          style="width: 20px; margin-right: 5px"
                        />
                        <img
                          v-else-if="
                            item.extension == 'png' ||
                            item.extension == 'jpg' ||
                            item.extension == 'jpeg' ||
                            item.extension == 'ico'
                          "
                          src="/images/icons/img.png"
                          style="width: 20px; margin-right: 5px"
                        />
                        <img
                          style="width: 20px"
                          v-else
                          src="'/images/icons/nn.png"
                        />
                        <a
                          :href="item.route"
                          target="_blank"
                          style="cursor: pointer"
                          >{{ item.file_name }}.{{ item.extension }}</a
                        >
                      </div>
                    </td>
                    <td v-if="editname[index].view">
                      <div>
                        <input
                          class="input-form"
                          type="text"
                          style="width: 80%; margin-right: 5px"
                          :style="
                            errornamefile
                              ? 'border:1px solid red !important;'
                              : ''
                          "
                          v-model="item.custom_file_name"
                          @keyup.enter="updateFileName(item)"
                          @keyup.esc="cancelnamefile(index, item.file_name)"
                        />
                        <img
                          @click="updateFileName(item)"
                          src="/images/icons/save_lead.png"
                          style="cursor: pointer"
                        />
                        <span style="margin: 0px 5px">|</span>
                        <img
                          @click="cancelnamefile(index, item.file_name)"
                          src="/images/icons/cancel_lead.png"
                          style="cursor: pointer"
                        />
                      </div>
                    </td>
                    <td>
                      <span>{{ item.user_upload }}</span>
                      <br />
                      <span>{{ item.created_at | myGlobalDay }}</span>
                    </td>
                    <td class="union-icons">
                      <div
                        title="Rename File"
                        class="circle-icon-div"
                        style="background: #ffc41c; cursor: pointer"
                        @click="editnamefile(index, item)"
                      >
                        <i class="fas fa-pen"></i>
                      </div>
                      <div
                        title="Delete File"
                        class="circle-icon-div"
                        style="background: #ff6a6a; cursor: pointer"
                        @click="deleteFile(item.id)"
                      >
                        <i class="fas fa-trash"></i>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="padding-top: 18px">
              <div class="row">
                <div class="col-lg-8" style="padding-left: 0px"></div>
                <div class="col-lg-4 text-right" style="padding-right: 0px">
                  <button
                    class="btn rounded float-right btn-orange"
                    style="margin: 0px 20px 8px 0px"
                    @click="openModalCreateFile()"
                  >
                    <i class="far fa-file" style="margin-right: 5px"></i>
                    UPLOAD FILES
                  </button>
                </div>
              </div>
            </div>
          </div>
        </b-card>
      </div>
    </div>
    <b-modal
      id="modalCreateFile"
      v-model="modalCreateFile"
      header-class="bg-white p-4 flex-between"
      hide-footer="hide-footer"
      size="lg"
      scrollable="scrollable"
    >
      <template #modal-header="{ close }">
        <span>
          <h3 class="roboto-class" style="color: #706989">New Files</h3>
        </span>
        <span>
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
        </span>
      </template>
      <modal-file-sn
        @click="closeModalCreateFile"
        :replyId="replyId"
      ></modal-file-sn>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    replyId: Number,
    lead: {
      type: Object,
    },
  },
  data() {
    return {
      //files
      files: [],
      sort: null,
      dato2: null,
      modalCreateFile: false,
      name_file: "",
      editname: [],
      errornamefile: false,
      spinner: false,
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
    idParam() {
      return this.$route.params.id;
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
    //files
    editnamefile(index, item) {
      this.editname[index].view = true;
      item.custom_file_name = item.file_name;
    },
    updateFileName(item) {
      this.name_file = item.custom_file_name;
      if (this.name_file.trim() == "") {
        this.errornamefile = true;
      } else {
        this.errornamefile = false;
        swal
          .fire({
            imageUrl: "/images/new-icons/warning-icon.png",
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            reverseButtons: true,
            buttonsStyling: false,
            confirmButtonText: "Yes",
            customClass: {
              confirmButton: "btn-update-sn btn-sm mb-4 w-165",
              cancelButton: "btn-cancel-sn btn-sm mr-3 mb-4 w-165",
            },
          })
          .then((result) => {
            if (result.value) {
              var boton = document.getElementById("app");
              boton.classList.add("preloader");
              axios
                .post("/api/update-file-name", {
                  file_id: item.id,
                  name_file: this.name_file,
                  user_id: this.currentUser.user_id,
                })
                .then((response) => {
                  if (response.status == 200) {
                    this.search(null, null, null);
                    var boton = document.getElementById("app");
                    boton.classList.remove("preloader");
                  }
                });
            }
          });
      }
    },
    deleteFile(id) {
      swal
        .fire({
          imageUrl: "/images/new-icons/warning-icon.png",
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          showCancelButton: true,
          reverseButtons: true,
          buttonsStyling: false,
          confirmButtonText: "Yes",
          customClass: {
            confirmButton: "btn-update-sn btn-sm mb-4 w-165",
            cancelButton: "btn-cancel-sn btn-sm mr-3 mb-4 w-165",
          },
        })
        .then((result) => {
          if (result.value) {
            var boton = document.getElementById("app");
            boton.classList.add("preloader");
            axios
              .post("/api/delete-file-sn", {
                file_id: id,
                user_id: this.currentUser.user_id,
              })
              .then((response) => {
                if (response.status == 200) {
                  this.search(null, null, null);
                  var boton = document.getElementById("app");
                  boton.classList.remove("preloader");
                }
              });
          }
        });
    },
    cancelnamefile(index, name) {
      this.name_file = name;
      this.editname[index].view = false;
      this.errornamefile = false;
    },

    openModalCreateFile() {
      this.modalCreateFile = true;
    },
    closeModalCreateFile() {
      this.modalCreateFile = false;
      this.search(null, null, null);
    },

    search(sort, dato2) {
      this.spinner = true;
      this.files = [];
      this.sort = sort;
      this.dato2 = dato2;

      axios
        .post("/api/search-file-lead-sn", {
          id_lead: this.idParam,
          orderby: this.dato2 == null ? 2 : this.dato2,
          order: this.sort == null ? "asc" : this.sort,
          reply_id: this.replyId,
        })
        .then((response) => {
          if (response.status == 200) {
            this.spinner = false;
            this.files = response.data;
            var boton = document.getElementById("app");
            boton.classList.remove("preloader");
            this.editname = [];
            this.files.forEach((value, index) => {
              this.editname.push({ id: index, view: false });
              this.$set(value, "custom_file_name", null);
            });
          }
        });
    },
  },
  created() {
    this.search(null, null);
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
</style>
