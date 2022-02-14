<template>
  <!-- Package Graphics -->
  <e-charts
    ref="line"
    auto-resize
    autoresize
    :options="line"
    theme="theme-color"
  />
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import "echarts/lib/chart/line";
import theme from "./theme.json";
ECharts.registerTheme("theme-color", theme);

export default {
  components: {
    ECharts,
  },
  props: {
    optionData: {
      type: Object,
      default: null,
    },
    screen:{
      type:Number
    }
  },
  data() {
    return {
      line: {
        visualMap: [
          {
            show: true,
            type: "continuous",
            min: 0,
            max: 900,
            height: 500,
          },
        ],
        grid: {
          width: "95%",
          left: "40px",
          right: "4%",
          // height: "70%", (this.screen >=180?
          height: this.screen >=1080? "80%":"70%",
          containLabel: false,
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: [
          {
            boundaryGap: false,
            data: this.optionData.xAxisData,
          },
        ],
        yAxis: {
          type: "value",
          splitLine: { show: false },
          stepSize: 50,
          height: 500,
        },
        // Data of Graphics
        series: this.optionData.series,
      },
    };
  },
};
</script>


<style>
.echarts {
  width: 100% !important;
}
</style>
