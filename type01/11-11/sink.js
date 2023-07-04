import { payload } from './source.js';

var embedElement = document.createElement("embed");
embedElement.src = payload;
document.body.appendChild(embedElement);
