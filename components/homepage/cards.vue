<template>
  <v-container class="px-10">
    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="(blog, i) in posts" :key="i">
        <v-card dark tile elevation="10" color="blue lighten-10" class="pa-4">
          <v-card-title>
            <v-icon left>face</v-icon>
            {{blog.Title}}
          </v-card-title>
          <v-card-text>{{ blog.Post }}</v-card-text>
          <!-- <v-card-text v-for="image in blog.Images" :key="image">{{ image.url }}</v-card-text> -->
          <v-img
            v-for="image in blog.Images"
            :key="image.id"
            :src="'http://localhost:1337' + image.url"
            max-width="200px"
          ></v-img>
        </v-card>
      </v-col>
      <!-- <v-col cols="12" md="6" lg="4">
        <v-card dark tile elevation="10" height="200px" color="blue lighten-10" class="pa-4">
          <v-card-title>
            <v-icon left>fingerprint</v-icon>Aiko Wong
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card dark tile elevation="10" height="200px" color="blue lighten-10" class="pa-4">
          <v-card-title>
            <v-icon left>opacity</v-icon>Declan Chiu
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card dark tile elevation="10" height="200px" color="blue lighten-10" class="pa-4">
          <v-card-title>
            <v-icon left>report_problem</v-icon>Dylan Chiu
          </v-card-title>
        </v-card>
      </v-col>-->
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  props: ["posts"],
  data() {
    return {
      // posts: "",
      strapiURL: "http://localhost:1337"
    };
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
