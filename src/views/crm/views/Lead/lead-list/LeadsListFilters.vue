<template>
  <b-card no-body>
    <b-form-group v-if="!basicSearch">
      <b-form-row
        class="justify-content-end"
      >
        <b-col
          v-if="filters.includes('from')"
          cols="6"
          md="1"
        >
          <label>From:</label>
          <b-form-datepicker
            id="from-date-picker"
            locale="en"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
            placeholder="From"
            size="sm"
            v-model="filter.from"
            @input="$emit('update:fromFilter', filter.from)"
          />
        </b-col>
        <b-col
          v-if="filters.includes('to')"
          cols="6"
          md="1"
        >
          <label>To:</label>
          <b-form-datepicker
            id="to-date-picker"
            locale="en"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
            placeholder="To"
            size="sm"
            v-model="filter.to"
            @input="$emit('update:toFilter', filter.to)"
          />
        </b-col>
        <b-col
          v-if="filters.includes('status-lead')"
          cols="6"
          md="1"
        >
          <label>Status Lead:</label>
          <v-select
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :value="statusLeadFilter"
            :options="statusLeadOptions"
            class="w-100 sm"
            :reduce="val => val.value"
            @input="(val) => $emit('update:statusLeadFilter', val)"
          />
        </b-col>
        <b-col
          v-if="filters.includes('owner')"
          cols="6"
          md="1"
        >
          <label>Owner:</label>
          <v-select
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :value="ownerFilter"
            :options="ownerOptions"
            class="w-100 sm"
            :reduce="val => val.value"
            @input="(val) => $emit('update:ownerFilter', val)"
          />
        </b-col>
        <b-col
          v-if="filters.includes('assign-to')"
          cols="6"
          md="1"
        >
          <label>Assign To:</label>
          <v-select
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :value="assignToFilter"
            :options="assignToOptions"
            class="w-100 sm"
            :reduce="val => val.value"
            @input="(val) => $emit('update:assignToFilter', val)"
          />
        </b-col>
        <b-col
          v-if="filters.includes('cr')"
          cols="6"
          md="1"
        >
          <label>CR:</label>
          <v-select
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :value="crFilter"
            :options="crOptions"
            class="w-100 sm"
            :reduce="val => val.value"
            @input="(val) => $emit('update:crFilter', val)"
          />
        </b-col>
        <b-col
          v-if="filters.includes('program')"
          cols="6"
          md="1"
        >
          <label>Programs:</label>
          <v-select
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :value="programFilter"
            :options="programOptions"
            class="w-100 sm"
            :reduce="val => val.value"
            @input="(val) => $emit('update:programFilter', val)"
          />
        </b-col>
        <b-col
          v-if="filters.includes('source-name')"
          cols="6"
          md="1"
        >
          <label>Source Name:</label>
          <v-select
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :value="sourceNameFilter"
            :options="sourceNameOptions"
            class="w-100 sm"
            :reduce="val => val.value"
            @input="(val) => $emit('update:sourceNameFilter', val)"
          />
        </b-col>
        <b-col
          v-if="filters.includes('type-doc')"
          cols="6"
          md="1"
        >
          <label>Type Doc:</label>
          <v-select
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :value="typeDocFilter"
            :options="typeDocOptions"
            class="w-100 sm"
            :reduce="val => val.value"
            @input="(val) => $emit('update:typeDocFilter', val)"
          />
        </b-col>
        <b-col
          v-if="filters.includes('st-ad')"
          cols="6"
          md="1"
        >
          <label>ST/AD:</label>
          <v-select
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :value="stAdFilter"
            :options="stAdOptions"
            class="w-100 sm"
            :reduce="val => val.value"
            @input="(val) => $emit('update:stAdFilter', val)"
          />
        </b-col>
        <b-col
          cols="6"
          md="1"
          class="pt-2 flexible text-right"
        >
          <b-button
            size="sm"
            variant="warning"
            class="btn-icon"
            v-b-tooltip.hover.bottom="'Search'"
          >
            <feather-icon
              icon="SearchIcon"
              size="18"
            />
          </b-button>
        </b-col>
        <b-col
          cols="6"
          md="1"
          class="pt-2 flexible"
        >
          <b-button
            size="sm"
            variant="warning"
            class="btn-icon"
            v-b-tooltip.hover.bottom="'clear'"
            @click="clearFilters"
          >
            <feather-icon
              icon="XIcon"
              size="18"
            />
          </b-button>
        </b-col>
      </b-form-row>
    </b-form-group>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardBody, BRow, BCol,
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    vSelect,
  },
  props: {
    filters: {
      type: Array,
      required: true,
    },
    fromFilter: {
      type: String,
      default: null,
    },
    toFilter: {
      type: String,
      default: null,
    },
    statusLeadFilter: {
      type: [Number, null],
      default: null,
    },
    ownerFilter: {
      type: [Number, null],
      default: null,
    },
    assignToFilter: {
      type: [Number, null],
      default: null,
    },
    crFilter: {
      type: [Number, null],
      default: null,
    },
    programFilter: {
      type: [Number, null],
      default: null,
    },
    sourceNameFilter: {
      type: [Number, null],
      default: null,
    },
    typeDocFilter: {
      type: [String, null],
      default: null,
    },
    stAdFilter: {
      type: [Number, null],
      default: null,
    },
    statusLeadOptions: {
      type: Array,
      required: false,
    },
    ownerOptions: {
      type: Array,
      required: false,
    },
    assignToOptions: {
      type: Array,
      required: false,
    },
    crOptions: {
      type: Array,
      required: false,
    },
    programOptions: {
      type: Array,
      required: false,
    },
    sourceNameOptions: {
      type: Array,
      required: false,
    },
    typeDocOptions: {
      type: Array,
      required: false,
    },
    stAdOptions: {
      type: Array,
      required: false,
    }
  },
  data () {
    return {
      basicSearch: false,
      filter: {
        from: null,
        to: null
      },
      selected: null,
      options: []
    }
  },
  methods: {
    clearFilters () {
      this.$emit('update:fromFilter', null)
      this.$emit('update:toFilter', null)
      this.$emit('update:statusLeadFilter', null)
      this.$emit('update:ownerFilter', null)
      this.$emit('update:assignToFilter', null)
      this.$emit('update:crFilter', null)
      this.$emit('update:programFilter', null)
      this.$emit('update:sourceNameFilter', null)
      this.$emit('update:typeDocFilter', null)
      this.$emit('update:stAdFilter', null)
    }
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

.v-select {
  &.sm {
    > div {
      padding-top: 0.188rem;
      padding-bottom: 0.188rem;
      height: 2.142rem;
      font-size: 0.857rem;
    }
    .vs__selected, .vs__open-indicator, .vs__search {
      margin-top: 0 !important;
    }
    .vs__actions {
      padding-top: 0;
    }
  }
}
</style>
