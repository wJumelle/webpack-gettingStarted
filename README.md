# Découverte du guides Webpack 5
***Tentative n°2 d'initialisation d'un starter de projet avec WebPack 5***

Documentation : [Webpack 5 Guides - Getting Started](https://webpack.js.org/guides/getting-started/)

Sommaire : 
1. [Installation de WebPack 5](#installation-de-webpack-5)
2. [Fichier de configuration WebPack](#fichier-de-configuration-webpack)
3. [Scripts npm](#scripts-npm)
4. [Asset Management](#asset-management)
    1. [CSS](#css)
    2. [SASS](#sass)

## Installation de WebPack 5

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

Lançons le build à l'aide de la commande node package executable (npx).
Cette fonction ne fonction qu'à partir de Node 8.2/npm 5.2.0.

```
npx webpack
```

Cela a pour effet de créer notre fichier ./dist/main.js.

## Fichier de configuration WebPack

Création d'un fichier ./webpack.config.js.  
Si nous éxecutons de nouveau la commande `npx webpack` cela ira chercher par défaut le fichier de configuration webpack.config.js.  
Cependant, il est possible d'informer webpack quel fichier de configuration il va devoir exécuter, pour cela nous pouvons
indiquer le nom du fichier à éxecuter en question `npx webpack --config webpack.config.js`.  

Lien vers la documentation du [fichier de configuration](https://webpack.js.org/configuration).

## Scripts npm

Dans le fichier de configuration ./package.json, nous pouvons y indiquer des commandes npm qui exécuteront des codes bien précis.  
Par exemple, nous avons ajouté la commande "**build**" qui permet d'exécuter webpack, tout comme le faisait `npx webpack`.
Nous pouvons alors exécuter la commande suivante : `npm run build` et constater que notre bundle a bien été de nouveau généré.  

## Asset Management

Documentation : [Asset Management](https://webpack.js.org/guides/asset-management/)

Même si Webpack est orienté Javascript, il permet tout de même une prise en considération des autres types de fichiers (fonts, img, css).  
Pour cela nous utiliserons des **loaders** ou des **built-in Asset Modules**.
Ces loaders suivront la même logique que les fichiers JavaScript, c'est à dire qu'un graph de dépendances sera créé et ainsi uniquement 
les ressources utilisées seront exportées dans le dossier ./dist. Ce qui permettra de garder des fichiers de productions optimisés.  

### CSS

Pour la prise en considération des fichiers CSS, nous allons devoir ajouter quelques packages (dépendances de développement).
Mais aussi, ajouter des règles de gestion dans le fichier de configuration webpack ./webpack.config.js.
Encore une fois ici la ligne se lit à l'envers, ainsi nous ajoutons d'abord "css-loader" puis "style-loader".  

```
npm i --save-dev style-loader css-loader
```

Dans le fichier de configuration nous allons "chainé" les loaders "style-loader" et "css-loader".  
Les chaînes s'exécute de manière inversé, ainsi le loader le plus bas dans la liste sera le premier exécuté.  
Le second loader traitera le contenu rendu par le premier etc.  

Nous avons donc créer un nouveau fichier css ./src/styles.css et nous l'avons importé dans notre fichier ./src/index.js.  
Lorsque nous lançons la commande `npm run build` nous obtenons ainsi une balise \<style\> dans le head de notre HTML avec les styles
définis dans le fichier css.  
Cette balise <style> est générée dynamiquement en Javascript. 

### SASS

Pour la prise en considération des fichiers SASS nous avons modifié légèrement l'arborescence du dossier ./src, en y ajoutant le dossier
./src/stylesheet/.  
Puis nous avons créé une arborescence de dossier pour l'exploitation optimisée de SASS (architecture 7-1).
Enfin nous avons ajouté les packages.

``` 
npm i --save-dev sass-loader sass
``` 

Nous avons ici besoin du package comprenant **Dart Sass** et non du package contenant **Node Sass**. Ce dernier ne supportant pas encore @use.
Bien sûr, nous avons aussi besoin du loader Sass qui permettra d'interpréter les fichiers .scss.
Si dans un projet, Dart Sass et Node Sass sont installé, il est possible d'informer Webpack de la préférence d'usage dans le fichier de configuration. 

Si on run la commande `npm run build` nous pouvons voir que le JavaScript a donc créé une deuxième balise \<style\> dans lequel il y a inséré le SASS en minifié.  
Les valeurs en SASS ont bien surchargée les valeurs des propriétés en CSS.  

### Images

Comme dit plus haut, WebPack contient déjà tout un tas de built-in Asset Modules, notament un permettant de gérer le chargement des images.
Pour l'utiliser il suffit de modifier le fichier de configuration de WebPack en créant une nouvelle règle et en lui spécifiant le type d'asset.
Nous pouvons donc créer un nouveau dossier ./src/img contenant notre image test onepiece.svg.
Maintenant, pour pouvoir utiliser cette image, il ne nous resete plus qu'à l'importer dans le fichier ./src/index.js. `import onePieceLogo from './img/onePiece_2.svg';`.

Le comportement est le suivant : 
1. en JS, lors de l'import l'image va être traité (processed) et ajouté à notre dossier ./dist. La variable onePieceLogo contient donc l'URL finale vers l'image.
2. en CSS / SASS, le loader 'css-loader' va suivre un raisonnement similaire, il va reconnaître l'image comme une image locale et donc remplacé le chemin par le chemin final
décrit dans l'output du fichier de configuration.
3. en HTML, le loader 'html-loader' fonctionne exactement pareil. La balise image ressemblerait à `<img src="./onePiece_2.svg" />`.

❗ Pour le CSS comme pour le HTML comme ce sont des loaders qui analysent l'image, il n'y a pas besoin d'importer l'image dans le fichier ./src/index.js.