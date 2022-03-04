<template>
  <v-main>
    <h2>Forms</h2>
    <v-list>
      <v-list-item><router-link to="/ecrr" >Create Resource Description</router-link></v-list-item>
    </v-list>

    <v-divider></v-divider>
    <examples></examples>

  </v-main>
</template>

<script>
import examples from './examples'
export default {
  name: "startPage",
  components: {
    examples
  }
}
</script>

<style scoped>

</style>
