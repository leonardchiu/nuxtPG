export const state = () => ({
    loadPosts: []
})

export const mutations = {
    setPosts(state, posts) {
        state.loadedPosts = posts
      }
}

export const actions = {
    // setPosts(vuexContext, posts) {
    //     vuexContext.commit('setPosts', posts)
    //   }
}

export const getters = {
    loadedPosts(state) {
        return state.loadedPosts
      },
      reversePosts(state) {
        return state.loadedPosts.reverse()
      }
}
