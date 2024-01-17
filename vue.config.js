const Dotenv = require('dotenv-webpack');
//const { VuetifyPlugin } = require('webpack-plugin-vuetify')
const path = require("path");

module.exports = {
    lintOnSave: false,
    configureWebpack: {
      plugins: [
        new Dotenv({systemvars: true}),
//          new VuetifyPlugin({ autoImport: true })
      ],
        resolve: {
            alias: {
                vue: '@vue/compat'
            },
            fallback: {
                http:  false ,
                https:  false ,
                crypto:  false ,
                stream:  false ,
                os:  false ,
                url:  false ,
                assert:  false ,
                "path": false,
                "timers": false,
                "fs": false

            },
        },
        module: {
            rules: [

                { test: /\.csv$/, loader: 'dsv-loader' },
                // raw example files
                { test: /\.yml$/, use: 'raw-loader' },
                { test: /\.txt$/, use: 'raw-loader' },
                { test: /\.xlsx$/, use: 'raw-loader' },
            ],
        }

    },
  devServer: {

      static: {
          directory: path.resolve(__dirname, "static"),
          staticOptions: {},
          // Don't be confused with `devMiddleware.publicPath`, it is `publicPath` for static directory
          // Can be:
          // publicPath: ['/static-public-path-one/', '/static-public-path-two/'],
          publicPath: "/static-public-path/",
          // Can be:
          // serveIndex: {} (options for the `serveIndex` option you can find https://github.com/expressjs/serve-index)
          serveIndex: true,
          // Can be:
          // watch: {} (options for the `watch` option you can find https://github.com/paulmillr/chokidar)
          watch: true,
      },
  },
  //transpileDependencies: ['vuetify', '@jsonforms/core', '@jsonforms/vue2'],
    transpileDependencies: ['@jsonforms/core', '@jsonforms/vue', '@jsonforms/vue-vuetify'],
  chainWebpack: (config) => {
    config.resolve.alias.set('vue', '@vue/compat')

    config.module
        .rule('vue')
        .use('vue-loader')
        .tap((options) => {
          return {
            ...options,
            compilerOptions: {
              compatConfig: {
                MODE: 2
              }
            }
          }
        })
  }
}
