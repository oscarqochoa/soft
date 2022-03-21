<template>
  <div>
    <b-modal
      title="GLOBAL SEARCH"
      v-model="mutableShow"
      size="xl"
      hide-footer
      body-class="p-0"
      @hidden="close"
      title-tag="h3"
    >
      <template #default>
        <b-table
          slot="table"
          ref="refUserListTable"
          class="position-relative font-small-3"
          primary-key="id"
          empty-text="No matching records found"
          select-mode="multi"
          responsive="sm"
          table-class="text-nowrap"
          sticky-header="73vh"
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

          <!-- Column: Name -->
          <template #cell(nickname)="data">
            <div style="white-space: pre-wrap">
              <router-link
                :class="textLink"
                :to="`/social-network/leads/new/dashboard/${data.item.id}`"
                target="_blank"
                >{{ data.item.nickname
                    ? data.item.nickname
                    : data.item.not_nickname }}</router-link
              >
              <br />
              <span>{{ data.item.lead_name }}</span>
            </div>
          </template>

          <!-- Column: Status -->
          <template #cell(status)="data">
            <b-badge
              :variant="`light-${resolveLeadSnStatusVariant(data.item.status)}`"
              class="text-capitalize w-100"
              style="padding-top: 5px; padding-bottom: 5px"
              >{{ data.item.status }}</b-badge
            >
          </template>
          <template #cell(sourcesname_id)="data">
            <div>
              <div v-if="data.item.sourcesname_id == 17" class="text-center">
                <b-img
                  fluid
                  :src="baseUrl + '/images/social-network/facebook.png'"
                  style="width: 30px"
                />
              </div>
              <div v-if="data.item.sourcesname_id == 32" class="text-center">
                <b-img
                  fluid
                  :src="baseUrl + '/images/social-network/google.png'"
                  style="width: 30px"
                />
              </div>
            </div>
          </template>
          <!-- Column: Fanpage -->
          <template #cell(fanpage)="data">
            <b-img
              thumbnail
              fluid
              :src="baseUrl + data.item.logo"
              style="width: 50px"
              v-if="data.item.logo"
            />
            <b-badge variant="primary" v-else style="width: 50px">
              CRM
            </b-badge>
          </template>

          <!-- Column: Recomendations -->
          <template #cell(programs)="data">
            <template v-for="(program, key) in JSON.parse(data.item.programs)">
              <span :key="key">{{ program }}</span>
              <br :key="JSON.parse(data.item.programs).length + key" />
            </template>
          </template>

          <!-- Column: Created Date -->
          <template #cell(created_at)="data">
            <small>{{ data.item.created_at | myGlobalDay }}</small>
          </template>

          <template #cell(from)="data">
            <b-badge variant="primary" class="w-100">
              {{
                resolveFromSn(
                  data.item.potential,
                  data.item.potential_status,
                  data.item.fp_done,
                  data.item.status_sn_id,
                  data.item.lead_status,
                  data.item.old_lead_sn
                )
              }}
            </b-badge>
          </template>
        </b-table>
      </template>
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
      fields: [
        {
          key: "nickname",
          label: "Nickname",
          sortable: false,
        },
        {
          key: "state_hour",
          label: "ST/AD",
          sortable: false,
        },
        {
          key: "sourcesname_id",
          label: "Source",
          sortable: false,
        },
        {
          key: "mobile",
          label: "Mobile",
          sortable: false,
        },
        {
          key: "status",
          label: "Status",
          sortable: false,
        },
        {
          key: "fanpage",
          label: "Fanpage",
          sortable: false,
        },
        {
          key: "programs",
          label: "Recommendations",
          sortable: false,
        },
        {
          key: "created_at",
          label: "Created date",
          sortable: false,
        },
        {
          key: "owner",
          label: "Owner",
          sortable: false,
        },
        {
          key: "from",
          label: "From",
        },
      ],
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
    resolveLeadSnStatusVariant(status) {
      if (status === 2) return "success";
      if ([3, 4].includes(status)) return "primary";
      if (status === 5) return "secondary";
      if (status === 6) return "warning";
      if (status === 7) return "danger";
      return "primary";
    },
    resolveFromSn(potential, potential_s, done, status, lead_status, old_lead_sn) {
      const status_recovery = [4, 5];
      const potential_recovery = [1, 4];
      const status_active = [1, 2, 3];
      const potential_without = [2, 3];
      const status_closed = [6, 7];

      if (status_active.includes(status)) {
        if (old_lead_sn == 1) {
          return "ACTIVE (OLD)";
        } else {
          return "ACTIVE";
        }
      } else if (
        status_recovery.includes(status) &&
        potential_recovery.includes(potential_s)
      ) {
        if (old_lead_sn == 1) {
          return "RECOVERY (OLD)";
        } else {
          return "RECOVERY";
        }
      } else if (
        (potential = 2 || potential_without.includes(potential_s)) &&
        status != 8 &&
        lead_status != 7
      ) {
        if (old_lead_sn == 1) {
          return "WITHOUT POTENTIAL (OLD)";
        } else {
          return "WITHOUT POTENTIAL";
        }
      } else if (status_closed.includes(status)) {
        if (old_lead_sn == 1) {
          return "CLOSED (OLD)";
        } else {
          return "CLOSED";
        }
      } else {
        if (done) {
          return "OUR CLIENTS (DONE)";
        } else {
          return "OUR CLIENTS";
        }
      }
    },
  },
};
</script>