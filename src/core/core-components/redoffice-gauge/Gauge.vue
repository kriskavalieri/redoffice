<template>
    <div class="gauge-container mt-4 text-center">
        <h5 class="gauge-label text-center">{{label}}</h5>
        <v-selectmenu v-if="menu[0]" :data="menu" :title="''" :regular="true" :style="{position: 'absolute', right: '3px', top: 0}">
            <button type="button" class="sm-default-btn gauge-menu" :style="{border: 'none !important', padding: 0 }">
                <i class="ion ion-ios-cog-outline"></i>
            </button>
        </v-selectmenu>
        <canvas ref="gauge"></canvas>
        <h5 class="text-center">
            {{numPrefix}}<animate-number 
                duration="1500"
                from="0"
                ref="number"
                :to="value">
            </animate-number>{{numSuffix}}
        </h5>
    </div>
</template>

<script>
    import Vue from 'vue'
    import GaugeJS from 'gaugeJS'
    const Gauge = GaugeJS.Gauge
    export default {
        name: "redoffice-gauge",
        props: {
            numPrefix: {},
            numSuffix: {},
            strokeColor: {
                type: String,
                default: '#E0E0E0'
            },
            menu: {
                type: Array,
                default(){
                    return []
                }
            },
            label: {
                type: String
            },
            value: {
                type: Number,
                required: true
            },
            max: {
                type: Number,
                required: true
            },
            min: {
                type: Number,
                required: true
            },
            animationSpeed: {
                type: Number,
                default: 32
            },
            angle: {
                type: Number,
                default: 0
            },
            lineWidth: {
                type: Number,
                default: 0.44
            }
        },
        data(){
            let startColor = this.$store.getters.palette.success
            let middleColor = this.$store.getters.palette.warning
            let stopColor = this.$store.getters.palette.danger
            return {
                opts: {
                    angle: this.angle, // The span of the gauge arc
                    lineWidth: this.lineWidth, // The line thickness
                    radiusScale: .6, // Relative radius
                    pointer: {
                        length: 0.5, // // Relative to gauge radius
                        strokeWidth: 0.035, // The thickness
                        color: '#000000' // Fill color
                    },
                    percentColors: [[0.0, startColor ], [0.5, middleColor],  [1.0, stopColor]],
                    limitMax: false,     // If false, max value increases automatically if value > maxValue
                    limitMin: false,     // If true, the min value of the gauge will be fixed
                    colorStart: startColor,   
                    colorStop: stopColor,  
                    strokeColor: this.strokeColor,
                    generateGradient: true,
                    highDpiSupport: true
                }
            }
        },
        mounted(){
            let target = this.$refs.gauge
            let gauge = new Gauge(target).setOptions(this.opts) 
            gauge.maxValue = this.max       
            gauge.setMinValue(this.min)        
            gauge.animationSpeed = this.animationSpeed
            gauge.set(this.value)
            this.gauge = gauge
        },
        watch: {
            value(val){
                Vue.nextTick(() => {
                    this.$refs.number.num = val
                    this.gauge.set(val)
                })
            }
        }
    }
</script>

<style lang="scss">
.gauge-container{
    canvas{
        width: 100%;
        height: auto;
    }
    .gauge-label{
        font-weight: 100;
        font-family: Montserrat;
        margin-bottom: -22px;
    }
    .gauge-menu {
        i {
            font-size: 1.2rem;
            color: #33495f;
        }
    }
}
</style>