const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    publicPath:"/dist/",
    path: path.join(__dirname, './public/dist'),
    filename:"main.js"
  },
    module: {
        rules: [
            {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development
        host: 'localhost',
        port: 3000,
        compress:true,
        // proxy the Webpack Dev Server endpoint
        // (which should be serving on http://localhost:3100/)
        // through BrowserSync
        proxy: 'http://localhost:8081/'
        }, {
            // prevent BrowserSync from reloading the page
            // and let Webpack Dev Server take care of this
            reload: false
          })
      ],
      devServer: {
        watchFiles: ['src/*', 'public/*'],
        static: {
          directory: path.join(__dirname, 'public'),
        },
        port: 8081,
      },
};