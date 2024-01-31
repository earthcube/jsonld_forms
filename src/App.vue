<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-items-center">
        <v-img
          alt="EC Logo"
          class="shrink mr-3"
          contain
          src="@/assets/EarthCube-White-Long-Tagline.png"
          transition="scale-transition"
          width="100"
        />

        <v-img
          alt="Geocodes"
          class="shrink mr-3 hidden-sm-and-down"
          contain
          min-width="100"
          src="@/assets/GeoCODES.png"
          width="100"
        />
      </div>

      <h2 class="toolbar_title">
        {{ $route.name }}
      </h2>
      <!--      <v-toolbar-items><h2 style="color:white;">{{$route.name}}</h2></v-toolbar-items>-->
      <!--      <v-spacer></v-spacer> -->
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer
      padless
      class="text-center"
    >
      <div class="footer_links">
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
        <a href="https://www.netlify.com"> <img
          src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg"
          alt="Deploys by Netlify"
        > </a>
      </div>

      <div class="footer_links">
        <div>{{ new Date().getFullYear() }}&mdash;<strong>Geocodes Schema.org JSONLD Creator Application</strong></div>
      </div>
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

.theme--light.v-label {
    color: #000;
}

/* limit the overall content width to control the layout */
.v-application--wrap > .v-main {
    width: 100%;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
}

.toolbar_title {
    flex-grow: 1;
    text-align: right;
}

/* fix bug when row overlaps content. not sure where or why margin was set to -12px (or if that's built-in) */
.row {
    margin-top: 0px !important;
}

.input input,
.input textarea {
  background-color: #FBFBFB;
  border: 1px solid #E2E2E2;
  border-radius: 4px;
  line-height: 130% !important;
}
.input input:focus,
.input textarea:focus {
    border-color: #18598B;
}
.input input {
  padding: 1rem .5rem !important;
}
.input textarea {
  padding: .5rem !important;
}

/* primary number titles */
.vertical-layout-item > label.v-label {
    font-weight: bold;
}
/* primary question block */
.v-stepper__wrapper > .v-card > .container > .row {
/* this works...until it doesn't because of multiple .rows for a single question */
    margin-top: 1rem !important;
}

/* used to add padding before the back/next navigation */
.v-stepper__wrapper .v-divider {
    margin-top: 3rem;
}

.v-input__slot {
    position: relative;
    display: block;
    margin-bottom: 0 !important;
}
.v-input__slot .v-select__slot {
}
.v-input__slot .v-select__slot .v-label {
    font-size: .75rem;
    top: -.5rem;
}
.v-select__selections {
    display: block !important;
}
.v-select__selections .v-select__selection {
    position: absolute;
    left: 1em;
    top: 50%;
    z-index: 5;

    margin: 0px;

    transform: translate(0%, -50%);
}

/* remove line at bottom of input and textarea */
.v-input__control > .v-input__slot:before,
.v-input__control > .v-input__slot:after {
    display: none !important;
}

/* add position, so relative works for v-message above item */
.v-input{
  position: relative !important;
  padding-top: .5rem !important;
}

.v-messages {
    order: 100;
/*    display: none; */
}
.v-messages .v-messages__message:not(:empty) {
    display: block;
    max-width: 620px;

    color: #aaabae;
    background-color: #fbfbfb;

    margin-top: .25rem;
    margin-bottom: .5rem;
    padding: .5rem 1rem;

    line-height: 130% !important;
}

.array-list-label{
  font-size: 16px  !important;
  font-weight: normal  !important;
}
.group-item .v-card__title{
  padding: 0 !important;
}
.v-toolbar__content, header.array-list-toolbar {
/* height: 1.5em  !important; */
}
.v-card__text {
    padding-top: 0 !important;
    padding-bottom: .5rem !important;
}
.v-card__text  .justify-space-around {
/*  padding: 1.5rem !important; */
}
.v-expansion-panel-content__wrap {
  padding-bottom: .5rem !important;
}
.v-expansion-panel::before {
  box-shadow: none !important;
}
.v-expansion-panel-content__wrap > label {
    font-size: .85rem;
    font-weight: bold;
}

/* no data block */
.container.array-list-no-data {
    padding-left: .25rem;
    padding-bottom: 0;
}
.container.array-list-no-data + .add_button {
    margin-top: 0;
}

.footer_links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: .25rem;

    width: 100%;

    padding-top: .5rem;
    padding-bottom: .5rem;
    font-size: .75rem;
}
.footer_links + .footer_links {
    padding-top: 0px;
}
.footer_links .v-btn {
    padding: .5rem 1rem !important;
    font-size: .75rem !important;
}

</style>
