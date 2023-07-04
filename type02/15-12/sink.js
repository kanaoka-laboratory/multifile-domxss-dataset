import { content } from './source.js';

window.addEventListener('message', postMessageHandler, false);

var msgObj = eval(content);

if (msgObj.isActive) {
    document.write("PostMessage arrived!");
}