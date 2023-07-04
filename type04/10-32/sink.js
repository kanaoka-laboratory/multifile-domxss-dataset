import { source } from './source.js';

const payload = source()

setTimeout('var a=a;' + payload, 1);