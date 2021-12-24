<template>
  <div class="w-100">
    <b-button-close
      style="transform: translate(-12px, 4px)"
      @click="close"
    />
    <b-container fluid>
      <b-row class="text-left bg-primary px-3 py-1">
        <h3 class="font-weight-bolder text-white">
          {{ titleModal }}
        </h3>
      </b-row>
      <b-row class="mt-1 px-2">
        <b-col
          v-if="!modalAddShow && !modalAddLead"
          cols="3"
        >
          <h5>Program</h5>
          <p class="border-2 border-primary rounded text-primary text-center py10">
            {{ sales.program }}
          </p>
        </b-col>
        <b-col cols="3">
          <h5>Client</h5>
          <p class="border-2 border-primary rounded text-primary text-center py10">
            {{ sales.client }}
          </p>
        </b-col>
      </b-row>
      <b-row
        v-if="modalAddShow"
        class="mt-1"
      >
        <b-col md="6">
          <b-input-group>
            <b-input-group-prepend>
              <b-btn variant="secondary">
                TYPE
              </b-btn>
            </b-input-group-prepend>
            <b-form-input
              disabled
              :value="typeAddChange + 'SERVICES'"
            />
          </b-input-group>
        </b-col>
        <b-col md="6">
          <b-input-group>
            <b-input-group-prepend>
              <b-btn variant="secondary">
                ORIGIN
              </b-btn>
            </b-input-group-prepend>
            <b-form-input
              disabled
              :value="sales.program_first"
            />
          </b-input-group>
        </b-col>
        <b-col md="6">
          <b-input-group>
            <b-input-group-prepend>
              <b-btn variant="secondary">
                DESTINATION
              </b-btn>
            </b-input-group-prepend>
            <b-form-input
              disabled
              :value="sales.program"
            />
          </b-input-group>
        </b-col>
      </b-row>

      <b-row
        v-if="modalAddService || modalAddLead"
        class="mt-1"
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
      </b-row>
    </b-container>
  </div>
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
.py10{
  padding-top: 5px !important;
  padding-bottom: 5px !important;
}
</style>
