import { content } from './source.js';

window.addEventListener('message', postMessageHandler, false);

var div = document.createElement('div');
div.innerHTML = content.html;
document.documentElement.appendChild(div);
