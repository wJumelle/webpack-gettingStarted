import _ from 'lodash';
import './stylesheet/styles.css';
import './stylesheet/styles.scss';
import onePieceLogo from './img/onePiece_2.svg';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Bonjour', 'Webpack'], ' ');
    element.classList.add('hello');
    
    //Create image
    const myImage = new Image();
    myImage.src = onePieceLogo;
    element.appendChild(myImage);

    return element;
}

document.body.appendChild(component());