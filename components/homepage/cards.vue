<template>
  <v-container class="px-10">
    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="(blog, i) in reversePosts" :key="i">
        <nuxt-link :to="'/blog/' + blog.id" class="card">
          <v-card dark tile elevation="10" color="blue lighten-10" class="pa-4">
            <v-card-title>
              <!-- <v-icon left>face</v-icon> -->
              {{ blog.Title }}
            </v-card-title>
            <!-- <v-card-text>{{ blog.Post }}</v-card-text> -->
            <v-img
              v-for="image in blog.Images"
              :key="image.id"
              :src="image.url"
              max-width="300px"
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
  computed: {
    reversePosts() {
      return this.$store.getters['posts/reversePosts']
    }
  }
};
</script>

<style scoped>
.card {
  text-decoration: none;
}

.v-card__text,
.v-card__title {
  word-break: normal; /* maybe !important  */
  line-height: 1.2;
}
</style>
