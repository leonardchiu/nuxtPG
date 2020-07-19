<template>
  <v-container class="my-16 px-10">
    <h1>About Me</h1>
    <v-img
      :src="require('@/assets/img/About-Me.png')"
      max-width="200px"
      class="float-left ma-4"
    ></v-img>
    <p>
      I am not a software engineer by training. I was trained in Building and
      Property management in school but the trade never resonate with me.
      However right out of school, I joined a construction company as sales
      executive for private residential and commercial properties renovation
      projects. Never regretted the 5 years I was in the trade as I learnt many
      business skills which led me to where i am today. I was always interested
      in automation. Called me lazy but I always thought there are better and
      more efficient ways of achieving productivity. This leads me to software
      programming.
    </p>
    <p>
      Like everyone else that picks up software engineering at a later stage in
      their career, I struggled to understand the concept. I had the benefit of
      a good career to back my quest to code. The good thing is that I was never
      at the career switching point when i picked up coding as I find it is near
      impossible to juggle that situation. The learning curve was pretty steep
      initially and most get discourage quickly. Trust me i went through many
      many times. But I wasn't trying to get into coding to make ends meet. I
      was trying to make my job much easier... (again laziness). All the
      available technologies, syntax, tech jargon, documentations, online
      courses didn't make things simpler for newbie. They are just the many
      layers of walls to get across. I realized the most important thing after a
      few years of climbing all those walls is understanding the purpose of
      software engineering.
    </p>
    <p>
      What intrigue me was that software are created out of lines and lines of
      code. From young, we were taught that manufacturing produces something out
      of raw materials. It never don to me that software is indeed a product.
      And it is a wonderful product that help save so much time. It was this
      realization that switch my mindset around and make me see that the users
      don't see the underlying technologies of software. All they know is if the
      software is helping their work and tasks. They cares about ease of use and
      visual appeals of the software. Who cares what state of the art technology
      stacks were used to built their software. They just want to know if when
      they need a change of colors of the font, how long it takes for their
      developer (or IT as they called them) can do it. With this understanding,
      i go on to create many software that were adopted by my own businesses in
      everyday operations. Forward to today, a few of my software were now used
      by companies with annual revenue many times more than mine.
    </p>
    <p>
      To know more about what i do, read through my blogs as I document my works
      to share to those that are trying to solve a problem they face.
    </p>
    <p>
      Personal life: I am married to the loveliest wife and father of 2 boys. I
      like all things tech and gadgets. Used to be the biggest Apple fan but
      these days i lean towards the better solution available. When i was much
      younger, i was much more adventurous. I am a PADI certified scuba
      instructor and was an avid motor-crossing rider. Now i pretty much retreat
      into the less dangerous sport like gym, running and an occasional golf. In
      my other life, I help out the community as much as i can. I am a volunteer
      in the grassroots movement to create awareness for community bonding and
      social interaction among the Singaporeans. I was conferred the National
      Day award, Pingkat Bakti Masyarakat, PBM by the president of Singapore in
      2019. And I also actively helped out at Meet the People session, where I
      render assistance to fellow Singaporeans for their problems with
      government agencies and private companies.
    </p>
    <p>
      I use this website to broadcast my knowledge on how technologies can
      helped businesses and individuals. I also welcome other like minded people
      that are much more technically trained than me to comment and contribute
      to this platforms.
    </p>
    <p>
      Fast forward 15 years, I am still not a software engineer. I just like
      solving problems efficiently.
    </p>
  </v-container>
</template>

<script>
import Card from "../../components/homepage/cards.vue";
import Hero from "../../components/homepage/hero.vue";
import Main from "../../components/homepage/mainDesc.vue";
import Tech from "../../components/homepage/technologies.vue";
import axios from "axios";

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
      posts: []
    };
  },
  // mounted() {
  //   return axios.get("http://localhost:1337/blogs").then(response => {
  //     // const json = JSON.stringify(response);
  //     this.posts = response;
  //     // return { posts: response };
  //     console.log(response.data);
  //   });
  // },
  // asyncData() {
  //   return axios.get("http://localhost:1337/blogs").then(res => {
  //     return { posts: res.data };
  //     // console.log(res.data);
  //     // return { posts: res };
  //   });
  async asyncData() {
    const response = await axios.get(
      "https://leonardchiu-strapi.herokuapp.com/blogs"
    );
    const data = await response.data;
    console.log(data);
    return { posts: data };
  }
  // async fetch() {
  //   const { data } = await axios.get("http://localhost:1337/blogs");
  //   this.posts = data;
  // }
};
</script>

<style scoped>
.aboutMe {
  float: left;
}
</style>
