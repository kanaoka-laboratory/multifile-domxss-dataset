import { payload } from './source.js';

var linkElement = document.createElement("link");
linkElement.rel = "import";
linkElement.href = payload;
document.body.appendChild(linkElement);