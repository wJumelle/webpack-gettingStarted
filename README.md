# Découverte du guides Webpack 5
## Tentative n°2 d'initialisation d'un starter de projet avec WebPack 5

Documentation : [Webpack 5 Guides - Getting Started](https://webpack.js.org/guides/getting-started/)

### Installation de WebPack 5

```
npm init -y
npm install webpack webpack-cli --save-dev
```

Suite à l'installation de WebPack nous avons initialisé les fichiers suivants : ./index.html et ./src/index.js.  
On a ensuite configuré le fichier ./package.json de façon à ce qu'il soit privé (afin d'éviter une publication) et avons
retiré l'entrée "main".

Suite à quoi nous avons créé un nouveau dossier ./dist afin de séparer le code source (se trouvant dans ./src) et le code
de "distribution" qui sera minimisé et optimisé par les différents outils que l'on va utiliser.  

```
mkdir src; mkdir dist
```
