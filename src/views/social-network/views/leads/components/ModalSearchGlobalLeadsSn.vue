<template>
  <div>
    <b-modal
      modal
      title="GLOBAL SEARCH"
      v-model="mutableShow"
      size="lg"
      modal-class="modal-primary"
      hide-footer
      body-class="mb-2"
      @hidden="close"
      title-tag="h3"
    >
      <b-container>

        <b-table
          slot="table"
          class="position-relative"
          ref="refUserListTable"
          primary-key="id"
          empty-text="No matching records found"
          select-mode="multi"
          responsive="sm"
          table-class="text-nowrap"
          sticky-header="50vh"
          small
          show-empty
          :fields="fields"
          :items="S_SEARCH_GLOBAL_LEADS_SN"
        >
          <template #table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner class="align-middle mr-1" />
              <strong>Loading ...</strong>
            </div>
          </template>

        </b-table>

        <!-- <b-table-simple >
          <b-thead>
            <b-tr>
              <b-th>Status</b-th>
              <b-th>Fanpage</b-th>
              <b-th>Recommendations	</b-th>
              <b-th>Created date</b-th>
              <b-th>Owner</b-th>
              <b-th>From</b-th>
            </b-tr>
          </b-thead> -->
          <!-- <b-tbody>
            <b-tr v-for="(item, index) in S_SEARCH_GLOBAL_LEADS_SN" :key="index">
              <b-td>
                  {{item.status}}
              </b-td>
              <b-td>
                  {{item.logo}}
              </b-td>
              <b-td>
                  {{item.programs}}
              </b-td>
              <b-td>
                  {{item.created_at}}
              </b-td>
              <b-td>
                  {{item.owner}}
              </b-td>
              <b-td>
                  <span>tracking</span>
              </b-td>
              <b-td>
                  <span>action</span>
              </b-td>
            </b-tr>
          </b-tbody> -->
        <!-- </b-table-simple > -->
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    show: {
      type: Boolean,
    },
  },
  data() {
    return {
      mutableShow: this.show,
      fields:[
        {
          key: 'nickname',
          label: 'Nickname',
          sortable: false,
        },
        {
          key: 'state_hour',
          label: 'ST/AD',
          sortable: false,
        },
        {
          key: 'sourcesname_id',
          label: 'Source',
          sortable: false,
        },
        {
          key: 'mobile',
          label: 'Mobile',
          sortable: false,
        },
        {
          key: 'status',
          label: 'Status',
          sortable: false,
        },
      ]
    };
  },
  computed: {
    ...mapState({
      S_SEARCH_GLOBAL_LEADS_SN: (state) =>
        state.SocialNetworkLeadsStore.S_SEARCH_GLOBAL_LEADS_SN,
    }),
  },
  methods: {
    close() {
      this.$emit("onClose");
    },
  },
};
</script>