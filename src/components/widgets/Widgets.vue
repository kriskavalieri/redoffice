<template>
<div>
    <div class="row">
        <div class="col-md-6 mt-4">
            <redoffice-widget class="info-widget no-border" :gradientedBackground="true" >
                <template slot="widgetBody">
                    <div class="info-widget-inner has-chart">
                        <div class="stats">
                            <div class="stats-number progress-down">
                                15%
                            </div>
                            <div class="stats-title">Widget with line chart</div>
                        </div>
                        <chart ref="echart" :options="lineChartOpts" :auto-resize=true :style="{width: '100%', height: '121px'}" ></chart>
                    </div>
                </template>
            </redoffice-widget>
        </div>
        <div class="col-md-6 mt-4">
            <redoffice-widget class="info-widget no-border" :gradientedBackground="true" >
                <template slot="widgetBody">
                    <div class="info-widget-inner has-chart">
                        <div class="stats">
                            <div class="stats-number progress-up">
                                47%
                            </div>
                        <div class="stats-title">Widget with bar chart</div>
                        </div>
                        <chart ref="echart" :options="barChartOpts" :auto-resize=true :style="{width: '100%', height: '121px'}" ></chart>
                    </div>
                </template>
            </redoffice-widget>
        </div>
    </div>
     <div class="row">
        <div class="col-sm-6 mt-4">
            <redoffice-widget class="info-widget brand-info" :noPadding="true" :bodyStyle="styles.gaugeStyle" >
                <template slot="widgetBody">
                    <div class="info-widget-inner">
                        <redoffice-gauge ref="gauge1" label="Widget with 'brand-info' class" numPrefix="$" :value="253" :max="500" :min="40" />
                    </div>
                </template>
            </redoffice-widget>
        </div>
        <div class="col-sm-6 mt-4">
            <redoffice-widget class="info-widget brand-success" :noPadding="true" :bodyStyle="styles.gaugeStyle" >
                <template slot="widgetBody">
                    <div class="info-widget-inner">
                        <redoffice-gauge ref="gauge2" label="Widget 'brand-success' class" numPrefix="$" :value="90" :max="500" :min="40" />
                    </div>
                </template>
            </redoffice-widget>
        </div>
     </div>
    <redoffice-widget class="mt-4">
        <template slot="widgetBody">
            <div class="p-5">
                <h4 class="text-center">
                    Empty default widget
                </h4>
            </div>
        </template>
    </redoffice-widget>
    <redoffice-widget class="mt-4" headerText="Header text">
        <template slot="widgetBody">
            <div class="p-5">
                <h4 class="text-center">
                    Empty default widget with header text
                </h4>
            </div>
        </template>
    </redoffice-widget>
    <redoffice-widget class="mt-4" headerText="Header text" footerText="Footer text">
        <template slot="widgetBody">
            <div class="p-5">
                <h4 class="text-center">
                    Empty default widget with header and footer
                </h4>
            </div>
        </template>
    </redoffice-widget>
    <redoffice-widget class="mt-4"
        :noPadding="true"
        :headerStyle="{padding: 0}" 
        :headerText="''" 
        :style="{'border-bottom': '7px solid #ffffff', background: '#eeeeee'}">
        <template slot="headerSlot">
          <div class="selector-container">
            <v-select v-model="selectedHeader" :options="headersList" label="label">
              <template slot="option" slot-scope="option">
                  <span class="selopt">{{ option.label }}</span>
              </template>
            </v-select>
          </div>
        </template>
        <template slot="widgetBody" >
            <div class="p-5">
                <h4 class="text-center">
                    Widget with a selectable header
                </h4>
            </div>
        </template>
    </redoffice-widget>
    <redoffice-widget class="mt-4" :bodyStyle="styles.body1" :footerStyle="styles.footer1" :headerStyle="styles.header1">
        <template slot="headerSlot">
            <h5 class="text-center pt-3" >
                Custom header slot with custom header styling
            </h5>
        </template>
        <template slot="widgetBody">
            <h3 class="p-5 mt-3 text-center">Custom body styling</h3>
        </template>
        <template slot="widgetFooter" >
            <b :style="{color: '#fff', 'font-weight': 100}">
                Footer slot with custom styling
            </b>
        </template>
    </redoffice-widget>
</div>
</template>
<script>
const fontFamily = "Muli"
const globalConf = {
    textStyle: { fontFamily }
}
const tooltipConf = {
    ...globalConf,
    trigger: 'axis',
    formatter: "{c}",
    borderColor: "#fff",
    borderWidth: 1,
    axisPointer: {
        type: 'shadow',
        label: {
            show: true,
            backgroundColor: "rgba(12, 12, 12, .5)",
            shadowStyle: {
              opacity: 0.1
            },
            ...globalConf
        }
    }
  }
export default {
    data(){
        return {
            selectedHeader: '',
            headersList: [
                {label: "Header 1", value: 1},
                {label: "Header 2", value: 2},
                {label: "Header 3", value: 3}
            ],
            styles: {
                header1: {
                    'display': "block",
                    'box-shadow': 'rgb(238, 238, 238) 0px -11px 20px -5px inset'
                },
                body1: {
                    'box-shadow': 'rgb(204, 204, 204) 0px 11px 20px -2px inset',
                    'background-image': 'radial-gradient(circle at center center, rgba(255, 255, 255, 0.13) 0%, rgba(149, 149, 149, 0.63) 100%)'
                },
                footer1: {
                    background: '#b32214'
                },
                gaugeStyle: {
                    background: "#fcfcfc",
                    // 'max-height': '10rem'
                }
            },
            barChartOpts: {
                tooltip: { ...tooltipConf },
                xAxis: {
                    show: false,
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value',
                    show: false
                },
                series: [{
                    data: [1, 2, 5, 1, 3, 4, 8],
                    type: 'bar',
                    itemStyle: {color: "#0079ff"},
                    symbolSize: 0
                }],
                grid: {
                    right: '6%',
                    y: 0,
                    y2: 0
                }
            },
            lineChartOpts: {
                tooltip: {
                    ...globalConf,
                    trigger: 'axis',
                    formatter: "{c}",
                    borderColor: "#fff",
                    borderWidth: 1,
                    axisPointer: {
                        type: 'line',
                        label: {
                            show: true,
                            backgroundColor: "rgba(12, 12, 12, .5)",
                            shadowStyle: {
                            opacity: 0.1
                            },
                            ...globalConf
                        }
                    }
                },
                xAxis: {
                    show: false,
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value',
                    show: false
                },
                series: [{
                    data: [620, 932, 901, 934, 290, 1330, 320],
                    type: 'line',
                    areaStyle: {},
                    symbolSize: 0
                }],
                grid: {
                    x: 0,
                    x2: 0,
                    y: 0,
                    y2: 0
                }
            }
        }
    }
}
</script>

<style lang="scss">
.stats-number {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 2.635rem;
    margin-bottom: 0.5rem;

    .stats-icon {
      font-size: 1.5635rem;
      position: absolute;
      top: 0.635rem;
      left: -1.35rem;

      &.icon-wide {
        left: -1.875rem;
      }
    }
  }

</style>
