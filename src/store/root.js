export default {
  state: {
    showTabbar: false
  },
  getters: {
    showTabbar: state => state.showTabbar
  },
  mutations: {
    updateShowTabbar (state, data) {
      state.showTabbar = data;
    }
  },
  actions: {}
}
