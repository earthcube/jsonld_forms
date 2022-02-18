<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn
          href="https://jsonforms-vuetify-renderers.netlify.app/"
          target="_blank"
          text
      >
        <span class="mr-2">Vuetify Forms</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Tools></Tools>
    </v-main>
  </v-app>
</template>

<script>

import Tools from './components/Tools'

export default {
  name: 'App',

  components: {

    Tools
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
/* add position, so relative works for v-message above item */
.v-input{
  position: relative !important;
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
  padding: 0;
}
.v-toolbar__content, header.array-list-toolbar {
 height: 1.5em  !important;
}
.v-card__text  .justify-space-around {
  padding: 1.5rem;
}
.v-expansion-panel-content__wrap {
  padding-bottom: 1rem !important;
}
</style>
