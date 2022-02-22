<template>
  <div>
    <div class="media-message-container" v-on:dragover="drag = true">
      <!-- <div
        class="on-drag"
        v-if="drag"
        v-on:dragleave.prevent="drag = false"
        v-on:drop.prevent="onDrop($event)"
      >
        <p>Drop Here!!</p>
      </div> -->

      <div class="text-content">
        <div class="subject">
          <b-form-group>
            <b-form-input placeholder="Subject"></b-form-input>
          </b-form-group>
        </div>
        <div class="message">
          <b-form-group>
            <b-form-textarea> </b-form-textarea>
          </b-form-group>
        </div>
      </div>

      <div class="media-content">
        <div class="preview-file">
          <div class="file">
            <b-img :src="fileSelected" v-if="fileSelected != ''"></b-img>
          </div>
        </div>

        <div class="gallery">
          <div
            :class="['file', { 'border-selected': image == fileSelected }]"
            v-for="(image, index) in arrImages"
            :key="index"
          >
            <b-img :src="image" @click="previewFile(image)"></b-img>
          </div>

          <button variant="primary" @click="$refs.refInputEl.click()">
            <input
              ref="refInputEl"
              type="file"
              class="d-none"
              style="width: 200px; height: 200px"
              multiple
              @change="
                filesChange($event.target.name, $event.target.files);
                fileCount = $event.target.files.length;
              "
            />

            <feather-icon icon="PlusIcon" size="40" class="d-inline" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrImages: [
        "https://img.remediosdigitales.com/73012f/crd-2/840_560.jpg",
        "https://cdn.motor1.com/images/mgl/pVXNY/s3/purpose-built-moto-honda-cx500-cafe-racer---right-side-angle-view.jpg",
      ],

      fileSelected: "",

      drag: false,
    };
  },
  computed: {},
  methods: {
    previewFile(file) {
      console.log(file);
      this.fileSelected = file;
    },
    onDrop(event) {
      this.drag = false;
      event.preventDefault();
      console.log(event);
    },
    filesChange(fieldName, fileList) {
      console.log(fieldName);
      console.log(fileList);
      // // handle file changes
      // const formData = new FormData();

      // if (!fileList.length) return;

      // // append the files to FormData
      // Array.from(Array(fileList.length).keys()).map((x) => {
      //   formData.append(fieldName, fileList[x], fileList[x].name);
      // });

      // // save it
      // this.save(formData);
    },
  },
  mounted() {
    this.arrImages.length > 0
      ? (this.fileSelected = this.arrImages[0])
      : (this.fileSelected = "");
  },
};
</script>

<style lang="scss" scoped>
.media-message-container {
  position: relative;

  .on-drag {
    position: absolute;
    width: 100%;
    height: 75vh;
    background: grey;
    z-index: 10;
    opacity: 0.3;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: white;
      font-size: 50pt;
    }
  }

  .text-content {
    width: 100%;
    height: 25vh;
    overflow-y: hidden;

    .subject {
      padding-top: 30px;
      width: 70%;
      margin-left: 50%;
      transform: translateX(-50%);
    }

    .message {
      width: 70%;
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }

  .media-content {
    width: 100%;
    height: 50vh;

    .preview-file {
      width: 50%;
      height: 65%;
      margin-left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      align-items: center;

      .file {
        min-width: 30%;
        max-width: 60%;
        height: 80%;
        border-radius: 5px;
        color: #ff6358;
        transition: background 0.3s ease-in-out;
        margin-right: 10px;
        overflow: hidden;

        img {
          border-radius: 3px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
        }
      }
    }

    .divider {
      width: 70%;
      margin-left: 50%;
      transform: translateX(-50%);
    }

    .gallery {
      width: 50%;
      height: 35%;
      margin-left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 1px rgb(233, 233, 233) solid;

      .file {
        width: 75px;
        height: 75px;
        border-radius: 5px;
        background: white;
        color: #ff6358;
        transition: background 0.3s ease-in-out;
        margin-right: 10px;
        overflow: hidden;
        padding: 1px;

        img {
          border-radius: 3px;
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
        }
      }

      button {
        width: 75px;
        height: 75px;
        border: 3px #ff6358 solid !important;
        border-radius: 5px;
        background: white !important;
        color: #ff6358 !important;
        transition: background 0.3s ease-in-out;

        &:hover {
          background: #fff0ef;
        }
      }
    }
  }
}

.border-selected {
  border: 3px #ff6358 solid;
}
</style>