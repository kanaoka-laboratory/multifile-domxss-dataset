import { source } from './source.js';

const payload = source()

var div = document.createElement('div');
div.id = 'divEl';
document.documentElement.appendChild(div);

var divEl = document.getElementById('divEl');
divEl.innerHTML = payload;