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
import axios from "axios"

export default {
  layout: "secondary",
  components: {
    Card,
    Hero,
    Main,
    Tech
  },
    data() {
    return {
      posts: ''
    }
  }
  // asyncData({params}) {
  //   return axios.get('http://localhost:1337/blogs')
  //   .then(response => {
  //   console.log(response)
  //   })

  // },
};
</script>
