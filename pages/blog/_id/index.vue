<template>
  <v-container class="mt-16">
    <v-row justify="center">
      <v-col cols="12" sm="12" md="10">
        <h1>{{ post.Title }}</h1>
        <v-img
          v-for="image in post.Images"
          :key="image.id"
          :src="'http://localhost:1337' + image.url"
          max-width="400px"
        ></v-img>
        <p>{{ post.Post }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  layout: "secondary",
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
      .get(`http://localhost:1337/blogs/${this.$route.params.id}`)
      .then(res => {
        const data = res.data;
        this.post = data;
        console.log(data);
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