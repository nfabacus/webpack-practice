var webpack = require('webpack');
module.exports = {
    entry: "./app",
    output: {
        path: './build',
        filename: "bundle.js"
    },
    resolve: {
      modulesDirectories: ['node_modules', 'app'],
      extension: ['','.js']
    },
    module: {
        loaders: [
            { test: /\/js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                presets: ["es2015"]
              }
            },
            { test: /\.html$/,
              loader: "raw"
            },
            { test: /\.scss$/,
              loaders: [
                'style',
                'css',
                'autoprefixer?browsers=last 3 versions',
                'sass?outputStyle=expanded'
              ]
            }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    devServer : {
      port: 3000,
      contentBase: './build',
      inline: true
    }
};
