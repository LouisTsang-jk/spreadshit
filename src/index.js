import { debounce } from 'lodash';
import './style.css'
import printMe from './print'

console.log('index.js init', debounce);
printMe();
function component () {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack', '']);
  element.classList.add('hello');
  return element;
}
document.body.appendChild(component());