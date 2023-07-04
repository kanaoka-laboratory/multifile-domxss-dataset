import { payload } from './source.js';

div.innerHTML = '<div onclick=\'' + payload.replace(/'/g, '"') + '\'>div</div>';
document.documentElement.appendChild(div);
