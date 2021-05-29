# Découverte du guides webpack 5
***Tentative n°2 d'initialisation d'un starter de projet avec webpack 5***

Documentation : [webpack 5 Guides - Getting Started](https://webpack.js.org/guides/getting-started/)

Sommaire : 
1. [Installation de webpack 5](#installation-de-webpack-5)
2. [Fichier de configuration webpack](#fichier-de-configuration-webpack)
3. [Scripts npm](#scripts-npm)
4. [Asset Management](#asset-management)
5. [Output Management](#output-management)
6. [Development](#development)
7. [Code Splitting](#code-splitting)
8. [Caching](#caching)

## Installation de webpack 5

```
npm init -y
npm install webpack webpack-cli --save-dev
```

Suite à l'installation de webpack nous avons initialisé les fichiers suivants : ./index.html et ./src/index.js.  
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

En indiquant à webpack les dépendances utiles pour le bon fonctionnement de l'app, il sera alors en mesure, lors de la 
création du bundle de production, de créer un graph de dépendances et d'insérer de manière optimisée l'ensemble des scripts
nécessaire dans le bon ordre.  

Lançons le build à l'aide de la commande node package executable (npx).
Cette fonction ne fonction qu'à partir de Node 8.2/npm 5.2.0.

```
npx webpack
```

Cela a pour effet de créer notre fichier ./dist/main.js.

## Fichier de configuration webpack

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
1. [CSS](#css)
2. [SASS](#sass)
3. [Images](#images)
4. [Fonts](#fonts)
5. [Loading Datas](#loading-datas)

Documentation : [Asset Management](https://webpack.js.org/guides/asset-management/)

Même si webpack est orienté Javascript, il permet tout de même une prise en considération des autres types de fichiers (fonts, img, css).  
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
Si dans un projet, Dart Sass et Node Sass sont installé, il est possible d'informer webpack de la préférence d'usage dans le fichier de configuration. 

Si on run la commande `npm run build` nous pouvons voir que le JavaScript a donc créé une deuxième balise \<style\> dans lequel il y a inséré le SASS en minifié.  
Les valeurs en SASS ont bien surchargée les valeurs des propriétés en CSS.  

### Images

Comme dit plus haut, webpack contient déjà tout un tas de built-in Asset Modules, notament un permettant de gérer le chargement des images.
Pour l'utiliser il suffit de modifier le fichier de configuration de webpack en créant une nouvelle règle et en lui spécifiant le type d'asset.
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
1. [Wrapping up](#wrapping-up)
2. [Preparation](#preparation)
3. [HtmlwebpackPlugin](#htmlwebpackplugin)

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

### HtmlwebpackPlugin

Documentation : [HtmlwebpackPlugin](https://github.com/jantimon/html-webpack-plugin)

Comme à chaque fois, installation de la dépendance + modification du fichier de configuration.

```
npm install --save-dev html-webpack-plugin
```

Lors de l'exécution de la commande `npm run build` un fichier ./dist/index.html sera généré. Si un fichier portant ce nom est déjà
présent dans le dossier alors celui-ci sera automatiquement écrasé !

> 💡 Lors de la préparation de ce chapitre nous avons vidé à la main le dossier ./dist. Ce qui peut vite être problématique si l'on ne fait 
> pas le ménage régulièrement dedans afin de ne garder uniquement les fichiers utiles.. ! webpack permet de nettoyer ce dossier avant chaque build
> grâce à un paramètre de l'option "**output**" `output.clean: true`.

## Development
1. [Sources maps](#source-maps)
2. [Choisir un outil de développement](#choisir-un-outil-de-developpement)

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

Vous pouvez demander à webpack d'observer les fichiers concernés par le graphique des dépendances (dependency graph). Ainsi, lorsque l'un de ses
fichiers sera mis à jours webpack ira chercher cette mise à jours mais ne rafraîchira pas l'ensemble des fichiers.  

Pour cela, il faut mettre en place un nouveau script dans le fichier ./package.json `"watch": "webpack --watch"`.

Lorsque webpack est en train d'observer votre dependency graph les commandes ne sont plus disponible sur le terminal en cours, car une action  
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

Le **code splitting** est l'une des fonctionnalité les plus intéressantes de webpack. Elle permet 
de diviser votre code en un nombre infini de briques / paquets différents qui peuvent être chargé à 
la demande ou en parallèle des autres paquets.  

Ce qui peut donc être utilisé pour optimiser un projet en séparant les briques autonomes (création 
de bundles plus petits, contrôle du chargement des ressources => optimisation du temps de chargement).  

Il y a trois approches différentes autour du "code splitting" : 
1. [**les points d'entrées (entry points)**](#entry-point) qui sépare le code manuellement en déclarant des entrées (entry)
2. [**Prevent duplication**](#prevent-duplication) qui utilise les [Entry dependencies](https://webpack.js.org/configuration/entry-context/#dependencies) ou le [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/) qui permettent de dédoublonner et diviser les gros morceaux de codes (chunks).
3. [**Dynamic imports**](#dynamic-imports) qui divise le code à l'aide des imports à l'aides d'inline functions appelées dans les modules.

#### Entry Points

C'est la façon la plus facile et la plus intuitive de pratique le code splitting. 
Cependant, c'est aussi la façon la moins autonomes et demandant donc de la configuration manuelle.  
Elle possède aussi de nombreux pièges que nous allons voir. 

Créons le fichier ./src/another-module.js dans lequel nous allons utiliser lodash pour logger un texte dans la console, puis définissons notre nouveau point d'entrée dans le fichier ./webpack.config.js.

Buildons le bundle à l'aide de la commande `npm run build`.

> ❗ Si nous observons le code obtenus pour les 2 fichiers ./dist/index.bundle.js et ./dist/another-module.js nous pouvons constater le chargement de lodash dans les deux modules. 
> Ceci représente l'un des pièges de l'utilisation des entry points.

#### Prevent duplication

##### Entry dependencies

Pour éviter cela il existe une option dans webpack qui s'appelle "**dependOn**" qui permet de partager certains module entre plusieurs points d'entrées.  

Documentation : [dependOn](https://webpack.js.org/configuration/entry-context/#dependencies)

```
entry {
    index: {
        import: './src/index.js',
        dependOn: 'shared'
    },
    another: {
        import: './src/another-module.js',
        dependOn: 'shared'
    },
    shared: 'lodash'
}
```

Lorsque plusieurs point d'entrées sont utilisées dans une même page, il est nécessaire d'ajouter une deuxième option au fichier ./webpack.config.js afin d'éviter les [erreurs](https://bundlers.tooling.report/code-splitting/multi-entry/) : 

```
optimization: {
    runtimeChunk: 'single'
}
```

Cette modification a pour effet de créer deux nouveaux fichiers lors du build ./dist/runtime.bundle.js et ./dist/shared.bundle.js. 

> 💡 Même si il est possible d'utiliser plusieurs points d'entrées pour une même page, il est cependant déconseillé de le faire. 
> Il est préférable de réaliser plusieur imports dans un même point d'entrée. 

```
entry: {
    page: ['./src/index.js', './src/another-module.js']
}
```

##### SplitChunksPlugin

Documentation : [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)

Ce plugin nous permet d'identifier les dépendances communes et de les exporter dans des scripts différents, soit à l'intérieur d'un point d'entrée déjà existant soit dans un morceau de code à part entière. 

Faisons marche arrière et revenons avec deux points d'entrées différents.  
Puis ajoutons l'option `optimization: { splitChunksPlugin: { chunks: 'all' } }` au fichier ./webpack.config.js.  

Lors du build nous allons avoir la génération de 3 fichiers JS différents : ./dist/index.bundle.js, ./dist/another.bundle.js et le fichier JS contenant lodash.

Il existe d'autres loaders permettant de gérer la séparation du code, [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin) pour le CSS par exemple.

#### Dynamic imports

Deux méthode différentes de gérer l'import dynamique / code splitting via webpack.  
La manière hérité des versions antérieurs de webpack (déconseillée) : **require.ensure** et **import()**, qui est la syntaxe conforme à ECMAScript.

> ❗ Warning 
L'appel de la fonction import() utilise les Promises. Donc, si on utilise la fonction pour des projets ayant comme cible des anciens navigateurs. 
Il faut veiller à mettre en place les polyfills nécessaire ([**es6-promise](https://github.com/stefanpenner/es6-promise) ou [**promise-polyfill](https://github.com/taylorhakes/promise-polyfill))

Pour commencer, nous nettoyons les fichiers ./webpack.config.js et nous supprimons le fichier ./src/another-module.js.  
Enfin, nous éditons le fichier ./src/index.js afin de lui faire importer de manière dynamique (à l'aide des Promises) le module lodash.

> 💡 Tips  
Il est possible de fournir une [**expression dynamique**](https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import) à la fonction *import()* lorsque vous 
aurez besoin du chargement d'un module en fonction d'une variable qui sera calculé plus tard. (ex: chargement des fichiers de traductions de langues en fonction de la 
langue du navigateur de l'utilisateur).

### Prefetching / Preloading modules

Depuis webpack 4.6.0 nous pour profiter du support de **prefetching** (pré-récupération) et du **preloading** (pré-chargement).  
En utilisant ces instructions en ligne (*inline directives*) lorsque l'on déclare notre import() permet à webpack de renseigner au 
navigateur des indifications autour des ressources (*Resource Hint*) :
1. **prefetch** : la ressource est probablement nécessaire pour un besoin futur (*for some navigation in the future*)
2. **preload** : la ressource est nécessaire au sein de la navigation actuelle (*during the current navigation*)  

> 💡 Tips 
webpack ajoutera les indications de pré-récupération après que le chargement global du parent sera terminé ! Le prefetching n'impact 
donc pas le chargement du contenu de la page actuelle. Il attend que le navigateur soit inactif (*idle*).  

L'indication de pré-chargement possède tout un tas (*has a bunch*) de différences avec la pré-récupération : 
- un bout de code à pré-charger (*a preloaded chunk*) se chargera en parallèle du code parent =/= un bout de code à pré-récupérer 
se chargera après que le code parent soit entièrement chargé
- un bout de code à pré-charger a une importance moyenne et donc commence à se charger immédiatement =/= un bout de code à pré-récupérer 
se chargera une fois que le navigateur sera inactif
- un bout de code à pré-charger peut être instantanément utilisé par le code parent =/= un bout de code à pré-récupérer pourra être utilisé 
n'importe quand à l'avenir !
- le [support des navigateurs](https://www.machmetrics.com/speed-blog/guide-to-browser-hints-preload-preconnect-prefetch/) est différents entre les deux (rel = prefetch / rel = preload)

Exemple avec prefetch : `import(/* webpackPrefetch: true */ './path/to/LoginModal.js');` nous donnera `<link rel="prefetch" href="login-modal-chunk.js">`.  

Exemple avec preload : `import(/* webpackPreload: true */ 'ChartingLibrary');` nous donnera `<link rel="preload" href="ChartingLibrary.js">`. 
Imaginons, une page simple et rapide à charger, donc l'un des composant (*component: chartComponent*) nécessiterait le chargement d'une grosse librairie (*library: chartingLibrary*). Si la page a fini de s'afficher et de se charger avant que le chargement de la librairie soit terminé, alors cette page affichera 
un loader (*LoadingIndicator*) jusqu'à ce que le chargement de la librairie soit terminé.

> ❗ Warning 
Mal utiliser la fonctionnalité **preload** de webpack peut entraîner à l'inverse de sérieux ralentissement du chargement des pages. 
Il faut donc l'utiliser avec précautions.  

### Bundle Analysis

Une fois que vous avez commencé à séparer efficacement votre code, il peut s'avérer utile d'analyser le rendu et de vérifier comment les modules 
se sont comporter pendant l'export (*where modules have ended up*).  
Pour cela il existe de nombreux outils, dont l'[**outil officiel d'analyse de webpack**](https://github.com/webpack/analyse).  
Mais il existe aussi de nombreux outils communautaires à essayer : 
- [**webpack-chart**](https://alexkuz.github.io/webpack-chart/) : avec des diagrammes pour visualiser les stats de webpack
- [**webpack-visualizer**](https://chrisbateman.github.io/webpack-visualizer/) : visualise et analyse l'ensemble du bundle afin d'observer quel 
module nécessiterait éventuellement d'être optimisé / fragmenté car utilisant trop volumineux. 
- [**webpack-bundle-analyzer**](https://github.com/webpack-contrib/webpack-bundle-analyzer) : un plugin et un utilitaire de CLI qui représente le contenu 
du bundle de manière pratique (arborescence zoomable)
- [**webpack bundle optimize helper**](https://webpack.jakoblind.no/optimize) : analyseur de bundle qui émet des possibilité d'améliorations pour réduire la 
taille du bundle global. 
- [**bundle-stats**](https://github.com/bundle-stats/bundle-stats) : génère un rapport autour du bundle (taille, assets, modules) et compare le résultat avec 
différents builds. 

Pour poursuivre ce chapitre : [**lazy loading**](#lazy-loading) et [**caching**](#caching).

## Caching
1. [**Output Filenames**](#output-filenames)
2. [**Extracting Boilerplate**](#extracting-boilerplate)
3. [**Module Identifiers**](#module-identifiers)

webpack permet d'empaqueter nos applications modulaires permettant ainsi d'obtenir un dossier ./dist.  
Une fois que le contenu de ce dossier est déposé sur un serveur, un client (ex: browser) pourra ainsi accéder à ce serveur et donc à notre site et 
ses assets.  
Cette dernière étape peut-être complexe, en effet les navigateur utilisent une technique appelé le **caching** permettant aux sites de se charger plus 
vite en diminuant le traffic non essentiel.  
Seulement, ça peut poser problème lorsque l'on tente de mettre une nouvelle version de notre code en ligne !

La suite du guide, va donc se concentrer sur la configuration nécessaire à webpack afin de s'assurer que les fichiers produits lors de la compilation 
pourront rester dans le cache à moins que leur contenu n'ait changé. 

### Output Filenames

Nous le savons déjà l'option "**output**" du fichier ./webpack.congif.js possède un paramètre "**filename**" que l'on peut configurer à l'aide d'éléments de [**substitutions**](https://webpack.js.org/configuration/output/#outputfilename).  
Ainsi, le substitut \[contenthash] permet d'indiquer un hash unique basé sur le contenu de l'asset. A chaque mise à jour, cette valeur va donc changer.  
Allons donc modifier l'option "**output.filename**" et transformons la en `output.filename : [name].[contenthash].js`, ainsi si nous possédons plusieurs points d'entrée 
(*entry points*) nous obtiendrons des noms de fichiers différents + nous obtiendrons des noms de fichiers différents si le point d'entrée a été mis à jour.  

Si aucune modification n'est effectué sur le fichier, la valeur du hash \[contenthash] ne devrait pas évoluer, cependant cela peut arriver.  
En effet, webpack inclut dans les fichiers des points d'entrée des éléments courant (*boilerplate*) comme le **runtime** et le **manifest**, ce qui fait donc évoluer la valeur 
de leur hash.  

Cela n'est pas le cas sur toutes les versions de webpack, cependant, nous allons voir comment éviter cela. 

### Extracting Boilerplate

Comme nous l'avons appris dans la [**partie précédente autour du code splitting**](#code-splitting), l'utilisation du plugin [**SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/) peut être utilisé pour séparer les modules dans des bundles différents. En associant la valeur "**single**" à l'option "**optimization.runtimeChunk**" webpack fournit donc une fonctionnalité permettant de séparer le code runtime du reste.

```
./webpack.config.js

optimization: {
    runtimeChunk: 'single'
}
```

Si on exécute la fonction `npm run build` nous pourrons observer la création d'un nouveau fichier "**./dist/runtime.\[hash].js**" ainsi que le fichier "**./dist/main.\[hash].js**".

Nous l'avons aussi vu dans la partie précédente, il est préférable d'extraire les bouts de codes (*chunks*) qui sont externes à notre développement (ex: lodash, react etc.).  
En effet, ceux-ci sont moins amené à évoluer et il est donc préférable de les laisser en cache. 
Pour cela nous allons utilisé l'option "**cacheGroups**" du "**SplitChunksPlugin**". 

```
./webpack.config.js

optimization: {
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
```

Si on exécute de nouveau la commande `npm run build` nous pouvons voir que notre fichier ./dist/vendors.node_modules_lodash.js a été renommé en ./dist/vendors.\[hash].js.  
Ainsi, nous nous retrouvons plus qu'avec un seul fichier **vendors** pour toutes les modules nodes chargés dans le projet.

Si jamais nous souhaitons obtenir 1 fichier par fournisseur (*vendor*) nous pouvons remettre la configuration suivante : 

```
./webpack.config.js

optimization: {
    runtimeChunk: 'single', 
    splitChunks: {
            chunks: 'all'
        }
    }
}
```

### Module Identifiers

Pour cette partie nous avons besoin d'un nouveau module ./src/print.js.
Nous devons ajouter l'import de ce module dans le fichier ./src/index.js, dans ce même fichier nous allons indiquer qu'au clic sur l'élément généré 
nous appelerons la fonction importée du module print.js. 

Il y a deux résultats possibles, en fonction de la façon d'importer le module que nous utilisons : 
- si nous utilisons la dernière méthode vu dans le chapitre [**code splitting: dynamic imports**](#dynamic-imports) nous verrons qu'un fichier supplémentaire est généré ./dist/src_print.\[hash].js  
- si nous utilisons la méthode simple `import Print from './print.js'` alors le module print.js sera fusionné lors de la compilation dans le fichier ./dist/main.\[hash].js.

Pour expérimenter la section module identifiers, nous sommes obligé d'opter pour la seconde méthode, ainsi nous verrons l'impact qu'aura la modification du fichier ./src/print.js sur la compilation du fichier ./dist/main.\[hash].js.

L'impact attendu est le suivant, lors du build le hash de nos 3 fichiers ./dist/\[main|vendors|runtime].\[hash].js va changer.  
Pour les fichiers main et runtime, c'est logique, cependant le hash du fichier vendors ne devrait pas avoir évolué.  
Lors de mon test de suivi du guide, je n'ai pas constaté de variation du hash des fichiers \[vendors|runtime], nous allons tout de même voir 
comment bloquer la variation pour le fichier ./dist/vendors.\[hash].js. 

Pour cela nous avons besoin d'ajouter un paramètre à l'option "**optimization**" : `optimization.moduleIds: 'deterministic'`.  
Maintenant, malgré les changements de notre code local le hash du fichier ./dist/vendors.js ne devrait varier.  
Pour cela il suffit simplement d'essayer d'éditer le fichier ./src/index.js en enlevant l'import et le call de la fonction du fichier ./src/print.js, ainsi 
nous devrions voir varier le hash des fichiers ./dist/\[main|runtime].\[hash].js mais pas celui du fichier ./dist/vendors.\[hash].js.