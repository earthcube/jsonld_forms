<template>
  <v-main>
    <h2>Forms</h2>
    <v-list>
      <v-list-item><router-link to="/ecrr" >Create Resource Description</router-link></v-list-item>
    </v-list>

    <v-divider></v-divider>
    <examples></examples>
   <list-user-files></list-user-files>
    <list-registry-files></list-registry-files>
  </v-main>
</template>

<script>
import examples from './examples'
import listUserFiles from "./listUserFiles";
import listRegistryFiles from "./listRegistryFiles";
export default {
  name: "startPage",
  components: {
    examples,
    listUserFiles,
    listRegistryFiles
  }
}
</script>

<style scoped>

</style>
