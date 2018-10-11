<template>
    <redoffice-widget class="card-widget" :bodyStyle="bodyStyle">
        <template slot="widgetBody" >
            <div class="card-widget-inner">
                <div class="stats">
                    <div class="stats-number">
                        <i class="stats-icon icon-wide" :class="iconClass"></i>
                        {{ value }}
                    </div>
                    <div class="stats-title">{{ title }}</div>
                </div>
            </div>
        </template>
    </redoffice-widget>
</template>

<script>
export default {
    name: "redoffice-statwidget",
    props: ['iconClass', 'value', 'title', 'widgetStyle'],
    computed: {
        bodyStyle(){
            let base = this.widgetStyle || {}
            return {
                ...base
            }
        }
    }
}
</script>

<style lang="scss">
    @import "../../../sass/_variables.scss";

    .stats-number, .stats-title {
        line-height: 1;
    }
    .widget.card-widget{
        border: none;
        padding: 2rem 0;
        height: 9rem;
        background: #fafafa;
        box-shadow: 0 1px 5px 0px #e3e3e3;
        border-radius: 3px;
        .widget-body{
            background: #fafafa !important;
        }
        &:hover{
            box-shadow: 0 1px 12px 0px #d6d6d6;
        }
    }
    .card-widget-inner {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        background: #fafafa;
        &.has-chart {
            justify-content: space-between;
        }

        .stats {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            padding: 4px;
        }
        .capp{
            text-indent: 3px;
            font-size: 0.85rem;
            margin-top: 8px;
        }
    }

  .stats-number {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 0.5rem;

    .stats-icon {
      font-size: 1.5635rem;
      position: absolute;
      top: 0.3rem;
      left: -1.35rem;

      &.icon-wide {
        left: -1.875rem;
      }
    }
  }
</style>
