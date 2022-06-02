<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <div class="d-flex align-center">
        <v-img
          alt="EC Logo"
          class="shrink mr-2"
          contain
          src="./assets/EarthCube-White-Long-Tagline.png"
          transition="scale-transition"
          width="100"
        />

        <v-img
          alt="Geocodes"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="./assets/GeoCODES.png"
          width="100"
        />

      </div>

      <v-spacer></v-spacer>
      <v-toolbar-items><h2 style="color:grey;">{{$route.name}}</h2></v-toolbar-items>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <div v-if="!$auth.loading">
          <!-- show login when not authenticated -->
          <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
          <!-- show logout when authenticated -->
          <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
          <v-dialog
              v-model="dialog"
              width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="red lighten-2"
                  dark
                  v-bind="attrs"
                  v-on="on"
              >
                JWT
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Privacy Policy
              </v-card-title>

              <v-card-text>
                <div>{{credentials}}</div>
              <div> {{jwt  }}</div>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click="dialog = false"
                >
                  I accept
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view></router-view>


    </v-main>
    <v-footer padless>
      <v-col
          class="text-center"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Geocodes Schema.org JSONLD Creator Application</strong>
      </v-col>
      <v-btn
          href="https://github.com/earthcube/jsonld_forms"
          target="_blank"
          text
      >
         <span class="mr-2">Github</span>
        <v-icon>mdi-github-circle</v-icon>
      </v-btn>

      <v-btn
          href="https://jsonforms-vuetify-renderers.netlify.app/"
          target="_blank"
          text
      >
        <span class="mr-2">JSON-LD Vuetify Forms Examples</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn
          href="https://github.com/eclipsesource/jsonforms-vuetify-renderers/"
          target="_blank"
          text
      >
        <span class="mr-2">JSON-LD Vuetify Forms Github</span>
        <v-icon>mdi-github-circle</v-icon>
      </v-btn>
      <v-btn
          href="https://vuetifyjs.com/en/introduction/why-vuetify/"
          target="_blank"
          text
      >
        <span class="mr-2">Using Vuetify</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn
          href="https://github.com/vuetifyjs/vuetify/"
          target="_blank"
          text
      >
        <span class="mr-2"> Vuetify github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <a href="https://www.netlify.com"> <img src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg" alt="Deploys by Netlify" /> </a>

    </v-footer>

  </v-app>
</template>

<script>

//import Tools from './components/Tools'


export default {
  name: 'App',

  components: {

 //   Tools
  },
  watch: {
   '$auth.loading' : 'updateAuth'
  },

  data () {
    return {
      dialog: false,
      jwt:"",
      credentials:""
    }
  },
  // async mounted() {
  //   try {
  //     this.jwt =  await this.$auth.getIdTokenClaims()
  //   } catch (e) {
  //     console.log(e)
  //     if (this.$auth.isAuthenticated ){
  //       console.error('error retrieving authentication claims')
  //     }
  //
  //   }
  //     try {
  //     let token = await  this.$auth.getTokenSilently()
  //       this.$auth.getMinioAuth(token ).then( (data)=> this.credentials = data )
  //     } catch (e)  {
  //       console.log(e)
  //       if (this.$auth.isAuthenticated ) {
  //         console.error('error getting minio keys for user')
  //       }
  //     }
  //
  //
  //
  // },
  methods:{
    async updateAuth(){
      this.jwt =  await this.$auth.getIdTokenClaims()
      //let token = await  this.$auth.getTokenSilently()
      this.$auth.getMinioAuth(this.jwt.__raw ).then( (data)=> this.credentials = data )
    },
    login () {
      this.$auth.loginWithRedirect({})
    },

    // Log the user out
    logout () {
      this.$auth.logout({
        returnTo: window.location.origin
      })
    }
  }
};
</script>

<style>
.input {
  background-color: #FBFBFB ;
}
div.vertical-layout-item > label.v-label {
  line-height: 2rem !important;
  margin-bottom: 2rem;

}
/* add position, so relative works for v-message above item */
.v-input{
  position: relative !important;
  padding-top: 1.5rem !important;
}
.v-messages{
  top: 0;
  position: absolute !important;
}
.array-list-label{
  font-size: 16px  !important;
  font-weight: normal  !important;
}
.group-item .v-card__title{
  padding: 0 !important;
}
.v-toolbar__content, header.array-list-toolbar {
 height: 1.5em  !important;
}
.v-card__text  .justify-space-around {
  padding: 1.5rem !important;
}
.v-expansion-panel-content__wrap {
  padding-bottom: 1rem !important;
}
.v-expansion-panel::before {
  box-shadow: none !important;
}
</style>
