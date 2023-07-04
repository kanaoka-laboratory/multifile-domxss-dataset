import { payload } from './source.js';

setTimeout(function () {
    trigger(payload);
}, 10);

var div = document.createElement('div');
document.documentElement.appendChild(div);

// Sync trigger.
div.innerHTML = payload;

// Async trigger.
function trigger(payload) {
    div.innerHTML = payload;
};
