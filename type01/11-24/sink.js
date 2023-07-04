import { payload } from './source.js';

var div = document.createElement('div');
div.setAttribute('onclick', payload);
document.documentElement.appendChild(div);
