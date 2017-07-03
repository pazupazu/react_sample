module.exports = {
  context: __dirname,
  entry: {
    jsx: "./src/index.jsx",
    // css: "./src/main.css",
    // html: "./src/index.html",
  },

  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },

  devServer: {
    contentBase: 'dist',
  },

  module: {
    loaders: [
      // {
      //   test: /\.jsx$/,
      //   exclude: /node_modules/,
      //   loader: 'babel-loader',
      //   query: {
      //     presets: ['es2015']
      //   }

      // { test: /\.html$/, loader: "file?name=[name].[ext]" },
      // { test: /\.css$/, loader: "file?name=[name].[ext]" },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['react','es2015']
        }
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  // eslint: {
  //   configFile: './.eslintrc'
  // },
};