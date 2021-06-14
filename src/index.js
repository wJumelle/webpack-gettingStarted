/* ======================================================== 
    Méthode avec async + import basique du module print.js 
    Résulte en la création d'un seul fichier ./dist/main.js */

import { cube } from './math.js';

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

async function getComponent() {   
    element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack !',
        '5 cubed is equal to SUPRISE MUTHER : ' + cube(35),
        'It is working ?'
    ].join('\n\n');

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
        if(element) { element.parentNode.removeChild(element) };
      });
    module.hot.accept();

    //Dependencies 
    module.hot.accept(
        './math.js', 
        function() {
            console.log('%c🚀 Update Math.js', "font-weight: bold;");
            if(element) { element.parentNode.removeChild(element) };
            getComponent().then((component) => {
                document.body.appendChild(component);
            });
        },
        (err, {moduleId, dependencyId}) => {
            console.error('Erreur : ', err, moduleId, dependencyId);
        }
    );
}