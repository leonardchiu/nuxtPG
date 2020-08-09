import axios from 'axios'

export const state = () => ({

})

export const actions = {
    nuxtServerInit(vuexContext, context) {
        return axios.get('https://leonardchiu-strapi.herokuapp.com/blogs')
        .then(res => {
          const postArray = [];
          for (const key in res.data) {
            postArray.push(res.data[key])
          }
          vuexContext.commit('posts/setPosts', postArray)
        })
      }
//       setPosts(vuexContext, posts) {
//         vuexContext.commit('posts/setPosts', posts)
//       }
}

export const strict = false