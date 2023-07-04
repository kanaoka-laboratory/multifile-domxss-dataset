import { source } from './source.js';

const payload = source()

var embedElement = document.createElement("embed");
embedElement.src = payload;
document.body.appendChild(embedElement);
