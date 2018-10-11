<template>
<div>
    <redoffice-widget :headerText="'Line chart'" :gradientedBackground="true">
        <template slot="widgetBody">
            <chart :options="lineChartOpts" :auto-resize="true" :style="{width: '100%'}"/>
        </template>
    </redoffice-widget>
    <redoffice-widget :headerText="'Bar chart'" :gradientedBackground="true" class="mt-5">
        <template slot="widgetBody">
            <chart :options="barChartOpts" :auto-resize="true" :style="{width: '100%'}"/>
        </template>
    </redoffice-widget>
    <redoffice-widget :headerText="'Pie chart'" :gradientedBackground="true" class="mt-5">
        <template slot="widgetBody">
           <chart :options="pieOptions" :auto-resize="true" :style="{width: '100%'}"/>
        </template>
    </redoffice-widget>
    <redoffice-widget :headerText="'Nightingale chart'" :gradientedBackground="true" class="mt-5">
        <template slot="widgetBody">
           <chart :options="nightingaleOptions" :auto-resize="true" :style="{width: '100%'}"/>
        </template>
    </redoffice-widget>
    <redoffice-widget :headerText="'Scatter chart'" :gradientedBackground="true" class="mt-5">
        <template slot="widgetBody">
           <chart :options="scatterOptions" :auto-resize="true" :style="{width: '100%'}"/>
        </template>
    </redoffice-widget>
</div>
</template>

<script>
import echarts from 'echarts'
import chartdata from './chartdata.js'
const fontFamily = "Muli"
const globalConf = {
    textStyle: { fontFamily },
    subtextStyle: { fontFamily }
}
const axisLabel = {
    fontFamily
}
const pieBase = {
    tooltip: globalConf,
    series: [
        {
            type: 'pie',
            radius: '60%',
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200
            },
        }
    ]
}

export default {
    data(){
        const colors = this.dealColors
        const palette = this.$store.getters.palette
        return {
            lineChartOpts: {
                title: {
                    x: 'center',
                    ...globalConf,
                    text: 'Total income',
                    subtext: 'Averaged over one week'
                },
                tooltip: globalConf,
                xAxis: {
                    show: true,
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisLabel
                },
                yAxis: {
                    type: 'value',
                    show: true,
                    axisLabel
                },
                series: [{
                    data: [620, 932, 901, 934, 290, 1330, 320],
                    type: 'line',
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#c5352e' 
                            }, {
                                offset: 1,
                                color: '#9b2e2a'
                            }])
                        }
                    }
                }],
                grid: {
                    x: 50,
                    x2: 20,
                    y: 70,
                    y2: 20
                }
            },
            barChartOpts: {
                title: {
                    x: 'center',
                    ...globalConf,
                    text: 'Conversions',
                    subtext: 'Averaged over one week'
                },
                tooltip: globalConf,
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisLabel
                },
                yAxis: {
                    type: 'value',
                    axisLabel
                },
                series: [{
                    data: [1, 2, 5, 1, 3, 4, 8],
                    type: 'bar',
                    itemStyle: {color: palette.warning, shadowBlur: 10, shadowColor: 'rgba(100, 100, 100, .4)'},
                }],
                grid: {
                    x: 50,
                    x2: 20,
                    y: 70,
                    y2: 20
                }
            },
            pieOptions: {
                title: {
                    ...globalConf,
                    text: 'Daily web traffic',
                    subtext: 'In GBs'
                },
                color: Array.from(colors(2, 27)),
                ...pieBase,
                tooltip: {
                    ...pieBase.tooltip,
                    formatter: "{c}GB ({d}%)"
                },
                series: [
                    {
                        ...pieBase.series[0],
                        data: [
                            {name: 'egress',  value: (Math.random() * 9000).toFixed(), itemStyle: {shadowBlur: 10, shadowColor: 'rgba(100, 100, 100, .4)'}},
                            {name: 'ingress', value: (Math.random() * 9000).toFixed(), itemStyle: {shadowBlur: 10, shadowColor: 'rgba(100, 100, 100, .4)'}}
                        ]
                    }
                ]
            }
        }
    },
    computed: {
        nightingaleOptions(){
            const elements = [
                "helium", "carbon",
                "sulfur", "lithium",
                "iridium"
            ]
            const self = this
            let data = elements.map(item => {
                return {
                    value: Math.round(Math.random() * 100),
                    name: item
                }
            }).sort((a, b) => b.value - a.value)
            return {
                title: {
                    x: 'center',
                    ...globalConf,
                    text: "Elements' contributions"
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
                        radius: '65%',
                        center: ['50%', '50%'],
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                            return Math.random() * 200
                        },
                        label: {
                            fontFamily: fontFamily,
                            formatter: '{b} : ({d}%)'
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
        },
        scatterOptions(){
            const colors = this.dealColors()
            let itemStyle = {
                normal: {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(200, 200, 200, 0.9)'
                }
                
            }
            return {
                color: ['#dd4444', '#fec42c', '#80F1BE'],
                legend: {
                    y: 'top',
                    data: ['A', 'B', 'C'],
                    ...globalConf
                },
                grid: {
                    x: '10%',
                    x2: 150,
                    y: '18%',
                    y2: '10%'
                },
                tooltip: {
                    show: true
                },
                xAxis: {
                    type: 'value',
                    name: 'Value',
                    nameGap: 16,
                    nameTextStyle: {
                        fontSize: 14,
                        fontFamily: "Muli"
                    },
                    max: 31,
                    splitLine: {
                        show: false
                    },
                    axisLabel
                },
                yAxis: {
                    type: 'value',
                    nameLocation: 'end',
                    nameGap: 20,
                    name: "Value",
                    nameTextStyle: {
                        color: '#fff',
                        fontSize: 16,
                        fontFamily: "Muli"
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel
                },
                visualMap: [
                    {
                        top: '10%',
                        right: '20',
                        dimension: 2,
                        min: 0,
                        max: 250,
                        itemWidth: 30,
                        itemHeight: 120,
                        calculable: true,
                        precision: 0.1,
                        text: ['Max', "Min"],
                        ...globalConf,
                        textGap: 30,
                        inRange: {
                            symbolSize: [10, 70]
                        },
                        outOfRange: {
                            symbolSize: [10, 70],
                            color: ['rgba(255,255,255,.2)']
                        },
                        controller: {
                            inRange: {
                                color: ['#c23531']
                            },
                            outOfRange: {
                                color: ['#444']
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: 'A',
                        type: 'scatter',
                        itemStyle: itemStyle,
                        data: chartdata.scatter.dataBJ
                    },
                    {
                        name: 'B',
                        type: 'scatter',
                        itemStyle: itemStyle,
                        data: chartdata.scatter.dataSH
                    },
                    {
                        name: 'C',
                        type: 'scatter',
                        itemStyle: itemStyle,
                        data: chartdata.scatter.dataGZ
                    }
                ]
            }
        }
    }
}
</script>
