<template>
  <v-container>
    <v-row class="my-8">
      <v-col cols="6">
        <v-row justify="center">
          <h1>Low Code Platforms</h1>
        </v-row>
        <v-row justify="center">
          <v-img
            :src="require('@/assets/img/FileMaker-Logo.png')"
            max-width="200px"
            class="my-8"
          ></v-img>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row justify="center">
          <h1>RPA</h1>
        </v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="4"
              ><v-row justify="center"
                ><h2 class="mt-8">openRPA</h2></v-row
              ></v-col
            >
            <v-col
              ><v-row justify="center"
                ><v-img
                  :src="require('@/assets/img/AutoHotKeys.png')"
                  max-width="80px"
                  class="my-2"
                ></v-img></v-row
            ></v-col>
            <v-col
              ><v-row justify="center"
                ><v-img
                  :src="require('@/assets/img/UIVision.jpg')"
                  max-width="80px"
                  class="my-2"
                >
                </v-img></v-row
            ></v-col>
          </v-row>
        </v-col>
      </v-col>

      <v-row>
        <v-col cols="12">
          <v-row justify="center">
            <h1>Technologies</h1>
          </v-row>
        </v-col>
      </v-row>


      <v-row>
        <v-col>
           <v-row justify="center">
            <v-img :src="require('@/assets/img/NodeJS.png')" max-width="150px"></v-img>
          </v-row>
        </v-col>
        <v-col>
           <v-row>
            <v-img :src="require('@/assets/img/JS.png')" max-width="150px"></v-img>
          </v-row>
        </v-col>
        <v-col>
           <v-row>
            <v-img :src="require('@/assets/img/VueJS.png')" max-width="150px"></v-img>
          </v-row>
        </v-col>
        <v-col>
           <v-row>
            <v-img :src="require('@/assets/img/NuxtJS.png')" max-width="160px"></v-img>
          </v-row>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
