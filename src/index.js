// Import de lodash pour gérer la dépendance du script d'exemple
import _ from 'lodash';

// Import de la fonction printMe du fichier ./print.js
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Bonjour', 'Webpack - Output Management'], ' ');
    
    // Setup btn element
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());