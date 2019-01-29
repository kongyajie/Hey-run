module.exports = {
  port: 9008,
  root: "dist",
  webpack: {
    publicPath: "/",
    output: {
      "./*html": {
        entry: "./src/main",
        commons: []
      }
    },
    commonTrunk: {
      common: []
    },
    alias: {
      vue: 'vue/dist/vue.js',
      js: './src/js/',
      components: './src/components/',
    },
    global: {},
    devServer: {},
    externals: {},
    globalVars: './src/css/var.less'
  },
  copy: []
};
