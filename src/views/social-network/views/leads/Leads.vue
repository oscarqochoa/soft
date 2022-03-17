<template>
  <div>
    <header-slot>
      <template #actions>
        <div>
          <b-row>
            <b-col md="12">
              <div class="d-flex justify-content-end align-items-center">
                <global-search-component
                  class="w-100 mr-2"
                ></global-search-component>
                <lead-create-social />
              </div>
            </b-col>
          </b-row>
        </div>
      </template>
    </header-slot>

    <!-- <b-nav card-header pills class="m-0">
      <b-nav-item
        exact-active-class="active"
        :link-classes="['px-3', bgTabsNavs]"
        exact
        :to="{ name: 'sn-list-new-leads' }"
        >NEW LEADS
      </b-nav-item>
      <b-nav-item
        exact-active-class="active"
        :link-classes="['px-3', bgTabsNavs]"
        exact
        :to="{ name: 'sn-list-old-leads' }"
        >OLD LEADS
      </b-nav-item>
    </b-nav> -->
    <new-leads></new-leads>
  </div>
</template>

<script>
import LeadListAddNew from "@/views/crm/views/Lead/lead-module/save/LeadListAddNew.vue";
import LeadCreateSocial from "@/views/social-network/views/leads/components/lead-create/LeadCreateSocial";
import NewLeads from "./tabs/new-leads/NewLeads.vue";
import GlobalSearchComponent from "../../commons/GlobalSearchComponent.vue";
// components
export default {
  components: {
    LeadListAddNew,
    LeadCreateSocial,
    NewLeads,
    GlobalSearchComponent,
  },
};
</script>
