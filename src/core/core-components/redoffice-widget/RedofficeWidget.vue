<template>
  <div class="widget" :class="{'no-header': !headerText && !hasHeaderSlot}" >
    <div class="widget-header" :style="headerStyle" v-if="headerText || hasHeaderSlot">
      {{ headerText }}
      <slot name="headerSlot" v-if="hasHeaderSlot"></slot>
    </div>
    <div class="widget-body" :class="noPadding && 'p-0'" :style="widgetStyle">
      <slot name="widgetBody"></slot>
    </div>
    <div class="card-footer" v-if="footerText || hasFooterSlot" :style="footerStyle">
      {{ footerText }}
      <slot name="widgetFooter"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'redoffice-widget',
    mounted(){
      console.log(this)
    },
    props: {
      bodyStyle: {
        type: Object,
        default(){
          return {}
        }
      },
      footerStyle: {
        type: Object,
        default(){
          return {}
        }
      },
      gradientedBackground: {
        type: Boolean,
        default: false
      },
      noPadding: {
        type: Boolean,
        default: false
      },
      footerText: {
        type: String
      },
      headerText: {
        type: String
      },
      headerStyle: {
        type: Object
      },
      placeholder: {
        type: String
      }
    },
    computed: {
      hasHeaderSlot(){
        return !!this.$slots.headerSlot
      },
      hasFooterSlot(){
        return !!this.$slots.widgetFooter
      },
      widgetStyle(){
        let gradientBackground = {
           background: 'linear-gradient(45deg, #efefef, white)'
        }
        let noPad = {
          'padding-right': "0 !important",
          'padding-left': "0 !important"
        }
        return {
          ...(this.gradientedBackground ? gradientBackground : {}),
          ...(this.noPadding ? noPad : {}),
          ...this.bodyStyle
        }
      }
    },
    watch: {
      placeholder(val){
        const sel = document.querySelector('div.widget-header > div > div > div') // > .selected-tag')
        if(sel){
          sel.innerText = val
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";

  .no-border{
    border-color: white !important;
  }
  
  .widget-body{
    overflow: hidden;
  }
  
  .widget {
    background: $widget-bg;
    box-shadow: $widget-box-shadow;
    padding: 0;

    &.no-header {
      .widget-body {
        height: $widget-body-no-header-height;
      }
    }

    &.brand-success {
      background-color: $brand-success;
    }
    
    &.brand-info {
      background-color: $brand-info;
    }

    &.brand-danger {
      background-color: $brand-danger;
      color: $white;
      box-shadow: $widget-danger-shadow;
    }

    &.info-widget {
      border-top: $info-widget-border;

      &.brand-info {
        border-top-color: $brand-info;
      }
      &.brand-success {
        border-top-color: $brand-success;
      }

    }
    .has-chart{
      // padding-right: .2rem  !important;
      padding-left: .5rem !important;
      .info-widget-inner{
        height: 4rem;
      }
      .echarts{
        padding-left: .5rem !important;
      }
      .stats-number{
        font-size: 1.8rem;
      }
    }
    .widget-body {
      height: $widget-body-with-header-height;
      padding: $widget-padding;
      background: #fff;
      .stats-number, .stats-title {
        line-height: 1;
      }
      
      .stats-title{
        color: #909090;
        font-weight: 100;
        font-size: 1rem;
        text-align: center;
      }
      .progress-down{
        color: $main-red;
        &::before{
          content: "-";
        }
      }
      .progress-up{
        color: $main-green;
        &::before{
          content: "+";
        }
      }
    }

    .widget-header {
      background-color: #fff;
      height: $widget-header-height;
      padding: 0 $widget-padding;
      border-bottom: $widget-header-border;
      font-family: Montserrat;
      font-size: 1.2rem;
      font-weight: 100;
      display: flex;
      align-items: center;
      letter-spacing: -1px;
      @media (max-width: 420px) {
        font-size: 1rem;
      }
    }
    .v-select > .dropdown-toggle{
      font-size: 1rem;
      font-family: Muli;
      text-indent: 10px;
    }
  }

  .card-footer{
    background-color: #fff;
  }
</style>
