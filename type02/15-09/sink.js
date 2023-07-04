import { content } from './source.js';

window.addEventListener('message', postMessageHandler, false);

document.write('<scr' + 'ipt src="' + content.url + '"></scr' + 'ipt>');