<template>
<div>
<h6 v-if="text" class="form-text text-center text-muted mb-3">{{ text }}</h6>
<div class="progress" :style="{height: size_map[this.size].h + 'px'}">
    <div class="progress-bar progress-bar-striped"
       :class="['bg-' + theme, 'progress-' + size]"
       role="progressbar"
       ref="progress"
       :theme="theme"
       :style="progressStyle" 
       :aria-valuenow="value" 
       :aria-valuemin="min" 
       :aria-valuemax="max">
       <div class="progress-indicator" ref='ind'>
           <div class='indicator-value'>{{ value }}</div>
        </div>
    </div>
</div>    
</div>
</template>

<script>

export default {
    name: "horizontal",
    props: ['min', 'max', 'text', 'value', 'animateSpeed', 'theme', 'size'],
    computed: {
        progressStyle(){
            let speed = this.animateSpeed
            let width = this.val / (this.max - this.min) * 100 + "%"
            return {
                width,
                'transition-duration': speed + 's',
            }
        }
    },
    data(){
        return {
            val: 0,
            size_map: {
                sm: {h: 5, ball: 25},
                md: {h: 10, ball: 30},
                lg: {h: 20, ball: 35}
            }
        }
    },
    mounted(){
        setTimeout(() => {
            this.val = this.value
        }, 100)
        let size = this.size_map[this.size].ball
        let style = getComputedStyle(this.$refs.progress)
        this.$refs.ind.style.borderColor = style.backgroundColor
        this.$refs.ind.style.height = size + 'px'
        this.$refs.ind.style.width  = size + 'px'

    }
}
</script>
<style lang="scss">
.progress{
    overflow: visible;
    .progress-bar{
        border-radius: 4px;
        transition: all;
        transition-timing-function: cubic-bezier(1, -0.01, 1, 1);
        position: relative;
        .progress-indicator{
            position: absolute;
            right: -5px;
            background: #fff;
            -webkit-box-shadow: 0 0 8px #d1d1d1;
            box-shadow: 0 0 8px #63636338;
            border-radius: 50%;
            color: #000;
            border: 1px solid;
            .indicator-value{
                align-items: center;
                position: relative;
                font-size: .65rem;
            }
        }
    }
    .progress-sm {
        .indicator-value {
            top: 4.4px;
        }
    }
    .progress-md {
        .indicator-value {
            top: 6.5px;
        }
    }
    .progress-lg {
        .indicator-value {
            top: 9px;
        }
    }

}
</style>
