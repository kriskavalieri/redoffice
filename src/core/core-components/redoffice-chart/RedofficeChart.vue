<template>
  <div class='redoffice-chart'>
      <pie-chart :options="options" :chartData="chartData" v-if="type === 'pie'"></pie-chart>
      <donut-chart :options="options" :chartData="chartData" v-if="type === 'donut'"></donut-chart>
      <bubble-chart :options="options" :chartData="chartData" v-if="type === 'bubble'"></bubble-chart>
      <horizontal-bar-chart :options="options" :chartData="chartData" v-if="type === 'horizontal-bar'"></horizontal-bar-chart>
      <vertical-bar-chart :options="options" :chartData="chartData" v-if="type === 'vertical-bar'"></vertical-bar-chart>
      <line-chart :options="options" :chartData="chartData" v-if="type === 'line'"></line-chart>
  </div>
</template>

<script>
  import PieChart from './chart-types/PieChart'
  import DonutChart from './chart-types/DonutChart'
  import LineChart from './chart-types/LineChart'
  import ScatterChart from './chart-types/ScatterChart'
  import HorizontalBarChart from './chart-types/HorizontalBarChart'
  import VerticalBarChart from './chart-types/VerticalBarChart'
  export default {
    name: 'redoffice-chart',
    props: ['chartData', 'options', 'type'],
    components: {
      PieChart,
      LineChart,
      ScatterChart,
      HorizontalBarChart,
      DonutChart,
      VerticalBarChart
    }
  }
</script>

<style lang='scss'>
  @import '../../../sass/_variables.scss';
  .redoffice-chart {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
      height: 100%;
      width: 100%;
    }

    canvas {
      width: 100%;
      height: auto;
    }
  }
</style>
