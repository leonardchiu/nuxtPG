<template>
  <div>
    <!-- <v-app> -->
    <Hero />
    <!-- <v-container> -->
    <Card />
    <Main />
    <Tech />
    <!-- </v-container> -->
    <!-- </v-app> -->
  </div>
</template>

<script>
import Card from "../../components/homepage/cards.vue";
import Hero from "../../components/homepage/hero.vue";
import Main from "../../components/homepage/mainDesc.vue";
import Tech from "../../components/homepage/technologies.vue";

export default {
  layout: "secondary",
  components: {
    Card,
    Hero,
    Main,
    Tech
  }
};
</script>
