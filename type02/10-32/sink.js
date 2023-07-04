import { payload } from './source.js';

setTimeout('var a=a;' + payload, 1);