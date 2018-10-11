
const TOGGLE_EXPAND_MENU_ITEM = 'TOGGLE_EXPAND_MENU_ITEM'
const state = {}

const mutations = {
    [TOGGLE_EXPAND_MENU_ITEM](state, payload) {
        let menuItem = payload.menuItem
        let expand = payload.expand
        if (menuItem.children && menuItem.meta) {
            menuItem.meta.expanded = expand
        }
    }
}

const actions = {
    toggleExpandMenuItem({
        commit
    }, payload) {
        commit(TOGGLE_EXPAND_MENU_ITEM, payload)
    }
}

export default {
    state,
    mutations,
    actions
}
