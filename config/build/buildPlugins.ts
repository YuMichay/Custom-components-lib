import { Configuration } from "webpack";

import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

import { BuildOptions } from "./types/types";

export function buildPlugins({ mode }: BuildOptions): Configuration["plugins"] {
  const cleanWebpackPlugin = new CleanWebpackPlugin();
  const changingWithoutRerenderingPlugin = new ReactRefreshWebpackPlugin();

  const plugins: Configuration["plugins"] = [cleanWebpackPlugin];

  if (mode === "development") {
    plugins.push(changingWithoutRerenderingPlugin);
  }

  return plugins;
}
