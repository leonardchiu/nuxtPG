<template>
  <v-container class="my-16">
    <h1 class="px-10">Blogs</h1>
    <Cards />
  </v-container>
</template>

<script>
import axios from "axios";
import Cards from "../../components/homepage/blogCards.vue";

export default {
  components: { Cards }
};
</script>
