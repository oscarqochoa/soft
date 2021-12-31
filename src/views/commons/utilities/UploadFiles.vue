<template>
  <label :for="source">
    <amg-icon icon="PaperclipIcon" class="font-weight-bold" />
    <input
      type="file"
      :id="source"
      :accept="image ? 'image/png, image/jpeg' : '*'"
      v-on:change="onInputChange"
      :multiple="!single"
      style="display: none"
    />
  </label>
</template>

<script>
export default {
  name: "UploadFiles",
  props: {
    filesArray: Array,
    single: Boolean,
    image: Boolean,
    errorDrag: {
      type: Boolean,
      default: false,
    },
    source: {
      type: String,
      default: "file",
    },
  },
  data() {
    return {
      images: [],
      disable: {
        upload: false,
      },
      errorFile: false,
      files: [],
      disable: {
        upload: false,
      },
      folder_id: "",
      sendto: "",
      responsable: "",
      result: "",
      isDragging: false,
      dragCount: 0,
    };
  },
//   mounted() {
//     Array.from(this.filesArray).forEach((file) => this.addImage(file));
//   },
  methods: {
    imageFile(filename) {
      var extension = filename.split(".").pop();
      switch (extension) {
        case "jpg":
        case "png":
        case "gif":
          return "/assets/images/drag-drop/ext_files/jpg.png";
        case "xls":
        case "xlsx":
          return "/assets/images/drag-drop/ext_files/excel.png";
        case "html":
          return "html";
        case "pdf":
          return "/assets/images/drag-drop/ext_files/pdf.png";
        default:
          return "/assets/images/drag-drop/ext_files/archivodesc.png";
      }
    },
    addImage(file) {
      this.files.push(file);
      const img = new Image(),
        reader = new FileReader();
      reader.onload = (e) => this.images.push(e.target.result);
      reader.readAsDataURL(file);
    },
    onInputChange(e) {
      const files = e.target.files;
      Array.from(files).forEach((file) => this.addImage(file));
      this.$emit("input", this.files);
    },
    getFileSize(size) {
      const fSExt = ["Bytes", "KB", "MB", "GB"];
      let i = 0;

      while (size > 900) {
        size /= 1024;
        i++;
      }
      return `${Math.round(size * 100) / 100} ${fSExt[i]}`;
    },
    removeFile(e, key) {
      e.preventDefault();
      this.files.splice(key, 1);
      this.images.splice(key, 1);
      this.$emit("input", this.files);
    },
    OnDragEnter(e) {
      e.preventDefault();

      this.dragCount++;
      this.isDragging = true;
      return false;
    },
    OnDragLeave(e) {
      e.preventDefault();
      this.dragCount--;
      if (this.dragCount <= 0) this.isDragging = false;
    },
    onDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      this.isDragging = false;
      const files = e.dataTransfer.files;
      Array.from(files).forEach((file) => this.addImage(file));
      this.$emit("input", this.files);
    },
    isSingle(e) {
      if (this.images.length > 0 && this.single) {
        e.preventDefault();
      }
    },
  },
};
</script>

<style>
.details {
  background-color: transparent !important;
}
</style>
