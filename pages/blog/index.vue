<template>
  <v-container class="my-16">
    <h1 class="px-10">Blogs</h1>
    <BlogCard :posts="posts" />
  </v-container>
</template>

<script>
import axios from "axios";
import BlogCard from "../../components/homepage/blogCards.vue";

export default {
  // layout: "secondary",
  // data() {
  //   return {
  //     posts: ""
  //   };
  // },
  components: { BlogCard }
  // async asyncData() {
  //   const response = await axios.get(
  //     "hhttps://leonardchiu-strapi.herokuapp.com/blogs"
  //   );
  //   const data = await response.data;
  //   console.log(data);
  //   return { posts: data };
  // }
};
</script>
