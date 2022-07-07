<template>
  <v-main>
    <div class="padded">

      <h2 class="headline font-weight-bold mb-3">
        GeoCODES resource description form
      </h2>
      Please submit resource descriptions by filling out the form.
      Documentation for the information model representing resource other than datasets is at <a href="https://docs.google.com/document/d/1ZHfTVCSXLMYJMEXgzgSviwRw9wSHAGYc-RChcGu9fxA">JSON-LD implementation of ECRR Metadata</a>
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

.padded {
    padding: 1rem;
}

.create_resource_button {
    padding: 2em !important;
}

</style>
