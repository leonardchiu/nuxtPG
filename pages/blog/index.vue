<template>
  <v-container class="my-16">
    <h1 class="px-10">Blogs</h1>
    <Cards :posts="loadedPosts" />
  </v-container>
</template>

<script>
import axios from "axios";
import Cards from "../../components/homepage/blogCards.vue";

export default {
  // layout: "secondary",
  data() {
    return {
      posts: []
    };
  },
  components: { Cards },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
  // async asyncData() {
  //   const response = await axios.get(
  //     "https://leonardchiu-strapi.herokuapp.com/blogs"
  //   );
  //   const data = await response.data;
  //   // console.log(data);
  //   return { posts: data };
  // },
  // mounted() {
  //   return axios.get(
  //     "https://leonardchiu-strapi.herokuapp.com/blogs"
  //   ).then(res => {
  //     const data = res.data;
  //     this.posts = data
  //     }).catch(e => {
  //       console.log(e)
  //     })
  //   }
};
</script>
