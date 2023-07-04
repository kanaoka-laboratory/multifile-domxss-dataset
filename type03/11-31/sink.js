import { source } from './source.js';

const payload = source()

var scriptElement = document.createElement("script");
scriptElement.src = payload;
document.body.appendChild(scriptElement);