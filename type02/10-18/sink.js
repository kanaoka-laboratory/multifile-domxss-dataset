import { payload } from './source.js';

var div = document.createElement('div');
div.id = 'divEl';
document.documentElement.appendChild(div);

var divEl = document.getElementById('divEl');
divEl.innerHTML = payload;