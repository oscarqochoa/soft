<template>
  <b-row>
    <b-col
      v-for="(filter, index) in filters"
      :key="index"
      :cols="filter.cols ?  filter.cols : ''"
      :class="filter.margin === true ? 'mt-1' : ''"
    >
      <label v-if="filter.showLabel">{{ filter.label }}</label>
      <b-form-input
        v-if="filter.type === 'input'"
        v-model="filter.model"
        :class="filter.class"
        :type="filter.inputType"
        :placeholder="filter.placeholder"
      />
      <b-form-datepicker
        v-else-if="filter.type === 'datepicker'"
        v-model="filter.model"
        :class="filter.class"
        :locale="filter.locale"
        :date-format-options="filter.dateFormatOptions"
        :placeholder="filter.placeholder"
      />
      <v-select
        v-else-if="filter.type === 'select'"
        v-model="filter.model"
        :class="filter.class"
        :options="filter.options"
        :label="filter.selectText"
        :reduce="value => value[filter.reduce]"
        :placeholder="filter.placeholder"
      />
    </b-col>
  </b-row>
</template>

<script>
import vSelect from 'vue-select'

export default {
  components: {
    vSelect,
  },
  props: {
    filters: Array,
  },
  methods: {

  },
}
</script>
<style >
.p-1px{
  margin-left: 5px;
  margin-right: 5px;
}
</style>
