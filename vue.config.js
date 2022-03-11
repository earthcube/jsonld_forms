const Dotenv = require('dotenv-webpack');

module.exports = {
    configureWebpack: {
      plugins: [
        new Dotenv({systemvars: true})
      ]
    },
  devServer: {
    watchOptions: {
      ignored: ['node_modules'],
      poll: true,
    },
  },
  transpileDependencies: ['vuetify', '@jsonforms/core', '@jsonforms/vue2'],
}
