import { get } from 'lodash';
export default function printMe () {
  console.log('****')
  console.log('I get called from print.js!');
  console.log('get>', get);
}