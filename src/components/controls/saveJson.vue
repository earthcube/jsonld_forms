<template>
  <v-row justify="center">

    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            v-bind="attrs"
            color="primary"
            dark

            v-on="on"
        >
          Save File
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Save JSON-LD File</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  sm="6"
                  md="4"
              >
                <v-text-field
                    label="Filename"
                    required
                    v-model="filename"
                ></v-text-field>
              </v-col>

            </v-row>
          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="saveItemS3(json)"
          >
            Save to S3
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="downloadJsonLD(json)"
          >
            Download File
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {unflatten} from "../../js/jsonldutils";
import {flattenList} from "../../schema/tools/ecrr_jsonschema_1_2";
import {saveToUser} from "../../js/s3store";
import {saveAs} from "file-saver";

export default {
  name: "saveDialog",
  props: {
    json: {type: Object },
    originalName: {type: String },
  },
  data() {
    return {
      title: "Title",
      text: "Test confirmation",
      type: "warning",
      persistent: false,
      dialog: false,
      filename: this.originalName,
      s3Credentials: {
        username: process.env.VUE_APP_accessKey,
        password: process.env.VUE_APP_secretKey,
        endpoint: process.env.VUE_APP_endPoint,
        port: parseInt(process.env.VUE_APP_port),
        useSsl: Boolean(process.env.VUE_APP_useSSL)
      },
      BUCKET: process.env.VUE_APP_BUCKET,
    };
  },
  methods: {


    unflattenLocal(json) {
      return unflatten(json,flattenList)
    },
    saveItemS3 (json){
      let jsonstring = JSON.stringify(json)
      let itemMetadata = {
        status: 'draft',
        playground: true
      }
      saveToUser(jsonstring,this.filename,itemMetadata, 'resourceregistry',
          // process.env.VUE_APP_BUCKET,
          // process.env.VUE_APP_accessKey,
          // process.env.VUE_APP_secretKey,
          // process.env.VUE_APP_endPoint,
          // process.env.VUE_APP_port,
          // process.env.VUE_APP_useSSL
          this.BUCKET,this.s3Credentials
          //'forms', 'user1', 'thisisuser1', 'oss.geocodes.earthcube.org', 443, true
      )
    },
    async downloadJsonLD(json){
      //var blob = new Blob([...JSON.stringify(json)], {type: "text/plain;charset=utf-8"});
      let  jsonstring = JSON.stringify(json)


        var file = new File([jsonstring], this.filename, {type: "text/plain;charset=utf-8"});
        saveAs(file);


    },
    // async filename() {
    //   let res = await this.$dialog.prompt({
    //     text: "FileName",
    //     title: "Title",
    //     persistent: this.persistent
    //   });
    //   if (res) {
    //     this.filename = res
    //   }
    // },
  },

}
</script>

<style scoped>

</style>
