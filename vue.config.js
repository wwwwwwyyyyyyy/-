const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack:{
    devServer:{
      open: true,
      port: 666,
      host: 'localhost',
    }
  }
})
