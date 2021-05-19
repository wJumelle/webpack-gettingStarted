import _ from 'lodash';
import './stylesheet/styles.css';
import './stylesheet/styles.scss';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Bonjour', 'Webpack'], ' ');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());