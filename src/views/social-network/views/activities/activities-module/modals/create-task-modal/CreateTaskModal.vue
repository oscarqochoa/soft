<template>
  <b-modal
    v-model="ownControl"
    scrollable
    title-class="h3 text-white font-weight-bolder"
    title="CREATE TASK"
    size="lg"
    @hidden="closeModal"
  >

    <validation-observer ref="form">

      <validation-provider
        v-slot="{ errors }"
        name="task"
        rules="required"
      >
        <b-form-group class>
          <b-input-group>
            <b-input-group-prepend>
              <b-input-group-text
                class="bg-primary text-white"
                style="padding-right: 5.25em"
              >
                <span>TITLE</span>
              </b-input-group-text>
            </b-input-group-prepend>
            <div class="d-flex align-items-center justify-content-around w-100">
              <b-form-input
                id="input-1"
                v-model="task.title"
                type="text"
                placeholder="Enter title"
                required
              />
            </div>
          </b-input-group>
        </b-form-group>
        <b-form-group class>
          <b-input-group>
            <b-input-group-prepend>
              <b-input-group-text
                class="bg-primary text-white pr-2"
              >
                <span>DESCRIPTION</span>
              </b-input-group-text>
            </b-input-group-prepend>
            <div class="w-100">
              <b-form-textarea
                v-model="task.description"
                placeholder="Enter description"
                class="input-form "
              />
            </div>
          </b-input-group>
        </b-form-group>
        <label
          v-if="errors[0]"
          class="text-danger"
        >
          Required
        </label>
      </validation-provider>
    </validation-observer>

    <template #modal-footer>
      <b-button
        variant="primary"
        @click="createTask"
      >
        <b-spinner
          v-if="spinnerOn"
          small
        />
        SAVE
      </b-button>

    </template>

  </b-modal>
</template>
<script>
import { mapGetters } from 'vuex'

import ActivitiesService from '@/views/social-network/views/activities/activities.service'

export default {
  data() {
    return {

      ownControl: false,
      comments: null,
      spinnerOn: false,
      optionGenerate: 1,
      task: {
        id: null,
        title: null,
        description: null,
        color: null,

      },
    }
  },
  created() {
    this.ownControl = true
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token',

    }),
  },
  methods: {

    closeModal() {
      this.$emit('close')
    },
    // eslint-disable-next-line consistent-return
    async createTask() {
      try {
        this.spinnerOn = true
        const result = await this.$refs.form.validate()
        if (result) {
          const params = {
            title: this.task.title,
            description: this.task.description,
            created_by: this.currentUser.user_id,
            option: this.optionGenerate,
            color: this.task.color,
          }

          const data = await ActivitiesService.insertTask(params)
          if (data.status === 200) {
            this.showSuccessSwal()
            this.closeModal()
          }
        }
      } catch (e) {
        this.showErrorSwal(e)
        return []
      }
    },
  },
}
</script>

<style scoped>

</style>
