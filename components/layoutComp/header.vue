<template>
  <v-app>
    <v-app-bar fixed flated>
      <v-toolbar-title>
        <h3>LEONARD CHIU</h3>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="hidden-sm-and-up">
        <v-btn>Menu</v-btn>
      </span>
      <v-toolbar-items class="hidden-sm-and-up">
        <v-btn to="/" text>Home</v-btn>
        <v-btn to="/blog" text>Blog</v-btn>
        <v-btn to="/contact" text>Contact Us</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-card height="300px" width="600px" color="red">
      <v-card-title class="mt-30">Hello World</v-card-title>
    </v-card>
  </v-app>
</template>
