import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildPlugins } from "./buildPugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/types";

export function buildWebpack({ mode, paths }: BuildOptions): webpack.Configuration {
  const isDev = mode === "development";

  return {
    mode: mode ?? "development",
    entry: paths.entry,
    devtool: isDev ? "eval-cheap-module-source-map" : "source-map",
    devServer: isDev ? buildDevServer() : undefined,
    plugins: buildPlugins({ mode, paths }),
    module: {
      rules: buildLoaders(mode),
    },
    resolve: buildResolvers(),
    externals: {
      react: "react",
      "react-dom": "react-dom",
    },
    output: {
      path: paths.output,
      filename: "[name].[contenthash].js",
      library: "Custom-components-lib",
      libraryTarget: "umd",
      libraryExport: "default",
      umdNamedDefine: true,
      clean: true,
    },
  };
}
