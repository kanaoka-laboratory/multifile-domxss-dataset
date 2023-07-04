import { source } from './source.js';

const payload = source()

var div = document.createElement('div');
div.setAttribute('onclick', payload);
document.documentElement.appendChild(div);
