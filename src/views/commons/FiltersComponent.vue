<template>
  <b-row>
    <template v-for="(filter, index) in filters">
      <transition name="bounce" :key="index">
        <b-col
          v-if="filter.visible === undefined ? true : filter.visible"
          :cols="filter.cols ? filter.cols : ''"
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
      </transition>
    </template>
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
<style scoped>
.p-1px{
  margin-left: 5px;
  margin-right: 5px;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
