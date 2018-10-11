import Vue from 'vue'

// define fallback and default languages here
const fallback_lang = 'en'
let default_lang = 'en'

// add new languages here
Vue.i18n.add('en', require('./en.json'))
Vue.i18n.add('es', require('./es.json'))

// retain the language choice between hard reloads
if(window.localStorage){
    const key = 'redoffice-lang'
    const ls = window.localStorage
    if(!ls.getItem(key)){
        ls.setItem(key, default_lang)
    }
    default_lang = ls.getItem(key)
}

Vue.i18n.set(default_lang)
Vue.i18n.fallback(fallback_lang)