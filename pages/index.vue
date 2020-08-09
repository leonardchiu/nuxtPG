<template>
  <v-container>
    <Hero />
    <Card />
    <Main />
    <Tech />
  </v-container>
</template>

<script>
import Card from "../components/homepage/cards.vue";
import Hero from "../components/homepage/hero.vue";
import Main from "../components/homepage/mainDesc.vue";
import Tech from "../components/homepage/technologies.vue";
import axios from "axios";

export default {
  components: {
    Card,
    Hero,
    Main,
    Tech
  }
};
</script>
