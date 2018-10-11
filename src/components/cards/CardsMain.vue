<template>
<div>
    <redoffice-widget :headerText="'Modal cards with auto background color assignment'" :gradientedBackground="true">
        <template slot="widgetBody">
            <div class="row p-2">
                <div class="col-md-6 col-lg-4 col-xl-3">
                    <redoffice-modal-card :type="'create'" create_modal_cta="Create new card" :modalCards="modalCards" />
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3" v-for="modalCardContext in modalCards" :key="modalCardContext.id">
                    <redoffice-modal-card :modalCardContext="modalCardContext" />
                </div>
            </div>
        </template>
    </redoffice-widget>
     <redoffice-widget class="mt-5" :headerText="'Slide cards'" :gradientedBackground="true">
        <template slot="widgetBody">
            <div class="row p-2">
                <div class="col-sm-6 col-xl-4 mb-4">
                    <slide-card effect="flip" :slides=slides.slide_card ref="slider" :extraOptions="slides.extraOptions"> 
                        <template slot-scope="{ slide }">
                            <redoffice-widget class="info-widget">
                                <template slot="widgetBody">
                                    <div class="info-widget-inner">
                                        <div class="stats">
                                            <div class="stats-number">
                                                {{slide.value}}
                                            </div>
                                            <div class="stats-title">{{ slide.title }}</div>
                                        </div>
                                    </div>
                                </template>
                            </redoffice-widget>
                        </template>
                    </slide-card>
                </div>
                <div class="col-sm-6 col-xl-4 mb-4">
                    <slide-card effect="coverflow" :style="cardEffect" :slides=slides.slide_card2 ref="slider" :extraOptions="slides.extraOptions"> 
                        <template slot-scope="{ slide }">
                            <redoffice-widget class="info-widget">
                                <template slot="widgetBody">
                                    <div class="info-widget-inner">
                                        <div class="stats">
                                            <div class="stats-number">
                                                {{slide.value}}
                                            </div>
                                            <div class="stats-title">{{ slide.title }}</div>
                                        </div>
                                    </div>
                                </template>
                            </redoffice-widget>
                        </template>
                    </slide-card>
                </div>
                <div class="col-sm-6 col-xl-4 mb-4">
                    <slide-card effect="slide" :style="cardEffect" :slides=slides.slide_card3 ref="slider" :extraOptions="slides.extraOptions"> 
                        <template slot-scope="{ slide }">
                            <redoffice-widget class="info-widget">
                                <template slot="widgetBody">
                                    <div class="info-widget-inner">
                                        <div class="stats">
                                            <div class="stats-number">
                                                {{slide.value}}
                                            </div>
                                            <div class="stats-title">{{ slide.title }}</div>
                                        </div>
                                    </div>
                                </template>
                            </redoffice-widget>
                        </template>
                    </slide-card>
                </div>
                <div class="col-sm-6 col-xl-4 mb-4">
                    <slide-card effect="cube" :style="cardEffect" :slides=slides.slide_card4 ref="slider" :extraOptions="slides.extraOptions"> 
                        <template slot-scope="{ slide }">
                            <redoffice-widget class="info-widget">
                                <template slot="widgetBody">
                                    <div class="info-widget-inner">
                                        <div class="stats">
                                            <div class="stats-number">
                                                {{slide.value}}
                                            </div>
                                            <div class="stats-title">{{ slide.title }}</div>
                                        </div>
                                    </div>
                                </template>
                            </redoffice-widget>
                        </template>
                    </slide-card>
                </div>
            </div>
        </template>
    </redoffice-widget>
    <redoffice-widget class="mt-5" :headerText="'Bootstrap-based cards'" :gradientedBackground="true">
        <template slot="widgetBody">
            <div class="row p-2">
                <div class="col-xl-3 col-md-4 col-sm-6 col-xs-12 mb-4">
                    <redoffice-card class="center" header="theme=primary" title="Primary" theme="primary" :text="lorem"/>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6 col-xs-12 mb-4">
                    <redoffice-card class="center" header="theme=success" title="Success" theme="success" :text="lorem"/>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6 col-xs-12 mb-4">
                    <redoffice-card class="center" header="theme=danger" title="Danger" theme="danger" :text="lorem"/>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6 col-xs-12 mb-4">
                    <redoffice-card class="center" header="theme=warning" title="Warning" theme="warning" :text="lorem"/>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6 col-xs-12 mb-4">
                    <redoffice-card class="center" header="theme=info" title="Info" theme="info" :text="lorem"/>
                </div>
                <div class="col-xl-3 col-md-4 col-sm-6 col-xs-12 mb-4">
                    <redoffice-card class="center" header="theme=dark" title="Dark" theme="dark" :text="lorem"/>
                </div>
            </div>
        </template>
    </redoffice-widget>
</div>
</template>

<script>
import { ZoomCenterTransition } from 'vue2-transitions'

export default {
    components: {
        ZoomCenterTransition
    },
    data(){
        return {
            lorem: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            cardEffect: {
                'box-shadow': '0px 4px 20px -8px #707070'
            },
            slides: {
                extraOptions: {
                    pagination: {
                        clickable: true,
                        el: '.swiper-pagination',
                    },
                    cubeEffect: {
                        shadowScale: 0
                    }
                },
                slide_card: [
                    {title: '← swipe', value: "effect=flip"},
                    {title: 'swipe →', value: "effect=flip"}
                ],
                slide_card2: [
                    {title: '← swipe', value: "effect=coverflow"},
                    {title: 'swipe →', value: "effect=coverflow"}
                ],
                slide_card3: [
                    {title: '← swipe', value: "effect=slide"},
                    {title: 'swipe →', value: "effect=slide"}
                ],
                slide_card4: [
                    {title: '← swipe', value: "effect=cube"},
                    {title: 'swipe →', value: "effect=cube"}
                ]
            },
            modalCards: [
                {id: 0, name: "Lorem", value: '$8923', text: 'virtual assets'},
                {id: 1, name: "Ipsum", value: '43%', text: 'cpu consumption'}
            ]
        }
    }
}
</script>
