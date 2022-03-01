<template>
    <b-card class="px-0">
      <template #header>
        <b-card-title>
          Tasks &nbsp;
          <span>
            <a class="text-important"> </a>
          </span>
        </b-card-title>
      </template>

      <b-container class="mt-1">
        <b-tabs pills>
          <b-tab title="CRM">
            <b-table-simple>
              <b-thead>
                <b-tr>
                  <b-th>Subject</b-th>
                  <b-th>Date/Hour</b-th>
                  <b-th>Sms</b-th>
                  <b-th>Type</b-th>
                  <b-th>Actions</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr>
                  <b-td></b-td>
                  <b-td></b-td>
                  <b-td></b-td>
                  <b-td></b-td>
                  <b-td></b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
            <div class="text-right">
              <b-button variant="primary" class="mr-1" size="sm">
                <feather-icon
                  icon="PlusIcon"
                  size="15"
                  class="mr-50 text-white"
                ></feather-icon>
                ADD
              </b-button>
            </div>
          </b-tab>
          <b-tab title="SN">
            <b-table-simple>
              <b-thead>
                <b-tr>
                  <b-th>Subject</b-th>
                  <b-th>Date/Hour</b-th>
                  <b-th>Sms</b-th>
                  <b-th>Actions</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr>
                  <b-td></b-td>
                  <b-td></b-td>
                  <b-td></b-td>
                  <b-td></b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
            <div class="text-right">
              <b-button variant="primary" class="mr-1" size="sm">
                <feather-icon
                  icon="PlusIcon"
                  size="15"
                  class="mr-50 text-white"
                ></feather-icon>
                ADD
              </b-button>
            </div>
          </b-tab>
        </b-tabs>
      </b-container>
    </b-card>
</template>

<script>
export default {};
</script>

<style lang="scss">
.card-tasks {
  overflow: auto;
  max-height: 680px !important;
}
</style>