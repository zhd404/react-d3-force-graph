const webpack = require("webpack");
const path = require("path");

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

const jstsRegex = /\.(js|jsx|ts|tsx)$/;

module.exports = {
  // context: path.join(__dirname, "sandbox"),
  devtool: "source-map",
  entry: resolve("./sandbox/index.tsx"),
  output: {
    path: __dirname + "/sandbox/",
    filename: "rd3g.sandbox.bundle.js",
  },
  devServer: {
    contentBase: resolve("./sandbox"),
    inline: true,
    hot: true,
    port: 3002,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: jstsRegex,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new webpack.DefinePlugin({
      rd3gRunningVersion: JSON.stringify(process.env.npm_package_version || "unknown"),
    }),
  ],
};
