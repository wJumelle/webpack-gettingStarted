const path = require('path');

module.exports = {
<<<<<<< HEAD
    mode: 'development',
    entry: { 
        index: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
      }),
    ],
=======
    mode: 'production',
    entry: './src/index.js',
>>>>>>> parent of 604ff66 (Output Management - HtmlWebpackPlugin)
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader'
                ]
            }, 
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            //Prefer dart-sass
                            implementation: require('sass')
                        }
                    }
                ]
            }, 
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader']
            }
        ]
    }
};