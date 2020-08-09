import Vuex from 'vuex';
import axios from 'axios';

const vuexStore = () => {
  return new Vuex.Store({
    state: {
      loadPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://leonardchiu-strapi.herokuapp.com/blogs')
        .then(res => {
          const postArray = [];
          for (const key in res.data) {
            postArray.push(res.data[key])
          }
          vuexContext.commit('setPosts', postArray)
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      reversePosts(state) {
        return state.loadedPosts.reverse()
      }
    }
  })
}
// modular push
export default vuexStore
