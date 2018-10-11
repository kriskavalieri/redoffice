<template>
  <div class="chart-container" :style="{}">
    <div class="d-flex flex-column align-items-center">
        <chart :options="pie" auto-resize/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
const fontFamily = '"Montserrat", sans-serif'
const clients = [
  "helium-co",
  "carbon-llc",
  "sulfur-corp",
  "lithium-inc",
  "iridium"
]
export default {
  // name: "tableRowDetail",
  props: {
    rowData: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number
    }
  },
  computed: {
    pie(){
      const self = this
      let data = clients.map(item => {
        return {
          value: Math.round(Math.random() * 100),
          name: item
        }
      }).sort((a, b) => b.value - a.value)
      return {
        title: {
          x: 'center',
          padding: 10,
          textStyle: {
            fontSize: 26,
            fontFamily: fontFamily
          }
        },
        visualMap: {
            show: false,
            min: 0,
            max: 150,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [
          {
            name: "WTD contribution",
            type: 'pie',
            roseType: 'radius',
            radius: '55%',
            center: ['50%', '50%'],
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200
            },
            label: {
              fontFamily: fontFamily,
              formatter: '{b} : ${c} ({d}%)'
            },
            itemStyle: {
              normal: {
                color: '#ff4242',
                shadowBlur: 80,
                shadowColor: 'rgba(0, 0, 0, 0.35)'
              }
            },
            data
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .echarts {
        width: 72vw;
        height: 368px;
    }
</style>
