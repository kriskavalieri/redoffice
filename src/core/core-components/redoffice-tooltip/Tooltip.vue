<template>
  <span class="redoffice-tooltip-target" v-tooltip="tooltipOptions">
      <slot></slot>
  </span>
</template>

<script>
  import { VTooltip } from 'v-tooltip'
  export default {
    name: 'redoffice-tooltip',

    directives: { tooltip: VTooltip },

    computed: {
      tooltipOptions () {
        return Object.assign({}, this.defaultOptions, this.options)
      }
    },

    props: {
      options: {
        type: Object,
        default: {}
      }
    },

    data () {
      return {
        defaultOptions: {
          classes: 'redoffice-tooltip'
        }
      }
    }
  }
</script>

<style lang='scss'>
  .tooltip{
      z-index: 10700 !important;
  }
</style>
