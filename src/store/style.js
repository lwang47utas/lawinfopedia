export default {
  state: {
    theme: 'pc'
    // indexRoute: '/index'
  },
  mutations: {
    changeTheme (state, type) {
      state.theme = type
    },
    changeindexRoute (state, val) {
      state.indexRoute = val
    }
  },
  actions: {
    setTheme ({ commit }, { isMobile }) {
      console.log(isMobile)
      // if (!isMobile) {
      //   console.log(document.querySelector('html'))
      // }
      //   commit('changeindexRoute', isMobile ? '/mindex' : '/index')
      return commit('changeTheme', isMobile ? 'mobile' : 'pc')
    }

  }

}
