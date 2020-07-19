<template>
  <v-container class="px-10">
    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="(blog, i) in reversePosts" :key="i">
        <nuxt-link :to="'/blog/' + blog.id" class="card">
          <v-card dark tile elevation="10" color="blue lighten-10" class="pa-4">
            <v-card-title>
              <v-icon left>face</v-icon>
              {{ blog.Title }}
            </v-card-title>
            <v-card-text>{{ blog.Post }}</v-card-text>
            <v-img
              v-for="image in blog.Images"
              :key="image.id"
              :src="'https://leonardchiu-strapi.herokuapp.com' + image.url"
              max-width="200px"
            ></v-img>
          </v-card>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  props: ["posts"],
  data() {
    return {
      strapiURL: "http://localhost:1337"
    };
  },
  computed: {
    reversePosts() {
      return this.posts.reverse().slice(0, 3);
    }
  }
  // mounted() {
  //   return axios.get("http://localhost:1337/blogs").then(response => {
  //     // const json = JSON.stringify(response);
  //     this.blogs = response;
  //     console.log(response.data);
  //   });
  // }
};
</script>

<style scoped>
.card {
  text-decoration: none;
}
</style>
