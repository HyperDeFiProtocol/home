export const state = () => ({
  menuMobi: false,
  menuLang: false,
})


export const mutations = {
  TOGGLE_MENU_MOBI(state) {
    state.menuMobi = !state.menuMobi
    state.menuLang = false
  },
  TOGGLE_MENU_LANG(state) {
    state.menuMobi = false
    state.menuLang = !state.menuLang
  },
  HIDE_ALL(state) {
    state.menuMobi = false
    state.menuLang = false
  },
}


export const actions = {
  TOGGLE_MENU_MOBI({ commit }) {
    commit('TOGGLE_MENU_MOBI')
  },
  TOGGLE_MENU_LANG({ commit }) {
    commit('TOGGLE_MENU_LANG')
  },
  HIDE_ALL({ commit }) {
    commit('HIDE_ALL')
  },
}
