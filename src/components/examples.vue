<template>
  <div>
    <h2>Earthcube Resource Registry Examples</h2>
    <v-list>
      <v-list-item v-for="f in examples" :key="f.name">
        <router-link :to="{ name: 'ECRR',
           query: { jsonldfile: f.file }
         }" >
         {{f.name }}
        </router-link>
      </v-list-item>
    </v-list>
  </div>

</template>

<script>
export default {
  name: "examples",
  data(){
    return {
      examples: [
        {name:"argovis-Notebook.jsonld.json", file:"tools/argovis-Notebook.jsonld.json"},
        {name:"ECRRTemplateSDO.JSON", file:"tools/ECRRTemplateSDO.JSON"},
        {name:"ECRRTemplateSDO-Service-v2.JSON", file:"tools/ECRRTemplateSDO-Service-v2.JSON"},
        {name:"ECRRTemplateSDO-Software.JSON", file:"tools/ECRRTemplateSDO-Software.JSON"},
        {name:"InformationModel-Sweet-SDO.json", file:"tools/InformationModel-Sweet-SDO.json"},
        {name:"InterchangeFormat-MiniSeed-SDO.JSON", file:"tools/InterchangeFormat-MiniSeed-SDO.JSON"},
        {name:"Interface-ChordsWebAPI-W3Cdraft.json", file:"tools/Interface-ChordsWebAPI-W3Cdraft.json"},
        {name:"Interface-ChordsWebAPIv2-SDO.json", file:"tools/Interface-ChordsWebAPIv2-SDO.json"},
        {name:"Interface-ChordsWebAPIv2-SDO-toLoad.json", file:"Interface-ChordsWebAPIv2-SDO-toLoad.json"},

        {name:"Registry-XDomes-SDO.json", file:"tools/Registry-XDomes-SDO.json"},
        {name:"Repository-EarthChemLibrary-SDO.JSON", file:"tools/Repository-EarthChemLibrary-SDO.JSON"},
        {name:"Service-IRIS-fsdnEvent-JSON.json", file:"tools/Service-IRIS-fsdnEvent-JSON.json"},
        {name:"Software-ERDDAP-SDO.JSON", file:"tools/Software-ERDDAP-SDO.JSON"},
        {name:"Specification-COARDS-SDO.JSON", file:"tools/Specification-COARDS-SDO.JSON"},
        {name:"WebAPI-w3cdraft-IRIS-fsdnEvent-JSON.json", file:"tools/WebAPI-w3cdraft-IRIS-fsdnEvent-JSON.json"},

      ]
    }
  }
}
</script>

<style scoped>

</style>
