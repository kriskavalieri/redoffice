import { Line } from 'vue-chartjs'
import DefaultOptions from '../DefaultOptions'

export default Line.extend({
  props: ['chartData', 'options'],

  data () {
    return {
      defaultOptions: {}
    }
  },

  mounted () {
    let options = Object.assign({}, DefaultOptions, this.defaultOptions, this.options)
    this.renderChart(this.chartData, options)
    window.addEventListener('resize', () => {
      this.renderChart(this.chartData, options)
    })
    this.$watch('chartData', function (newval, oldval) {
      this.renderChart(newval, options)
    })
  }
})
