<template>
  <div>
    <div class="row dashboard-info-widgets">
      <div class="col-md-6 col-xl-3">
        <slide-card :slides=slides.first_card :extraOptions="extraOptions" ref="slider"> 
          <template slot-scope="{ slide }">
            <redoffice-widget class="info-widget" :style="{padding: '.455rem'}">
                <template slot="widgetBody">
                  <div class="info-widget-inner">
                      <i class="widget-card-icon ion ion-ios-compass-outline" :style="{color: '#981818'}"></i>
                      <div class="stats">
                          <div class="stats-number">
                              {{slide.value}}
                          </div>
                          <div class="stats-title">{{ $t(slide.title) }}</div>
                      </div>
                  </div>
                </template>
            </redoffice-widget>
          </template>
        </slide-card>
      </div>
      <div class="col-md-6 col-xl-3">
        <slide-card :slides=slides.second_card :extraOptions="extraOptions">
          <template slot-scope="{ slide }">
            <redoffice-widget class="info-widget" :style="{padding: '.455rem'}">
              <template slot="widgetBody">
                <div class="info-widget-inner">
                    <i class="widget-card-icon ion ion-ios-cash-outline" :style="{color: '#981818'}"></i>
                    <div class="stats">
                        <div class="stats-number">
                          ${{ slide.value }}
                        </div>
                        <div class="stats-title">{{ $t(slide.title) }}</div>
                    </div>
                </div>
              </template>
            </redoffice-widget>
          </template>
        </slide-card>
      </div>

      <div class="col-sm-6 col-xl-3 pt-3 pb-3">
        <redoffice-widget class="info-widget no-border" :noPadding="true" :gradientedBackground="true" >
          <template slot="widgetBody" class="has-chart">
            <div class="info-widget-inner has-chart">
                <div class="stats">
                  <div class="stats-number progress-down">
                    15%
                  </div>
                  <div class="stats-title">{{ $t('dashboard.views') }}</div>
                </div>
                <chart ref="echart" :options="lineChartOpts" :auto-resize=true :style="{width: '100%', height: '121px'}" ></chart>
              </div>
          </template>
        </redoffice-widget>
      </div>
      <div class="col-sm-6 col-xl-3 pt-3 pb-3">
        <redoffice-widget class="info-widget no-border"  :noPadding="true" :gradientedBackground="true" >
          <template slot="widgetBody">
            <div class="info-widget-inner has-chart">
                <div class="stats">
                  <div class="stats-number progress-up">
                    47%
                  </div>
                  <div class="stats-title">{{ $t('dashboard.conversions') }}</div>
                </div>
                <chart ref="echart" :options="barChartOpts" :auto-resize=true :style="{width: '100%', height: '121px'}" ></chart>
              </div>
          </template>
        </redoffice-widget>
      </div>
    </div>
    
  </div>
</template>

<script>
  // import SlideCard from 'core/slide-card/SlideCard.vue'
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
    name: 'dashboard-info-widgets',
    data(){
      return {
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
        },
        extraOptions: {
          pagination: {
                clickable: true,
                el: '.swiper-pagination'
          }
        },
        slides: {
          first_card: [
            {title: 'dashboard.clients_so_far', value: 1882},
            {title: 'dashboard.clients_wtd', value: 43}
          ],
          second_card: [
            {title: "dashboard.sales_so_far", value: 199343},
            {title: "dashboard.sales_wtd", value: 9999}
          ]
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../sass/_variables.scss";
  
  .dashboard-info-widgets{
    padding-bottom: 1.5rem;
  }

</style>
