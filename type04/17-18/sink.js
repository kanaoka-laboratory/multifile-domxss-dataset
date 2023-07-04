import { source } from './source.js';

const payload = source()

setTimeout(function () {
    trigger(payload);
    // Clean up the sessionStorage to avoid side-effects on subsequent tests.
    sessionStorage.clear();
}, 10);

var div = document.createElement('div');
document.documentElement.appendChild(div);

// Sync trigger.
div.innerHTML = payload;

// Async trigger.
function trigger(payload) {
    div.innerHTML = payload;
};