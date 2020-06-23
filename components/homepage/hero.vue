<template>
  <!-- <v-sheet height="400px" color="orange"> -->
    <!-- <v-container class="fill-height">
      <v-row justify="center" align="center">
        <h1>Hello World!</h1>
      </v-row>
    </v-container> -->
  <v-img :src="require('@/assets/img/hero.jpg')" height="600px">

  <v-container>
    <v-row>
      <v-col cols="8" sm="6" md="4" lg="3" xl="3" class="mt-16 pt-16 ml-6">
        <v-img :src="require('@/assets/img/leonardchiu.png')"></v-img>
      </v-col>
    </v-row>
  </v-container>

  </v-img>
  <!-- </v-sheet> -->
</template>

<script>
export default {};
</script>
