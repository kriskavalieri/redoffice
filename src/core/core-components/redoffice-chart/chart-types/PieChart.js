import { Pie } from 'vue-chartjs'
import DefaultOptions from '../DefaultOptions'

export default Pie.extend({
  props: ['chartData', 'options'],

  data () {
    return {
      legend: null,
      defaultOptions: {

      }
    }
  },

  mounted () {
    let options = Object.assign({}, DefaultOptions, this.defaultOptions, this.options)
    this.renderChart(this.chartData, options)
  }
})
