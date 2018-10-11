<template>
    <div class="progress-container">
        <radial-progress-bar
                v-if="type === 'circular'"
                :diameter="diameter"
                :totalSteps="max"
                :completedSteps="value"
                :startColor="startColor"	
                :stopColor="stopColor"
                :innerStrokeColor="strokeColor"
                :strokeWidth="strokeWidth"
                :animateSpeed="animateSpeed"
                :fps="60"
                :timingFunc="'linear'"
            >
            <h6 class="progress-text text-center mt-3">{{text}}</h6>
            <p class="indicator">{{value}} / {{max}}</p>
        </radial-progress-bar>
        <horizontal v-else-if="type === 'horizontal'" 
            :theme="theme" 
            :min="min" 
            :max="max" 
            :text="text" 
            :value="value" 
            :size="size"
            :animateSpeed="animateSpeed / 1000"/>
        <vertical v-else-if="type === 'vertical'" 
            :theme="theme" 
            :min="min" 
            :max="max" 
            :text="text" 
            :value="value" 
            :size="size"
            :animateSpeed="animateSpeed / 1000"/>
    </div>
</template>

<script>
import Vue from 'vue'
import RadialProgressBar from 'vue-radial-progress'
import Horizontal from './Horizontal.vue'
import Vertical from './Vertical.vue'
Vue.component(Horizontal.name, Horizontal)
Vue.component(Vertical.name, Vertical)
export default {
    name: 'redoffice-progress',
    props: {
        type: {
            type: String,
            default: 'circular'
        },
        text: {
            type: String
        },
        max: {
            type: Number,
            required: true
        },
        min: {
            type: Number,
            default: 0
        },
        value: {
            type: Number,
            required: true
        },
        diameter: {
            type: Number,
            default: 200
        },
        strokeWidth: {
            type: Number,
            default: 10
        },
        size: {
            type: String,
            default: 'md',
            validator: val => ['sm', 'md', 'lg'].indexOf(val) >= 0
        },
        animateSpeed: {
            type: Number,
            default: 1000
        },
        theme: {
            type: String,
            default: "primary"
        }
    },
    data(){
        return {
            startColor: "#480a0a",
            stopColor: "#b71c1c",
            strokeColor: "#cacaca"
        }
    },
    components: {
        RadialProgressBar
    }
}
</script>

<style lang="scss">
    .progress-text{
        width: 100px;   
    }
    .progress-container{
        font-family: Montserrat;
    }
</style>