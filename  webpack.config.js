module.exports = {
  configureWebpack: {
    devServer: {
      public: '0.0.0.0:8080',
      host: '0.0.0.0',
      disableHostCheck: true,
    }
  }
};