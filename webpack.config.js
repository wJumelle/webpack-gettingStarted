const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    return {
        //mode: env.production ? 'production' : 'development',
        //mode: env.WEBPACK_SERVE ? 'development' : 'production',
        mode: 'production',
        //entry indique à webpack le(s) point(s) de départ du processus d'empaquettage (bundling process)
        entry: './src/index.js',
        //devtool: 'inline-source-map' n'est à utiliser que dans des cas très particulier, génère une SourceMap en bas du fichier entry
        //devtool: 'inline-source-map',
        devServer: {
            //contentBase permet d'indiquer au serveur webpack sur quel dossier il doit baser son affichage
            contentBase: './dist',
            hotOnly: true,
        },
        module: {
            //module.rules permet d'indiquer à webpack les loaders à appeler pour un certain type de fichier
            rules: [
                {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            //HtmlWebpackPlugin permet lors de l'export de build un fichier HTML incluant l'ensemble des modules nécessaire
            new HtmlWebpackPlugin({
                title: 'Tree Shaking',
            }),
        ],
        output: {
            //filename indique à webpack le pattern pour écrire le nom des fichiers exportés
            filename: '[name].[contenthash].js',
            //path renseigne le chemin vers les fichiers lors du build
            path: path.resolve(__dirname, 'dist'),
            //clean supprime les fichiers avant chaque nouveau build
            clean: true
        }, 
        optimization: {
            //moduleIds permet d'avoir soit l'id du module avec 'deterministic' soit le nom du fichier concerné avec 'named'
            //moduleIds: 'deterministic',
            moduleIds: 'named',
            //concatenateModules permet d'éviter la concaténation du code lors de l'export (module ModuleConcatenationPlugin)
            concatenateModules: false,
            //usedExports permet de dire à webpack de déterminer les exports utilisés pour chaque modules, permet de clean l'export pour la prod
            usedExports: true,
            //runtimeChunk permet de dire à webpack de créer un fichier runtime.js partagé par l'ensemble des fragments de code (chunks) générés
            runtimeChunk: 'single',
            //SplitChunksPlugin est utile lorsque l'on utilise des éléments inclus dans node (ex: lodash), permet d'exporter dans un fichier séparé
            // splitChunks: {
            //     cacheGroups: {
            //         vendor: {
            //             test: /[\\/]node_modules[\\/]/,
            //             name: 'vendors',
            //             chunks: 'all'
            //         }
            //     }
            // }
        }
    };
};