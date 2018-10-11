<template>
<div class="progress-wrapper">
    <div class="progress vertical center" :style="{width: size_map[this.size].h + 'px'}">
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
    <h6 v-if="text" class="form-text text-center text-muted mt-3">{{ text }}</h6>
</div>
</template>

<script>
import Horizontal from './Horizontal.vue'
export default {
    name: "vertical",
    extends: Horizontal,
    computed: {
        progressStyle(){
            let speed = this.animateSpeed
            let height_int = this.val / (this.max - this.min) * 100
            let bottom_int = 100 - height_int
            let height = height_int + "%" 
            let bottom = -bottom_int + "%" 
            return {
                bottom,
                height,
                'transition-duration': speed + 's',
            }
        }
    }
}
</script>
<style lang="scss">
.progress.vertical{
    height: 15rem;
    .progress-bar{
        position: relative;
        width: 100%;
    }
    .progress-indicator{
        top: -5px !important;
        .indicator-value{
            align-items: center;
            position: relative;
            font-size: .65rem;
        }
    }
    .progress-sm{
        .progress-indicator{
            right: -10px;
        }
    }
    .progress-md {
        .progress-indicator{
            right: -9.5px;
        }
    }
    .progress-lg {
        .progress-indicator{
            right: -7px;
        }
    }
}
</style>
