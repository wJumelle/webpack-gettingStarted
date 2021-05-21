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
    3. [Images](#images)
    4. [Fonts](#fonts)
    5. [Loading Datas](#loading-datas)
5. [Output Management](#output-management)
    1. [Wrapping up](#wrapping-up)
    2. [Preparation](#preparation)
    3. [HtmlWebpackPlugin](#htmlwebpackplugin)
6. [Development](#development)
    1. [Sources maps](#source-maps)
    2. [Choisir un outil de développement](#choisir-un-outil-de-developpement)
7. [Code Splitting](#code-splitting)

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

> ❗ Pour le CSS comme pour le HTML comme ce sont des loaders qui analysent l'image, il n'y a pas besoin d'importer l'image dans le fichier ./src/index.js.

### Fonts

Les built-in Assets modules peuvent prendre en considération énormément de type de fichier différents, les fonts de caractères en font aussi parti.  
Pour cela, il suffit juste tout simplement d'adapter la regex du test aux extensions des fonts, comme ceci `test: /\.(woff|woff2|eot|ttf|otf)$/i,`.

Il ne reste plus qu'à insérer la font dans le fichier fonts.scss et le tour est joué !  
L'URL de la typo sera résolue exactement de la même façon que l'URL des images par l'Asset Management.  

> ❗ Pour les fichiers Sass, veillez à faire attention aux URLs relative, le point de départ de l'URL relative étant le niveau où se situe le fichier .scss qui
charge tous les autres. Cela vaut aussi pour les images.  

### Loading datas

Les fichiers JSON sont supportés nativement par Node, il n'y aura donc aucun package ni traitement particulier à effectuer pour les fichiers JSON.  
Cependant, pour les fichiers comment .XML ou .CSV/.TSV, il faudra installer des packages et donc créer de nouvelles règles de configuration.  
Les fichiers seront donc parcourru par les loaders qui renverront du JSON. 

```
npm install --save-dev csv-loader xml-loader
```

> ❗ Cependant il faut faire attention à la méthode d'importation du JSON, Node ne supporte nativement que la façon suivante `import data from './data.json'`. 
> Il est impossible d'effectuer un import ciblé du style `import { foo } from './data.json'`

## Output Management

Cette partie du guide étend la branche main.

Documentation : [Output Management](https://webpack.js.org/guides/output-management/)

Afin de traiter ce nouveau chapitre, nous allons faire un peu de ménage dans les fichiers ainsi que les dépendances.  

### Wrapping up

Suppressions de fichiers (csv, json, xml, svg, woff, ttf, css, sass) + suppressions des règles associées + màj du JS.

```
npm uninstall css-loader csv-loader sass sass-loader style-loader xml-loader
```

### Preparation

Une fois que les fichiers sont supprimés, nous créons un fichier ./src/print.js dans lequel nous définissons une fonction
qui sera utilisé à l'intérieur du fichier ./src/index.js.  
Nous pourrons nous servir de cette fonction en réalisant un import dans le fichier ./src/index.js.  

Ici, le guide invite à ajouter le script print.js à l'intérieur du HTML + ajouter un nouveau entryPoint dans le fichier de configuration.  
L'app fonctionnant sans, j'ai donc commenté ces ajouts.  

> ❗ Cependant, dans le cas de figure où nous pouvons avoir plusieurs points d'entrés, il est intéressant de souligner qu'il est possible de
> gérer le nom des fichiers qui seront exportés dnas l'option "**output**" à l'aide des **substitutions** \[strings\]. 

C'est maintenant que l'on commence à voir la problématique, si l'on modifie le nom de plusieurs points d'entrés, sachant qu'ils sont appelés en dur
dans le fichier HTML, alors cela pourrait poser des problèmes d'oublis ce que l'on ne souhaite pas.  
Pour résoudre ce problème nous allons chercher à exporter automatiquement le fichier HTML.

### HtmlWebpackPlugin

Documentation : [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)

Comme à chaque fois, installation de la dépendance + modification du fichier de configuration.

```
npm install --save-dev html-webpack-plugin
```

Lors de l'exécution de la commande `npm run build` un fichier ./dist/index.html sera généré. Si un fichier portant ce nom est déjà
présent dans le dossier alors celui-ci sera automatiquement écrasé !

> 💡 Lors de la préparation de ce chapitre nous avons vidé à la main le dossier ./dist. Ce qui peut vite être problématique si l'on ne fait 
> pas le ménage régulièrement dedans afin de ne garder uniquement les fichiers utiles.. ! Webpack permet de nettoyer ce dossier avant chaque build
> grâce à un paramètre de l'option "**output**" `output.clean: true`.

## Development

Cette partie du guide étend la branche outputManagement.

Documentation : [Development](https://webpack.js.org/guides/development/)

> 💡 Ce qui va suivre est uniquement pour la phase de développement, en aucun cas il faudra se servir des outils qui vont suivre
> en phase de production.

### Source maps

Documentation : [Source maps](https://webpack.js.org/configuration/devtool/)

L'un des défault des bundlers c'est l'empaquetage des fichiers. Nous pouvons partir de plusieurs fichiers (a/b/c.js) différents pour au final
n'en avoir plus qu'un seul, ici admettons bundle.js.  
Imaginons que le fichier b.js comporte une erreur, alors le tracking d'erreur pointera vers le fichier bundle.js et non vers b.js. 

Pour rendre le débuggage plus simple, JavaScript permet l'usage des source maps qui permettra de relier le code compilé aux fichiers d'origines.  
Ainsi, si une erreur ressort sur le fichier bundle.js et dont l'origine est b.js alors le source maps indiquera le fichier b.js. 

Il y a tout un tas d'option possible, qui sont accessibles dans la documentation ci-dessus. 
Ici nous utiliserons l'option `devtool: inline-source-map` que nous allons indiquer dans le fichier de configuration webpack.
Il permettra d'indiquer dans la console, le fichier ainsi que la ligne d'erreur.

### Choisir un outil de développement

Il existe différentes options afin de simplifier la vie lors de la phase de développement. 
En effet, cela peu sembler ennuyant d'avoir à build l'intégralité de l'app à chaque modification. 

1. [Le mode watch de webpack](#le-mode-watch-de-webpack)
2. [Le package webpack-dev-server](#le-package-webpack-dev-server)
3. [Le package webpack-dev-middleware](#le-package-webpack-dev-middleware)

Dans la plus part des cas nous utiliserons l'option webpack-dev-server.

#### Le mode watch de webpack

Vous pouvez demander à Webpack d'observer les fichiers concernés par le graphique des dépendances (dependency graph). Ainsi, lorsque l'un de ses
fichiers sera mis à jours Webpack ira chercher cette mise à jours mais ne rafraîchira pas l'ensemble des fichiers.  

Pour cela, il faut mettre en place un nouveau script dans le fichier ./package.json `"watch": "webpack --watch"`.

Lorsque Webpack est en train d'observer votre dependency graph les commandes ne sont plus disponible sur le terminal en cours, car une action  
est toujours en cours. Pour quitter le processus il suffit de faire un Ctrl+C. Et de choisir l'option "O".

Si l'on exécute la commande `npm run watch` et que l'on tente d'utiliser le bouton. L'erreur précédemment ajouter au fichier ./src/print.js
se produit. Si l'on résout l'erreur, sauvegarde le fichier et que nous rafraîchissons le navigateur, nous pouvons observer que l'erreur 
a disparu. 

Cependant, cela peut paraître un peu embêtant de toujours devoir rafraîchir son navigateur...

#### Le package webpack-dev-server

Le package webpack-dev-server fournit un serveur web simple dont l'une des fonctionnalité principale est le **live reloading**. 

```
npm install --save-dev webpack-dev-server
```

Pour le bon fonctionnement de ce nouveau package nous devons modifier le fichier ./webpack.config.js afin de lui ajouter des informations autour du serveur afin que webpack aille bien chercher les fichiers contenus dans le dossier ./dist lors de l'exécution du package.

```
devServer: {
    contentBase: './dist'
}
```

Ajout d'un nouveau script dans ./package.json : `"start": "webpack serve --open"` avec l'option "**--open**" qui indique la volonté d'ouvrir un nouvel onglet lors de l'exécution du script. 

> Le package webpack-dev-server ne produit aucun fichier, il ne se sert que des fichiers compilés qu'il garde en mémoire et affiche pour émuler l'app. 

> webpack-dev-serv se sert de la variable "**output.path**" afin de monter l'url des fichiers. Il suit la règle suivante : `http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename]`.

Ici nous ne voyons qu'une infime parti des options qu'offrent le package. 
Pour plus d'informations, [documentation webpack-dev-server](https://webpack.js.org/configuration/dev-server)

#### Le package webpack-dev-middleware

```
npm install --save-dev express webpack-dev-middleware
```

Le package webpack-dev-middleware est un wrapper qui émettra les fichiers compilés à un serveur.  
Cette fonctionnalité est déjà utilisée de manière interne dans webpack-dev-server, mais est rendu accessible à des packages externes grâce à webpack-dev-middleware.  

Pour l'exemple, nous aurons donc besoin du package webpack-dev-middleware et d'un serveur express.  

Pour le bon fonctionnement des packages, nous allons devoir renseigner plusieurs fichiers.  
1. le fichier ./webpack.config.js en y ajoutant la propriété `output.publicPath: '\'`
2. le fichier ./server.js avec toutes les options permettant au serveur de démarrer 
3. le fichier ./package.json afin de créer le nouveau script `"server": "node server.js"`

Ici à l'exécution, comme nous passons par un module de serveur externe à webpack nous devrons ouvrir de nous même un onglet du navigateur et attaquer le port :3000.

Documentation : [Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/)

## Code splitting

Documentation : [code splitting](https://webpack.js.org/guides/code-splitting/)

Cette partie du cours reprends la branche "Output Management".

Le **code splitting** est l'une des fonctionnalité les plus intéressantes de WebPack. Elle permet 
de diviser votre code en un nombre infini de briques / paquets différents qui peuvent être chargé à 
la demande ou en parallèle des autres paquets.  

Ce qui peut donc être utilisé pour optimiser un projet en séparant les briques autonomes (création 
de bundles plus petits, contrôle du chargement des ressources => optimisation du temps de chargement).  

Il y a trois approches différentes autour du "code splitting" : 
1. [**les points d'entrées (entry points)**](#entry-point) qui sépare le code manuellement en déclarant des entrées (entry)
2. [**Prevent duplication**](#prevent-duplication) qui utilise les [Entry dependencies](https://webpack.js.org/configuration/entry-context/#dependencies) ou le [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/) qui permettent de dédoublonner et diviser les gros morceaux de codes (chunks).
3. **Dynamic imports** qui divise le code à l'aide des imports à l'aides d'inline functions appelées dans les modules.

#### Entry Points

C'est la façon la plus facile et la plus intuitive de pratique le code splitting. 
Cependant, c'est aussi la façon la moins autonomes et demandant donc de la configuration manuelle.  
Elle possède aussi de nombreux pièges que nous allons voir. 

Créons le fichier ./src/another-module.js dans lequel nous allons utiliser lodash pour logger un texte dans la console, puis définissons notre nouveau point d'entrée dans le fichier ./webpack.config.js.

Buildons le bundle à l'aide de la commande `npm run build`.

> ❗ Si nous observons le code obtenus pour les 2 fichiers ./dist/index.bundle.js et ./dist/another-module.js nous pouvons constater le chargement de lodash dans les deux modules. 
> Ceci représente l'un des pièges de l'utilisation des entry points.

#### Prevent duplication
