<template>
  <div>
    <b-card no-body class="mb-1">
      <div class="m-2">
        <b-row>
          <b-col
            cols="12"
            md="6"
            lg="6"
            sm="6"
            class="d-flex align-items-start justify-content-start mb-1 mb-md-0"
          >
            <!-- <span
                        style="display: inline-block;margin-left: 10px;color: black;"
                      >Total Leads Pending : 146789</span> -->
          </b-col>
          <b-col
            cols="12"
            md="6"
            lg="6"
            sm="6"
            class="d-flex align-items-end justify-content-end mb-1 mb-md-0"
          >
            <b-button variant="success" @click="modalopen" >
              CREATE GLOSSARY
            </b-button>
            
          </b-col>
        </b-row>
      </div>
      <div class="mx-2 mb-2 mt-2">
        <b-row>
          <b-col
            cols="12"
            sm="6"
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-start
            "
          >
            <span class="text-muted"
              >Showing {{ startPage }} to {{ toPage }} of
              {{ totalData }} entries</span
            >
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-end
            "
          >
            <b-pagination
              v-model="currentPage"
              :total-rows="totalData"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon icon="ChevronLeftIcon" size="18" />
              </template>
              <template #next-text>
                <feather-icon icon="ChevronRightIcon" size="18" />
              </template>
            </b-pagination>
          </b-col>
        </b-row>
      </div>
      <div class="m-2">
        <!-- Table Top -->
        <b-row>
          <!-- Per Page -->
          <b-col
            cols="12"
            md="3"
            class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
          >
            <label>Show</label>
            <v-select
              v-model="perPage"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="perPageOptions"
              :clearable="false"
              class="per-page-selector d-inline-block mx-50"
            />
            <label class="mr-2">entries</label>
            <feather-icon
              class="cursor-pointer"
              icon="RefreshCcwIcon"
              size="20"
              @click="resetSearch"
            />
          </b-col>
          <!-- Search -->
          <b-col cols="12" md="9">
            <div class="d-flex align-items-end justify-content-end">
              <b-form-group
                label="Category"
                label-for="from"
                class="mb-md-0 mb-2"
              >
                <v-select
                  v-model="categorySearch"
                  :options="categories"
                  :clearable="false"
                  :reduce="(val) => val.id"
                  label="name"
                  class="per-page-datepicker d-inline-block mx-50"
                />
              </b-form-group>
              <b-form-group label="From" label-for="from" class="mb-md-0 mb-2">
                <b-form-datepicker
                  class="per-page-datepicker d-inline-block mx-50"
                  id="from"
                  :date-format-options="{
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                  }"
                  v-model="fromToObject.from"
                />
              </b-form-group>
              <!-- <label>{{filter.label}}</label> -->

              <b-form-group label="To" label-for="to" class="mb-md-0 mb-2">
                <b-form-datepicker
                  class="per-page-datepicker d-inline-block mx-50"
                  id="to"
                  :date-format-options="{
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                  }"
                  v-model="fromToObject.to"
                />
              </b-form-group>
              <!-- <label>{{filter.label}}</label> -->

              <b-button
                variant="primary"
                class="button-top"
                @click="$refs.refClientsList.refresh()"
              >
                <div class="d-flex justify-content-between">
                  <span class="mr-50"
                    ><feather-icon icon="FilterIcon" size="15"
                  /></span>

                  <span class="text-nowrap">{{ "Search" }}</span>
                </div>
              </b-button>
            </div>
          </b-col>
        </b-row>
      </div>
      <b-table
        v-scrollbar
        :api-url="clientRoute"
        ref="refClientsList"
        :items="myProvider"
        :fields="visibleFields"
        primary-key="id"
        table-class="text-nowrap"
        responsive="sm"
        show-empty
        sticky-header="50vh"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="searchInput"
      >
        <template #table-busy>
          <div class="text-center text-primary my-2">
            <b-spinner class="align-middle mr-1"></b-spinner>
            <strong>Loading ...</strong>
          </div>
        </template>
        <template #cell(created_at)="data">
          <div
            class="d-flex flex-column justify-content-start align-items-start"
          >
            <span>
              {{ data.item.created_at | myGlobalDay }}
            </span>
          </div>
        </template>
      </b-table>
    </b-card>
    <modal-glossary
       v-if="modalChanging"
      :ifModalCard="modalChanging"
      :categories="categories"
      @close="closeModal"
      ></modal-glossary>
  </div>
</template>

<script>
import { amgApi } from "@/service/axios";
import vSelect from "vue-select";
import ModalGlossary from './components/ModalGlossary.vue';
export default {
  components: {
    vSelect,
    ModalGlossary,
  },
  data() {
    return {
      searchInput: "",
      created_by: null,
      categorySearch: null,
      startdate: "",
      enddate: "",
      startPage: "",
      toPage: "",
      totalData: "",
      currentPage: 1,
      perPage: 10,
      perPageOptions: [10, 25, 50, 100],
      filterController: false,
      arrayColumns: [
        {
          key: "category",
          label: "Category",
          visible: true,
        },
        {
          key: "title",
          label: "Title",
          visible: true,
        },
        {
          key: "nameuser",
          label: "Created By",
          visible: true,
        },
        {
          key: "created_at",
          label: "Created",
          visible: true,
        },
        {
          key: "action",
          label: "Actions",
          visible: true,
        },
      ],
      fromToObject: {
        from: null,
        to: null,
      },
      categories: [],
      modalChanging:false,
    };
  },
  computed: {
    clientRoute() {
      return "/glossary/get-glossaries";
    },
    visibleFields() {
      return this.arrayColumns.filter((column) => column.visible);
    },
  },
  methods: {
    modalopen() {
        console.log(this.modalChanging)
      if (this.modalChanging == false) {
        this.modalChanging = true;
      } else {
        this.modalChanging = false;
      }
    },
    closeModal() {
      this.modalChanging = false;
    },
    myProvider(ctx) {
      const promise = amgApi.post(`${ctx.apiUrl}`, {
        page: ctx.currentPage,
        created_by: this.created_by,
        category: this.categorySearch,
        startdate: this.fromToObject.from,
        enddate: this.fromToObject.to,
      });

      // Must return a promise that resolves to an array of items
      return promise.then((data) => {
        // Pluck the array of items off our axios response
        const items = data.data.data;
        this.startPage = data.data.from;
        this.currentPage = data.data.current_page; //
        this.perPage = data.data.per_page; //
        this.nextPage = this.startPage + 1; //
        this.endPage = data.data.last_page; //
        this.totalData = data.data.total;
        this.toPage = data.data.to;
        // Must return an array of items or an empty array if an error occurred
        return items || [];
      });
    },
    search() {
      const params = {
        page: 1,
        created_by: this.created_by,
        category: this.categorySearch,
        startdate: this.startdate,
        enddate: this.enddate,
      };
      amgApi.post("/glossary/get-glossaries", params).then((response) => {
        console.log(response.data);
        // if (response.status == 200) {
        //   this.glossaries = response.data.data;
        //   this.start_page = response.data.current_page; --
        //   this.perpage = response.data.per_page; ---
        //   this.next_page = this.start_page + 1;  ---
        //   this.last_page = response.data.last_page; ---
        //   this.total_data = response.data.total;
        //   this.spinner = false;
        //   this.isNoRefresh = false;
        // }
      });
    },
    resetSearch() {
      //   this.searchInput = "";
      //   this.fromToObject.from = null
      //   this.fromToObject.to = null
      //   this.$refs.refClientsList.refresh();
      console.log(this.categorySearch);
    },
    getCategories() {
      amgApi.get("/glossary/get-categories").then((res) => {
        this.categories = res.data;
      });
    },
  },
  created() {
    // this.search();
    this.getCategories();
  },
};
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
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
}
@media (max-width: 740px) {
  .per-page-datepicker {
    width: 110px;
  }
  .button-top {
    margin-bottom: 22px;
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

