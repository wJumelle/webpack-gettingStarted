const { file, parse } = require('./globals.js');

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack', 'ici', 'Wilfried', 'Jumelle'], ' ');

    // Assume we are in the context of `window`
    this.alert("Hmmm, this probably isn't a great idea...");

    return element;
}

document.body.appendChild(component());