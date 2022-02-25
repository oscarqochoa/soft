<template>
  <b-card no-body class="p-4 mt-4">
    <b-row>
      <b-col md="6">
        <h4 class="title-card">Catchment</h4>
      </b-col>
      <b-col md="6 text-right">
        <h4 class="title-card">Catcher: {{ this.currentUser.fullName }}</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <ValidationProvider rules="required" v-slot="{errors}">
          <b-col md="12">
            <b-form-group
                id="fieldset-horizontal"
                label-class="font-bureau-style font-weight-normal color-gray-input-sn"
                label-cols-sm="4"
                label-for="input-horizontal"
                label-cols-lg="4"
                content-cols-sm
                content-cols-lg="8"
                label="ST/AD"
            >
              <b-form-select
                  v-model="lead.state_h"
                  :options="optionsStatesAd"
                  class="select-icon-none font-bureau-style border-hover bg-white-c"
                  :class="{'border-error-sn' :errors[0]}"
                  @change="lead.flyer = null"
              ></b-form-select>
              <div v-if="errors[0]" class="text-error-sn text-center">ST/AD {{errors[0]}}</div>
            </b-form-group>
          </b-col>
        </ValidationProvider>
        <b-col md="12">
          <b-form-group
              id="fieldset-horizontal"
              label-class="font-bureau-style font-weight-normal color-gray-input-sn"
              label-cols-sm="4"
              label-for="input-horizontal"
              label-cols-lg="4"
              content-cols-sm
              content-cols-lg="8"
              label="Lead Owner"
          >
            <b-form-select
                v-model="lead.user_id"
                :options="this.optionsOwners"
                class="select-icon-none font-bureau-style border-hover bg-white-c"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="12">
          <b-form-group
              id="fieldset-horizontal"
              label-class="font-bureau-style font-weight-normal color-gray-input-sn"
              label-cols-sm="4"
              label-for="input-horizontal"
              label-cols-lg="4"
              content-cols-sm
              content-cols-lg="8"
              label="Suggestions"
          >
            <v-select
                v-model="lead.program"
                :options="optionPrograms"
                :multiple="true"
                :close-on-select="false"
                :clear-on-select="true"
                :preserve-search="true"
                placeholder="Pick some"
                class="border rounded border-hover"
                style=" background-color: #f8f9fa !important;"
                label="name"
                track-by="name"
                :preselect-first="true"
            ></v-select>
          </b-form-group>
        </b-col>
      </b-col>
      <b-col md="8">
        <b-form-group
            id="fieldset-horizontal"
            label-class="font-bureau-style font-weight-normal color-gray-input-sn"
            label-cols-sm="4"
            label-for="input-horizontal"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="10"
            label="Source"
        >
          <b-row>
            <b-col md="6 p-4 pt-0">
              <ValidationProvider rules="required" v-slot="{errors}">
                <b-row>
                  <b-col md="12">
                    <button
                        class="rounded py-2 sources-size btn-sources border-0 btn-block btn"
                        :class="{'btn-select-source': isFacebook}"
                        @click="selectSource(17)"
                    >
                      <i class="fab fa-facebook-f mr-2" style="font-size:14px"></i>Facebook
                    </button>
                  </b-col>
                  <div v-if="errors[0]" class="text-error-sn text-center">Source {{errors[0]}}</div>
                  <input type="radio" class="d-none" v-model="lead.sourcesname_id" />
                </b-row>
              </ValidationProvider>

              <!-- Sub Sources Facebook -->
              <ValidationProvider rules="required" v-slot="{errors}">
                <b-row class="mt-3">
                  <template v-for="(subSource, index) in sources">
                    <b-col
                        md="4"
                        v-if="subSource.parent_id == 1"
                        :key="index"
                        :title="subSource.name"
                    >
                      <button
                          class="rounded sub-sources btn-sub-sources border-0 btn-block btn"
                          @click="selectSubSource(subSource.id)"
                          :class="{'btn-select-sub-source': lead.sub_source == subSource.id}"
                          :disabled="!isFacebook"
                      >{{subSource.name }}</button>
                    </b-col>
                  </template>
                  <div
                      v-if="errors[0] && isFacebook"
                      class="text-error-sn text-center"
                  >Sub-Source {{errors[0]}}</div>
                  <input type="radio" class="d-none" v-model="lead.sub_source" />
                </b-row>
              </ValidationProvider>
            </b-col>

            <!-- GOOGLE -->
            <b-col md="6 p-4 pt-0">
              <ValidationProvider rules="required" v-slot="{errors}">
                <b-row>
                  <b-col md="12">
                    <button
                        class="rounded py-2 sources-size btn-sources border-0 btn-block btn"
                        :class="{'btn-select-source': isGoogle}"
                        @click="selectSource(32)"
                    >
                      <i class="fab fa-google mr-2" style="font-size:14px"></i>Google
                    </button>
                  </b-col>
                  <div v-if="errors[0]" class="text-error-sn text-center">Source {{errors[0]}}</div>
                  <input type="radio" class="d-none" v-model="lead.sourcesname_id" />
                </b-row>
              </ValidationProvider>

              <!-- Contact Method -->
              <ValidationProvider :rules="`${ isGoogle? 'required' : ''}`" v-slot="{errors}">
                <b-row class="mt-3">
                  <b-col md="3">
                    <button
                        class="rounded method-contact border-0 btn-block btn"
                        :class="lead.google_ads == 1? 'btn-select-methods' : 'btn-methods' "
                        @click="selectMethod(1)"
                        :disabled="!isGoogle"
                    >E-mail</button>
                  </b-col>
                  <b-col md="3 px-1">
                    <button
                        class="rounded method-contact border-0 btn-block btn"
                        :class="lead.google_ads == 2? 'btn-select-methods' : 'btn-methods' "
                        @click="selectMethod(2)"
                        :disabled="!isGoogle"
                    >Messenger</button>
                  </b-col>
                  <b-col md="3 px-1">
                    <button
                        class="rounded method-contact border-0 btn-block btn"
                        :class="lead.google_ads == 4? 'btn-select-methods' : 'btn-methods' "
                        @click="selectMethod(4)"
                        :disabled="!isGoogle"
                    >Whatsapp</button>
                  </b-col>
                  <b-col md="3">
                    <button
                        class="rounded method-contact border-0 btn-block btn"
                        :class="lead.google_ads == 3? 'btn-select-methods' : 'btn-methods' "
                        @click="selectMethod(3)"
                        :disabled="!isGoogle"
                    >Call</button>
                  </b-col>
                  <input type="radio" class="d-none" v-model="lead.google_ads" />
                  <div
                      v-if="errors[0]"
                      class="text-error-sn text-center"
                  >Contact Method {{errors[0]}}</div>
                </b-row>
              </ValidationProvider>

              <!-- Sub Sources Google -->
              <ValidationProvider rules="required" v-slot="{errors}">
                <b-row class="mt-3">
                  <template v-for="(subSource, index) in sources">
                    <b-col
                        md="4"
                        v-if="subSource.parent_id == 2"
                        :key="index"
                        :title="subSource.name"
                    >
                      <button
                          class="rounded sub-sources btn-sub-sources border-0 btn-block btn"
                          :disabled="!isGoogle"
                          @click="selectSubSource(subSource.id)"
                          :class="{'btn-select-sub-source': lead.sub_source == subSource.id}"
                      >{{subSource.name }}</button>
                    </b-col>
                  </template>
                  <div
                      v-if="errors[0] && isGoogle"
                      class="text-error-sn text-center"
                  >Sub-Source {{errors[0]}}</div>
                  <input type="radio" class="d-none" v-model="lead.sub_source" />
                </b-row>
              </ValidationProvider>
            </b-col>
          </b-row>
        </b-form-group>

        <!-- Programs -->
        <div>
          <b-form-group
              id="fieldset-horizontal"
              label-class="font-bureau-style font-weight-normal color-gray-input-sn"
              label-cols-sm="4"
              label-for="input-horizontal"
              label-cols-lg="2"
              content-cols-sm
              content-cols-lg="10"
              label="Program"
          >
            <ValidationProvider rules="required" v-slot="{errors}">
              <b-row class="d-flex justify-content-between px-3">
                <template v-for="(program, index) in programs_fanpage">
                  <div class="mx-1" :key="index" :title="program.value">
                    <button
                        class="rounded sub-sources border-0 btn-block btn"
                        :class="[`btn-program-${program.id}`, lead.fanpage_id == program.id? `btn-program-select-${program.id}` : '']"
                        @click="selectProgram(program.id, program.value )"
                    >{{program.value}}</button>
                  </div>
                </template>
                <div v-if="errors[0]" class="text-error-sn text-center">Program {{errors[0]}}</div>
                <input type="radio" class="d-none" v-model="lead.fanpage_id" />
              </b-row>
            </ValidationProvider>
          </b-form-group>
        </div>

        <!-- Flyers -->

        <transition name="show">
          <div v-if="isFacebook">
            <b-form-group
                id="fieldset-horizontal"
                label-class="font-bureau-style font-weight-normal color-gray-input-sn align-items-center d-flex"
                label-cols-sm="4"
                label-for="input-horizontal"
                label-cols-lg="2"
                content-cols-sm
                content-cols-lg="10"
                label="Flyer"
                class="mt-4"
            >
              <b-row class="align-items-center">
                <div v-if="!lead.flyer">
                  <b-avatar rounded size="12rem" class="ml-3">
                    <template #default>
                      <span class="b-avatar-text" style="font-size: calc(1.9rem);">UNKNOWN</span>
                    </template>
                  </b-avatar>
                </div>
                <div v-else>
                  <div
                      :value="item.id"
                      v-for="item in optionsFlyers"
                      :key="item.id"
                      v-show="lead.flyer == item.id"
                  >
                    <label
                        :for="'flyer_'+item.id"
                        style="max-width: 12rem;"
                        class="ml-3 p-relative"
                    >
                      <b-img-lazy v-bind="mainProps" :src="item.route_thumb"></b-img-lazy>
                      <span class="badge state-badge" :class="flyerStateNew">{{item.state}}</span>
                    </label>
                  </div>
                </div>
                <transition name="show">
                  <button
                      v-if="isFullFlyer"
                      @click="openModalChooseFlyer(false)"
                      class="btn-sm btn-secondary btn-orange-sn ml-2"
                  >Select</button>
                </transition>
              </b-row>
            </b-form-group>
          </div>
        </transition>
      </b-col>
    </b-row>

    <!-- Modal Flyer -->



  </b-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vSelect from "vue-select";

export default {
  name: 'CatchmentCreateSn',
  components: {
    vSelect
  },
  props: {
    lead: {
      type: Object,
      default: () => ({}),
    },
    info: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      optionsStatesAd: [],
      optionsOwners: [],
      optionPrograms: [],
      optionsFlyers: [],
      titleModalChoose: "",
      modalChooseFlyer: false,
      unknown: false,
      sources: [],
      programs_fanpage: [],

      //lazy Img
      mainProps: {
        center: false,
        fluidGrow: false,
        blank: true,
        blankColor: "#bbb",
        height: 137,
        block: false,
        fluid: true,
        rounded: true,
        thumbnail: true,
      },
      blankImgProps: {
        blank: true,
        width: 137,
      },
    };
  },
  created() {
    this.statesAD();
    this.userCreatorOwner();
    this.programsAll();
    this.getSubSourceSn();
    this.fanpageAll();

    this.optionsOwners.push({
      text: 'Select Owner',
      value: null,
      disable: true
    })
    const arrayOwner = this.G_OWNERS.map(owner => {
      return {
        text: owner. label,
        value: owner.value
      }
    });
    this.optionsOwners = [...this.optionsOwners, ...arrayOwner]
    console.log('owners', this.optionsOwners, arrayOwner)
  },
  async mounted() {
    await this.A_GET_STATES()
    await this.A_GET_PROGRAMS()
    await this.A_GET_OWNERS({
      modul: this.currentUser.modul_id,
      body: { roles: "[1,2,5]", type: "1" }
    })
  },
  computed: {
    ...mapGetters({
      currentUser: "auth/currentUser",
      token: "auth/token",
      G_PROGRAMS: "CrmGlobalStore/G_PROGRAMS",
      G_LANGUAGES: "CrmGlobalStore/G_LANGUAGES",
      G_STATE_LEADS: "CrmLeadStore/G_STATE_LEADS",
      G_OWNERS: "CrmGlobalStore/G_OWNERS",
    }),
    isFacebook() {
      return this.lead.sourcesname_id == 17;
    },
    isGoogle() {
      return this.lead.sourcesname_id == 32;
    },
    isFullFlyer() {
      return this.lead.state_h && this.lead.fanpage_id;
    },
  },
  methods: {
    ...mapActions('CrmGlobalStore', ['A_GET_PROGRAMS','A_GET_OWNERS','A_GET_STATES']),

    //Select Sources Programs
    selectSource(id) {
      this.lead.sourcesname_id = id;
      this.lead.sub_source = null;
      this.lead.google_ads = null;
      this.lead.flyer = null;
    },
    selectSubSource(id) {
      this.lead.sub_source = id;
    },
    selectMethod(id) {
      this.lead.google_ads = id;
    },
    selectProgram(id, name) {
      this.lead.fanpage_id = id;
      this.titleModalChoose = name;
      this.lead.flyer = null;
    },

    //Get Options Selects
    async getFlyers() {

    },
    async statesAD() {
      const states = [
        {
          disabled:true,
          text:"Select a State",
          value:null
        },
        {
          text:"California",
          value:"CA"
        },
        {
          text:"Florida",
          value:"FL"
        }
      ]
      this.optionsStatesAd = states;
    },
    userCreatorOwner() {

    },
    programsAll() {
      const programs = [
        {
          id:2,
          logo:"/images/logos/logo-bc.png",
          value:"Boost Credit",
        },
        {
          id:1,
          logo:"/images/logos/logo-bu.png",
          value:"Business",
        }
      ]
      this.optionPrograms = programs;
    },
    async getSubSourceSn() {

    },
    fanpageAll() {

    },
  },
};
</script>

<style scoped>
.border-hover:hover {
  border: 2px solid #7000ff !important;
}
</style>
