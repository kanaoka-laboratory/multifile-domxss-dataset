import { source } from './source.js';

const payload = source()

var area = document.createElement("area");
area.href = payload;
area.textContent = "Here's an area element";
document.body.appendChild(area);
