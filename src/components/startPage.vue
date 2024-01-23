<template>
  <v-main>
    <div class="padded">
        <h2>Forms</h2>
        <v-list>
          <v-list-item>
            <v-btn large color="primary" background-color="#18598B" class="create_resource_button" to="/ecrr">Create Resource Description</v-btn>
<!--            <router-link to="/ecrr" >Create Resource Description</router-link>-->
          </v-list-item>
        </v-list>
    </div>

    <v-divider></v-divider>

    <div class="padded">
        <examples></examples>
        <list-user-files></list-user-files>
        <list-registry-files></list-registry-files>
    </div>
  </v-main>
</template>

<script>
import examples from '@/components/examples.vue'
import listUserFiles from "@/components/listUserFiles.vue";
import listRegistryFiles from "@/components/listRegistryFiles.vue";
import {defineComponent} from "vue";
export default defineComponent( {
  name: "startPage",
  components: {
    examples,
    listUserFiles,
    listRegistryFiles
  }
})

</script>

<style scoped>

.padded {
    padding: 1rem;
}

.create_resource_button {
    padding: 2em !important;
}

</style>
