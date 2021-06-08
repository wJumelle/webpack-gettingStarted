/* ======================================================== 
    Méthode avec async + import basique du module print.js 
    Résulte en la création d'un seul fichier ./dist/main.js */

import Print from './print';

async function getComponent() {   
    const element = document.createElement('div');
    const { default: _ } = await import('lodash');

    element.innerHTML = _.join(['Hello', 'webpack', 'Hot Module Replacement'], ' ');
    element.onclick = Print.bind(null, 'Click HMR');

    return element;
}

getComponent().then((component) => {
    document.body.appendChild(component);
});


/* Dans la partie autour de l'HRM, il est conseillé d'écrire ce bout de code afin d'écouter les màjs du fichier ./src/print.js 
    ici cela ne semble pas être nécessaire */
if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        Print();
    })
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