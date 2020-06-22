<template>
  <v-app>
    <v-app-bar flat absolute class="px-12">
      <v-toolbar-title>
        <h3>LEONARD CHIU</h3>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </span>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" text>Home</v-btn>
        <v-btn to="/blog" text>Blog</v-btn>
        <v-btn to="/contact" text>Contact Us</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer absolute right v-model="drawer">
      <v-list class="ma-5">
        <v-list-item v-for="i in menus" :key="i.name"
          ><v-icon left>{{ i.icon }}</v-icon
          >{{ i.name }}</v-list-item
        >
        <!-- <v-list-item> <v-icon left>home</v-icon>Home </v-list-item>
          <v-list-item> <v-icon left>opacity</v-icon>Blog </v-list-item>
          <v-list-item> <v-icon left>edit</v-icon>Contact </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
    <nuxt />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      menus: [
        { name: "Home", index: "1", icon: "face" },
        { name: "Blog", index: "2", icon: "opacity" },
        { name: "Contact", index: "3", icon: "edit" }
      ]
    };
  }
};
</script>
