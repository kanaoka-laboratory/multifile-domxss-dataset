import { source } from './source.js';

const payload = source()

var div = document.createElement('div');
div.addEventListener('click', new Function(payload), false);
document.documentElement.appendChild(div);