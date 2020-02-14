const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname),
    },
    devServer: {
        contentBase: 'index.html',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
              },
              {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
              },
              {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[path][name].[ext]',
                      outputPath: '/docs/static/'
                    }
                  },
                ],
              }
            ]
          },
          plugins: [
            new HtmlWebPackPlugin({
              template: "./src/index.html",
              filename: "./index.html"
            })
          ]

};