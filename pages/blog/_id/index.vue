<template>
  <v-container class="my-16">
    <v-row justify="center">
      <v-col cols="12" sm="12" md="10">
        <h1>{{ singlePost.Title }}</h1>
        <v-img
          v-for="image in singlePost.Images"
          :key="image.id"
          :src="image.url"
        ></v-img>
        <div v-if="singlePost.Post" id="editor" v-html="$md.render(singlePost.Post)"></div>
        <!-- <p>{{ post.Post }}</p> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {

  asyncData(context) {
    return axios.get(`https://leonardchiu-strapi.herokuapp.com/blogs/${context.params.id}`)
    .then(res => {
      const singlePost = res.data;
      return { singlePost }
    })
  }

  // mounted() {
  //   const id = this.$route.params.id;
  //   return axios
  //     .get(
  //       `https://leonardchiu-strapi.herokuapp.com/blogs/${this.$route.params.id}`
  //     )
  //     .then(res => {
  //       const data = res.data;
  //       this.post = data;
  //       // console.log(data);
  //     });
  //   console.log(this.$route.params.id);
  // }
};
</script>

<style scoped>
.container {
  width: 80%;
}
</style>
