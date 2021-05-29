/* Methode sans async */ 
// function getComponent() {   
//     return import('lodash').then(({default: _}) => {
//         const element = document.createElement('div');

//         element.innerHTML = _.join(['Hello', 'webpack', 'Code Splitting Dynamic Import'], ' ');

//         return element;
//     }).catch((error) => 'An error occured while loading the component');
// }

// getComponent().then((component) => {
//     document.body.appendChild(component);
// });

/* Méthode avec async */
async function getComponent() {   
    const element = document.createElement('div');
    const { default: _ } = await import('lodash');

    element.innerHTML = _.join(['Hello', 'webpack', 'Code Splitting Dynamic Import'], ' ');

    return element;
}

getComponent().then((component) => {
    document.body.appendChild(component);
});