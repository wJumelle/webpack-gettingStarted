const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* Ancienne méthode, sans prendre en considération les variables d'environnement permettant de passer de l'état de development à production facilement
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Caching',
      }),
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    }, 
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single', 
      splitChunks: {
          cacheGroups: {
              vendor: {
                  test: /[\\/]node_modules[\\/]/,
                  name: 'vendors',
                  chunks: 'all'
              }
          }
      }
    }
};*/

module.exports = (env, argv) => {
    console.log('ENV: ', env);
    console.log('ARGV: ', argv);

    return {
        //mode: env.production ? 'production' : 'development',
        mode: env.WEBPACK_SERVE ? 'development' : 'production',
        entry: './src/index.js',
        plugins: [
        new HtmlWebpackPlugin({
            title: 'Caching',
        }),
        ],
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        }, 
        optimization: {
            moduleIds: 'deterministic',
            runtimeChunk: 'single', 
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        }
    };
};