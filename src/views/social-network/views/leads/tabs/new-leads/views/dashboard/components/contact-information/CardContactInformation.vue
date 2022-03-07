<template>
  <div>
    <b-card body-class="px-0">
      <b-container>
        <b-row>
          <b-col cols="6">
            <h3 class="title-card">Contact Information</h3>
          </b-col>
          <b-col cols="6" class="text-right"> </b-col>
        </b-row>
      </b-container>

      <div class="mt-5 p-relative">
        <b-tabs
          pills
          active-nav-item-class="bg-purple-tab"
          content-class="mt-2"
          lazy
          nav-wrapper-class="card nav-wrapper-class-card"
          v-model="sourceIndex"
        >
          <span
            v-if="doneReload"
            style="position: absolute; z-index: 10; left: 29px; bottom: 984px"
            class="title-card"
          >
            Contact information
          </span>
          <b-tab
            v-for="(source, index) in allInfo"
            :key="index"
            title-item-class="text-center w-15"
            title-link-class="bg-default-purple-tab"
            lazy
          >
            <template #title>{{ source.source }}</template>
            <b-card no-body>
              <!-- nav-class="border-primary" -->
              <div class="mt-2 ml-2">
                <b-tabs
                  pills
                  active-nav-item-class="bg-orange-tab"
                  content-class="padding-vertical-tab"
                  nav-class="border-bottom-vertical-tab p-4"
                  lazy
                  v-model="subSourceIndex"
                >
                  <b-tab
                    v-for="subSource in source.sub_source"
                    :key="subSource.name"
                    title-item-class="text-center w-15"
                    title-link-class="bg-default-tab"
                  >
                    <template #title>
                      <span>{{ subSource.name }}</span>
                    </template>
                    <div class="mt-2 ml-3">
                      <b-tabs
                        active-nav-item-class="font-weight-bold text-uppercase nav-link-sn-active"
                        nav-class="border-right-vertical-tab border-bottom-0 h-100"
                        lazy
                        vertical
                        v-model="replyIndex"
                      >
                        <b-tab
                          title-item-class="w-vertical-tab"
                          title-link-class="nav-link-vertical nav-link-sn mx-0 border-light"
                          v-for="(reply, index) in subSource.replies"
                          :key="index"
                          @click="setActiveColor(index)"
                        >
                          <template #title>
                            <span
                              class="reply-active-tab-number roboto-class"
                              :style="
                                activeReply == index
                                  ? 'background: #FF6045 !important; color: white !important; font-size: 15px !important;'
                                  : 'font-size: 15px !important;'
                              "
                              >{{ reply.count_reply }}</span
                            >
                            <span>{{ reply.type_reply }}</span>
                          </template>
                          <b-row>
                            <b-col :md="source.id == 1 ? 9 : 12">
                              <b-row style="padding-top: 37px">
                                <b-col cols="12" md="4">
                                  <contact-information
                                    :contactInfo="{
                                      catcher: reply.name_catcher,
                                      potential: reply.potencial,
                                      program: reply.fanpage,
                                      date: reply.created_at,
                                      dialogue: reply.dialogue,
                                      reply_id: reply.reply_id,
                                      contact_method: reply.contact_method,
                                      reason: reply.reason,
                                    }"
                                    :reply="reply"
                                    :parent_source="source.id"
                                  ></contact-information>
                                </b-col>
                                <b-col cols="12" md="8">
                                  <contact-notes
                                    :reply="reply"
                                    :personalInfo="personalInfo"
                                  ></contact-notes>
                                </b-col>
                              </b-row>
                            </b-col>
                            <b-col md="3" v-show="source.id == 1">
                              <contact-flyer
                                :fyerReply="{
                                  flyer_id: reply.flyer_id,
                                  reply_id: reply.reply_id,
                                  route: reply.flyer_route,
                                  stAD: personalInfo.stateAd,
                                  fanpage_id: reply.fanpage_id,
                                  fanpage_name: reply.fanpage,
                                  flyer_state: reply.flyer_state,
                                }"
                                :reply="reply"
                              ></contact-flyer>
                            </b-col>
                            <b-col md="6" class="pr-0">
                              <contact-tasks
                                :replyId="reply.reply_id"
                                :requiredFieldsForCreateCrmTask="
                                  requiredFieldsForCreateCrmTask
                                "
                                :modul="modul"
                              ></contact-tasks>
                            </b-col>
                            <b-col md="6" class="pl-0">
                              <contact-files
                                :replyId="reply.reply_id"
                              ></contact-files>
                            </b-col>
                          </b-row>
                        </b-tab>
                      </b-tabs>
                    </div>
                  </b-tab>
                </b-tabs>
              </div>
            </b-card>
          </b-tab>
          <template #tabs-end>
            <b-button
              size="sm"
              class="rounded btn-orange ml-2 position-plus"
              title="Add new Reply"
              @click="addReply()"
            >
              <i class="fas fa-plus"></i>
            </b-button>
          </template>
        </b-tabs>
      </div>
      <!--  <modal-add-reply
        v-if="openReply"
        :open="openReply"
        @hideModal="hideModal"
        :reply="replyData"
      ></modal-add-reply> -->
    </b-card>
  </div>
</template>


<script>
// Components
import ContactInformation from "./ContactInformation.vue";
import ContactNotes from "./ContactNotes.vue";
import ContactFlyer from "./ContactFlyer.vue";
import ContactTasks from "./ContactTasks.vue";
import ContactFiles from "./ContactFiles.vue";

export default {
  props: {
    personalInfo: {
      type: Object,
      default: () => ({}),
    },
    requiredFieldsForCreateCrmTask: {
      type: Object,
      default: () => ({}),
    },
    catcher: {
      type: Number,
      default: () => 1,
    },
    lead_id: {
      type: Number,
      default: () => 0,
    },
    modul: [String, Number],
  },
  components: {
    ContactInformation,
    ContactNotes,
    ContactFlyer,
    ContactTasks,
    ContactFiles,
  },
  data() {
    return {
      sources: [],
      subSources: [],
      replies: [],
      replyShow: [],
      replyData: {
        typeReply: null,
        idSubSource: null,
        id_lead: this.lead_id,
        idCatcher: this.catcher,
        idProgram: null,
        idMethod: null,
      },

      indexSource: 0,
      indexSubSource: 0,
      indexReply: 0,

      allInfo: [],
      openReply: false,
      sourceIndex: 0,
      subSourceIndex: 0,
      replyIndex: 0,
      activeReply: 0,
      doneReload: false,
    };
  },

  created() {
    this.getInfoReplies();
    console.log(this.lead_id);
  },
  mounted() {},

  computed: {},
  methods: {
    setActiveColor(index) {
      this.activeReply = index;
    },
    addReply(type) {
      //Type //1 = Add Source //2 = Add Sub-Source //3 = Add Reply
      this.addPreloader();
      this.openReply = true;
      this.replyData.type = type;
    },
    async hideModal(data) {
      if (data) {
        await this.tabChanges(data);
      }
      this.openReply = false;
      this.removePreloader();
    },
    async tabChanges(data) {
      await this.getInfoReplies();
      //Index Parent
      let sIndex = 0;
      let ssIndex = 0;
      let rIndex = 0;
      await this.allInfo.forEach((source, index) => {
        if (source.id == data[0].source_id) {
          sIndex = index;
        }
      });

      //Index SubSource
      await this.allInfo[sIndex].sub_source.forEach((subSource, index) => {
        if (subSource.sub_source_id == data[0].sub_source_id) {
          ssIndex = index;
        }
      });

      //Index Reply
      let variants = await this.allInfo[sIndex].sub_source[ssIndex];

      await variants.replies.forEach((reply, index) => {
        if (reply.reply_id == data[0].reply_id) {
          rIndex = index;
        }
      });
      setTimeout(() => {
        this.sourceIndex = sIndex;
        this.subSourceIndex = ssIndex;
        this.replyIndex = rIndex;
      }, 400);
    },
    async getInfoReplies() {
      //let response = await axios.post("/api/get-lead-replies-sn", {
      //  id_lead: this.lead_id,
      //});
      //this.allInfo = response.data;
      //this.doneReload = true;
    },
  },
};
</script>

<style scoped>
.fs-18 {
  font-size: 18px;
}

.position-plus {
  position: absolute;
  right: 2rem;
}
</style>
