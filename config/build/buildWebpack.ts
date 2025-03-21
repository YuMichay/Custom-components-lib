import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildPlugins } from "./buildPlugins";
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
      react: {
        commonjs: "react",
        commonjs2: "react",
        amd: "react",
        root: "React",
      },
      "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "react-dom",
        root: "ReactDOM",
      },
    },
    output: {
      path: paths.output,
      filename: "index.js",
      library: "custom-components-lib-yumi",
      libraryTarget: "umd",
      umdNamedDefine: true,
      clean: true,
    },
  };
}
