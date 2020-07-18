<template>
  <!-- <div> -->
  <!-- <v-app> -->
  <v-container>
    <Hero />
    <Card :posts="posts" />
    <Main />
    <Tech />
  </v-container>
  <!-- </v-app> -->
  <!-- </div> -->
</template>

<script>
import Card from "../components/homepage/cards.vue";
import Hero from "../components/homepage/hero.vue";
import Main from "../components/homepage/mainDesc.vue";
import Tech from "../components/homepage/technologies.vue";
import axios from "axios";

export default {
  layout: "secondary",
  components: {
    Card,
    Hero,
    Main,
    Tech
  },
  data() {
    return {
      posts: []
    };
  },
  // mounted() {
  //   return axios.get("http://localhost:1337/blogs").then(response => {
  //     // const json = JSON.stringify(response);
  //     this.posts = response;
  //     // return { posts: response };
  //     console.log(response.data);
  //   });
  // },
  // asyncData() {
  //   return axios.get("http://localhost:1337/blogs").then(res => {
  //     return { posts: res.data };
  //     // console.log(res.data);
  //     // return { posts: res };
  //   });
  async asyncData() {
    const response = await axios.get("http://localhost:1337/blogs");
    const data = await response.data;
    console.log(data);
    return { posts: data };
  }
  // async fetch() {
  //   const { data } = await axios.get("http://localhost:1337/blogs");
  //   this.posts = data;
  // }
};
</script>
