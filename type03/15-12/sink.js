import { source } from './source.js';

const content = source()

var msgObj = eval(content);

if (msgObj.isActive) {
    document.write("PostMessage arrived!");
}