import Cookies from 'js-cookie'
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
const TOGGLE_WITHOUT_ANIMATION = 'TOGGLE_WITHOUT_ANIMATION'
const state = {
  sidebar: {
    opened: false,
    withoutAnimation: false
  },
  config: {
    googleMaps: {
      apiKey: 'AIzaSyBdACnT_4-nSO9iUryOJ97wr4vCUcfPWyU'
    },
    windowMatchSizeLg: '(min-width: 992px)'
  },
  palette: {
    primary: '#002955',
    danger: '#b71c1c',
    info: '#4ab2e3',
    success: '#18a84f',
    warning: '#f7cc36',
    blue: "#4ab2e3",
    white: '#fff',
    black: '#000',
    fontColor: '#34495e',
    transparent: 'transparent',
    lighterGray: '#ddd'
  },
  isLoading: true,
  eventBus: {},
  producers: {},
  apibundle: JSON.parse(Cookies.get("apibundle") || window.localStorage.getItem('apibundle')) || {},
  apiversion: '',
  users: [],
  profileNotifs: [
    {
      name: "messages",
      color: "#4ab2e3",
      count: 9,
      icon: "ion-logo-whatsapp"
    }, {
      name: "notifications",
      color: '#f7cc36',
      count: 41,
      icon: "ion ion-md-notifications"
    },
    {
      name: "issues",
      color: '#b71c1c',
      count: 13,
      icon: "ion ion-ios-warning"
    }
  ],
  modelCards: {},
  colorSeriesTracker: {},
  kanban: {
    items: {
        todo: [{
          id: 0,
          text: 'Prepare mockups',
          date: new Date(),
          description: "Leo ipsum inceptos\nvelit congue purus hendrerit inceptos per, mus suspendisse tincidunt",
          assignees: [1, 2, 3, 5, 7, 9, 4],
          subtasks: [
            {text: 'Buy coffee', done: true},
            {text: 'Bring coffee from the store', done: true},
            {text: 'Put the coffee in the cabinet', done: false}
          ]
        },
        {
          id: 1,
          text: 'Version 1.4.3',
          date: new Date('2018-08-01'),
          description: " Suscipit ante faucibus scelerisque convallis erat",
          assignees: [6, 2, 3],
          subtasks: [
            {text: 'Pour water into the kettle', done: true},
            {text: 'Boil the water', done: true},
            {text: 'Put 9 spoons of coffee into the mug', done: false},
            {text: 'Pour water into the mug', done: false}
          ]
        }],
        inProgress: [{
          id: 2,
          text: 'Version 1.4.2',
          date: new Date('2017-09-01'),
          description: "Sociis facilisi mus, class interdum, pharetra nunc pretium pretium ante purus faucibus phasellus ",
          assignees: [8],
          subtasks: [
            {text: 'Add milk', done: true},
            {text: 'Add sugar', done: true},
            {text: 'Stir it', done: true},
            {text: 'Mix it', done: true},
            {text: 'Drink it', done: false}
          ]
        }],
        done: []
    },
    id: 0
  }
}

const mutations = {
  [TOGGLE_SIDEBAR] (state, opened) {
    state.sidebar.opened = opened
  },
  [TOGGLE_WITHOUT_ANIMATION] (state, value) {
    state.sidebar.withoutAnimation = value
  },
  zeroProfileNotifsCount(state, index){
    state.profileNotifs[index].count = 0
  },
  setUsers(state, users){
    state.users = users
  },
  addUsers(state, users){
    state.users.push(...users)
  },
  setLoading (state, isLoading) {
    state.isLoading = isLoading
  },
  addKanbanItems(state, item){
    state.kanban.id++
    item.id = state.kanban.id
    item.date = new Date()
    state.kanban.items.todo.push(item)
  },
  updateKanbanItems(state, { items, id }){
    state.kanban.items[id] = items
  },
  toggleSubtask(state, obj){
    let item_id = obj.itemId
    let subtask_id = obj.subtaskIdx
    let title = obj.title
    let past_status = state.kanban.items[title][item_id].subtasks[subtask_id].done
    state.kanban.items[title][item_id].subtasks[subtask_id].done = !past_status
  },
  drawColor(state, resource){
    if (!state.colorSeriesTracker[resource]) {
      state.colorSeriesTracker[resource] = {
        _factory: state.dealColors(),
        value: null
      }
    }
    state.colorSeriesTracker[resource].value = state.colorSeriesTracker[resource]._factory.next().value
  }
}

const actions = {
  toggleSidebar ({ commit }, opened) {
    commit(TOGGLE_SIDEBAR, opened)
  },
  isToggleWithoutAnimation ({ commit }, value) {
    commit(TOGGLE_WITHOUT_ANIMATION, value)
  }
}

export default {
  state,
  mutations,
  actions
}
