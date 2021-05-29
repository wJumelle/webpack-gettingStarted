/* ======================================================== 
    Méthode avec async + import basique du module print.js 
    Résulte en la création d'un seul fichier ./dist/main.js */

import Print from './print';

async function getComponent() {   
    const element = document.createElement('div');
    const { default: _ } = await import('lodash');

    element.innerHTML = _.join(['Hello', 'webpack', 'Code Splitting Dynamic Import'], ' ');
    element.onclick = Print.bind(null, 'Hello webpack caching curse 2 !');

    return element;
}

getComponent().then((component) => {
    document.body.appendChild(component);
});

/* =====================================================
    Méthode avec async + import dynamique
    Résulte en la création de deux fichiers distincts */

// async function getComponent() {   
//     const element = document.createElement('div');
//     const { default: _ } = await import('lodash');
//     const { default: Print } = await import('./print.js');

//     element.innerHTML = _.join(['Hello', 'webpack', 'Code Splitting Dynamic Import'], ' ');
//     element.onclick = Print.bind(null, 'Hello webpack caching curse !');

//     return element;
// }

// getComponent().then((component) => {
//     document.body.appendChild(component);
// });