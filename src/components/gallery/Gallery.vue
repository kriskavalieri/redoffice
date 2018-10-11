<template>
    <redoffice-widget class="no-padding no-v-padding"  :headerText="$t('sidebar.Gallery')">
        <template slot="widgetBody">
            <gallery :images="urls" :index="index" @close="index = null"></gallery>
            <div class="row">
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 image-wrap" ref="imageWrap" :data-id="imageIndex" :class="image.loading && 'loading'" v-for="(image, imageIndex) in images" :key="imageIndex" @click="index = imageIndex">
                    <div class="preloader" :class="image.loading && 'loading'">
                        <redoffice-pre-loader ref="loader" :loaderType="'circle'"  :loaderSize="30" />
                    </div>
                    <img class="image" alt :src="image.url" @load="image.loading = false" />
                </div>
            </div>
        </template>
    </redoffice-widget>
</template>
<script>
import Vue from 'vue'
import VueGallery from 'vue-gallery'

export default {
    components: {
      gallery: VueGallery
    },
    computed: {
        urls(){
            return this.images.map(item => item.url)
        }
    },
    mounted(){
        let t = this.$refs.loader.innerHTML
        window.addEventListener('resize', this.onResize)
        this.onResize(null)
    },
    methods: {
        onResize(){
            let t = this.$refs.imageWrap[0]
        }
    },
    data(){
        return {
            menu: [
                {content: '<i class="ion ion-md-trash"></i>  Delete', url: ''},
                {content: '<i class="ion ion-md-create"></i>  Edit', disabled: true, url: ''},
                {content: 'sm_divider'},
                {content: 'Share', menus: [
                    {content: '<i class="ion ion-logo-facebook"></i> Facebook', url: ''},
                    {content: '<i class="ion ion-logo-twitter"></i> Twitter', url: ''},
                ]}
            ],
            images: [
                {url: 'https://res.cloudinary.com/redoffice/image/upload/v1534528090/pexels-photo-900106.jpg', loading: true},
                {url: 'https://res.cloudinary.com/redoffice/image/upload/v1534528089/pexels-photo-884454.jpg', loading: true},
                {url: 'https://res.cloudinary.com/redoffice/image/upload/v1534528085/pexels-photo-1001753.jpg', loading: true},
                {url: 'https://res.cloudinary.com/redoffice/image/upload/v1534528085/pexels-photo-908284.jpg', loading: true},
                {url: 'https://res.cloudinary.com/redoffice/image/upload/v1534528080/pexels-photo-947845.jpg', loading: true},
                {url: 'https://res.cloudinary.com/redoffice/image/upload/v1534528078/pexels-photo-886465.jpg', loading: true},
                {url: 'https://res.cloudinary.com/redoffice/image/upload/v1534528076/pexels-photo-269923.jpg', loading: true},
                {url: 'https://res.cloudinary.com/redoffice/image/upload/v1534528073/pexels-photo-860379.jpg', loading: true},
                {url: 'https://res.cloudinary.com/redoffice/image/upload/v1534528065/pexels-photo-606542.jpg', loading: true},
                {url: 'https://res.cloudinary.com/redoffice/image/upload/v1534528064/pexels-photo-834657.jpg', loading: true},
                {url: 'https://res.cloudinary.com/redoffice/image/upload/v1534528059/pexels-photo-196658.jpg', loading: true},
                {url: 'https://res.cloudinary.com/redoffice/image/upload/v1534528062/pexels-photo-399161.jpg', loading: true},
                {url: 'https://res.cloudinary.com/redoffice/image/upload/v1534528058/pexels-photo-733852.jpg', loading: true},
                {url: 'https://res.cloudinary.com/redoffice/image/upload/v1534528056/pexels-photo-450035.jpg', loading: true},
                {url: 'https://res.cloudinary.com/redoffice/image/upload/v1534528058/pexels-photo-164642.jpg', loading: true},
                {url: 'https://res.cloudinary.com/redoffice/image/upload/v1534528054/pexels-photo-461077.jpg', loading: true}
            ],
            index: null
        }
    }
}
</script>

<style lang="scss">
  @import "../../sass/_variables.scss";
@import "~bootstrap/scss/mixins/breakpoints";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
    .image-wrap {
        &.loading {
            @include media-breakpoint-up(xl) {
                min-height: 5vw;
            }
            @include media-breakpoint-up(lg) {
                min-height: 9vw;
            }
            @include media-breakpoint-down(md) {
                min-height: 19vw;
            }
            @include media-breakpoint-down(sm) {
                min-height: 29vw;
            }
            @include media-breakpoint-down(xs) {
                min-height: 54vw;
            }
        }
        margin-bottom: 2%;
        position: relative;
        transition: all .5s;
        width: 100%;
        .preloader{
            transition: all .4s;
            position: absolute;
            top: 50%;
            width: 100%;
            margin: 0 auto;
            text-align: center;
            transform: translate(-13px, -35%);
            opacity: 0;
            visibility: hidden;
            &.loading{
                opacity: 1;
                visibility: visible;
            }
        }
        .image{
            transition: all .4s;
            cursor: pointer;
            width: 100%;
            height: 100%;
            border-radius: 3px;
            float: left;
            box-sizing: border-box;
            margin: 0.5%;
            box-shadow: 0 2px 5px 0px #cccccc;
            background: #fafafa;
            border: 6px solid rgb(211, 211, 211);
            &:hover{
                box-shadow: 0px -3px 5px 0px #cccccc;
                border-color: rgb(240, 240, 240);
            }
          
        }
    }
    .blueimp-gallery{
        .close{
            color: red;
        }
    }
    .blueimp-gallery {
        .slides {
            .slide-loading {
                background: transparent !important;
            }
        }
    }
</style>

