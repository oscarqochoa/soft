<template>
  <div>
    <b-modal
      id="modal-xs"
      title-class="h3"
      size="lg"
      v-model="mutableIfModalCard"
      modal-class="modal-primary"
      top
      title="CREATE GLOSSARY"
      @hidden="closeModal"
      hide-footer
    >
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6">
          <b-form-group label="Category">
            <v-select
              v-model="selectCategory"
              :options="categories"
              label="name"
              class="w-100"
            />
          </b-form-group>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6">
          <b-form-group label=" ">
            <b-input-group prepend="TITLE" size="md" class="mt-2" style="">
              <b-form-input />
            </b-input-group>
          </b-form-group>
        </div>
      </div>
      <b-row>
        <b-col md="12">
          <b-row class="class-inline">
            <b-col
              md="5"
              class="class-campo-icon add-class-campo-icon"
              style="border-radius: 10px 10px 0px 0px"
            >
              <span>DESCRIPTION </span>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="12">
          <div class="form-group mt-0">
            <b-form-textarea
              class="textarea-style wysiwyg-notes w-100"
              style="border-radius: 0px 10px 10px 10px; height: 120px"
              v-model="description"
            ></b-form-textarea>
          </div>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import vSelect from "vue-select";
export default {
  components: {
    vSelect,
  },
  props: {
    ifModalCard: {
      type: Boolean,
    },
    categories: {
      type: [],
    },
  },
  data() {
    return {
      description: null,
      selectCategory: null,
      mutableIfModalCard: this.ifModalCard,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close", false);
    },
  },
};
</script>