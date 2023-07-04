import { source } from './source.js';

const content = source()

var div = document.createElement('div');
div.innerHTML = content.html;
document.documentElement.appendChild(div);
