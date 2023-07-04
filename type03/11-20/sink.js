import { source } from './source.js';

const payload = source()

var a = document.createElement('a');
a.setAttribute('href', payload);
document.documentElement.appendChild(a);
