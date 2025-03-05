import { Configuration } from "webpack";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

import { BuildOptions } from "./types/types";

export function buildPlugins({ mode }: BuildOptions): Configuration["plugins"] {
  const cssPlugin = new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash:8].css",
    chunkFilename: "css/[name].[contenthash:8].css",
  });

  const cleanWebpackPlugin = new CleanWebpackPlugin();
  const changingWithoutRerenderingPlugin = new ReactRefreshWebpackPlugin();

  const plugins: Configuration["plugins"] = [cleanWebpackPlugin];

  if (mode === "development") {
    plugins.push(changingWithoutRerenderingPlugin);
  }

  if (mode === "production") {
    plugins.push(cssPlugin);
  }

  return plugins;
}
