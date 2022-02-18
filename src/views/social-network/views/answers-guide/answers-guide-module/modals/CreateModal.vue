<template>
  <b-modal
    id="modal-closing"
    ref="modal"
    v-model="onControl"
    size="lg"
    title="CREATE ANSWER"
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
                        v-model="selectedProgram"
                        unchecked-value="not_accepted"
                        name="checkbox-2"
                        :value="program.id"
                        :disabled="fromTree"
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
                        v-model="selectedType"
                        name="checkbox-1"
                        value="1"
                        unchecked-value="not_accepted"
                    >CLIENT
                    </b-form-radio>
                  </b-col>
                  <b-col sm="2">
                    <b-form-radio
                        v-model="selectedType"
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
                  <b-col sm="11">

                    <b-form-textarea
                        id="textarea-default"
                        v-model="option"
                    />
                  </b-col>
                  <span
                      v-if="errors[0]"
                      class="text-danger"
                  >
                      Option {{ errors[0] }}</span>
                </b-row>
                </validation-provider>

                <b-row
                    v-show="selectedProgram"
                    class="mt-2"
                >
                  <b-col v-if="!fromTree">
                    <b-form-checkbox
                        v-model="selectedSubOption"
                        value="checked"
                        unchecked-value="notchecked"
                    >
                      IS SUB OPTION?
                    </b-form-checkbox>

                    <template v-if="showAnswersTree">
                      <validation-provider
                          v-slot="{ errors }"
                          name="suboption"
                          rules="required"
                      >
                      <div
                          v-for="answer in answers"
                          :key="answer.id"
                          :value="answer.id"
                          class="mar-top"
                      >
                        <b-form-radio
                            :id="answer.id"
                            v-model="father"
                            :value="answer.id"
                            unchecked-value="not_accepted"
                            :style="`margin-left: ${answer.type === 1 ? 0 : 10*answer.type}px;`"

                        >
                          <label
                              class="mx-2"
                              :for="answer.id"
                          >{{ answer.content.length>20 ? answer.content.substr(0,20)+'...' : answer.content }}</label>
                          <feather-icon
                              v-if="answer.ans_open && answer.count_father"
                              class="mr-1 pointer"
                              icon="ChevronRightIcon"
                              @click="getChildData(answer.program, answer.id, answer)"
                          />
                          <feather-icon
                              v-if="!answer.ans_open && answer.count_father"
                              class="mr-1 pointer"
                              icon="ChevronDownIcon"
                              @click="deleteChildData(answer.grandpa, answer.id, answer.type)"
                          />
                        </b-form-radio>
                      </div>
                        <span
                            v-if="errors[0]"
                            class="text-danger"
                        >
                      Sub Option {{ errors[0] }}</span>
                      </validation-provider>
                    </template>
                  </b-col>
                  <b-col v-else>Parent: {{ itemTree.content }}</b-col>
                </b-row>
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

export default {
  props: {
    itemTree: null,
  },
  data() {
    return {
      onControl: false,
      programs: {},
      selectedProgram: '',
      selectedType: '',
      option: '',
      programIsSelected: false,
      selectedSubOption: 'notchecked',
      father: null,
      answers: {},
      showAnswersTree: false,
      fromTree: false,
    }
  },
  async created() {
    this.onControl = true
    await this.getFanPages()
    if (this.itemTree) {
      this.fromTree = true
      this.selectedProgram = this.itemTree.program
      this.father = this.itemTree.id
    }
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
    }),
  },
  methods: {
    close() {
      this.$emit('close')
    },
    async getFanPages() {
      const data = await AnswersGuideService.getFanPages()
      this.programs = data
    },
    async getAnswerGuide(program, father) {
      const data = await AnswersGuideService.getAnswersGuide({ father, program })
      return data
    },
    async getChildData(program, father, answer) {
      const response = await AnswersGuideService.getAnswersGuide({ father, program })
      const index = this.answers.map(e => e.id).indexOf(father)
      response.map(e => (e.content = `${e.content}`))
      this.answers.splice(index + 1, 0, ...response)
      answer.ans_open = false
    },
    deleteChildData(grandpa, id, type) {
      // eslint-disable-next-line array-callback-return,consistent-return
      this.answers = this.answers.filter(value => {
        if (!(value.grandpa == grandpa && value.type > type)) {
          return true
        }
      })
      this.answers = this.answers.filter(e => e.grandpa != id)
      // eslint-disable-next-line camelcase
      const index_father = this.answers.map(e => e.id).indexOf(id)
      this.answers[index_father].ans_open = true
    },
    async saveUpdateAnswer() {
      try {
        const result = await this.$refs.vform.validate()
        if (result) {
          const response = await this.showConfirmSwal()
          if (this.itemTree) {
            this.father = this.itemTree.id
          }
          if (response.isConfirmed) {
            const data = await AnswersGuideService.saveAnswerGuide({
              id: null,
              program: this.selectedProgram,
              content: this.option,
              user: this.currentUser.user_id,
              father: this.father,
              type: this.selectedType,
            })

            if (data.status === 200) {
              if (this.itemTree) {
                this.$emit('reloadTree')
              } else {

                if(this.selectedProgram === this.$route.meta.program){
                  this.$store.dispatch('SocialNetworkAnswerGuide/A_GET_ANSWERS', { father: null, program: this.selectedProgram })
                }else{
                  this.$emit('reloadTable', this.selectedProgram)
                }

              }
              this.showSuccessSwal('Answer has been added successfully')
              this.close()
            }
          }
        }
      } catch (e) {
        this.showErrorSwal(e)
        return []
      }
    },
  },
  watch: {
    selectedProgram(newVal) {
      if (newVal) {
       this.father = null
        this.getAnswerGuide(this.selectedProgram, this.father).then(res => {
          this.answers = res
        })
        if (this.type !== 4) { this.father = '' }
      } else {
        this.answers = []
        if (this.type !== 4) { this.father = '' }
      }
    },
    selectedSubOption(newVal) {
      if (newVal === 'checked') {
        this.showAnswersTree = true
        if (this.type !== 4) { this.father = '' }
      } else {
        this.showAnswersTree = false
        if (this.type !== 4) { this.father = '' }
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
.mar-top{
  margin-top: 0.5em
}
</style>
