import { payload } from './source.js';

var div = document.createElement('div');
div.addEventListener('click', new Function(payload), false);
document.documentElement.appendChild(div);