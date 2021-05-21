// Import de lodash pour gérer la dépendance du script d'exemple
import _ from 'lodash';

// Import des feuilles de styles CSS et SCSS
import './stylesheet/styles.css';
import './stylesheet/styles.scss';

// Import de l'image
import onePieceLogo from './img/onePiece_2.svg';

// Import des fichiers de données aux formats JSON, CSV et XML
import jsonDatas from './datas/data.json';
import csvDatas from './datas/data.csv';
import xmlDatas from './datas/data.xml';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Bonjour', 'Webpack'], ' ');
    element.classList.add('hello');
    
    // Create image
    const myImage = new Image();
    myImage.src = onePieceLogo;
    element.appendChild(myImage);

    // We log datas processed by loaders
    console.log(jsonDatas);
    console.log(csvDatas);
    console.log(xmlDatas);

    return element;
}

document.body.appendChild(component());