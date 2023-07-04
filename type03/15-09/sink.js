import { source } from './source.js';

const content = source()

document.write('<scr' + 'ipt src="' + content.url + '"></scr' + 'ipt>');