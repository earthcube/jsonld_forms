<template>
  <div>
    <v-spacer></v-spacer>
    <h2><a href="https://github.com/earthcube/ecrro"> Earthcube Resource Registry Examples</a></h2>
    <v-banner outlined>Note: Not all examples load. Records with number prefixes have been 'cleaned'. </v-banner>
    <v-container fluid>

      <v-data-iterator
          :items="examples"
          item-key="file"
          :items-per-page.sync="itemsPerPage"
          :page.sync="page"
          hide-default-footer
      >
        <template v-slot:header>
          <v-toolbar
              class="mb-2"
              color="indigo darken-5"
              dark
              flat
          >
            <v-toolbar-title>Examples</v-toolbar-title>
          </v-toolbar>
        </template>

        <template v-slot:default="props">
          <v-row>
            <v-col
                v-for="item in props.items"
                :key="item.name"
                cols="12"
                sm="6"
                md="4"
                lg="3"
            >
              <v-card>
                <v-card-title>
                  <h4>{{ item.name }}</h4>
                  <v-btn
                      text
                      color="primary"
                      :to="{ name: 'ECRR',
                  query: { jsonldfile:item.file }
                 }"
                  >
                    Load File
                  </v-btn>
                </v-card-title>


              </v-card>
            </v-col>
          </v-row>
        </template>
        <template v-slot:footer>
          <v-row
              class="mt-2"
              align="center"
              justify="center"
          >
            <span class="grey--text">Items per page</span>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    dark
                    text
                    color="primary"
                    class="ml-2"
                    v-bind="attrs"
                    v-on="on"
                >
                  {{ itemsPerPage }}
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                    v-for="(number, index) in itemsPerPageArray"
                    :key="index"
                    @click="updateItemsPerPage(number)"
                >
                  <v-list-item-title>{{ number }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-spacer></v-spacer>

            <span
                class="mr-4
            grey--text"
            >
            Page {{ page }} of {{ numberOfPages }}
          </span>
            <v-btn
                fab
                dark
                color="blue darken-3"
                class="mr-1"
                @click="formerPage"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
                fab
                dark
                color="blue darken-3"
                class="ml-1"
                @click="nextPage"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>

  </div>

</template>

<script>
export default {
  name: "examples",
  data(){
    return {
      examples: [
        {name:"1.argovis-Notebook.jsonld.json", file:"tools/argovis-Notebook.jsonld.json"},
        {name:"2.Repository-EarthChemLibrary-SDO.JSON", file:"tools/Repository-EarthChemLibrary-SDO.JSON"},
        {name:"3.Interface-ChordsWebAPIv2-SDO-toLoad.json", file:"tools/Interface-ChordsWebAPIv2-SDO-toLoad.json"},
        {name:"Interface-ChordsWebAPIv2-SDO.json", file:"tools/Interface-ChordsWebAPIv2-SDO.json"},
        {name:"Registry-XDomes-SDO.json", file:"tools/Registry-XDomes-SDO.json"},
        {name:"ECRRTemplateSDO.JSON", file:"tools/ECRRTemplateSDO.JSON"},
        {name:"ECRRTemplateSDO-Service-v2.JSON", file:"tools/ECRRTemplateSDO-Service-v2.JSON"},
        {name:"ECRRTemplateSDO-Software.JSON", file:"tools/ECRRTemplateSDO-Software.JSON"},
        {name:"InformationModel-Sweet-SDO.json", file:"tools/InformationModel-Sweet-SDO.json"},
        {name:"InterchangeFormat-MiniSeed-SDO.JSON", file:"tools/InterchangeFormat-MiniSeed-SDO.JSON"},
        {name:"Interface-ChordsWebAPI-W3Cdraft.json", file:"tools/Interface-ChordsWebAPI-W3Cdraft.json"},





        {name:"Service-IRIS-fsdnEvent-JSON.json", file:"tools/Service-IRIS-fsdnEvent-JSON.json"},
        {name:"Software-ERDDAP-SDO.JSON", file:"tools/Software-ERDDAP-SDO.JSON"},
        {name:"Specification-COARDS-SDO.JSON", file:"tools/Specification-COARDS-SDO.JSON"},
        {name:"WebAPI-w3cdraft-IRIS-fsdnEvent-JSON.json", file:"tools/WebAPI-w3cdraft-IRIS-fsdnEvent-JSON.json"},

      ],
      page: 1,
      itemsPerPage: 4,
      itemsPerPageArray: [4, 8, 12],
    }
  },
  computed: {
    numberOfPages () {
      return Math.ceil(this.examples.length / this.itemsPerPage)
    },
    filteredKeys () {
      return this.keys.filter(key => key !== 'Name')
    },
  },
  methods: {
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage (number) {
      this.itemsPerPage = number
    },
  }
}
</script>

<style scoped>

</style>
