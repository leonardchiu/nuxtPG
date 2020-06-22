<template>
  <v-app>
    <v-sheet height="400px" color="orange">
      <v-container class="fill-height">
        <v-row justify="center" align="center">
          <h1>Hello World!</h1>
        </v-row>
      </v-container>
    </v-sheet>
    <v-container>
      <Card />
    </v-container>
  </v-app>
</template>

<script>
import Card from "../../components/homepage/cards.vue";

export default {
  layout: "secondary",
  components: {
    Card
  }
};
</script>