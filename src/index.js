import 'babel-polyfill';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack', 'ici', 'Wilfried', 'Jumelle'], ' ');

    return element;
}

document.body.appendChild(component());