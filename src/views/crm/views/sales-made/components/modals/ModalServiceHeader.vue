<template>
  <b-row class="w-103 mr-0">
    <b-col
      md="12"
      class="text-white d-flex p-2 justify-content-md-between b-vue-modal-header"
    >
      <span />
      <span>
        <h3 class="font-weight-bold text-center">{{ titleModal }}</h3>
      </span>
      <i
        class="fas fa-times-circle text-white clickable x-header-modal text-right"
        @click="close()"
      />
    </b-col>

    <div
      v-if="!modalAddShow && !modalAddLead"
      class="col-md-6"
    >
      <div class="form-group class-inline row">
        <div class="class-campo-icon col-md-4">
          Program
        </div>
        <div class="class-campo-text col-md-8">
          <span>{{ sales.program }}</span>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group class-inline row">
        <div class="class-campo-icon col-md-4">
          Client
        </div>
        <div class="class-campo-text col-md-8">
          <span>{{ sales.client }}</span>
        </div>
      </div>
    </div>
    <template v-if="modalAddShow">
      <div class="col-md-6">
        <div class="form-group class-inline row">
          <div class="class-campo-icon col-md-4">
            Type
          </div>
          <div class="class-campo-text col-md-8">
            <span>{{ typeAddChange }} SERVICES</span>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group class-inline row">
          <div class="class-campo-icon col-md-4">
            Origin
          </div>
          <div class="class-campo-text col-md-8">
            <span>{{ sales.program_first }}</span>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group class-inline row">
          <div class="class-campo-icon col-md-4">
            Destination
          </div>
          <div class="class-campo-text col-md-8">
            <span>{{ sales.program }}</span>
          </div>
        </div>
      </div>
    </template>

    <div
      v-if="modalAddService || modalAddLead"
      class="col-lg-12 col-md-12 justify-content-center mt-2"
      style="display: inline-flex"
    >
      <div
        class="form-group"
        style="margin: 0px 10px;"
      >
        <label class="mb-0">Select Program</label>
        <select
          v-model="program"
          class="input-form"
          style="color: #666666 !important"
          @change="changeProgram()"
        >
          <option
            v-for="(item, index) in programsAll"
            :key="index"
            :value="item.id"
          >{{ item.value }}</option>
        </select>
      </div>
      <div
        class="form-group"
        style="margin: 0px 10px;"
      >
        <label class="mb-0">Catcher:</label>
        <select
          id
          v-model="captured"
          name
          class="input-form"
        >
          <option value="1">
            CEO
          </option>
          <option
            v-for="(item, index) in usersServices"
            :key="index"
            :value="item.id"
          >{{ item.user_name }}</option>
        </select>
      </div>
      <div
        class="form-group"
        style="margin: 0px 10px;"
      >
        <label class="mb-0">Seller:</label>
        <select
          id
          v-model="seller"
          name
          class="input-form"
          :disabled="rolAdvisor"
        >
          <option value="1">
            CEO
          </option>
          <option
            v-for="(item, index) in usersServices"
            :key="index"
            :value="item.id"
          >{{ item.user_name }}</option>
        </select>
      </div>
    </div>
  </b-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    typeModal: {
      type: Number,
      default: 1,
      // 1: complete rates crm, 2: detail of sale, 3: add Services
      // 4: change Services, 5 show add change Services, 6  add  services leads programs
    },
    usersServices: {
      type: Array,
      default: () => [],
    },
    programsAll: {
      type: Array,
      default: () => [],
    },
    headerS: {
      type: Object,
      default: () => ({
        program: '',
        seller: '',
        captured: '',
      }),
    },
    sales: {
      type: Object,
      default: () => ({
        program: '',
        client: '',
        program_first: '',
        typeAdd: '',
      }),
    },
  },
  data() {
    return {
      programsall: [],
      program: '',
      sellers: [],
      seller: '',
      captureds: [],
      captured: '',
      capturedConfirm: true,
      sellerConfirm: true,
    }
  },
  computed: {
    ...mapGetters({
      currentUser: 'auth/currentUser',
    }),
    titleModal() {
      if (this.typeModal === 1) {
        return 'COMPLETE RATES'
      } if (this.typeModal === 2 || this.typeModal === 5) {
        return 'DETAIL OF SALE'
      } if (this.typeModal === 3) {
        return 'ADD SERVICE'
      } if (this.typeModal === 4) {
        return 'CHANGE SERVICES'
      } if (this.typeModal === 6) {
        return 'ADD SALE'
      }
      return ''
    },
    modalAddService() {
      return this.typeModal === 3 || this.typeModal === 4
    },
    modalAddLead() {
      return this.typeModal === 6
    },
    modalAddShow() {
      return this.typeModal === 5
    },
    modul() {
      return this.currentUser.modul_id
    },
    rolAdvisor() {
      return this.currentUser.role_id === 3
    },
    typeAddChange() {
      if (this.sales.typeAdd === 1) {
        return 'ADD'
      }
      return 'CHANGE'
    },
  },
  watch: {
    captured(newValue, oldValue) {
      if (!oldValue) {
        this.changeProgram()
      }
    },
    seller(newValue, oldValue) {
      if (!oldValue) {
        this.changeProgram()
      }
    },
  },
  mounted() {
    if (this.modalAddService || this.modalAddLead) {
      this.program = this.headerS.program
      this.seller = this.headerS.seller
      this.captured = this.headerS.captured
    }

    if (this.rolAdvisor) this.seller = this.currentUser.user_id
  },
  methods: {
    close() {
      this.$emit('close')
    },
    changeProgram() {
      if (this.program && this.seller && this.captured) {
        const headerS = {
          program: this.program,
          seller: this.seller,
          captured: this.captured,
        }
        this.$emit('changeProgram', headerS)
      }
    },
  },
}
</script>

<style>
</style>
