// Import de lodash pour gérer la dépendance du script d'exemple
import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Bonjour', 'Webpack - Code splitting - Single entry point'], ' ');

    return element;
}

document.body.appendChild(component());