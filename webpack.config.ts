/* eslint-disable @typescript-eslint/triple-slash-reference */
///<reference path="webpack.d.ts" />

import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import {
  Configuration as WebpackConfiguration,
  HotModuleReplacementPlugin,
  WebpackPluginInstance,
  optimize,
  DefinePlugin,
  ProvidePlugin,
} from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import CaseSensitivePathsPlugin from "case-sensitive-paths-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import InterpolateHtmlPlugin from "interpolate-html-plugin";
import MinifyJSONWebpackPlugin from "minify-json-webpack-plugin";
import DuplicatePackageCheckerPlugin from "duplicate-package-checker-webpack-plugin";
import ScriptExtHtmlWebpackPlugin from "script-ext-html-webpack-plugin";
import { Configuration as WebpackDevelopmentServerConfiguration } from "webpack-dev-server";
import UnusedWebpackPlugin from "unused-webpack-plugin";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevelopmentServerConfiguration;
}

const { AggressiveMergingPlugin } = optimize;

const getEntryPoint = (): string => {
  return path.join(__dirname, "src", "index.tsx");
};

const babelTarget: string = "last 2 Chrome versions, last 2 Firefox versions";
const publicFolder: string = "assets";
const publicURL: string = `/${publicFolder}`;
const srcFolder: string = "src";

const setupConfig = (
  _environment: unknown,
  { mode }: { mode: string },
): Configuration => {
  const getConfig = (): Configuration => {
    const entryPoint: string = getEntryPoint();
    return {
      mode: mode === "development" ? mode : "production",
      entry: entryPoint,
      target: "web",
      optimization: {
        minimize: mode !== "development",
        minimizer: [new TerserPlugin() as unknown as WebpackPluginInstance],
        usedExports: true,
      },
      devtool: "source-map",
      module: {
        rules: [
          {
            test: /\.(js)$/,
            enforce: "pre",
            use: ["source-map-loader"],
          },
          {
            test: /\.(ts|tsx)$/,
            include: path.join(__dirname, "src"),
            use: [
              {
                loader: "babel-loader",
                options: {
                  presets: [
                    [
                      "@babel/env",
                      {
                        targets: babelTarget,
                        bugfixes: true,
                        useBuiltIns: "usage",
                        corejs: "3",
                      },
                    ],
                    "@babel/preset-typescript",
                    [
                      "@babel/preset-react",
                      {
                        runtime: "automatic",
                      },
                    ],
                  ],
                  plugins: [
                    "@emotion",
                    mode === "development" &&
                      require.resolve("react-refresh/babel"),
                  ].filter(Boolean),
                },
              },
            ],
          },
        ],
      },
      output: {
        path: path.join(__dirname, "dist", "src"),
        publicPath: "/src/",
        filename: "index.js",
        module: true,
        chunkFilename: "[id].js",
      },
      resolve: {
        extensions: [".js", ".ts", ".tsx", ".jsx", ".json"],
        alias: {
          "@babel/runtime": path.resolve(
            __dirname,
            "node_modules",
            "@babel",
            "runtime",
          ),
          "~root": path.join(__dirname, srcFolder),
          "~components": path.join(__dirname, srcFolder, "components"),
          "~pages": path.join(__dirname, srcFolder, "pages"),
          "~stores/*": path.join(__dirname, srcFolder, "stores"),
          "~types/*": path.join(__dirname, srcFolder, "types"),
        },
      },
      experiments: {
        topLevelAwait: true,
        outputModule: true,
      },
      plugins: [
        new UnusedWebpackPlugin({
          directories: [path.join(__dirname, "src")],
          exclude: ["*.test.ts", "*.test.tsx", "setupTests.ts", "types"],
          root: __dirname,
        }),
        new ScriptExtHtmlWebpackPlugin({
          async: "index.js",
          module: "index.js",
        }),
        new DuplicatePackageCheckerPlugin(),
        new InterpolateHtmlPlugin({
          PUBLIC_URL: "/assets",
        }),
        new DefinePlugin({
          "process.env.DEVELOPMENT": JSON.stringify(mode === "development"),
          "process.env.PUBLIC_URL": JSON.stringify(publicURL),
        }),
        new ProvidePlugin({
          process: "process/browser",
        }),
        new CleanWebpackPlugin({
          dry: true,
          dangerouslyAllowCleanPatternsOutsideProject: true,
        }),
        mode !== "development" &&
          new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: "static",
            reportFilename: `analyzer-report.html`,
          }),
        new CopyPlugin({
          patterns: [
            {
              from: path.join(__dirname, "public", publicFolder),
              to: path.join(__dirname, "dist", publicFolder),
              noErrorOnMissing: true,
              globOptions: {
                ignore: ["**/index.html"],
              },
            },
          ],
          options: {
            concurrency: 100,
          },
        }),
        new HtmlWebpackPlugin({
          template: path.join(
            __dirname,
            srcFolder,
            "public",
            "static",
            "index.html",
          ),
          filename: path.join(__dirname, "dist", "index.html"),
          scriptLoading: "blocking",
          minify: mode !== "development",
          inject: true,
        }),
        new ESLintPlugin({
          extensions: ["ts", "tsx"],
        }),
        new CaseSensitivePathsPlugin(),
        mode === "development" && new HotModuleReplacementPlugin(),
        mode === "development" && new ReactRefreshWebpackPlugin(),
        new AggressiveMergingPlugin(),
        new MinifyJSONWebpackPlugin(),
      ].filter(Boolean) as unknown as WebpackPluginInstance[],
      devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        hot: true,
        writeToDisk: true,
      },
    };
  };
  const config: Configuration = getConfig();
  return config;
};

export default setupConfig;
