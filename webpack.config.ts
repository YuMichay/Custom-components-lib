import path from "path";
import webpack from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPaths } from "./config/build/types/types";

interface Env {
  mode?: BuildMode;
}

export default (env: Env) => {
  const paths: BuildPaths = {
    src: path.resolve(__dirname, "src"),
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: path.resolve(__dirname, "custom-components-lib-yumi"),
  };

  const config: webpack.Configuration = buildWebpack({ mode: env.mode ?? "development", paths });
  return config;
};
