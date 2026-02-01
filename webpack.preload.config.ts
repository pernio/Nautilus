import type { Configuration } from "webpack";
import { rules } from "./webpack.rules";

export const preloadConfig: Configuration = {
  target: "electron-preload",
  devtool: false,

  // 🔑 THIS IS THE KEY
  externalsPresets: {
    node: true,
  },

  module: {
    rules,
  },

  resolve: {
    extensions: [".js", ".ts"],
  },
};
