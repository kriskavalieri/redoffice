<template>
    <div class="slide-wrapper swiper-inner">
        <swiper :class="swiperClass" :options="swiperOption" @click="onClicked" ref="swiper">
            <swiper-slide v-for="slide in slides" :key="slide.title">
                <slot :slide="slide">{{slide.title}}</slot>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import Vue from 'vue'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { setTimeout } from 'timers'
export default {
    name: 'slide-card',
    components: {
        swiper,
        swiperSlide
    },
    props: {
        effect: {
            type: String,
            default(){
                return "flip"
            }
        },
        slides: {
            type: Array,
            default(){
                return []
            }
        },
        extraOptions: {
            type: Object,
            default(){
                return {}
            }
        },
        swiperClass: {
            type: Object,
            default(){
                return {}
            }
        },
        onClicked: {
            type: Function,
            default(){
                return e => {}
            }
        }
    },
    data() {
        return {
            swiperOption: {
                effect: this.effect,
                grabCursor: true,
                // cubeEffect: {
                //     shadow: true,
                //     slideShadows: true,
                //     // shadowOffset: 10,
                //     shadowScale: 0.94
                // },
                // pagination: {
                //     clickable: true,
                //     el: '.swiper-pagination'
                // },
                ...this.extraOptions
            }
        }
    },
    methods: {
        update(){
            this.$refs.swiper.update()
        },
    },
    mounted(){
        setTimeout(this.update, 600)

    },
    watch: {
        ['$store.getters.sidebarOpened'](val){
            setTimeout(this.update, 300)
        }
    }
}
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";
  
    .swiper-pagination{
        bottom: 4px;
    }

  .stats-number, .stats-title {
        line-height: 1;
    }

  .info-widget-inner {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;

    &.has-chart {
      justify-content: space-between;
    }

    .stats {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
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