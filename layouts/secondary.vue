<template>
  <v-app>
    <v-app-bar fixed flat>
      <v-navigation-drawer height="500px" absolute right class="hidden-sm-and-up">
        <v-list class="ma-5">
          <v-list-item>
            <v-icon left>home</v-icon>Home
          </v-list-item>
          <v-list-item>
            <v-icon left>opacity</v-icon>Blog
          </v-list-item>
          <v-list-item>
            <v-icon left>edit</v-icon>Contact
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar-title>
        <h3 class="ml-10">LEONARD CHIU</h3>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </span>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" text>Home</v-btn>
        <v-btn to="/blog" text>Blog</v-btn>
        <v-btn to="/contact" text>Contact Us</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <nuxt />
  </v-app>
</template>

<script>
export default {};
</script>