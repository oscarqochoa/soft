<template>
  <div>
    <header-slot>
      <template #actions>
        <b-button variant="success" @click="modalopen(1)">Create Glossary</b-button>
      </template>
    </header-slot>
    <b-card class="px-1">
      <filter-slot
        :filter="filter"
        :filter-principal="filterPrincipal"
        :total-rows="totalRows"
        :no-visible-principal-filter="true"
        :paginate="paginate"
        :start-page="startPage"
        :to-page="toPage"
        :send-multiple-sms="false"
        @reload="$refs['refClientsList'].refresh()"
      >
        <b-table
          slot="table"
          no-provider-filtering
          :api-url="clientRoute"
          ref="refClientsList"
          :items="myProvider"
          :fields="visibleFields"
          primary-key="id"
          table-class="text-wrap"
          responsive="sm"
          show-empty
          sticky-header="70vh"
          :current-page="paginate.currentPage"
          :per-page="paginate.perPage"
          :filter="searchInput"
        >
          <template #table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner class="align-middle mr-1"></b-spinner>
              <strong>Loading ...</strong>
            </div>
          </template>
          <template #cell(title)="data">
            <div class="d-flex flex-column justify-content-start align-items-start">
              <b-button
                variant="flat-primary"
                @click="modalopenEdit(3, data.item)"
                style="
                  padding-left: 2px;
                  padding-right: 2px;
                  padding-top: 5px;
                  padding-bottom: 5px;
                "
              >{{ data.item.title }}</b-button>
            </div>
          </template>
          <template #cell(created_at)="data">
            <div class="d-flex flex-column justify-content-start align-items-start">
              <span>{{ data.item.created_at | myGlobalDay }}</span>
            </div>
          </template>
          <template #cell(action)="data">
            <b-dropdown variant="link" no-caret :right="$store.state.appConfig.isRTL">
              <template #button-content>
                <feather-icon icon="MoreVerticalIcon" size="16" class="align-middle text-body" />
              </template>
              <b-dropdown-item @click="modalopenEdit(2, data.item)">
                <!-- <feather-icon icon="EditIcon" /> -->
                <span class="align-middle ml-50">Edit</span>
              </b-dropdown-item>
              <b-dropdown-item @click="deleteGlossary(data.item)">
                <!-- <feather-icon icon="TrashIcon" /> -->
                <span class="align-middle ml-50">Delete</span>
              </b-dropdown-item>
            </b-dropdown>
          </template>
        </b-table>
      </filter-slot>
      <modal-glossary
        v-if="modalChanging"
        :ifModalCard="modalChanging"
        :categories="categories"
        @close="closeModal"
        @updateCategory="updateCategory"
        @updateGlossary="updateGlossary"
        :statusModal="statusModal"
        :objectGlossary="objectGlossary"
      ></modal-glossary>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import vSelect from "vue-select";
import ModalGlossary from "./components/ModalGlossary.vue";
import { amgApi } from "@/service/axios";
import FilterSlot from "@/views/crm/views/sales-made/components/slots/FilterSlot.vue";
import GlossarydService from "./service/glossary.service";
export default {
  components: {
    vSelect,
    ModalGlossary,
    FilterSlot
  },
  data() {
    return {
      totalRows: 0,
      paginate: {
        currentPage: 1,
        perPage: 10
      },
      filterPrincipal: {
        type: "input",
        inputType: "text",
        placeholder: "Client...",
        model: ""
      },
      searchInput: "",
      created_by: null,
      categorySearch: null,
      startdate: "",
      enddate: "",
      startPage: null,
      toPage: null,
      totalData: "",
      currentPage: 1,
      perPage: 10,
      perPageOptions: [10, 25, 50, 100],
      filterController: false,
      arrayColumns: [
        {
          key: "category",
          label: "Category",
          visible: true
        },
        {
          key: "title",
          label: "Title",
          visible: true
        },
        {
          key: "nameuser",
          label: "Created By",
          visible: true
        },
        {
          key: "created_at",
          label: "Created",
          visible: true
        },
        {
          key: "action",
          label: "Actions",
          visible: true
        }
      ],
      fromToObject: {
        from: null,
        to: null
      },
      categories: [],
      modalChanging: false,
      statusModal: "",
      objectGlossary: null,
      filter: [
        {
          type: "select",
          margin: true,
          showLabel: true,
          label: "Category",
          model: null,
          options: [],
          reduce: "id",
          selectText: "name",
          cols: 12
        },
        {
          type: "datepicker",
          margin: true,
          showLabel: true,
          label: "From",
          placeholder: "Date",
          class: "font-small-3",
          model: null,
          locale: "en",
          dateFormatOptions: {
            year: "numeric",
            month: "numeric",
            day: "numeric"
          },
          cols: 6
        },
        {
          type: "datepicker",
          margin: true,
          showLabel: true,
          label: "To",
          placeholder: "Date",
          class: "font-small-3",
          model: null,
          locale: "en",
          dateFormatOptions: {
            year: "numeric",
            month: "numeric",
            day: "numeric"
          },
          cols: 6
        }
      ]
    };
  },
  computed: {
    clientRoute() {
      return "/glossary/get-all-glossaries";
    },
    visibleFields() {
      return this.arrayColumns.filter(column => column.visible);
    },
    ...mapGetters({
      currentUser: "auth/currentUser"
    })
  },
  methods: {
    async deleteGlossary(item) {
      const confirm = await this.showConfirmSwal("DELETE", "Are you sure?");
      if (confirm.isConfirmed) {
        try {
          this.addPreloader();
          const data = await GlossarydService.deleteGlossary({
            user_id: this.currentUser.id,
            id: item.id
          });
          this.removePreloader();
          this.showToast(
            "success",
            "top-right",
            "Success",
            "CheckIcon",
            "Saved Successfully"
          );
          this.resetSearch();
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
    },
    updateGlossary() {
      this.modalChanging = false;
      this.$refs.refClientsList.refresh();
    },
    updateCategory() {
      this.getCategories();
    },
    modalopen(num) {
      this.statusModal = num;
      if (this.modalChanging == false) {
        this.modalChanging = true;
      } else {
        this.modalChanging = false;
      }
    },
    modalopenEdit(num, objectGlossary) {
      this.statusModal = num;
      this.objectGlossary = objectGlossary;
      if (this.modalChanging == false) {
        this.modalChanging = true;
      } else {
        this.modalChanging = false;
      }
    },
    closeModal() {
      this.modalChanging = false;
      this.objectGlossary = null;
    },
    myProvider(ctx) {
      const promise = amgApi.post(`${ctx.apiUrl}`, {
        page: ctx.currentPage,
        perPage: ctx.perPage,
        created_by: this.created_by,
        category: this.filter[0].model,
        startdate: this.filter[1].model,
        enddate: this.filter[2].model
      });

      // Must return a promise that resolves to an array of items
      return promise.then(data => {
        // Pluck the array of items off our axios response
        const items = data.data.data;
        this.startPage = data.data.from;
        this.currentPage = data.data.current_page; //
        this.perPage = data.data.per_page; //
        this.nextPage = this.startPage + 1; //
        this.endPage = data.data.last_page; //
        this.totalData = data.data.total;
        this.totalRows = data.data.total;
        this.toPage = data.data.to;
        // Must return an array of items or an empty array if an error occurred
        return items || [];
      });
    },
    resetSearch() {
      this.categorySearch = null;
      this.searchInput = "";
      this.fromToObject.from = null;
      this.fromToObject.to = null;
      this.$refs.refClientsList.refresh();
    },
    async getCategories() {
      try {
        const res = await GlossarydService.getCategories();
        this.categories = res.data;
        this.filter[0].options = res.data;
      } catch (error) {
        console.error(error);
        this.showToast(
          "danger",
          "top-right",
          "Error",
          "XIcon",
          "Something went wrong!"
        );
      }
    }
  },
  created() {
    this.getCategories();
  }
};
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
  height: 40px;
}
.per-page-datepicker {
  width: 180px;
}
td.div {
  width: 100% !important;
}
@media (max-width: 1024px) {
  .column-table {
    display: flex;
    flex-direction: column;
  }
  .per-page-selector {
    width: 100px;
    height: 40px;
  }
}
@media (max-width: 740px) {
  .per-page-datepicker {
    width: 110px;
  }
  .button-top {
    margin-bottom: 22px;
  }
  .per-page-selector {
    width: 100px;
    height: 40px;
  }
}
// b-table{
//    width: 100%;;
// }
</style>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
@import "@core/scss/vue/libs/vue-sweetalert.scss";
</style>

