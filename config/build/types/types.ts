export interface BuildPaths {
  src: string;
  entry: string;
  output: string;
}

export type BuildMode = "production" | "development";

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
}
