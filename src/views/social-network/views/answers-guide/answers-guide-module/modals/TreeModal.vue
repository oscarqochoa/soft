<template>
  <b-modal
    id="modal-closing"
    ref="modal"
    v-model="onControl"
    size="xl"
    :title="nameTree"
    :hide-footer="true"
    @hidden="close"
  >
    <div class="tree-container">
      <div class="header">
        <div class="icons">
          <span>
            <feather-icon
              class="pointer"
              icon="CircleIcon"
              style="display: inline; fill: #FF5749; color:#FF5749 "
            /> Team
          </span>
          <span>
            <feather-icon
              class="pointer"
              icon="CircleIcon"
              style="display: inline;  fill: #15D6CA; color:#15D6CA"
            /> Client
          </span>
        </div>
        <div class="zoom">
          <feather-icon
            class="pointer  ml-1 bigger"
            icon="ZoomInIcon"
            @click="zoomIn"
          />
          <feather-icon
            class="pointer  ml-1 bigger"
            icon="ZoomOutIcon"
            @click="zoomOut"
          />
          <feather-icon
            class="pointer  ml-1 bigger"
            icon="MinimizeIcon"
            @click="restore"
          />
          <!--          <span-->
          <!--            class="pointer ml-1"-->
          <!--            style="font-size: 20px"-->
          <!--            @click="restore"-->
          <!--          >1:1</span>-->
        </div>
      </div>
      <vue-tree
        v-if="treeData.length!=0"
        :key="pageI"
        ref="tree"
        style="width: 100%; height: 85vh;"
        :config="treeConfig"
        :dataset="treeData"
        direction="horizontal"
        linkStyle="straight"
      >
        <template v-slot:node="{ node, collapsed }">
          <div
            class="rich-media-node d-flex flex-row"
            :style="{ border: collapsed ? '2px solid grey' : '' }"
          >
            <span
              v-if="node.content.length>80"
              class="text-content-tree"
              style="line-height: 1.25; font-size: 12px;"
            >{{ node.content.substr(0,80)+'...' }}</span>
            <span
              v-else
              class="text-content-tree"
            >{{ node.content }}</span>
            <div
              class="icons-node"
              :class="node.type_answer === 1? 'client-bg' : 'team-bg'"
            >
              <feather-icon
                class="mr-1 pointer no-margin icon-color"
                icon="EyeIcon"
                @click="openWatchModal(1, node)"
              />
              <feather-icon
                class="mr-1 pointer no-margin icon-color"
                icon="PlusIcon"
                @click="openCreateModal(node)"
              />
              <feather-icon
                class="mr-1 pointer no-margin icon-color"
                icon="TrashIcon"
                @click="deleteItem(node)"
              />
              <feather-icon
                v-if="node.type_answer == 2"
                class="mr-1 pointer no-margin icon-color"
                icon="CopyIcon"
                @click="copyAnswerName(node.content)"
              />
            </div>
          </div>
        </template>
      </vue-tree>
      <div v-else>
        No hay contenido para mostrar
      </div>
    </div>
    <edit-watch-modal
      v-if="openWatch"
      :item="selectedItem"
      :mood="mood"
      @close="closeWatchModal"
      @reload="getReloadData"
    />
    <create-modal
      v-if="openCreate"
      :itemTree="selectedItem"
      @close="closeCreateModal"
      @reloadTree="getReloadData"
    />
  </b-modal>

</template>

<script>
import VueTree from '@ssthouse/vue-tree-chart'
import AnswersGuideService from '@/views/social-network/views/answers-guide/answers-guide.service'
import editWatchModal from '@/views/social-network/views/answers-guide/answers-guide-module/modals/EditWatchModal'
import { useToast } from 'vue-toastification/composition'
import { useClipboard } from '@vueuse/core'
import ToastificationContent from '@core/components/toastification/ToastificationContent'
import { mapGetters } from 'vuex'
import createModal from '@/views/social-network/views/answers-guide/answers-guide-module/modals/CreateModal'

export default {
  components: {
    VueTree,
    editWatchModal,
    createModal,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    treeId: null,
  },
  data() {
    return {
      openWatch: false,
      openCreate: false,
      onControl: false,
      treeConfig: { nodeWidth: 120, nodeHeight: 80, levelHeight: 200 },
      treeData: {},
      nameTree: '',
      pageI: 1,
      selectedItem: null,
      mood: null,
    }
  },
  async created() {
    this.onControl = true
    await this.getTreeData(this.treeId)
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
    async getReloadData() {
      await this.getTreeData(this.treeId)
    },
    openWatchModal(mood, body) {
      this.selectedItem = body
      this.mood = mood
      this.openWatch = true
    },
    closeWatchModal() {
      this.openWatch = false
    },
    openCreateModal(body) {
      this.selectedItem = body
      this.openCreate = true
    },
    closeCreateModal() {
      this.pageI += 1
      this.openCreate = false
    },
    async getTreeData(id) {
      const data = await AnswersGuideService.getTreeAnswer({ id })
      this.treeData = data.data
      // eslint-disable-next-line prefer-destructuring
      if (this.treeData.length != 0) {
        this.nameTree = `${this.treeData[0].content} (${this.getProgramName(this.treeData[0].program)})`
      }
      this.pageI += 1
    },
    // eslint-disable-next-line consistent-return
    getProgramName(number) {
      // eslint-disable-next-line default-case
      switch (number) {
        case 1:
          return 'Business'
        case 2:
          return 'Boost Credit'
        case 3:
          return 'Credit Experts'
        case 4:
          return 'Debt Solution'
        case 5:
          return 'Tax Research'
      }
    },
    zoomIn() {
      this.$refs.tree.zoomIn()
    },
    zoomOut() {
      this.$refs.tree.zoomOut()
    },
    restore() {
      this.$refs.tree.restoreScale()
    },
    // eslint-disable-next-line consistent-return
    async deleteItem(item) {
      try {
        const response = await this.showConfirmSwal()
        if (response.isConfirmed) {
          const data = await AnswersGuideService.deleteAnswerGuide({ id: item.id, program: item.program, user: this.currentUser.user_id })
          if (data.status === 200) {
            await this.getTreeData(this.treeId)
            this.$emit('reload')
            this.showSuccessSwal('Answer has been deleted successfully')
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
.tree-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rich-media-node {
  width: 160px;
  padding: 0 0 0 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 5%;
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: black;
  background-color: white;
  border: 1px solid black;
}

.icons{
  display: flex;
  flex-direction: column;
}
.team-bg {
  background-color: #ff5749 !important;
  border-radius: 5%;
}
.client-bg {
  background-color: #15D6CA !important;
  border-radius: 5%;
}
.pointer{
  cursor: pointer;
}
.text-content-tree {
  padding: 10px;
  font-weight: bold;
  width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-word;
  white-space: pre-wrap;
}

.icons-node{
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
}
.icons-node span{
  text-align: center;
}
.no-margin{
  margin: 0 !important;
}
.header{
  display: flex;
  justify-content: space-between;
  align-self: start;
  width: 100%;
}
.bigger{
  width: 30px !important;
  height: 30px !important;
}
icon-color{
  color: black;
}
</style>
