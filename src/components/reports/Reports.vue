<template>
<div @click="onClicked" ref="boss">
    <redoffice-widget class="no-padding no-v-padding dreport-dispatch" :bodyStyle="bodyStyle" :headerText="$t('reports.title')">
        <template slot="widgetBody">
            <div class="container">
                <div class="offset-lg-1 d-flex flex-column mt-3">
                    <p class="lead">{{ $t('reports.jump_to_date') }}</p>
                    <v-date-picker
                        ref="dd"
                        :class="{'dpicker': true}"
                        :available-dates='{start: dateStart, end: dateEnd}'
                        v-model='selectedDate'
                        @input="onDatePicked"
                        show-caps>
                    </v-date-picker>
                </div>
            </div>
            <template v-if="isLoading">
                <redoffice-pre-loader ref="preLoader" :loaderSize=128 class="pre-loader"></redoffice-pre-loader>
                <fun-msg/>
            </template>
            <slide-card ref="slideref" :swiperClass="swiperClass" :slides=slides :effect="'coverflow'" :extraOptions="extraOptions">
            </slide-card>
        </template>
    </redoffice-widget>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Swiper from 'swiper/dist/js/swiper.esm.bundle'
import Vue from 'vue'
import ReportCard from './daily/ReportCard'
const ReportCardComp = Vue.component(ReportCard.name, ReportCard)

var today = new Date()
const report_count = 100
let missing_count = 10
const missing_indices = [] 
while(missing_count){
    let idx = (Math.random() * (report_count - 1)).toFixed()
    if(!missing_indices.includes(idx)){
        missing_indices.push(idx)
        missing_count--
    }
}
const reports_slides = Array.apply(null, Array(report_count)).map((_, idx) => {
    let today = new Date()
    return {
        isMissing: missing_indices.includes(idx.toString()),
        date: new Date(today.setDate((today.getDate() - idx) )),
        index: idx,
        id: idx + 1
    }
})

export default {
    mounted(){
        const virt = this.$refs.slideref.$children[0].swiper.virtual
        const $storage = this.$refs.storage
        window.addEventListener("keydown", e => {
            if(e.code === "Escape" && this.reportOpen){
                this.closeCard(document.querySelector(".cexpanded"))
            }
        })
        window.addEventListener('resize', this.onResize)
        this.onResize(null)
        virt.slides = []
        virt.update()

        const mock_row_double = "<div class='row mock-line line-double'><div class='col-5'></div><div class='col-5'></div></div>"
        const mock_row_single = "<div class='row mock-line'><div class='col-11'></div></div>"

        const self = this
        let content
        virt.renderSlide = (slide, index) => {
            let classes = ""
            let date = (new Date(slide.date)).toISOString().split("T")[0]
            if(slide.isMissing){
                content = `<p style="margin:0" class="report-date reversed text-left">${date}</p><h4>Report missing</h4>`
                content += '<div class="background"><div></div></div>'
                classes += " empty-report"
            }
            else {
                content = `<header><p style="margin:0" class="report-date text-left">${date}</p><div class="report-close text-right"><i class="close-report ion ion-ios-close-circle-outline"></i></div></header>
                            <main class="report-main">
                                <h6 class="text-center">${self.$t('reports.card_title')} ${slide.id}</h6>
                                <div class="report-card-placeholder"></div>
                                ${mock_row_double}${mock_row_double}
                                ${mock_row_single}${mock_row_single}
                                <div class="row">
                                    <button class="btn btn-primary btn-micro expand-report-card" data-slideindex=${index} data-id=${slide.id}>
                                        <i class="ion ion-ios-expand"></i>
                                        ${self.$t('reports.expand')}
                                    </button>
                                </div>
                            </main>`
                classes += " filled-report"
            }
            return `<div class="report-card swiper-slide swiper-slide-active ${classes}" data-swiper-slide-index="${index}">${content}</div>`
        }

        let new_slides = []
        reports_slides.forEach((item, idx) => {
            let date = item.date.toISOString().split("T")[0]
            this.dateToIndexMap[date] = idx - 1
            new_slides.push({...item, index: idx})
        })
        virt.slides = new_slides
        virt.update()
        this.swiper = this.$refs.slideref.$children[0].swiper
        this.swiper.slideTo(0, 0)
        window.sw = this.swiper
    },
    computed: {
        styleData(){
            return {
                background: `linear-gradient(350deg, red, #fff)`
            }
        }
    },
    beforeDestroy: function () {
        window.removeEventListener('resize', this.onResize)
    },
    methods: {
        onResize(e){
            const coeff = 280
            const swiper = this.$refs.slideref.$children[0].swiper
            let slides_count
            let width = this.$refs.boss.parentElement.clientWidth
            if(width <= 400){
                slides_count = 1
            }
            else{
                slides_count = Math.floor(width / coeff) + 1
            }
            swiper.params.slidesPerView = slides_count
            swiper.update()
        },
        async closeCard(boss){
            console.log("OK")
            this.hiddenPickers = false
            this.reportCardInst.isOn = false
            boss.classList.remove('cexpanded')
            boss.style.width = this.cached.boss_width
            boss.style.transform = `translate(0px, 0px)`
            await this.sleep(0.5)
            boss.classList.remove('prexpanded')
            this.swiper.attachEvents()
            this.reportOpen = false
        },
        async onClicked(e){
            let target = e.target
            let report_id = target.dataset.id
            const swiper = this.$refs.slideref.$children[0].swiper
            const boss = target.parentElement.parentElement.parentElement
            // open the card
            if(target.classList.contains('expand-report-card')){
                // mask the datepicker
                swiper.detachEvents()
                let container_width = document.querySelector("#content").clientWidth
                let card_width = container_width * 0.9
                let offset = (container_width - card_width) / 2
                this.cached.boss_width = boss.style.width
                let out_offset = (boss.parentElement.offsetWidth - boss.swiperSlideSize) / 2
                boss.classList.add('prexpanded')
                boss.classList.add('cexpanded')
                boss.style.width = card_width + "px"
                boss.style.transform = `translate(-${out_offset - offset}px, 0px)`
                this.reportCardInst = new ReportCardComp()
                this.reportCardInst.mockTable = {
                    header: [
                        {name: "id", 'title': '#'},
                        {name: "status", 'title': 'status'},
                        {title: "First Name", name: "name"},
                        {title: "Last Name", name: "last_name"},
                        {title: "Username", name: 'username'}
                    ],
                    rows: [
                        {id: '1', status: "active", name: 'Adam', last_name: 'Hunchman', username: 'hunch7u43'},
                        {id: '2', status: "inactive", name: 'Kristy', last_name: 'Pomaska', username: 'poma443'},
                        {id: '3', status: "inactive", name: 'Kiryl', last_name: 'Strachovsky', username: 'strach'},
                        {id: '4', status: "active", name: 'Mahmoud', last_name: 'Al-ham', username: 'ali'},
                        {id: '5', status: "pending", name: 'Beatrix', last_name: 'Mareux', username: 'mari00'},
                        {id: '6', status: "active", name: 'Vlad', last_name: 'Moskovitz', username: 'mosco'}
                    ]
                }
                this.reportCardInst.coupons_count = 345
                this.reportCardInst.traffic_bounced = 12
                this.reportCardInst.coupons_value = 23
                this.reportCardInst.best_worker_id = 992
                this.reportCardInst.baskets_count = 73
                this.reportCardInst.user_registations = 16
                this.reportCardInst.comments = 94
                this.reportCardInst.notifs = 302
                this.reportCardInst.$mount(".cexpanded .report-card-placeholder")
                await this.sleep(.5)
                const palette = this.$store.getters.palette

                this.reportCardInst.pieData = [
                    {name: 'egress',  value: (Math.random() * 9000).toFixed(), itemStyle: {color: palette.danger}},
                    {name: 'ingress', value: (Math.random() * 9000).toFixed(), itemStyle: {color: palette.primary}}
                ]
                this.reportCardInst.pieData2 = [
                    {name: 'taxes',  value: (Math.random() * 900).toFixed(), itemStyle: {color: palette.danger}},
                    {name: 'income', value: (Math.random() * 900).toFixed(), itemStyle: {color: palette.success}},
                    {name: 'costs', value: (Math.random() * 900).toFixed(), itemStyle: {color: palette.warning}}
                ]
                this.reportCardInst.report_id = report_id
                this.reportCardInst.isLoading = false
                this.reportCardInst.isOn = true
                this.hiddenPickers = true
                this.reportOpen = true
            }
            // close the card
            else if(target.classList.contains('close-report')){
                this.closeCard(boss)
            }
        },
        onDatePicked(ev){
            let date = ev.toISOString().split("T")[0]
            let index = this.dateToIndexMap[date]
            this.swiper.slideTo(index, 400)
        },
    },
    data() {
        const today = new Date()
        let end = new Date()
        end.setDate(today.getDate())
        let start = new Date()
        start.setDate(today.getDate() - report_count + 1)
        return {
            bodyStyle: {
                'background': 'radial-gradient(circle at center center, rgba(255, 255, 255, 0.13) 0%, rgb(205, 205, 205) 100%)'
            },
            slideData: {},
            hiddenPickers: false,
            cached: {},
            isLoading: false,
            dateToIndexMap: {},
            dateStart: start,
            dateEnd: end,
            selectedDate: null,
            swiperClass: {
                'daily-rep-main': true
            },
            reportOpen: false,
            slides: [],
            extraOptions: {
                keyboard: {
                    enabled: true
                },
                mousewheel: false,
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 2,
                coverflowEffect: {
                    shadow: true,
                    rotate: 40,
                    depth: 550,
                    modifier: 0.5,
                    slideShadows: true
                },
                slides: [],
                virtual: {
                    slides: []
                }
            }
        }
    }
}
</script>

<style lang="scss">
 @import "../../sass/_variables.scss";
    .report-card{
        padding: 1rem 1.15rem !important;
        box-shadow: inset 0 0 86px -21px #a8a8a8, 0 41px 49px 0 #a2a2a2;
        overflow: hidden;
    }
    .empty-report {
        background: $that-cool-red !important;
        color: #fff;
        border-color: #a83e3e !important;
        h4{
            margin-top: 50%;
            text-align: center;
            font-size: 1.5rem;
            font-weight: 500;
            text-transform: uppercase;
            text-shadow: 0 1px 4px #7a0a0a;
        }
    }
    .mock-line > div{
        border-bottom: 6px solid #cacaca;
        margin: 0 auto;
        width: 90%;
        padding-bottom: 1.92em;
    }
    .report-date{
            background: #b71c1c;
            padding: 9px;
            position: absolute;
            top: 0;
            left: 0px;
            color: #fff;
            font-weight: 900;
            width: fit-content;
            font-size: 1rem;
            box-shadow: 5px 7px 12px 0 #dedede;
            &.reversed{
                color: #b71c1c ;
                background: #fff ;
                box-shadow: 5px 7px 12px 0 #b71c1c44;
                padding: 5px 9px;
            }
        }
    .filled-report {
        user-select: none;
        padding: 1rem;
        line-height: 1.2em;
        .report-main{
            margin-top: 1rem;
        }
        
        .expand-report-card{
            opacity: 1;
            margin: 0 auto;
            margin-top: 2rem;
            i {
                font-size: 1rem;
            }
        }
        h5 {
            font-size: 2em;
            line-height: 1.2em;
        }
        h6 {
            font-size: 1rem;
            float: none;
            text-transform: uppercase;
            padding-top: 1rem;
            line-height: 1.2em;
        }
        .report-close {
            display: none;
            position: absolute;
            right: 13px;
            font-size: 2rem;
            top: 8px;
            cursor: pointer;
        }
    }
    .prexpanded, .expand-report-card{
        transition: transform .4s, height .3s .1s, width .4s, opacity .2s !important;
    }
    .cexpanded{
        cursor: default;
        height: fit-content !important;
        color: #000 !important;
        box-shadow: inset 0 0 86px -21px #333, 0 0 49px 0 #a2a2a2 !important;
        border-width: 6px !important;
        .mock-line > div, .expand-report-card {
            opacity: 0 !important;
        }
        .filled-report {
            background: #fff;
        }
        h6 {
            font-size: 1.6rem;
            text-transform: none !important;
            font-weight: 100;
        }
        .report-date::before{
            content: "Generated: ";
            background: #fff;
            color: #000;
            left: -10px;
            position: relative;
            padding: 8px;
            top: -1px;
        }
        .report-close {
            display: block;
        }
    }
    .dpicker input{
        border: none;
        border-bottom: 1px solid;
        background: transparent;
    }
    .dpicker input::before{
        content: "Jump to date:"
    }
    .daily-rep-main{
        .swiper-wrapper {
            padding: 4rem 0;
        }
        .swiper-slide{
            background-color: #fff;
            background-size: 100% 1.2em;
            background-image: linear-gradient(90deg, transparent 79px,  transparent 81px),
                    linear-gradient(#eee .05em, transparent .05em);
            height: 21rem;
            border: 2px solid #fffffff2;
        }
    } 
    .dreport-dispatch {
        .widget-body{
            padding: 0;
        }
        .selector-container {
            padding: 2rem;
            .highlight > a{
                background: $that-cool-red !important;
            }
            .v-select .selected-tag{
                font-family: Muli, sans-serif !important;
            }
            .v-select .open-indicator{
                bottom: 15px;
                right: 20px;
            }
            .v-select .dropdown-toggle .clear{
                bottom: 18px;
            }
            .no-options {
                font-family: Muli, sans-serif !important;
            }
            .selopt{
                font-family: Muli, sans-serif !important;
                width: 100%;
                position: relative;
                color: black;
            }
            .highlight > a > .selopt{
                color: white !important;
            }
            .dropdown li {
                border-bottom: 1px solid rgba(112, 128, 144, 0.1)
            }

            .dropdown li:last-child {
                border-bottom: none;
            }

            .dropdown li a {
                padding: 10px 20px;
                display: flex;
                width: 100%;
                align-items: center;
                font-size: 1.25em;
            }

            .dropdown li a .fa {
                padding-right: 0.5em;
            }
        }
    }
    .background{
        width: 16rem;
        height: 16rem;
        border: 13px solid white;
        border-radius: 50%;
        transform: rotate(45deg);
        opacity: .1;
        overflow: hidden;
        bottom: 50%;
        position: relative;
        text-align: center;
        margin: 0 auto;
        left: -30%;
        & > div{
            border-top: 13px solid white;
            top: calc(50% - 13px);
            position: relative;
        }
    }
</style>

