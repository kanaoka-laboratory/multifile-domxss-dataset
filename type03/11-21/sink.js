import { source } from './source.js';

const payload = source()

var linkElement = document.createElement("link");
linkElement.rel = "import";
linkElement.href = payload;
document.body.appendChild(linkElement);