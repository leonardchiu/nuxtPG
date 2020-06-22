<template>
  <div>
    <!-- <v-app> -->
    <Hero />
    <!-- <v-container> -->
    <Card />
    <!-- </v-container> -->
    <!-- </v-app> -->
  </div>
</template>

<script>
import Card from "../../components/homepage/cards.vue";
import Hero from "../../components/homepage/hero.vue";

export default {
  layout: "secondary",
  components: {
    Card,
    Hero
  }
};
</script>
