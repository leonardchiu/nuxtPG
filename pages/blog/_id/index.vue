<template>
  <v-container class="mt-12">
    <h1>{{ post.Title }}</h1>
    <p>{{ post.Post }}</p>
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
        console.log(data.Title);
      });
    console.log(this.$route.params.id);
  }
};
</script>