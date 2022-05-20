const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  target: "web",
  devServer: {
   client: {
     progress: true,
     reconnect: 10
   },
   hot: 'only'
  },
});