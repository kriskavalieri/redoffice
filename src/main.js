// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import Router from 'vue-router'
import App from './App'
import store from './store'
import routes from './routes'
import utils from './utils'
import { sync } from 'vuex-router-sync'
import CorePlugin from './core/core-plugin'

import ECharts from 'vue-echarts/components/ECharts'
// import ECharts modules manually to reduce bundle size
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/funnel'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/dataset'
import 'echarts/lib/component/dataZoom'

import * as VueGoogleMaps from 'vue2-google-maps'
import vSelect from 'vue-select'

import VCalendar from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css'
import FlagIcon from 'vue-flag-icon'
import VueAnimateNumber from 'vue-animate-number'
import vSelectMenu from 'v-selectmenu'
import VueTimeago from 'vue-timeago'
import Switches from 'vue-switches'
import VueTransmit from "vue-transmit"
import 'prismjs/themes/prism.css'
import CommonMixin from './core/core-mixins/CommonMixin'

import Toasted from 'vue-toasted'
import VueTimepicker from 'vue2-timepicker'
import Popover from 'vue-js-popover'
import VueKnobControl from 'vue-knob-control'
import vuescroll from 'vuescroll/dist/vuescroll-native'
import 'vuescroll/dist/vuescroll.css'
import LiquorTree from 'liquor-tree'
import VueTagsInput from '@johmun/vue-tags-input'
import './i18n'

Vue.use(VueTagsInput)
Vue.use(LiquorTree)
const toastOptions = {
  theme: 'primary',
  position: 'top-left',
  iconPack: 'fontawesome',
  duration: 2500
}

Vue.use(vuescroll, {
  ops: {
    bar: {
        keepShow: false,
        background: "#000",
        opacity: .2
      },
      rail: {
        opacity: 0
    }
  }
})

Vue.component('knob-control', VueKnobControl)
Vue.use(Popover)
Vue.component(VueTimepicker.name, VueTimepicker)

Vue.use(VueTransmit)
Vue.component('switches', Switches)
Vue.use(VueTimeago, {
      name: 'Timeago', // Component name, `Timeago` by default
      locale: store.state.i18n.locale, // Default locale
      locales: {
        'es': require('date-fns/locale/es')
      }
})
Vue.use(vSelectMenu, {
  language: "en"
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBdACnT_4-nSO9iUryOJ97wr4vCUcfPWyU',
    libraries: 'places'
  }
})
Vue.use(VueAnimateNumber)
Vue.use(FlagIcon)
  
Vue.use(VCalendar, {
  firstDayOfWeek: 2,
  datePickerTintColor: '#b71c1c',
  popoverVisibility: 'focus',
  datePickerShowDayPopover: false,
  formats: {
    title: 'MMMM YYYY',
    weekdays: 'W',
    navMonths: 'MMM',
    input: ['YYYY-MM-DD', 'YYYY-MM-DD', 'YYYY-MM-DD'],
    dayPopover: 'YYYY-MM-DD',
    data: ['YYYY-MM-DD', 'YYYY-MM-DD', 'YYYY-MM-DD']
  }
})
Vue.component('v-select', vSelect)
Vue.component('chart', ECharts)
Vue.use(CorePlugin)
Vue.use(Router)

// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, {fieldsBagName: 'formFields'})

store.commit('colorFactory', CommonMixin.methods.dealColors)
store.commit('transformRoutes', routes.slice(0))
const router = new Router({routes: store.state.routes})
sync(store, router)
Vue.use(Toasted, {
  router,
  ...toastOptions
})

let mediaHandler = () => {
  if (window.matchMedia(store.getters.config.windowMatchSizeLg).matches) {
    store.dispatch('toggleSidebar', true)
  } else {
    store.dispatch('toggleSidebar', false)
  }
}

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created(){
    // watch for locale changes
    this.$store.watch(
      state => {
        return state.i18n
      },
      s => {
        let new_locale = s.locale
        if(window.localStorage){
          window.localStorage.setItem('redoffice-lang', new_locale)
        }
      }, 
      {
        deep: true
      }
    )
  },
  data(){
    return {
      original_routes: utils.parseMenuRoutes(routes)
    }
  }
})
window.app = app

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  next()
})

router.afterEach(() => {
  mediaHandler()
  store.commit('setLoading', false)
})
