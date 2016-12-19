var webpack = require('webpack');
module.exports = {
    entry: [
      "bootstrap-loader",
      "./app"
    ],
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
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                loader: 'url?limit=10000'
            },
            {
                test: /bootstrap-sass\/assets\/javascripts\//,
                loader: 'imports?jQuery=jquery'
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
