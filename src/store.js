import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n'
import * as getters from './storedir/getters'
import app from './storedir/modules/app'
import menu from './storedir/modules/menu'
import urljoin from 'url-join'

Vue.use(Vuex)

function childParser(route_obj, bag){
  let children = route_obj.children
  let root = route_obj.path
  let name = route_obj.name
  children.forEach(child => {
    if(child.children){
      childParser(child, bag)
    }
    child.name = name + "." + child.name
    child.path = urljoin(root, child.path)
    bag.push(child)
  })
}

const store = new Vuex.Store({
  strict: true,
  getters,
  modules: {
    app,
    menu
  },
  state: {
    routes: []
  },
  mutations: {
    colorFactory(state, dealColors){
      state.app.dealColors = dealColors
    },
    transformRoutes(state, routes) {
      let childPaths = []
      let insertMap = {}
      routes.forEach((route_obj, i) => {
        if(route_obj.children){
          childParser(route_obj, childPaths)
          insertMap[i] = childPaths
          childPaths = []
        }
      })
      Object.entries(insertMap).map(item => {
        let [index, routes_arr] = item
        routes.splice(index, 0, ...routes_arr)
      })
      state.routes = routes
    }
  },
  actions: {}
})

Vue.use(VuexI18n.plugin, store)

export default store
