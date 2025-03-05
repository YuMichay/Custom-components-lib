import path from "path";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(): DevServerConfiguration {
  return {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true,
    open: true,
    hot: true,
  };
}
