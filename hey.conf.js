module.exports = {
  port: 9030,
  root: "dist",
  webpack: {
    publicPath: "/",
    output: {
      "./*html": {
        entry: "./src/main",
        commons: []
      }
    },
    alias: {
      vue: 'vue/dist/vue.js',
      js: './src/js/',
      components: './src/components/',
    },
    global: {
      $: "jquery",
    },
    devServer: {
      historyApiFallback: true
    },
    externals: {},
    globalVars: './src/css/var.less'
  },
  copy: ['static/images/*']
};
