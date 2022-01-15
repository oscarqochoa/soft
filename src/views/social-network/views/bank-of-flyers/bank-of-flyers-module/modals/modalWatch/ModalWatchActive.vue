<template>
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
                        v-model="new_item.program"
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
                        :options="items"
                        label="campaign"
                        :reduce="val=>val.campaign"
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
                      v-if="item.campaign != null"
                      icon="PlusCircleIcon"
                      title="PLUS"
                      size="20"
                      class="cursor-pointer"
                    />

                    <amg-icon
                      v-if="!changeOn"
                      icon="MinusCircleIcon"
                      title="PLUS"
                      size="20"
                      class="cursor-pointer"
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
                        :value="item.active"
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
        </b-form></validationobserver></div>
  </b-modal>
</template>

<script>
import { mapState } from 'vuex'
import vSelect from 'vue-select'
import VueToggles from 'vue-toggles'
import DragAndDrop from '@/views/commons/utilities/DragAndDrop.vue'

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
      new_item: { active: true },
      disabled: false,

    }
  },
  created() {
    this.validacion()
    this.ownControl = true
  },
  methods: {
    closeModal() {
      this.$emit('close')
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
  },
  computed: {
    ...mapState({

      programs: state => state.SocialNetworkGlobalStore.S_PROGRAMS,
      states: state => state.SocialNetworkGlobalStore.S_STATES,

    }),

  },

}
</script>

<style scoped>

</style>
