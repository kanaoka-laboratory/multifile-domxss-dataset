import { payload } from './source.js';

var anchor = document.createElement("a");
anchor.href = payload;
anchor.text = "Here's an anchor link";
document.body.appendChild(anchor);
