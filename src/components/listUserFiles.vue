<template>
  <v-container fluid>
    <v-switch
        v-model="singleExpand"
        label="Expand Single Item"
    ></v-switch>
    <v-data-iterator
        :items="userItems"
        item-key="etag"
        :items-per-page="4"
        :single-expand="singleExpand"
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
              </v-card-title>

              <v-divider></v-divider>
              <v-list

                  dense
              >
                <v-list-item>
                  <v-list-item-content>Size:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.size }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>last Modified:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.lastModified }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Metatas:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.metadata }}
                  </v-list-item-content>
                </v-list-item>

              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import {listUserFiles} from '../js/s3store'

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
    }
  },
   async mounted(){
    listUserFiles(this.BUCKET,'resourceregistry', this.s3Credentials).then(
        (data) => this.userItems = data
    )


  }
}
</script>

<style scoped>

</style>
