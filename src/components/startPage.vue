<template>
  <v-main>
    <router-link to="/ecrr" >Create Resource Description</router-link>
    <examples></examples>
    <v-form>
      <v-input type="text"></v-input>
    </v-form>
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
