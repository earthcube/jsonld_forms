module.exports = {
  devServer: {
    watchOptions: {
      ignored: ['node_modules'],
      poll: true,
    },
  },
  transpileDependencies: ['vuetify', '@jsonforms/core', '@jsonforms/vue2'],
}
