const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    return {
        //mode: env.production ? 'production' : 'development',
        //mode: env.WEBPACK_SERVE ? 'development' : 'production',
        mode: 'production',
        entry: './src/index.js',
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './dist',
            hotOnly: true,
        },
        module: {
            rules: [
                {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Tree Shaking',
            }),
        ],
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        }, 
        optimization: {
            //moduleIds: 'deterministic',
            moduleIds: 'named',
            usedExports: true,
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