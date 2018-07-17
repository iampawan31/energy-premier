export const state = () => ({
  posts: [],
  post: {}
})

export const getters = {
  GET_POSTS(state) {
    return state.posts
  },
  GET_POST(state) {
    return state.post
  }
}

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  SET_POST(state, post) {
    state.post = post
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const data = await app.$axios.$get('http://admin.inspironsolutions.com/api/posts/energyPremier')
    commit('SET_POSTS', data.data)
  }
}
