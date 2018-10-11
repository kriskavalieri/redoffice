<template>
  <slider
    v-bind="sliderOptions"
    :value="value"
    @input="change"
    :tooltip-style="tooltipStyle"
    :slider-style="sliderStyle"
    class="redoffice-slider"
  >
  </slider>
</template>

<script>
  import Slider from 'vue-slider-component'
  export default {
    name: 'redoffice-slider',
    components: {
      Slider
    },
    props: {
      value: {
        type: [Number, Array],
        required: true
      },
      options: {
        type: Object
      }
    },
    data: function () {
      const store = this.$store
      const left = store.getters.palette.blue
      const right = store.getters.palette.danger
      const primary = store.getters.palette.primary
      return {
        tooltipStyle: {
          "backgroundColor": left,
          "borderColor": left
        },
        sliderStyle: [
            {
              "backgroundColor": "#651818"
            },
            {
              "backgroundColor": "#651818"
            },
        ],
        defOptions: {
          height: 8,
          dotSize: 20,
          realTime: true,
          width: "100%",
          tooltip: "always",
          processDragable: true,
          tooltipDir: [
            "bottom",
            "top"
          ],
          bgStyle: {
            backgroundColor: "#fff",
            boxShadow: "rgb(47, 47, 47) 0.5px 1px 9px -3px inset"
          },
          style: {
            "marginBottom": "30px"
          },
          processStyle: {
            "backgroundImage": `-webkit-linear-gradient(left, ${left}, ${right})`
          }
        }
      }
    },
    computed: {
      sliderOptions () {
        return {
          ...this.defOptions,
          ...this.options
        }
      }
    },
    methods: {
      change (value) {
        this.$emit('input', value)
        const store = this.$store
        const left = store.getters.palette.blue
        const right = store.getters.palette.danger
        if(value instanceof Array && value.length === 2){
          this.tooltipStyle = [
            {
              "backgroundColor": left,
              "borderColor": left
            },
            {
              "backgroundColor": right,
              "borderColor": right
            }
          ]
          this.sliderStyle = [
            {
              backgroundColor: left
            },
            {
              backgroundColor: right
            }
          ]
          return
        }
        this.tooltipStyle = {
          "backgroundColor": '#651818',
          "borderColor": '#651818'
        }
      }
    }
  }
</script>

<style lang="scss">
  .vue-slider-component{
    .vue-slider-tooltip{
      font-family: Montserrat;
    } 
  }
</style>
