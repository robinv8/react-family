/*
 * @Description:
 * @Date: 2020-05-07 16:41:00
 * @Author:
 * @LastEditors: robin
 * @LastEditTime: 2020-06-16 16:25:04
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Jarvis = require('webpack-jarvis');
const HappyPack = require('happypack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PnpWebpackPlugin = require('pnp-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default;

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index',
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
  },
  resolve: {
    // 先尝试 ts 后缀的 TypeScript 源码文件
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve('src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@HOC': path.resolve(__dirname, 'src/HOC'),
      '@api': path.resolve(__dirname, 'src/service/api'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
    plugins: [PnpWebpackPlugin],
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        use: ['happypack/loader?id=js'],
        include: path.resolve(__dirname, 'src'), // 只对src目录中文件采用babel-loader
        exclude: path.resolve(__dirname, ' ./node_modules'), // 排除node_modules目录下的文件
      },
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('ts-loader'),
        options: PnpWebpackPlugin.tsLoaderOptions(),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'happypack/loader?id=css',
        ],
      },
      {
        test: /\.(png|jpg|gif|mp3|aac|ogg)$/,
        use: {
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 8192,
            name: 'static/images/[name]_[hash:7].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    // new Jarvis({
    //   port: 1337, // optional: set a port
    // }),
    new HappyPack({
      id: 'js',
      loaders: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
          },
        },
      ],
    }),
    new HappyPack({
      id: 'css',
      loaders: [
        {
          loader: 'css-loader',
          options: { modules: true, importLoaders: 1 },
        },
        {
          loader: 'postcss-loader',
          options: {
            // 如果没有options这个选项将会报错 No PostCSS Config found
            plugins: (loader) => [
              require('postcss-import')({ root: loader.resourcePath }),
              require('autoprefixer')(), // CSS浏览器兼容
              require('cssnano')(), // 压缩css
            ],
          },
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
    new ModuleConcatenationPlugin(),
    new PrepackWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
      cacheGroups: {
        // Extracting all CSS/less in a single file
        styles: {
          name: 'styles',
          test: /\.(c|le)ss$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    usedExports: true,
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
  },
};
