import { source } from './source.js';

const payload = source()

var iframe = document.createElement("iframe");
iframe.src = payload;
document.body.appendChild(iframe);
