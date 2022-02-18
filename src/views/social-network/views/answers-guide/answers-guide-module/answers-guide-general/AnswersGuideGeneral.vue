<template>
  <div>
    <div>
      <b-card
          no-body
          class="mb-0"
      >
        <b-table
            id="answers-guide"
            ref="answersGuide"
            sticky-header="70vh"
            no-provider-filtering
            :busy="isBusy"
            :items="S_ANSWERS"
            :fields="fields"
            class="font-small-3"
            show-empty
        >
          <template #table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner class="align-middle mr-1" />
              <strong>Loading ...</strong>
            </div>
          </template>
          <template #table-busy>
            <div class="text-center text-primary my-2">
              <b-spinner class="align-middle mr-1" />
              <strong>Loading ...</strong>
            </div>
          </template>
          <template #cell(content)="data">
            <span
                :style="`margin-left: ${data.item.type === 1 ? 0 : 10*data.item.type}px;`"
            />
            <feather-icon
                v-if="data.item.ans_open && data.item.count_father"
                class="pointer"
                icon="ChevronRightIcon"
                @click="getChildData(data.item.program, data.item.id, data.item)"
            />
            <feather-icon
                v-if="!data.item.ans_open && data.item.count_father"
                class="pointer"
                icon="ChevronDownIcon"
                @click="deleteChildData(data.item.grandpa, data.item.id, data.item.type)"
            />
            <span
                v-if="!data.item.count_father"
                style="margin-left: 17px "
            />
            {{ data.item.content.length>20 ? data.item.content.substr(0,20)+'...' : data.item.content }}
          </template>
          <template #cell(user)="data">
            {{ data.item.user }} ({{ data.item.created | myGlobalWithHour }})
          </template>
          <template #cell(updated_by)="data">
            <span v-if="data.item.updated_by">
              {{data.item.updated_by}} ( {{data.item.updated_at | myGlobalWithHour}} )
            </span>
            <span v-else>
              Not updated
            </span>
          </template>
          <template #cell(actions)="data">
            <feather-icon
                class="mr-1 pointer bigger"
                icon="EyeIcon"
                @click="openEditWatchModal(1, data.item)"
            />
            <feather-icon
                class="mr-1 pointer bigger"
                style="color: #007bff  "
                icon="EditIcon"
                @click="openEditWatchModal(2, data.item)"
            />
            <feather-icon
                class="mr-1 pointer bigger"
                style="color: #dc3545"
                icon="TrashIcon"
                @click="deleteItem(data.item)"
            />
            <feather-icon
                v-if="data.item.type_answer==2"
                class="mr-1 pointer bigger"
                icon="CopyIcon"
                @click="copyAnswerName(data.item.content)"
            />
            <tabler-icon
                v-if="data.item.father==null && data.item.count_father"
                class="mr-1 pointer bigger"
                icon="TreesIcon"
                style="color:green"
                @click="openTreeModalM(data.item.id)"
            />
          </template>
        </b-table>
        <edit-watch-modal
            v-if="open"
            :mood="mood"
            :item="selectedItem"
            @close="closeEditWatchModal"
            @reload="getData"
        />
        <tree-modal
            v-if="openTreeModal"
            :treeId="treeId"
            @close="closeTreeModal"
            @reload="getData"
        />
      </b-card>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import editWatchModal from '@/views/social-network/views/answers-guide/answers-guide-module/modals/EditWatchModal'
import AnswersGuideService from '@/views/social-network/views/answers-guide/answers-guide.service'
import { useToast } from 'vue-toastification/composition'
import { useClipboard } from '@vueuse/core'
import ToastificationContent from '@core/components/toastification/ToastificationContent'
import treeModal from '@/views/social-network/views/answers-guide/answers-guide-module/modals/TreeModal'
export default {
  components: {
    editWatchModal,
    treeModal,
  },
  props: {
    program: null,
  },
  data() {
    return {
      items: [],
      selectedItem: null,
      mood: '',
      open: false,
      openTreeModal: false,
      isBusy: false,
      treeId: null,
      fields: [
        {
          key: 'content',
          label: 'MAIN OPTION',
        },
        {
          key: 'user',
          label: 'CREATED BY',
        },
        {
          key: 'updated_by',
          label: 'UPDATED BY',
        },
        {
          key: 'actions',
          label: 'ACTIONS',
        },
      ],
      answers: [],
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
      token: 'auth/token',
    }),
    ...mapState({
      S_ANSWERS: state => state.SocialNetworkAnswerGuide.S_ANSWERS,
    }),
  },

  async created() {try {
      this.isBusy = true
      await this.getData()
      this.isBusy = false
      return this.answers
    } catch (e) {
      this.showErrorSwal(e)
      return []
    }
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
    ...mapActions({
      A_GET_ANSWERS: "SocialNetworkAnswerGuide/A_GET_ANSWERS"
    }),
    async getData() {
      this.answers = await this.getAnswerGuide(this.$route.meta.program, null)
    },
    openEditWatchModal(mood, data) {
      this.mood = mood
      this.selectedItem = data
      this.open = true
    },
    closeEditWatchModal() {
      this.open = false
    },
    openTreeModalM(id) {
      this.treeId = id
      this.openTreeModal = true
    },
    closeTreeModal() {
      this.openTreeModal = false
    },
    async getAnswerGuide(program, father) {
      const data = await this.A_GET_ANSWERS({ father, program })
      return data
    },
    // eslint-disable-next-line consistent-return
    async deleteItem(item) {
      try {
        this.selectedItem = item
        const response = await this.showConfirmSwal()
        if (response.isConfirmed) {
          const data = await AnswersGuideService.deleteAnswerGuide({ id: item.id, program: item.program, user: this.currentUser.user_id })
          if (data.status === 200) {
            this.showSuccessSwal('Answer has been deleted successfully')
          }
          await this.getData()
        }
      } catch (e) {
        this.showErrorSwal(e)
        return []
      }
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
      this.$store.dispatch('SocialNetworkAnswerGuide/A_SET_ANSWERS', this.answers)
    },

  },
}
</script>

<style scoped>
.pointer{
  cursor: pointer;
}
.bigger{
  width: 1.5em;
  height: 1.5em;
}
</style>
