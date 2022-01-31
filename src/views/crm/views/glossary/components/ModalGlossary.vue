<template>
  <div>
    <b-modal
      modal
      :title="titleView"
      v-model="mutableIfModalCard"
      size="lg"
      modal-class="modal-primary"
      hide-footer
      body-class="mb-2"
      @hidden="closeModal"
      title-tag="h3"
      :no-close-on-backdrop="true"
    >
      <ValidationObserver ref="form">
        <div class="row" v-if="statusModal != '3'">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <ValidationProvider
              name="selectCategory"
              rules="required"
              v-slot="{ errors }"
            >
              <b-form-group label="Category">
                <v-select
                  @input="openModalCategory()"
                  v-model="selectCategory"
                  :options="categoriesModal"
                  :reduce="(val) => val.id"
                  label="name"
                  class="w-100"
                  :class="{ 'border border-danger': errors[0] }"
                ></v-select>
              </b-form-group>
            </ValidationProvider>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <ValidationProvider
              name="title"
              rules="required"
              v-slot="{ errors }"
            >
              <b-form-group label=" ">
                <b-input-group prepend="TITLE" size="md" class="mt-2" style>
                  <b-form-input
                    v-model="title"
                    :class="{ 'border border-danger': errors[0] }"
                  />
                </b-input-group>
              </b-form-group>
            </ValidationProvider>
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
                <span>DESCRIPTION</span>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="12">
            <div class="form-group mt-0">
              <ValidationProvider
                name="description"
                rules="required"
                v-slot="{ errors }"
              >
                <b-form-textarea
                  :disabled="statusDescription"
                  :class="{ 'border border-danger': errors[0] }"
                  style="border-radius: 0px 10px 10px 10px; height: 120px"
                  v-model="description"
                ></b-form-textarea>
              </ValidationProvider>
            </div>
          </b-col>
        </b-row>
      </ValidationObserver>
      <b-row v-if="statusModal != '3'">
        <b-col md="12" style="text-align: center" class="mt-3">
          <b-button
            variant="success"
            style="border-radius: 5px !important"
            @click="createGlossary()"
            v-if="!spinnerBtn && statusModal == '1'"
            >Save</b-button
          >
          <b-button
            variant="success"
            style="border-radius: 5px !important"
            @click="editGlossary()"
            v-if="!spinnerBtn && statusModal == '2'"
            >Update</b-button
          >
          <b-button
            variant="success"
            style="border-radius: 5px !important"
            disabled
            v-if="spinnerBtn"
          >
            <b-spinner small type="grow"></b-spinner>Loading...
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
    <modal-add-category
      v-if="modalChangingCategory"
      :ifModalCard="modalChangingCategory"
      @close="closeModalCategory"
    ></modal-add-category>
  </div>
</template>

<script>
import ModalAddCategory from "./ModalAddCategory.vue";
import vSelect from "vue-select";
import { mapGetters } from "vuex";
import GlossarydService from "../service/glossary.service";
export default {
  components: {
    vSelect,
    ModalAddCategory,
  },
  props: {
    ifModalCard: {
      type: Boolean,
    },
    categories: {
      type: [],
    },
    statusModal: {
      type: [Number, String],
    },
    objectGlossary: {
      type: Object,
    },
  },
  data() {
    return {
      id: null,
      spinnerBtn: false,
      title: "",
      modalChangingCategory: false,
      description: null,
      selectCategory: null,
      mutableIfModalCard: this.ifModalCard,
      objectGlossaryChange: null,
    };
  },
  computed: {
    categoriesModal() {
      let firstOption = {
        name: "Add Category",
        id: "123456##@",
      };
      return [firstOption, ...this.categories];
    },
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
    statusDescription() {
      return this.statusModal == "3" ? true : false;
    },
    titleView() {
      return this.statusModal == "3"
        ? this.objectGlossary.title
        : "CREATE GLOSSARY";
    },
  },
  methods: {
    createGlossary() {
      this.$refs.form.validate().then(async (success) => {
        if (!success) {
          return;
        }
        const confirm = await this.showConfirmSwal(
          "CREATE",
          "Are you sure?"
        );
        if (confirm.isConfirmed) {
          try {
            this.spinnerBtn = true;
            const params = {
              user_id: this.currentUser.user_id,
              module_id: this.$route.meta.module,
              category_id: this.selectCategory,
              title: this.title,
              description: this.description,
            };
            const data = await GlossarydService.createGlossary(params)
            this.showToast(
                  "success",
                  "top-right",
                  "Success",
                  "CheckIcon",
                  "Glossary Created"
                );
            this.spinnerBtn = false;
            this.$emit("updateGlossary", false);
          } catch (error) {
            console.log(error);
                this.showToast(
                  "danger",
                  "top-right",
                  "Error",
                  "XIcon",
                  "Something went wrong!"
                );
          }
        }
      });
    },
    editGlossary() {
      this.$refs.form.validate().then(async (success) => {
        if (!success) {
          return;
        }
        const confirm = await this.showConfirmSwal(
          "UPDATE",
          "Are you sure?"
        );
        if (confirm.isConfirmed){
          try{
            this.spinnerBtn = true;
            const params = {
              id: this.id,
              category: this.selectCategory,
              title: this.title,
              description: this.description,
            };
            const data = await GlossarydService.editGlossary(params)
            this.spinnerBtn = false;
            this.showToast(
                  "success",
                  "top-right",
                  "Success",
                  "CheckIcon",
                  "Glossary Updated"
                );
            this.$emit("updateGlossary", false);
          }catch(error){
            console.log(error)
            this.showToast(
                  "danger",
                  "top-right",
                  "Error",
                  "XIcon",
                  "Something went wrong!"
                );
          }
        }
      });
    },
    openModalCategory() {
      if (this.selectCategory == "123456##@") {
        if (this.modalChangingCategory == false) {
          this.modalChangingCategory = true;
        } else {
          this.modalChangingCategory = false;
        }
      }
    },
    closeModalCategory() {
      // this.fillCategories();
      this.$emit("updateCategory", false);
      this.selectCategory = null;
      this.modalChangingCategory = false;
    },
    closeModal() {
      this.$emit("close", false);
      this.objectGlossaryChange = null;
    },
    openModalEdit(item) {
      this.id = item.id;
      this.title = item.title;
      this.description = item.description;
      this.selectCategory = item.category_id;
    },
    initEdit() {
      this.objectGlossaryChange = this.objectGlossary;
      if (this.statusModal == "2" || this.statusModal == "3") {
        this.openModalEdit(this.objectGlossary);
      }
    },
  },
  created() {
    this.initEdit();
  },
};
</script>

