<template>
  <div>
    <v-spacer />
    <h2>User Files</h2>


    <v-container
      fluid
      ma-0
      pa-0
    >
      <v-data-iterator
        :items="userItems"
        item-key="etag"
        :items-per-page="itemsPerPage"
        :page="page"
        hide-default-footer
      >
        <template #header>
          <v-toolbar
            class="mb-2"
            color="#aaa"
            dark
            flat
          >
            <v-toolbar-title>User Files</v-toolbar-title>
          </v-toolbar>
        </template>

        <template #default="{items}">
          <div class="json_list">
            <v-card
              v-for="(item, i) in items"
              :key="item.raw.name"
              :to="{ name: 'ECRR', query: { jsonldfile:item.raw.file }}"
            >
              <v-card-title>
                <div class="json_name">
                  {{ item.raw.name }}
                </div>
                <div class="button_label">
                  Load File
                </div>
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
        <template #footer>
          <v-row
            class="mt-4"
            align="center"
            justify="center"
          >
            <span class="text-grey">Items per page</span>
            <v-menu offset-y>
              <template #activator="{ props }">
                <v-btn
                  v-bind="props"
                  dark
                  variant="text"
                  color="#18598B"
                  class="ml-2"
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

            <v-spacer />

            <span
              class="mr-4 text-grey"
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
import {listUserFiles, getFroms3} from '../js/s3store'

export default {
  name: "ListUserFiles",
  emits:['loadfile'],
  data() {
    return {
      singleExpand: false,
      userItems:[],
      groupItems: {},
      s3Credentials: {
        username: import.meta.env.VITE_accessKey,
        password: import.meta.env.VITE_secretKey,
        endpoint: import.meta.env.VITE_endPoint,
        port: parseInt(import.meta.env.VITE_port),
        useSsl: Boolean(import.meta.env.VITE_useSSL)
      },
      BUCKET: import.meta.env.VITE_BUCKET,
      page: 1,
      itemsPerPage: 4,
      itemsPerPageArray: [4, 8, 12],
    }
  },
  computed: {
    numberOfPages () {
      return Math.ceil(this.userItems.length / this.itemsPerPage)
    },
    filteredKeys () {
      return this.keys.filter(key => key !== 'Name')
    },
  },
   async mounted(){
    listUserFiles(this.BUCKET,'resourceregistry', this.s3Credentials).then(
        (data) => this.userItems = data
    )


   },
  methods:{
    async loadFile (name){
      const filepath = name
      const file = await getFroms3( filepath, this.BUCKET, this.s3Credentials)
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
