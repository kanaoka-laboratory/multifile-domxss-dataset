import { payload } from './source.js';

var a = document.createElement('a');
a.setAttribute('href', payload);
document.documentElement.appendChild(a);
