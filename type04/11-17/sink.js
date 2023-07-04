import { source } from './source.js';

const payload = source()

div.innerHTML = '<div onclick=\'' + payload.replace(/'/g, '"') + '\'>div</div>';
document.documentElement.appendChild(div);
