<template>
  <v-container fluid fill-height class="ma-0 pa-0 full">
    <v-img :src="require('@/assets/img/hero.jpg')" height="600px">
      <v-container>
        <v-row>
          <v-col cols="8" sm="6" md="4" lg="3" xl="3" class="mt-16 pt-16 ml-6">
            <v-img :src="require('@/assets/img/leonardchiu.png')"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
#full {
  width: 100%;
}
</style>
