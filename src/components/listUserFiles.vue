<template>
  <v-container fluid v-if="userItems.length >0">

    <v-data-iterator
        :items="userItems"
        item-key="etag"
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
        <v-toolbar-title>User Items</v-toolbar-title>
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
                   query: { s3file: item.name  }
                 }"
                >
                  Load File
                </v-btn>
              </v-card-title>

              <v-divider></v-divider>
              <v-list
                  dense
              >
                <v-list-item v-if="item.path">
                  <v-list-item-content>Path:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.path }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>last Modified:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.lastModified }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Metadata:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.metadata }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Size:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.size }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
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
</template>

<script>
import {listUserFiles, getFroms3} from '../js/s3store'

export default {
  name: "listUserFiles",
  data() {
    return {
      singleExpand: false,
      userItems:[],
      groupItems: {},
      s3Credentials: {
        username: process.env.VUE_APP_accessKey,
        password: process.env.VUE_APP_secretKey,
        endpoint: process.env.VUE_APP_endPoint,
        port: parseInt(process.env.VUE_APP_port),
        useSsl: Boolean(process.env.VUE_APP_useSSL)
      },
      BUCKET: process.env.VUE_APP_BUCKET,
      page: 1,
      itemsPerPage: 4,
      itemsPerPageArray: [4, 8, 12],
    }
  },
   async mounted(){
    listUserFiles(this.BUCKET,'resourceregistry', this.s3Credentials).then(
        (data) => this.userItems = data
    )


   },
  computed: {
    numberOfPages () {
      return Math.ceil(this.userItems.length / this.itemsPerPage)
    },
    filteredKeys () {
      return this.keys.filter(key => key !== 'Name')
    },
  },
  methods:{
    async loadFile (name){
      var filepath = name
      let file = await getFroms3( filepath, this.BUCKET, this.s3Credentials)
      console.log(file)
      this.$emit('loadfile', name)
    },
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
