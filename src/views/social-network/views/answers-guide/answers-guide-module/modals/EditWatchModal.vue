<template>
  <b-modal
    id="modal-closing"
    ref="modal"
    v-model="onControl"
    size="lg"
    :title="title"
    :hide-footer="reading"
    @hidden="close"
  >
    <div class="d-block">
      <validation-observer ref="vform">
        <b-container>
          <b-form-row>
            <b-col>
              <validation-provider
                  v-slot="{ errors,valid }"
                  name="program"
                  rules="required"
              >
              <b-row class="mt-2">
                <b-col sm="1">
                  <label>PROGRAM:</label>
                </b-col>
                <b-col
                  v-for="program in programs"
                  :key="program.id"
                  sm="2"
                >
                  <b-form-radio
                    v-model="treeItem.program"
                    unchecked-value="not_accepted"
                    name="checkbox-2"
                    :value="program.id"
                    disabled
                  ><img
                    :src="baseUrl + program.logo"
                    class="img-fan-page"
                  >
                  </b-form-radio>
                </b-col>
                <span
                    v-if="errors[0]"
                    class="text-danger"
                >
                      Program {{ errors[0] }}</span>
              </b-row>
              </validation-provider>
              <validation-provider
                  v-slot="{ errors,valid }"
                  name="title"
                  rules="required"
              >
              <b-row class="mt-2">
                <b-col sm="1">
                  <label>TYPE:</label>
                </b-col>
                <b-col sm="2">
                  <b-form-radio
                    v-model="treeItem.type_answer"
                    :disabled="reading"
                    name="checkbox-1"
                    value="1"
                    unchecked-value="not_accepted"
                  >CLIENT
                  </b-form-radio>
                </b-col>
                <b-col sm="2">
                  <b-form-radio
                    v-model="treeItem.type_answer"
                    :disabled="reading"
                    name="checkbox-1"
                    value="2"
                    unchecked-value="not_accepted"
                  >TEAM
                  </b-form-radio>
                </b-col>
                <span
                    v-if="errors[0]"
                    class="text-danger"
                >
                      Type {{ errors[0] }}</span>
              </b-row>
              </validation-provider>
              <validation-provider
                  v-slot="{ errors,valid }"
                  name="option"
                  rules="required"
              >
              <b-row class="mt-2">
                <b-col sm="1">
                  <label>OPTION:</label>
                </b-col>
                <b-col sm="10">
                  <b-form-textarea
                    id="textarea-default"
                    v-model="treeItem.content"
                    :disabled="reading"
                  />
                </b-col>
                <b-col sm="1" class="flex">
                  <feather-icon
                    v-if="answerTypeTeam"
                    class="mr-1 pointer mb-1 bigger"
                    icon="CopyIcon"
                    @click="copyAnswerName(treeItem.content)"
                  />
                  <feather-icon
                      v-if="reading"
                    class="mr-1 pointer bigger"
                    style="color: #007bff  "
                    icon="EditIcon"
                    @click="toEditingMode"
                  />
                </b-col>
                <span
                    v-if="errors[0]"
                    class="text-danger"
                >
                      Option {{ errors[0] }}</span>
              </b-row>
              </validation-provider>
            </b-col>
          </b-form-row>
        </b-container>
      </validation-observer>
    </div>
    <template #modal-footer="{ cancel }">
      <b-button
          @click="cancel()"
      >
        CANCEL
      </b-button>
      <b-button
          @click="saveUpdateAnswer"
      >
        OK
      </b-button>
    </template>
  </b-modal>
</template>

<script>

import AnswersGuideService from '@/views/social-network/views/answers-guide/answers-guide.service'
import { mapGetters } from 'vuex'
import { useToast } from 'vue-toastification/composition'
import { useClipboard } from '@vueuse/core'
import ToastificationContent from '@core/components/toastification/ToastificationContent'

export default {
  props: {
    mood: null,
    item: null,
  },
  data() {
    return {
      onControl: false,
      programs: {},
      selectedProgram: '',
      selectedType: '',
      option: '',
      programIsSelected: false,
      selectedSubOption: '',
      father: null,
      answers: {},
      showAnswersTree: false,
      title: null,
      reading: false,
      answerTypeTeam: false,
      treeItem: null,
    }
  },
  async created() {
    // eslint-disable-next-line no-unused-expressions
    this.item.type_answer == 2 ? this.answerTypeTeam = true : this.answerTypeTeam = false
    this.onControl = true
    this.treeItem = { ...this.item }
    if (this.mood === 1) {
      this.title = 'Read Answer'
      this.reading = true
    } else {
      this.title = 'Edit Answer'
      this.reading = false
    }
    await this.getFanPages()
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
    }),
  },
  setup() {
    const toast = useToast()
    const { copy } = useClipboard()

    const copyAnswerName = answerName => {
      copy(answerName)

      toast({
        component: ToastificationContent,
        props: {
          title: 'Answer copied',
          icon: 'CopyIcon',
          variant: 'success',
        },
      })
    }

    return {
      copyAnswerName,
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    async getFanPages() {
      const data = await AnswersGuideService.getFanPages()
      this.programs = data
    },
    toEditingMode() {
      this.reading = false
    },
    async getAnswerGuide(program, father) {
      const data = await AnswersGuideService.getAnswersGuide({ father, program })
      return data
    },
    async saveUpdateAnswer() {
      try {
        const result = await this.$refs.vform.validate()
        if (result) {
          const response = await this.showConfirmSwal()
          if (response.isConfirmed) {
            const data = await AnswersGuideService.saveAnswerGuide({
              id: this.treeItem.id,
              program: this.treeItem.program,
              content: this.treeItem.content,
              user: this.currentUser.user_id,
              father: this.treeItem.father,
              type: this.treeItem.type_answer,
            })
            if (data.status === 200) {
              this.showSuccessSwal('Answer has been updated successfully')
              this.close()
              this.$emit('reload')
            }
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
.img-fan-page{
  height:40px;
}
.pointer{
  cursor: pointer;
}
.flex{
  display: flex;
  flex-direction: column;
}
.bigger{
  width: 1.5em;
  height: 1.5em;
}
</style>
