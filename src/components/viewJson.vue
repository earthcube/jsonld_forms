<template>
  <v-col cols="10">
    <v-bottom-sheet scrollable >
      <template v-slot:activator="{ on, attrs }">
        <v-fab-transition>
        <v-btn
            color="blue"
            dark
            v-bind="attrs"
            v-on="on"
            absolute
            bottom
            right
            fab
        >
          JSON
        </v-btn>
          </v-fab-transition>
      </template>
      <v-card
          class="text-center"
          height="200px"
      >
        <v-card-title>JSON-LD</v-card-title>
<!--        <v-btn-->
<!--            class="mt-6"-->
<!--            text-->
<!--            color="error"-->
<!--            @click="sheet = !sheet"-->
<!--        >-->
<!--          close-->
<!--        </v-btn>-->
        <v-card-text>
          <vue-json-pretty :path="'res'" :data="json" > </vue-json-pretty>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
  </v-col>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
export default {
  name: "viewJson",
  components: {
    VueJsonPretty
  },
  props: {
    json: {type: Object },
  }
}
</script>

<style scoped>

</style>
