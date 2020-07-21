<template>
  <v-container class="ma-16">
    <v-row justify="center">
      <v-col cols="12" sm="12" md="10">
        <h1>{{ post.Title }}</h1>
        <v-img
          v-for="image in post.Images"
          :key="image.id"
          :src="image.url"
          max-width="400px"
        ></v-img>
        <div v-if="post.Post" id="editor" v-html="$md.render(post.Post)"></div>
        <!-- <p>{{ post.Post }}</p> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  // layout: "secondary",
  data() {
    return {
      post: ""
    };
  },
  // async asyncData() {
  //   const response = await axios.get("1");
  //   const data = response.data;
  //   console.log(data);
  // },
  mounted() {
    const id = this.$route.params.id;
    return axios
      .get(
        `https://leonardchiu-strapi.herokuapp.com/blogs/${this.$route.params.id}`
      )
      .then(res => {
        const data = res.data;
        this.post = data;
        // console.log(data);
      });
    console.log(this.$route.params.id);
  }
};
</script>

<style scoped>
.container {
  width: 80%;
}
</style>
