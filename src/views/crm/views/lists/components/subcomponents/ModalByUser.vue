<template>
  <div>
    <b-modal
      modal
      centered
      :title="`${nameUser}`"
      v-model="mutableIfModalCard"
      size="lg"
      modal-class="modal-primary"
      hide-footer
      @hidden="closeModal"
      title-tag="h3"
    >
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6">
          <b-form-group label="Filter by:">
            <v-select
              v-model="filters[0].model"
              :options="filters[0].options"
              :label="filters[0].labelSelect"
              class="w-100"
              :reduce="(val) => val[filters[0].primaryKey]"
              @input="$refs.refClientsList.refresh()"
            />
          </b-form-group>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3">
          <b-form-group>
            <b-input-group
              prepend="MISSING"
              size="md"
              class="pt-2"
              style="margin-top: 6px"
            >
              <b-form-input disabled :value="`${totalMissing}`" />
            </b-input-group>
          </b-form-group>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3">
          <b-form-group>
            <b-input-group
              prepend="DONE"
              size="md"
              class="pt-2"
              style="margin-top: 6px"
            >
              <b-form-input disabled :value="`${totalDone}`" />
            </b-input-group>
          </b-form-group>
        </div>
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
      >
        <template #table-busy>
          <div class="text-center text-primary my-2">
            <b-spinner class="align-middle mr-1"></b-spinner>
            <strong>Loading ...</strong>
          </div>
        </template>
        <template #cell(credit_report)="data">
          <div
            class="d-flex flex-column justify-content-start align-items-start"
          >
            <span v-if="data.item.credit_report == '1'" class="text-danger">
              NO
            </span>
            <span v-else class="text-blue"> YES </span>
          </div>
        </template>
        <template #cell(done)="data">
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <b-form-checkbox :disabled="rolByUser"
            v-model="data.item.done" :value="1"   
            @change="callead(data.item.done,data.item.lead_id,data.item.id_list,data.item.user_id)">
            
            </b-form-checkbox>
          </div>
        </template>
      </b-table>
    </b-modal>
  </div>
</template>


<script>
import { amgApi } from "@/service/axios";
import vSelect from "vue-select";
import { mapGetters } from "vuex";
export default {
  components: {
    vSelect,
  },
  props: {
    objectUser: {
      type: Object,
    },
    nameUser:{
      type:String,
    },
    id:{
      type:[Number, String],
    },
    ifModalCard: {
      type: Boolean,
    },
    idByUser: {
      type: [Number, String],
    },
  },
  data() {
    return {
      statusCheck:true,
      totalMissing: 0,
      totalDone: 0,
      mutableIfModalCard: this.ifModalCard,
      filters: [
        {
          options: [
            { value: 0, label: "All" },
            { value: 1, label: "Missing" },
            { value: 2, label: "Done" },
          ],
          model: "",
          primaryKey: "value",
          labelSelect: "label",
          cols: 12,
          md: 2,
          visible: true,
        },
      ],
      arrayColumns: [
        {
          key: "lead_name",
          label: "Names",
          visible: true,
        },
        {
          key: "status_lead",
          label: "Status",
          visible: true,
        },
        {
          key: "credit_report",
          label: "CR",
          visible: true,
        },
        {
          key: "mobile",
          label: "Mobile",
          visible: true,
        },
        {
          key: "done",
          label: "Done",
          visible: true,
        },
      ],
    };
  },
  computed: {
    visibleFields() {
      return this.arrayColumns.filter((column) => column.visible);
    },
    filterId() {
      return this.filters[0].model;
    },
    clientRoute() {
      return "/showlist";
    },
    rolByUser(){
      return this.currentUser.arrRoles[0].role_id ==1 || this.currentUser.arrRoles[0].role_id ==2? true:false
    },
    ...mapGetters({
      currentUser: "auth/currentUser",
    }),
  },
  methods: {
    checkveri(state){
        console.log(state)
    },
    closeModal() {
      this.$emit("close", false);
    },
    myProvider(ctx) {
      const promise = amgApi.post(`${ctx.apiUrl}`, {
        id: this.id,
        listid: this.idByUser,
        filter: this.filterId,
      });

      return promise.then((data) => {
        let items = data.data;
        if(items.length != 0){
          this.totalMissing = items[0].quantity_pending;
          this.totalDone = items[0].quantity_done;
          items.map((item) => { item.selected = false})
        }else{
          this.totalMissing = 0
          this.totalDone =0
        }
        return items || [];
      });
    },
    callead(state,idlead, idlist, iduser) {
      
      if (state == "1") {
        amgApi
          .post("/callead", {
            idlead: idlead,
            idlist: idlist,
            iduser: iduser,
            status: 1,
            filter: this.datafilter,
          })
          .then(() => {
            this.$refs.refClientsList.refresh();
            this.$emit("updateList", false);
            // this.listsgroups(1);
            // this.modalopen(this.idlist, this.listmodal, this.datafilter);
          });
      } else {
        amgApi
          .post("/callead", {
            idlead: idlead,
            idlist: idlist,
            iduser: iduser,
            status: 0,
          })
          .then((response) => {
            this.$refs.refClientsList.refresh();
             this.$emit("updateList", false);
            // this.listsgroups(1);
            // this.modalopen(this.idlist, this.listmodal, this.datafilter);
          });
      }
    },
  },
  created() {},
};
</script>