

const state = {
    menus: [
        {name: 'calendar',title: "Calendar" }
    ],
    currentMenu: null
}

const mutations = {
    setCurrentMenu(state, activeMenu) {
        state.currentMenu = activeMenu;
    }
}

const actions = {
}


export default {
    state,
    mutations,
    actions
}