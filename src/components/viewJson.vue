<template>
  <v-col cols="10">
    <v-dialog scrollable inset >
      <template v-slot:activator="{ on, attrs }">
        <v-fab-transition>
        <v-btn
            v-bind="attrs"
            color="blue"
            dark

            v-on:click="on"

            class="float-right"
        >
          {{name}}
        </v-btn>
          </v-fab-transition>
      </template>
      <v-card
          class="text-center"
          height="80%"
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
    </v-dialog>
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
    name: {type: String}
  }
}
</script>

<style scoped>

</style>
