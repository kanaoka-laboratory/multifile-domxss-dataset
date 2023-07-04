import { content } from './source.js';

var div = document.createElement('div');
div.innerHTML = content.html;
document.documentElement.appendChild(div);
