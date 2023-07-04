import { source } from './source.js';

const payload = source()

var f = new Function(payload);
f();
