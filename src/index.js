/* ======================================================== 
    Méthode avec async + import basique du module print.js 
    Résulte en la création d'un seul fichier ./dist/main.js */

import Print from './print';

async function getComponent() {   
    element = document.createElement('div');
    const { default: _ } = await import('lodash');

    element.innerHTML = _.join(['Hello', 'webpack', 'Hot Module Replacement'], ' ');
    element.onclick = Print.bind(null, 'Click HMR');

    return element;
}

let element;

getComponent().then((component) => {
    document.body.appendChild(component);
});


/* Ecoute de la màj des fichiers afin de remplacer le contenu dynamiquement */
if (module.hot) {
    //Self
    module.hot.dispose(function() {
        element.parentNode.removeChild(element);
      });
    module.hot.accept();

    //Dependencies 
    module.hot.accept(
        './print.js', 
        function() {
            console.log('Accepting the updated printMe module!');
            element.parentNode.removeChild(element);
            getComponent().then((component) => {
                document.body.appendChild(component);
            });
        },
        (err, {moduleId, dependencyId}) => {
            console.log('Erreur : ', err, moduleId, dependencyId);
        }
    );
}

/* =====================================================
    Méthode avec async + import dynamique
    Résulte en la création de deux fichiers distincts */

// async function getComponent() {   
//     const element = document.createElement('div');
//     const { default: _ } = await import('lodash');
//     const { default: Print } = await import('./print.js');

//     element.innerHTML = _.join(['Hello', 'webpack', 'Hot Module Replacement'], ' ');
//     element.onclick = Print.bind(null, 'Click HMR!');

//     return element;
// }

// getComponent().then((component) => {
//     document.body.appendChild(component);
// });