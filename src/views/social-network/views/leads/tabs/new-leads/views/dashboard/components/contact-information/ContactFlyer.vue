<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div>
          <template v-if="fyerReply.flyer_id">
            <template v-if="initialFlyer">
              <div>
                <label style="max-width: 22rem" class="p-relative">
                  <b-img-lazy
                    v-bind="mainProps"
                    :src="fyerReply.route"
                  ></b-img-lazy>
                  <span class="badge state-badge" :class="flyerState">{{
                    fyerReply.flyer_state
                  }}</span>
                </label>
              </div>
            </template>
            <template v-else>
              <div
                :value="item.id"
                v-for="item in flyers"
                :key="item.id"
                v-show="fyerReply.flyer_id == item.id"
              >
                <label
                  :for="'flyer_' + item.id"
                  style="max-width: 22rem"
                  class="p-relative"
                >
                  <b-img-lazy
                    v-bind="mainProps"
                    :src="item.route_thumb"
                  ></b-img-lazy>
                  <span class="badge state-badge" :class="flyerStateNew">{{
                    item.state
                  }}</span>
                </label>
              </div>
            </template>
          </template>
          <div class="p-relative" v-if="!fyerReply.flyer_id">
            <b-avatar rounded size="22rem">
              <template #default>
                <span class="b-avatar-text" style="font-size: calc(2.4rem)"
                  >UNKNOWN</span
                >
              </template>
            </b-avatar>
          </div>
        </div>
      </div>

      <div class="col-lg-8 mt-2">
        <div class="text-right">
          <button
            @click="openModalChooseFlyer(false)"
            class="btn btn-orange btn-sm rounded"
            v-if="editFlyer"
          >
            Select
          </button>
        </div>
      </div>
      <div class="col-lg-4 text-center mt-2">
        <button
          v-if="!editFlyer"
          class="btn-sm btn-orange clickable"
          title="Edit Flyer"
          @click="edit()"
        >
          <i class="fas fa-pen text-white"></i>
        </button>
        <template v-else>
          <button
            class="btn-sm btn-update-sn padding-little-icons"
            title="Update Flyer"
            @click="update()"
          >
            <img src="/images/new-icons/check-w.png" class alt="Update" />
          </button>
          <button
            class="btn-sm btn-cancel-sn padding-little-icons-cancel"
            title="Cancel Edit"
            @click="cancel()"
          >
            <img src="/images/new-icons/trash-w.png" class alt="Cancel" />
          </button>
        </template>
      </div>
    </div>

    <b-modal
      id="modalChooseFlyer"
      v-model="modalChooseFlyer"
      header-class="bg-white p-4 flex-between"
      hide-footer="hide-footer"
      size="xl"
      scrollable="scrollable"
      body-class="search-global-modal"
      modal-class="flyer-choose-modal"
    >
      <template #modal-header="{ close }">
        <span>
          <h3 class="roboto-class" style="color: #706989">
            <img class="mr-2" :src="imgFanpage" style="height: 55px" />
            <span>{{ titleModalChoose }}</span>
          </h3>
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
      <modal-choose-flyers
        :flyersList="flyers"
        @click="closeModalChooseFlyer"
        :flyer_id="this.fyerReply.flyer_id"
        :unknown="unknown"
      ></modal-choose-flyers>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    fyerReply: {
      type: Object,
      default: () => ({}),
    },
    reply: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      //flyers
      editFlyer: false,
      modalChooseFlyer: false,
      flyers: [],
      unknown: false,
      titleModalChoose: "",
      imgFanpage: "",
      initialFlyer: true,
      returnFlyer: null,

      //lazy Img
      mainProps: {
        center: false,
        fluidGrow: true,
        blank: true,
        blankColor: "#bbb",
        height: 364,
        block: false,
        fluid: false,
        rounded: true,
        thumbnail: true,
      },
      blankImgProps: {
        blank: true,
        width: 364,
      },
    };
  },
  created() {},
  computed: {
    flyerState() {
      if (this.fyerReply.flyer_state == "CA") {
        return "badge-primary";
      } else if (this.fyerReply.flyer_state == "TX") {
        return "badge-success";
      } else {
        return "badge-dark";
      }
    },
    flyerStateNew() {
      if (this.flyers[0].state == "CA") {
        return "badge-primary";
      } else if (this.flyers[0].state == "TX") {
        return "badge-success";
      } else {
        return "badge-dark";
      }
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
    edit() {
      swal
        .fire({
          imageUrl: "/images/new-icons/warning-icon.png",
          title: "Are you sure?",
          text: "Do you want to edit the flyer?",
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
            this.returnFlyer = JSON.parse(
              JSON.stringify(this.fyerReply.flyer_id)
            );
            this.editFlyer = true;
          }
        });
    },
    cancel() {
      swal
        .fire({
          imageUrl: "/images/new-icons/warning-icon.png",
          title: "Are you sure?",
          text: "Changes will be lost!",
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
            this.fyerReply.flyer_id = this.returnFlyer;
            this.editFlyer = false;
          }
        });
    },
    update() {
      swal
        .fire({
          title: "Are you Sure ? ",
          text: `The flyer will be save!`,
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#ab9220",
          cancelButtonColor: "#8f9194",
          confirmButtonText: "Yes",
        })
        .then((r) => {
          if (r.value) {
            this.addPreloader();
            this.updateFunction();
          }
        });
    },
    async updateFunction() {
      this.removePreloader();
      try {
        let params = {
          id_reply: this.fyerReply.reply_id,
          id_flyer: this.fyerReply.flyer_id,
        };
        let update = await axios.post("/api/update-flyer-reply-by-id", params);

        //Show in the front the new flyer
        this.reply.flyer_id = this.fyerReply.flyer_id;
        this.flyers.forEach((flyer) => {
          if (flyer.id == this.fyerReply.flyer_id) {
            this.reply.flyer_route = flyer.route_thumb;
          }
        });
        this.removePreloader();
        swal.fire("Updated!", "Information was saved", "success");
        this.editFlyer = false;
      } catch (error) {
        console.log(error);
        this.removePreloader();
        swal.fire(
          "Error!",
          "The information could not be saved, contact support or try again",
          "error"
        );
      }
    },
    //flyers
    async getFlyers() {
      let response = await axios.post("/api/get-flyers", {
        program_id: this.fyerReply.fanpage_id,
        state: this.fyerReply.stAD,
      });
      this.flyers = response.data;
    },

    async openModalChooseFlyer(unknown) {
      this.addPreloader();
      await this.getFlyers();
      this.titleModalChoose = this.fyerReply.fanpage_name;
      this.modalChooseFlyer = true;
      this.unknown = unknown;
      this.removePreloader();
    },

    closeModalChooseFlyer(flyer_id) {
      this.modalChooseFlyer = false;
      this.fyerReply.flyer_id = flyer_id;
      this.initialFlyer = false;
    },
  },
};
</script>

<style scoped>
.unknownClassFlyer {
  position: absolute;
  top: 10.7rem;
  font-size: 37px;
  left: 7rem;
}

.state-badge {
  font-size: 12px;
  position: absolute;

  top: 5px;
  right: 5px;
}
.padding-little-icons {
  padding: 0px 4px;
  width: 21px;
  height: 23px;
}

.padding-little-icons-cancel {
  padding: 0px 5.5px;
  width: 21px;
  height: 23px;
}
</style>
