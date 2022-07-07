<template>
  <div>
    <v-spacer></v-spacer>
    <h2>Earthcube Resource Registry Examples <a href="https://github.com/earthcube/ecrro">github</a></h2>
    <v-banner outlined>Note: Not all examples load. Records with number prefixes have been 'cleaned'. </v-banner>

    <v-container fluid ma-0 pa-0>
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
              color="#aaa"
              dark
              flat
          >
            <v-toolbar-title>Examples</v-toolbar-title>
          </v-toolbar>
        </template>

        <template v-slot:default="props">
            <div class="json_list">
              <v-card v-for="item in props.items" :key="item.name" :to="{ name: 'ECRR', query: { jsonldfile:item.file }}">
                <v-card-title>
                  <div class="json_name">{{ item.name }}</div>
                  <div class="button_label">Load File</div>
<!--
no longer needed as the entire card is clickable
                  <v-btn
                      text
                      color="primary"
                      :to="{ name: 'ECRR',
                  query: { jsonldfile:item.file }
                 }"
                  >
                    Load File
                  </v-btn>
-->
                </v-card-title>
              </v-card>
            </div>
<!--
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
-->
        </template>
        <template v-slot:footer>
          <v-row
              class="mt-4"
              align="center"
              justify="center"
          >
            <span class="grey--text">Items per page</span>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    dark
                    text
                    color="#18598B"
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
                color="#18598B"
                class="mr-1"
                @click="formerPage"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
                fab
                dark
                color="#18598B"
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
// Datasets
        {name:"Argo dataset example", file:"datasets/argo.jsonld.json"},
        {name:"BCO-DMO dataset example", file:"datasets/bcodmo1.json"},
        {name:"EarthChem Library dataset example", file:"datasets/earthchem1.json"},
        {name:"Hydroshare collection dataset example", file:"datasets/hydroshare1.json"},
        {name:"Magnetics Consortium dataset example", file:"datasets/magic1.json"},
        {name:"Open Topography dataset example", file:"datasets/opentopo1.json"},
        {name:"USGS Water Information Sites example", file:"datasets/nwis-sites.jsonld"},
        {name:"USGS Water Information Instantaneous Values example", file:"datasets/nwis-instantaneous_values.jsonld"},

// Misc resources
        {name:"ARGOvis-Notebook", file:"tools/argovis-Notebook.jsonld.json"},
        {name:"Repository-EarthChemLibrary", file:"tools/Repository-EarthChemLibrary-SDO.JSON"},
        {name:"Interface-ChordsWebAPIv2", file:"tools/Interface-ChordsWebAPIv2-SDO-toLoad.json"},
        {name:"Registry-XDomes-", file:"tools/Registry-XDomes-SDO.json"},
        {name:"InformationModel-Sweet ontology", file:"tools/InformationModel-Sweet-SDO.json"},
        {name:"InterchangeFormat-MiniSeed", file:"tools/InterchangeFormat-MiniSeed-SDO.JSON"},
        {name:"Service-IRIS-fsdnEvent", file:"tools/Service-IRIS-fsdnEvent-JSON.json"},
        {name:"Software-ERDDAP", file:"tools/Software-ERDDAP-SDO.JSON"},
        {name:"Specification-COARDS", file:"tools/Specification-COARDS-SDO.JSON"},
      ],
      page: 1,
      itemsPerPage: 6,
      itemsPerPageArray: [6, 18, 30],
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

.json_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    margin-top: 1rem;
    margin-bottom: 4rem;
}

.json_list > .v-card {
    width: 100%;
    min-height: 160px;
    transition: transform .2s ease-out;
}

.json_list > .v-card:hover {
    color: #fff;
    background-color: #18598B;

    transform: scale(1.08);
    z-index: 1000;
}

.json_list > .v-card .v-card__title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    height: 100%;

    line-height: 120%;
}

.json_list > .v-card .json_name {
    flex-grow: 1;
    font-size: 1.1rem;
}

.json_list > .v-card .button_label {
    font-size: .85rem;
    text-transform: uppercase;
}

@media (min-width: 600px) {
    .json_list > .v-card {
        width: 48%;
    }
}
@media (min-width: 1000px) {
    .json_list > .v-card {
        width: 32%;
    }
}

</style>