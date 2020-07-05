const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const baseManifest = require("./manifest.json");
const WebpackExtensionManifestPlugin = require("webpack-extension-manifest-plugin");
const dotenv = require("dotenv");
const webpack = require("webpack");

const config = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    app: "./src/index.tsx",
    background: "./src/chromeScripts/background.ts",
    content: "./src/chromeScripts/content.ts",
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "chrome-extension-title", // change this to your app title
      meta: {
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1",
      },
      manifest: "manifest.json",
      filename: "index.html",
      template: "./public/index.html",
      hash: true,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "icons",
          to: "icons",
        },
      ],
    }),
    new WebpackExtensionManifestPlugin({
      config: {
        base: baseManifest,
      },
    }),
    new webpack.DefinePlugin(() =>
      Object.keys(dotenv.config().parsed).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(dotenv.config().parsed[next]);
        return prev;
      }, {}),
    ),
  ],
};
module.exports = config;
