<template>
  <b-card title="User Information">
    <b-row>
      <!-- User Info: Left col -->
      <b-col
        cols="21"
        xl="6"
        md="4"
        class="d-flex justify-content-between flex-column"
      >
        <!-- User Avatar & Action Buttons -->
        <div class="d-flex justify-content-start">
          <b-avatar
            :src="userData.avatar"
            :text="avatarText(userData.fullName)"
            :variant="`light-primary`"
            size="104px"
            rounded
          />
          <div class="d-flex flex-column ml-1">
            <div class="mb-1">
              <h4 class="mb-0">
                {{ userData.fullName }}
              </h4>
              <span class="card-text">{{ userData.email }}</span>
            </div>
          </div>
        </div>
      </b-col>

      <!-- Right Col: Table -->
      <b-col cols="12" xl="3" md="4">
        <table class="mt-2 mt-xl-0 w-100">
          <tr>
            <th class="pb-50">
              <amg-icon icon="UserIcon" class="mr-75" />
              <span class="font-weight-bold">First Name</span>
            </th>
            <td class="pb-50">
              {{ userData.first_name }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <amg-icon icon="UserIcon" class="mr-75" />
              <span class="font-weight-bold">Last Name</span>
            </th>
            <td class="pb-50">
              {{ userData.last_name }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <amg-icon icon="StarIcon" class="mr-75" />
              <span class="font-weight-bold">Phone</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ userData.phone }}
            </td>
          </tr>
          <tr>
            <th>
              <amg-icon icon="PhoneIcon" class="mr-75" />
              <span class="font-weight-bold">Extension</span>
            </th>
            <td>
              {{ userData.extension }}
            </td>
          </tr>
        </table>
      </b-col>
      <b-col cols="12" xl="3" md="4">
        <table class="mt-2 mt-xl-0 w-100">
          <tr>
            <th class="pb-50">
              <amg-icon icon="CalendarIcon" class="mr-75" />
              <span class="font-weight-bold">Date of Birth</span>
            </th>
            <td class="pb-50">
              {{ userData.date_of_birth | myGlobal }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <amg-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Country</span>
            </th>
            <td class="pb-50">
              {{ userData.country == 'PE' ? 'Peru' : 'USA' }}
            </td>
          </tr>
          <!-- <tr>
            <th class="pb-50">
              <amg-icon icon="StarIcon" class="mr-75" />
              <span class="font-weight-bold">Phone</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ userData.phone }}
            </td>
          </tr>
          <tr>
            <th>
              <amg-icon icon="PhoneIcon" class="mr-75" />
              <span class="font-weight-bold">Extension</span>
            </th>
            <td>
              {{ userData.extension }}
            </td>
          </tr> -->
        </table>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { avatarText } from "@core/utils/filter";

export default {
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    avatarText(fullName) {
      return avatarText(fullName);
    },
  },
};
</script>

<style>
</style>
