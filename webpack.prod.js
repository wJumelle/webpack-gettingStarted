const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    //moduleIds permet d'avoir soit l'id du module avec 'deterministic' soit le nom du fichier concerné avec 'named'
    //moduleIds: 'deterministic',
    moduleIds: 'named',
    //concatenateModules permet d'éviter la concaténation du code lors de l'export (module ModuleConcatenationPlugin)
    concatenateModules: false,
    //usedExports permet de dire à webpack de déterminer les exports utilisés pour chaque modules, permet de clean l'export pour la prod
    usedExports: true,
    //runtimeChunk permet de dire à webpack de créer un fichier runtime.js partagé par l'ensemble des fragments de code (chunks) générés
    runtimeChunk: 'single'
  }
});