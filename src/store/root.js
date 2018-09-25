export default {
  state: {
    showTabbar: false,
    currentTab: 'Home'
  },
  getters: {
    showTabbar: state => state.showTabbar,
    currentTab: state => state.currentTab
  },
  mutations: {
    updateShowTabbar (state, data) {
      state.showTabbar = data;
    },
    updateCurrentTab (state, data) {
      state.currentTab = data;
    }
  },
  actions: {}
}
