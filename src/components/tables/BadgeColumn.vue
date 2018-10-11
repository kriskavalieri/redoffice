<template>
  <span class="circle" :style="circleStyle"></span>
</template>

<script>
  export default {
    name: 'badgeColumn',

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
      circleStyle: function () {
        let color = this.$parent.$parent.$parent.colors[this.rowData.producer_name]
        return {
          'background-color': color
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .circle {
    width: .75rem;
    height: .75rem;
    border-radius: 50%;
    display: inline-block;
  }
</style>
