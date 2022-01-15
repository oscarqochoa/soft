<template>

  <div>
    <b-modal
      v-model="ownInsertControl"
      title-class="h3 text-white font-weight-bolder"

      size="sm"

      @hidden="closeInsertModal"
    >
      <template #modal-header>
        <p class="font-medium-3 font-weight-bolder text-white d-flex align-items-center justify-content-center w-100 "> NEW CAMPAIGN
          <b-img
            class="ml-1"
            :src="`http://localhost:8081/assets${flyer_name}`"
            style="height: 45px"
          /></p>

      </template>
      <b-form-group
        id="input-group-1"
        label="Campaign"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="new_item.campaign"
          type="text"
          placeholder="Enter campaign"
          required
        />
      </b-form-group>

      <template #modal-footer>
        <b-button
          variant="primary"
          @click="insertCampaignFlyers"
        >
          SAVE
        </b-button>

      </template>
    </b-modal>

    <b-modal
      v-model="ownControl"
      title-class="h3 text-white font-weight-bolder"

      size="xmd"
      title="FLYER"
      @hidden="closeModal"
    >
      <div>
        <ValidationObserver ref="form">
          <b-form>
            <b-container fluid>
              <b-row

                class="inline"
              >

                <b-col
                  v-if="type===1"
                  lg="3"
                >
                  <drag-and-drop
                    v-model="new_item.files"
                    :files-array="new_item.files"
                  />
                </b-col>
                <b-col
                  v-if="type===2"
                  lg="3"
                >
                  <b-img-lazy
                    class="img-content-table-ti"
                    v-bind="mainProps"
                    :src="item.route_thumb"
                  />
                </b-col>

                <b-col lg="9">
                  <b-row class="inline">

                    <b-col
                      md="3"
                      class="d-flex align-items-center justify-content-start p-0"
                    >
                      <span>
                        PROGRAM:
                      </span>
                    </b-col>

                    <b-col
                      v-if="type===1"
                      md="9"
                    >
                      <div
                        v-for="program in programs"
                        :key="program.id"
                        class="mr-1"
                        style="display: inline-flex"
                      >
                        <b-form-radio
                          v-model="new_item.program_id"
                          plain

                          :value="program.id"
                          name="program"
                          :disabled="disabled"
                        >

                          <b-img
                            :src="`${baseImg}/assets${program.logo}`"
                            style="height: 40px"
                          />

                        </b-form-radio></div>
                    </b-col>
                    <b-col
                      v-if="type===2"
                      md="9"
                    >
                      <div
                        v-for="program in programs"
                        :key="program.id"
                        class="mr-1"
                        style="display: inline-flex"
                      >
                        <b-form-radio
                          v-model="item.program"
                          plain

                          :value="program.value"
                          name="program"
                          :disabled="disabled"
                        >

                          <b-img
                            :src="`${baseImg}/assets${program.logo}`"
                            style="height: 40px"
                          />

                        </b-form-radio></div>
                    </b-col>

                    <b-col
                      md="3"
                      class="d-flex align-items-center justify-content-start p-0"
                    >
                      <span>
                        STATE:
                      </span>
                    </b-col>

                    <b-col
                      v-if="type===1"
                      md="9"
                      class="mt-1"
                    >
                      <b-form-group>

                        <v-select

                          v-model="new_item.state"
                          :options="states"
                          label="label"
                          :reduce="val=>val.value"
                          class="w-100"
                          :disabled="disabled"
                        />
                      </b-form-group>
                    </b-col>
                    <b-col
                      v-if="type===2"
                      md="9"
                      class="mt-1"
                    >
                      <b-form-group>

                        <v-select

                          v-model="item.state"
                          :options="states"
                          label="label"
                          :reduce="val=>val.value"
                          class="w-100"
                          :disabled="disabled"
                        />
                      </b-form-group>
                    </b-col>

                    <b-col
                      md="3"
                      class="d-flex align-items-center justify-content-start p-0"
                    >
                      <span>
                        CAMPAIGN:
                      </span>
                    </b-col>

                    <b-col
                      v-if="type===1"
                      md="8"
                    >
                      <b-form-group>
                        <v-select
                          v-model="new_item.campaign"
                          label="value"
                          :reduce="val=>val.id"
                          :options="campaigns"
                          class="w-100"
                          :disabled="disabled"
                        /></b-form-group>
                    </b-col>
                    <b-col
                      v-if="type===2"
                      md="8"
                    >
                      <b-form-group>

                        <v-select

                          v-model="item.campaign"
                          :options="items"
                          label="campaign"
                          :reduce="val=>val.campaign"
                          class="w-100"
                          :disabled="disabled"
                        /></b-form-group>
                    </b-col>

                    <b-col
                      md="1"
                      class="d-flex align-items-start justify-content-center "
                      style="margin-top: 10px"
                    >

                      <amg-icon
                        v-if="addCampaignOn"
                        icon="PlusCircleIcon"
                        title="PLUS"

                        size="20"
                        class="cursor-pointer"
                        @click="OpenInsertModal"
                      />

                      <amg-icon
                        v-if="new_item.campaign"
                        icon="MinusCircleIcon"
                        title="PLUS"
                        size="20"
                        class="cursor-pointer"
                        @click="deleteCampaigns"
                      />
                    </b-col>

                    <b-col
                      md="3"
                      class="d-flex align-items-center justify-content-start p-0"
                    >
                      <span>
                        FLYER NAME:
                      </span>
                    </b-col>

                    <b-col
                      v-if="type===1"
                      md="9"
                    >
                      <b-form-group>

                        <b-input
                          v-model="new_item.flyer_name"
                          type="text"
                          :disabled="disabled"
                        />
                      </b-form-group>
                    </b-col>
                    <b-col
                      v-if="type===2"
                      md="9"
                    >
                      <b-form-group>

                        <b-input
                          v-model="item.flyer_name"
                          type="text"
                          :disabled="disabled"
                        />
                      </b-form-group>
                    </b-col>

                    <b-col
                      md="3"
                      class="d-flex align-items-center justify-content-start p-0"
                    >
                      <span>
                        PUBLICATION DATE:
                      </span>
                    </b-col>
                    <b-col
                      v-if="type===1"
                      md="3"
                    >
                      <b-form-group>

                        <b-form-datepicker
                          v-model="new_item.publication_date"
                          locale="en"
                          :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                          :disabled="disabled"
                        />
                      </b-form-group>

                    </b-col>
                    <b-col
                      v-if="type===2"
                      md="3"
                    >
                      <b-form-group>

                        <b-form-datepicker
                          v-model="item.publication_date"
                          locale="en"
                          :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                          :disabled="disabled"
                        />
                      </b-form-group>

                    </b-col>

                    <b-col
                      md="3"
                      class="d-flex align-items-center justify-content-end p-0"
                    >
                      <span>
                        ACTIVE:
                      </span>
                    </b-col>
                    <b-col
                      v-if="type===1"
                      md="3"
                      class="d-flex align-items-end justify-content-start"
                    >
                      <b-form-group>

                        <VueToggles
                          checked-text="YES"
                          unchecked-text="NO"
                          checked-bg="#0589A6"
                          unchecked-bg="lightgrey"
                          font-weight="bold"
                          :disabled="disabled"
                          :value="new_item.active"
                          @click="new_item.active = !new_item.active"
                        />
                      </b-form-group>

                    </b-col>
                    <b-col
                      v-if="type===2"
                      md="3"
                      class="d-flex align-items-end justify-content-start"
                    >
                      <b-form-group>

                        <VueToggles
                          checked-text="YES"
                          unchecked-text="NO"
                          checked-bg="#0589A6"
                          unchecked-bg="lightgrey"
                          font-weight="bold"
                          :disabled="disabled"
                          :value="item.active === 1"
                          @click="item.active = !item.active"
                        />
                      </b-form-group>

                    </b-col>

                  </b-row>

                </b-col>
              </b-row>

            </b-container>
            <b-row>
              <b-col lg="3" />
              <b-col lg="9">
                <b-row>
                  <b-col
                    md="3"
                    class="d-flex align-items-center justify-content-start p-0"
                  >
                    <span>
                      OBSERVATION:
                    </span>
                  </b-col>

                  <b-col
                    v-if="type===1"
                    md="9"
                  >
                    <b-form-textarea
                      v-model="new_item.observation"

                      class="input-form"
                      :disabled="disabled"
                    />

                  </b-col>
                  <b-col
                    v-if="type===2"
                    md="9"
                  >
                    <b-form-textarea
                      v-model="item.observation"

                      class="input-form"
                      :disabled="disabled"
                    />

                  </b-col>
                </b-row>

              </b-col>
            </b-row>
          </b-form>
        </validationobserver>
      </div>

      <template #modal-footer>
        <b-button
          variant="primary"
          @click="insertFlyer"
        >
          SAVE
        </b-button>
      </template></b-modal>
  </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex'
import vSelect from 'vue-select'
import VueToggles from 'vue-toggles'
import DragAndDrop from '@/views/commons/utilities/DragAndDrop.vue'
import SocialNetworkService from '@/views/social-network/services/social-network.service'

export default {
  components: {
    vSelect,
    VueToggles,
    DragAndDrop,
  },
  props: {
    item: {},
    items: {},
    type: null,

  },
  data() {
    return {
      baseImg: process.env.VUE_APP_BASE_URL_FRONT,
      ownControl: false,
      ownInsertControl: false,
      campaigns: [],
      mainProps: {
        center: false,
        fluidGrow: false,
        blank: true,
        blankColor: '#bbb',
        height: 73,
        block: false,
        fluid: true,
        rounded: true,
        thumbnail: true,
      },
      changeOn: false,
      files: [],
      new_item: {
        active: true, state: '', program_id: '', campaign: '', files: [],
      },
      disabled: false,
      flyer_name: null,
      addCampaignOn: false,
    }
  },
  created() {
    this.validacion()
    this.ownControl = true
  },
  methods: {
    async getCampaigns() {
      try {
        const params = {
          program: this.new_item.program_id,
          state: this.new_item.state,

        }
        const data = await SocialNetworkService.getCampaignFlyers(params)
        this.campaigns = data.data
      } catch (e) {
        this.showErrorSwal(e)
        return []
      }
    },

    async deleteCampaigns() {
      const result = await this.showConfirmSwal()
      if (result.isConfirmed) {
        try {
          const params = {
            id: this.new_item.campaign,

          }
          const data = await SocialNetworkService.deleteCampaignFlyers(params)
          if (data.status === 200) {
            await this.getCampaigns()
            this.new_item.campaign = null
            this.showSuccessSwal()
          }
        } catch (e) {
          this.showErrorSwal(e)
        }
      }
    },
    closeModal() {
      this.$emit('close')
    },

    tituloInsertCampaign() {
      this.programs.forEach(program => {
        if (program.id === this.new_item.program_id) {
          this.flyer_name = program.logo
        }
      })
      return this.flyer_name
    },
    OpenInsertModal() {
      this.tituloInsertCampaign()
      this.ownInsertControl = true
    },

    closeInsertModal() {
      this.ownInsertControl = false
    },
    validacion() {
      if (this.type === 2) {
        this.disabled = true
        console.log('asdasd')
      }
    },

    mostrar() {
      console.log(this.new_items)
    },

    async insertFlyer() {
      try {
        const result = await this.showConfirmSwal()
        if (result.isConfirmed) {
          const formData = new FormData()
          this.new_item.files.forEach(file => {
            formData.append('images[]', file, file.name)
          })
          this.addPreloader()
          if (!this.new_item.active) {
            this.new_item.active = 0
          } else {
            this.new_item.active = 1
          }
          formData.append('user_id', this.currentUser.user_id)

          formData.append('campaign_id', this.new_item.campaign)
          formData.append('publication_date', this.new_item.publication_date)
          formData.append('active', this.new_item.active)
          formData.append('observation', this.new_item.observation)

          formData.append('flyer_name', this.new_item.flyer_name)
          const headers = {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            // eslint-disable-next-line func-names
            onUploadProgress: function (progressEvent) {
              this.uploadPercentage = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            }.bind(this),
          }
          const response = await amgApi.post('/upload-bank-flyers', formData, headers)
          console.log(response)
          if (response.status === 200) {
            this.uploadFileModal = false
            this.removePreloader()
            this.showSuccessSwal()
          }
        }
      } catch (error) {
        this.removePreloader()
        this.showErrorSwal(error)
      }
    },

    async insertCampaignFlyers() {
      try {
        const params = {
          campaign: this.new_item.campaign,
          program: this.new_item.program_id,
          state: this.new_item.state,
          user: this.currentUser.user_id,
        }
        const data = await SocialNetworkService.insertCampaignFlyers(params)
        if (data.status === 200) {
          await this.getCampaigns()
          this.showSuccessSwal()
          this.closeInsertModal()
          this.new_item.campaign = this.campaigns[this.campaigns.length - 1].id
          console.log(this.new_item.campaign, 'aaa')
        }
      } catch (e) {
        this.showErrorSwal(e)
        return []
      }
    },
  },
  computed: {
    ...mapState({
      programs: state => state.SocialNetworkGlobalStore.S_PROGRAMS,
      states: state => state.SocialNetworkGlobalStore.S_STATES,
    }),
    ...mapGetters({

      currentUser: 'auth/currentUser',

    }),
  },
  watch: {
    'new_item.state': {
      async handler(newVal) {
        if (this.new_item.program_id && newVal) {
          this.addCampaignOn = true
          await this.getCampaigns()
        }
      },
      deep: true,
    },
    'new_item.program_id': {
      async handler(newVal) {
        if (this.new_item.state && newVal) {
          this.addCampaignOn = true
          await this.getCampaigns()
        }
      },
      deep: true,
    },
  },
}
</script>

<style scoped>

</style>
