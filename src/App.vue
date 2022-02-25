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
          href="https://jsonforms-vuetify-renderers.netlify.app/"
          target="_blank"
          text
      >
        <span class="mr-2">JSON-LD Vuetify Forms</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
      >
        <span class="mr-2">Using Vuetify</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
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

  data: () => ({
    //
  }),
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
