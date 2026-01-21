import './style.css'

//import './bases/01-const-let.ts';
//import './bases/02-template-string.ts';
//import './bases/03-object-literal';
//import './bases/04-arrays';
//import './bases/05-functions';
//import './bases/06-obj-destructuring';
//import './bases/07-array-destructuring';
//import './bases/08-imp-exp';
//import { getHeroesByOwner } from './bases/08-imp-exp-exercise';
//import type { Owner } from './data/heroes.data';
//import './bases/09-promises';
//import './bases/09-custom-promise';
//import { getData } from './bases/09-custom-promise';
//import './bases/10-fetch-api';
import './bases/11-async-await';
import { getImageUrl } from './bases/11-async-await';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola mundo</h1>
  </div>
`
//const owner: Owner = 'Marvel';
//const heroes = getHeroesByOwner(owner);
//console.log(heroes);

/*getData('http://www.google.es').then(value => {
    console.log('VALUE:', value);
});*/

getImageUrl()
  .then(url => {
    console.log('URL de la imagen:', url);
  })
  .catch(error => {
    console.error('Error obteniendo imagen:', error);
  });