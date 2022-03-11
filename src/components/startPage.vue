<template>
  <v-main>
    <h2>Forms</h2>
    <v-list>
      <v-list-item><router-link to="/ecrr" >Create Resource Description</router-link></v-list-item>
    </v-list>

    <v-divider></v-divider>
    <examples></examples>
   <list-user-files></list-user-files>
  </v-main>
</template>

<script>
import examples from './examples'
import listUserFiles from "./listUserFiles";
export default {
  name: "startPage",
  components: {
    examples,
    listUserFiles
  }
}
</script>

<style scoped>

</style>
