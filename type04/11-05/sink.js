import { source } from './source.js';

const payload = source()

var baseElement = document.createElement("base");
baseElement.href = payload;
document.head.appendChild(baseElement);

var scriptTag = document.createElement("script");
scriptTag.src = "exploit.js";
document.body.appendChild(scriptTag);
