const path = require('path');

module.exports = {
  entry: './src/scripts/main.js',  // The entry point of your JavaScript file
  output: {
    filename: 'bundle.js', // Output bundle
    path: path.resolve(__dirname, 'docs/scripts'), // Output directory (aligned with Eleventy output)
  },
  mode: 'development', // or 'development' for unminified code
  devtool: 'source-map', // Add this line to enable source maps
  module: {
    rules: [
      {
        test: /\.js$/, // Look for .js files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Use the preset-env to transpile modern JS
          },
        },
      },
    ],
  },
};