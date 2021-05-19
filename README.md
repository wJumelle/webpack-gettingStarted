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

Installation de la dépendance **lodash** nécessaire pour le javascript présent dans index.js (pas nécessaire pour les autres codes).  
Le caractère "**_**" nécessite la présence de la libraire lodash pour fonctionner et ne pas créer d'erreur.
Cette librairie sera servi avec les fichiers qui iront en production, il faut donc l'inclure dans les dépendances de production.
Précédemment nous avons utilisé "**--save-dev**" pour les packages utiles pour la phase de développement, ici nous utiliserons donc "**--save**"

```
npm i --save lodash
```

Nous devons donc maintenant importer **lodash** à l'intérieur de notre scritp ./src/index.js. Pour cela, nous ajoutons la ligne `import _ from 'lodash';`
au début du fichier. 
Nous pouvons aussi supprimer le chargement de lodash qui était effectué dans le fichier ./dist/index.html, qui maintenant n'est plus utile car appelé 
directement en JS.  

En indiquant à WebPack les dépendances utiles pour le bon fonctionnement de l'app, il sera alors en mesure, lors de la 
création du bundle de production, de créer un graph de dépendances et d'insérer de manière optimisée l'ensemble des scripts
nécessaire dans le bon ordre. 