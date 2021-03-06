const path = require('path');
const KintonePlugin = require('@kintone/webpack-plugin-kintone-plugin');

module.exports = {
    entry: {
      desktop: './src/desktop.js',
      mobile: './src/mobile.js',
      config: './src/config.js'
    },
    output: {
      path: path.resolve(__dirname, 'plugin', 'js'),
      filename: '[name].js'
    },
    plugins: [
      new KintonePlugin({
        manifestJSONPath: './plugin/manifest.json',
        privateKeyPath: './private.ppk',
        pluginZipPath: './dist/plugin.zip'
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              "presets": [
                "@babel/env"
              ]
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
          ]
        }
      ]
    }
  };

  